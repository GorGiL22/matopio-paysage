/**
 * ═══════════════════════════════════════════════════════════════
 *  PRESTATIONS — Ajoutez ou modifiez une carte ici
 *  Icônes : https://lucide.dev/icons/
 * ═══════════════════════════════════════════════════════════════
 */

export type ServiceIcon =
  | "sprout"
  | "scissors"
  | "layout"
  | "leaf"
  | "trees"
  | "axe"
  | "treeDeciduous";

export type Service = {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: ServiceIcon;
  image: string;
};

export const services: Service[] = [
  {
    id: "taille-haies-arbustes",
    title: "Taille de haies et d'arbustes",
    shortDescription: "Formes nettes, volumes maîtrisés, végétaux en pleine santé.",
    description:
      "Taille de formation et d'entretien pour haies et arbustes. Respect des périodes de végétation et finitions soignées pour un rendu impeccable toute l'année.",
    icon: "scissors",
    image: "/assets/images/prestations/haies-prestation.jpg",
  },
  {
    id: "tonte",
    title: "Tonte",
    shortDescription: "Pelouses entretenues régulièrement, finitions propres.",
    description:
      "Tonte de pelouses et espaces gazonnés avec un rendu régulier et soigné. Adapté aux particuliers, résidences et professionnels.",
    icon: "leaf",
    image: "/assets/images/prestations/tonte-prestation.jpg",
  },
  {
    id: "debroussaillage",
    title: "Débroussaillages",
    shortDescription: "Mise en conformité et sécurisation de terrains.",
    description:
      "Débroussaillage mécanique ou manuel, évacuation des déchets verts. Intervention pour prévenir les risques incendie et redonner de la clarté à votre terrain.",
    icon: "axe",
    image: "/assets/images/prestations/debroussaillage-prestation.jpg",
  },
  {
    id: "elagage-demontage",
    title: "Élagage & démontage d'arbres",
    shortDescription: "Taille, sécurisation et abattage en toute sécurité.",
    description:
      "Élagage, taille sanitaire et démontage d'arbres par des professionnels équipés. Intervention sécurisée selon la hauteur et l'environnement.",
    icon: "treeDeciduous",
    image: "/assets/images/prestations/elagage.jpg",
  },
  {
    id: "engazonnement",
    title: "Engazonnement",
    shortDescription: "Gazon naturel ou synthétique, semis ou plaquettes.",
    description:
      "Préparation du sol, nivellement, semis ou pose de gazon en rouleau. Nous choisissons ensemble la solution adaptée à votre terrain, votre budget et votre usage.",
    icon: "sprout",
    image: "/assets/images/prestations/engazonnement-prestation.jpg",
  },
  {
    id: "creation",
    title: "Création paysagère",
    shortDescription: "Terrasses bois, aménagements et jardins sur mesure.",
    description:
      "Conception et réalisation d'espaces extérieurs : terrasses bois, plantations et aménagements paysagers adaptés à votre terrain.",
    icon: "trees",
    image: "/assets/images/prestations/creation-prestation.jpg",
  },
];
