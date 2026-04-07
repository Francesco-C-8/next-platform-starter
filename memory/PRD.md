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
- [x] Aggiornamento metriche reali (7 Apr 2026):
  - Logistica: 1.000 mq, circa 2.000 ordini/giorno
  - Numeri: ~750.000 spedizioni/anno, 2.000+ prodotti, ~10 collaboratori
  - Logo Rocard reale da rocard.it
  - Immagine magazzino (stock Unsplash)
  - Immagine selezione prodotti (stock Unsplash)
  - "Non offriamo lavoro da remoto" in Lavora con noi
  - Tutte le email impostate su info@rocard.it
  - Posizioni lavorative: tutte "Sede Latina" (nessun remoto)

### Backlog
- Nessuna attività pendente

## Dati Reali Rocard
- Spedizioni/anno: ~750.000
- Prodotti a catalogo: 2.000+
- Collaboratori: ~10
- Magazzino: 1.000 mq
- Ordini/giorno: ~2.000
- Email contatto: info@rocard.it
- Logo: https://www.rocard.it/wp-content/uploads/2025/09/rocard-logo.png
