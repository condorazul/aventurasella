/**
 * Blog posts · EN · metadata for the English version of each entry.
 *
 * Parallel structure to blog-posts.ts (ES). Same shape, translated copy.
 * Used by:
 *  - BlogPostLayout when currentLocale === 'en'
 *  - /en/blog/ hub (when built)
 *  - sitemap generation for EN
 */

export interface BlogPostEn {
  slug: string;
  title: string;
  h1: string;
  description: string;
  excerpt: string;
  keyword: string;
  image: string;
  imageAlt: string;
  datePublished: string;
  dateModified: string;
  readingTime: number;
  category: string;
  relatedPages: { label: string; href: string }[];
  relatedPosts?: string[];
}

export const BLOG_POSTS_EN: BlogPostEn[] = [
  {
    slug: 'what-to-bring-sella-descent',
    title: 'What to bring for the Sella River descent · complete guide (2026)',
    h1: 'What to bring for the Sella River descent',
    description: 'What to bring for the Sella River descent: clothing, footwear, food, phone, sun protection. The full 2026 list from a team with 25 years in Arriondas.',
    excerpt: 'The definitive list of what to pack (and what to leave at home) before paddling the Sella. 25 years summed up in one practical guide.',
    keyword: 'what to bring sella descent',
    image: 'includes-b',
    imageAlt: 'Sella River descent kit — canoe, double paddle, life jackets and waterproof barrel',
    datePublished: '2026-04-23',
    dateModified: '2026-05-12',
    readingTime: 8,
    category: 'Preparation',
    relatedPages: [
      { label: "What's included in the descent", href: '/en/premium-booking/' },
      { label: 'Prices and conditions',           href: '/en/prices/' },
      { label: 'How to get there',                href: '/en/how-to-get-there/' },
    ],
    relatedPosts: ['best-time-of-day-sella-descent', 'sella-descent-with-small-kids'],
  },
  {
    slug: 'best-time-of-day-sella-descent',
    title: 'Best time of day to do the Sella River descent · comparison',
    h1: 'Best time of day for the Sella descent',
    description: 'The best time of day for the Sella River descent based on flow, temperature and crowds. Real timetable from a team with years on the river.',
    excerpt: 'First thing in the morning or after lunch? We paddle nearly every day of the year — here is which time slot changes the experience and why.',
    keyword: 'best time sella descent',
    image: 'blog-mejorhora-cover',
    imageAlt: 'End of the Sella descent at Fríes — afternoon light over the river',
    datePublished: '2026-04-23',
    dateModified: '2026-05-12',
    readingTime: 7,
    category: 'Planning',
    relatedPages: [
      { label: 'Best time of year',  href: '/en/best-time/' },
      { label: 'How long it takes',  href: '/en/how-long-does-it-take/' },
      { label: 'Route and map',      href: '/en/route-and-map/' },
    ],
    relatedPosts: ['what-to-bring-sella-descent', 'sella-descent-riverside-bars'],
  },
  {
    slug: 'sella-descent-with-small-kids',
    title: 'Sella River descent with small kids · real guide',
    h1: 'Sella River descent with small kids',
    description: 'Sella River descent with small kids: minimum age, height, what to bring, how to plan the day. A real guide from a team that paddles with families every season.',
    excerpt: 'Minimum age, height, realistic distance, picnic and the four typical fears every family has — we resolve them in 90 seconds before launching.',
    keyword: 'sella descent with small kids',
    image: 'con-peques',
    imageAlt: 'Family with small children paddling the Sella River in a canoe',
    datePublished: '2026-04-23',
    dateModified: '2026-05-12',
    readingTime: 9,
    category: 'Family',
    relatedPages: [
      { label: 'Descent with kids',  href: '/en/with-kids/' },
      { label: 'How long it takes',  href: '/en/how-long-does-it-take/' },
      { label: 'Prices by age',      href: '/en/prices/' },
    ],
    relatedPosts: ['what-to-bring-sella-descent', 'best-time-of-day-sella-descent'],
  },
  {
    slug: 'pozo-del-arco-sella',
    title: 'Pozo del Arco · the best river beach on the Sella',
    h1: 'Pozo del Arco: the Sella river beach',
    description: 'Pozo del Arco: how to get there, what to find, why it is the best river beach on the Sella. It appears on the descent between Arriondas and Toraño — km 3.5.',
    excerpt: 'Turquoise waters, fine gravel, a medieval bridge in the background. The corner that turns a descent into a postcard afternoon.',
    keyword: 'pozo del arco sella',
    image: 'pozo-del-arco',
    imageAlt: 'Pozo del Arco — river beach on the Sella with crystal-clear waters',
    datePublished: '2026-04-23',
    dateModified: '2026-05-12',
    readingTime: 6,
    category: 'Places on the Sella',
    relatedPages: [
      { label: 'Route and map',     href: '/en/route-and-map/' },
      { label: 'Best time of year', href: '/en/best-time/' },
      { label: 'How long it takes', href: '/en/how-long-does-it-take/' },
    ],
    relatedPosts: ['sella-descent-riverside-bars', 'best-time-of-day-sella-descent'],
  },
  {
    slug: 'history-sella-descent',
    title: 'History of the Sella River descent · since 1929',
    h1: 'History of the Sella River descent',
    description: 'The history of the Sella River descent since 1929: Dionisio de la Huerta, the first canoe, the International Descent and how it became an International Tourist Interest Festival.',
    excerpt: '1929. Dionisio de la Huerta and four friends launch onto the Sella with an improvised canoe. What started as a bet was declared International Tourist Interest Festival in 1980.',
    keyword: 'history sella descent',
    image: 'blog-historia-cover',
    imageAlt: 'International Sella River Descent · paddlers on the river during the official competition',
    datePublished: '2026-04-23',
    dateModified: '2026-05-12',
    readingTime: 10,
    category: 'History',
    relatedPages: [
      { label: 'International Sella Descent', href: '/en/international-sella-descent/' },
      { label: 'About us',                    href: '/en/about-us/' },
      { label: 'Route and map',               href: '/en/route-and-map/' },
    ],
    relatedPosts: ['pozo-del-arco-sella', 'sella-descent-riverside-bars'],
  },
  {
    slug: 'sella-descent-riverside-bars',
    title: 'Riverside snack bars on the Sella · what to try at each one',
    h1: 'Riverside snack bars on the Sella descent',
    description: 'The 6 riverside snack bars on the Sella descent: Riverland, El Oasis, El Prau, El Bosque, La Mediana, Toraño. What to order, where each one is, and the house favourite.',
    excerpt: 'Six stops, six different moments. Riverland, El Oasis, El Prau, El Bosque, La Mediana, Toraño. The honest guide.',
    keyword: 'sella descent riverside bars',
    image: 'blog-chiringuitos-cover',
    imageAlt: 'Riverside snack bar on the Sella · a typical stop on the tourist descent',
    datePublished: '2026-04-23',
    dateModified: '2026-05-12',
    readingTime: 7,
    category: 'Route',
    relatedPages: [
      { label: 'Route and map',     href: '/en/route-and-map/' },
      { label: 'How long it takes', href: '/en/how-long-does-it-take/' },
      { label: "What's included",   href: '/en/premium-booking/' },
    ],
    relatedPosts: ['pozo-del-arco-sella', 'best-time-of-day-sella-descent'],
  },
  {
    slug: 'is-sella-descent-tiring',
    title: 'Is the Sella River descent tiring? Real answer',
    h1: 'Is the Sella River descent tiring?',
    description: 'Is the Sella River descent tiring? The honest answer from a team with 25 years paddling: it is not a sport, it is a stroll. What to expect physically by age and fitness.',
    excerpt: 'A real question we get every day at the desk. The short answer is "no". The long one is worth reading before booking: it is not a sport, it is a stroll with a paddle.',
    keyword: 'is sella descent tiring',
    image: 'canoa_sola',
    imageAlt: 'Sella River descent in a canoe — easy pace along the river',
    datePublished: '2026-04-23',
    dateModified: '2026-05-12',
    readingTime: 7,
    category: 'Preparation',
    relatedPages: [
      { label: 'How long it takes', href: '/en/how-long-does-it-take/' },
      { label: 'Route and map',     href: '/en/route-and-map/' },
      { label: 'With kids',         href: '/en/with-kids/' },
    ],
    relatedPosts: ['what-to-bring-sella-descent', 'best-time-of-day-sella-descent'],
  },
  {
    slug: 'sella-descent-groups-stag-do',
    title: 'Sella River descent in groups · stag parties and companies',
    h1: 'Sella River descent in groups',
    description: 'Sella River descent in groups: stag and hen parties, birthdays, companies, groups of friends. Organisation, prices, picnic and real recommendations.',
    excerpt: 'Hen parties, companies, birthdays, groups of friends. How we plan the day so that everyone enjoys, regardless of fitness level.',
    keyword: 'sella descent group stag party',
    image: 'blog-grupos-cover',
    imageAlt: 'Stag/hen group on the Sella River descent — canoes and good vibes in Arriondas',
    datePublished: '2026-04-23',
    dateModified: '2026-05-12',
    readingTime: 8,
    category: 'Plans',
    relatedPages: [
      { label: 'Premium booking', href: '/en/premium-booking/' },
      { label: 'Prices',          href: '/en/prices/' },
      { label: 'Contact',         href: '/en/contact/' },
    ],
    relatedPosts: ['sella-descent-riverside-bars', 'what-to-bring-sella-descent'],
  },
  {
    slug: 'what-to-do-after-sella-descent-ribadesella',
    title: 'What to do after the Sella descent · Ribadesella nearby',
    h1: 'What to do after the Sella River descent',
    description: 'What to visit after the Sella River descent: Ribadesella, Cangas de Onís, Lastres, Covadonga. Afternoon and evening plans to round off the day in Asturias.',
    excerpt: 'You have already paddled the Sella. It is 15:00, you are showered and have the afternoon ahead. Five real plans to round off the day in eastern Asturias.',
    keyword: 'what to see ribadesella after descent',
    image: 'blog-despues-cover',
    imageAlt: 'Sanctuary of Covadonga · one of the recommended plans after the Sella River descent in eastern Asturias',
    datePublished: '2026-04-23',
    dateModified: '2026-05-12',
    readingTime: 8,
    category: 'Asturias',
    relatedPages: [
      { label: 'How to get there',  href: '/en/how-to-get-there/' },
      { label: 'Route and map',     href: '/en/route-and-map/' },
      { label: 'Best time of year', href: '/en/best-time/' },
    ],
    relatedPosts: ['sella-descent-riverside-bars', 'history-sella-descent'],
  },
  {
    slug: 'where-to-stay-near-sella-descent',
    title: 'Where to stay near the Sella River descent · Arriondas',
    h1: 'Where to stay near the Sella River descent',
    description: 'Where to sleep near the Sella River descent: hotels, rural houses, apartments and campsites in Arriondas and surroundings. How to choose by family, couple or group.',
    excerpt: 'Before or after the descent you need to sleep nearby. Types of accommodation in Arriondas and surroundings, how to choose and what to look for. We do not book — we just point you in the right direction.',
    keyword: 'accommodation arriondas sella descent',
    image: 'blog-alojamiento-inline',
    imageAlt: 'Asturian rural hotel near the Sella River descent · charming accommodation a few kilometres from Arriondas',
    datePublished: '2026-04-24',
    dateModified: '2026-05-12',
    readingTime: 8,
    category: 'Planning',
    relatedPages: [
      { label: 'How to get there', href: '/en/how-to-get-there/' },
      { label: 'Best time of year', href: '/en/best-time/' },
      { label: 'Contact',          href: '/en/contact/' },
    ],
    relatedPosts: ['what-to-do-after-sella-descent-ribadesella', 'best-time-of-day-sella-descent'],
  },
];

/** Helper · returns a post by slug */
export function getPostBySlugEn(slug: string): BlogPostEn | undefined {
  return BLOG_POSTS_EN.find(p => p.slug === slug);
}

/** Helper · returns related posts given a current slug */
export function getRelatedPostsEn(currentSlug: string, limit = 2): BlogPostEn[] {
  const current = getPostBySlugEn(currentSlug);
  if (current?.relatedPosts?.length) {
    return current.relatedPosts
      .map(slug => getPostBySlugEn(slug))
      .filter((p): p is BlogPostEn => !!p)
      .slice(0, limit);
  }
  return BLOG_POSTS_EN.filter(p => p.slug !== currentSlug).slice(0, limit);
}

/** Format ISO date → "23 April 2026" */
export function formatDateEn(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number);
  const months = ['January', 'February', 'March', 'April', 'May', 'June',
                  'July', 'August', 'September', 'October', 'November', 'December'];
  return `${d} ${months[m - 1]} ${y}`;
}
