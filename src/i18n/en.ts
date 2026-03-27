import type { Translations } from './index'

export const en: Translations = {
  nav: {
    home: 'Home',
    howItWorks: 'How It Works',
    reviews: 'Reviews',
    faq: 'FAQ',
    orderNow: 'Order Now',
  },

  hero: {
    badge: 'Now available for pre-order',
    titleLine1: 'Track Every',
    titleAccent1: 'Point.',
    titleLine2: 'Own the',
    titleAccent2: 'Game.',
    slogan: 'Focus on your Game!',
    description:
      'The ultimate wearable Bluetooth score tracker for Padel, Tennis, and Squash. Keep your eyes on the ball, track points with a single click, and let the app handle the rest.',
    ctaPrimary: 'Order Now',
    ctaSecondary: 'Learn more',
    sportSquash: 'Squash',
    sportPadel: 'Padel',
    sportTennis: 'Tennis',
    productAlt: 'Klikkr Wristband Concept',
    symbolImage: '* Concept image',
  },

  features: {
    badge: 'Engineered for Athletes',
    title: 'Built for Your',
    titleAccent: 'Sport',
    description:
      "Klikkr is designed to be invisible when you don't need it, and perfectly reliable when you do. Water resistant, sweat proof, and built to survive impacts.",
    items: [
      {
        title: 'Squash',
        description:
          "Keep track of every brutal rally. One click and you're ready for the next serve.",
      },
      {
        title: 'Padel',
        description:
          "Don't lose count during those long duels. Focus on your smash, we track the score.",
      },
      {
        title: 'Football',
        description:
          'Perfect for refs or casual matches. Keep the score straight without breaking a sweat.',
      },
    ],
  },

  appFeatures: {
    badge: 'Digital Companion App',
    title: 'The Ultimate Companion App.',
    description:
      'The free Klikkr app turns your Bluetooth wristbands into a powerful, intelligent smart scoreboard. Perfectly designed for fast-paced racket sports like Padel, Tennis, and Squash.',
    betaBadge: 'Beta',
    betaTitle: 'Join the Beta',
    betaDescription:
      "The Klikkr app is in beta for Android & iOS. Sign up and we'll invite you.",
    betaPlaceholder: 'Your email address',
    betaButton: 'Sign up',
    betaSuccess: "Thanks! We'll be in touch.",
    betaError: 'Something went wrong. Please try again.',
    appPreviewAlt: 'Klikkr App Preview Interface',
    items: [
      {
        title: 'Intelligent Scoring',
        description:
          'Auto win-detection and optional "Win by Two" rules for complete peace of mind.',
      },
      {
        title: 'Seamless Connectivity',
        description:
          'Instant BLE pairing, QR-code scanner, and single-beacon support for solo gadgets.',
      },
      {
        title: 'Flexible Displays',
        description:
          'Table/Mirrored, Portrait, and Landscape modes. Perfectly readable from any angle.',
      },
      {
        title: 'Intuitive Manual Control',
        description:
          'Easy full-screen swipe-to-score gestures directly on your device display.',
      },
      {
        title: 'Quick QR Pairing',
        description:
          'Skip the Bluetooth settings. Scan the barcode on the wristband and you are ready.',
      },
      {
        title: 'Connection Detection',
        description:
          'If a beacon loses connection, you get notified instantly — no point goes missing.',
      },
    ],
  },

  checkout: {
    title: 'Ready to',
    titleAccent: 'Dominate',
    titleEnd: ' The Game?',
    description:
      'Choose your gear and quantity — whether one wristband or a full set for your crew.',
    featuresList: [
      'One-click score tracking',
      'Water & sweat resistant',
      'Great feel — perfect for sports',
      'Ultra-lightweight on the wrist',
      '2-year battery life',
    ],
    securePayment: 'Secure payment processing by Stripe. Fully encrypted.',
  },

  howItWorks: {
    badge: 'Simple & Intuitive',
    title: 'How It',
    titleAccent: 'Works',
    description:
      "From unboxing to match point in under 2 minutes. Here's everything you need to know.",
    steps: [
      {
        title: 'Unboxing',
        description:
          'Open your Klikkr package – wristbands fully charged and ready to go.',
      },
      {
        title: 'Download the App',
        description:
          'Install the free Klikkr app — available for Android & iOS (Beta).',
      },
      {
        title: 'Scan & Connect',
        description:
          'Scan the QR code on your wristband to pair via Bluetooth instantly – no manual setup needed.',
      },
      {
        title: 'Start a Match',
        description:
          'Choose your sport, enter player names, configure rules, and kick off the game.',
      },
      {
        title: 'Track Points',
        description:
          'One click on the wristband = one point. The app handles sets, games, and rules automatically.',
      },
      {
        title: 'See the Result',
        description:
          'Automatic win detection, match-point alerts, and a clear winner display when the game ends.',
      },
    ],
    ctaLine1: "That's it. Simple as",
    ctaAccent: 'click, click, win.',
    ctaLine2: 'Ready to level up your game?',
  },

  appWalkthrough: {
    badge: 'App Guide',
    title: 'The App',
    titleAccent: 'Step by Step',
    description:
      'How to use the Klikkr Companion App — from first launch to match point.',
    steps: [
      {
        title: 'Launch the App',
        description:
          "Open the Klikkr app. You'll see the home screen with all options right away.",
      },
      {
        title: 'Connect Wristband',
        description:
          'Hold the button for 3 seconds to turn on (6 sec to turn off). Scan the QR code or pick your device from the Bluetooth list.',
      },
      {
        title: 'Beacons Connected',
        description:
          'Your wristbands are connected and ready. You can see all connected devices at a glance.',
      },
      {
        title: 'Choose Your Sport',
        description:
          'Select your sport and configure the game rules. Padel, Tennis or Squash — everything is ready.',
      },
      {
        title: 'Game Settings',
        description:
          'Set player names, number of sets and other rules — fully customisable before the match starts.',
      },
      {
        title: 'Track Points',
        description:
          'One click on the wristband scores a point. The app handles sets, games and shows the live score.',
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
    badge: 'Customizable',
    title: 'Your game, your',
    titleAccent: 'style',
    items: [
      {
        title: 'Multiple Sound Sets',
        description:
          'Choose from different sound sets for points and match ball — or turn sounds off entirely.',
      },
      {
        title: 'Custom Colors',
        description:
          'Customize player colors — pick from presets or set your own with the color picker.',
      },
      {
        title: 'Light & Dark Theme',
        description:
          'Switch between light and dark mode — depending on lighting conditions and preference.',
      },
    ],
  },

  phoneHolder: {
    badge: 'New Accessory',
    title: 'The Phone',
    titleAccent: 'Holder',
    description:
      'Mount your smartphone on the squash court glass — perfect view of the live score during the game.',
    hint: 'Drag to rotate, scroll to zoom',
  },

  reviews: {
    badge: 'What Players Say',
    title: 'Player',
    titleAccent: 'Reviews',
    description:
      'Hear from athletes who are already using Klikkr in their daily matches.',
    reviewsCount: 'Reviews',
    bottomCta: 'Join the community of happy players – get your Klikkr today.',
    happyPlayers: 'happy players',
    items: [
      {
        name: 'Marco S.',
        sport: 'Padel',
        rating: 5,
        text: "Finally I don't have to count in my head anymore! One click and the point is saved. Genius.",
        date: 'Feb 12, 2026',
      },
      {
        name: 'Laura B.',
        sport: 'Squash',
        rating: 5,
        text: "The wristbands are super comfortable and don't bother you at all during play. The app even detects automatically who won.",
        date: 'Jan 28, 2026',
      },
      {
        name: 'Nico W.',
        sport: 'Tennis',
        rating: 4,
        text: 'Perfect for our weekly matches. No more arguing about the score! QR pairing works instantly.',
        date: 'Jan 15, 2026',
      },
      {
        name: 'Sarah M.',
        sport: 'Padel',
        rating: 5,
        text: 'Got Klikkr as a gift – best present ever. The sound effects on every point are so much fun.',
        date: 'Mar 3, 2026',
      },
      {
        name: 'David K.',
        sport: 'Squash',
        rating: 5,
        text: 'Robust, waterproof, and the battery lasts forever. After 3 months of intense use, still like new.',
        date: 'Feb 20, 2026',
      },
      {
        name: 'Anna R.',
        sport: 'Tennis',
        rating: 4,
        text: 'Great concept! We use it at our club and everyone loves it. The different display modes are amazing.',
        date: 'Feb 8, 2026',
      },
    ],
  },

  faq: {
    badge: 'Got Questions?',
    title: 'Frequently Asked',
    titleAccent: 'Questions',
    description:
      'Everything you need to know about Klikkr – from setup to gameplay.',
    emptyTitle: 'Nobody has ever asked us anything.',
    emptyDescription:
      "Either Klikkr is so intuitive that no questions are needed — or everyone's too busy playing. We're betting on the latter. Still, we've prepared a few answers, just in case.",
    contactCta: 'Still have questions? Write to us at',
    contactTitle: "Didn't find your answer?",
    contactDescription: "Write to us directly — we don't bite (usually).",
    contactEmail: 'Your email address',
    contactMessage: 'What would you like to know?',
    contactButton: 'Send',
    contactSuccess: 'Your mail client is opening — just hit send!',
    items: [
      {
        question: "What's included with Klikkr?",
        answer:
          'Each Klikkr wristband comes fully charged. Just unbox, download the app, and start playing. Order as many wristbands as you need.',
      },
      {
        question: 'Which sports are supported?',
        answer:
          'Klikkr currently supports Padel, Tennis, Squash, and Football. More sports are planned and will be added via app updates.',
      },
      {
        question: 'How long does the battery last?',
        answer:
          'The battery lasts up to 2 years with normal use. It uses a coin cell that can be easily replaced.',
      },
      {
        question: 'Is the wristband waterproof?',
        answer:
          "Yes! Klikkr is water and sweat resistant and can handle even intense matches. It's made of robust, shockproof silicone.",
      },
      {
        question: 'How do I connect the wristband to the app?',
        answer:
          'Just scan the QR code on the wristband with the Klikkr app – the Bluetooth connection is established automatically. No manual pairing needed.',
      },
      {
        question: 'Do I need both wristbands to play?',
        answer:
          'No, you can play with just one wristband. The app supports single-beacon mode. With two wristbands, both players can track their own points.',
      },
      {
        question: 'Which devices is the app available on?',
        answer:
          "The Klikkr app is available for Android & iOS in beta. Sign up on our website and we'll invite you to the beta.",
      },
      {
        question: 'Can I customize the game rules?',
        answer:
          'Yes! You can enable "Win by Two", set the number of points per set, and choose different display modes (Table, Portrait, Landscape).',
      },
      {
        question: 'How do returns work?',
        answer:
          "You have a 14-day right of withdrawal. If you're not satisfied, just contact us via email at support@klikkr.ch and we'll take care of everything.",
      },
      {
        question: 'Is there a warranty?',
        answer:
          'Yes, Klikkr comes with a 1-year manufacturer warranty. For defects or issues, contact our support team.',
      },
    ],
  },

  cart: {
    title: 'Cart',
    empty: 'Your cart is empty.',
    checkout: 'Checkout',
    remove: 'Remove',
    total: 'Total',
    addedToCart: 'Added',
    continueShopping: 'Continue shopping',
    close: 'Close',
  },

  products: {
    wristband: {
      name: 'Wearable Score Clicker',
      description: 'Bluetooth score tracker for your wrist.',
    },
    'holder-squash': {
      name: 'Glass Mount (Squash)',
      description:
        'Mounts on the squash court glass for the perfect view of the score.',
    },
    'holder-squash-s': {
      name: 'Glass Mount S (Squash)',
      description: 'Slot: 162 × 15.5 mm (L × W)',
    },
    'holder-squash-m': {
      name: 'Glass Mount M (Squash)',
      description: 'Slot: 167 × 16 mm (L × W)',
    },
    'holder-squash-l': {
      name: 'Glass Mount L (Squash)',
      description: 'Slot: 175 × 16.5 mm (L × W)',
    },
    sizeLabel: 'Size',
    perUnit: '/ unit',
    cta: 'Add to Cart',
    categories: {
      wristband: 'Wristbands',
      holder: 'Holders',
      accessory: 'Accessories',
    },
  },

  footer: {
    allRightsReserved: 'All rights reserved.',
    designBy: 'Design & Code by',
    agb: 'Terms',
    privacy: 'Privacy',
    refunds: 'Refunds',
    imprint: 'Imprint',
  },

  wip: {
    title: 'Work in Progress',
    message:
      'This page is currently being updated and will be available soon. Stay tuned for updates!',
    backHome: 'Back to Home',
  },

  gameModes: {
    badge: 'Game Modes',
    title: 'How do you want to',
    titleAccent: 'play?',
    description:
      'With or without a beacon, solo or tournament — the Klikkr app adapts to your setup.',
    modes: {
      swipe: {
        label: 'Swipe',
        description: 'Score manually on your phone — no beacon needed.',
        steps: [
          {
            title: 'Open the app',
            description:
              'Start the app without any connected beacons. All you need is your smartphone.',
          },
          {
            title: 'Choose your sport',
            description:
              'Select your sport — Tennis, Squash, Padel or Football are ready to go.',
          },
          {
            title: 'Set the rules',
            description:
              'Set target score, "Win by 2" and serve rotation — fully customizable.',
          },
          {
            title: 'Swipe & Score',
            description:
              'Swipe up or down over the number to change the score. Swipe down to switch serve.',
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
        description: 'One wristband for both players — simple and fast.',
        steps: [
          {
            title: 'Connect beacon',
            description:
              'Turn on your wristband (hold 3 sec) and connect via QR code or Bluetooth. One beacon is enough.',
          },
          {
            title: 'Choose your sport',
            description:
              'Select your sport — the app automatically detects 1-beacon mode.',
          },
          {
            title: 'Set the rules',
            description:
              'Configure target score, "Win by 2" and other sport-specific settings.',
          },
          {
            title: 'Click & Score',
            description:
              '1 click = point for Player 1. 2 clicks = point for Player 2. Swipe down to switch serve.',
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
        description: 'Each player has their own wristband.',
        steps: [
          {
            title: 'Connect both beacons',
            description:
              'Turn on both wristbands (hold 3 sec) and connect via QR code or Bluetooth.',
          },
          {
            title: 'Choose your sport',
            description:
              'Select your sport — the app auto-detects 2-beacon mode and assigns each beacon to a player.',
          },
          {
            title: 'Set the rules',
            description: 'Configure sport-specific settings as usual.',
          },
          {
            title: 'Click & Score',
            description:
              '1 click = score up. 2 clicks = score down. Double-click to switch serve.',
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
        label: 'Tournament',
        description: '3+ beacons — multiple players, automatic rankings.',
        steps: [
          {
            title: 'Connect 3+ beacons',
            description:
              'Connect 3 or more wristbands — the app automatically enters tournament mode.',
          },
          {
            title: 'Choose your sport',
            description: 'Select your sport from the available options.',
          },
          {
            title: 'Set the rules',
            description: 'Configure tournament-specific settings.',
          },
          {
            title: 'Select players',
            description:
              'Activate or deactivate players with a click. Choose who plays against whom before each match.',
          },
          {
            title: 'Play the match',
            description:
              'Double-click to start. 1 click = score up, 2 clicks = score down.',
          },
          {
            title: 'Tournament results',
            description:
              'After each match the overall standings update: who beat whom?',
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
    prev: 'Previous',
    next: 'Next',
  },

  langSwitcher: {
    de: 'DE',
    en: 'EN',
    fr: 'FR',
    it: 'IT',
  },
}
