import { z } from "zod";

export const consultationTypes = [
  "nutrition-counseling",
  "weight-management",
  "diabetes-nutrition",
  "hypertension-nutrition",
  "cholesterol-nutrition",
  "personalized-meal-planning",
  "other",
] as const;

export const consultationFormSchema = z.object({
  name: z.string().trim().min(2, "Name is required"),
  email: z.string().trim().email("Enter a valid email"),
  phone: z.string().trim().min(7, "Phone number is required"),
  consultationType: z.enum(consultationTypes, {
    message: "Select a consultation type",
  }),
  age: z.string().trim().optional(),
  preferredDate: z.string().trim().min(2, "Preferred date is required"),
  preferredTime: z.string().trim().min(2, "Preferred time is required"),
  message: z.string().trim().min(10, "Please describe your goals (at least 10 characters)"),
  /** Honeypot — must stay empty */
  website: z.string().max(0).optional(),
});

export type ConsultationFormValues = z.infer<typeof consultationFormSchema>;
