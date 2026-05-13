# Recorrido Hitos · variantes archivadas

Laboratorio del 2026-04-22 para el carrusel **Hitos del camino** (`/recorrido-y-mapa/`).
Se presentaron 3 variantes y la usuaria eligió la **C** (feature spread editorial).

Las variantes **A** y **B** quedan aquí preservadas por si en el futuro necesitamos
rescatarlas — ya sea para esta misma página, una landing, un blog u otra sección.

---

## 🅰️ VARIANTE A · Split editorial + pill de stats + dots

Inspirada en `ejemplos web/image copy 39.png`: header con H2 gigante,
pill flotante con 5 iconos-stat (km, horas, chiringuitos, niños, mascotas),
flechas top-right, cards anchas 2-col (texto izq | foto dcha), drag-scroll + dots.

**Cuándo usarla**: cuando el contenido tenga stats transversales aplicables a todos
los items (como una ruta con km/duración/dificultad compartidos).

### HTML

```astro
<section class="varA" aria-labelledby="varA-title">
  <div class="container container--xl">
    <div class="varA__header">
      <div class="varA__headMain">
        <span class="varA__eyebrow">— 8 HITOS DEL CAMINO</span>
        <h2 id="varA-title" class="varA__title">Arriondas → Fríes</h2>
        <p class="varA__sub">Recorrido tramo a tramo · 14,5 km de río Sella.</p>
      </div>

      <div class="varA__pill" aria-hidden="true">
        <span class="varA__pillItem"><span class="varA__pillIcon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h18"/><polyline points="16 7 21 12 16 17"/></svg></span><small>14,5 km</small></span>
        <span class="varA__pillItem"><span class="varA__pillIcon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 16 14"/></svg></span><small>3 – 5 h</small></span>
        <span class="varA__pillItem"><span class="varA__pillIcon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11a9 9 0 0 1 18 0z"/><line x1="12" y1="11" x2="12" y2="20"/><path d="M10 20a2 2 0 0 0 4 0"/></svg></span><small>6 chirin.</small></span>
        <span class="varA__pillItem"><span class="varA__pillIcon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="3"/><path d="M3 18c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/></svg></span><small>Niños 5+</small></span>
        <span class="varA__pillItem"><span class="varA__pillIcon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="12" r="5"/><path d="M9 8l-2-4M13 8l2-4M7 14l-3 2M15 14l3 2"/></svg></span><small>Mascotas</small></span>
      </div>

      <div class="varA__nav">
        <button type="button" class="varA__navBtn" data-varA-nav="prev" aria-label="Hito anterior"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg></button>
        <button type="button" class="varA__navBtn is-dark" data-varA-nav="next" aria-label="Hito siguiente"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></button>
      </div>
    </div>

    <div class="varA__track" data-varA-track data-drag-scroll role="region" aria-label="Hitos del camino">
      {items.map((h, i) => (
        <article class="varA__card" data-varA-item={i}>
          <div class="varA__cardText">
            <span class="varA__cardKicker">KM {fmtKm(h.km)} · {h.tag}</span>
            <h3 class="varA__cardName">{h.name}</h3>
            <p class="varA__cardKind">{h.kind}</p>
            <p class="varA__cardDesc">{h.text}</p>
          </div>
          <div class="varA__cardMedia">
            <Picture src={h.photo} alt={h.alt} sizes="(min-width: 960px) 48vw, 100vw" bare />
          </div>
        </article>
      ))}
    </div>

    <div class="varA__dots" role="tablist" aria-label="Paginación">
      {items.map((_, i) => (
        <button type="button" class={`varA__dot${i === 0 ? ' is-active' : ''}`} data-varA-dot={i} aria-label={`Ir al hito ${i + 1}`}></button>
      ))}
    </div>
  </div>
</section>
```

### CSS

