// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://greyform.studio",

  markdown: {
    shikiConfig: {
      theme: "min-light",
    },
    // Allow HTML inside markdown (e.g. for custom row layouts)
    smartypants: true,
  },

  build: {
    inlineStylesheets: "auto",
  },
});
