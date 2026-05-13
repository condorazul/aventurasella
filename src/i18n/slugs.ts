/**
 * src/i18n/slugs.ts
 * ------------------------------------------------------------
 * Mapa de slugs por idioma para cada página estática. La `translationKey`
 * identifica el "concepto" de la página independientemente del idioma, y
 * cada idioma tiene su slug optimizado para SEO local.
 *
 * Patrón de uso:
 *   import { getLocalePath } from '@utils/i18n';
 *   getLocalePath('precios', 'en') → '/en/prices/'
 *   getLocalePath('precios', 'es') → '/precios/'  (ES sin prefijo)
 *
 * Cuando añades una página nueva:
 *   1. Añadir clave a TranslationKey
 *   2. Añadir entry en `slugs`
 *   3. En la página, pasar `translationKey="..."` al BaseLayout
 */

export type TranslationKey =
  // Páginas principales / clúster SEO
  | 'home'
  | 'precios'
  | 'recorrido_mapa'
  | 'reserva_premium'
  | 'descenso_internacional'
  | 'opiniones'
  | 'quienes_somos'
  | 'con_ninos'
  | 'con_perro'
  | 'cuanto_dura'
  | 'mejor_epoca'
  | 'como_llegar'
  | 'contacto'
  | 'reservar'
  // Blog hub
  | 'blog'
  // Legales
  | 'legal_aviso'
  | 'legal_privacidad'
  | 'legal_cookies'
  | 'legal_terminos';

// Slugs por idioma (sin barras inicial/final · el helper las añade).
// ES queda como cadena vacía para la home (raíz del dominio).
export const slugs: Record<TranslationKey, Record<'es' | 'en' | 'fr' | 'pt', string>> = {
  home:                     { es: '',                                 en: '',                                fr: '',                              pt: '' },

  // Clúster SEO
  precios:                  { es: 'precios',                          en: 'prices',                          fr: 'tarifs',                        pt: 'precos' },
  recorrido_mapa:           { es: 'recorrido-y-mapa',                 en: 'route-and-map',                   fr: 'parcours-et-carte',             pt: 'percurso-e-mapa' },
  reserva_premium:          { es: 'reserva-premium',                  en: 'premium-booking',                 fr: 'reservation-premium',           pt: 'reserva-premium' },
  descenso_internacional:   { es: 'descenso-internacional-del-sella', en: 'international-sella-descent',     fr: 'descente-internationale-du-sella', pt: 'descida-internacional-do-sella' },
  opiniones:                { es: 'opiniones',                        en: 'reviews',                         fr: 'avis',                          pt: 'opinioes' },
  quienes_somos:            { es: 'quienes-somos',                    en: 'about-us',                        fr: 'qui-sommes-nous',               pt: 'quem-somos' },
  con_ninos:                { es: 'con-ninos',                        en: 'with-kids',                       fr: 'avec-enfants',                  pt: 'com-criancas' },
  con_perro:                { es: 'con-perro',                        en: 'with-dog',                        fr: 'avec-chien',                    pt: 'com-cao' },
  cuanto_dura:              { es: 'cuanto-dura',                      en: 'how-long-does-it-take',           fr: 'duree',                         pt: 'quanto-tempo-dura' },
  mejor_epoca:              { es: 'mejor-epoca',                      en: 'best-time',                       fr: 'meilleure-periode',             pt: 'melhor-epoca' },
  como_llegar:              { es: 'como-llegar',                      en: 'how-to-get-there',                fr: 'comment-arriver',               pt: 'como-chegar' },
  contacto:                 { es: 'contacto',                         en: 'contact',                         fr: 'contact',                       pt: 'contacto' },
  reservar:                 { es: 'reservar',                         en: 'book',                            fr: 'reserver',                      pt: 'reservar' },

  // Blog hub
  blog:                     { es: 'blog',                             en: 'blog',                            fr: 'blog',                          pt: 'blog' },

  // Legales
  legal_aviso:              { es: 'legal/aviso-legal',                en: 'legal/legal-notice',              fr: 'legal/mentions-legales',        pt: 'legal/aviso-legal' },
  legal_privacidad:         { es: 'legal/privacidad',                 en: 'legal/privacy',                   fr: 'legal/confidentialite',         pt: 'legal/privacidade' },
  legal_cookies:            { es: 'legal/cookies',                    en: 'legal/cookies',                   fr: 'legal/cookies',                 pt: 'legal/cookies' },
  legal_terminos:           { es: 'legal/terminos-contratacion',      en: 'legal/terms',                     fr: 'legal/conditions',              pt: 'legal/termos' },
};

// availableLocales — algunas páginas pueden no estar traducidas a todos los idiomas
// inicialmente. Por defecto se asume disponible en los 4. Cuando una traducción
// no exista, listamos solo los idiomas que SÍ están disponibles; el switcher
// manda al usuario a la home del idioma destino en lugar de generar un 404.
export const pageAvailableLocales: Partial<Record<TranslationKey, ('es' | 'en' | 'fr' | 'pt')[]>> = {
  // Home y Blog hub disponibles en los 4 idiomas (chrome traducido · contenido
  // de componentes/posts irá migrando en olas siguientes).
  home:                    ['es', 'en', 'fr', 'pt'],
  precios:                 ['es', 'en', 'fr', 'pt'],
  recorrido_mapa:          ['es', 'en', 'fr', 'pt'],
  reserva_premium:         ['es', 'en', 'fr', 'pt'],
  descenso_internacional:  ['es', 'en', 'fr', 'pt'],
  opiniones:               ['es', 'en', 'fr', 'pt'],
  quienes_somos:           ['es', 'en', 'fr', 'pt'],
  con_ninos:               ['es', 'en', 'fr', 'pt'],
  con_perro:               ['es', 'en', 'fr', 'pt'],
  cuanto_dura:             ['es', 'en', 'fr', 'pt'],
  mejor_epoca:             ['es', 'en', 'fr', 'pt'],
  como_llegar:             ['es', 'en', 'fr', 'pt'],
  contacto:                ['es', 'en', 'fr', 'pt'],
  reservar:                ['es'],
  blog:                    ['es', 'en', 'fr', 'pt'],
  legal_aviso:             ['es', 'en', 'fr', 'pt'],
  legal_privacidad:        ['es', 'en', 'fr', 'pt'],
  legal_cookies:           ['es', 'en', 'fr', 'pt'],
  legal_terminos:          ['es', 'en', 'fr', 'pt'],
};
