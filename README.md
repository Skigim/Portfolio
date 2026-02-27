# Portfolio

A modern, visually rich portfolio landing page built with **Next.js 16**, **TypeScript**, and **Tailwind CSS**.

## Overview

This portfolio highlights **methods and reasoning** over syntax, with expandable case studies that document the challenge, approach and outcome for each project.

### Sections

- **Hero** — animated particle network, gradient typography, availability badge and social links
- **Methods & Approach** — six principle cards covering problem decomposition, iterative reasoning, AI augmentation, systems thinking, abstraction design, and evidence-driven decisions
- **Selected Work** — expandable case-study cards with methodology tags, year badges and measurable outcomes
- **Skills & Tools** — four-category grid (Reasoning, AI/ML, Engineering, Practices)
- **Contact** — email, GitHub and LinkedIn link cards

### Tech Stack

- [Next.js](https://nextjs.org) (App Router)
- [Tailwind CSS](https://tailwindcss.com) for styling
- [Framer Motion](https://www.framer.com/motion/) for scroll-triggered animations
- [Lucide React](https://lucide.dev) for icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customisation

All portfolio content lives in a single file:

```
src/data/portfolio.ts
```

Edit `siteConfig`, `approaches`, `caseStudies`, and `skills` to replace the sample data with your own information.

## Deploy

The easiest way to deploy is via [Vercel](https://vercel.com/new):

```bash
npx vercel
```