```css
.varA {
  padding-block: clamp(3.5rem, 6vw, 5rem);
  background: var(--color-bg-warm, #F6F1E3);
  overflow: hidden;
}
.varA__header {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: end;
  gap: clamp(1.5rem, 3vw, 2.5rem);
  margin-bottom: clamp(2rem, 4vw, 3rem);
}
@media (max-width: 900px) {
  .varA__header { grid-template-columns: 1fr; }
}
.varA__headMain { min-width: 0; }
.varA__eyebrow {
  display: inline-block;
  font-family: var(--font-sans); font-size: 0.6875rem; font-weight: 800;
  letter-spacing: 1.8px; text-transform: uppercase;
  color: var(--color-primary); margin-bottom: 0.75rem;
}
.varA__title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 3.25rem);
  font-weight: 900; line-height: 1;
  letter-spacing: -0.03em;
  color: var(--color-text-primary); margin: 0 0 0.625rem;
}
.varA__sub {
  font-family: var(--font-sans); font-size: 0.9375rem;
  color: var(--color-text-secondary); margin: 0;
}
.varA__pill {
  grid-column: 1 / -1; grid-row: 2;
  display: inline-flex; flex-wrap: wrap; align-items: center; gap: 0.5rem;
  background: #fff; border-radius: var(--radius-pill, 999px);
  padding: 0.625rem 0.875rem;
  box-shadow: 0 8px 24px -10px rgba(26, 31, 46, 0.18);
  align-self: start; margin-top: 0.75rem; width: fit-content;
}
@media (min-width: 900px) {
  .varA__pill { grid-column: 2; grid-row: 1; justify-self: end; margin-top: 0; }
}
.varA__pillItem { display: inline-flex; align-items: center; gap: 0.375rem; padding: 0.3rem 0.625rem; color: var(--color-text-primary); font-family: var(--font-sans); font-size: 0.75rem; font-weight: 700; border-radius: var(--radius-pill, 999px); }
.varA__pillIcon { color: var(--color-sage); display: inline-flex; }
.varA__pillIcon svg { display: block; }
.varA__nav { display: inline-flex; gap: 0.5rem; align-self: start; }
@media (max-width: 900px) { .varA__nav { grid-row: 3; } }
.varA__navBtn { width: 42px; height: 42px; border-radius: 50%; background: #fff; border: 1px solid rgba(26, 31, 46, 0.14); color: var(--color-text-primary); display: inline-flex; align-items: center; justify-content: center; cursor: pointer; transition: background 200ms, transform 200ms; }
.varA__navBtn:hover { transform: translateY(-2px); }
.varA__navBtn.is-dark { background: var(--color-bg-dark, #1A1F2E); color: #fff; border-color: var(--color-bg-dark, #1A1F2E); }
.varA__navBtn:disabled { opacity: 0.4; cursor: not-allowed; }

.varA__track { display: flex; gap: clamp(1rem, 2vw, 1.5rem); overflow-x: auto; scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch; scrollbar-width: none; padding-bottom: 0.5rem; }
.varA__track::-webkit-scrollbar { display: none; }
.varA__card { flex: 0 0 min(860px, 92vw); scroll-snap-align: center; background: #fff; border-radius: var(--radius-2xl, 2rem); overflow: hidden; display: grid; grid-template-columns: 1fr 1fr; min-height: 420px; box-shadow: 0 20px 48px -24px rgba(26, 31, 46, 0.18); }
@media (max-width: 720px) { .varA__card { grid-template-columns: 1fr; min-height: auto; } }
.varA__cardText { padding: clamp(1.75rem, 3vw, 2.75rem); display: flex; flex-direction: column; justify-content: center; gap: 0.875rem; }
.varA__cardKicker { font-family: var(--font-sans); font-size: 0.6875rem; font-weight: 800; letter-spacing: 1.8px; text-transform: uppercase; color: var(--color-primary); }
.varA__cardName { font-family: var(--font-display); font-size: clamp(1.75rem, 3vw, 2.25rem); font-weight: 900; line-height: 1.05; letter-spacing: -0.025em; color: var(--color-text-primary); margin: 0; }
.varA__cardKind { font-family: var(--font-serif); font-style: italic; font-size: 0.9375rem; color: var(--color-sage); margin: -0.25rem 0 0; }
.varA__cardDesc { font-family: var(--font-sans); font-size: 0.9375rem; line-height: 1.75; color: var(--color-text-secondary); margin: 0; }
.varA__cardMedia { position: relative; overflow: hidden; }
.varA__cardMedia :global(img) { width: 100%; height: 100%; object-fit: cover; display: block; }
.varA__dots { display: flex; justify-content: center; gap: 0.5rem; margin-top: clamp(1.25rem, 2.5vw, 1.75rem); }
.varA__dot { width: 8px; height: 8px; border-radius: 50%; background: rgba(26, 31, 46, 0.22); border: none; padding: 0; cursor: pointer; transition: all 220ms; }
.varA__dot.is-active { background: var(--color-text-primary); width: 22px; border-radius: 4px; }
```

