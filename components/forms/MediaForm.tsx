"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import {
  inquiryTypes,
  mediaFormSchema,
  mediaTypes,
  type MediaFormValues,
} from "@/lib/forms/media";
import { cn } from "@/lib/cn";

const empty: MediaFormValues = {
  name: "",
  mediaOrganization: "",
  email: "",
  phone: "",
  mediaType: "tv",
  inquiryType: "interview",
  deadline: "",
  message: "",
  website: "",
};

export function MediaForm() {
  const t = useTranslations("MediaInquiries.form");
  const [values, setValues] = useState<MediaFormValues>(empty);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [submitting, setSubmitting] = useState(false);

  function update<K extends keyof MediaFormValues>(
    key: K,
    value: MediaFormValues[K],
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

    const parsed = mediaFormSchema.safeParse(values);
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
      // API wiring: Phase 11 — POST /api/forms/media
      const response = await fetch("/api/forms/media", {
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
      className="relative rounded-need border border-need-border bg-white p-6 shadow-card sm:p-8"
      noValidate
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-need-ink">{t("title")}</h2>
        <p className="mt-2 text-sm text-need-muted">{t("subtitle")}</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label={t("name")} required error={errors.name}>
          <input
            id="name"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            className={inputClass(errors.name)}
          />
        </Field>

        <Field
          id="mediaOrganization"
          label={t("mediaOrganization")}
          required
          error={errors.mediaOrganization}
        >
          <input
            id="mediaOrganization"
            name="mediaOrganization"
            value={values.mediaOrganization}
            onChange={(e) => update("mediaOrganization", e.target.value)}
            className={inputClass(errors.mediaOrganization)}
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
          id="mediaType"
          label={t("mediaType")}
          required
          error={errors.mediaType}
        >
          <select
            id="mediaType"
            name="mediaType"
            value={values.mediaType}
            onChange={(e) =>
              update("mediaType", e.target.value as MediaFormValues["mediaType"])
            }
            className={inputClass(errors.mediaType)}
          >
            {mediaTypes.map((type) => (
              <option key={type} value={type}>
                {t(`mediaTypes.${type}`)}
              </option>
            ))}
          </select>
        </Field>

        <Field
          id="inquiryType"
          label={t("inquiryType")}
          required
          error={errors.inquiryType}
        >
          <select
            id="inquiryType"
            name="inquiryType"
            value={values.inquiryType}
            onChange={(e) =>
              update(
                "inquiryType",
                e.target.value as MediaFormValues["inquiryType"],
              )
            }
            className={inputClass(errors.inquiryType)}
          >
            {inquiryTypes.map((type) => (
              <option key={type} value={type}>
                {t(`inquiryTypes.${type}`)}
              </option>
            ))}
          </select>
        </Field>

        <Field
          id="deadline"
          label={t("deadline")}
          required
          error={errors.deadline}
          className="sm:col-span-2"
        >
          <input
            id="deadline"
            name="deadline"
            type="date"
            value={values.deadline}
            onChange={(e) => update("deadline", e.target.value)}
            className={inputClass(errors.deadline)}
          />
        </Field>

        <Field
          id="message"
          label={t("message")}
          required
          error={errors.message}
          className="sm:col-span-2"
        >
          <textarea
            id="message"
            name="message"
            rows={4}
            value={values.message}
            onChange={(e) => update("message", e.target.value)}
            className={inputClass(errors.message)}
          />
        </Field>
      </div>

      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
        <label htmlFor="media-website">Website</label>
        <input
          id="media-website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={values.website ?? ""}
          onChange={(e) => update("website", e.target.value)}
        />
      </div>

      {status === "success" ? (
        <p
          className="mt-5 rounded-card bg-need-green-100 px-4 py-3 text-sm text-need-green-900"
          role="status"
        >
          {t("success")}
        </p>
      ) : null}
      {status === "error" && Object.keys(errors).length > 0 ? (
        <p
          className="mt-5 rounded-card bg-need-orange-100 px-4 py-3 text-sm text-need-orange"
          role="alert"
        >
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
