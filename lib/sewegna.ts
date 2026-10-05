export const sewegnaEpisodeSlugs = [
  "first-nutrition-tv-show",
  "weight-loss-transformation-story",
  "covid-19-and-nutrition",
  "sewegna-fana-tv-highlights",
  "afro-fm-nutrition-radio",
  "ehuden-be-ebs-appearance",
] as const;

export type SewegnaEpisodeSlug = (typeof sewegnaEpisodeSlugs)[number];

export function isSewegnaEpisodeSlug(
  value: string,
): value is SewegnaEpisodeSlug {
  return (sewegnaEpisodeSlugs as readonly string[]).includes(value);
}

/** Episode metadata that is not localized (IDs, media refs). Copy lives in messages. */
export const sewegnaEpisodeMeta: Record<
  SewegnaEpisodeSlug,
  {
    category: "TV" | "Radio" | "Podcast" | "Interview";
    /** YouTube video ID — leave empty until NEED provides URLs */
    youtubeId: string;
    /** Optional audio URL */
    audioUrl: string;
  }
> = {
  "first-nutrition-tv-show": {
    category: "TV",
    youtubeId: "LrVzSzN3Bvc",
    audioUrl: "",
  },
  "weight-loss-transformation-story": {
    category: "TV",
    youtubeId: "yZx8eWK6Vco",
    audioUrl: "",
  },
  "covid-19-and-nutrition": {
    category: "TV",
    youtubeId: "DvvVvxdZF3o",
    audioUrl: "",
  },
  "sewegna-fana-tv-highlights": {
    category: "TV",
    youtubeId: "VpaSYYuQMbk",
    audioUrl: "",
  },
  "afro-fm-nutrition-radio": {
    category: "Radio",
    youtubeId: "y737ZtxlVEM",
    audioUrl: "",
  },
  "ehuden-be-ebs-appearance": {
    category: "Interview",
    youtubeId: "UI1HqQ6giEI",
    audioUrl: "",
  },
};
