const fs = require("fs");

function article(opts) {
  return {
    title: opts.title,
    excerpt: opts.excerpt,
    seoTitle: opts.seoTitle || opts.title,
    seoDescription: opts.seoDescription || opts.excerpt,
    coverAlt: opts.coverAlt || `${opts.title} cover image placeholder`,
    sections: opts.sections,
  };
}

const Resources = {
  meta: {
    title: "Resources",
    description:
      "Nutrition articles and guides from NEED — healthy eating, weight management, diabetes, hypertension, cholesterol, maternal and child nutrition, and Sewegna recaps.",
  },
  hero: {
    eyebrow: "Resources",
    title: "Articles & guides",
    subtitle:
      "Practical nutrition reading rooted in Ethiopian food culture. Filter by topic or language.",
  },
  index: {
    eyebrow: "Library",
    title: "Browse by topic",
    subtitle:
      "Educational content only — not a substitute for personalized counseling or medical care.",
    empty: "No articles match these filters. Try another category or language.",
    loading: "Loading resources…",
  },
  filters: {
    category: "Category",
    language: "Language",
    all: "All",
    en: "English",
    am: "Amharic",
  },
  languages: {
    en: "English",
    am: "Amharic",
    both: "EN · አማ",
  },
  categories: {
    "healthy-eating": "Healthy Eating",
    "weight-management": "Weight Management",
    diabetes: "Diabetes",
    hypertension: "Hypertension",
    cholesterol: "Cholesterol",
    "maternal-nutrition": "Maternal Nutrition",
    "child-nutrition": "Child Nutrition",
    "general-nutrition": "General Nutrition",
    "sewegna-recaps": "Sewegna Recaps",
  },
  common: {
    readMore: "Read more",
    relatedTitle: "Related articles",
    backToIndex: "All resources",
    bookCta: "Book a Consultation",
    sewegnaLink: "Watch related Sewegna episodes",
    disclaimer:
      "This article is for general education. It is not medical advice and does not replace care from your clinician or a personalized consultation with NEED.",
  },
  articles: {
    "ethiopian-plate-basics": article({
      title: "Ethiopian plate basics for everyday health",
      excerpt:
        "A simple way to build balanced plates using injera, legumes, vegetables, and familiar Ethiopian flavors.",
      sections: [
        {
          heading: "Start with what you already eat",
          body: "Healthy eating does not require abandoning Ethiopian cuisine. Injera, shiro, lentils, greens, and vegetable wot can anchor a balanced day when portions and variety are intentional.",
        },
        {
          heading: "Build color and protein into the plate",
          body: "Aim for vegetables or legumes alongside staples, and notice how energy and fullness change when meals include fiber-rich sides. Personal targets differ — counseling can refine this for you.",
        },
        {
          heading: "When to get personal guidance",
          body: "If you manage a medical condition, are pregnant, or need a structured plan, book a consultation rather than relying on general articles alone.",
        },
      ],
    }),
    "sustainable-weight-habits": article({
      title: "Sustainable habits for weight management",
      excerpt:
        "Why slow, personalized changes beat extreme diets — and how to think about progress without miracle promises.",
      sections: [
        {
          heading: "Habits over hacks",
          body: "Sustainable weight management focuses on routines you can keep: meal rhythm, sleep, movement you enjoy, and food patterns that fit your culture and schedule.",
        },
        {
          heading: "No guaranteed outcomes",
          body: "NEED does not promise specific kilogram results. Progress depends on many factors and should be reviewed individually with appropriate clinical care when needed.",
        },
        {
          heading: "Next step",
          body: "If you want a personalized plan, use Book a Consultation. For workplace programs, use the partnerships pathway instead.",
        },
      ],
    }),
    "diabetes-friendly-ethiopian-meals": article({
      title: "Diabetes-friendly Ethiopian meal ideas",
      excerpt:
        "Practical plate ideas that respect Ethiopian food culture while supporting diabetes nutrition education.",
      sections: [
        {
          heading: "Education, not treatment",
          body: "Nutrition counseling supports diabetes care but never replaces medication or instructions from your clinician. Do not change prescriptions based on an article.",
        },
        {
          heading: "Familiar foods, thoughtful patterns",
          body: "Balanced plates, consistent meal timing, and awareness of carbohydrate patterns can be discussed using foods you already know — injera, legumes, vegetables, and dairy where appropriate.",
        },
        {
          heading: "Get tailored support",
          body: "Book a diabetes nutrition consultation for guidance matched to your clinician’s plan and your daily routine.",
        },
      ],
    }),
    "sodium-aware-cooking-at-home": article({
      title: "Sodium-aware cooking at home",
      excerpt:
        "Simple kitchen swaps and seasoning ideas to support blood-pressure-conscious cooking without bland meals.",
      sections: [
        {
          heading: "Flavor without excess salt",
          body: "Herbs, spices, garlic, lemon, and careful use of berbere-style blends can keep meals enjoyable while you watch sodium — always within your clinician’s guidance.",
        },
        {
          heading: "Cooking patterns that help",
          body: "Cooking more at home, tasting before adding salt, and balancing vegetables with staples are practical starting points for many households.",
        },
        {
          heading: "Personalize with NEED",
          body: "Hypertension nutrition counseling can turn these ideas into a plan that fits your household and medical care.",
        },
      ],
    }),
    "fiber-fats-and-heart-health": article({
      title: "Fiber, fats, and heart-conscious eating",
      excerpt:
        "A calm overview of dietary patterns that support lipid health — without extreme elimination diets.",
      sections: [
        {
          heading: "Patterns matter more than perfection",
          body: "Fiber-rich legumes, vegetables, and balanced fat choices can support heart-conscious eating. Extreme elimination is rarely the first or best step.",
        },
        {
          heading: "Work with your clinician",
          body: "Lab results and medication decisions belong with your medical team. Nutrition education complements — it does not replace — clinical care.",
        },
        {
          heading: "Go deeper",
          body: "Explore cholesterol nutrition services or book a consultation for a personalized approach.",
        },
      ],
    }),
    "nutrition-in-pregnancy-basics": article({
      title: "Nutrition in pregnancy — basics",
      excerpt:
        "General education on nourishing pregnancy with familiar foods — always alongside antenatal clinical care.",
      sections: [
        {
          heading: "Clinical care comes first",
          body: "Pregnancy nutrition articles are educational only. Follow your antenatal clinician’s advice for supplements, screening, and medical decisions.",
        },
        {
          heading: "Steady, diverse meals",
          body: "Regular meals with vegetables, legumes, staples, and adequate fluids support many pregnancies. Individual needs vary widely.",
        },
        {
          heading: "Ask for tailored counseling",
          body: "NEED can provide personalized maternal nutrition counseling when appropriate — never as a substitute for obstetric care.",
        },
      ],
    }),
    "feeding-toddlers-with-local-foods": article({
      title: "Feeding toddlers with local foods",
      excerpt:
        "Ideas for introducing diverse Ethiopian family foods to young children — gently and safely.",
      sections: [
        {
          heading: "Family foods, age-appropriate textures",
          body: "Many Ethiopian household foods can be adapted for toddlers with safe textures and gradual introduction. Watch for choking risks and follow pediatric guidance.",
        },
        {
          heading: "Growth is individual",
          body: "Appetite and growth patterns differ. Use your child’s clinician for growth concerns; use NEED for general nutrition education and meal planning support where relevant.",
        },
        {
          heading: "Language note",
          body: "Amharic clinical guidance should be human-reviewed before publication. This English draft is a placeholder structure for CMS content.",
        },
      ],
    }),
    "reading-nutrition-labels-simply": article({
      title: "Reading nutrition labels — simply",
      excerpt:
        "A plain-language walkthrough of packaged-food labels so you can compare products with less confusion.",
      sections: [
        {
          heading: "What to glance at first",
          body: "Serving size, energy, and key nutrients help you compare similar products. Labels are tools — not moral judgments about food.",
        },
        {
          heading: "Context beats fear",
          body: "One packaged item rarely makes or breaks a diet. Patterns across days and weeks matter more than a single label.",
        },
        {
          heading: "Need a plan?",
          body: "General nutrition counseling can help you apply label literacy to your real shopping and cooking routine.",
        },
      ],
    }),
    "sewegna-recap-green-vegetables": article({
      title: "Sewegna recap: green vegetables on the Ethiopian plate",
      excerpt:
        "A written recap of Sewegna themes on traditional greens — collards, cabbage, Swiss chard — and everyday cooking.",
      sections: [
        {
          heading: "From screen to kitchen",
          body: "Sewegna conversations often return to Ethiopia’s green vegetables — affordable, familiar, and central to many traditional meals.",
        },
        {
          heading: "Campaign echoes",
          body: "Public campaigns such as Green Gursha highlighted greens alongside culinary heritage. Recaps here summarize education themes, not medical outcomes.",
        },
        {
          heading: "Watch more",
          body: "Visit the Sewegna archive for video episodes, and book a consultation if you want personalized meal guidance.",
        },
      ],
    }),
  },
};

