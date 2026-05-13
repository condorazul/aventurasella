# Intro "¿Se puede?" variants · /con-ninos/

**Fecha decisión:** 2026-04-19 · **Elegida:** Opción D (asimétrico + 3 polaroids flotando)

Las otras 3 no eran malas, se preservan aquí por si queremos recuperarlas en otras páginas del clúster.

---

## Opción A · Centrado minimalista (original)

Texto centrado sobrio en max-width 760px. Sin foto. Limpio y editorial.

### Markup

```astro
<section class="cni">
  <div class="container container--xl">
    <header class="cni__header" data-reveal>
      <span class="cni__eyebrow">— La pregunta de siempre</span>
      <h2 class="cni__title">
        ¿Se puede hacer el descenso<br/>
        del Sella <span class="serif-italic">con niños?</span>
      </h2>
    </header>
    <div class="cni__body" data-reveal>
      <p class="cni__lead">
        <strong>Sí, y es una de las mejores formas de disfrutar Asturias en familia.</strong> Es un
        plan al aire libre, muy visual, emocionante y adaptable al ritmo de los
        peques. Con buena organización, material por talla y monitores titulados,
        el día se convierte en un recuerdo de los que se repiten.
      </p>
      <p class="cni__text">
        La clave no está en el río, está en <strong>cómo se prepara la actividad</strong>: chaleco
        homologado por tamaño, mini clase antes de salir, canoa compartida con un
        adulto, paradas sin prisa y un equipo que te recoge al final para que la
        logística no sea una carga. Eso es lo que hacemos.
      </p>
    </div>
  </div>
</section>
```

### CSS

```css
.cni { padding-block: clamp(4rem, 8vw, 6rem); background: var(--color-bg-base); }
.cni__header { max-width: 760px; margin: 0 auto clamp(2rem, 4vw, 3rem); text-align: center; }
.cni__eyebrow { display: inline-block; font-family: var(--font-sans); font-size: 0.6875rem; font-weight: 700; letter-spacing: 1.8px; text-transform: uppercase; color: var(--color-sage, #3D4F3A); margin-bottom: clamp(1.25rem, 2.5vw, 2rem); }
.cni__title { font-family: var(--font-display); font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 900; line-height: 0.98; letter-spacing: -0.015em; text-transform: uppercase; color: var(--color-text-primary); margin: 0; }
.cni__title .serif-italic { color: var(--color-sage, #3D4F3A); font-family: var(--font-serif); font-weight: 400; font-style: italic; text-transform: none; letter-spacing: -0.01em; }
.cni__body { max-width: 760px; margin: 0 auto; display: flex; flex-direction: column; gap: var(--s-4); }
.cni__lead { font-family: var(--font-sans); font-size: 1.0625rem; line-height: 1.7; color: var(--color-text-primary); margin: 0; }
.cni__lead strong { color: var(--color-text-primary); font-weight: 700; }
.cni__text { font-family: var(--font-sans); font-size: 1rem; line-height: 1.75; color: var(--color-text-secondary); margin: 0; }
.cni__text strong { color: var(--color-text-primary); font-weight: 700; }
```

---

## Opción B · Asimétrico editorial + foto flotando

Grid 2 cols: texto + "Sí." gigante Fraunces italic a la izquierda, foto única (`con-peques`) a la derecha con animación float. Badge "🛶 En familia" flotando sobre la foto.

### Markup

```astro
<section class="cniB">
  <div class="container container--xl">
    <div class="cniB__grid">
      <div class="cniB__content" data-reveal>
        <span class="cniB__eyebrow">— La pregunta de siempre</span>
        <h2 class="cniB__title">
          ¿Se puede hacer el descenso<br/>
          del Sella <span class="serif-italic">con niños?</span>
        </h2>

        <div class="cniB__answer">
          <span class="cniB__yes" aria-hidden="true">Sí.</span>
          <div class="cniB__prose">
            <p class="cniB__lead">
              <strong>Sí, y es una de las mejores formas de disfrutar Asturias en familia.</strong> Es un
              plan al aire libre, muy visual, emocionante y adaptable al ritmo de los
              peques. Con buena organización, material por talla y monitores titulados,
              el día se convierte en un recuerdo de los que se repiten.
            </p>
            <p class="cniB__text">
              La clave no está en el río, está en <strong>cómo se prepara la actividad</strong>: chaleco
              homologado por tamaño, mini clase antes de salir, canoa compartida con un
              adulto, paradas sin prisa y un equipo que te recoge al final para que la
              logística no sea una carga. Eso es lo que hacemos.
            </p>
          </div>
        </div>
      </div>

      <aside class="cniB__media" data-reveal data-reveal-delay="2" aria-hidden="true">
        <div class="cniB__photo">
          <Picture src="con-peques" alt="" sizes="(min-width: 960px) 42vw, 100vw" aspectRatio="4 / 5" bare />
        </div>
        <div class="cniB__sticker">
          <span class="cniB__stickerIcon">🛶</span>
          <div>
            <strong>En familia</strong>
            <span>al ritmo de los peques</span>
          </div>
        </div>
      </aside>
    </div>
  </div>
</section>
```

### CSS clave

