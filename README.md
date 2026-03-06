# Al-Haramain Homes Website

This is the production-facing marketing and enquiry website for **Al-Haramain Homes** (backed by IIG).

## Live Site Status

- Production URL: `ADD_YOUR_LIVE_URL_HERE`
- Status: Update this value immediately after deployment so the team can use the site without developer access.

## Platform Used and Why

- Platform: **React + Vite**
- Why: Fast to iterate, easy to maintain, and simple to deploy to Netlify/Vercel/Cloudflare Pages.
- Design goal: Premium, trust-first experience for serious Muslim buyers considering homes in/near Makkah and Madinah.

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

## Form and Payment Flow (GBP 25)

Current flow:
1. User lands on `Check Your Eligibility`
2. User completes embedded Tally application form.
3. User pays a **GBP 25 priority review fee** in the same form journey (configured in Tally).
4. Team reviews paid submissions and follows up

Tally URL in use:
- Embedded: `https://tally.so/embed/obAZp1?alignLeft=0&hideTitle=1&transparentBackground=1`
- Direct fallback: `https://tally.so/r/obAZp1`

Important:
- Keep the payment requirement enabled in Tally to ensure only paid submissions are processed.
- Keep mandatory qualification questions active (identity, budget, timeline, purpose, family context, etc.).

### Required Qualification Depth

The Tally form should keep **20-30 meaningful screening questions**. Minimum coverage:
- Identity and contact details
- Country/city and residency status
- Budget range and source of funds
- Purchase purpose (relocation / second home / long-term investment)
- Timeline and decision readiness
- Family situation and usage needs
- Prior ownership/investment experience
- Risk expectations and support needed

### Payment-to-Submission Verification

Before go-live, run this test checklist:
1. Submit a test entry without payment and confirm it is blocked.
2. Complete payment and confirm submission succeeds.
3. Confirm submitted record includes payer email/reference so paid users can be traced.
4. Confirm notifications and destination sheet/CRM receive the paid submission.

## Where Submissions Go

Submissions and payment-linked entries are managed in **Tally**.

Recommended setup in Tally admin:
- Email notifications to ops inbox
- Google Sheets sync (optional but recommended)
- Tag/label paid submissions for priority follow-up

## Owner Login and Handover

Record and share these with operations:
- Hosting platform login (Netlify/Vercel/Cloudflare Pages) and project name
- Tally workspace access where form `obAZp1` is managed
- Notification email inbox for submissions
- Any connected spreadsheet/CRM destination

Owner edit paths:
- Website copy/layout: update code in `src/App.jsx` and redeploy
- Form fields/payment rule: update directly in Tally admin

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
npm install
npm run dev
npm run build
```

## Deployment Notes

Deploy the project root to your preferred host (Netlify/Vercel/etc.).

After deploy:
1. Paste the real production URL into `Live Site Status` above.
2. Confirm the domain is reachable on desktop and mobile.

Post-deploy checklist:
- Confirm all nav anchors land correctly
- Confirm hero slideshow transitions smoothly
- Confirm Tally iframe loads on desktop/mobile
- Confirm direct fallback Tally link works
- Confirm GBP 25 fee is required before successful submission

Compliance/trust checklist before traffic:
- Confirm Privacy Policy and Terms of Service pages open and match current policy
- Ensure all legal wording is approved by the business before paid traffic

## Ownership Checklist

Before sending traffic to this site, verify:
- Logo is final and readable on all devices
- FAQ and legal language match current policy
- Tally form includes full qualification questions (target depth: serious screening)
- GBP 25 payment step is active and tested end-to-end
- Submission destination (email/sheet) is monitored daily
