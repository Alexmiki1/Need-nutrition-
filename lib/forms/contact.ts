import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Name is required"),
  email: z.string().trim().email("Enter a valid email"),
  phone: z.string().trim().min(7, "Phone number is required"),
  subject: z.string().trim().min(2, "Subject is required"),
  message: z.string().trim().min(10, "Please include a message (at least 10 characters)"),
  /** Honeypot — must stay empty */
  website: z.string().max(0).optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
