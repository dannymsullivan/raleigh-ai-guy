import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const width = 1200;
const height = 630;
const ink = "#17130F";
const pink = "#F43E8D";
const yellow = "#F0DF55";
const paper = "#EEE8D6";
const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const paperTexture = path.resolve(scriptDirectory, "../src/images/posts/field-note-paper-master.png");

const motifs = {
  target: `<circle cx="925" cy="304" r="135"/><circle cx="925" cy="304" r="72"/><circle cx="925" cy="304" r="14" fill="${pink}"/><path d="M790 304h270M925 169v270"/>`,
  house: `<path d="M780 318 925 185l145 133v150H808V318Z"/><path d="M875 468V355h100v113"/><circle cx="1034" cy="232" r="22" fill="${pink}"/>`,
  compare: `<circle cx="850" cy="290" r="92" fill="${yellow}"/><circle cx="1000" cy="350" r="92" fill="${pink}"/><path d="M798 458h255m-40-27 40 27-40 27M1052 177H797m40-27-40 27 40 27"/>`,
  clock: `<circle cx="925" cy="315" r="146" fill="${yellow}"/><path d="M925 210v112l76 45"/><path d="M890 130h70M925 130v38"/>`,
  models: `<rect x="760" y="185" width="140" height="120" fill="${yellow}"/><rect x="930" y="185" width="140" height="120" fill="${pink}"/><rect x="760" y="335" width="140" height="120"/><rect x="930" y="335" width="140" height="120" fill="${yellow}"/><path d="M795 245h70M965 245h70M795 395h70M965 395h70" stroke="${paper}"/>`,
  inbox: `<path d="M760 205h330v245H760z"/><path d="m760 205 165 135 165-135"/><path d="M800 385h250"/><circle cx="1040" cy="410" r="42" fill="${pink}"/>`,
  calendar: `<rect x="760" y="185" width="330" height="275"/><path d="M760 255h330M835 155v60M1015 155v60M825 315h70M925 315h100M825 375h120"/><rect x="972" y="352" width="55" height="55" fill="${pink}" stroke="none"/>`,
  decision: `<path d="M925 165v300M790 225h270"/><path d="m790 225-70 135h140l-70-135Zm270 0-70 135h140l-70-135Z"/><rect x="865" y="425" width="120" height="45" fill="${pink}"/>`,
  design: `<rect x="750" y="180" width="110" height="285"/><rect x="895" y="180" width="110" height="285" fill="${yellow}"/><rect x="1040" y="180" width="110" height="285"/><path d="m865 322 25 0m120 0 25 0M878 305l17 17-17 17M1023 305l17 17-17 17"/>`,
  browser: `<rect x="735" y="185" width="390" height="275"/><path d="M735 250h390M780 218h2M815 218h2M850 218h2"/><circle cx="940" cy="350" r="72" fill="${yellow}"/><path d="m905 350 25 25 52-60"/>`,
  social: `<rect x="770" y="180" width="315" height="290"/><path d="M770 250h315M850 180v290M930 180v290M1010 180v290M770 325h315M770 400h315"/><circle cx="1007" cy="219" r="52" fill="${pink}"/>`,
  blocks: `<rect x="745" y="205" width="120" height="90" fill="${yellow}"/><rect x="915" y="205" width="120" height="90"/><rect x="830" y="350" width="120" height="90" fill="${pink}"/><path d="M865 250h50M975 295v55M805 295l70 55"/>`,
  files: `<path d="M750 230h170l45 50h160v190H750V230Z" fill="${yellow}"/><path d="M805 175h170l45 55H850l-45-55Z" fill="${pink}"/><path d="M825 335h220M825 390h160"/>`,
  compass: `<circle cx="925" cy="315" r="145"/><circle cx="925" cy="315" r="20" fill="${pink}"/><path d="m925 202 48 92-48 134-48-92 48-134Z" fill="${yellow}"/><path d="M925 135v45M925 450v45M745 315h45M1060 315h45"/>`,
  document: `<path d="M780 165h225l85 85v240H780V165Z"/><path d="M1005 165v85h85M835 305h195M835 365h195M835 425h115"/><path d="m975 417 28 28 65-78" stroke="${pink}" stroke-width="18"/>`,
};

const escapeXml = (value) => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;");

