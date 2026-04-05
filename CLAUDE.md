# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

No test framework is configured.

## Architecture

This is a **Next.js 16.2.2** app using the **App Router** (not Pages Router). All routes live under `app/`.

- **React 19** with Server Components by default — add `"use client"` only when needed
- **Tailwind CSS v4** via PostCSS (`@tailwindcss/postcss`) — no `tailwind.config.*` file; config is inline in CSS
- **TypeScript** with strict mode; path alias `@/*` maps to the project root
- **`next/font`** auto-optimizes the Geist font family (loaded in `app/layout.tsx`)

The bundled Next.js docs at `node_modules/next/dist/docs/` are the authoritative reference for this version. App Router guides are under `01-app/`, Pages Router (legacy) under `02-pages/`.
