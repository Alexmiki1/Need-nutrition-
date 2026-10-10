import { defineField, defineType } from "sanity";

export const article = defineType({
  name: "article",
  title: "Article / Blog Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Healthy Eating", value: "healthy-eating" },
          { title: "Weight Management", value: "weight-management" },
          { title: "Diabetes", value: "diabetes" },
          { title: "Hypertension", value: "hypertension" },
          { title: "Cholesterol", value: "cholesterol" },
          { title: "Maternal Nutrition", value: "maternal-nutrition" },
          { title: "Child Nutrition", value: "child-nutrition" },
          { title: "General Nutrition", value: "general-nutrition" },
          { title: "Sewegna Recaps", value: "sewegna-recaps" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "language",
      title: "Language",
      type: "string",
      options: {
        list: [
          { title: "English", value: "en" },
          { title: "Amharic", value: "am" },
          { title: "Both", value: "both" },
        ],
      },
      initialValue: "en",
    }),
    defineField({
      name: "tint",
      title: "Color Tint",
      type: "string",
      options: {
        list: [
          { title: "Blue", value: "blue" },
          { title: "Green", value: "green" },
          { title: "Orange", value: "orange" },
        ],
      },
      initialValue: "green",
    }),
    defineField({
      name: "date",
      title: "Publish Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "content",
      title: "Content Sections",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "heading",
              title: "Heading",
              type: "string",
            }),
            defineField({
              name: "body",
              title: "Body",
              type: "text",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "relatedArticles",
      title: "Related Articles",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "article" }],
        },
      ],
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
      title: "title",
      subtitle: "category",
      media: "coverImage",
    },
  },
});
