# HEMOBOT

**Find Hemophilia Care Near You** — A specialized hemophilia information and community platform focused on Palo Alto, California.

HEMOBOT helps patients, parents, and caregivers find nearby Hemophilia Treatment Centers, access reliable educational information, connect with community support, and keep a private care journal.

> **Important:** HEMOBOT is an educational platform only. It does not diagnose medical conditions or provide individualized medical advice.

## Features

- **Find Care** — Interactive Google Maps directory of hospitals, HTCs, and hematologists near Palo Alto
- **Hemophilia Assistant** — AI chatbot for general educational questions (Gemini-powered, safety-first)
- **Learn** — Curated articles from CDC, Mayo Clinic, NBDF, and peer-reviewed sources
- **Community Forum** — Moderated peer support with reporting tools
- **My Hemophilia Journal** — Private personal notes and appointment records
- **Government Resources** — Official federal and California state healthcare links
- **Newly Diagnosed Pathway** — Guided first steps for new families
- **Meet the Team** — HEMOBOT team page

## Tech Stack

- **Frontend:** Next.js 15, React 19, TypeScript, Tailwind CSS
- **Backend:** Next.js API Routes
- **Database:** SQLite via Prisma ORM
- **Maps:** Google Maps JavaScript API, Places API, Geocoding API
- **AI:** Google Gemini API

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
cd ~/Projects/hemobot
npm install
cp .env.example .env   # Add your API keys
npm run db:setup
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment Variables

Copy `.env.example` to `.env` and configure:

| Variable | Description |
|----------|-------------|
| `GOOGLE_MAPS_API_KEY` | Google Maps JavaScript, Places, and Geocoding APIs |
| `GEMINI_API_KEY` | Google Gemini API for Hemophilia Assistant |
| `DATABASE_URL` | SQLite database path (default: `file:./dev.db`) |
| `SESSION_SECRET` | Session secret for production |

**Security:** Never commit `.env` files. Restrict your Google Maps API key by HTTP referrer in Google Cloud Console.

## Project Structure

```
src/
├── app/              # Next.js App Router pages and API routes
├── components/       # Reusable UI components
├── data/             # Healthcare facilities, knowledge base, resources
└── lib/              # Utilities, Prisma client, chatbot safety
prisma/
├── schema.prisma     # Database schema
└── seed.ts           # Sample forum data
```

## Geographic Scope

Initial focus: **Palo Alto, CA** → designed to expand to Bay Area → California → US → International.

## Medical Disclaimer

HEMOBOT provides educational information only. In a medical emergency, call **911**. For personal medical questions, contact a qualified healthcare professional or Hemophilia Treatment Center.

## Team

Ceren Cannazik · Aakash Aggrwal · Matteo Marrufo · Justin Law · Nil Canozkan
