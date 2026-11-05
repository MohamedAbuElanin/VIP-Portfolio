# VIP Portfolio

Premium bilingual portfolio and business platform for Mohamed Osman Abu Al-Anin.

## Run locally

```bash
npm install
npm run dev
```

Public pages are available under `/en` and `/ar`; the administration interface is at `/admin`.

## Supabase setup

Copy `.env.example` to `.env.local`, create a Supabase project, and apply:

`supabase/migrations/202611060001_initial_schema.sql`

Without Supabase configuration, valid inquiries are stored in `.data/inquiries.jsonl`.

## Admin provisioning

Create one owner account in Supabase Authentication. Before production, add server-side authorization checks and middleware protection for `/admin`. Do not expose a public registration flow.

## Verification

```bash
npm run lint
npm run build
```

## Backup and recovery

Export database tables regularly and store copies outside Supabase. Back up Storage objects separately, verify exports with a restore test, and document the chosen free-tier retention limits. Never perform destructive restoration without explicit confirmation.
