/**
 * src/utils/i18n.ts
 * ------------------------------------------------------------
 * Helpers para internacionalización · resuelven traducciones de UI y URLs
 * según idioma.
 *
 * Patrón de uso:
 *   import { t, localizeUrl, getLocalePath, getAlternates } from '@utils/i18n';
 *   t('nav_book_now', lang)                  → 'Book now'
 *   localizeUrl('/precios/', 'en')           → '/en/prices/' (si está mapeado)
 *   getLocalePath('precios', 'en')           → '/en/prices/'
 *   getAlternates('precios')                 → { es: '/precios/', en: '/en/prices/', ... }
 */

import { ui, type UiKey, type Locale, DEFAULT_LOCALE, LOCALES } from '@i18n/ui';
import { slugs, pageAvailableLocales, type TranslationKey } from '@i18n/slugs';

// =========== t() · traducción de strings de UI ===========
export function t(key: UiKey, lang: Locale | string | undefined): string {
  const l = isValidLocale(lang) ? lang : DEFAULT_LOCALE;
  const entry = ui[key];
  if (!entry) {
    console.warn(`[i18n] Missing UI key: ${key}`);
    return key;
  }
  return entry[l] ?? entry[DEFAULT_LOCALE] ?? key;
}

// =========== Detección de locale válido ===========
export function isValidLocale(lang: any): lang is Locale {
  return typeof lang === 'string' && (LOCALES as readonly string[]).includes(lang);
}

// =========== getLocalePath · construye URL completa por idioma ===========
export function getLocalePath(key: TranslationKey, lang: Locale): string {
  const slug = slugs[key]?.[lang];
  if (slug === undefined) {
    console.warn(`[i18n] Missing slug for key=${key} lang=${lang}`);
    return lang === DEFAULT_LOCALE ? '/' : `/${lang}/`;
  }
  // Home (slug === '') · raíz del dominio o /xx/
  if (slug === '') {
    return lang === DEFAULT_LOCALE ? '/' : `/${lang}/`;
  }
  // ES sin prefijo · resto con /xx/
  if (lang === DEFAULT_LOCALE) return `/${slug}/`;
  return `/${lang}/${slug}/`;
}

// =========== getAlternates · mapa de URLs por idioma para hreflang ===========
export function getAlternates(key: TranslationKey): Record<Locale, string> {
  const available = pageAvailableLocales[key] ?? (LOCALES as readonly Locale[]);
  const map = {} as Record<Locale, string>;
  for (const l of LOCALES) {
    if (available.includes(l)) {
      map[l] = getLocalePath(key, l);
    } else {
      // Si no está disponible en ese idioma, apuntar a la home de ese idioma
      // (evita 404 desde el switcher).
      map[l] = getLocalePath('home', l);
    }
  }
  return map;
}

// =========== localizeUrl · helper para URLs sueltas (no en slugs.ts) ===========
// Útil para enlaces internos genéricos que no están en el mapa de páginas.
export function localizeUrl(path: string, lang: Locale): string {
  if (lang === DEFAULT_LOCALE) return path;
  // Strip prefijo de locale existente si lo tiene
  const stripped = path.replace(/^\/(en|fr|pt)(\/|$)/, '/');
  if (stripped === '/') return `/${lang}/`;
  return `/${lang}${stripped}`;
}

// =========== getLocaleFromPath · extrae locale de un pathname ===========
export function getLocaleFromPath(pathname: string): Locale {
  const m = pathname.match(/^\/(en|fr|pt)(\/|$)/);
  return (m?.[1] as Locale) ?? DEFAULT_LOCALE;
}

// =========== getHtmlLang · valor para <html lang="..."> ===========
// Devuelve el código BCP-47 correcto para cada idioma (es-ES, en-GB, fr-FR, pt-PT).
export function getHtmlLang(lang: Locale): string {
  const map: Record<Locale, string> = {
    es: 'es-ES',
    en: 'en-GB',
    fr: 'fr-FR',
    pt: 'pt-PT',
  };
  return map[lang] ?? map[DEFAULT_LOCALE];
}

// =========== isLocaleReady · indica si la traducción está completa ===========
// El selector de idioma usa esto para marcar idiomas en construcción como
// "pendientes" (no clickables) o redirigir a home si availableLocales restringe.
export function isLocaleReady(key: TranslationKey, lang: Locale): boolean {
  const available = pageAvailableLocales[key] ?? (LOCALES as readonly Locale[]);
  return available.includes(lang);
}