### JS

```js
(function () {
  const track = document.querySelector('[data-varA-track]');
  const prev = document.querySelector('[data-varA-nav="prev"]');
  const next = document.querySelector('[data-varA-nav="next"]');
  const dots = document.querySelectorAll('[data-varA-dot]');
  if (!track || !prev || !next) return;
  const items = track.querySelectorAll('[data-varA-item]');
  const cw = () => {
    if (!items[0]) return 0;
    const r = items[0].getBoundingClientRect();
    const s = getComputedStyle(track);
    const g = parseFloat(s.columnGap || s.gap || '16') || 16;
    return r.width + g;
  };
  const upd = () => {
    const w = cw();
    const idx = w > 0 ? Math.round(track.scrollLeft / w) : 0;
    const c = Math.max(0, Math.min(idx, items.length - 1));
    dots.forEach((d, i) => d.classList.toggle('is-active', i === c));
    prev.disabled = track.scrollLeft <= 1;
    next.disabled = track.scrollLeft >= (track.scrollWidth - track.clientWidth - 1);
  };
  prev.addEventListener('click', () => track.scrollBy({ left: -cw(), behavior: 'smooth' }));
  next.addEventListener('click', () => track.scrollBy({ left: cw(), behavior: 'smooth' }));
  dots.forEach((d, i) => d.addEventListener('click', () => track.scrollTo({ left: i * cw(), behavior: 'smooth' })));
  track.addEventListener('scroll', () => requestAnimationFrame(upd), { passive: true });
  window.addEventListener('resize', upd);
  upd();
})();
```

---

## 🅱️ VARIANTE B · Z-stack apilada con drag-to-dismiss

Cards absolutamente apiladas. Las de atrás asoman por ARRIBA con translateY negativo
(−26, −52, −78) y escala decreciente. Al arrastrar la card frontal más de 120 px,
sale rotando y aparece la siguiente.

**Cuándo usarla**: para secciones íntimas (testimonios, highlights personales,
tarjetas tipo "baraja") donde el gesto físico de descartar añade valor emocional.

### HTML

```astro
<section class="varB" aria-labelledby="varB-title">
  <div class="container container--xl">
    <header class="varB__header">
      <span class="varB__eyebrow">— Hitos del camino</span>
      <h2 id="varB-title" class="varB__title">Lo que verás<br/><span class="serif-italic">en el recorrido.</span></h2>
      <p class="varB__sub">Arrastra la ficha para descubrir el siguiente hito.</p>
    </header>

    <div class="varB__stage" data-varB-stage>
      <div class="varB__stack" data-varB-stack>
        {items.map((h, i) => (
          <article class="varB__card" data-varB-card={i} style={`--i:${i}`}>
            <div class="varB__cardInner">
              <div class="varB__cardText">
                <span class="varB__cardKicker">KM {fmtKm(h.km)} · {h.tag}</span>
                <h3 class="varB__cardName">{h.name}</h3>
                <p class="varB__cardKind">{h.kind}</p>
                <p class="varB__cardDesc">{h.text}</p>
              </div>
              <div class="varB__cardMedia">
                <Picture src={h.photo} alt={h.alt} sizes="(min-width: 960px) 40vw, 80vw" bare />
              </div>
            </div>
          </article>
        ))}
      </div>

      <div class="varB__nav">
        <button type="button" class="varB__navBtn" data-varB-nav="prev" aria-label="Anterior"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg></button>
        <span class="varB__counter"><span data-varB-count>1</span> / {items.length}</span>
        <button type="button" class="varB__navBtn" data-varB-nav="next" aria-label="Siguiente"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></button>
      </div>
    </div>
  </div>
</section>
```

