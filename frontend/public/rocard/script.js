/* Rocard Prototype — interactions */

/* ---------- Bundle pricing ---------- */
function selectBundle(el, qty, unit){
  const cards = document.querySelectorAll('.bundle-card');
  cards.forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  updateTotals(qty, unit);
}

function updateTotals(qty, unit){
  const subtotal = qty * unit;
  const shipping = subtotal >= 49.90 ? 0 : 5.90;
  const protection = document.getElementById('bumpProtection');
  const priority   = document.getElementById('bumpPriority');
  const extras = (protection && protection.checked ? 1.90 : 0)
               + (priority && priority.checked ? 3.90 : 0);
  const total = subtotal + shipping + extras;

  setText('sumQty', qty);
  setText('sumUnit', unit.toFixed(2).replace('.', ',') + '€');
  setText('sumSubtotal', subtotal.toFixed(2).replace('.', ',') + '€');
  setText('sumShipping', shipping === 0 ? 'Gratuita' : shipping.toFixed(2).replace('.', ',') + '€');
  setText('sumTotal', total.toFixed(2).replace('.', ',') + '€');
  setText('sumItemCount', qty + (qty === 1 ? ' articolo' : ' articoli'));

  // free shipping bar
  const bar = document.getElementById('shipBar');
  if(bar){
    const target = 49.90;
    const pct = Math.min(100, (subtotal/target) * 100);
    const fill = bar.querySelector('.bar');
    const lbl  = bar.querySelector('.label');
    if(fill) fill.style.width = pct + '%';
    if(subtotal >= target){
      bar.classList.remove('unmet');
      if(lbl) lbl.innerHTML = '<i class="fas fa-check-circle"></i> <b>Spedizione gratuita sbloccata!</b>';
    } else {
      bar.classList.add('unmet');
      const left = (target - subtotal).toFixed(2).replace('.', ',');
      if(lbl) lbl.innerHTML = '<i class="fas fa-truck"></i> Ti mancano <b>' + left + '€</b> per la <b>spedizione gratuita</b>';
    }
  }

  // CTA label update
  const cta = document.getElementById('ctaCheckout');
  if(cta) cta.innerHTML = 'Procedi al checkout • ' + total.toFixed(2).replace('.', ',') + '€ <i class="fas fa-arrow-right"></i>';

  // quantity stepper
  const qStep = document.getElementById('qtyVal');
  if(qStep) qStep.textContent = qty;
}

function setText(id, val){const e=document.getElementById(id); if(e) e.textContent=val}

function qtyChange(delta){
  const el = document.getElementById('qtyVal');
  if(!el) return;
  let q = parseInt(el.textContent) + delta;
  if(q < 1) q = 1;
  if(q > 6) q = 6;
  // select matching bundle if 1/2/3
  const cards = document.querySelectorAll('.bundle-card');
  cards.forEach(c => c.classList.remove('active'));
  if(q === 1){ cards[0]?.classList.add('active'); updateTotals(1, 22.90); }
  else if(q === 2){ cards[1]?.classList.add('active'); updateTotals(2, 21.90); }
  else if(q === 3){ cards[2]?.classList.add('active'); updateTotals(3, 19.90); }
  else { updateTotals(q, 19.90); }
}

/* ---------- Order bumps ---------- */
function toggleBump(){
  const card = document.querySelector('.bundle-card.active');
  const q = card ? parseInt(card.dataset.qty) : 3;
  const u = card ? parseFloat(card.dataset.unit) : 19.90;
  updateTotals(q, u);
}

/* ---------- Cross-sell add ---------- */
function addXsell(btn, name, price){
  btn.classList.add('xsell-added');
  btn.innerHTML = '<i class="fas fa-check"></i> Aggiunto';
  btn.disabled = true;
  // Visually update summary (lightweight, demo)
}

