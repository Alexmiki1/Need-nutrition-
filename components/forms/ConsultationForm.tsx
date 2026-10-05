"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import {
  consultationFormSchema,
  consultationTypes,
  type ConsultationFormValues,
} from "@/lib/forms/consultation";
import { cn } from "@/lib/cn";

const empty: ConsultationFormValues = {
  name: "",
  email: "",
  phone: "",
  consultationType: "nutrition-counseling",
  age: "",
  preferredDate: "",
  preferredTime: "",
  message: "",
  website: "",
};

export function ConsultationForm() {
  const t = useTranslations("Consultation.form");
  const [values, setValues] = useState<ConsultationFormValues>(empty);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [submitting, setSubmitting] = useState(false);

  function update<K extends keyof ConsultationFormValues>(
    key: K,
    value: ConsultationFormValues[K],
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

    const parsed = consultationFormSchema.safeParse(values);
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
      // API wiring: Phase 11 — POST /api/forms/consultation
      const response = await fetch("/api/forms/consultation", {
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
          id="consultationType"
          label={t("consultationType")}
          required
          error={errors.consultationType}
        >
          <select
            id="consultationType"
            name="consultationType"
            value={values.consultationType}
            onChange={(e) =>
              update(
                "consultationType",
                e.target.value as ConsultationFormValues["consultationType"],
              )
            }
            className={inputClass(errors.consultationType)}
          >
            {consultationTypes.map((type) => (
              <option key={type} value={type}>
                {t(`consultationTypes.${type}`)}
              </option>
            ))}
          </select>
        </Field>

        <Field id="age" label={t("age")} error={errors.age}>
          <input
            id="age"
            name="age"
            type="number"
            value={values.age ?? ""}
            onChange={(e) => update("age", e.target.value)}
            className={inputClass(errors.age)}
          />
        </Field>

        <Field
          id="preferredDate"
          label={t("preferredDate")}
          required
          error={errors.preferredDate}
        >
          <input
            id="preferredDate"
            name="preferredDate"
            type="date"
            value={values.preferredDate}
            onChange={(e) => update("preferredDate", e.target.value)}
            className={inputClass(errors.preferredDate)}
          />
        </Field>

        <Field
          id="preferredTime"
          label={t("preferredTime")}
          required
          error={errors.preferredTime}
        >
          <input
            id="preferredTime"
            name="preferredTime"
            type="time"
            value={values.preferredTime}
            onChange={(e) => update("preferredTime", e.target.value)}
            className={inputClass(errors.preferredTime)}
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
