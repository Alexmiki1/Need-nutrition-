const fs = require("fs");

const Testimonials = {
  meta: {
    title: "Testimonials",
    description:
      "Consented client stories and transformations from NEED Nutritional — plus where to find NEED Foods recognition on Google, TripAdvisor, and Wanderlog.",
  },
  hero: {
    eyebrow: "Testimonials",
    title: "Stories from people we have worked with",
    subtitle:
      "Published only with recorded consent. Transformations and quotes reflect approved NEED case stories — not invented reviews.",
  },
  consent: {
    label: "Consent",
    body: "Testimonials and case studies appear only with recorded consent. Client health details are limited to what NEED has approved for publication. Additional reviews can be added later via the CMS.",
  },
  quotes: {
    eyebrow: "Client voices",
    title: "What clients share",
    subtitle:
      "Short quotes drawn from approved transformation journeys. Full case cards appear below.",
    items: [
      {
        quote:
          "After a difficult health chapter, personalized nutrition helped me rebuild energy and confidence — one sustainable step at a time.",
        name: "Client — consented case",
        role: "Weight-loss journey · ~1 year",
        tone: "orange",
      },
      {
        quote:
          "Balancing motherhood and my health felt impossible until the plan fit my real life — not a generic diet.",
        name: "Client — consented case",
        role: "Mother of two · multi-year journey",
        tone: "blue",
      },
      {
        quote:
          "Healthy weight gain restored my vitality. The counseling was targeted, cultural, and practical.",
        name: "Hanan",
        role: "Healthy weight gain · 3 months",
        tone: "green",
      },
    ],
  },
  recognition: {
    eyebrow: "Public recognition",
    title: "Find NEED Foods on major platforms",
    subtitle:
      "NEED Foods has been listed and discussed on traveler and review platforms. Open the live listing for current ratings — we do not hard-code star scores here.",
    openLink: "Open listing",
    websiteCta: "Visit needproducts.com",
    note: "Google review widgets can be embedded later when NEED provides a Place ID. Until then, use the official listings below.",
    platforms: [
      {
        name: "Google",
        subtitle: "NEED Foods · Addis Ababa",
        description: "Search and review listings for NEED Foods in Addis Ababa.",
        href: "https://www.google.com/search?q=NEED+Foods+Addis+Ababa",
        tone: "orange",
      },
      {
        name: "TripAdvisor",
        subtitle: "Healthy dining · Addis Ababa",
        description:
          "Traveler listing for NEED Foods as a healthy dining destination.",
        href: "https://www.tripadvisor.com/Search?q=NEED%20Foods%20Addis%20Ababa",
        tone: "green",
      },
      {
        name: "Wanderlog",
        subtitle: "Top African restaurants recognition",
        description:
          "Featured among recognized Addis Ababa dining highlights on Wanderlog.",
        href: "https://wanderlog.com/search?q=NEED%20Foods%20Addis%20Ababa",
        tone: "blue",
      },
    ],
  },
  cta: {
    title: "Ready to start your own journey?",
    subtitle:
      "Book a consultation for personalized nutrition support with NEED.",
    book: "Book a Consultation",
    about: "About NEED",
  },
};

const en = JSON.parse(fs.readFileSync("messages/en.json", "utf8"));
en.Testimonials = Testimonials;
// Keep Transformations meta aligned for home section
if (en.Transformations) {
  en.Transformations.meta.title = "Client Transformations";
}
fs.writeFileSync("messages/en.json", JSON.stringify(en, null, 2));

const am = JSON.parse(fs.readFileSync("messages/am.json", "utf8"));
am.Testimonials = JSON.parse(JSON.stringify(Testimonials));
am.Testimonials.meta.title = "ምስክርነቶች";
am.Testimonials.hero.eyebrow = "ምስክርነቶች";
am.Testimonials.hero.title = "ከእኛ ጋር ከሰሩ ሰዎች ታሪኮች";
am.Testimonials.cta.book = "ቅድመ ቀጠሮ ይያዙ";
am.Testimonials.cta.about = "ስለ NEED";
am.Testimonials.quotes.eyebrow = "የደንበኛ ድምጾች";
am.Testimonials.quotes.title = "ደንበኞች የሚያጋሩት";
am.Testimonials.recognition.eyebrow = "የህዝብ እውቅና";
am.Testimonials.recognition.title = "NEED Foodsን በዋና መድረኮች ያግኙ";
fs.writeFileSync("messages/am.json", JSON.stringify(am, null, 2));

console.log("Testimonials messages written");
