import type { Translations } from './index'

export const en: Translations = {
  seo: {
    defaultOgImage: '/product.png',
    home: {
      title: 'Klikkr – Score Counter Wristband for Padel, Tennis & Squash',
      description:
        'The Bluetooth score counter on your wrist. Track points in padel, tennis or squash with one click. Waterproof, 2-year battery. Pre-order now.',
    },
    howItWorks: {
      title: 'How Klikkr Works – Score Counter Wristband Guide',
      description:
        'Learn how Klikkr works in a few simple steps: turn on the wristband, connect the app, track points with one click. For padel, tennis and squash.',
    },
    reviews: {
      title: 'Klikkr Reviews – What Padel, Tennis & Squash Players Say',
      description:
        'Real reviews from padel, tennis and squash players already using Klikkr. Discover why athletes rely on the Bluetooth score counter.',
    },
    faq: {
      title: 'FAQ – Common Questions About the Klikkr Wristband',
      description:
        'Answers to the most common questions about Klikkr: Bluetooth pairing, battery life and compatibility with padel, tennis and squash.',
    },
    appPrivacy: {
      title: 'Klikkr App Privacy Policy | Klikkr',
      description:
        'Privacy policy for the Klikkr app. Learn what data the app collects and how we protect your privacy.',
    },
    imprint: {
      title: 'Imprint | Klikkr',
      description: 'Imprint and legal information for Klikkr.',
    },
    thanks: {
      title: 'Thank you for your order | Klikkr',
      description:
        'Thank you for your Klikkr order. You will receive a confirmation email with the details shortly.',
    },
  },

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
    titleLine2: 'Focus on Your',
    titleAccent2: 'Game.',
    slogan: 'Focus on your Game!',
    description:
      'The ultimate wearable Bluetooth score tracker for every racket sport. Keep your eyes on the ball, track points with a single click, and let the app handle the rest.',
    ctaPrimary: 'Order Now',
    ctaSecondary: 'Learn more',
    sportSquash: 'Squash',
    sportPadel: 'Padel',
    sportBadminton: 'Badminton',
    sportTennis: 'Tennis',
    sportTableTennis: 'Table Tennis',
    sportPickleball: 'Pickleball',
    productAlt: 'Klikkr score counter wristband worn on the wrist',
  },

  system: {
    title: 'Wristband, app,',
    titleAccent: 'scoreboard.',
    description: 'Three parts, one seamless experience — ready in seconds.',
    imageAlt:
      'Player controlling the Klikkr scoreboard from the app, wristband on her wrist',
    steps: [
      {
        title: 'Put on the wristband',
        description: 'Wear the Klikkr wristbands on your wrist.',
      },
      {
        title: 'Connect via Bluetooth',
        description:
          'Pair the wristbands with the free Klikkr app in a single tap.',
      },
      {
        title: 'Start the match',
        description: 'Pick your sport, set the rules — and play.',
      },
    ],
  },

  features: {
    badge: 'For everyone who plays',
    title: 'Built for Your',
    titleAccent: 'Sport',
    description:
      'Keep the score in view without counting along. One click per point — the app handles the rest.',
    moreSports:
      'Works with every racket sport — including Tennis, Table Tennis & Pickleball.',
    items: [
      {
        title: 'Padel',
        imageAlt: 'Padel player using the Klikkr score tracker on the wrist',
        description:
          "Don't lose count during those long duels. Focus on your smash, we track the score.",
      },
      {
        title: 'Squash',
        imageAlt: 'Klikkr wristband in action during a squash match',
        description:
          "Keep track of every brutal rally. One click and you're ready for the next serve.",
      },
      {
        title: 'Badminton',
        imageAlt: 'Klikkr wristband worn during badminton training',
        description:
          'Keep track of every fast-paced rally. One click and the point is recorded.',
      },
    ],
  },

  appFeatures: {
    badge: 'Digital Companion App',
    title: 'The Ultimate Companion App.',
    description:
      'The free Klikkr app turns your Bluetooth wristbands into a powerful, intelligent smart scoreboard. Perfectly designed for fast-paced racket sports like Padel, Tennis, and Squash.',
    downloadAppStore: 'Download on the App Store',
    downloadGooglePlay: 'Get it on Google Play',
    scanQrLabel: 'Scan with your phone',
    scanQrAlt: 'QR code to the Klikkr App',
  },

  appStory: {
    badge: 'What the app does',
    title: 'Klikkr keeps score,',
    titleAccent: 'you play.',
    description:
      'Six things the app takes off your hands so you do not have to think about them.',
    sections: {
      modes: {
        tab: 'Modes',
        kicker: 'No mode menu',
        title: 'The wristbands decide how you play',
        body: 'None, one, two or three bands. The app counts what is connected and adapts. All you do is confirm.',
        proof: [
          'No band: swipe',
          'Two bands: score for yourself',
          'Three or more: tournament',
        ],
        imageAlt: 'Klikkr scoreboard with a wristband on the wrist',
      },
      gestures: {
        tab: 'Gestures',
        kicker: 'Four gestures',
        title: 'One press and the point is in',
        body: 'One press scores. Two takes it back, or scores for the other player when you only have one band. A long press pauses. After the match, three starts the next one.',
        proof: [
          '1× score',
          '2× undo',
          'Hold to pause',
          'The band detects the gesture itself',
        ],
        imageAlt: 'A thumb pressing the Klikkr wristband',
      },
      rules: {
        tab: 'Rules',
        kicker: 'Six sports',
        title: 'Real rules, not just a counter',
        body: 'Tennis, padel, squash, table tennis, badminton and pickleball, each with its own rule set built in. Change any of it if you want to, the defaults cover the normal case.',
        proof: [
          'Advantage or golden point',
          'Tie break',
          'Side out',
          'Set length',
          'Serve rotation',
        ],
        imageAlt: 'Rule settings in the Klikkr app',
      },
      mirror: {
        tab: 'Mirror',
        kicker: 'Display-Sync',
        title: 'Every other phone becomes a scoreboard',
        body: 'Scan the code and it runs. The live score appears on every connected device, behind the glass, on the net post or with the spectators, while you keep scoring on your own.',
        proof: [
          'Several devices at once',
          'No internet',
          'Straight over Bluetooth',
        ],
        imageAlt: 'Every other phone becomes a scoreboard',
      },
      stats: {
        tab: 'Statistics',
        kicker: 'After the match',
        title: 'What stays behind',
        body: 'Every match lands in your history with set scores, duration and serve stats. The momentum chart shows point by point where the match turned.',
        proof: ['Head to head record', 'Momentum curve', 'Export to a file'],
        imageAlt: 'Statistics and the momentum chart in the Klikkr app',
      },
      summary: {
        tab: 'Flow',
        kicker: 'From first serve to the record',
        title: 'One path, four screens',
        body: 'Pick a sport, assign the players, play, see the result. The match is in your statistics afterwards without you typing anything.',
        proof: ['No account', 'Works offline', 'Four languages'],
        imageAlt: 'The flow of a match in the Klikkr app',
      },
    },
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
    form: {
      title: 'Share your experience',
      description: 'Already playing with Klikkr? Tell us how it’s going.',
      namePlaceholder: 'Your name',
      ratingLabel: 'Your rating',
      textPlaceholder: 'Tell us about your experience with Klikkr …',
      submit: 'Send review',
      ratingRequired: 'Please select a star rating.',
      success: 'Your mail client is about to open — just hit send!',
      mailSubject: 'New Klikkr review',
    },
    items: [
      {
        name: 'Sandro L.',
        sport: 'Padel',
        rating: 5,
        text: 'Since using Klikkr, I can fully focus on the game. No more mental math, no more discussions – the cognitive load is completely gone. It makes a real difference in the match.',
        date: 'Mar 15, 2026',
      },
      {
        name: 'Daniel K.',
        sport: 'Tennis',
        rating: 5,
        text: "Delivery was lightning fast and when I had a question, I got a reply within hours. That's what great service looks like. Product top, support top!",
        date: 'Mar 22, 2026',
      },
      {
        name: 'Markus B.',
        sport: 'Squash',
        rating: 5,
        text: "Finally I can play squash without constantly having to keep count. Just click and keep playing – that's how it should be!",
        date: 'Apr 1, 2026',
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
        question: "Why can't I connect the wristband to the app?",
        answer:
          'The Klikkr app requires Bluetooth permission (BLE) to detect the wristband. Make sure Bluetooth is enabled on your smartphone and that you have granted the app the necessary permissions. On Android, you can find these under Settings → Apps → Klikkr → Permissions. On iOS, you will be prompted automatically on first launch.',
      },
      {
        question:
          'I press the wristband but nothing happens – what should I do?',
        answer:
          'The wristband needs to be turned on first. Press and hold the button for about 3 seconds until the wristband activates. Only then will it respond to short clicks and communicate with the app.',
      },
      {
        question: 'How long does the battery last?',
        answer:
          'The battery lasts about 2 years with normal use. If you turn off the wristband after playing (press and hold the button for about 6 seconds), the battery life will be extended even further.',
      },
      {
        question: 'How do I replace the battery?',
        answer:
          'First, carefully remove the BLE beacon from the silicone wristband. Then open the beacon housing cover with a flat object (e.g. a coin or small screwdriver). Replace the coin cell battery and put the cover back on.',
      },
      {
        question: 'Is the BLE beacon waterproof?',
        answer:
          'No, the BLE beacon itself is not waterproof and must not be used underwater. While the silicone wristband is splash-proof and sweat-resistant, the electronic beacon should not come into contact with water.',
      },
    ],
  },

  cart: {
    title: 'Cart',
    empty: 'Your cart is empty.',
    checkout: 'Checkout',
    newsletterOptIn: 'Yes, I want to receive the Klikkr newsletter',
    remove: 'Remove',
    total: 'Total',
    addedToCart: 'Added',
    continueShopping: 'Continue shopping',
    close: 'Close',
    shippingTo: 'Shipping to',
    countryCH: 'Switzerland',
    countryAbroad: 'Other country',
    abroadNotice:
      'For international orders, customs duties and import fees may apply according to local law and must be paid by the recipient.',
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

  newsletter: {
    badge: 'Newsletter',
    title: 'Stay in the',
    titleAccent: 'Loop',
    description:
      'Get updates on new features, tips and offers — straight to your inbox.',
    placeholder: 'Your email address',
    button: 'Subscribe',
    success: "You're subscribed! Thanks for your interest.",
    alreadySubscribed: 'You are already subscribed.',
    error: 'Something went wrong. Please try again.',
    privacy: 'We respect your privacy. Unsubscribe anytime.',
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
            title: 'Pick your sport',
            description:
              'Open the app and tap your sport. Six are ready, from tennis to pickleball. With no band connected, all you need is the phone.',
          },
          {
            title: 'Assign the players',
            description:
              'Tap players from the pool onto their slots. It works without profiles too, they are then Player 1 and Player 2.',
          },
          {
            title: 'Set the rules',
            description:
              'Set target score, "Win by 2" and serve rotation — fully customizable.',
          },
          {
            title: 'Swipe & Score',
            description:
              'Swipe up over your own score to count the point. Taking one back is in the menu.',
          },
        ],
        images: [
          '/app/en/screens/home.webp',
          '/app/en/screens/setup.webp',
          '/app/en/screens/rules.webp',
          '/app/en/screens/scoreboard.webp',
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
              '1 click = a point for you. 2 clicks = a point for the other player. 3 clicks takes the last point back, a long press pauses.',
          },
        ],
        images: [
          '/app/en/screens/beacons.webp',
          '/app/en/screens/home.webp',
          '/app/en/screens/rules.webp',
          '/app/en/screens/scoreboard.webp',
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
              '1 click = your own point. 2 clicks takes the last point back, and at 0:0 it switches the serve instead. A long press pauses.',
          },
        ],
        images: [
          '/app/en/screens/beacons.webp',
          '/app/en/screens/home.webp',
          '/app/en/screens/rules.webp',
          '/app/en/screens/scoreboard.webp',
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
              'Both players click once to start the match. Then 1 click = your own point, 2 clicks takes it back. After the match a click starts the next one.',
          },
          {
            title: 'Tournament results',
            description:
              'After each match the overall standings update: who beat whom?',
          },
        ],
        images: [
          '/app/en/screens/menu.webp',
          '/app/en/screens/home.webp',
          '/app/en/screens/rules.webp',
          '/app/en/screens/setup.webp',
          '/app/en/screens/scoreboard.webp',
          '/app/en/screens/summary.webp',
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
