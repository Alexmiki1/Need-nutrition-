import fs from 'fs';
import path from 'path';

// Read JSON
const enJson = JSON.parse(fs.readFileSync(path.join(__dirname, '../messages/en.json'), 'utf8'));

// Import resources metadata (we need to compile or run it via ts-node)
// But since we can't easily run ts-node if it's not installed globally, we can use standard Node.js
// Wait, we can just use tsx or ts-node from npx.

import { resourceArticleMeta } from '../lib/resources';

const out: any[] = [];

// 1. Testimonial Quotes
const quote = enJson.Home.testimonials;
out.push({
  _type: 'testimonialQuote',
  _id: 'quote-abinet',
  quote: quote.quote,
  name: quote.name,
  role: quote.role,
  tone: 'green',
  language: 'en',
  publishedAt: new Date().toISOString()
});

// 2. Transformation Cases
const transformations = enJson.Transformations.items;
transformations.forEach((item: any, i: number) => {
  out.push({
    _type: 'transformationCase',
    _id: `transformation-${i}`,
    category: item.category,
    result: item.result,
    timeframe: item.timeframe,
    body: item.body,
    name: item.name || '',
    tone: item.tone,
    language: 'en',
    publishedAt: new Date().toISOString()
  });
});

// 3. Articles
const articlesKeys = Object.keys(enJson.Resources.articles);
articlesKeys.forEach((slug) => {
  const articleData = enJson.Resources.articles[slug];
  const meta = resourceArticleMeta[slug];
  
  if (!meta) return;

  const contentSections = articleData.sections?.map((sec: any) => ({
    _key: Math.random().toString(36).substring(7),
    heading: sec.heading,
    body: sec.body
  })) || [];

  out.push({
    _type: 'article',
    _id: `article-${slug}`,
    title: articleData.title,
    slug: { current: slug },
    category: meta.category,
    language: meta.language,
    tint: meta.tint,
    date: meta.date,
    author: meta.author,
    excerpt: articleData.excerpt,
    content: contentSections,
    publishedAt: new Date(meta.date).toISOString()
  });
});

// Write NDJSON
const ndjson = out.map(item => JSON.stringify(item)).join('\n');
fs.writeFileSync(path.join(__dirname, '../data.ndjson'), ndjson);
console.log('Successfully generated data.ndjson');
