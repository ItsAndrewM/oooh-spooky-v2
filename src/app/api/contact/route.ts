import { NextResponse } from "next/server"
import sgMail from "@sendgrid/mail"
import { ContactFormSchema } from "@/lib/schemas"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate with Zod schema
    try {
      ContactFormSchema.parse(body)
    } catch (error: any) {
      // Format Zod errors
      if (error.errors) {
        const fieldErrors: Record<string, string[]> = {}

        error.errors.forEach((err: any) => {
          const field = err.path[0]
          if (!fieldErrors[field]) {
            fieldErrors[field] = []
          }
          fieldErrors[field].push(err.message)
        })

        return NextResponse.json(
          {
            success: false,
            errors: fieldErrors,
            message: "Validation failed. Please check the form for errors.",
          },
          { status: 400 },
        )
      }

      return NextResponse.json({ success: false, message: "Invalid form data" }, { status: 400 })
    }

    const { name, email, subject, message, recaptchaToken } = body

    // Verify reCAPTCHA if token is provided and secret key exists
    const recaptchaSecretKey = process.env.RECAPTCHA_SECRET_KEY
    if (recaptchaToken && recaptchaSecretKey) {
      try {
        const recaptchaResponse = await verifyRecaptcha(recaptchaToken, recaptchaSecretKey)

        if (!recaptchaResponse.success) {
          return NextResponse.json(
            {
              success: false,
              errors: { recaptchaToken: ["reCAPTCHA verification failed. Please try again."] },
              message: "reCAPTCHA verification failed. Please try again.",
            },
            { status: 400 },
          )
        }
      } catch (error) {
        console.error("reCAPTCHA verification error:", error)
        return NextResponse.json(
          {
            success: false,
            errors: { recaptchaToken: ["reCAPTCHA verification failed. Please try again."] },
            message: "reCAPTCHA verification failed. Please try again.",
          },
          { status: 400 },
        )
      }
    }

    // Check for API key
    const apiKey = process.env.SENDGRID_API_KEY

    if (!apiKey) {
      // For development without API key, log the message and return success
      console.log("SendGrid API key not set. Would send the following email:")
      console.log(`To: hello@ooohspooky.com`)
      console.log(`From: noreply@ooohspooky.com`)
      console.log(`Reply-To: ${email}`)
      console.log(`Subject: [Contact Form] ${subject}`)
      console.log(`Name: ${name}`)
      console.log(`Email: ${email}`)
      console.log(`Message: ${message}`)

      // Return success even though email wasn't actually sent
      return NextResponse.json({
        success: true,
        message: "Development mode: Email would be sent if API key was configured.",
      })
    }

    // Initialize SendGrid
    sgMail.setApiKey(apiKey)

    // Set up email data
    const msg = {
      to: "hello@ooohspooky.com", // Replace with your email
      from: "noreply@ooohspooky.com", // Replace with your verified sender
      replyTo: email,
      subject: `[Contact Form] ${subject}`,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
      html: `
<strong>Name:</strong> ${name}<br>
<strong>Email:</strong> ${email}<br>
<strong>Subject:</strong> ${subject}<br><br>
<strong>Message:</strong><br>
${message.replace(/\n/g, "<br>")}
      `,
    }

    // Send the email
    await sgMail.send(msg)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ success: false, message: "Failed to send email" }, { status: 500 })
  }
}

async function verifyRecaptcha(token: string, secretKey: string) {
  const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      secret: secretKey,
      response: token,
    }),
  })

  return await response.json()
}
