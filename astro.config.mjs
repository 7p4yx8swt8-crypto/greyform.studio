// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://greyform.studio",

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "de",
        locales: {
          de: "de-DE",
          en: "en-US",
        },
      },
    }),
  ],

  markdown: {
    shikiConfig: {
      theme: "min-light",
    },
    
  },

  build: {
    inlineStylesheets: "auto",
  },
});
