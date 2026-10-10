import { createClient } from "next-sanity";
import { config } from "./config";

export const client = createClient(config);

export async function getTestimonialQuotes() {
  return await client.fetch(
    `*[_type == "testimonialQuote" && publishedAt < now()] | order(publishedAt desc) {
      _id,
      quote,
      name,
      role,
      tone,
      language,
      publishedAt
    }`
  );
}

export async function getTransformationCases() {
  return await client.fetch(
    `*[_type == "transformationCase" && publishedAt < now()] | order(publishedAt desc) {
      _id,
      category,
      result,
      timeframe,
      body,
      name,
      tone,
      beforeImage,
      afterImage,
      singleImage,
      language,
      publishedAt
    }`
  );
}

export async function getArticles() {
  return await client.fetch(
    `*[_type == "article" && publishedAt < now()] | order(publishedAt desc) {
      _id,
      title,
      slug,
      category,
      language,
      tint,
      date,
      author,
      coverImage,
      excerpt,
      content,
      relatedArticles[]->{_id, slug, title},
      publishedAt
    }`
  );
}

export async function getArticleBySlug(slug: string) {
  return await client.fetch(
    `*[_type == "article" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      category,
      language,
      tint,
      date,
      author,
      coverImage,
      excerpt,
      content,
      relatedArticles[]->{_id, slug, title},
      publishedAt
    }`,
    { slug }
  );
}

export async function getArticlesByCategory(category: string) {
  return await client.fetch(
    `*[_type == "article" && category == $category && publishedAt < now()] | order(publishedAt desc) {
      _id,
      title,
      slug,
      category,
      language,
      tint,
      date,
      author,
      coverImage,
      excerpt,
      publishedAt
    }`,
    { category }
  );
}
