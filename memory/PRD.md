# Rocard Corporate Pages - PRD

## Problema Originale
Sviluppo sezione "Azienda" (Corporate) per il sito WordPress/WooCommerce rocard.it con l'obiettivo di migliorare il brand positioning e creare un recruiting funnel.

## Pagine Richieste
1. Chi siamo
2. Vision & Valori
3. Il nostro modello
4. Numeri & Crescita
5. Il team
6. Lavora con noi
7. Contatti aziendali

## Deliverables
- Template HTML semantici standalone con CSS inline, pronti per copy-paste in Elementor
- React preview app per visualizzazione live
- Tema colori Rocard: blu (#1a3c6e) / arancione (#f57c00)

## Architettura
```
/app/frontend/
├── src/App.js (React preview con tutte le 7 pagine + homepage + routing)
├── src/App.css, src/index.css (Stili globali)
├── public/html-templates/ (7 file HTML standalone + CSS)
│   ├── chi-siamo.html
│   ├── contatti-aziendali.html
│   ├── lavora-con-noi.html
│   ├── nostro-modello.html
│   ├── numeri-crescita.html
│   ├── team.html
│   ├── vision-valori.html
│   └── rocard-corporate-styles.css
```

## Stato Implementazione

### Completato
- [x] Setup React preview environment
- [x] Creazione 7 template HTML standalone per Elementor
- [x] CSS globale tema Rocard
- [x] Aggiornamento metriche reali (7 Apr 2026)
- [x] Logo Rocard reale (monogramma "R" dorato) caricato dall'utente
- [x] Pagina Chi Siamo riscritta per replicare la struttura live rocard.it/chi-siamo/ (7 Apr 2026):
  - Hero con immagine sede
  - La Nostra Storia
  - I Numeri di Rocard (+1.200 prodotti, 2.000+ spedizioni/giorno, 730.000+ clienti, 4.8★)
  - I Servizi Rocard (Resi, Pagamenti, Spedizioni, Trusted Shops)
  - Testimonials
  - Sostenibilità/Treedom
  - Corrieri Partner (GLS, BRT, Poste Italiane)
  - Visione Futura
  - Trust Badges
- [x] Posizioni lavorative: rimossi Digital Marketing Specialist e E-commerce Manager
- [x] Sede aggiornata: Giugliano in Campania (NA) in tutte le pagine
- [x] Contatti: email unica info@rocard.it con nota su categorizzazione automatica
- [x] "Non offriamo lavoro da remoto" aggiunto in Lavora con noi
- [x] Logistica: 1.000 mq, circa 2.000 ordini/giorno
- [x] Numeri altre pagine: ~750K spedizioni/anno, 2.000+ prodotti, ~10 collaboratori

### Backlog
- Nessuna attività pendente

## Dati Reali Rocard
- Spedizioni/anno: ~750.000
- Prodotti a catalogo: 2.000+
- Collaboratori: ~10
- Magazzino: 1.000 mq
- Ordini/giorno: ~2.000
- Email contatto: info@rocard.it
- Sede: Giugliano in Campania (NA)
- Logo: https://customer-assets.emergentagent.com/job_rocard-careers/artifacts/36kv6bld_images.jpeg
