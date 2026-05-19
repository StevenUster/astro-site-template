# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All commands use `bun` as the package manager:

```sh
bun dev        # Start dev server at localhost:4321
bun build      # Build production site to ./dist/
bun preview    # Preview the production build locally
bun astro check  # Type-check .astro files
```

## Architecture

This is an **Astro 6** site with the Node adapter (standalone SSR mode), React 19, and Tailwind CSS v4.

**Integrations configured in [astro.config.mjs](astro.config.mjs):**
- `@tailwindcss/vite` — Tailwind v4 loaded as a Vite plugin (no `tailwind.config.*` file; config lives in CSS)
- `@astrojs/react` — enables `.tsx` components with Astro's island hydration directives
- `@astrojs/node` (standalone) — SSR adapter for Node deployment
- `@astrojs/partytown` — offloads third-party scripts to a web worker

**Component pattern — Astro vs React islands:**

The project uses both `.astro` and `.tsx` components side by side. The key distinction:
- `.astro` components render to static HTML at build time — no JS shipped, no client-side state
- `.tsx` React components become interactive islands when given a `client:` directive (`client:load`, `client:idle`, `client:visible`, `client:only="react"`)

Props flow from the `.astro` frontmatter (the `--- ---` block) into both component types identically.

**Styling:** Tailwind v4 is imported via a single `@import "tailwindcss"` in [src/styles/global.css](src/styles/global.css), which [src/layouts/Layout.astro](src/layouts/Layout.astro) imports. All utility classes are written inline on elements.
