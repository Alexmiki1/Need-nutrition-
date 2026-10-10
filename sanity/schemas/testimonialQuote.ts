import { defineField, defineType } from "sanity";

export const testimonialQuote = defineType({
  name: "testimonialQuote",
  title: "Testimonial Quote",
  type: "document",
  fields: [
    defineField({
      name: "quote",
      title: "Quote",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "name",
      title: "Client Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role / Description",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tone",
      title: "Tone",
      type: "string",
      options: {
        list: [
          { title: "Orange", value: "orange" },
          { title: "Blue", value: "blue" },
          { title: "Green", value: "green" },
        ],
        layout: "radio",
      },
      initialValue: "green",
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
      title: "name",
      subtitle: "quote",
    },
  },
});
