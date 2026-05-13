# Security section variants · /con-ninos/

**Fecha decisión:** 2026-04-19 · **Elegida:** Opción E (editorial numerado sin foto, puramente tipográfico — "menos es más")

Las otras 4 no eran malas, se preservan aquí por si queremos recuperarlas en otras páginas del clúster.

---

## Opción A · Grid 2 cols con iconos (original)

Grid 2 cols: texto izq con lista de 5 puntos (icono + bullet) + foto 4:5 derecha (`con-peques`). Layout clásico editorial.

### Markup

```astro
<section class="cns">
  <div class="container container--xl">
    <div class="cns__grid">
      <div class="cns__text" data-reveal>
        <span class="cns__eyebrow">— Seguridad y confianza</span>
        <h2 class="cns__title">
          Qué preocupa a los padres,<br/>
          <span class="serif-italic">y cómo lo resolvemos</span>
        </h2>
        <p class="cns__lead">
          La primera pregunta de cualquier familia es <strong>"¿es seguro?"</strong> — y es
          lógica. La respuesta corta es sí, cuando se hace con sentido común,
          material adecuado y explicación clara antes de salir.
        </p>
        <ul class="cns__list">
          <li>
            <svg width="16" height="16" viewBox="0 0 24 24" ... icon-shield ... />
            <span><strong>Chalecos homologados por talla</strong> — infantiles específicos, revisados y adaptados. No cascos genéricos.</span>
          </li>
          <li>... monitor titulado (icon user) ...</li>
          <li>... canoa compartida (icon canoe) ...</li>
          <li>... fluvial suave (icon clock) ...</li>
          <li>... seguro incluido (icon ticket) ...</li>
        </ul>
      </div>
      <div class="cns__media" data-reveal data-reveal-delay="2">
        <Picture src="con-peques" alt="Familia bajando el Sella..." sizes="(min-width: 960px) 50vw, 100vw" aspectRatio="4 / 5" bare />
      </div>
    </div>
  </div>
</section>
```

### CSS clave

```css
.cns { padding-block: clamp(4rem, 8vw, 6rem); background: var(--color-bg-base); }
.cns__grid { display: grid; grid-template-columns: 1fr; gap: clamp(2rem, 4vw, 3rem); align-items: center; max-width: 1200px; margin: 0 auto; }
@media (min-width: 900px) { .cns__grid { grid-template-columns: 1.1fr 1fr; gap: clamp(3rem, 6vw, 5rem); } }

.cns__list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: var(--s-4); }
.cns__list li { display: flex; align-items: flex-start; gap: var(--s-3); font-size: 0.9375rem; line-height: 1.65; color: var(--color-text-secondary); }
.cns__list li svg { flex-shrink: 0; margin-top: 2px; color: var(--color-sage); padding: 6px; background: rgba(61, 79, 58, 0.12); border-radius: 50%; box-sizing: content-box; }

.cns__media { position: relative; border-radius: clamp(1rem, 2vw, 1.5rem); overflow: hidden; aspect-ratio: 4 / 5; box-shadow: 0 30px 60px rgba(26, 31, 46, 0.14); }
```

---

## Opción B · Lista editorial numerada (con foto lateral)

Mismo grid 2 cols que A pero la lista pasa a ser numerada con números grandes Fraunces italic sage (01-05) reemplazando iconos. Cada item tiene H3 + descripción corta. Foto 4:5 se mantiene a la derecha. Aire muy editorial de revista.

### Markup clave

```astro
<ol class="cnsB__list">
  <li class="cnsB__item">
    <span class="cnsB__num" aria-hidden="true">01</span>
    <div>
      <h3 class="cnsB__itemTitle">Chalecos homologados por talla</h3>
      <p class="cnsB__itemText">Infantiles específicos, revisados y adaptados. No cascos genéricos.</p>
    </div>
  </li>
  ... (02-05)
</ol>
```

### CSS clave

```css
.cnsB__list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: clamp(1.25rem, 2.5vw, 1.75rem); }
.cnsB__item { display: grid; grid-template-columns: auto 1fr; gap: clamp(1rem, 2vw, 1.5rem); align-items: start; padding-bottom: clamp(1.25rem, 2.5vw, 1.75rem); border-bottom: 1px solid var(--color-border-subtle); }
.cnsB__item:last-child { border-bottom: none; padding-bottom: 0; }
.cnsB__num { font-family: var(--font-serif); font-size: clamp(2.25rem, 4vw, 3rem); font-style: italic; font-weight: 400; line-height: 0.9; color: var(--color-sage); letter-spacing: -0.02em; opacity: 0.85; min-width: 3ch; }
```

