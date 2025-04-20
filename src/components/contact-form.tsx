"use client";

import type React from "react";

import { useState } from "react";
import { sendContactEmail } from "@/lib/actions";
import { Loader2 } from "lucide-react";
import {
	ContactFormSchema,
	type FormState,
	type FormErrors,
} from "@/lib/schemas";
import { ZodError } from "zod";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./ui/select";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export default function ContactForm() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [formState, setFormState] = useState<FormState>({});
	const { executeRecaptcha } = useGoogleReCaptcha();

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	// Check if reCAPTCHA site key is available
	const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
	const isTestKey =
		!recaptchaSiteKey ||
		recaptchaSiteKey === "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));

		// Clear field-specific errors when user types
		if (formState.errors && formState.errors[name as keyof FormErrors]) {
			setFormState((prev) => ({
				...prev,
				errors: {
					...prev.errors,
					[name]: undefined,
				},
			}));
		}
	};

	const handleSelectChange = (value: string) => {
		setFormData((prev) => ({ ...prev, subject: value }));

		// Clear field-specific errors when user selects
		if (formState.errors?.subject) {
			setFormState((prev) => ({
				...prev,
				errors: {
					...prev.errors,
					subject: undefined,
				},
			}));
		}
	};

	const validateForm = (recaptchaToken?: string) => {
		try {
			// Include recaptchaToken in validation if not using test key
			const dataToValidate = {
				...formData,
				recaptchaToken: !isTestKey ? recaptchaToken || "" : undefined,
			};

			// Validate with Zod schema
			ContactFormSchema.parse(dataToValidate);
			return { success: true, errors: undefined };
		} catch (error: unknown) {
			// Format Zod errors
			if (error instanceof ZodError) {
				const fieldErrors: FormErrors = {};

				error.errors.forEach((err) => {
					const field = err.path[0];
					if (!fieldErrors[field as keyof FormErrors]) {
						fieldErrors[field as keyof FormErrors] = [];
					}
					fieldErrors[field as keyof FormErrors]?.push(err.message);
				});

				return { success: false, errors: fieldErrors };
			}

			return {
				success: false,
				errors: { message: ["An unexpected error occurred"] },
			};
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!executeRecaptcha) {
			toast.error("reCAPTCHA not available");
			return;
		}

		setIsSubmitting(true);
		setFormState({});

		try {
			// Execute reCAPTCHA with action name 'contact'
			const token = await executeRecaptcha("contact");

			// Client-side validation with Zod
			const validation = validateForm(token);
			if (!validation.success) {
				setFormState({ errors: validation.errors });
				setIsSubmitting(false);
				return;
			}

			const result = await sendContactEmail({
				...formData,
				recaptchaToken: token || "",
			});

			if (result.success) {
				toast.success(
					result.message || "We'll get back to you as soon as possible."
				);

				// Reset form
				setFormData({
					name: "",
					email: "",
					subject: "",
					message: "",
				});

				setFormState({ success: true });
			} else {
				toast.error(
					result.message || "Something went wrong. Please try again."
				);

				// Set form errors from server
				setFormState({ errors: result.errors });
			}
		} catch (error: unknown) {
			toast.error("Something went wrong. Please try again.");
			console.error(error);
		} finally {
			setIsSubmitting(false);
		}
	};

	const subjectOptions = [
		{ value: "", label: "Select a subject" },
		{ value: "General Inquiry", label: "General Inquiry" },
		{ value: "Topic Suggestion", label: "Topic Suggestion" },
		{ value: "Feedback", label: "Feedback" },
		{ value: "Collaboration", label: "Collaboration" },
		{ value: "Other", label: "Other" },
	];

	return (
		<form onSubmit={handleSubmit} className="space-y-6">
			<div className="grid grid-cols-1 gap-6">
				<div className="bg-[#0F0F0F] rounded-md p-4">
					<Label htmlFor="name" className="block text-sm font-medium mb-1">
						Name <span className="text-red-500">*</span>
					</Label>
					<Input
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
						className={`w-full p-3 rounded-md border ${
							formState.errors?.name ? "border-red-500" : "border-input"
						} bg-background`}
						placeholder="Your name"
					/>
					{formState.errors?.name && (
						<p className="mt-1 text-sm text-red-500">
							{formState.errors.name[0]}
						</p>
					)}
				</div>

				<div className="bg-[#0F0F0F] rounded-md p-4">
					<Label htmlFor="email" className="block text-sm font-medium mb-1">
						Email <span className="text-red-500">*</span>
					</Label>
					<Input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						className={`w-full p-3 rounded-md border ${
							formState.errors?.email ? "border-red-500" : "border-input"
						} bg-background`}
						placeholder="your.email@example.com"
					/>
					{formState.errors?.email && (
						<p className="mt-1 text-sm text-red-500">
							{formState.errors.email[0]}
						</p>
					)}
				</div>

				<div className="bg-[#0F0F0F] rounded-md p-4">
					<Label htmlFor="subject" className="block text-sm font-medium mb-1">
						Subject <span className="text-red-500">*</span>
					</Label>
					<Select
						name="subject"
						value={formData.subject}
						onValueChange={handleSelectChange}
					>
						<SelectTrigger
							className={`w-full p-3 rounded-md border ${
								formState.errors?.subject ? "border-red-500" : "border-input"
							} bg-background`}
						>
							<SelectValue placeholder="Select a subject" />
						</SelectTrigger>
						<SelectContent className="border-border">
							{subjectOptions.map(
								(option) =>
									option.value && (
										<SelectItem key={option.value} value={option.value}>
											{option.label}
										</SelectItem>
									)
							)}
						</SelectContent>
					</Select>
					{formState.errors?.subject && (
						<p className="mt-1 text-sm text-red-500">
							{formState.errors.subject[0]}
						</p>
					)}
				</div>

				<div className="bg-[#0F0F0F] rounded-md p-4">
					<Label htmlFor="message" className="block text-sm font-medium mb-1">
						Message <span className="text-red-500">*</span>
					</Label>
					<Textarea
						id="message"
						name="message"
						value={formData.message}
						onChange={handleChange}
						className={`w-full p-3 rounded-md border h-40 ${
							formState.errors?.message ? "border-red-500" : "border-input"
						} bg-background resize-none`}
						placeholder="Your message..."
					/>
					{formState.errors?.message && (
						<p className="mt-1 text-sm text-red-500">
							{formState.errors.message[0]}
						</p>
					)}
				</div>

				{formState.errors?.recaptchaToken && (
					<p className="mt-1 text-sm text-red-500 text-center">
						{formState.errors.recaptchaToken[0]}
					</p>
				)}

				{isTestKey && (
					<div className="text-sm text-amber-500">
						<p>
							Using reCAPTCHA test key. For production, please add your own
							reCAPTCHA site key as an environment variable.
						</p>
					</div>
				)}
			</div>

			<Button
				type="submit"
				disabled={isSubmitting}
				className="w-full cta-button flex items-center justify-center"
			>
				{isSubmitting ? (
					<>
						<Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
					</>
				) : (
					"Send Message"
				)}
			</Button>
		</form>
	);
}
