import type { Translations } from './index'

export const fr: Translations = {
  nav: {
    home: 'Accueil',
    howItWorks: 'Comment ça marche',
    reviews: 'Avis',
    faq: 'FAQ',
    orderNow: 'Commander',
  },

  hero: {
    badge: 'Disponible en précommande',
    titleLine1: 'Comptez chaque',
    titleAccent1: 'Point.',
    titleLine2: 'Dominez le',
    titleAccent2: 'Jeu.',
    slogan: 'Focus on your Game!',
    description:
      "Le traqueur de score Bluetooth portable ultime pour le Padel, le Tennis et le Squash. Gardez les yeux sur la balle, comptez les points d'un simple clic et laissez l'app faire le reste.",
    ctaPrimary: 'Commander maintenant',
    ctaSecondary: 'En savoir plus',
    sportSquash: 'Squash',
    sportPadel: 'Padel',
    sportTennis: 'Tennis',
    productAlt: 'Concept Bracelet Klikkr',
    symbolImage: '* Image symbolique',
  },

  features: {
    badge: 'Conçu pour les athlètes',
    title: 'Conçu pour votre',
    titleAccent: 'Sport',
    description:
      "Klikkr est invisible quand vous n'en avez pas besoin, et parfaitement fiable quand il le faut. Résistant à l'eau, à la transpiration et aux chocs.",
    items: [
      {
        title: 'Squash',
        description:
          'Gardez le fil de chaque échange intense. Un clic et vous êtes prêt pour le prochain service.',
      },
      {
        title: 'Padel',
        description:
          "Ne perdez plus le compte pendant les longs duels. Concentrez-vous sur votre smash, on s'occupe du score.",
      },
      {
        title: 'Football',
        description:
          'Parfait pour les arbitres ou les matchs entre amis. Gardez le score sans effort.',
      },
    ],
  },

  appFeatures: {
    badge: 'Application compagnon',
    title: "L'application compagnon ultime.",
    description:
      "L'application gratuite Klikkr transforme vos bracelets Bluetooth en un tableau de score intelligent et puissant. Parfaitement conçue pour les sports de raquette rapides.",
    storeBadgeLabel: 'Bientôt disponible pour Android',
    storeName: 'Google Play',
    appPreviewAlt: "Aperçu de l'interface Klikkr",
    items: [
      {
        title: 'Comptage intelligent',
        description:
          'Détection automatique de victoire et règles optionnelles "Win by Two" pour une tranquillité totale.',
      },
      {
        title: 'Connectivité fluide',
        description:
          'Appairage BLE instantané, scanner QR et support single-beacon pour un seul appareil.',
      },
      {
        title: 'Affichages flexibles',
        description:
          'Modes Tableau/Miroir, Portrait et Paysage. Parfaitement lisible sous tous les angles.',
      },
      {
        title: 'Contrôle intuitif',
        description:
          'Gestes de swipe plein écran pour marquer directement sur votre écran.',
      },
      {
        title: 'Retour audio',
        description:
          'Sons distinctifs pour chaque point marqué et notification unique de balle de match.',
      },
      {
        title: 'Appairage QR rapide',
        description:
          "Oubliez les réglages Bluetooth. Scannez le code-barres du bracelet et c'est parti.",
      },
    ],
  },

  checkout: {
    title: 'Prêt à',
    titleAccent: 'dominer',
    titleEnd: ' le jeu ?',
    description:
      'Choisissez votre équipement et la quantité — un bracelet ou un set complet pour votre équipe.',
    featuresList: [
      'Comptage de points en un clic',
      "Résistant à l'eau et à la transpiration",
      'Boîtier en silicone antichoc',
      "2 ans d'autonomie",
    ],
    securePayment: 'Paiement sécurisé via Stripe. Entièrement chiffré.',
  },

  howItWorks: {
    badge: 'Simple & Intuitif',
    title: 'Comment ça',
    titleAccent: 'marche',
    description:
      'Du déballage au point de match en moins de 2 minutes. Voici tout ce que vous devez savoir.',
    steps: [
      {
        title: 'Déballage',
        description:
          "Ouvrez votre paquet Klikkr – bracelets chargés et prêts à l'emploi.",
      },
      {
        title: "Télécharger l'app",
        description:
          "Installez l'application gratuite Klikkr depuis le Google Play Store sur votre appareil Android.",
      },
      {
        title: 'Scanner & Connecter',
        description:
          'Scannez le QR code sur votre bracelet pour coupler via Bluetooth instantanément – aucun paramétrage manuel.',
      },
      {
        title: 'Lancer un match',
        description:
          "Choisissez votre sport, entrez les noms des joueurs, configurez les règles et c'est parti.",
      },
      {
        title: 'Compter les points',
        description:
          "Un clic sur le bracelet = un point. L'app gère automatiquement les sets, jeux et règles.",
      },
      {
        title: 'Voir le résultat',
        description:
          'Détection automatique du gagnant, alertes de balle de match et affichage clair du résultat.',
      },
    ],
    ctaLine1: "C'est tout. Simple comme",
    ctaAccent: 'clic, clic, gagné.',
    ctaLine2: 'Prêt à passer au niveau supérieur ?',
  },

  appWalkthrough: {
    badge: "Guide de l'app",
    title: "L'App",
    titleAccent: 'étape par étape',
    description:
      "Comment utiliser l'app Klikkr — du premier lancement au point de match.",
    steps: [
      {
        title: "Lancer l'app",
        description:
          "Ouvrez l'app Klikkr. L'écran d'accueil s'affiche immédiatement avec toutes les options.",
      },
      {
        title: 'Connecter le bracelet',
        description:
          'Scannez le code QR sur le bracelet ou sélectionnez votre appareil dans la liste Bluetooth. Connecté en quelques secondes.',
      },
      {
        title: 'Choisir le sport',
        description:
          'Sélectionnez votre sport et configurez les règles du jeu. Padel, Tennis ou Squash — tout est prêt.',
      },
      {
        title: 'Paramètres de jeu',
        description:
          "Définissez les noms des joueurs, le nombre de sets et d'autres règles — entièrement personnalisable avant le début du match.",
      },
      {
        title: 'Compter les points',
        description:
          "Un clic sur le bracelet marque un point. L'app gère les sets, les jeux et affiche le score en direct.",
      },
    ],
  },

  phoneHolder: {
    badge: 'Nouvel accessoire',
    title: 'Le Support',
    titleAccent: 'Smartphone',
    description:
      'Fixez votre smartphone directement sur la vitre du court de squash — vue parfaite du score en direct pendant le jeu.',
    hint: 'Glissez pour tourner, scrollez pour zoomer',
  },

  reviews: {
    badge: 'Ce que disent les joueurs',
    title: 'Avis des',
    titleAccent: 'joueurs',
    description:
      'Découvrez ce que les athlètes qui utilisent déjà Klikkr dans leurs matchs quotidiens en pensent.',
    reviewsCount: 'Avis',
    bottomCta:
      "Rejoignez la communauté de joueurs satisfaits – obtenez votre Klikkr aujourd'hui.",
    happyPlayers: 'joueurs satisfaits',
    items: [
      {
        name: 'Marco S.',
        sport: 'Padel',
        rating: 5,
        text: "Enfin je n'ai plus besoin de compter dans ma tête ! Un clic et le point est enregistré. Génial.",
        date: '12 fév. 2026',
      },
      {
        name: 'Laura B.',
        sport: 'Squash',
        rating: 5,
        text: "Les bracelets sont super confortables et ne gênent pas du tout pendant le jeu. L'app détecte même automatiquement qui a gagné.",
        date: '28 janv. 2026',
      },
      {
        name: 'Nico W.',
        sport: 'Tennis',
        rating: 4,
        text: "Parfait pour nos matchs hebdomadaires. Plus de disputes sur le score ! L'appairage QR marche instantanément.",
        date: '15 janv. 2026',
      },
      {
        name: 'Sarah M.',
        sport: 'Padel',
        rating: 5,
        text: "J'ai reçu Klikkr en cadeau – le meilleur cadeau jamais. Les effets sonores à chaque point sont trop cool.",
        date: '3 mars 2026',
      },
      {
        name: 'David K.',
        sport: 'Squash',
        rating: 5,
        text: "Robuste, étanche et la batterie dure une éternité. Après 3 mois d'utilisation intensive, toujours comme neuf.",
        date: '20 fév. 2026',
      },
      {
        name: 'Anna R.',
        sport: 'Tennis',
        rating: 4,
        text: "Super concept ! On l'utilise au club et tout le monde adore. Les différents modes d'affichage sont géniaux.",
        date: '8 fév. 2026',
      },
    ],
  },

  faq: {
    badge: 'Des questions ?',
    title: 'Questions',
    titleAccent: 'fréquentes',
    description:
      "Tout ce que vous devez savoir sur Klikkr – de l'installation au jeu.",
    contactCta: "D'autres questions ? Écrivez-nous à",
    items: [
      {
        question: 'Que comprend Klikkr ?',
        answer:
          "Chaque bracelet Klikkr est livré entièrement chargé. Il suffit de déballer, télécharger l'app et commencer à jouer. Commandez autant de bracelets que nécessaire.",
      },
      {
        question: 'Quels sports sont supportés ?',
        answer:
          "Klikkr supporte actuellement le Padel, le Tennis, le Squash et le Football. D'autres sports sont prévus et seront ajoutés via les mises à jour de l'app.",
      },
      {
        question: "Quelle est l'autonomie de la batterie ?",
        answer:
          "La batterie dure jusqu'à 2 ans en utilisation normale. C'est une pile bouton facilement remplaçable.",
      },
      {
        question: 'Le bracelet est-il étanche ?',
        answer:
          "Oui ! Klikkr est résistant à l'eau et à la transpiration, et supporte même les matchs les plus intenses. Il est fabriqué en silicone robuste et antichoc.",
      },
      {
        question: "Comment connecter le bracelet à l'app ?",
        answer:
          "Scannez simplement le QR code du bracelet avec l'app Klikkr – la connexion Bluetooth est établie automatiquement. Aucun appairage manuel nécessaire.",
      },
      {
        question: 'Ai-je besoin des deux bracelets pour jouer ?',
        answer:
          "Non, vous pouvez jouer avec un seul bracelet. L'app supporte le mode single-beacon. Avec deux bracelets, les deux joueurs peuvent compter leurs propres points.",
      },
      {
        question: "Sur quels appareils l'app est-elle disponible ?",
        answer:
          "L'app Klikkr est actuellement disponible pour Android et peut être téléchargée gratuitement depuis le Google Play Store. Une version iOS est prévue.",
      },
      {
        question: 'Puis-je personnaliser les règles du jeu ?',
        answer:
          'Oui ! Vous pouvez activer "Win by Two", définir le nombre de points par set et choisir différents modes d\'affichage (Tableau, Portrait, Paysage).',
      },
      {
        question: 'Comment fonctionnent les retours ?',
        answer:
          "Vous disposez d'un droit de rétractation de 14 jours. Si vous n'êtes pas satisfait, contactez-nous par email à support@klikkr.ch et nous nous occuperons de tout.",
      },
      {
        question: 'Y a-t-il une garantie ?',
        answer:
          "Oui, Klikkr est livré avec une garantie fabricant d'1 an. En cas de défauts ou de problèmes, contactez notre équipe support.",
      },
    ],
  },

  cart: {
    title: 'Panier',
    empty: 'Votre panier est vide.',
    checkout: 'Passer à la caisse',
    remove: 'Supprimer',
    total: 'Total',
    addedToCart: 'Ajouté',
    continueShopping: 'Continuer les achats',
    close: 'Fermer',
  },

  products: {
    wristband: {
      name: 'Wearable Score Clicker',
      description: 'Compteur de score Bluetooth pour le poignet.',
    },
    'holder-squash': {
      name: 'Glass Mount (Squash)',
      description:
        'Se fixe sur la vitre du court de squash pour une vue parfaite du score.',
    },
    perUnit: '/ pièce',
    cta: 'Ajouter au panier',
    categories: {
      wristband: 'Bracelets',
      holder: 'Supports',
      accessory: 'Accessoires',
    },
  },

  footer: {
    allRightsReserved: 'Tous droits réservés.',
    designBy: 'Design & Code par',
    agb: 'CGV',
    privacy: 'Confidentialité',
    refunds: 'Rétractation',
    imprint: 'Mentions légales',
  },

  wip: {
    title: 'En cours de développement',
    message:
      "Cette page est en cours de mise à jour et sera bientôt disponible. Restez à l'écoute !",
    backHome: "Retour à l'accueil",
  },

  langSwitcher: {
    de: 'DE',
    en: 'EN',
    fr: 'FR',
    it: 'IT',
  },
}
