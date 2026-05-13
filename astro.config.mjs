import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { BLOG_POSTS } from './src/data/blog-posts.ts';

// Mapa slug → dateModified para alimentar `lastmod` del sitemap
const blogDates = Object.fromEntries(
  BLOG_POSTS.map(p => [`/blog/${p.slug}/`, p.dateModified])
);
// Fecha por defecto para resto de páginas del clúster (última revisión global)
const clusterLastMod = '2026-04-23';

// https://astro.build/config
export default defineConfig({
  site: 'https://aventuraenelsella.es',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'fr', 'pt'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-ES',
          en: 'en-GB',
          fr: 'fr-FR',
          pt: 'pt-PT',
        },
      },
      // Añade lastmod + changefreq + priority a cada URL para señalar frescura a Google/Bing
      serialize(item) {
        const url = new URL(item.url);
        const path = url.pathname;

        // Blog posts individuales → lastmod desde data/blog-posts.ts
        if (blogDates[path]) {
          item.lastmod = blogDates[path];
          item.changefreq = 'monthly';
          item.priority = 0.7;
          return item;
        }

        // Hub del blog → cambia más frecuentemente
        if (path === '/blog/') {
          item.lastmod = clusterLastMod;
          item.changefreq = 'weekly';
          item.priority = 0.8;
          return item;
        }

        // Home → prioridad máxima
        if (path === '/') {
          item.lastmod = clusterLastMod;
          item.changefreq = 'weekly';
          item.priority = 1.0;
          return item;
        }

        // Páginas legales → baja frecuencia
        if (path.startsWith('/legal/')) {
          item.lastmod = clusterLastMod;
          item.changefreq = 'yearly';
          item.priority = 0.3;
          return item;
        }

        // Resto del clúster comercial
        item.lastmod = clusterLastMod;
        item.changefreq = 'monthly';
        item.priority = 0.8;
        return item;
      },
    }),
  ],
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
  server: {
    port: 4321,
    host: true,
  },
  vite: {
    server: {
      watch: {
        // WSL: el filesystem Windows no emite eventos inotify → usar polling
        usePolling: true,
        interval: 300,
      },
    },
  },
});
