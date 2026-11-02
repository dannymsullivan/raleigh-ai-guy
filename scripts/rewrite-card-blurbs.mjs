import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { cardBlurbs } from "../src/data/cardBlurbs.mjs";

const directory = path.join(process.cwd(), "src/content/posts");
const files = await readdir(directory);
let updated = 0;

for (const file of files) {
  if (!file.endsWith(".mdx") && !file.endsWith(".md")) continue;
  const slug = file.replace(/\.(mdx|md)$/, "");
  const blurb = cardBlurbs[slug];
  if (!blurb) continue;
  const fullPath = path.join(directory, file);
  const source = await readFile(fullPath, "utf8");
  const next = source.replace(/^description:.*$/m, `description: ${JSON.stringify(blurb)}`);
  if (next === source) continue;
  await writeFile(fullPath, next);
  updated += 1;
}

console.log(`Updated ${updated} card blurbs.`);
