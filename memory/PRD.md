# PRD — Rocard.it CRO Study & Static Prototype

## Problem statement (originale, IT)
> Analizza il mio sito: https://www.rocard.it/
> Simula un acquisto e migliora il sistema di Carrello, Checkout e Thank-you page per renderlo una macchina di conversioni.

## User choices (verbatim)
- Stack: **HTML/CSS/JS statico** (portabile a WooCommerce)
- Scope: **tutti e 4 gli step** + smart enhancement
- Lingua: **italiano + terminologia scientifica**
- Style: seguire grafica rocard.it ma migliorando dove serve
- Tech reale: WooCommerce + WoodMart theme (utente non ha accesso diretto al codice)
- Prodotti: **REALI** presenti sul sito rocard.it
- Deliverable per developer

## Deliverables (8 file in /app/frontend/public/rocard/)
- `index.html` — Hub di navigazione con 3 CTA (Audit, Landing Abbonamento, Dev Brief)
- `cart.html` — Carrello con Caffè Borbone Respresso Miscela Blu (REAL product + REAL image)
- `checkout.html` — Spedizione
- `payment.html` — Pagamento
- `thank-you.html` — Conferma con upsell Borbone Rossa/Nera/Grani (TUTTI REAL Rocard)
- `subscription.html` — Landing dedicata Abbonamento Rocard (smart enhancement) con calcolatore risparmio annuale
- `audit.html` — Analisi CRO completa
- `developer-brief.html` — Documento operativo PRINTABILE per dev (sprint plan 8 settimane, ACF schema, hook PHP, plugin matrix, checklist, A/B test plan)
- `styles.css` + `script.js`

## Iterazione finale
- Sostituiti TUTTI prodotti generici con prodotti REALI di rocard.it:
  - **Caffè Borbone Respresso Miscela Blu** (prodotto principale demo) — img da CDN rocard.it
  - Borbone Rossa, Nera, Grani (upsell)
  - Lavazza A Modo Mio Crema e Gusto (cross-sell)
- Aggiornati prezzi (21,90€ bundle x 3 = 65,70€ totale, vs 23,96€ listino)
- Aggiornata scientific spec con copy caffè (Cremosity Index 87/100, 9 bar, 92-94°C, miscela 70% Robusta + 30% Arabica)
- Creata landing /subscription.html con: calcolatore JS risparmio annuale, comparison table 9 righe, 6 categorie, 3 testimonial, 8 FAQ
- Creato developer-brief.html stampabile con:
  - Executive summary KPI
  - Matrice impatto/sforzo P0-P1-P2
  - Plugin stack table (15 plugin con prezzi)
  - Snippet PHP per bundle pricing, order bumps, shipping bar
  - ACF schema scientific spec
  - 10 eventi GA4 da tracciare
  - Sprint plan 8 settimane (4 sprint da 2 settimane)
  - 6 A/B test ordering per primi 90 giorni
  - Checklist finale 30+ voci

## URL Preview
- Hub: `/rocard/index.html`
- Audit: `/rocard/audit.html`
- Landing Abbonamento: `/rocard/subscription.html`
- Developer Brief: `/rocard/developer-brief.html`
- Step: `/rocard/cart.html` → `/checkout.html` → `/payment.html` → `/thank-you.html`

## Dates
- 2026-05-14 v1.0: Studio CRO + prototipo statico completo
- 2026-05-14 v1.1: Prodotti REALI Rocard + Landing Abbonamento + Developer Brief printable
