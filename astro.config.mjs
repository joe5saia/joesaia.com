// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import { env } from "node:process";

// https://astro.build/config
export default defineConfig({
  site: "https://joesaia.com",
  build: {
    inlineStylesheets: "always",
  },
  integrations: [
    sitemap({
      filter: (page) =>
        !page.endsWith("/brand-assets/") && !page.endsWith("/design-system/"),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: env.AMP_ORB ? true : undefined,
    },
  },
});