const en = JSON.parse(fs.readFileSync("messages/en.json", "utf8"));
en.Resources = Resources;
fs.writeFileSync("messages/en.json", JSON.stringify(en, null, 2));

const am = JSON.parse(fs.readFileSync("messages/am.json", "utf8"));
am.Resources = JSON.parse(JSON.stringify(Resources));
am.Resources.meta.title = "መርጃዎች";
am.Resources.hero.eyebrow = "መርጃዎች";
am.Resources.hero.title = "ጽሑፎች እና መመሪያዎች";
am.Resources.filters.all = "ሁሉም";
am.Resources.filters.en = "እንግሊዝኛ";
am.Resources.filters.am = "አማርኛ";
am.Resources.common.readMore = "ተጨማሪ ያንብቡ";
am.Resources.common.bookCta = "ቅድመ ቀጠሮ ይያዙ";
am.Resources.common.backToIndex = "ሁሉም መርጃዎች";
am.Resources.categories = {
  "healthy-eating": "ጤናማ አመጋገብ",
  "weight-management": "ክብደት አያያዝ",
  diabetes: "ስኳር በሽታ",
  hypertension: "ደም ግፊት",
  cholesterol: "ኮሌስትሮል",
  "maternal-nutrition": "የእናቶች አመጋገብ",
  "child-nutrition": "የህጻናት አመጋገብ",
  "general-nutrition": "አጠቃላይ አመጋገብ",
  "sewegna-recaps": "የሰወኛ ማጠቃለያዎች",
};
fs.writeFileSync("messages/am.json", JSON.stringify(am, null, 2));
console.log("Resources messages written");
