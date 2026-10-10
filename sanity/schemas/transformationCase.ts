import { defineField, defineType } from "sanity";

export const transformationCase = defineType({
  name: "transformationCase",
  title: "Transformation Case",
  type: "document",
  fields: [
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "result",
      title: "Result",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "timeframe",
      title: "Timeframe",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "body",
      title: "Story / Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "name",
      title: "Client Name (optional)",
      type: "string",
    }),
    defineField({
      name: "tone",
      title: "Tone",
      type: "string",
      options: {
        list: [
          { title: "Weight Loss", value: "loss" },
          { title: "Weight Gain", value: "gain" },
        ],
        layout: "radio",
      },
      initialValue: "loss",
    }),
    defineField({
      name: "beforeImage",
      title: "Before Image (for weight loss)",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "afterImage",
      title: "After Image (for weight loss)",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "singleImage",
      title: "Single Image (for weight gain)",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "language",
      title: "Language",
      type: "string",
      options: {
        list: [
          { title: "English", value: "en" },
          { title: "Amharic", value: "am" },
        ],
        layout: "radio",
      },
      initialValue: "en",
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: "category",
      subtitle: "result",
    },
  },
});