### CSS

```css
.varB { padding-block: clamp(3.5rem, 6vw, 5rem); background: var(--color-bg-base, #FBF8F1); }
.varB__header { max-width: 720px; margin: 0 auto clamp(2rem, 4vw, 3rem); text-align: center; }
.varB__eyebrow { display: inline-block; font-family: var(--font-sans); font-size: 0.6875rem; font-weight: 800; letter-spacing: 1.8px; text-transform: uppercase; color: var(--color-primary); margin-bottom: 1rem; }
.varB__title { font-family: var(--font-display); font-size: clamp(2rem, 5vw, 3rem); font-weight: 900; line-height: 1; letter-spacing: -0.025em; text-transform: uppercase; color: var(--color-text-primary); margin: 0 0 1rem; }
.varB__title .serif-italic { color: var(--color-sage); font-family: var(--font-serif); font-style: italic; font-weight: 400; text-transform: none; }
.varB__sub { font-family: var(--font-sans); font-size: 0.9375rem; color: var(--color-text-muted); margin: 0; }

.varB__stage { position: relative; max-width: 980px; margin: 0 auto; min-height: 560px; padding-top: 72px; /* sitio para tops apilados arriba */ }
.varB__stack { position: relative; height: 460px; }
.varB__card { position: absolute; inset: 0; background: #fff; border-radius: var(--radius-2xl, 2rem); overflow: hidden; box-shadow: 0 30px 64px -30px rgba(26, 31, 46, 0.3); transform-origin: center center; transition: transform 560ms cubic-bezier(0.22, 1, 0.36, 1), opacity 460ms ease; will-change: transform, opacity; cursor: grab; }
.varB__card:active { cursor: grabbing; }
.varB__card.is-front { z-index: 10; }
.varB__card.is-gone { transform: translateX(-120%) rotate(-6deg); opacity: 0; pointer-events: none; }

.varB__cardInner { display: grid; grid-template-columns: 1.1fr 1fr; height: 100%; }
@media (max-width: 720px) { .varB__cardInner { grid-template-columns: 1fr; grid-template-rows: 240px 1fr; } }
.varB__cardText { padding: clamp(1.75rem, 3vw, 2.5rem); display: flex; flex-direction: column; justify-content: center; gap: 0.75rem; }
.varB__cardKicker { font-family: var(--font-sans); font-size: 0.6875rem; font-weight: 800; letter-spacing: 1.8px; text-transform: uppercase; color: var(--color-primary); }
.varB__cardName { font-family: var(--font-display); font-size: clamp(1.75rem, 3vw, 2.25rem); font-weight: 900; line-height: 1.05; letter-spacing: -0.025em; color: var(--color-text-primary); margin: 0; }
.varB__cardKind { font-family: var(--font-serif); font-style: italic; font-size: 0.9375rem; color: var(--color-sage); margin: 0; }
.varB__cardDesc { font-family: var(--font-sans); font-size: 0.9375rem; line-height: 1.7; color: var(--color-text-secondary); margin: 0; }
.varB__cardMedia { position: relative; overflow: hidden; }
@media (max-width: 720px) { .varB__cardMedia { order: -1; } }
.varB__cardMedia :global(img) { width: 100%; height: 100%; object-fit: cover; display: block; }

.varB__nav { display: flex; justify-content: center; align-items: center; gap: 0.875rem; margin-top: 1.5rem; }
.varB__navBtn { width: 42px; height: 42px; border-radius: 50%; background: #fff; border: 1px solid rgba(26, 31, 46, 0.14); color: var(--color-text-primary); display: inline-flex; align-items: center; justify-content: center; cursor: pointer; transition: transform 200ms; }
.varB__navBtn:hover:not(:disabled) { transform: translateY(-2px); }
.varB__navBtn:disabled { opacity: 0.4; cursor: not-allowed; }
.varB__counter { font-family: var(--font-sans); font-size: 0.8125rem; color: var(--color-text-secondary); font-weight: 700; }
```

