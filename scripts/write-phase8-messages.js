const fs = require("fs");

const episode = (title, summary, description, recap, topics, meta) => ({
  title,
  summary,
  description,
  recap,
  topics,
  meta,
  related: [
    { title: "Browse all Sewegna episodes", href: "/sewegna" },
    { title: "Nutrition resources", href: "/resources" },
    { title: "Media inquiry", href: "/media-inquiries" },
  ],
});

const Sewegna = {
  meta: {
    title: "Sewegna",
    description:
      "Sewegna health and nutrition media from NEED — TV, radio, podcasts, and interviews with Abinet Tekle Hagos.",
  },
  hero: {
    eyebrow: "Sewegna",
    title: "Health & nutrition media",
    subtitle:
      "TV, radio, podcasts, and interviews from NEED — including Sewegna on Fana TV and landmark nutrition conversations across Ethiopia.",
  },
  channels: {
    eyebrow: "Channels",
    title: "Where NEED shows up",
    subtitle: "Public health communication across TV, radio, interviews, and press.",
    items: [
      {
        title: "TV",
        body: "Sewegna Health & Nutrition Show on Fana TV and other televised appearances.",
      },
      {
        title: "Radio",
        body: "Afro FM nutrition radio and Amharic nutrition programs.",
      },
      {
        title: "Podcast & digital",
        body: "On-demand conversations and digital clips for wider reach.",
      },
      {
        title: "Interviews & press",
        body: "Expert interviews, press features, and media collaborations.",
      },
    ],
  },
  archive: {
    eyebrow: "Episode archive",
    title: "Watch & listen",
    subtitle:
      "Episode pages support video embeds, optional audio, topics, and written recaps. Add YouTube IDs when available.",
  },
  common: {
    play: "Play episode",
    videoPlaceholder: "[YouTube video ID required from NEED]",
    audioLabel: "Audio",
    audioFallback: "Your browser does not support audio playback.",
    audioPlaceholder: "Optional audio file — add URL when available.",
    descriptionLabel: "About this episode",
    recapLabel: "Written recap",
    topicsLabel: "Topics",
    relatedLabel: "Related",
    moreEpisodes: "More episodes",
    backToArchive: "Back to Sewegna",
  },
  cta: {
    title: "Media, TV, or radio inquiry?",
    subtitle:
      "Use the media form — not the individual consultation form — for interviews, appearances, and press requests.",
    button: "Media Inquiry",
  },
  episodes: {
    "first-nutrition-tv-show": episode(
      "The First Nutrition TV Show",
      "A landmark chapter in Ethiopian public nutrition communication.",
      "Ethiopia's first nutrition TV programming helped bring evidence-informed food and health conversations into living rooms nationwide — part of Abinet Tekle Hagos's media pioneering work.",
      "This episode highlights the origins and impact of televised nutrition education in Ethiopia, and why culturally grounded messaging matters for public health.",
      ["TV", "Public health", "Nutrition education", "Media pioneer"],
      "Sewegna / TV · Archive highlight",
    ),
    "weight-loss-transformation-story": episode(
      "Weight Loss Transformation Story",
      "A media conversation on personalized nutrition journeys.",
      "A televised discussion exploring real-world weight management through personalized nutrition counseling — focused on sustainable habits rather than quick fixes.",
      "Key takeaways emphasize individualized plans, clinical coordination when needed, and culturally familiar foods as part of lasting change.",
      ["Weight management", "Counseling", "TV"],
      "TV · Feature",
    ),
    "covid-19-and-nutrition": episode(
      "COVID-19 & Nutrition",
      "Public guidance on nutrition during a public health crisis.",
      "A media segment addressing nutrition considerations during COVID-19 — practical food and wellness messaging for households navigating uncertainty.",
      "The discussion connects everyday eating patterns with resilience, without making medical claims beyond nutrition education.",
      ["COVID-19", "Public health", "Household nutrition"],
      "TV · Public health",
    ),
    "sewegna-fana-tv-highlights": episode(
      "Sewegna on Fana TV — Highlights",
      "Selections from the Sewegna Health & Nutrition Show.",
      "Sewegna brings health and nutrition topics to Fana TV audiences in Amharic — covering practical guidance, cultural foods, and evidence-informed conversation.",
      "Highlights showcase the show's role in making nutrition a household conversation across Ethiopia.",
      ["Sewegna", "Fana TV", "Amharic", "Health communication"],
      "Sewegna · Fana TV",
    ),
    "afro-fm-nutrition-radio": episode(
      "Afro FM Nutrition Radio",
      "Ethiopia's first English nutrition radio show — archive spotlight.",
      "Created as Ethiopia's first English nutrition radio show on Afro FM, this work helped expand nutrition literacy to bilingual and urban audiences.",
      "Radio remains a powerful channel for practical, culturally aware nutrition education.",
      ["Radio", "Afro FM", "English", "Nutrition literacy"],
      "Radio · Afro FM",
    ),
    "ehuden-be-ebs-appearance": episode(
      "Ehuden Be EBS Appearance",
      "Interview and appearance highlights from EBS.",
      "Television appearances on Ehuden Be EBS featuring nutrition expertise, public Q&A style conversation, and practical guidance for viewers.",
      "These appearances extend NEED's media footprint beyond Sewegna into broader entertainment and lifestyle formats.",
      ["Interview", "EBS", "Media appearance"],
      "Interview · EBS",
    ),
  },
};

