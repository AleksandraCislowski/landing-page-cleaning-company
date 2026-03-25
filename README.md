# Städfirma — Landing Page

> A production-ready commercial website built for a real cleaning company operating in Stockholm, Sweden.

---

## What is this?

This is a full landing page I designed and built from scratch for a local cleaning business. The client needed an online presence that would convert visitors into paying customers — so the entire project was shaped around that goal: clear service presentation, social proof, direct contact, and a seamless experience on any device.

The site is live, deployed on Vercel, and actively used by the business.

---

## What problems does it solve?

**Before:** The company had no website. Customers had no way to browse services, check prices, or get in touch outside of word-of-mouth.

**After:**

- Potential customers can explore all services with full pricing details in a modal dialog
- A before/after photo gallery builds trust before the first call
- A contact section with a working email form, clickable phone number, and embedded Google Maps removes all friction
- A "Get a Quote" button opens a pre-filled email directly — no form needed
- Customer reviews are presented as animated bubbles to feel alive, not static

---

## Highlights

**Bilingual (Swedish / English)**
Full i18n support with instant language switching — no page reload. The site auto-detects browser language on first visit.

**Conversion-oriented UX**
Every section is designed to move the visitor toward a booking: hero CTA → services → gallery → reviews → contact. The layout follows a deliberate information hierarchy.

**Polished animations**
Scroll-reveal on gallery pairs, a smooth Ken Burns effect on the carousel, dialog transitions, accordion elevation, and a glass-morphism header that reacts to scroll — all with `prefers-reduced-motion` support.

**RUT deduction guide**
Swedish customers can access a dedicated page explaining how to claim the government's 50% tax deduction on cleaning services (RUT-avdrag), which is a major purchase driver in this market.

---

## Tech stack

| Layer      | Choice                                |
| ---------- | ------------------------------------- |
| UI         | React 18 + TypeScript                 |
| Components | Material-UI (MUI v5)                  |
| Styling    | MUI `sx` prop + CSS-in-JS keyframes   |
| i18n       | i18next + react-i18next               |
| Routing    | React Router v7                       |
| Backend    | Vercel Serverless Functions (Node.js) |
| Deployment | Vercel (Free tier, CI/CD from GitHub) |

---