```css
.cniB { padding-block: clamp(4rem, 8vw, 6rem); background: var(--color-bg-base); overflow: hidden; }
.cniB__grid { display: grid; grid-template-columns: 1fr; gap: clamp(2.5rem, 5vw, 4rem); align-items: center; max-width: 1200px; margin: 0 auto; }
@media (min-width: 900px) { .cniB__grid { grid-template-columns: 1.2fr 1fr; gap: clamp(3rem, 6vw, 5rem); } }

/* Contenido (ver cniD para tipografía idéntica con prefix __yes, __prose, __lead, __text) */

/* Media lateral derecha */
.cniB__media { position: relative; max-width: 440px; margin: 0 auto; }
.cniB__photo {
  position: relative;
  border-radius: clamp(1.25rem, 2.5vw, 2rem);
  overflow: hidden;
  aspect-ratio: 4 / 5;
  box-shadow: 0 30px 60px rgba(26, 31, 46, 0.15), 0 10px 25px rgba(61, 79, 58, 0.12);
  animation: cniFloatSlow 6.5s ease-in-out infinite;
}
.cniB__sticker {
  position: absolute;
  bottom: -18px; left: -16px;
  display: flex; align-items: center; gap: 10px;
  padding: 10px 14px 10px 12px;
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 14px 30px rgba(26, 31, 46, 0.16);
  font-family: var(--font-sans);
  animation: cniFloatFast 4.8s ease-in-out infinite;
}
.cniB__stickerIcon { font-size: 1.5rem; line-height: 1; }

@keyframes cniFloatSlow {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-10px); }
}
@keyframes cniFloatFast {
  0%, 100% { transform: translateY(0) rotate(-1deg); }
  50%      { transform: translateY(-6px) rotate(1deg); }
}
```

---

## Opción C · Polaroids flotando (centrado + 2 polaroids laterales)

Texto centrado estilo A pero con 2 polaroids decorativas absolute-positioned a los lados (izq-arriba + der-abajo), cada una con su propia animación.

### Markup

```astro
<section class="cniC">
  <div class="container container--xl">
    <figure class="cniC__polaroid cniC__polaroid--left" aria-hidden="true">
      <div class="cniC__polaroidImg">
        <Picture src="con-peques" alt="" sizes="280px" aspectRatio="4 / 5" bare />
      </div>
      <figcaption class="cniC__polaroidCap">En familia</figcaption>
    </figure>

    <figure class="cniC__polaroid cniC__polaroid--right" aria-hidden="true">
      <div class="cniC__polaroidImg">
        <Picture src="nino-paddle" alt="" sizes="280px" aspectRatio="4 / 5" bare />
      </div>
      <figcaption class="cniC__polaroidCap">Remando juntos</figcaption>
    </figure>

    <div class="cniC__inner">
      <header class="cniC__header" data-reveal>
        <span class="cniC__eyebrow">— La pregunta de siempre</span>
        <h2 class="cniC__title">
          ¿Se puede hacer el descenso<br/>
          del Sella <span class="serif-italic">con niños?</span>
        </h2>
      </header>
      <div class="cniC__body" data-reveal data-reveal-delay="2">
        <p class="cniC__lead">... (párrafo 1 idéntico)</p>
        <p class="cniC__text">... (párrafo 2 idéntico)</p>
      </div>
    </div>
  </div>
</section>
```

### CSS clave

```css
.cniC { position: relative; padding-block: clamp(4rem, 8vw, 7rem); background: var(--color-bg-base); overflow: hidden; }
.cniC__inner { max-width: 720px; margin: 0 auto; text-align: center; position: relative; z-index: 2; }

.cniC__polaroid {
  position: absolute;
  z-index: 1;
  width: clamp(160px, 18vw, 220px);
  padding: 12px 12px 18px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 24px 44px rgba(26, 31, 46, 0.18), 0 6px 14px rgba(26, 31, 46, 0.08);
  margin: 0;
}
.cniC__polaroidImg { aspect-ratio: 4 / 5; overflow: hidden; border-radius: 2px; margin-bottom: 10px; }
.cniC__polaroidCap { font-family: var(--font-serif); font-style: italic; font-size: 0.875rem; color: var(--color-text-secondary); text-align: center; letter-spacing: 0.2px; }

.cniC__polaroid--left {
  top: 10%; left: clamp(-2vw, -1vw, 2%);
  transform: rotate(-7deg);
  animation: cniPolaroidLeft 7s ease-in-out infinite;
}
.cniC__polaroid--right {
  bottom: 8%; right: clamp(-2vw, -1vw, 2%);
  transform: rotate(6deg);
  animation: cniPolaroidRight 6.2s ease-in-out infinite;
}
@keyframes cniPolaroidLeft {
  0%, 100% { transform: rotate(-7deg) translateY(0); }
  50%      { transform: rotate(-5deg) translateY(-10px); }
}
@keyframes cniPolaroidRight {
  0%, 100% { transform: rotate(6deg) translateY(0); }
  50%      { transform: rotate(8deg) translateY(-8px); }
}

@media (max-width: 899.98px) {
  .cniC__polaroid--left,
  .cniC__polaroid--right { display: none; }
}
```

---

## Cómo restaurar

- **A** → copy paste del bloque · ya no necesita CSS nuevo (los selectores `.cni__*` son parte de la opción canónica D si los renombrase; si A se quiere recuperar, crear un nuevo prefijo para no colisionar)
- **B** → copy paste bloque + CSS (las keyframes `cniFloatSlow`/`cniFloatFast` probablemente ya existen)
- **C** → copy paste bloque completo
