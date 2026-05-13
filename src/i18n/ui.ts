/**
 * src/i18n/ui.ts
 * ------------------------------------------------------------
 * Fuente única de verdad para strings cortos de UI (header, footer, botones,
 * microcopy reutilizable). Las traducciones largas (copy editorial de cada
 * página) viven dentro de cada componente o en archivos `src/i18n/pages/*.ts`.
 *
 * Patrón de uso:
 *   import { t } from '@utils/i18n';
 *   t('nav_book_now', 'en') → 'Book now'
 */

export const LOCALES = ['es', 'en', 'fr', 'pt'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'es';

// Mapa principal de strings UI · una key por concepto, traducciones por idioma
export const ui = {
  // ============== Header / nav ==============
  nav_home:           { es: 'Inicio',          en: 'Home',           fr: 'Accueil',         pt: 'Início' },
  nav_descenso:       { es: 'Descenso del Sella', en: 'Sella Descent', fr: 'Descente du Sella', pt: 'Descida do Sella' },
  nav_guias:          { es: 'Guías',           en: 'Guides',         fr: 'Guides',          pt: 'Guias' },
  nav_blog:           { es: 'Blog',            en: 'Blog',           fr: 'Blog',            pt: 'Blog' },
  nav_quienes:        { es: 'Quiénes somos',   en: 'About us',       fr: 'Qui sommes-nous', pt: 'Quem somos' },
  nav_contact:        { es: 'Contacto',        en: 'Contact',        fr: 'Contact',         pt: 'Contacto' },
  nav_book_now:       { es: 'Reservar ahora',  en: 'Book now',       fr: 'Réserver',        pt: 'Reservar agora' },
  nav_book:           { es: 'Reservar',        en: 'Book',           fr: 'Réserver',        pt: 'Reservar' },
  nav_call:           { es: 'Llamar',          en: 'Call',           fr: 'Appeler',         pt: 'Ligar' },
  nav_lang_change:    { es: 'Cambiar idioma',  en: 'Change language', fr: 'Changer de langue', pt: 'Mudar idioma' },
  nav_lang_eyebrow:   { es: '— Idioma',        en: '— Language',     fr: '— Langue',        pt: '— Idioma' },
  nav_open_menu:      { es: 'Abrir menú',      en: 'Open menu',      fr: 'Ouvrir le menu',  pt: 'Abrir menu' },
  nav_close_menu:     { es: 'Cerrar menú',     en: 'Close menu',     fr: 'Fermer le menu',  pt: 'Fechar menu' },
  a11y_skip_link:     { es: 'Saltar al contenido', en: 'Skip to content', fr: 'Aller au contenu', pt: 'Saltar para o conteúdo' },
  nav_precios:        { es: 'Precios',         en: 'Prices',         fr: 'Tarifs',          pt: 'Preços' },
  nav_main_aria:      { es: 'Navegación principal', en: 'Main navigation', fr: 'Navigation principale', pt: 'Navegação principal' },
  nav_sections_aria:  { es: 'Secciones',       en: 'Sections',       fr: 'Sections',        pt: 'Secções' },
  nav_logo_aria:      { es: 'Aventura en el Sella · Inicio', en: 'Aventura en el Sella · Home', fr: 'Aventura en el Sella · Accueil', pt: 'Aventura en el Sella · Início' },
  nav_call_phone:     { es: 'Llamar al',       en: 'Call',           fr: 'Appeler le',      pt: 'Ligar para' },
  nav_call_title:     { es: 'Llamar ·',        en: 'Call ·',         fr: 'Appeler ·',       pt: 'Ligar ·' },
  nav_view_all_guides: { es: 'Ver todas las guías', en: 'See all guides', fr: 'Voir tous les guides', pt: 'Ver todos os guias' },
  nav_view_all_guides_arrow: { es: 'Ver todas las guías →', en: 'See all guides →', fr: 'Voir tous les guides →', pt: 'Ver todos os guias →' },

  // Header · eyebrows de los dropdowns
  nav_dd_sella_eyebrow:  { es: 'Rutas y modalidades',   en: 'Routes & options',     fr: 'Itinéraires et options', pt: 'Rotas e opções' },
  nav_dd_guias_eyebrow:  { es: 'Planifica tu día',      en: 'Plan your day',        fr: 'Planifie ta journée',    pt: 'Planeia o teu dia' },
  nav_dd_blog_eyebrow:   { es: 'Del cuaderno de Arriondas', en: 'From the Arriondas notebook', fr: 'Du carnet d\'Arriondas', pt: 'Do caderno de Arriondas' },

  // ============== Breadcrumb ==============
  bc_home:            { es: 'Inicio',          en: 'Home',           fr: 'Accueil',         pt: 'Início' },

  // ============== Footer ==============
  footer_explore:        { es: 'Explora',           en: 'Explore',         fr: 'Explorer',        pt: 'Explorar' },
  footer_legal:          { es: 'Legal',             en: 'Legal',           fr: 'Mentions légales', pt: 'Legal' },
  footer_contact:        { es: 'Contacto',          en: 'Contact',         fr: 'Contact',         pt: 'Contacto' },
  footer_follow:         { es: 'Síguenos',          en: 'Follow us',       fr: 'Suivez-nous',     pt: 'Segue-nos' },
  footer_rights:         { es: 'Todos los derechos reservados.', en: 'All rights reserved.', fr: 'Tous droits réservés.', pt: 'Todos os direitos reservados.' },
  footer_madein:         { es: 'Hecho con cariño desde Arriondas', en: 'Made with love from Arriondas', fr: 'Fait avec amour depuis Arriondas', pt: 'Feito com amor desde Arriondas' },
  footer_authority:      { es: 'Autorización turística', en: 'Tourism authorization', fr: 'Autorisation touristique', pt: 'Autorização turística' },

  // ============== CTAs genéricos ==============
  cta_read_more:      { es: 'Leer más',        en: 'Read more',      fr: 'Lire la suite',   pt: 'Ler mais' },
  cta_read_guide:     { es: 'Leer la guía',    en: 'Read the guide', fr: 'Lire le guide',   pt: 'Ler o guia' },
  cta_check_prices:   { es: 'Ver precios',     en: 'See prices',     fr: 'Voir les prix',   pt: 'Ver preços' },
  cta_view_all:       { es: 'Ver todas',       en: 'See all',        fr: 'Voir tout',       pt: 'Ver todas' },
  cta_more_info:      { es: 'Más información', en: 'More info',      fr: 'Plus d\'infos',   pt: 'Mais info' },
  cta_back_top:       { es: 'Volver arriba',   en: 'Back to top',    fr: 'Retour en haut',  pt: 'Voltar ao topo' },

  // ============== Etiquetas comunes ==============
  meta_reading_time:  { es: 'min de lectura',  en: 'min read',       fr: 'min de lecture',  pt: 'min de leitura' },
  meta_published_on:  { es: 'Publicado el',    en: 'Published on',   fr: 'Publié le',       pt: 'Publicado a' },
  meta_updated_on:    { es: 'Actualizado',     en: 'Updated',        fr: 'Mis à jour',      pt: 'Atualizado' },
  meta_written_by:    { es: 'Escrito por',     en: 'Written by',     fr: 'Écrit par',       pt: 'Escrito por' },

  // ============== Idiomas (etiquetas en cada idioma) ==============
  lang_es:            { es: 'Español',         en: 'Spanish',        fr: 'Espagnol',        pt: 'Espanhol' },
  lang_en:            { es: 'Inglés',          en: 'English',        fr: 'Anglais',         pt: 'Inglês' },
  lang_fr:            { es: 'Francés',         en: 'French',         fr: 'Français',        pt: 'Francês' },
  lang_pt:            { es: 'Portugués',       en: 'Portuguese',     fr: 'Portugais',       pt: 'Português' },
  // Estado · "viene pronto" cuando un idioma aún no está disponible
  lang_coming_soon:   { es: 'Próximamente',    en: 'Coming soon',    fr: 'Bientôt',         pt: 'Em breve' },
  lang_current:       { es: 'actual',          en: 'current',        fr: 'actuel',          pt: 'atual' },
} as const;

export type UiKey = keyof typeof ui;
