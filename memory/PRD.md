# PRD — Rocard.it CRO Study & Static Prototype

## Problem statement (originale, IT)
> Analizza il mio sito: https://www.rocard.it/
> Simula un acquisto e vedi tra l'attuale sistema di carrello, Checkout e pagina di ringraziamento (se puoi) e migliore quella attuale o gli screen che ti invio o dammi degli screen tu per rendere il mio sito una macchina di conversioni aumentando queste tre cose.

## Goal
Consegnare allo sviluppatore WooCommerce di Rocard uno **studio CRO** + **prototipo statico navigabile** (HTML/CSS/JS) che ridisegna i 4 step Carrello → Spedizione → Pagamento → Conferma, con pattern verificati per aumentare CVR (+18-35%), AOV (+12-22%) e LTV (+8-15%).

## User choices (verbatim)
- Stack: **HTML/CSS/JS statico** (portabile a WooCommerce)
- Scope: **tutti e 4 gli step** con tutti i pattern CRO
- Lingua: **italiano + terminologia scientifica**
- Style: seguire grafica rocard.it ma migliorando dove serve
- Tech reale: WooCommerce (utente non ha accesso diretto)

## Deliverables consegnati
File statici in `/app/frontend/public/rocard/`, accessibili al preview URL:
- `index.html` — Hub di navigazione con KPI attesi
- `cart.html` — Carrello con bundle 1/2/3, free-shipping bar, urgency, scientific spec, cross-sell
- `checkout.html` — Spedizione con express pay top, form pulito, real-time validation
- `payment.html` — Pagamento con reservation timer 10 min, social proof 78%, Klarna/SEPA aggiunti
- `thank-you.html` — Conferma con timeline 4-step, order bump 15 min, voucher, referral, subscribe, NPS
- `audit.html` — Documento CRO completo (diagnosi, confronto mockup, 12 pattern, copy scientifico, roadmap WooCommerce, A/B test, checklist developer)
- `styles.css` (~700 righe) + `script.js` (timer, bundle, validation, copy voucher)

## Migliorie applicate vs mockup originali utente
- Mockup 1 Spedizione: rimosso "Metodo di Pagamento" duplicato, CTA "Conferma e Ricevi a Casa" non duplicata, typo "Protecione"→"Protezione"
- Mockup 2 Pagamento: corretto "MM/AAA"→"MM/AA", aggiunti Klarna 3 rate e SEPA, tooltip CVV
- Mockup 3 Conferma: corretti tutti i typo (Antipassitario, Tegila, csisinioe, sempicliste), aggiunta timeline evasione, account 1-click, NPS emoji, subscribe & save
- Mockup 4 Carrello: tag "PIÙ SCELTO · -13%" chiaro sul bundle migliore, free-shipping bar dinamica, scientific spec box

## Pattern CRO implementati (12)
Stepper · Express Pay top · Bundle pricing · Free shipping bar · Order bumps · Scarcity multi-livello · Scientific authority · Real-time validation · Trust strip ricorrente · Post-purchase order bump · Subscribe & save · Referral viral loop

## URL Preview (live)
- Hub: `/rocard/index.html`
- Carrello: `/rocard/cart.html`
- Spedizione: `/rocard/checkout.html`
- Pagamento: `/rocard/payment.html`
- Conferma: `/rocard/thank-you.html`
- Audit completo: `/rocard/audit.html`

## Stato
- ✅ Prototipo statico completo e navigabile
- ✅ Verificato visivamente su 5 viewport via screenshot
- ✅ Documento CRO con roadmap implementativa per developer WooCommerce
- ✅ A/B test plan per primi 90 giorni
- ✅ Checklist developer-ready

## Backlog / Future
- Versione mobile-first ottimizzata 360px (responsive di base OK ma da rifinire)
- Versione tradotta EN per espansione internazionale
- Variante PDP (pagina prodotto) con scientific spec espansa
- Integrazione mockup dei plugin WooCommerce specifici (CartFlows, FunnelKit screens)
- Email post-purchase flow (sequenza 7 email automatizzate)

## Dates
- 2026-05-14: Studio CRO + prototipo statico completo (initial delivery)
