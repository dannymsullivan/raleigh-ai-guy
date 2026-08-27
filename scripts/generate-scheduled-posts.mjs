import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { chooseCoverMotif, fieldNoteCategory, renderFieldNoteCover } from "./blog-cover-template.mjs";

const root = process.cwd();
const queue = JSON.parse(await readFile(path.join(root, "seo/keyword-seeds.json"), "utf8"));
const items = Array.isArray(queue) ? queue : queue.items;
const postDirectory = path.join(root, "src/content/posts");
const imageDirectory = path.join(root, "src/images/posts/field-notes");
await mkdir(postDirectory, { recursive: true });
await mkdir(imageDirectory, { recursive: true });

const clusterTags = {
  "Local AI consulting": ["small-business", "ai-strategy"],
  "Small-business workflows": ["small-business", "automation"],
  "Real estate": ["real-estate", "automation"],
  Contractors: ["contractors", "automation"],
  "AI tools and education": ["small-business", "ai-tools"],
};

const scheduledTimestamp = (date) => {
  const month = Number(date.slice(5, 7));
  const winter = month >= 11 || month <= 2;
  return `${date}T${winter ? "08:15:00-05:00" : "09:15:00-04:00"}`;
};

for (const item of items) {
  const tags = clusterTags[item.cluster] || ["ai"];
  const mdx = `---
title: ${JSON.stringify(item.title)}
pubDate: ${JSON.stringify(scheduledTimestamp(item.publishDate))}
description: ${JSON.stringify(`Practical guidance on ${item.keyword}: useful workflows, human safeguards, and a two-week test for ${item.audience.toLowerCase()}.`)}
image:
  url: ${JSON.stringify(`/src/images/posts/field-notes/${item.slug}.png`)}
  alt: ${JSON.stringify(`Raleigh AI Guy field-note cover for ${item.title}`)}
tags:
${tags.map((tag) => `  - ${tag}`).join("\n")}
targetKeyword: ${JSON.stringify(item.keyword)}
cluster: ${JSON.stringify(item.cluster)}
intent: ${JSON.stringify(item.intent)}
contentStatus: scheduled
cta: ${JSON.stringify(item.cta)}
---

import ScheduledGuide from "@/components/blog/ScheduledGuide.astro";

<ScheduledGuide slug=${JSON.stringify(item.slug)} />
`;

  await writeFile(path.join(postDirectory, `${item.slug}.mdx`), mdx);
  await renderFieldNoteCover({
    outputPath: path.join(imageDirectory, `${item.slug}.png`),
    title: item.title,
    category: fieldNoteCategory(item.cluster),
    motif: chooseCoverMotif(item),
    index: item.id,
  });
}

const state = Object.fromEntries(items.map((item) => [
  item.keyword.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
  {
    id: item.id,
    keyword: item.keyword,
    slug: item.slug,
    status: "scheduled",
    articlePath: `src/content/posts/${item.slug}.mdx`,
    scheduledAt: scheduledTimestamp(item.publishDate),
    draftedAt: "2026-08-15",
    publishedAt: null,
    verifiedLiveAt: null,
  },
]));
await writeFile(path.join(root, "seo/content-state.json"), `${JSON.stringify(state, null, 2)}\n`);

console.log(`Generated ${items.length} scheduled MDX posts with field-note covers.`);
