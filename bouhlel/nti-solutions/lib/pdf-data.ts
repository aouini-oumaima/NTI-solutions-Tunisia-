import type { ArticlePDFData } from "@/components/pdf/NTIArticlePDF";

export const pdfVideoSurveillance: ArticlePDFData = {
  title: "Vidéosurveillance",
  subtitle: "Caméras IP et CCTV haute résolution, enregistreurs intelligents et supervision à distance.",
  tag: "Sûreté — Vidéosurveillance",
  sections: [
    {
      heading: "Présentation",
      paragraphs: [
        "NTI Solutions intègre et maintient des systèmes de vidéosurveillance IP et CCTV pour entreprises, industries, hôtels et institutions en Tunisie.",
        "Nos solutions couvrent l'intégralité de la chaîne : caméras haute résolution, enregistrement intelligent, gestion centralisée et accès à distance sécurisé.",
      ],
    },
    {
      heading: "Types de caméras disponibles",
      bullets: [
        "Caméras immobiles — champ fixe, objectif interchangeable CS, IP66",
        "Caméras Fixed Bullet — compactes, IR longue portée, intérieur/extérieur",
        "Caméras dômes fixes — IK10 anti-vandalisme, orientation discrète",
        "Caméras PTZ — pan-tilt-zoom motorisé, zoom x32, suivi automatique",
        "Caméras thermiques — détection 0 lux, capteur FLIR, longue portée",
      ],
    },
    {
      heading: "Enregistreurs compatibles",
      table: {
        headers: ["Type", "Description", "Capacité"],
        rows: [
          ["DVR", "Enregistrement analogique sur disque dur", "4 à 16 canaux"],
          ["NVR", "Enregistrement IP réseau, PoE, multi-sites", "4 à 64 canaux"],
          ["XVR", "Multi-technologies : CVBS, HDCVI, AHD, HDTVI + IP", "4 à 32 canaux"],
        ],
      },
    },
    {
      heading: "Marques partenaires",
      bullets: ["Dahua (NVR, XVR, caméras IP)", "Hikvision (disponible sur demande)", "Uniview (UNV)"],
      note: "NTI Solutions sélectionne les équipements selon votre infrastructure existante et votre budget — nous ne vous imposons pas de marque.",
    },
  ],
};

export const pdfControleAcces: ArticlePDFData = {
  title: "Contrôle d'accès",
  subtitle: "Contrôler qui entre, quand et par où — tourniquets, biométrie, rondes et barrières.",
  tag: "Sûreté — Contrôle d'accès",
  sections: [
    {
      heading: "Objectifs du contrôle d'accès",
      bullets: [
        "Protéger bâtiments, biens et marchandises",
        "Prévenir les intrusions de personnes non habilitées",
        "Éviter et dissuader les actes de malveillance",
        "Sécuriser le personnel et tracer les accès",
      ],
    },
    {
      heading: "Système de contrôle de tourniquet",
      paragraphs: [
        "Le choix du type de tourniquet est lié au système de sécurité du lieu et aux flux à gérer.",
      ],
      table: {
        headers: ["Type", "Usage", "Débit max"],
        rows: [
          ["Barreaudé", "Haute sécurité, zones sensibles", "30 pers/min"],
          ["Tripode", "Entrées salariés, réfectoires, stades", "20 pers/min"],
          ["Couloir sécurisé", "Halls premium, aéroports, centres commerciaux", "60 pers/min"],
        ],
      },
    },
    {
      heading: "Contrôle d'accès véhicules",
      bullets: [
        "Barrières de bras — zones résidentielles et publiques",
        "Compatibles : cartes RFID, télécommandes, boutons poussoirs",
        "Bloqueurs de routes et barrières champignons pour zones sécurisées",
      ],
    },
  ],
};

