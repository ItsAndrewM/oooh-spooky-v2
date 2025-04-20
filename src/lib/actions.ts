"use server";

import sgMail from "@sendgrid/mail";
import {
	ContactFormSchema,
	type ContactFormData,
	type FormState,
} from "@/lib/schemas";
import { ZodError } from "zod";

export async function sendContactEmail(
	data: ContactFormData
): Promise<FormState> {
	// Validate with Zod schema
	try {
		// Validate the form data with Zod
		ContactFormSchema.parse(data);
	} catch (error: unknown) {
		// Format Zod errors
		if (error instanceof ZodError) {
			const fieldErrors: Record<string, string[]> = {};

			error.errors.forEach((err) => {
				const field = err.path[0];
				if (!fieldErrors[field]) {
					fieldErrors[field] = [];
				}
				fieldErrors[field].push(err.message);
			});

			return {
				success: false,
				errors: fieldErrors,
				message: "Validation failed. Please check the form for errors.",
			};
		}

		return {
			success: false,
			message: "An unexpected error occurred during validation.",
		};
	}

	// Verify reCAPTCHA if token is provided and secret key exists
	const recaptchaSecretKey = process.env.RECAPTCHA_SECRET_KEY;
	if (data.recaptchaToken && recaptchaSecretKey) {
		try {
			const recaptchaResponse = await verifyRecaptcha(
				data.recaptchaToken,
				recaptchaSecretKey
			);

			if (!recaptchaResponse.success) {
				return {
					success: false,
					errors: {
						recaptchaToken: [
							"reCAPTCHA verification failed. Please try again.",
						],
					},
					message: "reCAPTCHA verification failed. Please try again.",
				};
			}
		} catch (error) {
			console.error("reCAPTCHA verification error:", error);
			return {
				success: false,
				errors: {
					recaptchaToken: ["reCAPTCHA verification failed. Please try again."],
				},
				message: "reCAPTCHA verification failed. Please try again.",
			};
		}
	}

	try {
		// Check for API key
		const apiKey = process.env.SENDGRID_API_KEY;

		if (!apiKey) {
			// For development without API key, log the message and return success
			console.log("SendGrid API key not set. Would send the following email:");
			console.log(`To: hello@ooohspooky.com`);
			console.log(`From: noreply@ooohspooky.com`);
			console.log(`Reply-To: ${data.email}`);
			console.log(`Subject: [Contact Form] ${data.subject}`);
			console.log(`Name: ${data.name}`);
			console.log(`Email: ${data.email}`);
			console.log(`Message: ${data.message}`);

			// Return success even though email wasn't actually sent
			return {
				success: true,
				message:
					"Development mode: Email would be sent if API key was configured.",
			};
		}

		// If API key exists, proceed with sending the email
		sgMail.setApiKey(apiKey);

		// Set up email data
		const msg = {
			to: "and4monium@gmail.com", // Replace with your email
			from: "info@ooohspooky.com", // Replace with your verified sender
			replyTo: data.email,
			subject: `[Contact Form] ${data.subject}`,
			text: `
Name: ${data.name}
Email: ${data.email}
Subject: ${data.subject}

Message:
${data.message}
      `,
			html: `
<strong>Name:</strong> ${data.name}<br>
<strong>Email:</strong> ${data.email}<br>
<strong>Subject:</strong> ${data.subject}<br><br>
<strong>Message:</strong><br>
${data.message.replace(/\n/g, "<br>")}
      `,
		};

		// Send the email
		await sgMail.send(msg);

		return {
			success: true,
		};
	} catch (error) {
		console.error("Error sending email:", error);
		return {
			success: false,
			message: "Failed to send email. Please try again later.",
		};
	}
}

async function verifyRecaptcha(token: string, secretKey: string) {
	const response = await fetch(
		"https://www.google.com/recaptcha/api/siteverify",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
			body: new URLSearchParams({
				secret: secretKey,
				response: token,
			}),
		}
	);

	return await response.json();
}
