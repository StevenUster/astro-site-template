import astroConsent from "astro-consent";
// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    // astro-consent:start
    astroConsent({
      siteName: "My Website",
      headline: "Cookie-Einstellungen für My Website verwalten",
      description: "Wir verwenden Cookies, um die Website-Performance zu verbessern, den Datenverkehr zu messen und das Marketing zu unterstützen.",
      acceptLabel: "Alle akzeptieren",
      rejectLabel: "Alle ablehnen",
      manageLabel: "Einstellungen verwalten",
      cookiePolicyUrl: "/cookie-policy",
      privacyPolicyUrl: "/privacy",
      displayUntilIdle: true,
      displayIdleDelayMs: 1000,
      consent: {
        days: 30,
        storageKey: "astro-consent"
      }
    }),
    // astro-consent:end
react()],

  adapter: node({
    mode: 'standalone'
  })
});