export const wrapCoverTitle = (title, maxCharacters = 21) => {
  const words = title.toUpperCase().replace(/[—–]/g, " ").split(/\s+/).filter(Boolean);
  const lines = [];
  for (const word of words) {
    const current = lines.at(-1);
    if (!current || `${current} ${word}`.length > maxCharacters) lines.push(word);
    else lines[lines.length - 1] = `${current} ${word}`;
  }

  while (lines.length > 4) {
    const last = lines.pop();
    lines[lines.length - 1] = `${lines.at(-1)} ${last}`;
  }
  return lines;
};

export const fieldNoteCategory = (cluster) => ({
  "Local AI consulting": "STRATEGY / LOCAL BUSINESS",
  "Small-business workflows": "WORKFLOWS / SMALL BUSINESS",
  "Real estate": "WORKFLOWS / REAL ESTATE",
  Contractors: "WORKFLOWS / CONTRACTORS",
  "AI tools and education": "TOOLS / PRACTICAL AI",
}[cluster] || "PRACTICAL AI / FIELD NOTE");

export const chooseCoverMotif = ({ title = "", keyword = "", cluster = "", id = 1 }) => {
  const subject = `${title} ${keyword}`.toLowerCase();
  if (/real estate|property|tenant|open house|listing/.test(subject)) return "house";
  if (/email|inbox|follow-up|follow up|lead/.test(subject)) return "inbox";
  if (/calendar|meeting|schedule/.test(subject)) return "calendar";
  if (/social|content|repurpos/.test(subject)) return "social";
  if (/policy|proposal|document|checklist|sop/.test(subject)) return "document";
  if (/versus|\bvs\b|compare|which/.test(subject)) return "compare";
  if (/cost|roi|price|readiness|assessment/.test(subject)) return "target";
  if (/tool|chatbot|agent|model/.test(subject)) return "models";
  if (/workflow|automat|process/.test(subject)) return "blocks";

  const fallbacks = cluster === "Contractors"
    ? ["blocks", "target", "document"]
    : ["compass", "decision", "files", "clock"];
  return fallbacks[(Number(id) - 1) % fallbacks.length];
};

export const renderFieldNoteCover = async ({
  outputPath,
  title,
  lines = wrapCoverTitle(title),
  category,
  motif = "compass",
  index,
}) => {
  const lineCount = Math.max(lines.length, 1);
  const longestLine = Math.max(...lines.map((line) => line.length), 1);
  const baseFontSize = lineCount === 1 ? 78 : lineCount === 2 ? 70 : lineCount === 3 ? 58 : 48;
  const widthConstrainedSize = Math.floor(620 / (longestLine * 0.56));
  const fontSize = Math.max(38, Math.min(baseFontSize, widthConstrainedSize));
  const lineHeight = Math.round(fontSize * 1.02);
  const titleStart = lineCount <= 2 ? 162 : 142;
  const titleSvg = lines.map((line, lineIndex) => (
    `<text x="72" y="${titleStart + lineIndex * lineHeight}" class="display" font-size="${fontSize}" fill="${ink}">${escapeXml(line)}</text>`
  )).join("");
  const ruleY = titleStart + (lineCount - 1) * lineHeight + 36;
  const noteNumber = String(index).padStart(2, "0");
  const overlay = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <style>
        .display { font-family: Impact, "Arial Narrow", sans-serif; font-weight: 900; letter-spacing: -2px; }
        .utility { font-family: "Courier New", monospace; font-weight: 700; letter-spacing: 2px; }
      </style>
      <rect x="54" y="46" width="1092" height="538" fill="none" stroke="${ink}" stroke-width="4"/>
      <rect x="54" y="46" width="470" height="34" fill="${pink}"/>
      <text x="72" y="69" class="utility" font-size="15" fill="${ink}">RALEIGH AI GUY / FIELD NOTE ${noteNumber}</text>
      ${titleSvg}
      <rect x="72" y="${ruleY}" width="560" height="10" fill="${yellow}"/>
      <text x="72" y="535" class="utility" font-size="16" fill="${ink}">${escapeXml(category)}</text>
      <text x="1090" y="535" class="display" font-size="34" text-anchor="end" fill="${ink}">${noteNumber}</text>
      <g fill="none" stroke="${ink}" stroke-width="12" stroke-linecap="square" stroke-linejoin="miter">${motifs[motif] || motifs.compass}</g>
    </svg>`;

  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await sharp(paperTexture)
    .resize(width, height, { fit: "cover" })
    .composite([{ input: Buffer.from(overlay) }])
    .png({ compressionLevel: 9, palette: true, colours: 128 })
    .toFile(outputPath);
};