export const pdfTourniquets: ArticlePDFData = {
  title: "Tourniquets & Couloirs sécurisés",
  subtitle: "Trois types d'équipements pour contrôler vos flux piétons : haute sécurité, compact ou architectural.",
  tag: "Contrôle d'accès piétons",
  sections: [
    {
      heading: "Tourniquet barreaudé — Haute sécurité",
      paragraphs: ["Franchissement unipersonnel, ancrage sol robuste, sens unique ou bidirectionnel."],
      table: {
        headers: ["Paramètre", "Valeur"],
        rows: [
          ["Mode", "Unidirectionnel ou bidirectionnel"],
          ["Débit", "Jusqu'à 30 personnes/min"],
          ["Alimentation", "220V AC"],
          ["Finition", "Inox brossé 304"],
        ],
      },
    },
    {
      heading: "Tourniquet tripode — Compact",
      paragraphs: ["Unicité de passage, idéal pour entrées salariés. Lecteur intégré ou pilotage déporté."],
      table: {
        headers: ["Paramètre", "Valeur"],
        rows: [
          ["Mode", "Unipersonnel"],
          ["Lecteur", "Badge, biométrie, code PIN"],
          ["Finition", "Inox ou ABS"],
        ],
      },
    },
    {
      heading: "Couloir sécurisé — Flux rapide",
      paragraphs: ["Jusqu'à 2× plus rapide qu'un tripode. Design verre + acier, intégration architecturale aisée."],
      bullets: ["Débit jusqu'à 60 personnes/min", "Lecteur encastré discret", "Bidirectionnel possible"],
    },
  ],
};

export const pdfAntiIntrusion: ArticlePDFData = {
  title: "Système anti-intrusion",
  subtitle: "Alarmes filaires et sans fil — zéro fausse alarme avec la double technologie.",
  tag: "Sûreté — Anti-intrusion",
  sections: [
    {
      heading: "Composants du système",
      table: {
        headers: ["Composant", "Rôle"],
        rows: [
          ["Capteur de mouvement IR passif", "Détection de chaleur humaine en déplacement"],
          ["Détecteur d'ouverture (contact magnétique)", "Surveillance portes et fenêtres"],
          ["Centrale d'alarme", "Gestion centralisée de tous les détecteurs"],
          ["Sirène (> 90 dB)", "Alerte sonore en cas d'intrusion détectée"],
          ["Transmetteur GSM", "Notification téléphonique instantanée"],
        ],
      },
    },
    {
      heading: "Types de détecteurs",
      bullets: [
        "Infrarouges actifs (barrière extérieure)",
        "Barrière hyperfréquence (résistante aux intempéries)",
        "Câbles enterrés (périmètre invisible)",
        "Détecteur de choc (bris de vitre)",
        "Rideau IR (ouvertures larges)",
        "Double technologie IR + HF (anti-fausse alarme recommandé)",
      ],
      note: "La double technologie (IR + hyperfréquence) est recommandée par NTI Solutions pour tous les sites. Elle élimine 98% des fausses alarmes.",
    },
  ],
};

export const pdfDetectionIncendie: ArticlePDFData = {
  title: "Détection incendie",
  subtitle: "Systèmes conventionnels et adressables — compatibles Hochiki ESP et Apollo.",
  tag: "Sécurité incendie",
  sections: [
    {
      heading: "Principe de fonctionnement",
      paragraphs: [
        "Un système de détection incendie assure la détection automatique d'un phénomène lié au développement d'un feu, le localise et envoie l'information pour activer les commandes adéquates.",
        "Il comprend au minimum des détecteurs automatiques et un équipement de contrôle et de signalisation (ECS). L'alarme prévient les occupants et provoque l'évacuation.",
      ],
    },
    {
      heading: "Comparatif Conventionnel vs Adressable",
      table: {
        headers: ["Critère", "Conventionnel", "Adressable"],
        rows: [
          ["Localisation", "Par zone (ex: Zone 3)", "Précise au détecteur"],
          ["Capacité", "2, 4 ou 6 zones", "1 à 18 boucles"],
          ["Coût", "Économique", "Plus élevé mais plus précis"],
          ["Adapté pour", "Petits/moyens bâtiments", "Moyens/grands bâtiments"],
          ["Compatibilité", "Hochiki ESP, Apollo", "Hochiki ESP, Apollo"],
        ],
      },
    },
    {
      heading: "Normes applicables",
      bullets: ["NF EN 54 — Systèmes de détection et d'alarme incendie", "NF S 61-970 — Règles d'installation SSIAP"],
    },
  ],
};

