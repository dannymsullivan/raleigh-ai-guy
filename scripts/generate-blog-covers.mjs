import path from "node:path";
import { renderFieldNoteCover } from "./blog-cover-template.mjs";

const covers = [
  ["ai-tools-for-real-estate-agents-2026", ["AI FOR REAL ESTATE", "7 PRACTICAL USES"], "REAL ESTATE / WORKFLOW", "house", 2],
  ["chatgpt-vs-claude-which-should-you-use", ["CHATGPT", "VS. CLAUDE"], "TOOLS / DECISION", "compare", 3],
  ["claude-for-business-owners-bootcamp", ["CLAUDE", "60-MINUTE BOOTCAMP"], "CLAUDE / START HERE", "clock", 4],
  ["claude-models-explained-which-one-should-businesses-use", ["CLAUDE MODELS", "WHICH ONE?"], "CLAUDE / MODELS", "models", 5],
  ["create-first-claude-skill-organize-inbox", ["INBOX TRIAGE", "WITH CLAUDE"], "EMAIL / WORKFLOW", "inbox", 6],
  ["daily-calendar-briefing-claude", ["YOUR DAILY", "AI BRIEFING"], "CALENDAR / WORKFLOW", "calendar", 7],
  ["do-i-need-ai", ["DO YOU NEED AI?", "A PRACTICAL TEST"], "STRATEGY / DECISION", "decision", 8],
  ["how-to-create-share-design-claude-design", ["CLAUDE DESIGN", "START TO HANDOFF"], "DESIGN / WORKFLOW", "design", 9],
  ["how-to-install-claude-in-chrome-control-browser", ["LISTING QA", "BEFORE IT GOES LIVE"], "BROWSER / REVIEW", "browser", 10],
  ["month-of-real-estate-social-content-with-ai", ["ONE MONTH", "OF SOCIAL CONTENT"], "CONTENT / REAL ESTATE", "social", 11],
  ["what-are-claude-skills", ["CLAUDE SKILLS", "REPEATABLE WORK"], "CLAUDE / SYSTEMS", "blocks", 12],
  ["what-is-claude-and-cowork", ["CLAUDE COWORK", "WHEN TO USE IT"], "CLAUDE / DELEGATION", "files", 13],
  ["write-real-estate-listing-descriptions-with-ai", ["LISTING COPY", "FACTS FIRST"], "WRITING / REAL ESTATE", "document", 15],
];

const outputDirectory = path.resolve("src/images/posts/field-notes");

for (const [slug, lines, category, motif, index] of covers) {
  await renderFieldNoteCover({
    outputPath: path.join(outputDirectory, `${slug}.png`),
    title: lines.join(" "),
    lines,
    category,
    motif,
    index,
  });
}

console.log(`Generated ${covers.length} field-note covers in ${outputDirectory}`);
