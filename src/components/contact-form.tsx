"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { sendContactEmail } from "@/lib/actions"
import { useToast } from "@/hooks/use-toast"
import { Loader2 } from "lucide-react"
import ReCAPTCHA from "react-google-recaptcha"
import { ContactFormSchema, type FormState, type FormErrors } from "@/lib/schemas"

export default function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const recaptchaRef = useRef<ReCAPTCHA>(null)
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false)
  const [formState, setFormState] = useState<FormState>({})

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  // Check if reCAPTCHA site key is available
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // Test key
  const isTestKey = recaptchaSiteKey === "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"

  useEffect(() => {
    // Add a small delay to ensure the reCAPTCHA script has loaded
    const timer = setTimeout(() => {
      setRecaptchaLoaded(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear field-specific errors when user types
    if (formState.errors && formState.errors[name as keyof FormErrors]) {
      setFormState((prev) => ({
        ...prev,
        errors: {
          ...prev.errors,
          [name]: undefined,
        },
      }))
    }
  }

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token)

    // Clear reCAPTCHA error if it exists
    if (formState.errors?.recaptchaToken) {
      setFormState((prev) => ({
        ...prev,
        errors: {
          ...prev.errors,
          recaptchaToken: undefined,
        },
      }))
    }
  }

  const validateForm = () => {
    try {
      // Include recaptchaToken in validation if not using test key
      const dataToValidate = {
        ...formData,
        recaptchaToken: !isTestKey ? captchaToken || "" : undefined,
      }

      // Validate with Zod schema
      ContactFormSchema.parse(dataToValidate)
      return { success: true, errors: undefined }
    } catch (error: any) {
      // Format Zod errors
      if (error.errors) {
        const fieldErrors: FormErrors = {}

        error.errors.forEach((err: any) => {
          const field = err.path[0]
          if (!fieldErrors[field as keyof FormErrors]) {
            fieldErrors[field as keyof FormErrors] = []
          }
          fieldErrors[field as keyof FormErrors]?.push(err.message)
        })

        return { success: false, errors: fieldErrors }
      }

      return {
        success: false,
        errors: { message: ["An unexpected error occurred"] },
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Client-side validation with Zod
    const validation = validateForm()
    if (!validation.success) {
      setFormState({ errors: validation.errors })
      return
    }

    setIsSubmitting(true)
    setFormState({})

    try {
      const result = await sendContactEmail({
        ...formData,
        recaptchaToken: captchaToken || "",
      })

      if (result.success) {
        toast({
          title: "Message Received!",
          description: result.message || "We'll get back to you as soon as possible.",
          variant: "default",
        })

        // Reset form and reCAPTCHA
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })

        if (recaptchaRef.current) {
          recaptchaRef.current.reset()
        }
        setCaptchaToken(null)
        setFormState({ success: true })
      } else {
        toast({
          title: "Error",
          description: result.message || "Something went wrong. Please try again.",
          variant: "destructive",
        })

        // Set form errors from server
        setFormState({ errors: result.errors })

        // Reset reCAPTCHA on error
        if (recaptchaRef.current) {
          recaptchaRef.current.reset()
        }
        setCaptchaToken(null)
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })

      // Reset reCAPTCHA on error
      if (recaptchaRef.current) {
        recaptchaRef.current.reset()
      }
      setCaptchaToken(null)
    } finally {
      setIsSubmitting(false)
    }
  }

  const subjectOptions = [
    { value: "", label: "Select a subject" },
    { value: "General Inquiry", label: "General Inquiry" },
    { value: "Topic Suggestion", label: "Topic Suggestion" },
    { value: "Feedback", label: "Feedback" },
    { value: "Collaboration", label: "Collaboration" },
    { value: "Other", label: "Other" },
  ]

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <input
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
          {formState.errors?.name && <p className="mt-1 text-sm text-red-500">{formState.errors.name[0]}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
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
          {formState.errors?.email && <p className="mt-1 text-sm text-red-500">{formState.errors.email[0]}</p>}
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-1">
            Subject <span className="text-red-500">*</span>
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`w-full p-3 rounded-md border ${
              formState.errors?.subject ? "border-red-500" : "border-input"
            } bg-background`}
          >
            {subjectOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {formState.errors?.subject && <p className="mt-1 text-sm text-red-500">{formState.errors.subject[0]}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className={`w-full p-3 rounded-md border ${
              formState.errors?.message ? "border-red-500" : "border-input"
            } bg-background resize-none`}
            placeholder="Your message..."
          ></textarea>
          {formState.errors?.message && <p className="mt-1 text-sm text-red-500">{formState.errors.message[0]}</p>}
        </div>

        {recaptchaLoaded && (
          <div className="flex flex-col items-center">
            <ReCAPTCHA ref={recaptchaRef} sitekey={recaptchaSiteKey} onChange={handleCaptchaChange} theme="dark" />
            {formState.errors?.recaptchaToken && (
              <p className="mt-1 text-sm text-red-500">{formState.errors.recaptchaToken[0]}</p>
            )}
          </div>
        )}

        {isTestKey && (
          <div className="text-sm text-amber-500">
            <p>
              Using reCAPTCHA test key. For production, please add your own reCAPTCHA site key as an environment
              variable.
            </p>
          </div>
        )}
      </div>

      <button type="submit" disabled={isSubmitting} className="w-full cta-button flex items-center justify-center">
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  )
}
