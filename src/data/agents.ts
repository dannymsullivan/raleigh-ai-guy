export type AgentIcon = "mail" | "phone" | "calendar" | "chat" | "star" | "social" | "crm" | "invoice" | "report";

export interface TeamAgent {
  id: string;
  name: string;
  platform: string;
  summary: string;
  examples: [string, string, string];
  icon: AgentIcon;
}

/** One agent owns one platform. Copy is for a non-technical owner. */
export const teamAgents: TeamAgent[] = [
  {
    id: "email",
    name: "Email agent",
    platform: "Your inbox",
    summary: "Sorts the inbox and drafts replies in your voice, so customer mail doesn’t sit under vendor noise.",
    examples: [
      "A new inquiry lands at lunch. It labels the thread “new lead,” drafts a reply with your hours and a booking link, and leaves it for you to send.",
      "A vendor invoice gets filed with billing instead of sitting on top of customer mail.",
      "“Are you open Saturday?” gets a draft answer from the hours you already published.",
    ],
    icon: "mail",
  },
  {
    id: "phone",
    name: "Phone & Text agent",
    platform: "Your business phone",
    summary: "Answers calls and texts back when you can’t pick up, then gets the next step on the calendar.",
    examples: [
      "Missed call at 7pm? It texts back in seconds, answers pricing questions, and books the estimate.",
      "A caller asks “Do you serve North Raleigh?” It answers from your service area and offers two open times.",
      "After hours, it takes the name, the job, and the best callback number instead of sending them to voicemail.",
    ],
    icon: "phone",
  },
  {
    id: "scheduling",
    name: "Scheduling agent",
    platform: "Your calendar",
    summary: "Books into openings you actually have, and sends the reminder so fewer people forget.",
    examples: [
      "Someone wants a Tuesday morning estimate. It offers the open slots and confirms the one they pick.",
      "A booked job gets a reminder the day before.",
      "If a slot is already taken, it does not double-book it.",
    ],
    icon: "calendar",
  },
  {
    id: "website",
    name: "Website & Chat agent",
    platform: "Your website",
    summary: "Answers questions on the site from what you approved, and hands off when a person should step in.",
    examples: [
      "A visitor asks what a basic job costs. It gives the range you approved and offers to book a look.",
      "“Where are you located?” gets your real address and hours.",
      "A question it should not answer becomes a note to you, not a made-up reply.",
    ],
    icon: "chat",
  },
  {
    id: "reviews",
    name: "Reviews agent",
    platform: "Google Business Profile",
    summary: "Asks customers for a review and drafts your reply. It never gates reviews or offers anything for a good star rating.",
    examples: [
      "A finished job sends a plain thank-you and a review link. No discount for five stars.",
      "A new Google review shows up. It drafts a reply in your voice for you to approve.",
      "It does not ask “how was it?” first, and it does not hide an unhappy customer from the public link.",
    ],
    icon: "star",
  },
  {
    id: "social",
    name: "Social agent",
    platform: "Facebook, Instagram, and LinkedIn",
    summary: "Turns work you already did into posts on the accounts you own, and waits for a yes before anything goes live.",
    examples: [
      "You finish a job and send one photo. It drafts a Facebook and Instagram post and waits for your approval.",
      "A quiet Tuesday uses an update you already approved, instead of leaving the feed blank.",
      "LinkedIn gets a plain note about a real project, not a generic announcement.",
    ],
    icon: "social",
  },
  {
    id: "follow-up",
    name: "Follow-up & CRM agent",
    platform: "Your leads list",
    summary: "Remembers who asked, what they wanted, and when to check back, so new leads don’t go cold in a spreadsheet.",
    examples: [
      "A quote went out Monday with no reply. Thursday, it sends the short check-in you approved.",
      "A lead who said “call me next month” comes back on your list when that month arrives.",
      "You can see who is new, who was quoted, and who booked, without hunting through email.",
    ],
    icon: "crm",
  },
  {
    id: "billing",
    name: "Billing agent",
    platform: "Your invoices",
    summary: "Sends invoices and the reminder you would have sent, so payment isn’t something you track from memory.",
    examples: [
      "A finished job creates an invoice for the amount you set and emails it the same day.",
      "An unpaid invoice gets a reminder on the day you chose, in your words.",
      "When a payment lands, it marks the invoice paid so you aren’t asking twice.",
    ],
    icon: "invoice",
  },
  {
    id: "reporting",
    name: "Reporting agent",
    platform: "A weekly note to you",
    summary: "Sends one owner report so you can see what the team did without logging into five tools.",
    examples: [
      "Monday morning: how many calls and form leads came in, who got a reply, and what is still open.",
      "It flags a lead that sat without a response longer than the target you set in the audit.",
      "You get one email, not a dashboard you have to remember to open.",
    ],
    icon: "report",
  },
];