---

## Opción C · Banner cinematográfico + 5 cards con radial fill hover

Foto full-width 21:7 de `con-peques` con overlay que se funde hacia cream + header centrado + grid 3 cols de 5 cards con icono sage en círculo arriba, título h3, texto, CADA CARD con **radial fill hover** (círculo sage crece desde el centro). Muy visual, cinematográfico.

### Markup clave

```astro
<div class="cnsC__banner" aria-hidden="true">
  <Picture src="con-peques" alt="" sizes="100vw" bare />
  <div class="cnsC__bannerOverlay"></div>
</div>

<div class="container container--xl">
  <header class="cnsC__header" data-reveal>...</header>
  <ul class="cnsCL">
    <li class="cnsCItem" data-reveal data-reveal-delay="1">
      <span class="cnsCItem__icon" aria-hidden="true"><svg ... /></span>
      <h3 class="cnsCItem__title">Chalecos homologados por talla</h3>
      <p class="cnsCItem__text">Infantiles específicos, revisados y adaptados. <strong>No cascos genéricos</strong>.</p>
    </li>
    ... (02-05)
  </ul>
</div>
```

### CSS clave

```css
.cnsC__banner { position: relative; width: 100%; aspect-ratio: 21 / 7; margin-bottom: clamp(3rem, 6vw, 5rem); overflow: hidden; }
.cnsC__bannerOverlay { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(26,31,46,0.15) 0%, rgba(26,31,46,0) 50%, rgba(251,248,241,0.85) 95%, var(--color-bg-base) 100%); }

.cnsCL { display: grid; grid-template-columns: 1fr; gap: var(--s-4); max-width: 1100px; margin: 0 auto; }
@media (min-width: 720px) { .cnsCL { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .cnsCL { grid-template-columns: repeat(3, 1fr); } }

.cnsCItem {
  position: relative; background: #fff; border: 1px solid var(--color-border-subtle);
  border-radius: 1.25rem; padding: clamp(1.5rem, 2.5vw, 2rem);
  overflow: hidden; isolation: isolate;
  transition: all 360ms cubic-bezier(0.22, 1, 0.36, 1);
}
.cnsCItem::before {
  content: ""; position: absolute; top: 50%; left: 50%; width: 150%; aspect-ratio: 1;
  transform: translate(-50%, -50%) scale(0); border-radius: 50%;
  background: radial-gradient(circle at center, #4A5E47 0%, #3D4F3A 45%, #2C3B2A 100%);
  transition: transform 620ms cubic-bezier(0.22, 1, 0.36, 1);
  z-index: -1;
}
.cnsCItem:hover::before { transform: translate(-50%, -50%) scale(1); }
.cnsCItem__icon { width: 44px; height: 44px; border-radius: 50%; background: rgba(61, 79, 58, 0.12); color: var(--color-sage); }
.cnsCItem:hover .cnsCItem__icon { background: rgba(251, 248, 241, 0.18); color: var(--color-primary-soft); transform: scale(1.08); }
.cnsCItem:hover .cnsCItem__title { color: #FBF8F1; }
.cnsCItem:hover .cnsCItem__text { color: rgba(251, 248, 241, 0.9); }
```

---

## Opción D · Editorial numerado + radial fill hover (sin foto)

Hybrid: sin foto + cards numeradas (Fraunces italic sage) con radial fill hover. Una sola columna vertical, max-width 940, cards horizontales (número izq + texto dcha). La card se rellena de sage en hover, texto pasa a cream.

### Markup clave

```astro
<ol class="cnsDL">
  <li class="cnsDItem">
    <span class="cnsDItem__num" aria-hidden="true">01</span>
    <div class="cnsDItem__body">
      <h3 class="cnsDItem__title">Chalecos homologados por talla</h3>
      <p class="cnsDItem__text">Infantiles específicos, revisados y adaptados. <strong>No cascos genéricos</strong>.</p>
    </div>
  </li>
  ... (02-05)
</ol>
```

### CSS clave

