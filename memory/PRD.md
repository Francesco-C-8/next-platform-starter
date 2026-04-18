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
- Template HTML autocontenuti (CSS embed + HTML) pronti per copia-incolla nel Widget HTML di Elementor
- React preview app per visualizzazione live
- Tema colori Rocard: blu (#1a3c6e) / arancione (#f57c00)
- Font: Outfit + Cormorant Garamond

## Dati Aziendali
- Ragione sociale: RCM S.r.l.
- P.IVA: 09736331217
- Sede: Localita' Ponte Riccio, snc - 80014 Giugliano in Campania (NA)
- Telefono: +39 077 31888391
- PEC: rcm21@pec.it
- Email: info@rocard.it
- Logo: monogramma "R" dorato

## Stato Implementazione

### Completato (Aprile 2026)
- [x] Setup React preview environment
- [x] Creazione 7 template HTML standalone per Elementor
- [x] CSS globale tema Rocard
- [x] Chi Siamo: struttura identica alla versione live rocard.it/chi-siamo/
- [x] Loghi corrieri: GLS, BRT, Poste Italiane (ufficiali)
- [x] Logo Rocard: monogramma "R" dorato
- [x] Dati aziendali RCM SRL in Contatti e Footer
- [x] Posizioni lavorative: solo Addetto Logistica e Customer Care (Giugliano in Campania)
- [x] Contatti: email unica info@rocard.it con categorizzazione automatica
- [x] "Non offriamo lavoro da remoto" in Lavora con noi
- [x] Metriche aggiornate: ~750K spedizioni/anno, 2.000+ prodotti, ~10 collaboratori, 1.000 mq
- [x] **Conversione tutti i 7 template in formato Elementor drop-in** (autocontenuti con style+html)
- [x] Sostituzione emoji con icone SVG inline
- [x] Aggiornamento font da Poppins a Outfit + Cormorant Garamond (come sito live)
- [x] README aggiornato con istruzioni semplificate copia-incolla

### Formato Template Elementor
Ogni file HTML contiene:
1. Link Google Fonts
2. Tag `<style>` con tutto il CSS (scoped al wrapper)
3. `<div class="rocard-[pagina]">` wrapper con tutto l'HTML

L'utente puo' semplicemente copiare il contenuto del file e incollarlo in un Widget HTML di Elementor.

### Fonti Loghi Corrieri
- GLS: wp-content/uploads (caricato nella Media Library)
- BRT: wp-content/uploads (caricato nella Media Library)
- Poste Italiane: wp-content/uploads (caricato nella Media Library)
