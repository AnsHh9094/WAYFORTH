# Wayforth Advisory — Technical Deployment & Handover Guide

This document contains everything needed to manage, configure, and maintain the official **Wayforth** web application (`wayforth.in`).

---

## 1. Domain & DNS Configuration (GoDaddy &rarr; Vercel)

To link the custom domain `wayforth.in` purchased on GoDaddy to the cloud deployment on Vercel:

### DNS Records to Enter in GoDaddy DNS Management:
| Record Type | Name / Host | Value / Points To | TTL |
| :--- | :--- | :--- | :--- |
| **A** | `@` | `76.76.21.21` | 600s (or 1/2 hour) |
| **CNAME** | `www` | `cname.vercel-dns.com` | 600s (or 1/2 hour) |

> ⚠️ **Important:** Do not delete or overwrite any existing `MX` or `TXT` records used for email services.
> 
> **SSL (HTTPS):** An enterprise-grade SSL/TLS certificate is automatically generated and renewed for free by Vercel upon DNS propagation (no recurring GoDaddy SSL fee required).

---

## 2. Lead Dispatch & WhatsApp Integration

All quotations generated via the interactive calculator on `wayforth.in` are structured and dispatched directly to the official advisory WhatsApp desk:

* **WhatsApp Contact Number:** `+91 91571 88560`
* **Raw Number in Code:** `919157188560`
* **Official Support Email:** `support.wayforth@gmail.com`

To modify the WhatsApp number or email in the future, simply update `src/config/brand.config.ts`:
```typescript
contactEmail: 'support.wayforth@gmail.com',
whatsappNumber: '+91 91571 88560',
whatsappRawNumber: '919157188560',
```

---

## 3. Technology Architecture & Stack

* **Framework:** Next.js 15 (App Router, Turbopack, React 19)
* **Language:** TypeScript 5 (Strict mode)
* **Styling:** Tailwind CSS + PostCSS
* **Animation:** Framer Motion (Smooth editorial reveal transitions)
* **Icons:** Lucide React Icons
* **Hosting:** Vercel Global Edge Network

---

## 4. Local Development Commands

To run the project on a local machine:

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev
# Accessible at http://localhost:3000

# 3. Create production build
npm run build

# 4. Start production server locally
npm run start
```

---

## 5. Support & Intellectual Property

All design assets, typography arrangements, vector logos, copy frameworks, and codebase are transferred to **Wayforth Advisory** upon completion of final settlement.
