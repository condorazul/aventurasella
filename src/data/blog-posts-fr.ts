/**
 * Blog posts · FR · métadonnées pour la version française de chaque article.
 *
 * Structure parallèle à blog-posts.ts (ES) et blog-posts-en.ts. Même forme,
 * copie traduite.
 * Utilisé par :
 *  - BlogPostLayout quand currentLocale === 'fr'
 *  - hub /fr/blog/
 *  - génération du sitemap pour FR
 */

export interface BlogPostFr {
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

export const BLOG_POSTS_FR: BlogPostFr[] = [
  {
    slug: 'quoi-apporter-descente-du-sella',
    title: 'Quoi apporter pour la descente du Sella · guide complet (2026)',
    h1: 'Quoi apporter pour la descente du Sella',
    description: "Quoi apporter pour la descente du Sella : vêtements, chaussures, nourriture, téléphone, protection solaire. La liste complète 2026 d'une équipe avec 25 ans à Arriondas.",
    excerpt: "La liste définitive de ce qu'il faut emporter (et de ce qu'il faut laisser à la maison) avant de pagayer le Sella. 25 ans résumés en un guide pratique.",
    keyword: 'quoi apporter descente sella',
    image: 'includes-b',
    imageAlt: 'Équipement de la descente du Sella — canoë, pagaie double, gilets de sauvetage et bidon étanche',
    datePublished: '2026-04-23',
    dateModified: '2026-05-12',
    readingTime: 8,
    category: 'Préparation',
    relatedPages: [
      { label: 'Ce qui est inclus dans la descente', href: '/fr/reservation-premium/' },
      { label: 'Tarifs et conditions',               href: '/fr/tarifs/' },
      { label: 'Comment arriver',                    href: '/fr/comment-arriver/' },
    ],
    relatedPosts: ['meilleure-heure-descente-du-sella', 'descente-du-sella-avec-petits-enfants'],
  },
  {
    slug: 'meilleure-heure-descente-du-sella',
    title: 'Meilleure heure pour la descente du Sella · comparatif',
    h1: 'Meilleure heure pour descendre le Sella',
    description: "La meilleure heure de la journée pour la descente du Sella selon le débit, la température et l'affluence. Tableau horaire réel d'une équipe avec des années sur la rivière.",
    excerpt: "Tôt le matin ou après le déjeuner ? Nous pagayons presque tous les jours de l'année — voici quel créneau change l'expérience et pourquoi.",
    keyword: 'meilleure heure descente sella',
    image: 'blog-mejorhora-cover',
    imageAlt: 'Fin de la descente du Sella à Fríes — lumière de l\'après-midi sur la rivière',
    datePublished: '2026-04-23',
    dateModified: '2026-05-12',
    readingTime: 7,
    category: 'Planification',
    relatedPages: [
      { label: 'Meilleure période',  href: '/fr/meilleure-periode/' },
      { label: 'Combien de temps',   href: '/fr/duree/' },
      { label: 'Parcours et carte',  href: '/fr/parcours-et-carte/' },
    ],
    relatedPosts: ['quoi-apporter-descente-du-sella', 'buvettes-descente-du-sella'],
  },
  {
    slug: 'descente-du-sella-avec-petits-enfants',
    title: 'Descente du Sella avec petits enfants · guide réel',
    h1: 'Descente du Sella avec petits enfants',
    description: "Descente du Sella avec petits enfants : âge minimum, taille, quoi apporter, comment organiser la journée. Guide réel d'une équipe qui pagaie avec des familles chaque saison.",
    excerpt: "Âge minimum, taille, distance réaliste, pique-nique et les quatre peurs typiques de toute famille — nous les résolvons en 90 secondes avant le départ.",
    keyword: 'descente sella avec enfants',
    image: 'con-peques',
    imageAlt: 'Famille avec petits enfants descendant le Sella en canoë',
    datePublished: '2026-04-23',
    dateModified: '2026-05-12',
    readingTime: 9,
    category: 'Famille',
    relatedPages: [
      { label: 'Descente avec enfants', href: '/fr/avec-enfants/' },
      { label: 'Combien de temps',      href: '/fr/duree/' },
      { label: 'Tarifs par âge',        href: '/fr/tarifs/' },
    ],
    relatedPosts: ['quoi-apporter-descente-du-sella', 'meilleure-heure-descente-du-sella'],
  },
  {
    slug: 'pozo-del-arco-sella',
    title: 'Pozo del Arco · la plus belle plage fluviale du Sella',
    h1: 'Pozo del Arco : la plage fluviale du Sella',
    description: 'Pozo del Arco : comment y arriver, ce que vous trouverez, pourquoi c\'est la plus belle plage fluviale du Sella. Apparaît sur la descente entre Arriondas et Toraño — km 3,5.',
    excerpt: "Eaux turquoise, gravier fin, un pont médiéval en arrière-plan. Le coin qui transforme une descente en une après-midi de carte postale.",
    keyword: 'pozo del arco sella',
    image: 'pozo-del-arco',
    imageAlt: 'Pozo del Arco — plage fluviale sur le Sella avec eaux cristallines',
    datePublished: '2026-04-23',
    dateModified: '2026-05-12',
    readingTime: 6,
    category: 'Lieux du Sella',
    relatedPages: [
      { label: 'Parcours et carte', href: '/fr/parcours-et-carte/' },
      { label: 'Meilleure période', href: '/fr/meilleure-periode/' },
      { label: 'Combien de temps',  href: '/fr/duree/' },
    ],
    relatedPosts: ['buvettes-descente-du-sella', 'meilleure-heure-descente-du-sella'],
  },
  {
    slug: 'histoire-descente-du-sella',
    title: 'Histoire de la descente du Sella · depuis 1929',
    h1: 'Histoire de la descente du Sella',
    description: "L'histoire de la descente du Sella depuis 1929 : Dionisio de la Huerta, le premier canoë, la Descente Internationale et comment elle est devenue Fête d'Intérêt Touristique International.",
    excerpt: "1929. Dionisio de la Huerta et quatre amis se lancent sur le Sella avec un canoë improvisé. Ce qui a commencé comme un pari a été déclaré Fête d'Intérêt Touristique International en 1980.",
    keyword: 'histoire descente sella',
    image: 'blog-historia-cover',
    imageAlt: 'Descente Internationale du Sella · pagayeurs sur la rivière pendant la compétition officielle',
    datePublished: '2026-04-23',
    dateModified: '2026-05-12',
    readingTime: 10,
    category: 'Histoire',
    relatedPages: [
      { label: 'Descente Internationale du Sella', href: '/fr/descente-internationale-du-sella/' },
      { label: 'Qui sommes-nous',                  href: '/fr/qui-sommes-nous/' },
      { label: 'Parcours et carte',                href: '/fr/parcours-et-carte/' },
    ],
    relatedPosts: ['pozo-del-arco-sella', 'buvettes-descente-du-sella'],
  },
  {
    slug: 'buvettes-descente-du-sella',
    title: 'Buvettes du Sella · quoi essayer dans chacune',
    h1: 'Buvettes de la descente du Sella',
    description: 'Les 6 buvettes de la descente du Sella : Riverland, El Oasis, El Prau, El Bosque, La Mediana, Toraño. Que commander, où se trouve chacune, et la préférée de la maison.',
    excerpt: 'Six arrêts, six moments différents. Riverland, El Oasis, El Prau, El Bosque, La Mediana, Toraño. Le guide honnête.',
    keyword: 'buvettes descente sella',
    image: 'blog-chiringuitos-cover',
    imageAlt: 'Buvette au bord du Sella · une halte typique sur la descente touristique',
    datePublished: '2026-04-23',
    dateModified: '2026-05-12',
    readingTime: 7,
    category: 'Parcours',
    relatedPages: [
      { label: 'Parcours et carte',  href: '/fr/parcours-et-carte/' },
      { label: 'Combien de temps',   href: '/fr/duree/' },
      { label: 'Ce qui est inclus',  href: '/fr/reservation-premium/' },
    ],
    relatedPosts: ['pozo-del-arco-sella', 'meilleure-heure-descente-du-sella'],
  },
  {
    slug: 'descente-du-sella-fatigante',
    title: 'La descente du Sella est-elle fatigante ? Réponse réelle',
    h1: 'La descente du Sella est-elle fatigante ?',
    description: "La descente du Sella est-elle fatigante ? La réponse honnête d'une équipe avec 25 ans de pagayage : ce n'est pas un sport, c'est une promenade. À quoi s'attendre physiquement selon l'âge et la forme.",
    excerpt: "Une vraie question que l'on entend chaque jour à l'accueil. La réponse courte est « non ». La longue mérite d'être lue avant de réserver : ce n'est pas un sport, c'est une promenade avec une pagaie.",
    keyword: 'descente sella fatigante',
    image: 'canoa_sola',
    imageAlt: 'Descente du Sella en canoë — rythme tranquille sur la rivière',
    datePublished: '2026-04-23',
    dateModified: '2026-05-12',
    readingTime: 7,
    category: 'Préparation',
    relatedPages: [
      { label: 'Combien de temps',     href: '/fr/duree/' },
      { label: 'Parcours et carte',    href: '/fr/parcours-et-carte/' },
      { label: 'Avec enfants',         href: '/fr/avec-enfants/' },
    ],
    relatedPosts: ['quoi-apporter-descente-du-sella', 'meilleure-heure-descente-du-sella'],
  },
  {
    slug: 'descente-du-sella-groupes-evjf',
    title: 'Descente du Sella en groupe · EVJF et entreprises',
    h1: 'Descente du Sella en groupe',
    description: "Descente du Sella en groupe : enterrements de vie de jeune fille/garçon, anniversaires, entreprises, groupes d'amis. Organisation, tarifs, pique-nique et recommandations réelles.",
    excerpt: "EVJF, entreprises, anniversaires, groupes d'amis. Comment nous organisons la journée pour que tout le monde profite, peu importe le niveau de chacun.",
    keyword: 'descente sella groupe evjf',
    image: 'blog-grupos-cover',
    imageAlt: 'Groupe EVJF sur la descente du Sella — canoës et bonne humeur à Arriondas',
    datePublished: '2026-04-23',
    dateModified: '2026-05-12',
    readingTime: 8,
    category: 'Plans',
    relatedPages: [
      { label: 'Réservation Premium', href: '/fr/reservation-premium/' },
      { label: 'Tarifs',              href: '/fr/tarifs/' },
      { label: 'Contact',             href: '/fr/contact/' },
    ],
    relatedPosts: ['buvettes-descente-du-sella', 'quoi-apporter-descente-du-sella'],
  },
  {
    slug: 'que-faire-apres-descente-du-sella-ribadesella',
    title: 'Que faire après la descente du Sella · Ribadesella et alentours',
    h1: 'Que faire après la descente du Sella',
    description: 'Que visiter après la descente du Sella : Ribadesella, Cangas de Onís, Lastres, Covadonga. Plans d\'après-midi et de soirée pour compléter la journée aux Asturies.',
    excerpt: "Vous avez descendu le Sella. Il est 15h00, vous êtes douché et avez l'après-midi devant vous. Cinq plans réels pour compléter la journée à l'est des Asturies.",
    keyword: 'que voir ribadesella apres descente',
    image: 'blog-despues-cover',
    imageAlt: 'Sanctuaire de Covadonga · un des plans recommandés après la descente du Sella à l\'est des Asturies',
    datePublished: '2026-04-23',
    dateModified: '2026-05-12',
    readingTime: 8,
    category: 'Asturies',
    relatedPages: [
      { label: 'Comment arriver',   href: '/fr/comment-arriver/' },
      { label: 'Parcours et carte', href: '/fr/parcours-et-carte/' },
      { label: 'Meilleure période', href: '/fr/meilleure-periode/' },
    ],
    relatedPosts: ['buvettes-descente-du-sella', 'histoire-descente-du-sella'],
  },
  {
    slug: 'ou-loger-pres-descente-du-sella',
    title: 'Où loger près de la descente du Sella · Arriondas',
    h1: 'Où loger près de la descente du Sella',
    description: 'Où dormir près de la descente du Sella : hôtels, gîtes ruraux, appartements et campings à Arriondas et alentours. Comment choisir selon famille, couple ou groupe.',
    excerpt: "Avant ou après la descente, il faut dormir près du fleuve. Types d'hébergement à Arriondas et alentours, comment choisir et à quoi faire attention. Nous ne réservons pas — nous vous orientons.",
    keyword: 'hebergement arriondas descente sella',
    image: 'blog-alojamiento-inline',
    imageAlt: 'Hôtel rural asturien près de la descente du Sella · hébergement de charme à quelques kilomètres d\'Arriondas',
    datePublished: '2026-04-24',
    dateModified: '2026-05-12',
    readingTime: 8,
    category: 'Planification',
    relatedPages: [
      { label: 'Comment arriver',   href: '/fr/comment-arriver/' },
      { label: 'Meilleure période', href: '/fr/meilleure-periode/' },
      { label: 'Contact',           href: '/fr/contact/' },
    ],
    relatedPosts: ['que-faire-apres-descente-du-sella-ribadesella', 'meilleure-heure-descente-du-sella'],
  },
];

/** Helper · renvoie un article par slug */
export function getPostBySlugFr(slug: string): BlogPostFr | undefined {
  return BLOG_POSTS_FR.find(p => p.slug === slug);
}

/** Helper · renvoie les articles liés à partir d'un slug courant */
export function getRelatedPostsFr(currentSlug: string, limit = 2): BlogPostFr[] {
  const current = getPostBySlugFr(currentSlug);
  if (current?.relatedPosts?.length) {
    return current.relatedPosts
      .map(slug => getPostBySlugFr(slug))
      .filter((p): p is BlogPostFr => !!p)
      .slice(0, limit);
  }
  return BLOG_POSTS_FR.filter(p => p.slug !== currentSlug).slice(0, limit);
}

/** Formater ISO → "23 avril 2026" */
export function formatDateFr(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number);
  const months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin',
                  'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
  return `${d} ${months[m - 1]} ${y}`;
}
