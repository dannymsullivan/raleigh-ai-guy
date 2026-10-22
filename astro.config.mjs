import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
export default defineConfig({
  markdown: {
    drafts: true,
    shikiConfig: {
      theme: "github-dark",
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  shikiConfig: {
    wrap: true,
    skipInline: false,
    drafts: true,
  },
  site: "https://raleighaiguy.com",
  image: {
    dangerouslyProcessSVG: true,
  },
  integrations: [
    sitemap({
      filter: (page) =>
        !["/services/", "/small-business-growth/", "/ai-opportunity-assessment/", "/ai-opportunity-scorecard/"].some((path) => page.endsWith(path)) &&
        !page.endsWith("/404/") &&
        !page.includes("/blog/tags/") &&
        !page.includes("/admin/") &&
        !page.includes("/clients/") &&
        !page.includes("/community-boards/pitch/") &&
        !page.includes("thank-you/"),
    }),
    mdx(),
  ],
});
