# Benefits section variants · /con-ninos/

**Fecha decisión:** 2026-04-19 · **Elegida:** Opción B (editorial 2 cols numerado, minimal "less is more")

Las otras 2 variantes se preservan aquí.

---

## Opción A · Grid 4 cols con check sage pequeño (original)

Grid 4 cols desktop, cards simples con check sage en círculo + título + descripción. Hover básico con lift y sombra.

### Markup

```astro
<section class="cnb">
  <div class="container container--xl">
    <header class="cnb__header" data-reveal>
      <span class="cnb__eyebrow">— Por qué con nosotros</span>
      <h2 class="cnb__title">
        El plan familiar más<br/>
        <span class="serif-italic">completo del Sella</span>
      </h2>
    </header>

    <div class="cnbG">
      {beneficios.map((b, i) => (
        <article class="cnbC" data-reveal data-reveal-delay={(i % 4) + 1}>
          <span class="cnbC__check" aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </span>
          <div class="cnbC__body">
            <h3 class="cnbC__t">{b.t}</h3>
            <p class="cnbC__s">{b.s}</p>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>
```

### CSS clave

```css
.cnb { padding-block: clamp(4rem, 8vw, 6rem); background: var(--color-bg-warm, #F5F1E8); }
.cnb__header { max-width: 760px; margin: 0 auto clamp(2.5rem, 5vw, 3.5rem); text-align: center; }
.cnbG { display: grid; grid-template-columns: 1fr; gap: var(--s-3); max-width: 1100px; margin: 0 auto; }
@media (min-width: 720px)  { .cnbG { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .cnbG { grid-template-columns: repeat(4, 1fr); } }
.cnbC {
  display: flex; flex-direction: column; gap: var(--s-3);
  padding: var(--s-4);
  background: #fff;
  border-radius: 1rem;
  border: 1px solid var(--color-border-subtle);
  transition: transform 280ms ease, box-shadow 280ms ease;
}
.cnbC:hover { transform: translateY(-4px); box-shadow: 0 20px 40px rgba(26, 31, 46, 0.08); }
.cnbC__check {
  display: inline-flex; align-items: center; justify-content: center;
  width: 30px; height: 30px;
  border-radius: 50%;
  background: var(--color-sage, #3D4F3A);
  color: #fff;
}
```

---

## Opción C · Grid 4 cols + border slide hover

Cards con check sage mediano (44px) + título + desc. Al hover, un borde sage de 1.5px se dibuja en secuencia recorriendo las 4 esquinas (~780ms, efecto "border slide" de la biblioteca de hovers). El check pasa a sage sólido con check blanco + scale 1.06.

### Markup

```astro
<article class="cnbSlCard" data-reveal data-reveal-delay={...}>
  <span class="cnbSlCard__check" aria-hidden="true">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
  </span>
  <h3 class="cnbSlCard__t">{b.t}</h3>
  <p class="cnbSlCard__s">{b.s}</p>
</article>
```

### CSS clave (border slide)

```css
.cnbSlCard {
  position: relative;
  background: #fff;
  border: 1px solid var(--color-border-subtle);
  border-radius: 10px;
  padding: clamp(1.5rem, 2.5vw, 1.875rem);
  display: flex; flex-direction: column; gap: 0.625rem;
  transition: transform 360ms cubic-bezier(0.22, 1, 0.36, 1),
              box-shadow 360ms cubic-bezier(0.22, 1, 0.36, 1);
}
.cnbSlCard::before,
.cnbSlCard::after {
  content: ""; position: absolute; box-sizing: border-box;
  pointer-events: none; border-radius: 10px;
}
.cnbSlCard::before {
  top: 0; left: 0; width: 0; height: 0;
  border-top: 1.5px solid var(--color-sage, #3D4F3A);
  border-left: 1.5px solid var(--color-sage, #3D4F3A);
  transition: width 260ms ease-out 260ms, height 260ms ease-out 0ms;
}
.cnbSlCard::after {
  bottom: 0; right: 0; width: 0; height: 0;
  border-bottom: 1.5px solid var(--color-sage, #3D4F3A);
  border-right: 1.5px solid var(--color-sage, #3D4F3A);
  transition: width 260ms ease-out 520ms, height 260ms ease-out 260ms;
}
.cnbSlCard:hover::before,
.cnbSlCard:hover::after { width: 100%; height: 100%; }
.cnbSlCard:hover { transform: translateY(-4px); box-shadow: 0 22px 48px rgba(26, 31, 46, 0.1); }

.cnbSlCard__check {
  width: 44px; height: 44px; border-radius: 50%;
  background: rgba(61, 79, 58, 0.12);
  color: var(--color-sage, #3D4F3A);
  transition: background 360ms ease, transform 360ms ease;
}
.cnbSlCard:hover .cnbSlCard__check {
  background: var(--color-sage, #3D4F3A);
  color: #FBF8F1;
  transform: scale(1.06);
}

@media (prefers-reduced-motion: reduce) {
  .cnbSlCard::before, .cnbSlCard::after, .cnbSlCard, .cnbSlCard__check { transition: none; }
  .cnbSlCard:hover { transform: none; }
}
```

**Patrón "border slide":** ver también `reference_card_hover_effects_library.md` sección 2.

---

## Cómo restaurar

- **A** → copy-paste markup + CSS; requiere `beneficios` array
- **C** → copy-paste markup + CSS; el efecto "border slide" es autocontenido en los `::before` y `::after`
