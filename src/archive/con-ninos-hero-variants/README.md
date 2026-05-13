# Hero variants · /con-ninos/

**Fecha decisión:** 2026-04-19 · **Elegida:** Opción D (sage editorial con swoosh bajo "niños")

Al usuario le gustaron también las opciones A, B y C — las archivamos aquí por si en el futuro las queremos recuperar para otra página o para A/B testear de nuevo.

---

## Opción A · Oscuro editorial (original)

Hero navy con grid pattern, stats con dividers finos, sin swoosh. Sobrio/profesional.

### Markup

```astro
<section class="cnh" aria-labelledby="cnh-title">
  <Header currentPath="/con-ninos/" theme="dark" />
  <div class="cnh__inner">
    <nav class="cnh__breadcrumb" aria-label="Breadcrumb">
      <a href="/">Inicio</a>
      <span aria-hidden="true">›</span>
      <span aria-current="page">Con niños</span>
    </nav>

    <span class="cnh__eyebrow">
      <span class="cnh__eyebrow-dot" aria-hidden="true"></span>
      En familia · Temporada 2026
    </span>

    <h1 id="cnh-title" class="cnh__title">
      Descenso del Sella<br/>
      <span class="serif-italic">con niños</span>
    </h1>

    <p class="cnh__lead">
      <strong>Aventura en familia en Asturias</strong>. Una jornada segura, organizada y
      adaptada al ritmo de los peques — con monitores titulados, todo el equipo
      infantil incluido y un río pensado para disfrutar juntos.
    </p>

    <div class="cnh__stats">
      <div class="cnh__stat">
        <span class="cnh__stat-value">5 años</span>
        <span class="cnh__stat-label">+ 1,15 m · edad mínima</span>
      </div>
      <div class="cnh__stat-divider" aria-hidden="true"></div>
      <div class="cnh__stat">
        <span class="cnh__stat-value">30 €</span>
        <span class="cnh__stat-label">Por niño · todo incluido</span>
      </div>
      <div class="cnh__stat-divider" aria-hidden="true"></div>
      <div class="cnh__stat">
        <span class="cnh__stat-value">4.5 ⭐</span>
        <span class="cnh__stat-label">147 reseñas</span>
      </div>
    </div>

    <div class="cnh__ctas">
      <a href="/reservar/" class="cnh__cta cnh__cta--primary">
        Reservar plaza en familia
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
      </a>
      <a href="/precios/" class="cnh__cta cnh__cta--ghost">
        Ver precios y modalidades
      </a>
    </div>
  </div>
</section>
```

### CSS clave (fondo navy)

```css
.cnh {
  position: relative;
  padding-bottom: clamp(3rem, 6vw, 5rem);
  background: linear-gradient(180deg, #1A1F2E 0%, #243040 100%);
  color: var(--color-text-on-dark, #FBF8F1);
  overflow: hidden;
  isolation: isolate;
}
/* el serif-italic va en coral (var(--color-primary)) */
```

---

## Opción B · Coral familiar desenfadado

Hero claro crema con formas orgánicas difuminadas, foto de familia a la derecha (rotada -1.5°), badges flotantes, pills de colores. Aire fresco y casual.

### Markup completo

