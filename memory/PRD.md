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
- ✅ **Approccio DOM-MOVE definitivo per TrackShip** (20/02): abbandonato il proxy pattern (fallimento del dual-form). Nuovo approccio: widget HTML contiene solo un placeholder `.rct-trackship-mount`; uno script DOM-move sposta fisicamente l'intera `.track-order-section` (renderizzata dal widget shortcode) dentro il mount point. Così TrackShip lavora con il SUO form originale (AJAX, nonce, eventi jQuery) senza duplicazione, e noi lo stilizziamo aggressivamente via CSS targettando `.rct-trackship-mount .track-order-section`, `form.order_track_form`, input, button, label. Auto-hide del widget shortcode vuoto rimasto vuoto dopo lo spostamento. Fallback con messaggio errore dopo 12s di retry falliti.
- ✅ **Stile form TrackShip nativo** (20/02): CSS specifico che rende input a due colonne (50/50 con margin 16px), bottone "Traccia" a larghezza piena, label coerenti con font Outfit, box risultato AJAX con sfondo grigio chiaro + bordo + font serif per titoli. Mobile: colonna unica sotto 640px.
- ✅ **Loading spinner** (20/02): placeholder con spinner rotante + testo "Caricamento modulo di tracciamento..." mostrato fino allo spostamento del form.
- ✅ **Banner coupon INVIAGGIO10** (20/02): sezione arancione brandizzata dopo i prodotti, countdown 15 min (sessionStorage), bottone "Copia codice" con feedback "Copiato!" verde. Testo meta aggiornato: "Solo per te, un'unica volta • Approfittane subito".
- ✅ **Tracking page namespace fix** (20/02): classi prefissate `rct-` per eliminare conflitti CSS con Woodmart.

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
