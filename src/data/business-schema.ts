/**
 * Fuente única de verdad para el schema LocalBusiness de Aventura en el Sella.
 *
 * Usar `localBusinessSchema(baseUrl)` en cualquier página que quiera incluir
 * la entidad de negocio canónica dentro de su `@graph`. El `@id` es global
 * (`${baseUrl}/#business`) — Google interpreta TODAS las páginas como una
 * misma entidad de negocio, lo que es la señal local-SEO más fuerte que
 * podemos enviar.
 *
 * Datos validados con la usuaria 2026-04-23 + Google Business 2026-05-11.
 * Coords exactas y FID extraídos de la ficha real (NO derivados manualmente).
 */

export const BUSINESS = {
  name: 'Aventura en el Sella',
  alternateName: 'El Descenso del Sella Asturias · Aventura en el Sella · Alquiler de Canoas',
  telephone: '+34681093673',
  email: 'info@aventuraenelsella.es',
  street: 'Calle Juan Carlos I, 18, BAJO II (acceso por Aipol)',
  locality: 'Arriondas',
  region: 'Asturias',
  postal: '33540',
  country: 'ES',
  latitude: 43.3874223,
  longitude: -5.1866022,
  googleMaps: 'https://www.google.com/maps/place/Aventura+en+el+Sella/@43.3874223,-5.1866022,17z/data=!4m6!3m5!1s0xd36195b04532889:0x9b2face87069ecfc!16s%2Fg%2F11s4chj1vp',
  googleBusiness: 'https://share.google/huLLaIz31FiYohuTV',
  tripAdvisor: 'https://www.tripadvisor.es/Attraction_Review-g608995-d12635919-Reviews-Aventura_en_el_Sella-Arriondas_Parres_Municipality_Asturias.html',
  rating: { value: '4.5', count: '147', best: '5', worst: '1' },
  hours: { opens: '09:00', closes: '20:00' },
} as const;

/**
 * Devuelve el bloque `LocalBusiness` canónico listo para spread en `@graph`.
 * El `@id` es global — NO usar uno por página.
 *
 * Si se pasa `lang`, las descripciones se traducen (description, alternateName,
 * inLanguage, areaServed). El resto de campos (geo, address, etc.) son neutros.
 */
export function localBusinessSchema(baseUrl: string, lang: 'es' | 'en' | 'fr' | 'pt' = 'es') {
  const description = {
    es: 'Descenso del Sella en canoa todo incluido desde Arriondas, Asturias. Canoa, picnic asturiano, transfer, parking y vestuarios. Desde 30€. Mascotas gratis.',
    en: 'All-inclusive Sella river canoe descent from Arriondas, Asturias. Canoe, Asturian picnic, return transfer, parking and changing rooms. From €30. Pets free.',
    fr: 'Descente du Sella en canoë tout inclus depuis Arriondas, Asturies. Canoë, pique-nique asturien, transfert retour, parking et vestiaires. Dès 30€. Animaux gratuits.',
    pt: 'Descida do Sella em canoa tudo incluído desde Arriondas, Astúrias. Canoa, piquenique asturiano, transfer, estacionamento e balneários. Desde 30€. Animais grátis.',
  }[lang];
  const inLanguage = { es: 'es-ES', en: 'en-GB', fr: 'fr-FR', pt: 'pt-PT' }[lang];
  return {
    '@type': 'LocalBusiness',
    additionalType: ['https://schema.org/TouristAttraction', 'https://schema.org/SportsActivityLocation'],
    '@id': `${baseUrl}/#business`,
    name: BUSINESS.name,
    alternateName: BUSINESS.alternateName,
    description,
    inLanguage,
    url: baseUrl,
    telephone: BUSINESS.telephone,
    email: BUSINESS.email,
    image: `${baseUrl}/images/logo/logo-schema.png`,
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.street,
      addressLocality: BUSINESS.locality,
      addressRegion: BUSINESS.region,
      postalCode: BUSINESS.postal,
      addressCountry: BUSINESS.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS.latitude,
      longitude: BUSINESS.longitude,
    },
    hasMap: BUSINESS.googleMaps,
    openingHoursSpecification: [{
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: BUSINESS.hours.opens,
      closes: BUSINESS.hours.closes,
    }],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: BUSINESS.rating.value,
      reviewCount: BUSINESS.rating.count,
      bestRating: BUSINESS.rating.best,
      worstRating: BUSINESS.rating.worst,
    },
    sameAs: [
      BUSINESS.googleMaps,
      BUSINESS.googleBusiness,
      BUSINESS.tripAdvisor,
    ],
  };
}
