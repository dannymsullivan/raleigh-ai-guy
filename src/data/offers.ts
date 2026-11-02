export type PackageId = "leak-audit" | "fix-launch" | "growth" | "workshop" | "not-sure";

export interface ServicePackage {
  id: Exclude<PackageId, "not-sure">;
  name: string;
  price: string;
  cadence: string;
  summary: string;
  includes: string[];
  note?: string;
  featured?: boolean;
}

export const servicePackages: ServicePackage[] = [
  {
    id: "leak-audit",
    name: "Leak Audit",
    price: "Starting at $500",
    cadence: "$500–$1,500",
    summary: "The entry offer. I look for the leads that slip away, then hand you a fix plan ranked by revenue impact.",
    includes: [
      "A review of your website, Google Business Profile, reviews, missed calls, and lead follow-up.",
      "A prioritized fix plan, ranked by revenue impact.",
      "One or two quick fixes done on the spot, such as a Google Business Profile cleanup or a missed-call text-back.",
    ],
    note: "The audit fee is credited toward a bigger package if you sign within 30 days.",
    featured: true,
  },
  {
    id: "fix-launch",
    name: "Fix & Launch",
    price: "Starting at $2,500",
    cadence: "$2,500–$7,500, one time",
    summary: "A fast build for a business that needs to look current and catch the leads it already earns.",
    includes: [
      "A fast, modern website.",
      "An optimized Google Business Profile.",
      "Branding or a logo, if you need it.",
      "Lead capture that reaches a real person.",
    ],
  },
  {
    id: "growth",
    name: "Growth on Autopilot",
    price: "Starting at $500/month",
    cadence: "$500–$2,000 a month",
    summary: "The ongoing work: publishing, follow-up, reviews, and a monthly report you can actually read.",
    includes: [
      "An SEO blog that keeps publishing.",
      "Automations for the follow-up you keep meaning to do.",
      "Review requests after the job is done.",
      "Monthly reporting on what moved.",
    ],
  },
];

export const workshopOffer = {
  id: "workshop" as const,
  name: "AI training workshop",
  price: "Starting at $1,500",
  cadence: "$1,500–$3,000 for a half-day",
  summary: "A half-day workshop for your team on the AI work you actually do, not a generic tool tour.",
};

export const packageChoices: Array<{ id: PackageId; label: string }> = [
  { id: "leak-audit", label: "Leak Audit" },
  { id: "fix-launch", label: "Fix & Launch" },
  { id: "growth", label: "Growth on Autopilot" },
  { id: "workshop", label: "Team workshop" },
  { id: "not-sure", label: "Not sure yet" },
];
