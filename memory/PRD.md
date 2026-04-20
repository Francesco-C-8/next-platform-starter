# ROCARD.IT — Pagine HTML Elementor Ready

## Problema originale
Creare blocchi HTML puliti e pronti per Elementor per il sito WordPress/WooCommerce `rocard.it`:
1. Pagina "Azienda" (Corporate) con 7 sezioni tab (lavora con noi, chi siamo, storia, ecc.)
2. Pagina "Tracking" con form integrato al plugin TrackShip

Il cliente copia-incolla l'HTML direttamente nel widget HTML di Elementor, senza bisogno di sviluppatori.

## Vincoli tecnici chiave
- **Elementor**: blocca `<script>` e `<input type="radio">` → tab system solo CSS con `:target` + anchor links
- **Tema Woodmart**: applica CSS aggressivo su classi generiche (`.container`, `.hero-section`, ecc.) → tutte le classi custom devono essere prefissate per evitare conflitti
- **TrackShip**: richiede classi/ID esatti (`order_track_form`, `order_id`, `order_email`, `search_order_form`, `track_fail_msg`) per intercettare la submit via jQuery AJAX
- **Lingua**: sempre italiano nelle comunicazioni

## File di riferimento
- `/app/frontend/public/html-templates/ROCARD-COMPLETO.html` — blocco Corporate unificato (7 sezioni tab)
- `/app/frontend/public/html-templates/ROCARD-TRACKING.html` — blocco Tracking page

## Cosa è stato implementato

### 2026-02 — Sessione corrente
- ✅ **Enhancement tab native TrackShip** (20/02): rimosse le mie tab custom duplicate (il plugin ha già le sue); aggiunto script che trasforma le tab native del plugin TrackShip (`ul.tabs`, `a[href^="#tab-"]`) in pill-style stilizzate come il resto del design. Lo script: nasconde istruzioni duplicate "Per tracciare il tuo ordine...", rinomina label ("Ordina e-mail"→"Email di fatturazione", "Numero di identificazione"→"Numero di spedizione (tracking)", "ID ordine"→"Numero ordine"), rinomina bottone "Traccia il mio Pacco"→"Traccia il mio ordine", migliora placeholder, mostra solo una tab alla volta con switch fluido. Multi-selector fallback per supportare varie strutture DOM del plugin.
- ✅ **Approccio DOM-MOVE per TrackShip**: widget HTML con placeholder `.rct-trackship-mount`; script sposta la `.track-order-section` dallo shortcode dentro il mount. Auto-hide shortcode widget vuoto.
- ✅ **Banner coupon INVIAGGIO10**: countdown 15 min, copia codice, "Solo per te, un'unica volta • Approfittane subito".
- ✅ **Tracking page namespace fix**: classi prefissate `rct-` per evitare conflitti Woodmart.
- 🟢 **Tracking end-to-end confermato funzionante**: ordine 104049 → GLS Europe + NN665931971.

### Sessioni precedenti
- Consolidati 7 template HTML individuali in `ROCARD-COMPLETO.html` unificato
- Tab system CSS-only con `:target` (bypass restrizioni Elementor)
- Aggiornate stats, aggiunto ruolo "Magazziniere", loghi partner trasparenti
- CTA anchor link sistemati, nav mobile responsive (due righe scrollabili)
- Design language corporate replicato su tracking page

## Backlog / Prossimi passi (P1/P2)
- **[P1] User test TrackShip integration**: utente deve incollare il nuovo HTML in Elementor su `traking_new`, testare con ID `104049` + email `serra.pietro@alice.it` e verificare che TrackShip intercetti la submit e mostri i dettagli spedizione
- **[P2] Shortcode styling**: se TrackShip renderizza il tracking nello shortcode sottostante, potrebbe servire CSS aggiuntivo per uniformarlo al design della pagina
- **[P2] Eventuali rifiniture mobile**: verificare form su smartphone dopo test live

## Credenziali test
- Order ID TrackShip: `104049`
- Email fatturazione: `serra.pietro@alice.it`

## 3rd Party Integrations
- **TrackShip** (plugin WordPress/WooCommerce) — richiede match esatto di selettori DOM, nessuna API key lato nostro
