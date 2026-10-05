"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import {
  organizationTypes,
  partnershipFormSchema,
  partnershipServiceOptions,
  type PartnershipFormValues,
} from "@/lib/forms/partnership";
import { cn } from "@/lib/cn";

const empty: PartnershipFormValues = {
  organization: "",
  contactPerson: "",
  email: "",
  phone: "",
  organizationType: "ngo",
  location: "",
  serviceRequired: "corporate-wellness",
  projectDescription: "",
  timeline: "",
  budget: "",
  message: "",
  website: "",
};

export function PartnershipForm() {
  const t = useTranslations("Partnerships.form");
  const [values, setValues] = useState<PartnershipFormValues>(empty);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [submitting, setSubmitting] = useState(false);

  function update<K extends keyof PartnershipFormValues>(
    key: K,
    value: PartnershipFormValues[K],
  ) {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      const next = { ...prev };
      delete next[key];
      return next;
    });
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("idle");

    const parsed = partnershipFormSchema.safeParse(values);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (typeof key === "string" && !fieldErrors[key]) {
          fieldErrors[key] = issue.message;
        }
      }
      setErrors(fieldErrors);
      setStatus("error");
      return;
    }

    if (parsed.data.website) {
      setStatus("success");
      return;
    }

    setSubmitting(true);
    try {
      // API wiring lands in Phase 11 — POST /api/forms/partnership
      const response = await fetch("/api/forms/partnership", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setStatus("success");
      setValues(empty);
      setErrors({});
    } catch {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-need border border-need-border bg-white p-6 shadow-card sm:p-8"
      noValidate
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-need-ink">{t("title")}</h2>
        <p className="mt-2 text-sm text-need-muted">{t("subtitle")}</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="organization"
          label={t("organization")}
          required
          error={errors.organization}
        >
          <input
            id="organization"
            name="organization"
            autoComplete="organization"
            value={values.organization}
            onChange={(e) => update("organization", e.target.value)}
            className={inputClass(errors.organization)}
          />
        </Field>

        <Field
          id="contactPerson"
          label={t("contactPerson")}
          required
          error={errors.contactPerson}
        >
          <input
            id="contactPerson"
            name="contactPerson"
            autoComplete="name"
            value={values.contactPerson}
            onChange={(e) => update("contactPerson", e.target.value)}
            className={inputClass(errors.contactPerson)}
          />
        </Field>

        <Field id="email" label={t("email")} required error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            className={inputClass(errors.email)}
          />
        </Field>

        <Field id="phone" label={t("phone")} required error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={inputClass(errors.phone)}
          />
        </Field>

        <Field
          id="organizationType"
          label={t("organizationType")}
          required
          error={errors.organizationType}
        >
          <select
            id="organizationType"
            name="organizationType"
            value={values.organizationType}
            onChange={(e) =>
              update(
                "organizationType",
                e.target.value as PartnershipFormValues["organizationType"],
              )
            }
            className={inputClass(errors.organizationType)}
          >
            {organizationTypes.map((type) => (
              <option key={type} value={type}>
                {t(`organizationTypes.${type}`)}
              </option>
            ))}
          </select>
        </Field>

        <Field
          id="location"
          label={t("location")}
          required
          error={errors.location}
        >
          <input
            id="location"
            name="location"
            value={values.location}
            onChange={(e) => update("location", e.target.value)}
            className={inputClass(errors.location)}
          />
        </Field>

        <Field
          id="serviceRequired"
          label={t("serviceRequired")}
          required
          error={errors.serviceRequired}
          className="sm:col-span-2"
        >
          <select
            id="serviceRequired"
            name="serviceRequired"
            value={values.serviceRequired}
            onChange={(e) =>
              update(
                "serviceRequired",
                e.target.value as PartnershipFormValues["serviceRequired"],
              )
            }
            className={inputClass(errors.serviceRequired)}
          >
            {partnershipServiceOptions.map((service) => (
              <option key={service} value={service}>
                {t(`services.${service}`)}
              </option>
            ))}
          </select>
        </Field>

        <Field
          id="projectDescription"
          label={t("projectDescription")}
          required
          error={errors.projectDescription}
          className="sm:col-span-2"
        >
          <textarea
            id="projectDescription"
            name="projectDescription"
            rows={4}
            value={values.projectDescription}
            onChange={(e) => update("projectDescription", e.target.value)}
            className={inputClass(errors.projectDescription)}
          />
        </Field>

        <Field
          id="timeline"
          label={t("timeline")}
          required
          error={errors.timeline}
        >
          <input
            id="timeline"
            name="timeline"
            value={values.timeline}
            onChange={(e) => update("timeline", e.target.value)}
            className={inputClass(errors.timeline)}
          />
        </Field>

        <Field id="budget" label={t("budget")} error={errors.budget}>
          <input
            id="budget"
            name="budget"
            value={values.budget ?? ""}
            onChange={(e) => update("budget", e.target.value)}
            className={inputClass(errors.budget)}
          />
        </Field>

        <Field
          id="message"
          label={t("message")}
          error={errors.message}
          className="sm:col-span-2"
        >
          <textarea
            id="message"
            name="message"
            rows={3}
            value={values.message ?? ""}
            onChange={(e) => update("message", e.target.value)}
            className={inputClass(errors.message)}
          />
        </Field>
      </div>

      {/* Honeypot */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={values.website ?? ""}
          onChange={(e) => update("website", e.target.value)}
        />
      </div>

      {status === "success" ? (
        <p className="mt-5 rounded-card bg-need-green-100 px-4 py-3 text-sm text-need-green-900" role="status">
          {t("success")}
        </p>
      ) : null}
      {status === "error" && Object.keys(errors).length > 0 ? (
        <p className="mt-5 rounded-card bg-need-orange-100 px-4 py-3 text-sm text-need-orange" role="alert">
          {t("error")}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={submitting}
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-need-orange px-6 py-3 text-sm font-semibold text-white transition hover:bg-need-orange-hover disabled:opacity-60 sm:w-auto"
      >
        {submitting ? t("submitting") : t("submit")}
      </button>
      <p className="mt-3 text-xs text-need-muted">{t("note")}</p>
    </form>
  );
}

function Field({
  id,
  label,
  required,
  error,
  children,
  className,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-need-ink">
        {label}
        {required ? <span className="text-need-orange"> *</span> : null}
      </label>
      {children}
      {error ? (
        <p className="mt-1.5 text-xs text-need-orange" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function inputClass(error?: string) {
  return cn(
    "w-full rounded-xl border bg-white px-4 py-3 text-sm text-need-ink outline-none transition focus:border-need-green-700 focus:ring-2 focus:ring-need-green-100",
    error ? "border-need-orange" : "border-need-border",
  );
}