export const pdfConventionnel: ArticlePDFData = {
  title: "Système conventionnel",
  subtitle: "Détection par zones — simple, éprouvée, compatible Hochiki ESP et Apollo.",
  tag: "Détection conventionnelle",
  sections: [
    {
      heading: "Spécifications techniques",
      table: {
        headers: ["Paramètre", "Valeur"],
        rows: [
          ["Zones", "2, 4 ou 6 zones"],
          ["Relais programmables", "3"],
          ["Mémoire événements", "3 000 messages"],
          ["Extension", "Carte RS 485"],
          ["Alimentation", "230V AC + batterie secours"],
          ["Compatibilité", "Hochiki ESP, Apollo (Xplorer, XP95, Discover)"],
          ["Certification", "NF EN 54 parties 2 & 4"],
        ],
      },
    },
    {
      heading: "Marques compatibles",
      bullets: [
        "HOCHIKI ESP : détecteurs optiques, thermostatiques, de chaleur, modules d'interface, déclencheurs manuels",
        "Apollo Xplorer : gamme entrée de gamme, large compatibilité",
        "Apollo XP95 : gamme milieu de gamme, fiabilité renforcée",
        "Apollo Discover : gamme premium, diagnostic avancé",
      ],
    },
  ],
};

export const pdfAdressable: ArticlePDFData = {
  title: "Système adressable",
  subtitle: "Solutions F1 et F2 — localisation précise au détecteur, jusqu'à 18 boucles.",
  tag: "Détection adressable",
  sections: [
    {
      heading: "Solution F2 — Petites propriétés",
      paragraphs: ["Centrale 1 boucle adressable, extensible par cartes. Compatible Hochiki ESP et Apollo."],
      bullets: ["1 boucle (extensible)", "Modules pompiers intégrés", "Interfaces RS-485", "Idéal PME, boutiques, bureaux"],
    },
    {
      heading: "Solution F1 — Moyennes et grandes propriétés",
      paragraphs: ["Centrale modulaire. Deux configurations : 2–6 boucles ou 6–18 boucles."],
      table: {
        headers: ["Atout", "Description"],
        rows: [
          ["Fiabilité", "Panneau tactile piézo, pas de pièces d'usure mécanique"],
          ["Flexibilité", "Compatible quasi tous détecteurs du marché"],
          ["Extensibilité", "Serveur web, télémaintenance, modem RNIS/analogique"],
          ["Robustesse", "Résistant aux nettoyages et perturbations CEM"],
        ],
      },
      note: "La Solution F1 est recommandée pour hôtels, hôpitaux, centres commerciaux et sites industriels.",
    },
  ],
};

export const pdfComposants: ArticlePDFData = {
  title: "Composants système incendie",
  subtitle: "Détecteurs, déclencheurs manuels, sirènes et indicateurs d'action.",
  tag: "Composants SSI",
  sections: [
    {
      heading: "Récapitulatif des composants",
      table: {
        headers: ["Composant", "Rôle", "Emplacement typique"],
        rows: [
          ["Détecteur", "Surveillance et détection automatique", "Plafonds, combles, locaux"],
          ["Déclencheur manuel (BBG/DM)", "Signalement manuel par les occupants", "Sorties, couloirs, tous les 30m"],
          ["Sirène / BAAS", "Alarme générale d'évacuation (> 90 dB)", "Zones communes, étages"],
          ["Indicateur d'action (IA)", "Repérage visuel du détecteur actif", "Couloirs, extérieur des locaux"],
        ],
      },
    },
    {
      heading: "Types de détecteurs",
      bullets: [
        "Détecteur de chaleur thermostatique — seuil fixe 57°C ou 90°C",
        "Détecteur optique ponctuel de fumée — feux couvants et fumées visibles",
        "Détecteur optique linéaire — grandes surfaces (entrepôts, atriums)",
        "Détecteur de flamme UV/IR — réaction quasi instantanée aux feux vifs",
      ],
      note: "La norme NF EN 54 impose des critères stricts de sensibilité et de fiabilité pour chaque type de détecteur.",
    },
  ],
};

