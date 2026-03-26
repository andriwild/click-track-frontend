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
    betaBadge: 'Bêta',
    betaTitle: 'Rejoins la bêta',
    betaDescription:
      "L'app Klikkr est en bêta pour Android & iOS. Inscris-toi et on t'invite.",
    betaPlaceholder: 'Ton adresse e-mail',
    betaButton: "S'inscrire",
    betaSuccess: 'Merci ! On te recontacte bientôt.',
    betaError: "Quelque chose s'est mal passé. Réessaie.",
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
        title: 'Appairage QR rapide',
        description:
          "Oubliez les réglages Bluetooth. Scannez le code-barres du bracelet et c'est parti.",
      },
      {
        title: 'Détection de connexion',
        description:
          "Si un beacon perd la connexion, tu es prévenu immédiatement — aucun point n'est perdu.",
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
          "Installe l'app gratuite Klikkr — disponible pour Android & iOS (Bêta).",
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
          'Maintiens le bouton 3 secondes pour allumer (6 sec pour éteindre). Scanne le QR code ou sélectionne ton appareil dans la liste Bluetooth.',
      },
      {
        title: 'Beacons connectés',
        description:
          "Tes bracelets sont connectés et prêts. Tu peux voir tous les appareils connectés en un coup d'oeil.",
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
    images: [
      '/smartphone/1.png',
      '/wristband_click.png',
      '/smartphone/2.png',
      '/smartphone/3.png',
      '/smartphone/4.png',
      '/smartphone/5.png',
    ],
  },

  appCustomization: {
    badge: 'Personnalisable',
    title: 'Ton jeu, ton',
    titleAccent: 'style',
    items: [
      {
        title: 'Plusieurs sets de sons',
        description:
          'Choisis parmi différents sets de sons pour les points et le match ball — ou désactive les sons.',
      },
      {
        title: 'Couleurs personnalisées',
        description:
          'Personnalise les couleurs des joueurs — choisis parmi des modèles ou définis tes propres couleurs.',
      },
      {
        title: 'Thème clair & sombre',
        description:
          "Bascule entre le mode clair et sombre — selon les conditions d'éclairage et tes préférences.",
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
    emptyTitle: 'Personne ne nous a jamais rien demandé.',
    emptyDescription:
      "Soit Klikkr est tellement intuitif qu'aucune question n'est nécessaire — soit tout le monde est trop occupé à jouer. On parie sur la deuxième option. On a quand même préparé quelques réponses, au cas où.",
    contactCta: "D'autres questions ? Écrivez-nous à",
    contactTitle: "Ta question n'était pas là ?",
    contactDescription: 'Écris-nous directement — on ne mord pas (en général).',
    contactEmail: 'Ton adresse e-mail',
    contactMessage: 'Que voudrais-tu savoir ?',
    contactButton: 'Envoyer',
    contactSuccess: "Ton client mail s'ouvre — il suffit d'envoyer !",
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
          "L'app Klikkr est disponible pour Android & iOS en bêta. Inscris-toi sur notre site et on t'invite à la bêta.",
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

  gameModes: {
    badge: 'Modes de jeu',
    title: 'Comment veux-tu',
    titleAccent: 'jouer ?',
    description:
      "Avec ou sans beacon, en solo ou en tournoi — l'app Klikkr s'adapte à ton setup.",
    modes: {
      swipe: {
        label: 'Swipe',
        description: 'Score manuellement sur ton téléphone — sans beacon.',
        steps: [
          {
            title: "Ouvrir l'app",
            description:
              "Lance l'app sans beacon connecté. Ton smartphone suffit.",
          },
          {
            title: 'Choisis ton sport',
            description:
              'Sélectionne ton sport — Tennis, Squash, Padel ou Football sont disponibles.',
          },
          {
            title: 'Configure les règles',
            description:
              'Définis le score cible, "Win by 2" et la rotation de service — entièrement personnalisable.',
          },
          {
            title: 'Swipe & Score',
            description:
              'Swipe vers le haut ou le bas sur le chiffre pour changer le score. Swipe vers le bas pour changer le service.',
          },
        ],
        images: [
          '/smartphone/1.png',
          '/smartphone/3.png',
          '/smartphone/semantic/dark_sport_screen_favorites.png',
          '/smartphone/semantic/dark_score_portrait.png',
        ],
      },
      oneBeacon: {
        label: '1 Beacon',
        description: 'Un bracelet pour les deux joueurs — simple et rapide.',
        steps: [
          {
            title: 'Connecter le beacon',
            description:
              'Allume ton bracelet (maintiens 3 sec) et connecte-le via QR code ou Bluetooth. Un seul beacon suffit.',
          },
          {
            title: 'Choisis ton sport',
            description:
              "Sélectionne ton sport — l'app détecte automatiquement le mode 1 beacon.",
          },
          {
            title: 'Configure les règles',
            description:
              'Paramètre le score cible, "Win by 2" et d\'autres réglages spécifiques au sport.',
          },
          {
            title: 'Clic & Score',
            description:
              '1 clic = point pour Joueur 1. 2 clics = point pour Joueur 2. Swipe vers le bas pour changer le service.',
          },
        ],
        images: [
          '/smartphone/semantic/dark_connect_1_beacon_connected.png',
          '/smartphone/3.png',
          '/smartphone/semantic/dark_sport_settings_1_beacon.png',
          '/smartphone/semantic/dark_score_portrait.png',
        ],
      },
      twoBeacons: {
        label: '2 Beacons',
        description: 'Chaque joueur a son propre bracelet.',
        steps: [
          {
            title: 'Connecter les deux beacons',
            description:
              'Allume les deux bracelets (maintiens 3 sec) et connecte-les via QR code ou Bluetooth.',
          },
          {
            title: 'Choisis ton sport',
            description:
              "Sélectionne ton sport — l'app détecte le mode 2 beacons et assigne chaque beacon à un joueur.",
          },
          {
            title: 'Configure les règles',
            description:
              "Paramètre les réglages spécifiques au sport comme d'habitude.",
          },
          {
            title: 'Clic & Score',
            description:
              '1 clic = score +1. 2 clics = score -1. Double-clic pour changer le service.',
          },
        ],
        images: [
          '/smartphone/semantic/dark_connect_screen_2_beacons_connected.png',
          '/smartphone/semantic/dark_sport_screen_favorites.png',
          '/smartphone/semantic/dark_sport_settings_1_beacon.png',
          '/smartphone/semantic/dark_score_portrait.png',
        ],
      },
      tournament: {
        label: 'Tournoi',
        description: '3+ beacons — plusieurs joueurs, classement automatique.',
        steps: [
          {
            title: 'Connecter 3+ beacons',
            description:
              "Connecte 3 bracelets ou plus — l'app passe automatiquement en mode tournoi.",
          },
          {
            title: 'Choisis ton sport',
            description: 'Sélectionne ton sport parmi les options disponibles.',
          },
          {
            title: 'Configure les règles',
            description: 'Paramètre les réglages spécifiques au tournoi.',
          },
          {
            title: 'Sélectionner les joueurs',
            description:
              "Active ou désactive les joueurs d'un clic. Choisis qui joue contre qui avant chaque match.",
          },
          {
            title: 'Jouer le match',
            description:
              'Double-clic pour lancer. 1 clic = score +1, 2 clics = score -1.',
          },
          {
            title: 'Résultats du tournoi',
            description:
              'Après chaque match, le classement général se met à jour : qui a battu qui ?',
          },
        ],
        images: [
          '/smartphone/semantic/dark_connect_screen_4_beacons_connected.png',
          '/smartphone/semantic/dark_sport_screen_favorites.png',
          '/smartphone/semantic/dark_sport_settings_1_beacon.png',
          '/smartphone/semantic/dark_tournament_player_selection.png',
          '/smartphone/semantic/dark_score_portrait.png',
          '/smartphone/semantic/dark_tounament_result.png',
        ],
      },
    },
    prev: 'Précédent',
    next: 'Suivant',
  },

  langSwitcher: {
    de: 'DE',
    en: 'EN',
    fr: 'FR',
    it: 'IT',
  },
}
