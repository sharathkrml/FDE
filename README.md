# FDE — learning roadmap (Vite + React + TypeScript)

A video-first, beginner → advanced path to becoming a Forward Deployed Engineer.
Each session embeds a YouTube player with a **timestamp sidebar** — click any chapter to
jump straight to that part. The home page summarises what you'll learn across the whole path.

## Run it

```bash
cd FDE
npm install
npm run dev        # http://localhost:5173 (opens automatically)
```

Build / preview:

```bash
npm run build      # typecheck (tsc --noEmit) + -> dist/
npm run typecheck  # tsc --noEmit only
npm run preview    # serve the built site
```

## Routes

- `#/` — **Home.** Stats, "What you'll learn" per phase, and a card grid of all sessions.
- `#/session/:id` — **Session.** Embedded player + video switcher, a clickable timestamp
  sidebar ("What you'll learn"), the session's key concepts, and the "Build this" exercise.

Uses `HashRouter`, so `dist/` works from any static host or even `file://`.

## What's inside

7 phases · 16 sessions · 83 video cards (81 unique) · **67 with real chapter timestamps**.

| Phase | Tag | What it covers |
|---|---|---|
| 00 | Orientation | What an FDE is, the day, the market |
| 01 | Foundations *(optional)* | Python/Git/Linux, system design, SQL, APIs, OAuth, webhooks |
| 02 | The LLM toolkit | How LLMs work, prompting, context engineering, structured outputs, cost math |
| 03 | Build the deliverable | Enterprise RAG, agents & tool calling, MCP & integration glue |
| 04 | Deploy & operate | Docker/K8s, deploy-anywhere, evals, observability, security & guardrails |
| 05 | The field | Discovery & scoping, the demo, pilot→production, proving ROI |
| 06 | Career & interview | The FDE loop, positioning, applying |

For the 16 videos where YouTube publishes no chapters, the sidebar shows the session's
key concepts instead of inventing timestamps.

## Project layout

```
FDE/
  index.html              Vite entry
  vite.config.ts
  tsconfig.json           strict TS, bundler resolution
  src/
    main.tsx              HashRouter + mount
    App.tsx               topbar, sidebar nav, routes, footer
    styles.css
    components/
      Sidebar.tsx         phase/session navigation
      Home.tsx            stats + "what you'll learn" + session grid
      Session.tsx         player, video switcher, timestamp sidebar
      Player.tsx          YouTube IFrame API wrapper (seek support)
    data/
      roadmap.ts          AUTO-GENERATED curriculum (typed: Phase/Station/VideoResource)
      util.ts             selectors + formatting helpers
    types/
      global.d.ts         window.YT / onYouTubeIframeAPIReady declarations
```

## Data & regeneration

`src/data/roadmap.ts` is generated, not hand-edited. It came from:

1. the original roadmap content (phases, sessions, resources, notes, "build this"), and
2. YouTube chapter extraction via `yt-dlp`, plus an oEmbed liveness check on every link.

To add or replace a resource, edit the generated `roadmap.ts` directly (each resource is
`{ v, title, channel, seconds, note, chapters: [{ t, title }] }`, typed as `VideoResource`)
— or regenerate chapters for a new video id:

```bash
yt-dlp --skip-download --dump-json "https://www.youtube.com/watch?v=<ID>" \
  | python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('chapters'))"
```

## Sources

- [Vibe Engines — Forward-Deployed Engineer Roadmap 2026](https://vibeengines.com/roadmap/forward-deployed-engineer)
  — Craft / Field / Outcome structure and the per-session "build this" exercises.
- [roadmap.sh — Forward Deployed Engineer](https://roadmap.sh/forward-deployed-engineer)
  — the technical stack.
- `FDE.md` in this repo — the practitioner/roadmap source list.

## Connects to the rest of the repo

- `wiki/strategy/fde-job-hunt.md` — target companies, runway math, application schedule.
- `todo.md` — the weekly execution list.
- `watchlist.md` — who to follow/reply to.
- `wiki/concepts/forward-deployed-engineering.md` — market data and content angles.
