/**
 * ═══════════════════════════════════════════════════════════════
 *  RÉALISATIONS — Dupliquez un objet pour ajouter un projet
 *  Images : public/assets/images/projects/
 * ═══════════════════════════════════════════════════════════════
 */

export type Project = {
  id: string;
  title: string;
  location: string;
  category: string;
  description: string;
  before: string;
  after: string;
};

export const projects: Project[] = [
  {
    id: "plantation-arrosage",
    title: "Démontage & nouvelle plantation",
    location: "Lissieu",
    category: "Création paysagère",
    description:
      "Démontage de l'ancienne haie, préparation du sol et nouvelle plantation avec système d'arrosage automatique.",
    before: "/assets/images/projects/plantation-avant.jpg",
    after: "/assets/images/projects/plantation-apres.jpg",
  },
  {
    id: "debroussaillage-jardin",
    title: "Débroussaillage de jardin",
    location: "Lissieu",
    category: "Débroussaillages",
    description:
      "Suppression de lierre envahissant et remise à niveau du terrain. Jardin dégagé et sécurisé.",
    before: "/assets/images/projects/debroussaillage-avant.jpg",
    after: "/assets/images/projects/debroussaillage-apres.jpg",
  },
  {
    id: "taille-haie",
    title: "Taille de haie",
    location: "Lissieu",
    category: "Taille de haies et d'arbustes",
    description:
      "Remise en forme d'une haie de cyprès : coupe des repousses, lignes droites et finitions soignées.",
    before: "/assets/images/projects/haies-avant.jpg",
    after: "/assets/images/projects/haies-apres.jpg",
  },
  {
    id: "potager",
    title: "Création d'un potager",
    location: "Lissieu",
    category: "Création paysagère",
    description:
      "Préparation du sol, paillage et mise en place des plants. Transformation d'une parcelle en friche en potager structuré et entretenu.",
    before: "/assets/images/projects/potager-avant.jpg",
    after: "/assets/images/projects/potager-apres.jpg",
  },
];
