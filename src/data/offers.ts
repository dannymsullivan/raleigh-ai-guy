export type PackageId = "systems-audit" | "operating-system" | "partner" | "workshop" | "not-sure";

export interface Offer {
  id: Exclude<PackageId, "not-sure" | "workshop">;
  kicker: string;
  name: string;
  price: string;
  cadence: string;
  summary: string;
  includes: string[];
  note?: string;
  cta: string;
  featured?: boolean;
}

export const offerLadder: Offer[] = [
  {
    id: "systems-audit",
    kicker: "Start here",
    name: "Systems Audit",
    price: "$750–$1,500",
    cadence: "Credited toward the build",
    summary: "I watch the real work, name the platforms that need an agent, and write down one bottleneck worth fixing first.",
    includes: [
      "A shadow session: screen-share the inbox, the phone, the calendar, and the follow-up you actually do.",
      "A map of one agent per platform, only for the jobs your business really has.",
      "One measured target, agreed before any build starts.",
    ],
    note: "The audit fee comes off the build if you go ahead.",
    cta: "Book a Systems Audit",
    featured: true,
  },
  {
    id: "operating-system",
    kicker: "The build",
    name: "Custom operating system",
    price: "From $7,500",
    cadence: "Larger businesses usually $15,000–$25,000",
    summary: "About 30 days. A branded system with an agent for each platform, plus a redesigned website. You keep it.",
    includes: [
      "One agent per platform: phone, text, email, calendar, website chat, reviews, social, follow-up, billing, and a weekly owner report.",
      "A redesigned website, included.",
      "50% at kickoff, 50% at launch. Handoff and training are part of the build.",
    ],
    note: "You own the system. Nothing here requires a monthly plan.",
    cta: "Request a build",
  },
  {
    id: "partner",
    kicker: "Optional",
    name: "Partner plan",
    price: "$1,500–$3,000/mo",
    cadence: "Only if you want someone watching it",
    summary: "Monitoring, changes, and new automations after launch. Useful. Not a lock-in.",
    includes: [
      "Someone watching the agents and fixing what drifts.",
      "Small changes as the business changes.",
      "New automations when a job is ready for one.",
    ],
    note: "Cancel it and you still own what we built.",
    cta: "Ask about Partner",
  },
];

export const workshopOffer = {
  id: "workshop" as const,
  name: "Team workshop",
  price: "$1,500–$3,000",
  cadence: "Half day",
  summary: "A half-day with your team on the work you actually do, for owners who want the practice before a build.",
};

export const packageChoices: Array<{ id: PackageId; label: string }> = [
  { id: "systems-audit", label: "Systems Audit ($750–$1,500)" },
  { id: "operating-system", label: "Custom operating system (from $7,500)" },
  { id: "partner", label: "Partner plan (optional, $1,500–$3,000/mo)" },
  { id: "workshop", label: "Team workshop" },
  { id: "not-sure", label: "Not sure yet" },
];

/** Old homepage package ids still select a current offer. */
export const packageAliases: Record<string, PackageId> = {
  "leak-audit": "systems-audit",
  "fix-launch": "operating-system",
  growth: "partner",
};
