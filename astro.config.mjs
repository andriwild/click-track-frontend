import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://klikkr.ch',
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
    sitemap({
      // Pages rendered with noindex must not be listed, otherwise Search
      // Console reports "Submitted URL marked noindex".
      filter: (page) =>
        !/\/(thanks|newsletter-bestaetigt|newsletter-confirmed)\/$/.test(page),
      i18n: {
        defaultLocale: 'de',
        locales: {
          de: 'de-CH',
          en: 'en',
          fr: 'fr-CH',
          it: 'it-CH',
        },
      },
    }),
  ],
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en', 'fr', 'it'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});