### JS

```js
(function () {
  const stack = document.querySelector('[data-varB-stack]');
  const prev = document.querySelector('[data-varB-nav="prev"]');
  const next = document.querySelector('[data-varB-nav="next"]');
  const counter = document.querySelector('[data-varB-count]');
  if (!stack) return;
  const cards = Array.from(stack.querySelectorAll('[data-varB-card]'));
  const total = cards.length;
  let current = 0;
  let dragX = 0, startX = 0, dragging = false, activePointerId = null;

  const setStackStyles = () => {
    cards.forEach((c, i) => {
      const rel = i - current;
      if (rel < 0) {
        c.classList.add('is-gone');
        c.classList.remove('is-front');
        c.style.transform = ''; c.style.opacity = '0'; c.style.zIndex = '0';
        return;
      }
      c.classList.remove('is-gone');
      const depth = Math.min(rel, 3);
      const offsetY = -depth * 26;          // ⬅ NEGATIVO · tops asoman por arriba
      const scale = 1 - depth * 0.045;
      const opacity = rel === 0 ? 1 : Math.max(0.55, 1 - depth * 0.18);
      c.style.transform = `translateY(${offsetY}px) scale(${scale})`;
      c.style.opacity = String(opacity);
      c.style.zIndex = String(20 - depth);
      c.classList.toggle('is-front', rel === 0);
    });
    if (counter) counter.textContent = String(current + 1);
    if (prev) prev.disabled = current === 0;
    if (next) next.disabled = current >= total - 1;
  };

  const goNext = () => { if (current < total - 1) { current++; setStackStyles(); } };
  const goPrev = () => { if (current > 0) { current--; setStackStyles(); } };
  prev?.addEventListener('click', goPrev);
  next?.addEventListener('click', goNext);

  stack.addEventListener('pointerdown', (e) => {
    const front = cards[current];
    if (!front || !e.target.closest('[data-varB-card]')) return;
    const card = e.target.closest('[data-varB-card]');
    if (card !== front) return;
    dragging = true; startX = e.clientX; dragX = 0;
    activePointerId = e.pointerId;
    try { front.setPointerCapture(e.pointerId); } catch {}
    front.style.transition = 'none';
  });
  stack.addEventListener('pointermove', (e) => {
    if (!dragging || e.pointerId !== activePointerId) return;
    dragX = e.clientX - startX;
    const front = cards[current];
    if (!front) return;
    const rot = dragX / 40;
    front.style.transform = `translateX(${dragX}px) rotate(${rot}deg)`;
    front.style.opacity = String(Math.max(0.3, 1 - Math.abs(dragX) / 400));
  });
  const endDrag = (e) => {
    if (!dragging || e.pointerId !== activePointerId) return;
    dragging = false; activePointerId = null;
    const front = cards[current];
    if (!front) return;
    front.style.transition = '';
    if (Math.abs(dragX) > 120 && current < total - 1) goNext();
    else setStackStyles();
    dragX = 0;
  };
  stack.addEventListener('pointerup', endDrag);
  stack.addEventListener('pointercancel', endDrag);
  setStackStyles();
})();
```

---

## 🅲 VARIANTE C · Feature spread editorial (ELEGIDA)

Aplicada en `/src/pages/recorrido-y-mapa.astro` como sección `rrs__` (hitos del camino).
Header dos columnas (eyebrow + H2 "8 paradas canónicas" · nav con contador 01/08 y flechas outlined).
Cards con foto portrait 4:5 izquierda + texto derecha, KM junto al tag, número "01, 02..." en serif
italic como watermark detrás, `align-items: center` para que las fotos asomen por encima y abajo
del texto. Fondo sand · drag-scroll.
