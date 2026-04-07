# Rocard Corporate Website - PRD

## Original Problem Statement
Sviluppo area "Azienda" su rocard.it per:
- Posizionare Rocard come azienda strutturata
- Migliorare percezione di affidabilità
- Creare funnel per raccolta candidature

Stack richiesto: WordPress/Elementor/WooCommerce
Output: HTML standalone importabile in Elementor

## User Personas
1. **Candidati** - Cercano lavoro, vogliono conoscere l'azienda e candidarsi
2. **Clienti** - Vogliono capire chi è Rocard prima di acquistare
3. **Fornitori/Partner** - Cercano contatti aziendali per collaborazioni
4. **HR interno** - Gestiscono candidature e posizioni aperte

## Core Requirements (Static)
- 7 pagine corporate con template riutilizzabile
- Form candidatura funzionale
- Stile coerente con brand Rocard (blu #1a3c6e, arancione #f57c00)
- HTML semantico e commentato per Elementor
- Mobile-first, layout pulito e professionale

## What's Been Implemented
**Date: January 2025**

### Pages Created (7/7)
1. ✅ **Chi siamo** - `/chi-siamo` - Hero, chi è Rocard, mission, come lavoriamo
2. ✅ **Vision & Valori** - `/vision-valori` - Vision, 5 valori fondamentali
3. ✅ **Il nostro modello** - `/nostro-modello` - E-commerce, logistica, customer care, selezione prodotti
4. ✅ **Numeri & Crescita** - `/numeri-crescita` - Counter section con 8 metriche
5. ✅ **Il team** - `/team` - Intro team, 3 divisioni (logistica, customer care, marketing)
6. ✅ **Lavora con noi** - `/lavora-con-noi` - PRIORITÀ COMPLETATA
   - Hero section
   - 6 benefit cards
   - 4 posizioni aperte
   - Processo selezione (4 step)
   - Form candidatura completo
7. ✅ **Contatti aziendali** - `/contatti-aziendali` - 4 contact cards, info sede

### Form Candidatura
Campi implementati:
- Nome, Cognome, Email, Telefono
- Ruolo di interesse (dropdown con 5 opzioni)
- Upload CV (PDF, DOC, DOCX)
- Messaggio/Presentazione
- Privacy checkbox

### HTML Templates
Creati in `/app/frontend/public/html-templates/`:
- `lavora-con-noi.html`
- `chi-siamo.html`
- `vision-valori.html`
- `numeri-crescita.html`
- `contatti-aziendali.html`
- `nostro-modello.html`
- `team.html`
- `rocard-corporate-styles.css` (CSS standalone per WordPress)

### Design System
- Font: Poppins (Google Fonts)
- Colori: Blu Rocard (#1a3c6e), Arancione (#f57c00)
- Componenti: Hero, Content Block, Numbers Grid, Values Cards, Form, CTA

## Prioritized Backlog

### P0 - Completato ✅
- [x] Lavora con noi + form
- [x] Template riutilizzabile
- [x] Chi siamo
- [x] Tutte le altre pagine

### P1 - Da implementare in WordPress
- [ ] Collegare form a Elementor Form widget
- [ ] Configurare invio email a info@rocard.it
- [ ] Creare Custom Post Type "Posizioni" 
- [ ] Configurare salvataggio candidature in database
- [ ] Export candidati

### P2 - Miglioramenti futuri
- [ ] Aggiungere foto reali del team
- [ ] Integrare mappa Google per sede
- [ ] Aggiungere filtri posizioni per sede/tipo
- [ ] Newsletter per nuove posizioni

## Next Tasks
1. Importare HTML templates in Elementor
2. Configurare Elementor Form per invio email
3. Creare CPT "Posizioni" in WordPress
4. Inserire contenuti definitivi (forniti dal cliente)
5. SEO: configurare URL puliti e meta tags

## Technical Notes
- React app demo: https://rocard-careers.preview.emergentagent.com
- CSS standalone disponibile per copia in WordPress
- Tutte le sezioni commentate nel codice HTML
- Mobile responsive testato
