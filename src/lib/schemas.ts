import { z } from "zod"

export const ContactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" })
    .max(100, { message: "Name must be less than 100 characters" })
    .trim(),
  email: z.string().email({ message: "Please enter a valid email address" }).trim(),
  subject: z
    .string()
    .min(1, { message: "Please select a subject" })
    .max(100, { message: "Subject must be less than 100 characters" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long" })
    .max(5000, { message: "Message must be less than 5000 characters" })
    .trim(),
  recaptchaToken: z.string().optional(),
})

export type ContactFormData = z.infer<typeof ContactFormSchema>

export type FormErrors = {
  name?: string[]
  email?: string[]
  subject?: string[]
  message?: string[]
  recaptchaToken?: string[]
}

export type FormState = {
  errors?: FormErrors
  message?: string
  success?: boolean
}
