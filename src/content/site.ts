/**
 * ═══════════════════════════════════════════════════════════════
 *  FICHIER PRINCIPAL — Modifiez ici les infos de l'entreprise
 * ═══════════════════════════════════════════════════════════════
 */

export const site = {
  name: "Matopio Paysage",
  tagline: "Entretien et Création de jardins",
  description:
    "Paysagiste professionnel en France. Tonte, taille de haies, élagage, engazonnement, plantation, débroussaillage et création paysagère. Devis gratuit sous 48h.",
  url: "https://www.matopio-paysage.fr", // À remplacer par votre domaine

  contact: {
    phone: "+33621722650",
    phoneDisplay: "06 21 72 26 50",
    email: "matopio.paysage@gmail.com",
    address: "2 allée entre 2 bois",
    city: "69380 Lissieu",
    zone: "Lissieu et 20 km autour",
    /** Centre de la zone d'intervention (lat, lng) — Lissieu */
    mapCenter: [45.8136, 4.7406] as const,
    zoneRadiusKm: 20,
    /** Lien « Voir sur Google Maps » — remplacez par le lien « Partager » de votre fiche Google Business si vous l’avez */
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Matopio+Paysage+69380+Lissieu",
    openingHours: "Lun – Ven : 8h – 18h",
  },

  /** Formspree : créez un formulaire sur https://formspree.io et collez l'ID ici */
  formspreeId: "mjgzwvvo",

  social: {
    instagram: "https://instagram.com/matopio.paysage",
  },

  legal: {
    siret: "910 070 473 00053",
    rcs: "Lyon",
    director: "Jean Dupont",
  },

  /** Images — placez vos fichiers dans public/assets/images/ */
  images: {
    logo: "/assets/images/logo.png",
    hero: "/assets/images/accueil-hero.png",
    realisations: "/assets/images/projects/haies-apres.jpg",
    about: "/assets/images/about.jpg",
    og: "/assets/images/accueil-hero.png",
  },

  seo: {
    keywords: [
      "paysagiste",
      "paysagiste Lyon",
      "entretien jardin",
      "engazonnement",
      "taille haies",
      "aménagement extérieur",
      "création paysagère",
    ],
    locale: "fr_FR",
  },
} as const;

/** Liens affichés dans la barre du haut */
export const headerNavigation = [
  { label: "Prestations", href: "/prestations" },
  { label: "Réalisations", href: "/realisations" },
  { label: "Avis", href: "/avis" },
] as const;

export const navigation = [
  { label: "Accueil", href: "/" },
  ...headerNavigation,
  { label: "Contact", href: "/contact" },
] as const;

export const homeSections = {
  prestations: {
    title: "Nos prestations",
    subtitle: "Des solutions sur mesure pour sublimer chaque extérieur",
  },
  realisations: {
    title: "Nos réalisations",
    subtitle: "Avant / après : la preuve par l'image",
    cta: "Voir toutes les réalisations",
  },
  avis: {
    title: "Ils nous font confiance",
    subtitle: "Avis clients vérifiés",
    cta: "Lire tous les avis",
  },
  cta: {
    title: "Un projet de jardin ?",
    text: "Parlons-en. Devis gratuit et personnalisé sous 48 heures.",
    button: "Demander un devis",
  },
} as const;
