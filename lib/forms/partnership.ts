import { z } from "zod";

export const organizationTypes = [
  "ngo",
  "government",
  "corporate",
  "media",
  "other",
] as const;

export const partnershipServiceOptions = [
  "corporate-wellness",
  "nutrition-communication",
  "sbcc",
  "institutional-program",
  "research-advisory",
  "other",
] as const;

export const partnershipFormSchema = z.object({
  organization: z.string().trim().min(2, "Organization name is required"),
  contactPerson: z.string().trim().min(2, "Contact person is required"),
  email: z.string().trim().email("Enter a valid email"),
  phone: z.string().trim().min(7, "Phone number is required"),
  organizationType: z.enum(organizationTypes, {
    message: "Select an organization type",
  }),
  location: z.string().trim().min(2, "Location is required"),
  serviceRequired: z.enum(partnershipServiceOptions, {
    message: "Select a service",
  }),
  projectDescription: z
    .string()
    .trim()
    .min(20, "Please describe the project (at least 20 characters)"),
  timeline: z.string().trim().min(2, "Timeline is required"),
  budget: z.string().trim().optional(),
  message: z.string().trim().optional(),
  /** Honeypot — must stay empty */
  website: z.string().max(0).optional(),
});

export type PartnershipFormValues = z.infer<typeof partnershipFormSchema>;