export const pdfDesenfumage: ArticlePDFData = {
  title: "Désenfumage & compartimentage",
  subtitle: "Évacuer les fumées mortelles, permettre l'évacuation et l'accès des pompiers.",
  tag: "Sécurité — Désenfumage",
  sections: [
    {
      heading: "Systèmes proposés",
      table: {
        headers: ["Système", "Principe", "Application"],
        rows: [
          ["Désenfumage naturel", "Tirage thermique — exutoires SKYDOME", "Toitures, grands volumes"],
          ["Désenfumage mécanique", "Tourelles + extracteurs motorisés", "Sous-sols, parkings, couloirs"],
          ["Écrans de cantonnement", "Délimitation des nappes de fumée", "Complémentaire"],
          ["Portes coupe-feu CF30/60/120", "Compartimentage physique", "ERP, IGH, industries"],
          ["Rideaux d'eau", "Barrière liquide anti-propagation", "Zones à haut risque"],
        ],
      },
    },
    {
      heading: "Normes applicables",
      bullets: [
        "NF S 61-937 — Systèmes de désenfumage (naturel et mécanique)",
        "NF EN 12101 — Contrôle de fumée et de chaleur",
        "IT 246 — Instruction technique désenfumage ERP",
      ],
    },
  ],
};

export const pdfLutteIncendie: ArticlePDFData = {
  title: "Lutte contre les incendies",
  subtitle: "RIA, extinction automatique à gaz et surpresseurs — adaptés à chaque type de risque.",
  tag: "Sécurité — Lutte incendie",
  sections: [
    {
      heading: "Réseau Incendie Armé (RIA / PIA)",
      paragraphs: ["Moyen de première intervention le plus courant. Permet à tout occupant d'intervenir avant l'arrivée des pompiers."],
      table: {
        headers: ["Composant", "Spécification"],
        rows: [
          ["Poste RIA/PIA", "Dévidoir, lance et robinet d'arrêt"],
          ["Tuyauterie", "DN 25 ou DN 19"],
          ["Surpresseur", "Maintien de pression permanente"],
          ["Bâche à eau", "Réserve minimale 30 minutes"],
          ["Norme", "NF EN 671-1 / NF S 62-201"],
        ],
      },
    },
    {
      heading: "Extinction automatique à gaz",
      paragraphs: ["Pour les locaux où l'eau est proscrite : salles serveurs, archives, musées, locaux électriques."],
      table: {
        headers: ["Agent extincteur", "Caractéristiques"],
        rows: [
          ["CO₂", "Naturel, économique, locaux vides uniquement"],
          ["FM-200 (HFC)", "Propre, inoffensif pour les occupants"],
          ["Novec 1230", "GWP très faible, solution la plus écologique"],
          ["Inergen", "Gaz inertes naturels, zéro impact environnemental"],
        ],
      },
      note: "L'agent extincteur est choisi selon le type de risque, la superficie du local et les contraintes d'exploitation.",
    },
  ],
};

export const pdfAPropos: ArticlePDFData = {
  title: "NTI Solutions — À propos",
  subtitle: "Intégrateur de solutions de sécurité et sûreté électronique depuis 2013.",
  tag: "Présentation de l'entreprise",
  sections: [
    {
      heading: "Qui sommes-nous ?",
      paragraphs: [
        "NTI Solutions est une entreprise tunisienne fondée en 2013 à Tunis. Nous intégrons et maintenons des systèmes de sécurité électronique pour les entreprises, industries et institutions tunisiennes.",
        "Notre expertise couvre six domaines : vidéosurveillance, contrôle d'accès, anti-intrusion, détection incendie, désenfumage et lutte contre l'incendie.",
      ],
    },
    {
      heading: "Nos chiffres clés",
      table: {
        headers: ["Indicateur", "Valeur"],
        rows: [
          ["Fondée en", "2013"],
          ["Projets réalisés", "200+"],
          ["Clients actifs", "150+"],
          ["Support", "24h/7j"],
          ["Couverture", "Tout le territoire tunisien"],
        ],
      },
    },
    {
      heading: "Nos valeurs",
      bullets: [
        "Confiance — qualité et rigueur technique depuis 2013",
        "Intégration — multimarques : Hochiki, Apollo, Dahua et autres",
        "Pérennité — de l'avant-projet à la maintenance long terme",
        "Proximité — présents sur tout le territoire national",
      ],
    },
    {
      heading: "Contact",
      paragraphs: ["3, Rue Ibrahim Cherif — Cité Olympique — 1003 Tunis — Tunisie"],
      bullets: ["+216 71 805 945 (fixe)", "+216 29 600 424 (mobile)", "contact@ntisolutions.com.tn"],
    },
  ],
};