/* ---------- Countdown cutoff (today 13:00) ---------- */
function startCutoff(elId){
  const el = document.getElementById(elId);
  if(!el) return;
  function tick(){
    const now = new Date();
    const cutoff = new Date();
    cutoff.setHours(13,0,0,0);
    if(now > cutoff){ cutoff.setDate(cutoff.getDate()+1); }
    const diff = cutoff - now;
    const h = String(Math.floor(diff/3600000)).padStart(2,'0');
    const m = String(Math.floor((diff%3600000)/60000)).padStart(2,'0');
    const s = String(Math.floor((diff%60000)/1000)).padStart(2,'0');
    el.textContent = `${h}h ${m}m ${s}s`;
  }
  tick(); setInterval(tick, 1000);
}

/* ---------- Reservation timer (10 min) ---------- */
function startReservation(elId, minutes){
  const el = document.getElementById(elId);
  if(!el) return;
  let total = (minutes || 10) * 60;
  function tick(){
    if(total <= 0){ el.textContent = '00:00'; return; }
    const m = String(Math.floor(total/60)).padStart(2,'0');
    const s = String(total%60).padStart(2,'0');
    el.textContent = `${m}:${s}`;
    total--;
  }
  tick(); setInterval(tick, 1000);
}

/* ---------- Post-purchase upsell timer (15 min) ---------- */
function startUpsellTimer(elId, minutes){
  const el = document.getElementById(elId);
  if(!el) return;
  let total = (minutes || 15) * 60;
  function tick(){
    if(total <= 0){ el.textContent = 'Scaduto'; return; }
    const m = String(Math.floor(total/60)).padStart(2,'0');
    const s = String(total%60).padStart(2,'0');
    el.textContent = `${m}:${s}`;
    total--;
  }
  tick(); setInterval(tick, 1000);
}

/* ---------- Field validation (visual) ---------- */
function validateField(el){
  const wrap = el.closest('.field');
  if(!wrap) return;
  const val = el.value.trim();
  let ok = val.length >= 2;
  if(el.type === 'email') ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  if(el.type === 'tel') ok = /^\+?[0-9 ]{6,}$/.test(val);
  if(el.name === 'cap') ok = /^[0-9]{5}$/.test(val);
  wrap.classList.toggle('valid', ok);
}

document.addEventListener('input', e => {
  if(e.target.matches('.field input, .field select')) validateField(e.target);
});

/* ---------- Payment method switching ---------- */
function selectPM(card){
  document.querySelectorAll('.pm-card').forEach(c => c.classList.remove('active'));
  card.classList.add('active');
}

/* ---------- Copy voucher ---------- */
function copyVoucher(code, btn){
  navigator.clipboard?.writeText(code);
  const orig = btn.innerHTML;
  btn.innerHTML = '<i class="fas fa-check"></i> Copiato';
  setTimeout(() => btn.innerHTML = orig, 1800);
}

/* ---------- Card number formatting ---------- */
document.addEventListener('input', e => {
  if(e.target.id === 'cardNumber'){
    let v = e.target.value.replace(/\D/g,'').slice(0,19);
    v = v.replace(/(.{4})/g, '$1 ').trim();
    e.target.value = v;
  }
  if(e.target.id === 'cardExp'){
    let v = e.target.value.replace(/\D/g,'').slice(0,4);
    if(v.length > 2) v = v.slice(0,2) + '/' + v.slice(2);
    e.target.value = v;
  }
  if(e.target.id === 'cardCvv'){
    e.target.value = e.target.value.replace(/\D/g,'').slice(0,4);
  }
});

/* ---------- Live "recent buyers" notification ---------- */
function startSocialProof(elId){
  const el = document.getElementById(elId);
  if(!el) return;
  const events = [
    'Marco da Milano ha appena ordinato',
    'Giulia da Roma ha aggiunto al carrello',
    'Antonio da Napoli ha completato l\'ordine',
    'Sara da Torino sta visualizzando questa pagina',
    'Luca da Bologna ha appena ordinato',
    'Elena da Firenze ha completato l\'ordine'
  ];
  let i = 0;
  function show(){
    el.querySelector('.sp-text').textContent = events[i % events.length];
    el.classList.add('visible');
    setTimeout(()=> el.classList.remove('visible'), 4200);
    i++;
  }
  setTimeout(show, 3500);
  setInterval(show, 10000);
}
