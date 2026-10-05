"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import {
  newsletterFormSchema,
  type NewsletterFormValues,
} from "@/lib/forms/newsletter";
import { cn } from "@/lib/cn";

const empty: NewsletterFormValues = {
  email: "",
  website: "",
};

export function NewsletterForm() {
  const t = useTranslations("Newsletter.form");
  const [values, setValues] = useState<NewsletterFormValues>(empty);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [submitting, setSubmitting] = useState(false);

  function update<K extends keyof NewsletterFormValues>(
    key: K,
    value: NewsletterFormValues[K],
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

    const parsed = newsletterFormSchema.safeParse(values);
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
      // API wiring: Phase 11 — POST /api/forms/newsletter
      const response = await fetch("/api/forms/newsletter", {
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
      className="flex flex-col gap-3 sm:flex-row"
      noValidate
    >
      <div className="flex-1">
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder={t("placeholder")}
          value={values.email}
          onChange={(e) => update("email", e.target.value)}
          className={inputClass(errors.email)}
          aria-label={t("email")}
        />
        {errors.email ? (
          <p className="mt-1.5 text-xs text-need-orange" role="alert">
            {errors.email}
          </p>
        ) : null}
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

      <button
        type="submit"
        disabled={submitting}
        className="rounded-full bg-need-orange px-6 py-3 text-sm font-semibold text-white transition hover:bg-need-orange-hover disabled:opacity-60"
      >
        {submitting ? t("submitting") : t("submit")}
      </button>

      {status === "success" ? (
        <p className="text-sm text-need-green-700" role="status">
          {t("success")}
        </p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm text-need-orange" role="alert">
          {t("error")}
        </p>
      ) : null}
    </form>
  );
}

function inputClass(error?: string) {
  return cn(
    "w-full rounded-xl border bg-white px-4 py-3 text-sm text-need-ink outline-none transition focus:border-need-green-700 focus:ring-2 focus:ring-need-green-100",
    error ? "border-need-orange" : "border-need-border",
  );
}
