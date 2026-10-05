/** Site contact & brand values supplied from NEED prototype screenshots. */
export const site = {
  organizationName: "NEED Nutritional Products and Services PLC",
  founderName: "Abinet Tekle Hagos",
  founderNameAm: "አብነት ተክሌ ሐጎስ",
  founderTitle:
    "Nutritionist · Author · Media Icon · Corporate Wellness Expert",
  website: "https://needproducts.com",
  websiteDisplay: "needproducts.com",
  address: "Addis Ababa, Ethiopia",
  phoneEt: {
    display: "+251 911 075 12",
    href: "tel:+25191107512",
  },
  phoneUs: {
    display: "+1 703 201 5657",
    href: "tel:+17032015657",
  },
  whatsapp: {
    display: "+251 929 923 504",
    href: "https://wa.me/251929923504",
  },
  whatsappUs: {
    display: "+1 703 201 5657",
    href: "https://wa.me/17032015657",
  },
  telegram: {
    display: "+251 929 923 504",
    href: "https://t.me/+251929923504",
  },
  emailPersonal: {
    display: "abinet12@gmail.com",
    href: "mailto:abinet12@gmail.com",
  },
  emailBusiness: {
    display: "neednutritional@gmail.com",
    href: "mailto:neednutritional@gmail.com",
  },
  /** Primary sticky-bar / header defaults */
  phoneDisplay: "+251 911 075 12",
  phoneHref: "tel:+25191107512",
  whatsappDisplay: "+251 929 923 504",
  whatsappHref: "https://wa.me/251929923504",
  emailDisplay: "neednutritional@gmail.com",
  emailHref: "mailto:neednutritional@gmail.com",
  facebookHref: "https://facebook.com/[NEED-FACEBOOK-PAGE]",
  hours: "[NEED BUSINESS HOURS]",
} as const;

/** @deprecated use `site` — kept for gradual migration */
export const sitePlaceholders = site;
