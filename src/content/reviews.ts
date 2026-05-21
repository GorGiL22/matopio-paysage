/**
 * ═══════════════════════════════════════════════════════════════
 *  AVIS GOOGLE — Modifiez ici en attendant l'API Google Reviews
 *
 *  Pour connecter l'API plus tard :
 *  1. Créez un projet Google Cloud + activez Places API
 *  2. Récupérez votre Place ID Google Business
 *  3. Remplacez useMockData par false dans reviewsConfig
 *  4. Implémentez fetch dans src/lib/google-reviews.ts
 * ═══════════════════════════════════════════════════════════════
 */

export const reviewsConfig = {
  useMockData: true,
  googlePlaceId: "ChIJxxxxxxxxxxxxxxxx",
  refreshIntervalHours: 24,
} as const;

export type Review = {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  avatarInitials: string;
};

export const googleReviewsSummary = {
  averageRating: 5,
  totalReviews: 13,
  source: "Google",
} as const;

export const reviews: Review[] = [
  {
    id: "1",
    author: "Stéphanie Ville",
    rating: 5,
    date: "Avis Google",
    text: "Très professionnel et très sympathique, ce jeune homme est aussi à l'écoute du client avec le sourire. Je recommande vivement !!! En tout cas, me concernant, c'était la première fois que je faisais appel à ses services et je le ferai de nouveau.",
    avatarInitials: "SV",
  },
  {
    id: "2",
    author: "Axelle",
    rating: 5,
    date: "Avis Google",
    text: "Ce jeune homme est très professionnel, je suis ravie de ses prestations je le recommande les yeux fermés. Très à l'écoute de son client, je suis ravie. Encore merci pour votre travail. À bientôt",
    avatarInitials: "AX",
  },
  {
    id: "3",
    author: "Marion Goudeau",
    rating: 5,
    date: "Avis Google",
    text: "Un travail parfait, le soin du détail ! Merci pour sa gentillesse et son professionnalisme ! Je recommande fortement",
    avatarInitials: "MG",
  },
  {
    id: "4",
    author: "Eléonore Paponaud",
    rating: 5,
    date: "Avis Google",
    text: "Très satisfaite de la prestation de l'entreprise Matopio, ponctuel, efficace, nous a laissé un jardin nickel. Je recommande 👍🏼",
    avatarInitials: "EP",
  },
  {
    id: "5",
    author: "Manon Vigneux",
    rating: 5,
    date: "Avis Google",
    text: "Très compétent et professionnel ! Je n'ai confiance qu'en lui pour l'entretien de mon jardin. Je recommande à 100% !",
    avatarInitials: "MV",
  },
  {
    id: "6",
    author: "Georges Magnard",
    rating: 5,
    date: "Avis Google",
    text: "Ravi de l'excellent travail dans mon jardin depuis que j'ai choisi Matopio Paysage qui travaille courageusement quel que soit le temps. À recommander",
    avatarInitials: "GM",
  },
  {
    id: "7",
    author: "Philippe Magnard",
    rating: 5,
    date: "Avis Google",
    text: "De nombreux travaux successifs réalisés avec sérieux, rapidité et professionnalisme. Grande confiance dans l'équipe Matopio Paysage",
    avatarInitials: "PM",
  },
  {
    id: "8",
    author: "Catherine Fourier",
    rating: 5,
    date: "Avis Google",
    text: "Je suis vraiment contente du résultat, la taille des haies parfaitement réalisées, travail sérieux... mon jardin est nickel... je recommande vivement",
    avatarInitials: "CF",
  },
  {
    id: "9",
    author: "JL Coach",
    rating: 5,
    date: "Avis Google",
    text: "Le goût du travail bien fait et la disponibilité sont des qualités que l'on a retrouvé chez Matopio Paysage. Je recommande vivement",
    avatarInitials: "JL",
  },
  {
    id: "10",
    author: "Lison M.",
    rating: 5,
    date: "Avis Google",
    text: "Très bonne expérience avec Mathis, dispo, pro, sympa et à l'écoute 👍",
    avatarInitials: "LM",
  },
  {
    id: "11",
    author: "Véronique Noel",
    rating: 5,
    date: "Avis Google",
    text: "Très contente du travail effectué. Pour mes prochains travaux de jardinage je lui demanderais de revenir.",
    avatarInitials: "VN",
  },
  {
    id: "12",
    author: "Eric Flory",
    rating: 5,
    date: "Avis Google",
    text: "Travail sérieux de la part de Mathis. Intervention rapide avec un chantier très bien géré et très propre",
    avatarInitials: "EF",
  },
  {
    id: "13",
    author: "Natalia Pays",
    rating: 5,
    date: "Avis Google",
    text: "Sérieux et efficace je recommande !",
    avatarInitials: "NP",
  },
];
