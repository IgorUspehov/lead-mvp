export const LANGS = ["en", "de", "ru"] as const;

export type Lang = (typeof LANGS)[number];

export type Localized = Record<Lang, string>;

export type NicheId = "auto" | "gastro" | "praxis" | "polymer";

export type LeadStatus = "new" | "qualified" | "in_progress";

export type Question = {
  id: string;
  label: Localized;
  options: Record<Lang, string[]>;
};

export type Offer = {
  id: string;
  headline: Localized;
  subhead: Localized;
  cta: Localized;
  questions: Question[];
};

export type Niche = {
  id: NicheId;
  name: Localized;
  tag: Localized;
  description: Localized;
  rationale: Localized;
  offers: Offer[];
};

export type Lead = {
  id: string;
  name: string;
  phone: string;
  nicheId: NicheId;
  status: LeadStatus;
  time: string;
  fresh?: boolean;
};

export type Copy = {
  eyebrow: string;
  subtitle: string;
  stepNiche: string;
  stepOffer: string;
  stepPreview: string;
  stepCrm: string;
  step1Title: string;
  step1Hint: string;
  step2Title: string;
  step2Hint: string;
  step3Title: string;
  step3Hint: string;
  step4Title: string;
  step4Hint: string;
  generate: string;
  generating: string;
  simulate: string;
  liveOn: string;
  liveOff: string;
  headlines: string;
  structure: string;
  german: string;
  english: string;
  variant: string;
  emptyOfferTitle: string;
  emptyOffer: string;
  emptyPreview: string;
  previewKicker: string;
  sponsored: string;
  name: string;
  phone: string;
  namePh: string;
  phonePh: string;
  selectPh: string;
  required: string;
  captured: string;
  privacy: string;
  contact: string;
  filterAll: string;
  status: Record<LeadStatus, string>;
  statusHint: string;
  columns: {
    name: string;
    phone: string;
    niche: string;
    status: string;
    time: string;
  };
  stats: {
    total: string;
    fresh: string;
    qualified: string;
    working: string;
  };
  incoming: string;
  selected: string;
  noLeads: string;
  footer: string;
  drafting: string;
};