```astro
<section class="cnhB" aria-labelledby="cnhB-title">
  <div class="cnhB__shapes" aria-hidden="true">
    <span class="cnhB__shape cnhB__shape--1"></span>
    <span class="cnhB__shape cnhB__shape--2"></span>
    <span class="cnhB__shape cnhB__shape--3"></span>
  </div>

  <div class="cnhB__wrap">
    <nav class="cnhB__breadcrumb" aria-label="Breadcrumb">
      <a href="/">Inicio</a>
      <span aria-hidden="true">›</span>
      <span aria-current="page">Con niños</span>
    </nav>

    <div class="cnhB__grid">
      <div class="cnhB__content">
        <span class="cnhB__eyebrow">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          El plan favorito de las familias
        </span>

        <h1 id="cnhB-title" class="cnhB__title">
          Bajamos el Sella<br/>
          <span class="cnhB__titleAccent">
            <span class="serif-italic">con los peques</span>
            <svg class="cnhB__titleSwoosh" width="180" height="18" viewBox="0 0 180 18" fill="none" aria-hidden="true">
              <path d="M2 14C30 6 70 4 110 8c25 2.5 50 6 68 4" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
            </svg>
          </span>
        </h1>

        <p class="cnhB__lead">
          Una aventura <strong>apta para toda la familia</strong> — con monitores titulados,
          canoa compartida y ritmo familiar. <strong>Día completo resuelto</strong>: picnic,
          transfer, parking y vestuarios. Sin extras, sin sorpresas.
        </p>

        <ul class="cnhB__pills">
          <li class="cnhB__pill cnhB__pill--coral">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="7" r="3"/><path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/></svg>
            Desde <strong>5 años y 1,15 m</strong>
          </li>
          <li class="cnhB__pill cnhB__pill--sage">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>
            Todo incluido · <strong>30 €/peque</strong>
          </li>
          <li class="cnhB__pill cnhB__pill--ochre">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            <strong>4.5</strong> · 147 reseñas
          </li>
          <li class="cnhB__pill cnhB__pill--soft">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="4.5" r="1.5"/><circle cx="6.5" cy="7.5" r="1.5"/><circle cx="15.5" cy="7.5" r="1.5"/><path d="M11 11c-4 0-6 4-6 6 0 1.66 1.34 3 3 3h6c1.66 0 3-1.34 3-3 0-2-2-6-6-6z"/></svg>
            Mascotas <strong>gratis</strong>
          </li>
        </ul>

        <div class="cnhB__ctas">
          <a href="/reservar/" class="cnhB__cta cnhB__cta--primary">
            Reservar nuestro día en familia
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
          <a href="/precios/" class="cnhB__cta cnhB__cta--link">
            Ver precios y qué incluye
          </a>
        </div>

        <p class="cnhB__trust">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          <span>Reserva <strong>sin pagar ahora</strong> · cambios y cancelaciones flexibles</span>
        </p>
      </div>

      <div class="cnhB__media">
        <div class="cnhB__photo">
          <Picture src="con-peques" alt="Familia con niños bajando el Sella en canoa" sizes="(min-width: 960px) 45vw, 100vw" aspectRatio="4 / 5" bare />
        </div>

        <div class="cnhB__float cnhB__float--tl" aria-hidden="true">
          <span class="cnhB__floatEmoji">🛶</span>
          <div>
            <strong>2-3 h</strong>
            <span>ruta Mini</span>
          </div>
        </div>

        <div class="cnhB__float cnhB__float--br" aria-hidden="true">
          <span class="cnhB__floatEmoji">👨‍👩‍👧‍👦</span>
          <div>
            <strong>Monitores titulados</strong>
            <span>años en el Sella</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

### CSS completo

```css
.cnhB {
  position: relative;
  padding: clamp(3rem, 6vw, 5rem) 0 clamp(4rem, 7vw, 6rem);
  background:
    radial-gradient(ellipse 80% 60% at 20% 0%, rgba(244, 181, 163, 0.35) 0%, transparent 60%),
    radial-gradient(ellipse 70% 50% at 100% 100%, rgba(233, 179, 57, 0.15) 0%, transparent 60%),
    linear-gradient(180deg, #FDF8F1 0%, #F9EFE4 100%);
  overflow: hidden;
  isolation: isolate;
}
.cnhB__shapes { position: absolute; inset: 0; z-index: 0; pointer-events: none; }
.cnhB__shape { position: absolute; border-radius: 50%; filter: blur(40px); opacity: 0.45; }
.cnhB__shape--1 { top: 8%; right: -6%; width: 320px; height: 320px; background: radial-gradient(circle, #F4B5A3 0%, transparent 70%); }
.cnhB__shape--2 { bottom: 5%; left: -8%; width: 260px; height: 260px; background: radial-gradient(circle, #E8B339 0%, transparent 70%); opacity: 0.28; }
.cnhB__shape--3 { top: 45%; left: 38%; width: 180px; height: 180px; background: radial-gradient(circle, #3D4F3A 0%, transparent 70%); opacity: 0.12; }

.cnhB__wrap { position: relative; z-index: 1; max-width: 1280px; margin: 0 auto; padding: 0 clamp(1.5rem, 4vw, 4rem); text-align: center; }
.cnhB__breadcrumb { display: inline-flex; align-items: center; gap: 8px; font-family: var(--font-sans); font-size: 0.6875rem; letter-spacing: 1.6px; text-transform: uppercase; color: rgba(26, 31, 46, 0.45); margin-bottom: clamp(1.5rem, 3vw, 2rem); }
.cnhB__breadcrumb a { color: var(--color-primary); transition: color 200ms; }
.cnhB__breadcrumb a:hover { color: var(--color-primary-hover, #D66F59); }

.cnhB__grid { display: grid; grid-template-columns: 1fr; gap: clamp(2rem, 4vw, 3rem); align-items: center; text-align: initial; }
@media (min-width: 960px) { .cnhB__grid { grid-template-columns: 1.15fr 1fr; gap: clamp(3rem, 6vw, 5rem); } }

.cnhB__content { min-width: 0; }
.cnhB__eyebrow { display: inline-flex; align-items: center; gap: 8px; padding: 7px 14px; background: #fff; border: 1.5px solid var(--color-primary); border-radius: 999px; font-family: var(--font-sans); font-size: 0.75rem; font-weight: 700; letter-spacing: 0.3px; color: var(--color-primary); margin-bottom: clamp(1.25rem, 2.5vw, 1.75rem); box-shadow: 0 4px 14px rgba(233, 133, 111, 0.18); }
.cnhB__eyebrow svg { color: var(--color-primary); fill: rgba(233, 133, 111, 0.25); }

.cnhB__title { font-family: var(--font-display); font-size: clamp(2.25rem, 6vw, 4rem); font-weight: 900; line-height: 1; letter-spacing: -0.02em; text-transform: uppercase; color: var(--color-text-primary); margin: 0 0 clamp(1.25rem, 2.5vw, 1.75rem); }
.cnhB__titleAccent { position: relative; display: inline-block; }
.cnhB__titleAccent .serif-italic { color: var(--color-primary); font-family: var(--font-serif); font-weight: 400; font-style: italic; text-transform: none; letter-spacing: -0.01em; }
.cnhB__titleSwoosh { position: absolute; bottom: -0.35em; left: 50%; transform: translateX(-50%); width: 100%; max-width: 240px; height: auto; color: var(--color-primary-soft, #F4B5A3); opacity: 0.9; }

.cnhB__lead { font-family: var(--font-sans); font-size: 1.0625rem; line-height: 1.7; color: var(--color-text-secondary); margin: 0 0 clamp(1.5rem, 3vw, 2rem); max-width: 540px; }
.cnhB__lead strong { color: var(--color-text-primary); font-weight: 700; }

.cnhB__pills { list-style: none; padding: 0; display: flex; flex-wrap: wrap; gap: 8px; margin: 0 0 clamp(1.75rem, 3.5vw, 2.5rem); }
.cnhB__pill { display: inline-flex; align-items: center; gap: 6px; padding: 7px 13px; border-radius: 999px; font-family: var(--font-sans); font-size: 0.8125rem; font-weight: 500; transition: transform 200ms; }
.cnhB__pill:hover { transform: translateY(-2px); }
.cnhB__pill strong { font-weight: 800; }
.cnhB__pill--coral { background: rgba(233, 133, 111, 0.14); color: #A84B33; }
.cnhB__pill--sage  { background: rgba(61, 79, 58, 0.12); color: #3D4F3A; }
.cnhB__pill--ochre { background: rgba(232, 179, 57, 0.2); color: #8B6914; }
.cnhB__pill--soft  { background: #fff; color: var(--color-text-primary); border: 1px solid rgba(26, 31, 46, 0.1); }

.cnhB__ctas { display: flex; flex-wrap: wrap; align-items: center; gap: var(--s-3); margin-bottom: var(--s-4); }
.cnhB__cta { display: inline-flex; align-items: center; gap: var(--s-2); font-family: var(--font-sans); font-weight: 700; transition: all 240ms cubic-bezier(0.34, 1.2, 0.64, 1); }
.cnhB__cta--primary { padding: 1rem 1.75rem; background: var(--color-primary); color: #fff; border-radius: 999px; font-size: 0.8125rem; letter-spacing: 1.2px; text-transform: uppercase; box-shadow: 0 12px 32px rgba(233, 133, 111, 0.4); }
.cnhB__cta--primary:hover { background: var(--color-primary-hover, #D66F59); transform: translateY(-3px) rotate(-0.5deg); box-shadow: 0 16px 40px rgba(233, 133, 111, 0.55); }
.cnhB__cta--primary svg { transition: transform 200ms; }
.cnhB__cta--primary:hover svg { transform: translateX(4px); }
.cnhB__cta--link { color: var(--color-text-primary); font-size: 0.9375rem; border-bottom: 2px solid var(--color-primary); padding-bottom: 2px; }
.cnhB__cta--link:hover { color: var(--color-primary); }

.cnhB__trust { display: inline-flex; align-items: center; gap: 6px; font-family: var(--font-sans); font-size: 0.8125rem; color: var(--color-text-muted); margin: 0; }
.cnhB__trust svg { color: var(--color-sage, #3D4F3A); flex-shrink: 0; }
.cnhB__trust strong { color: var(--color-text-primary); font-weight: 700; }

.cnhB__media { position: relative; max-width: 480px; margin: 0 auto; }
.cnhB__photo { position: relative; border-radius: clamp(1.5rem, 3vw, 2.5rem); overflow: hidden; aspect-ratio: 4 / 5; box-shadow: 0 30px 60px rgba(26, 31, 46, 0.22), 0 10px 25px rgba(233, 133, 111, 0.25); transform: rotate(-1.5deg); }
.cnhB__photo :global(picture), .cnhB__photo :global(img) { display: block; width: 100%; height: 100%; object-fit: cover; }

.cnhB__float { position: absolute; display: flex; align-items: center; gap: 10px; padding: 10px 14px; background: #fff; border-radius: 14px; box-shadow: 0 14px 30px rgba(26, 31, 46, 0.16); font-family: var(--font-sans); }
.cnhB__float strong { display: block; font-size: 0.8125rem; font-weight: 800; color: var(--color-text-primary); line-height: 1.2; }
.cnhB__float span:last-child { display: block; font-size: 0.6875rem; color: var(--color-text-muted); letter-spacing: 0.2px; }
.cnhB__floatEmoji { font-size: 1.375rem; line-height: 1; }
.cnhB__float--tl { top: 8%; left: -18px; transform: rotate(-3deg); }
.cnhB__float--br { bottom: 10%; right: -20px; transform: rotate(2deg); }
@media (max-width: 599.98px) { .cnhB__float--tl { left: 0; } .cnhB__float--br { right: 0; } }
```

---

## Opción C · Coral editorial con swoosh

Mismo layout estructural que A (oscuro editorial) pero **fondo coral oscuro** (#C85A3F → #A84B33), acento serif en crema claro (#FFE5B3), swoosh ocre bajo "niños", CTA primary blanco.

### Diferencia clave vs. D

Solo cambia el gradiente del fondo + colores de acento. La estructura del markup es **idéntica al hero canónico actual** (Opción D). Para recuperarla:

1. Duplicar el markup actual de `<section class="cnh">` en `con-ninos.astro`
2. Añadir la clase modificadora `cnh--coral`
3. Añadir estos overrides al CSS:

```css
.cnh--coral {
  background: linear-gradient(180deg, #C85A3F 0%, #A84B33 100%);
}
.cnh--coral::before {
  background-image:
    linear-gradient(rgba(251, 248, 241, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(251, 248, 241, 0.05) 1px, transparent 1px);
}
.cnh--coral .cnh__title .serif-italic { color: #FFE5B3; }
.cnh--coral .cnh__swoosh { color: #E8B339; }
.cnh--coral .cnh__breadcrumb a:hover { color: #FFE5B3; }
.cnh--coral .cnh__eyebrow-dot {
  background: #FFE5B3;
  animation-name: cnhPulseCoral;
}
@keyframes cnhPulseCoral {
  0%, 100% { box-shadow: 0 0 0 0 rgba(255, 229, 179, 0.6); }
  50%      { box-shadow: 0 0 0 8px rgba(255, 229, 179, 0); }
}
.cnh--coral .cnh__stat-value { color: #FFE5B3; }
.cnh--coral .cnh__cta--primary {
  background: #FBF8F1; color: #A84B33;
  box-shadow: 0 10px 28px rgba(26, 31, 46, 0.25);
}
.cnh--coral .cnh__cta--primary:hover { background: #FFE5B3; }
```

---

## Cómo restaurar

- **A** → reemplazar el `background` del `.cnh` (actualmente sage) por `linear-gradient(180deg, #1A1F2E 0%, #243040 100%)` y eliminar el swoosh del H1
- **B** → copiar el bloque completo (markup + CSS `.cnhB*`) en una página nueva o como reemplazo
- **C** → mantener la estructura actual + añadir clase modificadora `cnh--coral` + los overrides de arriba
