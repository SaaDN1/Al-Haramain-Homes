# Al-Haramain Homes Website

This is the production-facing marketing and enquiry website for **Al-Haramain Homes** (backed by IIG).

## Live Site Status

- Production URL: https://al-haramain-homes.vercel.app/
- Status: Live
- Last verified: 2026-03-06

## Platform Used and Why

- Platform: **React + Vite**
- Why: Fast to iterate, easy to maintain, and simple to deploy on Vercel.
- Design goal: Premium, trust-first experience for serious Muslim buyers considering homes in/near Makkah and Madinah.

## Prerequisites

- Node.js 20+ recommended
- npm 10+ recommended

## What the Site Covers

The website includes:
- Clear explanation of the Al-Haramain Homes proposition
- High-level legal/market context (Saudi regulation + Vision 2030 context)
- Shariah-compliant positioning
- IIG-backed A-Z advisory model
- Audience fit section (who this is for)
- Step-by-step process section
- FAQ section
- Embedded application flow

## Form and Payment Flow (£25)

Current flow:
1. User lands on `Check Your Eligibility`
2. User completes embedded Tally application form.
3. User pays a **£25 priority review fee** in the same form journey (configured in Tally).
4. Team reviews paid submissions and follows up

Tally URL in use:
- Embedded: `https://tally.so/embed/obAZp1?alignLeft=0&hideTitle=1&transparentBackground=1`
- Direct fallback: `https://tally.so/r/obAZp1`


## Where Submissions Go

Submissions are managed in **Tally** and export to **Google Sheets**.


## How to Edit Website Content

Main content file:
- `src/App.jsx`

Main theme styles:
- `src/styles/theme.css`

Header/footer styles:
- `src/styles/header-footer.css`

Typical updates:
- Section copy and headings: edit in `src/App.jsx`
- Layout and spacing: edit in `src/styles/theme.css`
- Nav and footer behavior: edit in `src/styles/header-footer.css`

## Local Development

Use the exact folder name with the Unicode hyphen:
- `Al‑Haramain Homes`

Commands:
```bash
cd "Al‑Haramain Homes"
npm install
npm run dev
npm run build
npm run preview
```

## Troubleshooting

- If `npm run dev` fails immediately, first confirm you are in `Al‑Haramain Homes` (Unicode hyphen `‑`, not ASCII `-`).
- If the dev server appears stuck, stop any running Node processes, then run `npm run dev` again.

## Deployment Notes

- Target platform: Vercel
- Production command: `npm run build`
- After each deploy, verify:
	- Enquiry form embed loads: `obAZp1`
	- Tally fallback link opens
	- Footer legal links (`/privacy-policy.html`, `/terms-of-service.html`) return 200