const MediaInquiries = {
  meta: {
    title: "Media Inquiries",
    description:
      "Request interviews, expert quotes, press features, or Sewegna collaborations with NEED and Abinet Tekle Hagos.",
  },
  hero: {
    eyebrow: "Media inquiries",
    title: "Work with NEED on air & in press",
    subtitle:
      "TV, radio, podcast, print, and digital teams — use this form for interviews, appearances, and press requests.",
  },
  topics: {
    eyebrow: "Media & Sewegna",
    title: "How media teams collaborate with NEED",
    subtitle:
      "From expert interviews to Sewegna collaborations — tell us your format and deadline.",
    sewegnaCta: "Browse Sewegna episodes",
    items: [
      {
        title: "TV & Sewegna",
        body: "Guest segments, show collaborations, and televised nutrition conversations.",
      },
      {
        title: "Radio & podcast",
        body: "Live or recorded interviews in Amharic or English.",
      },
      {
        title: "Press & digital",
        body: "Expert quotes, features, and online editorial collaborations.",
      },
      {
        title: "Campaign support",
        body: "Nutrition communication and campaign messaging partnerships.",
      },
      {
        title: "Public appearances",
        body: "Panels, launches, and institutional media events.",
      },
      {
        title: "Archive & assets",
        body: "Requests related to existing Sewegna or press materials.",
      },
    ],
  },
  aside: {
    eyebrow: "Media pathway",
    title: "Use the media form",
    subtitle:
      "This inbox is separate from individual consultations and institutional partnerships.",
    bullets: [
      "Share your outlet, format, and deadline clearly",
      "Do not send confidential patient or client health details",
      "We will respond through the media inquiry workflow",
    ],
  },
  form: {
    title: "Media inquiry form",
    subtitle: "Required fields are marked. Email delivery is finalized in Phase 11.",
    name: "Your name",
    mediaOrganization: "Media organization",
    email: "Email",
    phone: "Phone",
    mediaType: "Media type",
    inquiryType: "Inquiry type",
    deadline: "Deadline",
    message: "Message",
    submit: "Submit media inquiry",
    submitting: "Submitting…",
    success:
      "Thanks — your media inquiry was validated. Email delivery to the media inbox will be enabled in Phase 11.",
    error: "Please fix the highlighted fields and try again.",
    note: "For TV, radio, podcast, and press only. Individuals seeking counseling should use Book a Consultation.",
    mediaTypes: {
      tv: "TV",
      radio: "Radio",
      podcast: "Podcast",
      print: "Print",
      online: "Online / digital",
      other: "Other",
    },
    inquiryTypes: {
      interview: "Interview",
      "expert-quote": "Expert quote",
      press: "Press feature",
      appearance: "On-air / event appearance",
      collaboration: "Show / campaign collaboration",
      other: "Other",
    },
  },
};

const en = JSON.parse(fs.readFileSync("messages/en.json", "utf8"));
en.Sewegna = Sewegna;
en.MediaInquiries = MediaInquiries;
fs.writeFileSync("messages/en.json", JSON.stringify(en, null, 2));

const am = JSON.parse(fs.readFileSync("messages/am.json", "utf8"));
am.Sewegna = JSON.parse(JSON.stringify(Sewegna));
am.MediaInquiries = JSON.parse(JSON.stringify(MediaInquiries));
am.Sewegna.meta.title = "ሰወኛ";
am.Sewegna.hero.eyebrow = "ሰወኛ";
am.Sewegna.hero.title = "ጤና እና አመጋገብ ሚዲያ";
am.Sewegna.cta.button = "የሚዲያ ጥያቄ";
am.MediaInquiries.meta.title = "የሚዲያ ጥያቄዎች";
am.MediaInquiries.hero.eyebrow = "የሚዲያ ጥያቄዎች";
am.MediaInquiries.hero.title = "በአየር እና በፕሬስ ከNEED ጋር ይስሩ";
am.MediaInquiries.form.submit = "የሚዲያ ጥያቄ ያስገቡ";
am.MediaInquiries.form.submitting = "በመላክ ላይ…";
fs.writeFileSync("messages/am.json", JSON.stringify(am, null, 2));

console.log("Sewegna + MediaInquiries messages written");