```css
.cnsDL { list-style: none; padding: 0; margin: 0 auto; max-width: 940px; display: flex; flex-direction: column; gap: clamp(1rem, 2vw, 1.5rem); }

.cnsDItem {
  position: relative;
  display: grid; grid-template-columns: auto 1fr;
  gap: clamp(1.5rem, 3vw, 2.5rem);
  align-items: center;
  background: #fff;
  border: 1px solid var(--color-border-subtle);
  border-radius: 1.5rem;
  padding: clamp(1.75rem, 3vw, 2.5rem) clamp(1.75rem, 3vw, 2.75rem);
  overflow: hidden;
  isolation: isolate;
  transition: transform 360ms cubic-bezier(0.22, 1, 0.36, 1),
              box-shadow 360ms cubic-bezier(0.22, 1, 0.36, 1);
}
.cnsDItem::before {
  content: ""; position: absolute; top: 50%; left: 50%; width: 130%; aspect-ratio: 1;
  transform: translate(-50%, -50%) scale(0); border-radius: 50%;
  background: radial-gradient(circle at center, #4A5E47 0%, #3D4F3A 45%, #2C3B2A 100%);
  transition: transform 680ms cubic-bezier(0.22, 1, 0.36, 1);
  z-index: -1;
}
.cnsDItem:hover::before { transform: translate(-50%, -50%) scale(1); }
.cnsDItem__num { font-family: var(--font-serif); font-style: italic; font-weight: 400; font-size: clamp(2.75rem, 6vw, 4.5rem); color: var(--color-sage); min-width: 2.5ch; }
.cnsDItem:hover .cnsDItem__num { color: var(--color-primary-soft); transform: scale(1.05); }
```

---

---

## Opción E · Editorial numerado sin foto ni hover (fue canónica 2026-04-19 → reemplazada por F)

**Canónica del 2026-04-19 hasta nueva decisión del mismo día.** Ver debajo "Opción F" para la versión actual.

Lista vertical única en max-width 860, 5 items separados por border-bottom fino, números Fraunces italic sage, sin cards, sin hover. Puramente tipográfico.

### Markup

```astro
<section class="cns">
  <div class="container container--xl">
    <header class="cns__header" data-reveal>...</header>

    <ol class="cnsL">
      <li class="cnsItem" data-reveal data-reveal-delay="1">
        <span class="cnsItem__num" aria-hidden="true">01</span>
        <div class="cnsItem__body">
          <h3 class="cnsItem__title">Chalecos homologados por talla</h3>
          <p class="cnsItem__text">Infantiles específicos, revisados y adaptados. <strong>No cascos genéricos</strong>.</p>
        </div>
      </li>
      ... (02-05)
    </ol>
  </div>
</section>
```

### CSS clave

```css
.cnsL {
  list-style: none; padding: 0; margin: 0 auto;
  max-width: 860px;
  display: flex; flex-direction: column;
}
.cnsItem {
  display: grid; grid-template-columns: auto 1fr;
  gap: clamp(1.5rem, 3vw, 2.5rem);
  align-items: start;
  padding: clamp(1.75rem, 3vw, 2.5rem) 0;
  border-bottom: 1px solid var(--color-border-subtle);
}
.cnsItem:first-child { padding-top: 0; }
.cnsItem:last-child { border-bottom: none; }

.cnsItem__num {
  font-family: var(--font-serif);
  font-style: italic; font-weight: 400;
  font-size: clamp(2.75rem, 5vw, 3.75rem);
  line-height: 0.88;
  color: var(--color-sage, #3D4F3A);
  letter-spacing: -0.03em;
  min-width: 2.5ch;
  opacity: 0.9;
}
.cnsItem__body { padding-top: 0.35em; }
```

---

## Opción F · Grid 3 cols con número watermark + CTA (actual canónica desde 2026-04-19 replace)

Inspirada en `image copy 23.png`: números 01-05 en watermark sage muy tenue, título bold, descripción, CTA dark pill centrado abajo ("Reservar en 2 minutos"). Aplica a 5 items distribuidos en grid 3×2 (3 arriba, 2 abajo).

**Ya aplicada en `src/pages/con-ninos.astro`** como canónica — no necesita archivarse, pero notada aquí para el historial.

---

## Cómo restaurar

- **A** → copy-paste markup y CSS al `con-ninos.astro`, reemplazando la sección canónica actual. Ajustar prefijos si colisionan con otros pages.
- **B** → copy-paste markup y CSS. Si se quiere en otra página, renombrar `.cnsB*` a algo específico.
- **C** → se puede portar tal cual a otra página; necesita el asset `con-peques` en el pipeline de imágenes.
- **D** → igual que C, requiere el pattern "radial fill hover" (ver `reference_radial_fill_hover.md`).
