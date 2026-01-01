# Cat Video Concept Lab

A Next.js application that generates high-retention, platform-safe video blueprints for cat-focused YouTube creators. Each lineup is unique, emotionally resonant, and tailored for storytelling that keeps viewers engaged from hook to loop-friendly ending.

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser to explore the concept lab.

## Available Scripts

- `npm run dev` – Start the development server.
- `npm run build` – Create a production build.
- `npm run start` – Launch the production server.
- `npm run lint` – Run ESLint with the Next.js shareable config.

## Project Structure

```
src/
 ├─ app/
 │   ├─ layout.tsx      # Root layout and metadata
 │   ├─ page.tsx        # Interactive generator UI
 │   └─ globals.css     # Global styles
 ├─ components/
 │   └─ VideoIdeaCard.tsx
 └─ lib/
     └─ ideaGenerator.ts
```

## Key Features

- Generates balanced, original story structures with mood and emotion targeting.
- Provides narration notes, visual prompts, and format guidance per idea.
- Built-in quality control checklist to enforce safety and uniqueness.
- Regenerate button for endless fresh lineups without repetition.

## Deployment

The project is ready to deploy on Vercel:

```bash
npm run build
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-811c3b72
```
