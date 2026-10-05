export const serviceSlugs = [
  "nutrition-counseling",
  "weight-management",
  "diabetes-nutrition",
  "hypertension-nutrition",
  "cholesterol-nutrition",
  "personalized-meal-planning",
] as const;

export type ServiceSlug = (typeof serviceSlugs)[number];

export function isServiceSlug(value: string): value is ServiceSlug {
  return (serviceSlugs as readonly string[]).includes(value);
}

export const serviceTones: Record<
  ServiceSlug,
  "green" | "blue" | "orange"
> = {
  "nutrition-counseling": "green",
  "weight-management": "orange",
  "diabetes-nutrition": "blue",
  "hypertension-nutrition": "green",
  "cholesterol-nutrition": "blue",
  "personalized-meal-planning": "orange",
};
