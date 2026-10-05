import { z } from "zod";

export const mediaTypes = [
  "tv",
  "radio",
  "podcast",
  "print",
  "online",
  "other",
] as const;

export const inquiryTypes = [
  "interview",
  "expert-quote",
  "press",
  "appearance",
  "collaboration",
  "other",
] as const;

export const mediaFormSchema = z.object({
  name: z.string().trim().min(2, "Name is required"),
  mediaOrganization: z.string().trim().min(2, "Media organization is required"),
  email: z.string().trim().email("Enter a valid email"),
  phone: z.string().trim().min(7, "Phone number is required"),
  mediaType: z.enum(mediaTypes, { message: "Select a media type" }),
  inquiryType: z.enum(inquiryTypes, { message: "Select an inquiry type" }),
  deadline: z.string().trim().min(2, "Deadline is required"),
  message: z.string().trim().min(10, "Please include a short message"),
  website: z.string().max(0).optional(),
});

export type MediaFormValues = z.infer<typeof mediaFormSchema>;
