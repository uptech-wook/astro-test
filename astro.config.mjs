import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://friendly-griffin-f079a7.netlify.app",
  integrations: [preact()]
});