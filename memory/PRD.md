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
- ✅ **Tabs dual-method tracking** (20/02): aggiunte due tab pill-style sopra il form con scelta tra "Numero ordine + Email" (default, usa TrackShip nativo via DOM-move) e "Numero di spedizione" (form custom che apre direttamente il sito del corriere in nuova tab con l'URL corretto). Hint esplicativa blu che cambia in base alla tab attiva. Auto-detection del corriere dal formato del tracking number (NN→GLS, lettere+IT→Poste, ecc.) con override manuale via select.
- ✅ **Redirect corrieri**: URL di tracking per GLS (`gls-italy.com`), BRT (`vas.brt.it`), Poste Italiane (`poste.it`).
- ✅ **Approccio DOM-MOVE per TrackShip** (20/02): widget HTML contiene placeholder `.rct-trackship-mount`; script sposta la `.track-order-section` nativa dentro il mount. TrackShip lavora con form originale intatto (AJAX + nonce + jQuery). CSS stilizza aggressivamente input/button/label/box risultato per matchare il design. Auto-hide del widget shortcode vuoto dopo lo spostamento.
- ✅ **Stile form TrackShip nativo**: input due colonne 50/50 con margin 16px, bottone full-width, label Outfit, box risultato grigio chiaro con bordi. Mobile: colonna unica <640px.
- ✅ **Loading spinner**: mostrato nel mount fino allo spostamento del form.
- ✅ **Banner coupon INVIAGGIO10**: sezione arancione con countdown 15 min (sessionStorage), bottone "Copia codice" con feedback verde. Testo: "Solo per te, un'unica volta • Approfittane subito".
- ✅ **Tracking page namespace fix**: classi prefissate `rct-` per eliminare conflitti CSS con Woodmart.
- 🟢 **Tracking end-to-end confermato funzionante** (20/02): ordine 104049 recupera GLS Europe + NN665931971 correttamente.

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
