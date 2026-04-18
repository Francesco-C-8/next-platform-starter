# Rocard Corporate Pages - Istruzioni per Elementor

## Come Usare i Template

Ogni file nella cartella `html-templates/` contiene un **blocco autocontenuto** (CSS + HTML) pronto per essere incollato direttamente in un **Widget HTML di Elementor**.

### Procedura (per ogni pagina):

1. Apri la pagina in Elementor (es. `/chi-siamo/`)
2. Aggiungi un widget **HTML** (cercalo nella barra laterale sinistra)
3. Apri il file corrispondente (es. `chi-siamo.html`)
4. **Seleziona tutto** il contenuto del file (Ctrl+A / Cmd+A)
5. **Incolla** nel campo del widget HTML
6. Clicca **Pubblica**

### Elenco Pagine

| File | Pagina |
|------|--------|
| `chi-siamo.html` | Chi Siamo (identica alla versione live) |
| `vision-valori.html` | Vision & Valori |
| `nostro-modello.html` | Il Nostro Modello |
| `numeri-crescita.html` | Numeri & Crescita |
| `team.html` | Il Team |
| `lavora-con-noi.html` | Lavora con Noi (con form candidatura) |
| `contatti-aziendali.html` | Contatti Aziendali |

### Note Importanti

- **Nessun CSS esterno necessario**: ogni file include gia' tutto lo stile nel tag `<style>`
- **Font**: Outfit + Cormorant Garamond (caricati automaticamente da Google Fonts)
- **Colori**: Blu Rocard (#1a3c6e) + Arancione (#f57c00)
- **Icone**: SVG inline (nessuna dipendenza esterna)
- **Responsive**: tutti i template si adattano automaticamente a mobile/tablet/desktop
- I loghi corrieri nella pagina Chi Siamo puntano alla Media Library di WordPress (`/wp-content/uploads/`)

### Immagini da Caricare nella Media Library

Le immagini di Unsplash usate nei template dovranno essere scaricate e caricate nella Media Library di WordPress, aggiornando poi i relativi URL `src=""` nei file HTML.

### Form "Lavora con Noi"

Il form di candidatura in `lavora-con-noi.html` usa un semplice `mailto:`. Per una gestione migliore, si consiglia di sostituirlo con il **Form Widget di Elementor Pro** configurando:
- Destinazione email: info@rocard.it
- Salvataggio in database abilitato
