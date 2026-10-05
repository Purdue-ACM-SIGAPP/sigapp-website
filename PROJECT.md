# PROJECT.md — Purdue ACM SIGAPP Website

Project-specific facts for this repo. Global conduct rules live in `CLAUDE.md`.

## Purpose

Public website for Purdue ACM SIGAPP, a student app-development club. It introduces the club, explains how to join (via Discord), shows current and past officers, showcases past projects, and links to the club's socials.

## Stack

- **Framework:** Vue 3 (`<script setup lang="ts">`, Composition API) + Vue Router 4 (`createWebHistory`)
- **Language:** TypeScript (~5.8), type-checked with `vue-tsc`
- **Build/dev:** Vite 7 with `@vitejs/plugin-vue` and `@tailwindcss/vite`
- **Styling:** Tailwind CSS v4 (theme tokens via `@theme` in `src/style.css`; shared component classes in `src/styles/shared.css`)
- **Lint/format:** ESLint 9 flat config (JS + typescript-eslint + eslint-plugin-vue, Prettier-compatible) and Prettier 3.6
- **React island:** `react`, `react-dom`, `@shadergradient/react`, `three` are used _only_ to render the animated hero gradient (see Architecture). No other React.
- **Hosting:** static SPA; `gh-pages` is a dev dependency (GitHub Pages) but no deploy script is defined yet.

## Commands

| Task                                   | Command                                                                          |
| -------------------------------------- | -------------------------------------------------------------------------------- |
| Install                                | `npm install` (npm is the package manager; `package-lock.json` is authoritative) |
| Dev server                             | `npm run dev`                                                                    |
| Production build (type-check + bundle) | `npm run build` → `dist/`                                                        |
| Preview build                          | `npm run preview`                                                                |
| Lint + format check                    | `npm run lint`                                                                   |
| Auto-fix lint + format                 | `npm run format`                                                                 |

There is no test suite. "Verified" means `npm run build` and `npm run lint` pass and the page renders correctly in `npm run dev`.

## Architecture

```
index.html              Vite entry; mounts #app, loads src/main.ts
src/
  main.ts               Creates the app, registers router + v-reveal directive, imports style.css
  App.vue               Shell: <Header /> <RouterView /> <Footer />
  router/index.ts       Routes: /  /past-officers  /past-projects (+ smooth hash scrolling)
  pages/                One component per route. Pages only compose sections/components.
  sections/             Full-width blocks of the home page, each with an anchor id
                        (Home, About, Join, Officer, Project). Rendered by HomePage.vue.
  components/           Reusable UI pieces (Card, Carousel, OfficerChip, ProjectCard, modals, Header/Footer…)
  content/              ALL site copy and data as typed TS objects — the single source of truth
    site.ts             Org name, social URLs, banner/footer text, nav links, icon paths
    home.ts             Hero, About, "What We Do" copy
    officers.ts         `allOfficers` (one record per person, with positions[]) → derives current + past rosters; team photo regions
    projects.ts         Project list + section/page copy
    instagram.ts        Instagram showcase copy and posts
  directives/reveal.ts  v-reveal: scroll-in fade, respects prefers-reduced-motion
  globals.ts            Shared reactive state (e.g. headerHeight)
  style.css             Tailwind import, @theme color tokens, base styles
  styles/shared.css     Shared @layer components classes (.page-section, .page-container, …)
public/assets/          Static images, served at /assets/...
  app/                  Project screenshots
  group/                Team photos by year (e.g. SIGAPP25-26_1.jpg)
  logo-icon/            Logo and social icons (each with a *_green hover variant)
  officer/              Officer headshots (firstname-lastname.jpg)
tools/photo-tagger.html Standalone local tool to outline people in team photos → PhotoRegion data
```

### Boundaries and conventions

- **Content vs. presentation:** text, links, people, and projects belong in `src/content/*.ts`, never hard-coded in `.vue` files. Updating the roster or copy should require editing only `content/` (and adding an image to `public/assets/`).
- **Officers:** add or edit a person once in `allOfficers`; never duplicate a person across years. Prefer a local `image` over `linkedinPhoto` (LinkedIn CDN URLs expire).
- **Layering:** `pages/` → `sections/` → `components/`. Components must not import pages or sections.
- **New home-page block:** add a file in `sections/`, give it an anchor id, compose it in `HomePage.vue`, and add a `navLinks` entry in `site.ts` if it should appear in the header.
- **New route:** add a page in `pages/` and register it in `router/index.ts`.
- **Styling:** use Tailwind utilities and the theme tokens (`grey`, `light-green`, `dark-green`, `dark`, `dull`, `dull-green`). Put repeated patterns in `styles/shared.css`, not new ad-hoc CSS files.
- **React isolation:** React exists only inside `components/shaderGradientMount.ts`, mounted by `ShaderGradientMesh.vue`. Do not add React elsewhere.
- **Accessibility/motion:** keep visible focus outlines, alt text on images, and reduced-motion handling (as in `v-reveal`).
- **Assets:** reference via absolute public paths (`/assets/...`).

## Do not touch (without asking)

- `package.json` dependencies and lockfiles — no adds/removes/upgrades without approval.
- `public/assets/` existing images — don't rename, compress, or delete; other people's photos are in here.
- Officer personal data (names, LinkedIn URLs) — only change what the task asks for.
- Git history / remote branches — no force-push; `main` receives changes via PRs from feature branches.
- `CLAUDE.md`.

## Phase docs

Layouts and summaries live in the gitignored `/agents` folder at the repo root (per `CLAUDE.md`).

## Open questions / known issues

These were observed while writing this file; confirm before acting on them.

1. **Stale `bun.lock`:** npm is the chosen package manager; `bun.lock` is leftover and can be deleted. `npm audit` reports 15 vulnerabilities (1 critical).
2. **No deploy script** even though `gh-pages` is installed. If hosted on GitHub Pages, `createWebHistory` makes direct visits to `/past-officers` 404 unless a `404.html` fallback or hash history is used.
3. **Unused/odd dependencies:** `fs`, `fs-extra`, `router`, `camera-controls`, `three-stdlib` look unused by browser code.
4. **Committed clutter:** `.vite/`, `lol.txt` (photo-tagger output), and three root-level screenshots are tracked. `/agents` and `.scratch/` are not yet in `.gitignore`.
5. **Lint baseline:** `npm run lint` currently flags `src/sections/Home.vue` (Prettier) and a `v-html` warning in `src/sections/About.vue`. The JS bundle is ~1.5 MB (mostly three.js/React for the hero gradient).
6. **`tailwind.config.js`** is a v3-style file; Tailwind v4 reads `@theme` in CSS instead, so it is likely dead config.
