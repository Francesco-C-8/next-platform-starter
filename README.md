# Rocard Corporate Pages - Guida per il Developer

## Panoramica
Questo progetto contiene le 7 pagine della sezione "Azienda" per il sito WordPress/WooCommerce **rocard.it**, pronte per essere inserite in **Elementor**.

---

## Struttura del progetto

```
frontend/
  public/
    html-templates/          <-- FILE DA USARE IN WORDPRESS
      chi-siamo.html
      vision-valori.html
      nostro-modello.html
      numeri-crescita.html
      team.html
      lavora-con-noi.html
      contatti-aziendali.html
      rocard-corporate-styles.css   <-- CSS globale
    images/                  <-- Loghi corrieri da caricare in Media Library
      gls-logo.png
      brt-logo.svg
      poste-italiane-logo.png
  src/
    App.js                   <-- Preview React (riferimento visivo)
    App.css
    index.css
```

---

## Istruzioni passo-passo

### Step 1: CSS Globale

Copia **tutto** il contenuto di `frontend/public/html-templates/rocard-corporate-styles.css` in una di queste posizioni:

- **Aspetto > Personalizza > CSS Aggiuntivo**
- oppure **Elementor > Impostazioni sito > CSS personalizzato**

Questo file contiene le variabili colore, le classi per le griglie, le card, i bottoni, i form e tutti gli stili condivisi tra le pagine.

### Step 2: Caricare le immagini

Carica nella **Media Library** di WordPress le seguenti immagini dalla cartella `frontend/public/images/`:

| File | Descrizione |
|------|-------------|
| `gls-logo.png` | Logo GLS (moderno, sfondo blu) |
| `brt-logo.svg` | Logo BRT (ufficiale SVG) |
| `poste-italiane-logo.png` | Logo Poste Italiane (ufficiale) |

Dopo il caricamento, **annota gli URL** generati da WordPress (es. `https://www.rocard.it/wp-content/uploads/2026/04/gls-logo.png`) perche' andranno sostituiti nei blocchi HTML.

### Step 3: Creare le pagine in Elementor

Per ogni pagina:

1. Crea una nuova pagina WordPress (es. "Chi siamo")
2. Apri con Elementor
3. Apri il file `.html` corrispondente dalla cartella `html-templates/`
4. Ogni file contiene:
   - Un blocco `<style>` in cima con CSS specifici della pagina -> **copialo nel CSS Aggiuntivo** o in un widget HTML in cima alla pagina
   - Sezioni HTML commentate (es. `<!-- HERO CON IMMAGINE SEDE -->`) -> **copia ogni sezione in un widget HTML separato** di Elementor
5. Sostituisci gli URL delle immagini con quelli della Media Library di WordPress

### Step 4: Aggiornare gli URL delle immagini

Nei file HTML troverai URL esterni per le immagini. Sostituiscili con gli URL della Media Library:

**Loghi corrieri** (in `chi-siamo.html`):
```
https://customer-assets.emergentagent.com/...hjsao1eg_images.png  -->  [URL Media Library GLS]
https://services.brt.it/.../logo-brt.svg                         -->  [URL Media Library BRT]
https://www.posteitaliane.it/.../logo-poste-italiane.png          -->  [URL Media Library Poste]
```

**Immagine sede/capannone** (in `chi-siamo.html` e `contatti-aziendali.html`):
```
https://customer-assets.emergentagent.com/...lyxjn2y2_ChatGPT-Image...  -->  [URL Media Library immagine sede]
```

---

## Colori Brand Rocard

| Colore | Variabile CSS | Hex |
|--------|--------------|-----|
| Blu Rocard | `--rocard-blue` | `#1a3c6e` |
| Blu scuro | `--rocard-blue-dark` | `#0f2847` |
| Arancione Rocard | `--rocard-orange` | `#f57c00` |
| Arancione scuro | `--rocard-orange-dark` | `#e65100` |

---

## Dati aziendali utilizzati

- **Ragione sociale:** RCM S.r.l.
- **P.IVA:** 09736331217
- **Sede:** Localita' Ponte Riccio, snc - 80014 Giugliano in Campania (NA)
- **Telefono:** +39 077 31888391
- **PEC:** rcm21@pec.it
- **Email:** info@rocard.it

---

## Pagine e contenuti

| Pagina | File | Contenuto principale |
|--------|------|---------------------|
| Chi siamo | `chi-siamo.html` | Hero sede, storia, numeri, servizi, testimonials, Treedom, corrieri partner, visione, trust badges |
| Vision & Valori | `vision-valori.html` | Vision aziendale, 5 valori fondamentali |
| Il nostro modello | `nostro-modello.html` | E-commerce, logistica, customer care, selezione prodotti |
| Numeri & Crescita | `numeri-crescita.html` | Metriche aziendali, trend di crescita |
| Il team | `team.html` | Presentazione team, divisioni (Logistica, Customer Care, Marketing) |
| Lavora con noi | `lavora-con-noi.html` | Benefits, posizioni aperte, processo selezione, form candidatura |
| Contatti aziendali | `contatti-aziendali.html` | Email unica, assistenza clienti, sede con mappa |

---

## Preview React (riferimento visivo)

Per visualizzare l'anteprima di come devono apparire le pagine:

```bash
cd frontend
yarn install
yarn start
```

L'app si apre su `http://localhost:3000` con navigazione tra tutte le pagine. Usa questa preview come riferimento visivo durante l'implementazione in Elementor.

---

## Note importanti

- Il **form candidatura** in `lavora-con-noi.html` e' un template HTML statico. In Elementor, sostituiscilo con il widget **Elementor Form** nativo per gestire l'invio email e l'upload del CV
- Le **posizioni aperte** sono attualmente: Addetto/a Logistica e Customer Care Specialist (entrambe a Giugliano in Campania, full-time)
- Nella sezione "Lavora con noi" e' specificato che **non si offre lavoro da remoto**
- Il font utilizzato e' **Poppins** (Google Fonts) - assicurati che sia caricato nel tema
