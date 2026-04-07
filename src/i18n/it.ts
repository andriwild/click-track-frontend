import type { Translations } from './index'

export const it: Translations = {
  nav: {
    home: 'Home',
    howItWorks: 'Come funziona',
    reviews: 'Recensioni',
    faq: 'FAQ',
    orderNow: 'Ordina ora',
  },

  hero: {
    badge: 'Disponibile in preordine',
    titleLine1: 'Traccia ogni',
    titleAccent1: 'Punto.',
    titleLine2: 'Domina il',
    titleAccent2: 'Gioco.',
    slogan: 'Focus on your Game!',
    description:
      "Il tracker di punteggio Bluetooth indossabile definitivo per Padel, Tennis e Squash. Tieni gli occhi sulla palla, segna i punti con un solo clic e lascia che l'app faccia il resto.",
    ctaPrimary: 'Ordina ora',
    ctaSecondary: 'Scopri di più',
    sportSquash: 'Squash',
    sportPadel: 'Padel',
    sportTennis: 'Tennis',
    productAlt: 'Concetto Braccialetto Klikkr',
    symbolImage: '* Immagine simbolica',
  },

  features: {
    badge: 'Progettato per atleti',
    title: 'Fatto per il tuo',
    titleAccent: 'Sport',
    description:
      "Klikkr è invisibile quando non ti serve e perfettamente affidabile quando ne hai bisogno. Resistente all'acqua, al sudore e agli urti.",
    items: [
      {
        title: 'Squash',
        description:
          'Tieni il conto di ogni scambio intenso. Un clic e sei pronto per il prossimo servizio.',
      },
      {
        title: 'Padel',
        description:
          'Non perdere il conto durante i duelli lunghi. Concentrati sul tuo smash, noi teniamo il punteggio.',
      },
      {
        title: 'Calcio',
        description:
          'Perfetto per arbitri o partite amichevoli. Tieni il punteggio senza fatica.',
      },
    ],
  },

  appFeatures: {
    badge: 'App compagna digitale',
    title: "L'app compagna definitiva.",
    description:
      "L'app gratuita Klikkr trasforma i tuoi braccialetti Bluetooth in un tabellone segnapunti intelligente e potente. Perfettamente progettata per sport di racchetta veloci.",
    betaBadge: 'Beta',
    betaTitle: 'Unisciti alla beta',
    betaDescription:
      "L'app Klikkr è in beta per Android & iOS. Iscriviti e ti invitiamo.",
    betaPlaceholder: 'Il tuo indirizzo email',
    betaButton: 'Iscriviti',
    betaSuccess: 'Grazie! Ti ricontattiamo presto.',
    betaError: 'Qualcosa è andato storto. Riprova.',
    appPreviewAlt: 'Anteprima interfaccia app Klikkr',
    items: [
      {
        title: 'Punteggio intelligente',
        description:
          'Rilevamento automatico della vittoria e regole opzionali "Win by Two" per una tranquillità totale.',
      },
      {
        title: 'Connettività fluida',
        description:
          'Accoppiamento BLE istantaneo, scanner QR e supporto single-beacon per dispositivi singoli.',
      },
      {
        title: 'Display flessibili',
        description:
          'Modalità Tabella/Specchiata, Verticale e Orizzontale. Perfettamente leggibile da qualsiasi angolazione.',
      },
      {
        title: 'Controllo intuitivo',
        description:
          'Gesti swipe a schermo intero per segnare direttamente sul display del tuo dispositivo.',
      },
      {
        title: 'Accoppiamento QR rapido',
        description:
          'Salta le impostazioni Bluetooth. Scansiona il codice a barre sul braccialetto e sei pronto.',
      },
      {
        title: 'Rilevamento connessione',
        description:
          'Se un beacon perde la connessione, vieni avvisato immediatamente — nessun punto va perso.',
      },
    ],
  },

  checkout: {
    title: 'Pronto a',
    titleAccent: 'dominare',
    titleEnd: ' il gioco?',
    description:
      'Scegli la tua attrezzatura e la quantità — un braccialetto o un set completo per la tua squadra.',
    featuresList: [
      'Punteggio con un clic',
      'Resistente ad acqua e sudore',
      'Sensazione piacevole — ideale per lo sport',
      'Ultra-leggero al polso',
      '2 anni di autonomia',
    ],
    securePayment:
      'Pagamento sicuro tramite Stripe. Completamente crittografato.',
  },

  howItWorks: {
    badge: 'Semplice & Intuitivo',
    title: 'Come',
    titleAccent: 'funziona',
    description:
      "Dall'unboxing al match point in meno di 2 minuti. Ecco tutto quello che devi sapere.",
    steps: [
      {
        title: 'Unboxing',
        description:
          "Apri il tuo pacchetto Klikkr – braccialetti completamente carichi e pronti all'uso.",
      },
      {
        title: "Scarica l'app",
        description:
          "Installa l'app gratuita Klikkr — disponibile per Android & iOS (Beta).",
      },
      {
        title: 'Scansiona & Connetti',
        description:
          'Scansiona il codice QR sul braccialetto per accoppiarti via Bluetooth istantaneamente – nessuna configurazione manuale.',
      },
      {
        title: 'Inizia una partita',
        description:
          'Scegli il tuo sport, inserisci i nomi dei giocatori, configura le regole e inizia a giocare.',
      },
      {
        title: 'Segna i punti',
        description:
          "Un clic sul braccialetto = un punto. L'app gestisce automaticamente set, giochi e regole.",
      },
      {
        title: 'Vedi il risultato',
        description:
          'Rilevamento automatico della vittoria, avvisi di match point e visualizzazione chiara del vincitore.',
      },
    ],
    ctaLine1: 'Fatto. Semplice come',
    ctaAccent: 'clic, clic, vittoria.',
    ctaLine2: 'Pronto a portare il tuo gioco al livello successivo?',
  },

  appWalkthrough: {
    badge: 'Guida App',
    title: "L'App",
    titleAccent: 'passo dopo passo',
    description: "Come usare l'app Klikkr — dal primo avvio al match point.",
    steps: [
      {
        title: "Avvia l'app",
        description:
          "Apri l'app Klikkr. Vedrai subito la schermata principale con tutte le opzioni.",
      },
      {
        title: 'Collega il braccialetto',
        description:
          'Tieni premuto il pulsante per 3 secondi per accendere (6 sec per spegnere). Scansiona il QR code o seleziona il dispositivo dalla lista Bluetooth.',
      },
      {
        title: 'Beacon connessi',
        description:
          "I tuoi braccialetti sono connessi e pronti. Puoi vedere tutti i dispositivi connessi in un colpo d'occhio.",
      },
      {
        title: 'Scegli lo sport',
        description:
          'Seleziona il tuo sport e configura le regole di gioco. Padel, Tennis o Squash — tutto è pronto.',
      },
      {
        title: 'Impostazioni di gioco',
        description:
          "Imposta i nomi dei giocatori, il numero di set e altre regole — completamente personalizzabile prima dell'inizio della partita.",
      },
      {
        title: 'Segna i punti',
        description:
          "Un clic sul braccialetto segna un punto. L'app gestisce set, giochi e mostra il punteggio in tempo reale.",
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
    badge: 'Personalizzabile',
    title: 'Il tuo gioco, il tuo',
    titleAccent: 'stile',
    items: [
      {
        title: 'Set di suoni multipli',
        description:
          'Scegli tra diversi set di suoni per punti e match ball — o disattiva completamente i suoni.',
      },
      {
        title: 'Colori personalizzati',
        description:
          'Personalizza i colori dei giocatori — scegli tra modelli o imposta i tuoi colori con il selettore.',
      },
      {
        title: 'Tema chiaro & scuro',
        description:
          'Passa tra modalità chiara e scura — a seconda delle condizioni di luce e delle tue preferenze.',
      },
    ],
  },

  phoneHolder: {
    badge: 'Nuovo accessorio',
    title: 'Il Supporto',
    titleAccent: 'Smartphone',
    description:
      'Fissa il tuo smartphone direttamente al vetro del campo da squash — vista perfetta del punteggio in tempo reale durante il gioco.',
    hint: 'Trascina per ruotare, scorri per zoomare',
  },

  reviews: {
    badge: 'Cosa dicono i giocatori',
    title: 'Recensioni dei',
    titleAccent: 'giocatori',
    description:
      'Scopri cosa pensano gli atleti che usano già Klikkr nelle loro partite quotidiane.',
    reviewsCount: 'Recensioni',
    bottomCta:
      'Unisciti alla community di giocatori soddisfatti – prendi il tuo Klikkr oggi.',
    happyPlayers: 'giocatori soddisfatti',
    items: [
      {
        name: 'Marco S.',
        sport: 'Padel',
        rating: 5,
        text: 'Finalmente non devo più contare a mente! Un clic e il punto è salvato. Geniale.',
        date: '12 feb. 2026',
      },
      {
        name: 'Laura B.',
        sport: 'Squash',
        rating: 5,
        text: "I braccialetti sono super comodi e non danno fastidio durante il gioco. L'app rileva persino automaticamente chi ha vinto.",
        date: '28 gen. 2026',
      },
      {
        name: 'Nico W.',
        sport: 'Tennis',
        rating: 4,
        text: "Perfetto per le nostre partite settimanali. Mai più discussioni sul punteggio! L'accoppiamento QR funziona all'istante.",
        date: '15 gen. 2026',
      },
      {
        name: 'Sarah M.',
        sport: 'Padel',
        rating: 5,
        text: 'Ho ricevuto Klikkr in regalo – il miglior regalo di sempre. Gli effetti sonori ad ogni punto sono divertentissimi.',
        date: '3 mar. 2026',
      },
      {
        name: 'David K.',
        sport: 'Squash',
        rating: 5,
        text: "Robusto, impermeabile e la batteria dura un'eternità. Dopo 3 mesi di uso intenso, ancora come nuovo.",
        date: '20 feb. 2026',
      },
      {
        name: 'Anna R.',
        sport: 'Tennis',
        rating: 4,
        text: 'Ottimo concetto! Lo usiamo nel nostro club e tutti ne sono entusiasti. Le diverse modalità di visualizzazione sono fantastiche.',
        date: '8 feb. 2026',
      },
    ],
  },

  faq: {
    badge: 'Domande?',
    title: 'Domande',
    titleAccent: 'frequenti',
    description:
      'Tutto quello che devi sapere su Klikkr – dalla configurazione al gameplay.',
    emptyTitle: 'Nessuno ci ha mai chiesto niente.',
    emptyDescription:
      'O Klikkr è così intuitivo che non servono domande — oppure tutti sono troppo impegnati a giocare. Scommettiamo sulla seconda. Comunque, abbiamo preparato qualche risposta, per ogni evenienza.',
    contactCta: 'Altre domande? Scrivici a',
    contactTitle: 'Non hai trovato la tua risposta?',
    contactDescription: 'Scrivici direttamente — non mordiamo (di solito).',
    contactEmail: 'Il tuo indirizzo e-mail',
    contactMessage: 'Cosa vorresti sapere?',
    contactButton: 'Invia',
    contactSuccess: 'Il tuo client mail si sta aprendo — basta inviare!',
    items: [
      {
        question: "Perché non riesco a collegare il braccialetto all'app?",
        answer:
          "L'app Klikkr richiede il permesso Bluetooth (BLE) per rilevare il braccialetto. Assicurati che il Bluetooth sia attivato sul tuo smartphone e di aver concesso all'app le autorizzazioni necessarie. Su Android, vai su Impostazioni → App → Klikkr → Autorizzazioni. Su iOS, ti verrà chiesto automaticamente al primo avvio.",
      },
      {
        question: 'Premo sul braccialetto ma non succede nulla – cosa faccio?',
        answer:
          "Il braccialetto deve prima essere acceso. Tieni premuto il pulsante per circa 3 secondi finché il braccialetto si attiva. Solo allora risponderà ai clic brevi e potrà comunicare con l'app.",
      },
      {
        question: 'Quanto dura la batteria?',
        answer:
          'La batteria dura circa 2 anni con un uso normale. Se spegni il braccialetto dopo aver giocato (tieni premuto il pulsante per circa 6 secondi), la durata della batteria si prolunga ulteriormente.',
      },
      {
        question: 'Come sostituisco la batteria?',
        answer:
          'Rimuovi prima con cautela il beacon BLE dal braccialetto in silicone. Poi apri il coperchio del beacon con un oggetto piatto (ad esempio una moneta o un piccolo cacciavite). Sostituisci la pila a bottone e rimetti il coperchio.',
      },
      {
        question: 'Il beacon BLE è impermeabile?',
        answer:
          "No, il beacon BLE non è impermeabile e non deve essere utilizzato sott'acqua. Il braccialetto in silicone è resistente agli schizzi e al sudore, ma il componente elettronico non deve entrare in contatto con l'acqua.",
      },
    ],
  },

  cart: {
    title: 'Carrello',
    empty: 'Il tuo carrello è vuoto.',
    checkout: 'Vai alla cassa',
    remove: 'Rimuovi',
    total: 'Totale',
    addedToCart: 'Aggiunto',
    continueShopping: 'Continua lo shopping',
    close: 'Chiudi',
  },

  products: {
    wristband: {
      name: 'Wearable Score Clicker',
      description: 'Contapunti Bluetooth da polso.',
    },
    'holder-squash': {
      name: 'Glass Mount (Squash)',
      description:
        'Si fissa al vetro del campo da squash per una vista perfetta del punteggio.',
    },
    'holder-squash-s': {
      name: 'Glass Mount S (Squash)',
      description: 'Fessura: 162 × 15.5 mm (L × L)',
    },
    'holder-squash-m': {
      name: 'Glass Mount M (Squash)',
      description: 'Fessura: 167 × 16 mm (L × L)',
    },
    'holder-squash-l': {
      name: 'Glass Mount L (Squash)',
      description: 'Fessura: 175 × 16.5 mm (L × L)',
    },
    sizeLabel: 'Taglia',
    perUnit: '/ pezzo',
    cta: 'Aggiungi al carrello',
    categories: {
      wristband: 'Braccialetti',
      holder: 'Supporti',
      accessory: 'Accessori',
    },
  },

  footer: {
    allRightsReserved: 'Tutti i diritti riservati.',
    designBy: 'Design & Code di',
    agb: 'CGC',
    privacy: 'Privacy',
    refunds: 'Recesso',
    imprint: 'Impressum',
  },

  wip: {
    title: 'Lavori in corso',
    message:
      'Questa pagina è in fase di aggiornamento e sarà presto disponibile. Restate sintonizzati!',
    backHome: 'Torna alla Home',
  },

  gameModes: {
    badge: 'Modalità di gioco',
    title: 'Come vuoi',
    titleAccent: 'giocare?',
    description:
      "Con o senza beacon, da solo o in torneo — l'app Klikkr si adatta al tuo setup.",
    modes: {
      swipe: {
        label: 'Swipe',
        description: 'Segna manualmente sul telefono — senza beacon.',
        steps: [
          {
            title: "Apri l'app",
            description:
              "Avvia l'app senza beacon connessi. Ti basta il tuo smartphone.",
          },
          {
            title: 'Scegli lo sport',
            description:
              'Seleziona il tuo sport — Tennis, Squash, Padel o Calcio sono pronti.',
          },
          {
            title: 'Imposta le regole',
            description:
              'Imposta il punteggio target, "Win by 2" e la rotazione del servizio — completamente personalizzabile.',
          },
          {
            title: 'Swipe & Score',
            description:
              "Fai swipe verso l'alto o il basso sul numero per cambiare il punteggio. Swipe verso il basso per cambiare il servizio.",
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
        description:
          'Un braccialetto per entrambi i giocatori — semplice e veloce.',
        steps: [
          {
            title: 'Connetti il beacon',
            description:
              'Accendi il braccialetto (tieni premuto 3 sec) e connettilo tramite QR code o Bluetooth. Un beacon è sufficiente.',
          },
          {
            title: 'Scegli lo sport',
            description:
              "Seleziona il tuo sport — l'app rileva automaticamente la modalità 1 beacon.",
          },
          {
            title: 'Imposta le regole',
            description:
              'Configura punteggio target, "Win by 2" e altre impostazioni specifiche dello sport.',
          },
          {
            title: 'Clic & Score',
            description:
              '1 clic = punto per Giocatore 1. 2 clic = punto per Giocatore 2. Swipe verso il basso per cambiare il servizio.',
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
        description: 'Ogni giocatore ha il proprio braccialetto.',
        steps: [
          {
            title: 'Connetti entrambi i beacon',
            description:
              'Accendi entrambi i braccialetti (tieni premuto 3 sec) e connettili tramite QR code o Bluetooth.',
          },
          {
            title: 'Scegli lo sport',
            description:
              "Seleziona il tuo sport — l'app rileva la modalità 2 beacon e assegna ogni beacon a un giocatore.",
          },
          {
            title: 'Imposta le regole',
            description:
              'Configura le impostazioni specifiche dello sport come al solito.',
          },
          {
            title: 'Clic & Score',
            description:
              '1 clic = punteggio +1. 2 clic = punteggio -1. Doppio clic per cambiare il servizio.',
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
        label: 'Torneo',
        description: '3+ beacon — più giocatori, classifica automatica.',
        steps: [
          {
            title: 'Connetti 3+ beacon',
            description:
              "Connetti 3 o più braccialetti — l'app entra automaticamente in modalità torneo.",
          },
          {
            title: 'Scegli lo sport',
            description: 'Seleziona il tuo sport tra le opzioni disponibili.',
          },
          {
            title: 'Imposta le regole',
            description: 'Configura le impostazioni specifiche del torneo.',
          },
          {
            title: 'Seleziona i giocatori',
            description:
              'Attiva o disattiva i giocatori con un clic. Scegli chi gioca contro chi prima di ogni match.',
          },
          {
            title: 'Gioca il match',
            description:
              'Doppio clic per avviare. 1 clic = punteggio +1, 2 clic = punteggio -1.',
          },
          {
            title: 'Risultati del torneo',
            description:
              'Dopo ogni match la classifica generale si aggiorna: chi ha battuto chi?',
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
    prev: 'Precedente',
    next: 'Avanti',
  },

  langSwitcher: {
    de: 'DE',
    en: 'EN',
    fr: 'FR',
    it: 'IT',
  },
}
