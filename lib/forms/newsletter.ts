import { z } from "zod";

export const newsletterFormSchema = z.object({
  email: z.string().trim().email("Enter a valid email"),
  /** Honeypot — must stay empty */
  website: z.string().max(0).optional(),
});

export type NewsletterFormValues = z.infer<typeof newsletterFormSchema>;
