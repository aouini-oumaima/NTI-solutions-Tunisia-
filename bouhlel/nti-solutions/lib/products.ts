export interface ProductFeature {
  icon: string;
  title: string;
  desc: string;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductBenefit {
  title: string;
  desc: string;
}

export interface ProductIndustry {
  icon: string;
  name: string;
  desc: string;
}

export interface ProductFAQItem {
  q: string;
  a: string;
}

export interface ProductSEO {
  title: string;
  description: string;
}

export interface Product {
  slug: string;
  name: string;
  category: string;
  categorySlug: "videosurveillance" | "controle-acces" | "securite-incendie";
  tagline: string;
  description: string;
  heroImage: string;
  /** Transparent-background PNG — shown on dark cards with drop-shadow */
  nobgImage?: string;
  gallery: string[];
  badge?: string;
  features: ProductFeature[];
  specs: ProductSpec[];
  benefits: ProductBenefit[];
  industries: ProductIndustry[];
  faq: ProductFAQItem[];
  related: string[];
  seo: ProductSEO;
}

export const products: Product[] = [
  // ─── VIDÉOSURVEILLANCE ───────────────────────────────────────────────────
  {
    slug: "camera-ip",
    name: "Caméras Numériques IP",
    category: "Vidéosurveillance",
    categorySlug: "videosurveillance",
    tagline: "Haute résolution, bande passante maîtrisée",
    description:
      "Les caméras IP procurent des vidéos en haute résolution tout en minimisant la bande passante grâce à la compression H.265+. La visualisation peut être effectuée par ordinateur, décodeur, PDA ou smartphone, depuis n'importe quel endroit du monde. Idéales pour les installations modernes nécessitant une qualité d'image irréprochable et une gestion centralisée via réseau informatique.",
    heroImage: "/images/Les caméras Numériques IP.jpg",
    nobgImage: "/images/camera-ip-nobg.png",
    gallery: [
      "/images/Les caméras Numériques IP.jpg",
      "/images/Les caméras numériques CCTV.jpg",
      "/images/Caméras PTZ.jpg",
    ],
    badge: "IP66",
    features: [
      {
        icon: "Wifi",
        title: "Transmission IP",
        desc: "Flux vidéo transmis via réseau informatique standard, compatible PoE (Power over Ethernet).",
      },
      {
        icon: "Maximize2",
        title: "Haute résolution",
        desc: "Résolutions de 2 à 12 mégapixels pour une identification précise des personnes et des plaques.",
      },
      {
        icon: "Smartphone",
        title: "Accès à distance",
        desc: "Visualisation sur ordinateur, tablette ou smartphone via application dédiée ou navigateur web.",
      },
      {
        icon: "HardDrive",
        title: "Compression avancée",
        desc: "Codec H.265+ pour une réduction de la bande passante et du stockage allant jusqu'à 50 %.",
      },
    ],
    specs: [
      { label: "Résolution maximale", value: "4K UHD (3840 × 2160 px)" },
      { label: "Compression", value: "H.265+ / H.264 / MJPEG" },
      { label: "Alimentation", value: "PoE IEEE 802.3af/at ou 12 V DC" },
      { label: "Indice de protection", value: "IP66 (résistant aux intempéries)" },
      { label: "Protocole", value: "ONVIF Profile S/G" },
      { label: "Interface réseau", value: "Ethernet 10/100 Mbps" },
    ],
    benefits: [
      {
        title: "Image nette à tout moment",
        desc: "Technologie WDR (Wide Dynamic Range) pour des images claires même en contre-jour.",
      },
      {
        title: "Intégration simplifiée",
        desc: "Compatible avec tout NVR et logiciel VMS du marché via le protocole ONVIF standard.",
      },
      {
        title: "Vision nocturne",
        desc: "Éclairage infrarouge intégré jusqu'à 50 m pour une surveillance efficace la nuit.",
      },
      {
        title: "Alertes intelligentes",
        desc: "Détection de mouvement et analyse vidéo intégrée pour réduire les fausses alarmes.",
      },
    ],
    industries: [
      { icon: "Building2", name: "Bureaux", desc: "Surveillance des accès et des espaces de travail" },
      { icon: "Factory", name: "Industrie", desc: "Contrôle de production et sécurité périmétrique" },
      { icon: "Hotel", name: "Hôtellerie", desc: "Protection des couloirs, halls et parkings" },
      { icon: "ShoppingBag", name: "Commerce", desc: "Prévention de la démarque et gestion des flux" },
      { icon: "GraduationCap", name: "Éducation", desc: "Sécurisation des campus et accès" },
      { icon: "Hospital", name: "Santé", desc: "Surveillance des zones sensibles et pharmacies" },
    ],
    faq: [
      {
        q: "Quelle est la différence entre une caméra IP et une caméra CCTV ?",
        a: "La caméra IP transmet un flux numérique via réseau Ethernet ou Wi-Fi, permettant une résolution bien supérieure et un accès à distance. La CCTV transmet un signal analogique via câble coaxial vers un DVR.",
      },
      {
        q: "Combien de caméras peut gérer un NVR ?",
        a: "Selon le modèle, un NVR peut gérer de 4 à 128 canaux simultanément. NTI Solutions dimensionne le système selon vos besoins et l'espace à surveiller.",
      },
      {
        q: "Les caméras IP fonctionnent-elles sans réseau Wi-Fi ?",
        a: "Oui, la connexion se fait principalement par câble réseau Ethernet (PoE). Le Wi-Fi est une option pour les emplacements sans câblage possible.",
      },
      {
        q: "Quelle durée de stockage est recommandée ?",
        a: "NTI Solutions recommande un minimum de 30 jours d'enregistrement continu. La capacité de stockage est calculée en fonction de la résolution, du nombre de caméras et du taux d'activité.",
      },
    ],
    related: ["camera-ptz", "camera-dome", "enregistreur-nvr"],
    seo: {
      title: "Caméras Numériques IP | Vidéosurveillance HD — NTI Solutions Tunisie",
      description:
        "Caméras IP haute résolution pour entreprises tunisiennes. Accès à distance, compression H.265+, IP66. Installation et maintenance par NTI Solutions.",
    },
  },

  {
    slug: "camera-cctv",
    name: "Caméras Numériques CCTV",
    category: "Vidéosurveillance",
    categorySlug: "videosurveillance",
    tagline: "Surveillance analogique fiable et éprouvée",
    description:
      "Les caméras CCTV sont dotées d'un système permettant la liaison directe à un moniteur. La transmission vidéo s'effectue en temps réel via câble coaxial. Pour l'enregistrement, elles se raccordent à un enregistreur numérique DVR. Solution économique et robuste, idéale pour moderniser progressivement un réseau analogique existant sans remplacement total de l'infrastructure.",
    heroImage: "/images/Les caméras numériques CCTV.jpg",
    nobgImage: "/images/camera-cctv-nobg.png",
    gallery: [
      "/images/Les caméras numériques CCTV.jpg",
      "/images/Les caméras Numériques IP.jpg",
      "/images/equipement-de-gestion-DVR.jpg",
    ],
    badge: "HDCVI",
    features: [
      {
        icon: "Cable",
        title: "Transmission coaxiale",
        desc: "Signal stable sur longues distances via câble coaxial, sans interférences réseau.",
      },
      {
        icon: "Monitor",
        title: "Liaison directe moniteur",
        desc: "Affichage temps réel sur écran analogique ou numérique sans latence perceptible.",
      },
      {
        icon: "HardDrive",
        title: "Compatible DVR",
        desc: "Raccordement natif aux enregistreurs DVR pour archivage local des séquences vidéo.",
      },
      {
        icon: "ShieldCheck",
        title: "Installation simplifiée",
        desc: "Infrastructure câble coaxial réutilisable — transition numérique économique.",
      },
    ],
    specs: [
      { label: "Résolution", value: "2 MP (1080p) HDCVI / AHD / HDTVI" },
      { label: "Signal de sortie", value: "Composite / HDCVI / AHD" },
      { label: "Longueur câble", value: "Jusqu'à 500 m (coaxial RG59)" },
      { label: "Alimentation", value: "12 V DC" },
      { label: "Indice de protection", value: "IP66" },
      { label: "Température", value: "-30 °C à +60 °C" },
    ],
    benefits: [
      {
        title: "Coût d'installation maîtrisé",
        desc: "Réutilisation du câblage coaxial existant pour limiter les coûts de migration.",
      },
      {
        title: "Fiabilité éprouvée",
        desc: "Technologie mature, stable et robuste, sans dépendance au réseau informatique.",
      },
      {
        title: "Vision nocturne IR",
        desc: "LEDs infrarouges intégrées pour une surveillance efficace en l'absence de lumière.",
      },
      {
        title: "Compatibilité universelle",
        desc: "Fonctionne avec tous les DVR et moniteurs analogiques du marché.",
      },
    ],
    industries: [
      { icon: "Building2", name: "Petits commerces", desc: "Solution économique pour boutiques et restaurants" },
      { icon: "Factory", name: "Entrepôts", desc: "Surveillance des zones de stockage et de chargement" },
      { icon: "Home", name: "Résidentiel", desc: "Protection des villas et appartements" },
      { icon: "Car", name: "Parkings", desc: "Contrôle des véhicules en entrée et sortie" },
      { icon: "ShoppingBag", name: "Commerce", desc: "Prévention des vols en surface de vente" },
      { icon: "Landmark", name: "Collectivités", desc: "Surveillance des espaces publics et mairies" },
    ],
    faq: [
      {
        q: "Peut-on migrer d'un système CCTV vers l'IP sans tout recâbler ?",
        a: "Oui, grâce aux enregistreurs XVR hybrides ou aux convertisseurs IP-coaxial. NTI Solutions étude le meilleur plan de migration selon votre infrastructure.",
      },
      {
        q: "La résolution CCTV est-elle suffisante pour identifier des personnes ?",
        a: "Les caméras CCTV modernes en HDCVI 1080p offrent une résolution suffisante pour l'identification dans la majorité des usages. Pour des besoins plus exigeants, nous recommandons le passage à l'IP.",
      },
      {
        q: "Quelle est la distance maximale de câblage ?",
        a: "Avec du câble coaxial RG59 de qualité, la portée peut atteindre 300 à 500 m selon la technologie (HDCVI, AHD). Des amplificateurs de signal permettent d'étendre davantage.",
      },
      {
        q: "Le DVR peut-il être consulté à distance ?",
        a: "Oui, les DVR modernes disposent d'une connexion réseau pour la consultation à distance via application mobile ou navigateur web.",
      },
    ],
    related: ["enregistreur-dvr", "camera-ip", "enregistreur-xvr"],
    seo: {
      title: "Caméras CCTV Analogiques | Surveillance fiable — NTI Solutions Tunisie",
      description:
        "Caméras CCTV HDCVI/AHD pour entreprises et commerces. Solution économique compatible DVR. Installation complète en Tunisie par NTI Solutions.",
    },
  },

  {
    slug: "camera-immobile",
    name: "Caméras Immobiles",
    category: "Vidéosurveillance",
    categorySlug: "videosurveillance",
    tagline: "Champ de vision fixe, clair et dissuasif",
    description:
      "Les caméras immobiles offrent un champ de vision fixe, clair et fortement dissuasif. Équipées d'une monture CS et d'un objectif interchangeable, elles s'adaptent à chaque configuration de site. Leur présence visible constitue un deterrent efficace contre les actes malveillants. Solution polyvalente pour la surveillance intérieure et extérieure des locaux professionnels.",
    heroImage: "/images/Caméras immobiles.jpg",
    gallery: [
      "/images/Caméras immobiles.jpg",
      "/images/Caméras Fixed bullet.jpg",
      "/images/Caméras dômes fixes.jpg",
    ],
    features: [
      {
        icon: "Eye",
        title: "Vision fixe précise",
        desc: "Champ de vision stable et calibré pour surveiller un point d'intérêt défini sans déviation.",
      },
      {
        icon: "Settings",
        title: "Objectif interchangeable",
        desc: "Monture CS compatible avec une large gamme d'objectifs, du grand angle au téléobjectif.",
      },
      {
        icon: "Sun",
        title: "Effet dissuasif",
        desc: "Format visible et reconnaissable, jouant un rôle actif de deterrent psychologique.",
      },
      {
        icon: "Shield",
        title: "Construction robuste",
        desc: "Boîtier résistant aux conditions climatiques et aux tentatives de sabotage.",
      },
    ],
    specs: [
      { label: "Monture objectif", value: "CS (compatible C avec adaptateur)" },
      { label: "Capteur", value: "CMOS 1/2.7\" à 1/1.8\"" },
      { label: "Résolution", value: "1080p à 4 MP selon modèle" },
      { label: "Objectif fourni", value: "2.8 mm / 3.6 mm / 6 mm (au choix)" },
      { label: "Indice de protection", value: "IP65" },
      { label: "Vision nocturne", value: "Jusqu'à 30 m (IR)" },
    ],
    benefits: [
      { title: "Dissuasion visible", desc: "Présence physique apparente qui décourage les actes malveillants." },
      { title: "Adaptabilité optique", desc: "Changez l'objectif selon l'évolution de votre site sans changer la caméra." },
      { title: "Fiabilité mécanique", desc: "Absence de pièces mobiles, gage de longévité et de maintenance réduite." },
      { title: "Prix accessible", desc: "Solution économique pour couvrir un grand nombre de points de surveillance." },
    ],
    industries: [
      { icon: "Building2", name: "Bureaux", desc: "Entrées, couloirs, zones de réception" },
      { icon: "Warehouse", name: "Entrepôts", desc: "Zones de stockage et de déchargement" },
      { icon: "ShoppingBag", name: "Commerce", desc: "Caisses, rayons, réserves" },
      { icon: "Landmark", name: "Institutions", desc: "Mairies, tribunaux, centres administratifs" },
      { icon: "Fuel", name: "Stations-service", desc: "Pompes, boutiques, périmètre" },
      { icon: "Home", name: "Résidentiel", desc: "Portails, garages, périmètre de propriété" },
    ],
    faq: [
      {
        q: "Peut-on changer l'objectif soi-même ?",
        a: "L'échange d'objectif CS est techniquement simple, mais nécessite une refocalisation précise. NTI Solutions recommande de confier cette opération à un technicien pour garantir une image nette.",
      },
      {
        q: "Quelle distance couvre une caméra immobile ?",
        a: "La couverture dépend de l'objectif choisi. Un objectif 2.8 mm couvre une zone large (environ 90°) tandis qu'un 12 mm permet de surveiller jusqu'à 80–100 m avec précision.",
      },
      {
        q: "Est-elle adaptée à l'extérieur ?",
        a: "Oui, avec un indice de protection IP65 minimum et éventuellement un boîtier de protection supplémentaire pour les sites exposés au soleil intense ou aux embruns.",
      },
      {
        q: "Peut-on l'intégrer à un système d'alarme ?",
        a: "Oui, la sortie d'alarme de la caméra peut déclencher une sirène ou notifier le système d'alarme en cas de détection de mouvement.",
      },
    ],
    related: ["camera-bullet", "camera-dome", "camera-ip"],
    seo: {
      title: "Caméras Immobiles | Surveillance fixe et dissuasive — NTI Solutions Tunisie",
      description:
        "Caméras à champ fixe avec objectif CS interchangeable. Efficaces en intérieur et extérieur. Installation professionnelle en Tunisie.",
    },
  },

  {
    slug: "camera-bullet",
    name: "Caméras Fixed Bullet",
    category: "Vidéosurveillance",
    categorySlug: "videosurveillance",
    tagline: "Compactes, puissantes, résistantes — intérieur et extérieur",
    description:
      "Les caméras Fixed Bullet se distinguent par leur format mince et compact, leur éclairage infrarouge intégré et leur haute résolution. Conçues pour fonctionner en intérieur comme en extérieur, elles supportent les conditions climatiques difficiles. Leur design cylindrique discret permet une installation rapide sur murs, plafonds ou poteaux, avec une orientation précise vers la zone à surveiller.",
    heroImage: "/images/Caméras Fixed bullet.jpg",
    nobgImage: "/images/camera-bullet-nobg.png",
    gallery: [
      "/images/Caméras Fixed bullet.jpg",
      "/images/Caméras immobiles.jpg",
      "/images/Les caméras Numériques IP.jpg",
    ],
    badge: "IP67",
    features: [
      {
        icon: "ZapOff",
        title: "Éclairage IR longue portée",
        desc: "LEDs infrarouges pour une vision nocturne nette jusqu'à 60 m sans éclairage ambiant.",
      },
      {
        icon: "Maximize2",
        title: "Haute résolution",
        desc: "Capteur de 2 à 8 mégapixels pour une identification précise des personnes et des véhicules.",
      },
      {
        icon: "Wind",
        title: "Résistance aux intempéries",
        desc: "Boîtier IP67 étanche à la poussière et aux projections d'eau — usage extérieur garanti.",
      },
      {
        icon: "Crosshair",
        title: "Orientation précise",
        desc: "Support orientable permettant de viser exactement la zone cible après installation.",
      },
    ],
    specs: [
      { label: "Résolution", value: "2 MP à 8 MP (1080p à 4K)" },
      { label: "Portée infrarouge", value: "30 à 60 m" },
      { label: "Ouverture angulaire", value: "Selon objectif (2.8 mm → ~107°, 6 mm → ~55°)" },
      { label: "Indice de protection", value: "IP67 / IK10 (anti-vandalisme optionnel)" },
      { label: "Température", value: "-40 °C à +60 °C" },
      { label: "Alimentation", value: "PoE ou 12 V DC" },
    ],
    benefits: [
      { title: "Surveillance périmétrique", desc: "Idéale pour couvrir clôtures, parkings et accès extérieurs." },
      { title: "Vision nocturne étendue", desc: "Infrarouge longue portée pour ne rien rater en pleine obscurité." },
      { title: "Installation universelle", desc: "Compatible surfaces planes, coins et poteaux avec accessoires inclus." },
      { title: "Robustesse garantie", desc: "Conçue pour les environnements industriels et les sites exposés." },
    ],
    industries: [
      { icon: "Car", name: "Parkings", desc: "Surveillance des véhicules et des allées d'accès" },
      { icon: "Factory", name: "Industrie", desc: "Périmètre d'usines, zones de chargement" },
      { icon: "Fence", name: "Périmètre", desc: "Surveillance des clôtures et portails d'entrée" },
      { icon: "Building2", name: "Bureaux", desc: "Façades extérieures et zones de service" },
      { icon: "Hotel", name: "Hôtels", desc: "Jardins, piscines et accès secondaires" },
      { icon: "Fuel", name: "Stations", desc: "Pompes à carburant et abords de station" },
    ],
    faq: [
      {
        q: "Quelle est la différence entre une Bullet et une caméra dôme ?",
        a: "La caméra Bullet est directionnelle et visible, offrant un effet dissuasif et une longue portée IR. La caméra dôme est plus discrète et l'orientation de son objectif est cachée. Les deux sont complémentaires.",
      },
      {
        q: "Peut-elle fonctionner en plein soleil tunisien ?",
        a: "Oui, les modèles professionnels intègrent un visière anti-lumière solaire (sun shield) et fonctionnent jusqu'à +60 °C. Des matériaux UV-résistants protègent le boîtier sur le long terme.",
      },
      {
        q: "Faut-il un permis pour installer des caméras extérieures en Tunisie ?",
        a: "La réglementation tunisienne exige que les caméras ne filmant pas la voie publique restent dans le périmètre privé. NTI Solutions vous accompagne dans la conformité réglementaire.",
      },
      {
        q: "Quelle est la durée de vie d'une caméra Bullet ?",
        a: "Avec une maintenance régulière (nettoyage, vérification des connexions), une caméra de qualité professionnelle a une durée de vie de 7 à 10 ans. NTI Solutions propose des contrats de maintenance.",
      },
    ],
    related: ["camera-immobile", "camera-dome", "camera-ptz"],
    seo: {
      title: "Caméras Fixed Bullet | Surveillance extérieure IR — NTI Solutions Tunisie",
      description:
        "Caméras bullet haute résolution, infrarouge longue portée, IP67. Idéales pour périmètres et extérieurs. Installation professionnelle en Tunisie.",
    },
  },

  {
    slug: "camera-dome",
    name: "Caméras Dômes Fixes",
    category: "Vidéosurveillance",
    categorySlug: "videosurveillance",
    tagline: "Discrètes, anti-sabotage, orientation cachée",
    description:
      "Les caméras dômes fixes se distinguent par leur boîtier dôme protégé contre le déréglage et les chocs. L'orientation cachée de l'objectif derrière le dôme fumé empêche les individus malveillants de déterminer exactement quelle zone est surveillée, amplifiant l'effet dissuasif. Conçues pour s'intégrer élégamment aux environnements commerciaux, hôteliers et tertiaires.",
    heroImage: "/images/Caméras dômes fixes.jpg",
    gallery: [
      "/images/Caméras dômes fixes.jpg",
      "/images/Caméras Fixed bullet.jpg",
      "/images/Caméras immobiles.jpg",
    ],
    badge: "IK10",
    features: [
      {
        icon: "Shield",
        title: "Anti-vandalisme IK10",
        desc: "Boîtier dôme résistant aux chocs et tentatives de déréglage ou de sabotage physique.",
      },
      {
        icon: "EyeOff",
        title: "Orientation cachée",
        desc: "Dôme fumé rendant l'angle de visée de l'objectif indéterminable de l'extérieur.",
      },
      {
        icon: "Palette",
        title: "Design discret",
        desc: "Format encastrable au plafond, intégration architecturale parfaite dans les espaces soignés.",
      },
      {
        icon: "Maximize2",
        title: "Grand angle optionnel",
        desc: "Disponible avec objectif varifocal pour ajuster la couverture sans démontage.",
      },
    ],
    specs: [
      { label: "Résolution", value: "2 à 5 MP (Full HD à 5 MP)" },
      { label: "Montage", value: "Plafond encastré ou apparent, mural" },
      { label: "Résistance chocs", value: "IK10 (protection vandal)" },
      { label: "Indice de protection", value: "IP66 (extérieur) / IP54 (intérieur)" },
      { label: "Vision nocturne", value: "IR intégré jusqu'à 30 m" },
      { label: "Angle de vue", value: "90° à 360° (panoramique selon modèle)" },
    ],
    benefits: [
      { title: "Dissuasion maximale", desc: "L'incertitude sur l'angle de visée dissuade plus efficacement les actes malveillants." },
      { title: "Intégration architecturale", desc: "S'intègre sans disgracier les halls d'hôtel, boutiques et espaces premium." },
      { title: "Protection physique", desc: "IK10 garantit la résistance aux chocs délibérés et tentatives d'obstruction." },
      { title: "Polyvalence", desc: "Utilisable en intérieur et en extérieur avec le modèle IP66 approprié." },
    ],
    industries: [
      { icon: "Hotel", name: "Hôtellerie", desc: "Halls, couloirs, ascenseurs, restaurants" },
      { icon: "ShoppingBag", name: "Commerce", desc: "Surfaces de vente, caisses, réserves" },
      { icon: "Building2", name: "Bureaux", desc: "Open-space, salles de réunion, accueil" },
      { icon: "GraduationCap", name: "Éducation", desc: "Couloirs, cantines, bibliothèques" },
      { icon: "Hospital", name: "Santé", desc: "Couloirs, urgences, pharmacies" },
      { icon: "Landmark", name: "Banques", desc: "Guichets, coffres, zones d'attente" },
    ],
    faq: [
      {
        q: "Peut-on savoir dans quelle direction vise une caméra dôme ?",
        a: "Non, c'est précisément l'avantage du dôme fumé — l'angle de visée reste indéterminable depuis l'extérieur, ce qui maximise l'effet dissuasif.",
      },
      {
        q: "La caméra dôme convient-elle aux plafonds hauts ?",
        a: "Pour les plafonds dépassant 4–5 m, une caméra dôme avec objectif téléobjectif ou une caméra Bullet directionnelle sera plus adaptée. NTI Solutions préconise la solution selon la hauteur de vos locaux.",
      },
      {
        q: "L'installation au plafond nécessite-t-elle des travaux importants ?",
        a: "Non, les caméras dômes modernes s'installent avec un perçage minimal. Le passage de câble peut souvent se faire dans les faux-plafonds existants.",
      },
      {
        q: "Quelle différence entre IK08 et IK10 ?",
        a: "L'IK10 résiste à un impact de 20 joules (équivalent d'un marteau), contre 5 joules pour l'IK08. Pour les espaces publics ou exposés, nous recommandons systématiquement l'IK10.",
      },
    ],
    related: ["camera-bullet", "camera-ptz", "camera-ip"],
    seo: {
      title: "Caméras Dômes Fixes | Anti-vandalisme IK10 — NTI Solutions Tunisie",
      description:
        "Caméras dômes discrètes, anti-vandalisme IK10, orientation cachée. Parfaites pour hôtels, commerces et bureaux. Installation en Tunisie par NTI Solutions.",
    },
  },

  {
    slug: "camera-ptz",
    name: "Caméras PTZ",
    category: "Vidéosurveillance",
    categorySlug: "videosurveillance",
    tagline: "Pan-Tilt-Zoom — couverture totale avec zoom x32",
    description:
      "Les caméras PTZ (Pan-Tilt-Zoom) sont motorisées et tournent, s'inclinent et zooment à la demande. Elles couvrent à la fois de vastes zones étendues et permettent d'identifier les moindres détails grâce au zoom optique pouvant atteindre x32. Idéales pour les grands espaces nécessitant une surveillance active et une réaction rapide aux événements en temps réel.",
    heroImage: "/images/Caméras PTZ.jpg",
    nobgImage: "/images/camera-ptz-hero.png",
    gallery: [
      "/images/camera-ptz-hero.png",
      "/images/Caméras PTZ.jpg",
      "/images/Les caméras Numériques IP.jpg",
    ],
    badge: "Zoom ×32",
    features: [
      {
        icon: "RotateCw",
        title: "Rotation 360°",
        desc: "Panoramique continu sans zone morte, couvrant l'intégralité d'un périmètre.",
      },
      {
        icon: "ZoomIn",
        title: "Zoom optique x32",
        desc: "Identification précise à grande distance sans perte de qualité d'image numérique.",
      },
      {
        icon: "Cpu",
        title: "Suivi automatique",
        desc: "Auto-tracking intelligent qui suit un sujet en mouvement dans le champ de surveillance.",
      },
      {
        icon: "MapPin",
        title: "Positions préréglées",
        desc: "Jusqu'à 300 positions mémorisées avec déplacement automatique selon des rondages programmés.",
      },
    ],
    specs: [
      { label: "Zoom optique", value: "Jusqu'à ×32 optique + ×16 numérique" },
      { label: "Panoramique", value: "0° à 360° continu (rotation illimitée)" },
      { label: "Inclinaison", value: "-15° à +90°" },
      { label: "Vitesse de rotation", value: "Jusqu'à 400°/s" },
      { label: "Résolution", value: "2 à 4 MP Full HD / 4K selon modèle" },
      { label: "Positions préréglées", value: "255 à 300 positions" },
    ],
    benefits: [
      { title: "Une caméra pour plusieurs zones", desc: "Remplace plusieurs caméras fixes grâce à sa couverture totale en rotation." },
      { title: "Réponse aux incidents", desc: "L'opérateur oriente la caméra instantanément vers tout point d'alerte." },
      { title: "Rondages automatiques", desc: "Programmation de tournées automatiques sans intervention humaine." },
      { title: "Identificationlongue distance", desc: "Zoom optique puissant pour lire une plaque à 50 m ou identifier un visage." },
    ],
    industries: [
      { icon: "Car", name: "Parkings", desc: "Surveillance de grands parkings avec une seule caméra" },
      { icon: "Factory", name: "Industrie", desc: "Périmètres d'usines et zones logistiques étendues" },
      { icon: "Landmark", name: "Espaces publics", desc: "Places, esplanades, centres commerciaux" },
      { icon: "Plane", name: "Aéroports", desc: "Zones d'embarquement, pistes, périmètre" },
      { icon: "Hotel", name: "Hôtellerie", desc: "Jardins, piscines, périmètre extérieur" },
      { icon: "Anchor", name: "Ports", desc: "Surveillance des quais et bassins portuaires" },
    ],
    faq: [
      {
        q: "Une PTZ peut-elle remplacer plusieurs caméras fixes ?",
        a: "Dans certaines configurations, une PTZ couvre ce que 8 à 12 caméras fixes feraient, mais elle ne peut surveiller qu'un point à la fois. L'idéal est de la combiner avec des caméras fixes pour une couverture totale.",
      },
      {
        q: "Quelle est la vitesse de déplacement d'une caméra PTZ ?",
        a: "Les modèles professionnels atteignent 400°/s en panoramique et 300°/s en inclinaison, permettant un positionnement quasi instantané vers n'importe quel point.",
      },
      {
        q: "Le suivi automatique fonctionne-t-il de nuit ?",
        a: "Oui, couplé à un éclairage IR ou aux caméras thermiques complémentaires, le suivi automatique est opérationnel en toutes conditions lumineuses.",
      },
      {
        q: "Faut-il un opérateur permanent pour les PTZ ?",
        a: "Non, les PTZ modernes fonctionnent de manière autonome avec des rondages programmés et le suivi automatique. L'opérateur intervient uniquement lors d'alertes.",
      },
    ],
    related: ["camera-dome", "camera-thermique", "camera-ip"],
    seo: {
      title: "Caméras PTZ Pan-Tilt-Zoom | Zoom ×32 — NTI Solutions Tunisie",
      description:
        "Caméras PTZ motorisées, zoom optique ×32, suivi automatique. Couverture 360° pour grands espaces. Installation et maintenance en Tunisie par NTI Solutions.",
    },
  },

  {
    slug: "camera-thermique",
    name: "Caméras Thermiques",
    category: "Vidéosurveillance",
    categorySlug: "videosurveillance",
    tagline: "Détection dans l'obscurité absolue par rayonnement thermique",
    description:
      "Les caméras thermiques détectent le rayonnement infrarouge émis par tout corps chaud, permettant une surveillance dans l'obscurité absolue, à travers la fumée ou par mauvais temps. Elles ne nécessitent aucune source lumineuse et sont insensibles aux leurres visuels. Solution de référence pour la sécurité périmétrique critique, les zones industrielles dangereuses et la détection d'intrusion en conditions extrêmes.",
    heroImage: "/images/Caméras thermiques.jpg",
    nobgImage: "/images/camera-thermique-nobg.png",
    gallery: [
      "/images/Caméras thermiques.jpg",
      "/images/Caméras PTZ.jpg",
      "/images/Les caméras Numériques IP.jpg",
    ],
    badge: "FLIR Ready",
    features: [
      {
        icon: "Thermometer",
        title: "Détection par chaleur",
        desc: "Capture le rayonnement infrarouge des corps chauds — indépendant de toute source lumineuse.",
      },
      {
        icon: "CloudFog",
        title: "Vision à travers la fumée",
        desc: "Efficace même en présence de fumée, brouillard, pluie ou poussière dense.",
      },
      {
        icon: "AlertTriangle",
        title: "Zéro fausse alarme",
        desc: "Algorithmes de détection distinguant humains, véhicules et animaux avec précision.",
      },
      {
        icon: "Moon",
        title: "Surveillance 24/7",
        desc: "Opérationnelle en toutes conditions lumineuses, de jour comme dans l'obscurité totale.",
      },
    ],
    specs: [
      { label: "Résolution capteur", value: "256×192 à 1280×1024 px (thermique)" },
      { label: "Sensibilité thermique", value: "< 50 mK (NETD)" },
      { label: "Détection humain", value: "Jusqu'à 400 m selon résolution" },
      { label: "Portée véhicule", value: "Jusqu'à 1 200 m" },
      { label: "Longueur d'onde", value: "8–14 µm (infrarouge lointain)" },
      { label: "Température", value: "-40 °C à +70 °C" },
    ],
    benefits: [
      { title: "Surveillance 24h/24", desc: "Indépendante de l'éclairage, active de jour comme de nuit sans aucun éclairage additionnel." },
      { title: "Périmètre critique", desc: "Idéale pour les zones à risque élevé nécessitant une détection avant intrusion." },
      { title: "Détection précoce incendie", desc: "Détecte les points chauds et départs de feu avant que les flammes ne se déclarent." },
      { title: "Réduction des fausses alarmes", desc: "Classification automatique des cibles pour éliminer les alertes non pertinentes." },
    ],
    industries: [
      { icon: "Factory", name: "Industrie pétrolière", desc: "Raffineries, oléoducs, zones à risque incendie" },
      { icon: "Anchor", name: "Ports", desc: "Surveillance périmétrique des infrastructures portuaires" },
      { icon: "Shield", name: "Militaire", desc: "Sécurisation de bases et d'infrastructures critiques" },
      { icon: "Zap", name: "Énergie", desc: "Centrales électriques, barrages, sous-stations" },
      { icon: "Trees", name: "Forêts", desc: "Détection précoce d'incendies de forêt" },
      { icon: "Plane", name: "Aéroports", desc: "Sécurisation périmétrique des pistes et zones restreintes" },
    ],
    faq: [
      {
        q: "Une caméra thermique remplace-t-elle une caméra visible ?",
        a: "Non, elle la complète. La thermique détecte l'intrusion à grande distance et en toute obscurité, tandis que la caméra visible fournit une image probatoire identifiable pour les enregistrements.",
      },
      {
        q: "Peut-on identifier un visage avec une caméra thermique ?",
        a: "Les caméras thermiques permettent de détecter et compter des personnes, mais pas d'identification faciale. Pour l'identification, il faut une caméra visible HD complémentaire.",
      },
      {
        q: "Une caméra thermique peut-elle détecter un départ de feu ?",
        a: "Oui, c'est l'une de ses applications clés. Elle détecte les points chauds anormaux avant même que la fumée ne soit visible, permettant une intervention précoce.",
      },
      {
        q: "Quel est le coût comparé à une caméra classique ?",
        a: "Les caméras thermiques sont plus onéreuses, mais une seule peut remplacer plusieurs caméras IR classiques sur un périmètre nocturne. NTI Solutions analyse le rapport coût/couverture pour votre projet.",
      },
    ],
    related: ["camera-ptz", "camera-ip", "camera-bullet"],
    seo: {
      title: "Caméras Thermiques | Détection périmétrique 24/7 — NTI Solutions Tunisie",
      description:
        "Caméras thermiques pour surveillance dans l'obscurité totale, fumée et mauvais temps. Détection d'intrusion et de feu. Installation en Tunisie par NTI Solutions.",
    },
  },

  {
    slug: "enregistreur-dvr",
    name: "Enregistreur DVR",
    category: "Vidéosurveillance",
    categorySlug: "videosurveillance",
    tagline: "Enregistrement numérique fiable pour systèmes analogiques",
    description:
      "Le DVR (Digital Video Recorder) enregistre le signal vidéo numérique provenant de caméras analogiques sur disque dur, mémoire flash, DVD ou CD. Solution robuste et éprouvée pour les installations CCTV existantes. Compatible avec les caméras HDCVI, AHD et HDTVI, le DVR offre une qualité d'enregistrement supérieure tout en préservant l'infrastructure analogique en place.",
    heroImage: "/images/equipement-de-gestion-DVR.jpg",
    nobgImage: "/images/dvr-nobg.png",
    gallery: [
      "/images/equipement-de-gestion-DVR.jpg",
      "/images/equipement-de-gestion-NVR.jpg",
      "/images/equipement-de-gestion-XVR.jpg",
    ],
    features: [
      {
        icon: "HardDrive",
        title: "Stockage local",
        desc: "Enregistrement sur disque dur interne jusqu'à 8 To par baie selon le modèle.",
      },
      {
        icon: "Monitor",
        title: "Sortie HDMI/VGA",
        desc: "Affichage direct sur moniteur avec interface de gestion intuitive et navigation par souris.",
      },
      {
        icon: "Wifi",
        title: "Accès à distance",
        desc: "Consultation des enregistrements et surveillance en direct depuis smartphone ou PC.",
      },
      {
        icon: "Camera",
        title: "Multi-canaux",
        desc: "De 4 à 32 canaux simultanés selon le modèle choisi pour votre installation.",
      },
    ],
    specs: [
      { label: "Canaux vidéo", value: "4 / 8 / 16 / 32 selon modèle" },
      { label: "Résolution d'enregistrement", value: "Jusqu'à 5 MP (HDCVI)" },
      { label: "Espace disque max", value: "Jusqu'à 4 × 8 To (HDD 3.5\")" },
      { label: "Compression", value: "H.265+ / H.264" },
      { label: "Sorties vidéo", value: "HDMI + VGA" },
      { label: "Accès réseau", value: "Ethernet 100 Mbps / 1 Gbps" },
    ],
    benefits: [
      { title: "Économique", desc: "Réutilise le câblage coaxial et les caméras existantes sans remplacement complet." },
      { title: "Enregistrement continu", desc: "Fonctionne 24h/24 en enregistrement continu, détection de mouvement ou programmé." },
      { title: "Lecture rapide", desc: "Recherche par date, heure, canal ou événement pour retrouver rapidement une séquence." },
      { title: "Sauvegarde externe", desc: "Export sur clé USB ou DVD, et envoi par email en cas d'alarme." },
    ],
    industries: [
      { icon: "ShoppingBag", name: "Commerce", desc: "Boutiques, supermarchés, centres commerciaux" },
      { icon: "Home", name: "Résidentiel", desc: "Villas, résidences, copropriétés" },
      { icon: "Building2", name: "Bureaux", desc: "Petites et moyennes entreprises" },
      { icon: "Warehouse", name: "Entrepôts", desc: "Stockage et logistique" },
      { icon: "Fuel", name: "Stations-service", desc: "Pompes, boutiques, abords" },
      { icon: "Landmark", name: "Collectivités", desc: "Mairies, écoles, équipements publics" },
    ],
    faq: [
      {
        q: "Quelle capacité de stockage choisir ?",
        a: "Pour 8 caméras 1080p en enregistrement continu, comptez environ 1 To pour 7 jours. NTI Solutions calcule la capacité exacte selon votre nombre de caméras, résolution et durée souhaitée.",
      },
      {
        q: "Le DVR fonctionne-t-il en cas de coupure réseau ?",
        a: "Oui, le DVR enregistre localement sur disque dur. La coupure internet n'affecte que l'accès à distance, pas l'enregistrement local.",
      },
      {
        q: "Peut-on brancher des caméras IP sur un DVR ?",
        a: "Les DVR standards ne supportent pas les caméras IP. Pour mixer caméras analogiques et IP, il faut un XVR (hybride). NTI Solutions recommande le bon équipement selon votre configuration.",
      },
      {
        q: "Comment exporter des preuves vidéo ?",
        a: "Via clé USB directement depuis l'interface du DVR. Les vidéos sont exportées en format standard (MP4 ou AVI) lisibles sur tout ordinateur.",
      },
    ],
    related: ["enregistreur-nvr", "enregistreur-xvr", "camera-cctv"],
    seo: {
      title: "Enregistreur DVR | Gestion vidéo analogique — NTI Solutions Tunisie",
      description:
        "DVR 4 à 32 canaux pour caméras CCTV/HDCVI. Enregistrement HD, accès à distance, stockage jusqu'à 32 To. Fourniture et installation en Tunisie.",
    },
  },

  {
    slug: "enregistreur-nvr",
    name: "Enregistreur NVR",
    category: "Vidéosurveillance",
    categorySlug: "videosurveillance",
    tagline: "Enregistreur réseau IP pour surveillance haute définition",
    description:
      "Le NVR (Network Video Recorder) enregistre les flux vidéo IP provenant du réseau informatique sur disque dur. Conçu pour les caméras IP, il offre des enregistrements en haute définition jusqu'à 4K, une gestion centralisée de multiples sites et une intégration native aux systèmes de gestion vidéo. Solution de référence pour les installations IP modernes et les infrastructures critiques.",
    heroImage: "/images/equipement-de-gestion-NVR.jpg",
    nobgImage: "/images/nvr-nobg.png",
    gallery: [
      "/images/equipement-de-gestion-NVR.jpg",
      "/images/equipement-de-gestion-DVR.jpg",
      "/images/equipement-de-gestion-XVR.jpg",
    ],
    badge: "4K",
    features: [
      {
        icon: "Network",
        title: "Connexion réseau pure",
        desc: "Reçoit les flux IP des caméras via switch réseau ou directement par ports PoE intégrés.",
      },
      {
        icon: "Maximize2",
        title: "Enregistrement 4K",
        desc: "Supporte les caméras jusqu'à 4K (3840×2160) pour une qualité d'image maximale.",
      },
      {
        icon: "Globe",
        title: "Gestion multi-sites",
        desc: "Centralisation des flux de plusieurs sites géographiques sur une interface unique.",
      },
      {
        icon: "Layers",
        title: "Analyse vidéo",
        desc: "Fonctions d'intelligence artificielle : reconnaissance faciale, comptage de personnes, détection d'objet abandonné.",
      },
    ],
    specs: [
      { label: "Canaux vidéo", value: "4 / 8 / 16 / 32 / 64 selon modèle" },
      { label: "Résolution max", value: "4K UHD (3840 × 2160 px)" },
      { label: "Ports PoE intégrés", value: "Selon modèle (4 à 16 ports PoE+)" },
      { label: "Disques durs", value: "Jusqu'à 8 baies × 10 To" },
      { label: "Bande passante entrante", value: "Jusqu'à 320 Mbps" },
      { label: "Protocole", value: "ONVIF / RTSP / propriétaire" },
    ],
    benefits: [
      { title: "Image 4K", desc: "Enregistrement ultra-haute définition pour une identification irréprochable." },
      { title: "Gestion centralisée", desc: "Un seul point de contrôle pour plusieurs sites, visible à distance en temps réel." },
      { title: "PoE intégré", desc: "Alimentation des caméras via le réseau — câblage simplifié, coût réduit." },
      { title: "IA embarquée", desc: "Analyse vidéo intelligente pour détecter les événements pertinents automatiquement." },
    ],
    industries: [
      { icon: "Building2", name: "Grandes entreprises", desc: "Multi-sites, sièges sociaux, centres de données" },
      { icon: "Hotel", name: "Hôtellerie", desc: "Chaînes hôtelières avec plusieurs établissements" },
      { icon: "Hospital", name: "Santé", desc: "Hôpitaux et cliniques avec surveillance 24/7" },
      { icon: "Landmark", name: "Banques", desc: "Agences et coffres-forts sous haute surveillance" },
      { icon: "Plane", name: "Aéroports", desc: "Infrastructures critiques de transport" },
      { icon: "Factory", name: "Industrie", desc: "Usines et zones de production sécurisées" },
    ],
    faq: [
      {
        q: "Quelle différence entre NVR et DVR ?",
        a: "Le NVR gère exclusivement des caméras IP via réseau, tandis que le DVR gère des caméras analogiques (CCTV). Le NVR offre une résolution supérieure et des fonctionnalités avancées.",
      },
      {
        q: "Le NVR est-il compatible avec toutes les caméras IP ?",
        a: "Les NVR supportent le protocole ONVIF, compatible avec la majorité des caméras IP du marché. Pour les fonctionnalités avancées (IA, analytics), il est préférable d'utiliser le même fabricant.",
      },
      {
        q: "Peut-on consulter les images depuis plusieurs sites différents ?",
        a: "Oui, via l'application de gestion vidéo (VMS) ou l'application mobile, vous accédez à tous vos sites depuis un seul écran, quel que soit l'endroit dans le monde.",
      },
      {
        q: "Quelle redondance de stockage est recommandée ?",
        a: "Pour les sites critiques, NTI Solutions recommande un RAID ou une sauvegarde cloud automatique pour garantir l'intégrité des enregistrements en cas de défaillance disque.",
      },
    ],
    related: ["enregistreur-dvr", "enregistreur-xvr", "camera-ip"],
    seo: {
      title: "Enregistreur NVR | Vidéosurveillance IP 4K — NTI Solutions Tunisie",
      description:
        "NVR 4 à 64 canaux, résolution 4K, ports PoE, analyse vidéo IA. Gestion multi-sites. Fourniture et installation complète en Tunisie.",
    },
  },

  {
    slug: "enregistreur-xvr",
    name: "Enregistreur XVR",
    category: "Vidéosurveillance",
    categorySlug: "videosurveillance",
    tagline: "Hybride multi-technologies — analogique et IP sur un seul appareil",
    description:
      "Le XVR (eXtended Video Recorder) est l'enregistreur hybride de référence pour la transition vers le numérique. Il supporte simultanément les signaux CVBS, HDCVI, AHD, HDTVI et IP sur un même appareil, notamment les modèles Dahua. Idéal pour moderniser progressivement un parc de caméras analogiques en ajoutant des caméras IP sans changer l'enregistreur.",
    heroImage: "/images/equipement-de-gestion-XVR.jpg",
    gallery: [
      "/images/equipement-de-gestion-XVR.jpg",
      "/images/equipement-de-gestion-DVR.jpg",
      "/images/equipement-de-gestion-NVR.jpg",
    ],
    badge: "Multi-HD",
    features: [
      {
        icon: "Layers",
        title: "Multi-technologies",
        desc: "Compatible CVBS, HDCVI, AHD, HDTVI et IP sur le même canal — un seul appareil pour tout.",
      },
      {
        icon: "TrendingUp",
        title: "Migration progressive",
        desc: "Ajoutez des caméras IP progressivement sans remplacer vos caméras analogiques existantes.",
      },
      {
        icon: "Settings",
        title: "Configuration flexible",
        desc: "Chaque canal est configurable indépendamment : analogique ou IP selon les besoins.",
      },
      {
        icon: "HardDrive",
        title: "Stockage unifié",
        desc: "Tous les flux, analogiques et IP, enregistrés sur le même support de stockage.",
      },
    ],
    specs: [
      { label: "Technologies supportées", value: "CVBS / HDCVI / AHD / HDTVI / IP" },
      { label: "Canaux analogiques", value: "4 / 8 / 16 selon modèle" },
      { label: "Canaux IP additionnels", value: "+2 à +8 canaux IP selon modèle" },
      { label: "Résolution max analogique", value: "5 MP (HDCVI 5MP)" },
      { label: "Résolution max IP", value: "4K (caméras IP)" },
      { label: "Marque de référence", value: "Dahua Technology" },
    ],
    benefits: [
      { title: "Investissement protégé", desc: "Conservez vos caméras analogiques existantes tout en intégrant des caméras IP modernes." },
      { title: "Migration sans rupture", desc: "Transition graduelle vers l'IP à votre rythme, sans immobilisation du système." },
      { title: "Gestion unifiée", desc: "Interface unique pour gérer l'ensemble des caméras, quel que soit leur type." },
      { title: "Économie immédiate", desc: "Pas de remplacement du câblage coaxial ni des caméras fonctionnelles en place." },
    ],
    industries: [
      { icon: "Building2", name: "Entreprises en transition", desc: "Modernisation d'un parc de caméras existant" },
      { icon: "ShoppingBag", name: "Commerce", desc: "Boutiques souhaitant évoluer vers l'IP progressivement" },
      { icon: "Hotel", name: "Hôtellerie", desc: "Établissements avec systèmes analogiques en place" },
      { icon: "Factory", name: "Industrie", desc: "Sites industriels avec infrastructure câblée existante" },
      { icon: "Warehouse", name: "Logistique", desc: "Entrepôts et centres de distribution" },
      { icon: "Landmark", name: "Institutions", desc: "Collectivités avec systèmes à moderniser" },
    ],
    faq: [
      {
        q: "Le XVR peut-il vraiment brancher des caméras IP et analogiques simultanément ?",
        a: "Oui, c'est la fonctionnalité clé du XVR. Les canaux standards acceptent les caméras analogiques, et des canaux IP additionnels permettent d'ajouter des caméras réseau.",
      },
      {
        q: "Perd-on de la qualité sur les caméras analogiques avec un XVR ?",
        a: "Non, le XVR enregistre les caméras analogiques à leur résolution native (jusqu'à 5 MP HDCVI), sans dégradation de signal.",
      },
      {
        q: "Quelle marque de XVR recommandez-vous ?",
        a: "NTI Solutions est partenaire Dahua, leader mondial des XVR. Leurs modèles offrent une fiabilité, une longévité et des fonctionnalités inégalées à ce niveau de prix.",
      },
      {
        q: "Peut-on voir les flux XVR depuis un smartphone ?",
        a: "Oui, via l'application DMSS (Dahua Mobile) ou IVMS-4500, vous accédez à tous vos canaux en direct et en relecture depuis n'importe où.",
      },
    ],
    related: ["enregistreur-dvr", "enregistreur-nvr", "camera-cctv"],
    seo: {
      title: "Enregistreur XVR Hybride | Dahua — NTI Solutions Tunisie",
      description:
        "XVR multi-technologies CVBS/HDCVI/AHD/IP. Transition progressive vers la vidéosurveillance IP. Dahua partenaire officiel NTI Solutions en Tunisie.",
    },
  },

  // ─── CONTRÔLE D'ACCÈS ────────────────────────────────────────────────────
  {
    slug: "tourniquet-barreau",
    name: "Tourniquet Barreaudé",
    category: "Contrôle d'accès",
    categorySlug: "controle-acces",
    tagline: "Haut niveau de sécurité — franchissement unipersonnel",
    description:
      "Le tourniquet barreaudé assure un haut niveau de sécurité avec un franchissement strictement unipersonnel pour les piétons. Son ancrage au sol robuste le rend difficile à forcer ou contourner. Configurable en sens unique ou bidirectionnel, il est idéal pour les entrées de sites sécurisés, les zones à accès restreint et les bâtiments à forte exigence de contrôle des flux.",
    heroImage: "/images/systeme-de-tournique-barreaude.jpg",
    nobgImage: "/images/tourniquet-barreau-nobg.png",
    gallery: [
      "/images/systeme-de-tournique-barreaude.jpg",
      "/images/systeme-de-tourniquet-tripod.jpg",
      "/images/couloir.jpg",
    ],
    badge: "Anti-passage forcé",
    features: [
      {
        icon: "UserCheck",
        title: "Passage unipersonnel",
        desc: "Une seule personne à la fois — garantit l'unicité de passage et empêche le tailgating.",
      },
      {
        icon: "Anchor",
        title: "Ancrage robuste",
        desc: "Fixation au sol par scellement — résistant aux tentatives de forçage physique.",
      },
      {
        icon: "Settings",
        title: "Bidirectionnel",
        desc: "Configuration en sens unique ou bidirectionnel selon les besoins de gestion des flux.",
      },
      {
        icon: "CreditCard",
        title: "Intégration lecteur",
        desc: "Compatible avec tout système de lecteur d'accès : badge, carte, biométrie, code PIN.",
      },
    ],
    specs: [
      { label: "Type", value: "Tourniquet pleine hauteur / demi-hauteur barreaudé" },
      { label: "Sens de passage", value: "Unidirectionnel ou bidirectionnel" },
      { label: "Vitesse de passage", value: "15 à 25 personnes/minute" },
      { label: "Alimentation", value: "230 V AC" },
      { label: "Interface", value: "Contact sec / RS-485 / Wiegand" },
      { label: "Finition", value: "Inox brossé / Acier laqué RAL au choix" },
    ],
    benefits: [
      { title: "Sécurité maximale", desc: "Empêche physiquement tout passage non autorisé ou en duo." },
      { title: "Durabilité industrielle", desc: "Construction acier inoxydable pour une utilisation intensive sur 15 ans et plus." },
      { title: "Intégration universelle", desc: "S'intègre à tout système de contrôle d'accès existant ou nouveau." },
      { title: "Mode urgence", desc: "Déblocage automatique en cas d'alarme incendie pour l'évacuation rapide." },
    ],
    industries: [
      { icon: "Factory", name: "Industrie", desc: "Entrées d'usines et zones de production sécurisées" },
      { icon: "Shield", name: "Sites sensibles", desc: "Bases militaires, centres gouvernementaux" },
      { icon: "Landmark", name: "Administrations", desc: "Préfectures, tribunaux, institutions publiques" },
      { icon: "GraduationCap", name: "Universités", desc: "Campus sécurisés et bibliothèques" },
      { icon: "Hospital", name: "Hôpitaux", desc: "Zones restreintes et services critiques" },
      { icon: "Building2", name: "Sièges sociaux", desc: "Accès contrôlé des entreprises" },
    ],
    faq: [
      {
        q: "Quelle différence entre un tourniquet barreaudé et un tripode ?",
        a: "Le barreaudé est plus imposant et offre une sécurité physique plus élevée — difficile à franchir de force. Le tripode est plus compact et convient aux flux moins contraignants comme les entrées de salariés.",
      },
      {
        q: "Peut-on l'intégrer à un badge RFID existant ?",
        a: "Oui, le tourniquet dispose d'interfaces standard (Wiegand, RS-485) compatibles avec la grande majorité des systèmes de contrôle d'accès et lecteurs de badge du marché.",
      },
      {
        q: "Que se passe-t-il en cas de panne électrique ?",
        a: "Selon la configuration choisie, le tourniquet peut se mettre en position libre (passage autorisé) ou verrouillée (sécurité maintenue). Une alimentation de secours UPS peut être ajoutée.",
      },
      {
        q: "Peut-on l'installer en extérieur ?",
        a: "Oui, des versions spéciales extérieur en inox 316L protégé contre la corrosion et les intempéries sont disponibles pour les installations en plein air.",
      },
    ],
    related: ["tourniquet-tripode", "couloir-securise", "controle-ronde"],
    seo: {
      title: "Tourniquet Barreaudé | Contrôle d'accès haute sécurité — NTI Solutions Tunisie",
      description:
        "Tourniquets barreaudés unipersonnels pour sites sécurisés. Anti-passage forcé, intégration badge/biométrie. Installation en Tunisie par NTI Solutions.",
    },
  },

  {
    slug: "tourniquet-tripode",
    name: "Tourniquet Tripode",
    category: "Contrôle d'accès",
    categorySlug: "controle-acces",
    tagline: "Compact, efficace — idéal pour les entrées de personnel",
    description:
      "Le tourniquet tripode est une solution compacte garantissant l'unicité de passage, idéale pour les entrées de salariés dans les bureaux, usines et institutions. Il accepte une seule personne à la fois et est activé par un lecteur d'accès intégré ou piloté à distance par l'opérateur. Son encombrement réduit permet une installation dans des espaces contraints.",
    heroImage: "/images/systeme-de-tourniquet-tripod.jpg",
    nobgImage: "/images/tourniquet-tripode-nobg.png",
    gallery: [
      "/images/systeme-de-tourniquet-tripod.jpg",
      "/images/systeme-de-tournique-barreaude.jpg",
      "/images/couloir.jpg",
    ],
    features: [
      {
        icon: "Minimize2",
        title: "Format compact",
        desc: "Encombrement réduit, s'installe dans des couloirs de 90 cm de large sans travaux lourds.",
      },
      {
        icon: "UserCheck",
        title: "Un passage à la fois",
        desc: "Trois bras en rotation permettant un seul franchissement par autorisation accordée.",
      },
      {
        icon: "CreditCard",
        title: "Lecteur intégré",
        desc: "Lecteur de badge RFID, carte magnétique ou biométrique intégré ou en option externe.",
      },
      {
        icon: "Wifi",
        title: "Pilotage à distance",
        desc: "Ouverture manuelle depuis le poste de gardiennage ou par commande automatisée.",
      },
    ],
    specs: [
      { label: "Dimensions (L×l×H)", value: "280 × 280 × 980 mm (standard)" },
      { label: "Nombre de bras", value: "3 (120° entre chaque bras)" },
      { label: "Débit", value: "Jusqu'à 30 personnes/minute" },
      { label: "Alimentation", value: "230 V AC / 50 Hz" },
      { label: "Interface", value: "Wiegand / RS-485 / contact sec" },
      { label: "Matériau", value: "Inox 304 brossé" },
    ],
    benefits: [
      { title: "Installation rapide", desc: "Mise en service en quelques heures sans génie civil important." },
      { title: "Faible maintenance", desc: "Mécanisme robuste à très faible usure, entretien annuel suffisant." },
      { title: "Enregistrement des passages", desc: "Journal horodaté de tous les passages pour gestion du temps de travail." },
      { title: "Coût maîtrisé", desc: "Solution abordable offrant un bon rapport sécurité/prix pour les PME." },
    ],
    industries: [
      { icon: "Factory", name: "Industrie", desc: "Entrées d'usines, vestiaires, réfectoires" },
      { icon: "Building2", name: "Bureaux", desc: "Halls d'entrée d'entreprises et open spaces" },
      { icon: "GraduationCap", name: "Éducation", desc: "Entrées de lycées, universités et écoles" },
      { icon: "Hospital", name: "Santé", desc: "Accès du personnel soignant et administratif" },
      { icon: "Hotel", name: "Hôtellerie", desc: "Accès staff et zones réservées au personnel" },
      { icon: "ShoppingBag", name: "Commerce", desc: "Accès réserves, entrepôts et zones restreintes" },
    ],
    faq: [
      {
        q: "Peut-on verrouiller le tripode depuis une loge de gardiennage ?",
        a: "Oui, les tripodes sont équipés d'une interface de commande à distance. Le gardien peut autoriser ou bloquer le passage depuis son poste sans se déplacer.",
      },
      {
        q: "Le tripode peut-il se déverrouiller automatiquement en cas d'incendie ?",
        a: "Oui, en mode libre (fail-safe ou fail-secure selon configuration), le tripode s'ouvre automatiquement lors d'une alarme incendie pour faciliter l'évacuation.",
      },
      {
        q: "Comment gère-t-on les personnes à mobilité réduite (PMR) ?",
        a: "On installe généralement une porte PMR battante à portail électromagnétique à côté du tripode, ouverte par badge ou par le gardien, pour les personnes en fauteuil ou avec bagages.",
      },
      {
        q: "Le tripode enregistre-t-il les heures d'entrée/sortie ?",
        a: "Oui, couplé à un logiciel de contrôle d'accès, le tripode enregistre chaque passage avec l'identifiant du badge et l'horodatage — parfait pour la gestion des temps et présences.",
      },
    ],
    related: ["tourniquet-barreau", "couloir-securise", "controle-ronde"],
    seo: {
      title: "Tourniquet Tripode | Contrôle d'accès personnel — NTI Solutions Tunisie",
      description:
        "Tourniquets tripodes compacts pour entrées de personnel. Badge, biométrie, pilotage à distance. Installation et maintenance en Tunisie par NTI Solutions.",
    },
  },

  {
    slug: "couloir-securise",
    name: "Couloir Sécurisé de Passage",
    category: "Contrôle d'accès",
    categorySlug: "controle-acces",
    tagline: "Flux 2× plus rapide, design discret et épuré",
    description:
      "Le couloir sécurisé de passage garantit l'unicité de passage à l'intérieur des bâtiments avec une gestion de flux jusqu'à deux fois plus rapide qu'un tourniquet tripode classique. Son esthétique discrète et épurée s'intègre parfaitement dans les architectures premium — halls bancaires, sièges sociaux, aéroports. Idéal pour les espaces nécessitant à la fois sécurité et fluidité.",
    heroImage: "/images/couloir.jpg",
    gallery: [
      "/images/couloir.jpg",
      "/images/systeme-de-tourniquet-tripod.jpg",
      "/images/controle-dacces-1.jpg",
    ],
    badge: "Flux ×2",
    features: [
      {
        icon: "Zap",
        title: "Débit élevé",
        desc: "Jusqu'à 60 personnes/minute, deux fois plus rapide qu'un tripode traditionnel.",
      },
      {
        icon: "Palette",
        title: "Design premium",
        desc: "Verre trempé ou panneaux inox — s'intègre dans les plus beaux halls d'accueil.",
      },
      {
        icon: "UserCheck",
        title: "Anti-tailgating",
        desc: "Capteurs de détection empêchant le passage de deux personnes avec une seule autorisation.",
      },
      {
        icon: "BarChart3",
        title: "Comptage en temps réel",
        desc: "Statistiques de passage bidirectionnel disponibles en temps réel pour gestion de flux.",
      },
    ],
    specs: [
      { label: "Largeur de passage", value: "600 à 900 mm (PMR en option)" },
      { label: "Débit max", value: "45 à 60 personnes/minute" },
      { label: "Hauteur panneaux", value: "90 à 1 800 mm selon modèle" },
      { label: "Matériau", value: "Inox 304 / Verre trempé 10 mm" },
      { label: "Alimentation", value: "230 V AC" },
      { label: "Interface", value: "Wiegand / OSDP / RS-485 / Ethernet" },
    ],
    benefits: [
      { title: "Flux optimisé", desc: "Réduction des files d'attente grâce à un débit deux fois supérieur au tripode." },
      { title: "Architecture valorisée", desc: "Design épuré qui valorise les espaces d'accueil premium." },
      { title: "Sécurité silencieuse", desc: "Contrôle discret sans barrières apparentes imposantes." },
      { title: "Adaptable PMR", desc: "Version large pour les personnes à mobilité réduite avec commande dédiée." },
    ],
    industries: [
      { icon: "Landmark", name: "Banques", desc: "Agences, sièges, data centers financiers" },
      { icon: "Plane", name: "Aéroports", desc: "Zones d'embarquement et halls de départ" },
      { icon: "Building2", name: "Sièges sociaux", desc: "Grandes entreprises et tours de bureaux" },
      { icon: "Hotel", name: "Hôtels 5 étoiles", desc: "Halls d'accueil premium et conférences" },
      { icon: "GraduationCap", name: "Universités", desc: "Bibliothèques et entrées principales de campus" },
      { icon: "Hospital", name: "Centres médicaux", desc: "Accueil de cliniques et hôpitaux modernes" },
    ],
    faq: [
      {
        q: "Le couloir sécurisé est-il adapté aux visiteurs occasionnels ?",
        a: "Oui, les couloirs peuvent fonctionner en mode temporaire pour les visiteurs avec émission d'un badge visiteur temporaire, traçable et à durée de validité limitée.",
      },
      {
        q: "Que se passe-t-il lors d'une panne ?",
        a: "En mode fail-safe, les panneaux s'ouvrent automatiquement pour ne pas bloquer l'évacuation. En mode fail-secure, ils restent fermés pour maintenir la sécurité selon votre configuration.",
      },
      {
        q: "Peut-on installer un couloir sécurisé sur un sol existant ?",
        a: "Oui, la plupart des modèles s'ancrent sur le sol fini existant avec un perçage minimal. NTI Solutions réalise un levé de plan avant toute installation.",
      },
      {
        q: "Quel est le délai d'installation ?",
        a: "Pour une installation standard (2 à 4 voies), comptez 1 à 2 jours d'installation après fabrication (délai de 4 à 6 semaines selon configuration).",
      },
    ],
    related: ["tourniquet-tripode", "tourniquet-barreau", "controle-vehicules"],
    seo: {
      title: "Couloir Sécurisé de Passage | Design premium — NTI Solutions Tunisie",
      description:
        "Couloirs de contrôle d'accès à haut débit, design verre/inox. Intégration architecturale pour halls premium. Installation et maintenance en Tunisie.",
    },
  },

  {
    slug: "controle-ronde",
    name: "Système de Contrôle de Ronde",
    category: "Contrôle d'accès",
    categorySlug: "controle-acces",
    tagline: "Rondages automatisés et rapports de patrouille horodatés",
    description:
      "Le système de contrôle de ronde automatise la gestion des tours de patrouille dans les lieux à contrôler périodiquement — usines, entrepôts, chantiers, unités militaires. Il définit précisément les moments de contrôle des points de sécurité, enregistre chaque passage et génère automatiquement des rapports détaillés. Garantit la traçabilité complète des rondes et l'accountability des agents de sécurité.",
    heroImage: "/images/systeme-de-comtrole-de-ronde-1.jpg",
    nobgImage: "/images/controle-ronde-nobg.png",
    gallery: [
      "/images/systeme-de-comtrole-de-ronde-1.jpg",
      "/images/controle-dacces-1.jpg",
      "/images/systeme-de-tournique-barreaude.jpg",
    ],
    features: [
      {
        icon: "Clock",
        title: "Planification des rondes",
        desc: "Définissez les horaires et l'ordre des points de contrôle pour chaque agent et chaque shift.",
      },
      {
        icon: "FileText",
        title: "Rapports automatiques",
        desc: "Génération automatique de rapports horodatés détaillant chaque passage par point de contrôle.",
      },
      {
        icon: "MapPin",
        title: "Balises NFC/RFID",
        desc: "Balises installées sur chaque point de contrôle, lues par le terminal portatif de l'agent.",
      },
      {
        icon: "AlertTriangle",
        title: "Alertes de non-conformité",
        desc: "Notification immédiate si une ronde est en retard ou si un point de contrôle est manqué.",
      },
    ],
    specs: [
      { label: "Technologie de lecture", value: "NFC / RFID 125 kHz ou 13.56 MHz" },
      { label: "Terminal de ronde", value: "Boîtier portable IP67, autonomie 72 h" },
      { label: "Capacité", value: "Jusqu'à 10 000 points de contrôle" },
      { label: "Transfert de données", value: "USB / Bluetooth / GPRS / Wi-Fi" },
      { label: "Logiciel", value: "Gestion PC avec exports Excel/PDF" },
      { label: "Alimentation terminal", value: "Batterie Li-Ion rechargeable" },
    ],
    benefits: [
      { title: "Traçabilité totale", desc: "Chaque passage est enregistré avec l'heure, l'agent et le point de contrôle." },
      { title: "Preuve irréfutable", desc: "Rapports horodatés utilisables comme preuve légale en cas d'incident." },
      { title: "Motivation des agents", desc: "Les agents savent que leurs rondes sont vérifiées — gage de sérieux." },
      { title: "Gestion multi-sites", desc: "Superviser les rondes de plusieurs sites depuis un seul logiciel centralisé." },
    ],
    industries: [
      { icon: "Factory", name: "Industrie", desc: "Usines, entrepôts, zones de production" },
      { icon: "Warehouse", name: "Logistique", desc: "Centres de distribution et entrepôts" },
      { icon: "Shield", name: "Militaire", desc: "Bases, casernes et installations sécurisées" },
      { icon: "Building2", name: "Immobilier", desc: "Copropriétés, tours et complexes de bureaux" },
      { icon: "Zap", name: "Énergie", desc: "Centrales, sous-stations et sites techniques" },
      { icon: "Plane", name: "Aéroports", desc: "Périmètre et zones techniques aéroportuaires" },
    ],
    faq: [
      {
        q: "Peut-on surveiller les rondes en temps réel ?",
        a: "Avec les terminaux GPRS/Wi-Fi, oui. Le superviseur voit la position et les relevés de l'agent en temps réel sur le logiciel de gestion. Avec les terminaux USB, la synchronisation se fait à la fin de la ronde.",
      },
      {
        q: "Que se passe-t-il si un agent ne fait pas sa ronde ?",
        a: "Le logiciel génère une alerte automatique (email, SMS) et enregistre l'anomalie dans le rapport. Le superviseur est immédiatement notifié pour intervention.",
      },
      {
        q: "Les balises résistent-elles aux conditions extérieures ?",
        a: "Oui, les balises NFC de ronde sont en résine époxy ou inox, résistantes à l'humidité, la chaleur et le vandalisme. Elles fonctionnent de -20 °C à +70 °C.",
      },
      {
        q: "Combien de points de contrôle peut-on gérer ?",
        a: "Les systèmes professionnels gèrent de quelques dizaines à 10 000 points de contrôle sur un ou plusieurs sites. NTI Solutions dimensionne la solution selon votre périmètre.",
      },
    ],
    related: ["tourniquet-barreau", "controle-vehicules", "anti-intrusion"],
    seo: {
      title: "Contrôle de Ronde | Patrouilles automatisées — NTI Solutions Tunisie",
      description:
        "Systèmes de contrôle de ronde NFC/RFID pour usines, entrepôts et sites militaires. Rapports automatiques horodatés. Installation et formation en Tunisie.",
    },
  },

  {
    slug: "controle-vehicules",
    name: "Contrôle d'Accès Véhicules",
    category: "Contrôle d'accès",
    categorySlug: "controle-acces",
    tagline: "Barrières, bloqueurs et champignons pour zones sécurisées",
    description:
      "Le contrôle d'accès des véhicules assure des zones de transition sûres et contrôlées pour les automobilistes. Les systèmes comprennent des barrières de bras pour zones résidentielles et publiques, des bloqueurs de routes et des champignons de sécurité. Tous compatibles avec cartes d'accès, lecteurs RFID, télécommandes et boutons de commande pour une exploitation souple et sécurisée.",
    heroImage: "/images/VOITURES.jpg",
    nobgImage: "/images/voitures-nobg.png",
    gallery: [
      "/images/VOITURES.jpg",
      "/images/systeme-de-tournique-barreaude.jpg",
      "/images/controle-dacces-1.jpg",
    ],
    badge: "Anti-bélier",
    features: [
      {
        icon: "Car",
        title: "Barrières levantes",
        desc: "Bras de 3 à 6 m, vitesse de levée 1,5 à 6 secondes selon les besoins de débit.",
      },
      {
        icon: "Shield",
        title: "Bloqueurs anti-bélier",
        desc: "Plots et barrières levantes anti-intrusion résistant à l'impact de véhicules bélier.",
      },
      {
        icon: "Wifi",
        title: "Déclenchement multiple",
        desc: "Compatible télécommande, badge RFID, carte, bouton poussoir, détecteur de présence.",
      },
      {
        icon: "BarChart3",
        title: "Comptage véhicules",
        desc: "Gestion et comptage des véhicules en temps réel pour parkings et zones à capacité limitée.",
      },
    ],
    specs: [
      { label: "Longueur de bras", value: "3 à 6 m (extensible avec supports)" },
      { label: "Temps de levée", value: "1,5 à 6 s selon modèle" },
      { label: "Résistance anti-bélier", value: "Jusqu'à IWA 14-1 selon modèle" },
      { label: "Cycles/heure", value: "Jusqu'à 1 800 cycles/h (haute fréquence)" },
      { label: "Alimentation", value: "230 V AC ou solaire (option)" },
      { label: "Interface", value: "Wiegand / RS-485 / Ethernet" },
    ],
    benefits: [
      { title: "Sécurité périmétrique", desc: "Protection efficace des accès contre les entrées non autorisées de véhicules." },
      { title: "Fluidité du trafic", desc: "Barrières rapides pour éviter les files d'attente aux entrées fréquentées." },
      { title: "Traçabilité", desc: "Enregistrement de chaque passage avec identification du véhicule et horodatage." },
      { title: "Mode urgence", desc: "Ouverture manuelle ou automatique en cas d'urgence ou de coupure de courant." },
    ],
    industries: [
      { icon: "Building2", name: "Immobilier", desc: "Résidences, copropriétés, parkings privés" },
      { icon: "Factory", name: "Industrie", desc: "Entrées d'usines et zones de livraison" },
      { icon: "Hotel", name: "Hôtellerie", desc: "Parkings d'hôtels et accès sous-sol" },
      { icon: "Landmark", name: "Administrations", desc: "Parkings ministériels et institutions publiques" },
      { icon: "Hospital", name: "Santé", desc: "Accès urgences et parkings hospitaliers" },
      { icon: "ShoppingBag", name: "Commerce", desc: "Centres commerciaux et parkings de grande surface" },
    ],
    faq: [
      {
        q: "Quelle différence entre une barrière standard et anti-bélier ?",
        a: "Une barrière standard est faite pour la gestion des accès normaux. Une barrière anti-bélier (ou bollard) est conçue pour résister à l'impact d'un véhicule lancé à grande vitesse — pour les sites à haute sécurité.",
      },
      {
        q: "Peut-on intégrer la reconnaissance de plaque d'immatriculation ?",
        a: "Oui, NTI Solutions propose des systèmes de LPR (License Plate Recognition) couplés aux barrières pour une ouverture automatique basée sur la plaque — sans badge ni opérateur.",
      },
      {
        q: "Les barrières fonctionnent-elles en cas de coupure électrique ?",
        a: "Oui, les barrières sont équipées d'une batterie de secours et/ou d'un mécanisme de déverrouillage manuel pour garantir la continuité d'exploitation.",
      },
      {
        q: "Peut-on gérer l'accès de livreurs ponctuels ?",
        a: "Oui, via un interphone visuel ou une interface de gestion, le gardien ou le système peut accorder un accès temporaire aux livreurs sans badge permanent.",
      },
    ],
    related: ["tourniquet-barreau", "controle-ronde", "anti-intrusion"],
    seo: {
      title: "Contrôle d'Accès Véhicules | Barrières et bollards — NTI Solutions Tunisie",
      description:
        "Barrières levantes, bloqueurs anti-bélier et champignons pour zones sécurisées. Compatible RFID, télécommande, LPR. Installation en Tunisie par NTI Solutions.",
    },
  },

  {
    slug: "anti-intrusion",
    name: "Système Anti-Intrusion",
    category: "Contrôle d'accès",
    categorySlug: "controle-acces",
    tagline: "Alarme filaire ou sans fil — détection périmétrique complète",
    description:
      "Le système anti-intrusion est une alarme filaire ou sans fil indispensable pour la protection des habitations et entreprises. Il comprend des capteurs de mouvement, des détecteurs d'ouverture de portes et fenêtres, une centrale d'alarme, une sirène et un transmetteur GSM pour notification téléphonique immédiate. Les meilleurs systèmes utilisent la double technologie (IR + hyperfréquence) pour éliminer les déclenchements intempestifs.",
    heroImage: "/images/PORTES.jpg",
    nobgImage: "/images/portes-nobg.png",
    gallery: [
      "/images/PORTES.jpg",
      "/images/controle-dacces-1.jpg",
      "/images/systeme-de-tournique-barreaude.jpg",
    ],
    badge: "Double technologie",
    features: [
      {
        icon: "Activity",
        title: "Détection multi-technologie",
        desc: "Détecteurs IR passif + hyperfréquence pour éliminer les fausses alarmes.",
      },
      {
        icon: "Smartphone",
        title: "Notification GSM",
        desc: "Alerte instantanée par SMS et appel téléphonique en cas d'intrusion détectée.",
      },
      {
        icon: "RadioTower",
        title: "Sans fil disponible",
        desc: "Système sans fil pour installation sans travaux, facilement évolutif.",
      },
      {
        icon: "Bell",
        title: "Sirène puissante",
        desc: "Sirène intérieure et extérieure > 110 dB, autonomie minimale 5 minutes sans secteur.",
      },
    ],
    specs: [
      { label: "Zones", value: "8 à 128 zones selon centrale" },
      { label: "Communication", value: "GSM / RTC / IP selon modèle" },
      { label: "Alimentation secours", value: "Batterie Li-Po 24 à 72 h" },
      { label: "Technologie détecteurs", value: "IR passif / Hyperfréquence / Dual-Tech" },
      { label: "Portée détecteurs", value: "8 à 15 m selon modèle" },
      { label: "Certification", value: "Conforme EN 50131" },
    ],
    benefits: [
      { title: "Protection 360°", desc: "Couvre périmètre extérieur, accès et volumes intérieurs de manière complémentaire." },
      { title: "Zéro fausse alarme", desc: "Double technologie éliminant les déclenchements par animaux ou variations thermiques." },
      { title: "Notification immédiate", desc: "Alerte le propriétaire et/ou la société de télésurveillance en temps réel." },
      { title: "Dissuasion active", desc: "Sirène puissante et signalétique visible dissuadent les intrus avant l'intrusion." },
    ],
    industries: [
      { icon: "Home", name: "Résidentiel", desc: "Villas, appartements et résidences sécurisées" },
      { icon: "Building2", name: "Bureaux", desc: "Protection hors heures ouvrables des locaux" },
      { icon: "ShoppingBag", name: "Commerce", desc: "Boutiques, pharmacies et magasins de nuit" },
      { icon: "Warehouse", name: "Entrepôts", desc: "Stockage de marchandises de valeur" },
      { icon: "Factory", name: "Industrie", desc: "Protection des équipements et matières premières" },
      { icon: "GraduationCap", name: "Éducation", desc: "Établissements scolaires hors heures de cours" },
    ],
    faq: [
      {
        q: "Quelle différence entre un système filaire et sans fil ?",
        a: "Le filaire est plus fiable et moins sensible aux interférences, mais nécessite une installation avec passages de câbles. Le sans fil est plus rapide à installer et évolutif, idéal pour les locaux existants.",
      },
      {
        q: "Comment fonctionnent les détecteurs à double technologie ?",
        a: "Ils combinent un capteur IR passif (chaleur corporelle) et un capteur hyperfréquence (mouvement). L'alarme ne se déclenche que si les deux détectent simultanément — éliminant les fausses alarmes dues aux animaux ou aux variations thermiques.",
      },
      {
        q: "Le système fonctionne-t-il en cas de coupure secteur ?",
        a: "Oui, toutes les centrales d'alarme professionnelles intègrent une batterie de secours garantissant au minimum 12 à 72 heures d'autonomie selon le modèle.",
      },
      {
        q: "Peut-on relier le système à une société de télésurveillance ?",
        a: "Oui, via le transmetteur GSM ou IP intégré, le système peut envoyer les alertes à une société de télésurveillance qui intervient 24h/24. NTI Solutions peut vous recommander des partenaires certifiés.",
      },
    ],
    related: ["controle-ronde", "controle-vehicules", "tourniquet-barreau"],
    seo: {
      title: "Système Anti-Intrusion | Alarme filaire et sans fil — NTI Solutions Tunisie",
      description:
        "Alarmes anti-intrusion filaires et sans fil, double technologie, notification GSM. Résidentiel et professionnel. Installation et maintenance en Tunisie.",
    },
  },

  // ─── SÉCURITÉ INCENDIE ───────────────────────────────────────────────────
  {
    slug: "detection-incendie",
    name: "Système de Détection Incendie",
    category: "Sécurité incendie",
    categorySlug: "securite-incendie",
    tagline: "Conventionnel ou adressable — localisation précise, évacuation assurée",
    description:
      "Le système de détection incendie assure la détection d'un phénomène lié au développement d'un feu, le localise avec précision et active les commandes adéquates. Il comprend au minimum des détecteurs automatiques et un Équipement de Contrôle et de Signalisation (ECS). L'alarme prévient immédiatement les occupants et provoque l'évacuation ordonnée du bâtiment. Disponible en version conventionnelle ou adressable.",
    heroImage: "/images/Le-systeme-de-securite-incendie.jpg.png",
    nobgImage: "/images/detection-incendie-nobg.png",
    gallery: [
      "/images/Le-systeme-de-securite-incendie.jpg.png",
      "/images/Conventionnel.jpg.png",
      "/images/lutte.png",
    ],
    badge: "NF EN 54",
    features: [
      {
        icon: "Flame",
        title: "Détection précoce",
        desc: "Détecteurs de fumée, chaleur et gaz activant l'alarme avant que l'incendie ne se propage.",
      },
      {
        icon: "MapPin",
        title: "Localisation précise",
        desc: "Identification du détecteur activé et de sa zone pour une intervention rapide et ciblée.",
      },
      {
        icon: "Bell",
        title: "Alarme évacuation",
        desc: "Diffuseurs sonores et visuels assurant une alerte audible dans tout le bâtiment.",
      },
      {
        icon: "Cpu",
        title: "ECS central",
        desc: "Équipement de Contrôle et de Signalisation gérant l'ensemble du réseau de détection.",
      },
    ],
    specs: [
      { label: "Normes", value: "NF EN 54, NF S 61-936" },
      { label: "Types disponibles", value: "Conventionnel (2/4/6 zones) / Adressable" },
      { label: "Marques compatibles", value: "Hochiki ESP, Apollo XP95/Xplorer/Discover" },
      { label: "Relais programmables", value: "3 (conventionnel) / selon centrale (adressable)" },
      { label: "Mémoire événements", value: "3 000 messages (conventionnel)" },
      { label: "Extension", value: "RS-485, carte d'extension réseau" },
    ],
    benefits: [
      { title: "Conformité réglementaire", desc: "Certifié NF EN 54, conforme aux exigences des assureurs et autorités tunisiennes." },
      { title: "Détection 24/7", desc: "Surveillance continue sans interruption, de jour comme de nuit." },
      { title: "Évacuation ordonnée", desc: "Séquence d'alarme progressive pour une évacuation sans panique." },
      { title: "Télémaintenance", desc: "Diagnostic à distance et alertes de dérangement en temps réel." },
    ],
    industries: [
      { icon: "Hotel", name: "Hôtellerie", desc: "Hôtels, résidences et établissements de tourisme" },
      { icon: "Hospital", name: "Santé", desc: "Hôpitaux, cliniques et maisons de retraite" },
      { icon: "GraduationCap", name: "Éducation", desc: "Écoles, lycées et universités" },
      { icon: "Factory", name: "Industrie", desc: "Usines, entrepôts et zones à risque" },
      { icon: "Building2", name: "Tertiaire", desc: "Bureaux, tours et centres administratifs" },
      { icon: "ShoppingBag", name: "Commerce", desc: "Centres commerciaux et grandes surfaces" },
    ],
    faq: [
      {
        q: "Quelle différence entre un système conventionnel et adressable ?",
        a: "Le système conventionnel identifie la zone (boucle) d'alarme mais pas le détecteur précis. L'adressable identifie chaque détecteur individuellement, permettant une localisation précise au mètre près.",
      },
      {
        q: "Combien de zones peut gérer un système conventionnel ?",
        a: "NTI Solutions propose des centrales conventionnelles de 2, 4 ou 6 zones. Pour plus de zones ou une localisation fine, le système adressable est recommandé.",
      },
      {
        q: "Les systèmes sont-ils compatibles avec toutes les marques de détecteurs ?",
        a: "Les centrales NTI Solutions sont compatibles avec les détecteurs Hochiki ESP et Apollo (XP95, Xplorer, Discover) — deux références mondiales de fiabilité et de qualité.",
      },
      {
        q: "Quelle maintenance est requise ?",
        a: "La réglementation tunisienne exige une vérification annuelle par un professionnel certifié. NTI Solutions propose des contrats de maintenance préventive et curative avec rapport d'inspection.",
      },
    ],
    related: ["systeme-conventionnel", "desenfumage", "lutte-incendie"],
    seo: {
      title: "Système de Détection Incendie | Hochiki Apollo — NTI Solutions Tunisie",
      description:
        "Systèmes de détection incendie conventionnels et adressables. Hochiki ESP, Apollo XP95. Conformes NF EN 54. Installation et maintenance en Tunisie.",
    },
  },

  {
    slug: "systeme-conventionnel",
    name: "Système Conventionnel",
    category: "Sécurité incendie",
    categorySlug: "securite-incendie",
    tagline: "2 à 6 zones — Hochiki ESP & Apollo XP95 certifiés",
    description:
      "Le système de détection incendie conventionnel couvre 2, 4 ou 6 zones indépendantes. Compatible avec les détecteurs et modules Hochiki ESP et les détecteurs Apollo séries Xplorer, XP95 et Discover. Équipé de 3 relais programmables, d'une mémoire de 3 000 messages d'événements et d'une carte d'extension RS-485 pour une intégration aisée dans les systèmes de gestion de bâtiment.",
    heroImage: "/images/Conventionnel.jpg.png",
    nobgImage: "/images/conventionnel-nobg.png",
    gallery: [
      "/images/Conventionnel.jpg.png",
      "/images/Le-systeme-de-securite-incendie.jpg.png",
      "/images/lutte.png",
    ],
    badge: "Hochiki + Apollo",
    features: [
      {
        icon: "Layers",
        title: "2 à 6 zones",
        desc: "Centrale modulaire couvrant de 2 à 6 zones de détection indépendantes.",
      },
      {
        icon: "Cpu",
        title: "3 relais programmables",
        desc: "Relais de sortie configurables pour commander désenfumage, interphones ou asservissements.",
      },
      {
        icon: "Database",
        title: "3 000 événements",
        desc: "Mémoire de 3 000 messages d'événements horodatés pour audit et investigation post-incident.",
      },
      {
        icon: "Network",
        title: "Extension RS-485",
        desc: "Carte d'extension pour intégration aux systèmes GTB et réseaux RS-485.",
      },
    ],
    specs: [
      { label: "Nombre de zones", value: "2 / 4 / 6 zones indépendantes" },
      { label: "Détecteurs compatibles", value: "Hochiki ESP / Apollo XP95, Xplorer, Discover" },
      { label: "Relais de sortie", value: "3 relais programmables" },
      { label: "Mémoire", value: "3 000 messages d'événements horodatés" },
      { label: "Communication", value: "RS-485 (carte d'extension)" },
      { label: "Alimentation secours", value: "72 h en état de veille / 30 min en alarme" },
    ],
    benefits: [
      { title: "Fiabilité prouvée", desc: "Détecteurs Hochiki et Apollo, références mondiales avec 40 ans de terrain." },
      { title: "Installation simple", desc: "Câblage en boucle simple, installation et paramétrage rapides." },
      { title: "Coût optimisé", desc: "Solution économique pour les bâtiments de taille petite à moyenne." },
      { title: "Maintenance facilitée", desc: "Diagnostic clair par zone pour localiser rapidement tout dérangement." },
    ],
    industries: [
      { icon: "Building2", name: "PME", desc: "Bureaux et locaux professionnels jusqu'à 6 zones" },
      { icon: "Hotel", name: "Hôtellerie", desc: "Hôtels boutique et pensions de famille" },
      { icon: "ShoppingBag", name: "Commerce", desc: "Boutiques, restaurants et petits centres commerciaux" },
      { icon: "GraduationCap", name: "Éducation", desc: "Écoles primaires, collèges et lycées" },
      { icon: "Home", name: "Résidentiel collectif", desc: "Immeubles et résidences jusqu'à 6 niveaux" },
      { icon: "Warehouse", name: "Entrepôts", desc: "Entrepôts de superficie petite à moyenne" },
    ],
    faq: [
      {
        q: "Quelle superficie peut couvrir un système conventionnel 6 zones ?",
        a: "Un système conventionnel 6 zones peut couvrir jusqu'à 6 zones distinctes, chacune pouvant représenter un niveau, une aile ou une zone fonctionnelle. La superficie dépend du type et du nombre de détecteurs par zone.",
      },
      {
        q: "Les détecteurs Hochiki et Apollo sont-ils interchangeables ?",
        a: "Non, les protocoles sont différents. Sur une même boucle, on utilise une seule marque. En revanche, la centrale peut gérer plusieurs boucles avec des marques différentes sur chaque boucle.",
      },
      {
        q: "Que se passe-t-il lorsqu'un détecteur est en dérangement ?",
        a: "La centrale affiche le numéro de zone en dérangement avec une LED dédiée et un signal sonore distinct de l'alarme. L'enregistrement dans la mémoire événements permet le suivi.",
      },
      {
        q: "Peut-on passer d'un système conventionnel à adressable ?",
        a: "Oui, NTI Solutions peut planifier une migration par phases, en gardant le câblage et en remplaçant la centrale et les détecteurs progressivement, pour minimiser l'impact sur l'exploitation.",
      },
    ],
    related: ["detection-incendie", "desenfumage", "lutte-incendie"],
    seo: {
      title: "Système Conventionnel Incendie | Hochiki Apollo — NTI Solutions Tunisie",
      description:
        "Centrales de détection incendie conventionnelles 2-6 zones. Compatible Hochiki ESP et Apollo XP95. Installation et maintenance certifiées en Tunisie.",
    },
  },

  {
    slug: "desenfumage",
    name: "Désenfumage et Compartimentage",
    category: "Sécurité incendie",
    categorySlug: "securite-incendie",
    tagline: "Évacuation des fumées pour sauver des vies et faciliter l'intervention",
    description:
      "Le désenfumage crée une hauteur d'air libre sous la couche de fumée pour faciliter l'évacuation des occupants, limiter la propagation de l'incendie et permettre l'accès des locaux aux pompiers. Deux principes : naturel (exutoires SKYDOME en toiture) ou mécanique (tourelles et extracteurs). Complété par le compartimentage via portes coupe-feu et rideaux d'eau pour confiner le sinistre.",
    heroImage: "/images/Desenfumage-et-compartimentage-1.png",
    nobgImage: "/images/desenfumage-nobg.png",
    gallery: [
      "/images/Desenfumage-et-compartimentage-1.png",
      "/images/Le-systeme-de-securite-incendie.jpg.png",
      "/images/lutte.png",
    ],
    badge: "SKYDOME",
    features: [
      {
        icon: "Wind",
        title: "Désenfumage naturel",
        desc: "Exutoires SKYDOME en toiture s'ouvrant automatiquement pour évacuer fumée et chaleur.",
      },
      {
        icon: "Fan",
        title: "Désenfumage mécanique",
        desc: "Tourelles et extracteurs motorisés pour le renouvellement actif de l'air carbonisé.",
      },
      {
        icon: "Square",
        title: "Écrans de cantonnement",
        desc: "Rideaux en descente pour confiner la fumée dans une zone et protéger les voies d'évacuation.",
      },
      {
        icon: "DoorClosed",
        title: "Portes coupe-feu",
        desc: "Compartimentage par portes EI30/EI60/EI120 se fermant automatiquement à l'alarme.",
      },
    ],
    specs: [
      { label: "Exutoires naturels", value: "SKYDOME S900 / S1300 / S1500 (surface libre)" },
      { label: "Ventilateurs mécaniques", value: "Débit de 5 000 à 50 000 m³/h selon zone" },
      { label: "Résistance au feu", value: "F400 (300 °C / 120 min) pour ventilateurs de désenfumage" },
      { label: "Compartimentage", value: "Portes EI30 à EI120 + Rideaux d'eau" },
      { label: "Commande", value: "Manuelle et automatique (liaison ECS)" },
      { label: "Normes", value: "NF EN 12101, EN 1363, DTU 14.2" },
    ],
    benefits: [
      { title: "Évacuation facilitée", desc: "La hauteur d'air libre permet aux occupants de se repérer et d'évacuer rapidement." },
      { title: "Propagation limitée", desc: "Le compartimentage confine le sinistre et évite l'embrasement généralisé." },
      { title: "Intervention pompiers", desc: "Les secours accèdent au foyer plus rapidement avec une meilleure visibilité." },
      { title: "Conformité ERP", desc: "Obligatoire pour les Établissements Recevant du Public selon la réglementation." },
    ],
    industries: [
      { icon: "ShoppingBag", name: "Commerce", desc: "Centres commerciaux, galeries marchandes, supermarchés" },
      { icon: "Warehouse", name: "Logistique", desc: "Entrepôts, plateformes de distribution, usines" },
      { icon: "Building2", name: "Tertiaire", desc: "Tours de bureaux, sièges sociaux" },
      { icon: "Hotel", name: "Hôtellerie", desc: "Hôtels et résidences de plus de 50 chambres" },
      { icon: "Car", name: "Parkings", desc: "Parkings souterrains et couverts" },
      { icon: "Hospital", name: "Santé", desc: "Hôpitaux et cliniques à étages multiples" },
    ],
    faq: [
      {
        q: "Le désenfumage naturel suffit-il pour tous les bâtiments ?",
        a: "Pour les bâtiments simples (entrepôts à simple rez-de-chaussée, halls), le naturel peut suffire. Pour les bâtiments en hauteur, souterrains ou complexes, le désenfumage mécanique est souvent nécessaire selon l'étude de sécurité incendie.",
      },
      {
        q: "Les exutoires SKYDOME s'ouvrent-ils automatiquement ?",
        a: "Oui, ils sont reliés à la centrale de détection incendie et s'ouvrent automatiquement lors d'une alarme feu. Une commande manuelle est également prévue pour les sapeurs-pompiers.",
      },
      {
        q: "Quelle maintenance est nécessaire pour les exutoires ?",
        a: "Un test d'ouverture annuel est obligatoire, ainsi qu'une vérification des joints, des actionneurs et de la liaison avec la détection incendie. NTI Solutions assure ce contrôle dans le cadre d'un contrat de maintenance.",
      },
      {
        q: "Les portes coupe-feu doivent-elles être maintenues fermées ?",
        a: "Selon leur type, elles peuvent rester ouvertes en situation normale (maintenues par un électro-aimant) et se fermer automatiquement à l'alarme incendie. NTI Solutions dimensionne la solution selon les contraintes d'exploitation.",
      },
    ],
    related: ["detection-incendie", "systeme-conventionnel", "lutte-incendie"],
    seo: {
      title: "Désenfumage et Compartimentage | SKYDOME — NTI Solutions Tunisie",
      description:
        "Désenfumage naturel SKYDOME et mécanique, portes coupe-feu, écrans de cantonnement. Conformes NF EN 12101. Installation en Tunisie par NTI Solutions.",
    },
  },

  {
    slug: "lutte-incendie",
    name: "Lutte contre les Incendies",
    category: "Sécurité incendie",
    categorySlug: "securite-incendie",
    tagline: "RIA, extinction automatique gaz — priver le feu de ses éléments",
    description:
      "La lutte contre les incendies repose sur le principe de priver le feu de l'un des trois éléments du triangle du feu : combustible, comburant ou énergie d'activation. Les moyens sont adaptés au risque spécifique de chaque site. Le Réseau Incendie Armé (RIA) comprend un poste RIA ou PIA, de la tuyauterie, un surpresseur et une bâche à eau. Pour les risques spéciaux, l'extinction automatique à gaz constitue une solution alternative efficace.",
    heroImage: "/images/lutte.png",
    nobgImage: "/images/lutte-nobg.png",
    gallery: [
      "/images/lutte.png",
      "/images/Le-systeme-de-securite-incendie.jpg.png",
      "/images/Desenfumage-et-compartimentage-1.png",
    ],
    badge: "RIA & Extinction gaz",
    features: [
      {
        icon: "Droplets",
        title: "Réseau RIA/PIA",
        desc: "Robinet ou Poste Incendie Armé — premier moyen d'intervention avant l'arrivée des pompiers.",
      },
      {
        icon: "Gauge",
        title: "Surpresseur incendie",
        desc: "Maintien de la pression eau 24/7 pour garantir le débit requis à tout poste incendie.",
      },
      {
        icon: "CloudSnow",
        title: "Extinction gaz",
        desc: "Systèmes d'extinction automatique par gaz inerte (Argon, CO2, FM-200) pour salles informatiques et archives.",
      },
      {
        icon: "Database",
        title: "Bâche à eau",
        desc: "Réserve d'eau dimensionnée selon la durée d'intervention réglementaire (30 à 120 min).",
      },
    ],
    specs: [
      { label: "Débit RIA 25 mm", value: "≥ 24 l/min à 2,5 bar" },
      { label: "Débit RIA 45 mm", value: "≥ 130 l/min à 2,5 bar" },
      { label: "Bâche à eau", value: "120 m³ minimum (selon risque)" },
      { label: "Surpresseur", value: "Pompe jockey + pompe principale + secours diesel" },
      { label: "Gaz d'extinction", value: "FM-200 / CO2 / Argonite / Novec 1230" },
      { label: "Normes", value: "NF EN 671, NF EN 12094, NFPA 12 / 2001" },
    ],
    benefits: [
      { title: "Intervention immédiate", desc: "Le RIA permet une première attaque du feu en moins d'une minute avant l'arrivée des pompiers." },
      { title: "Protection biens critiques", desc: "L'extinction gaz protège salles serveurs, archives et équipements électroniques sans eau." },
      { title: "Pression garantie", desc: "Le surpresseur maintient la pression à tout moment, même en cas de forte demande simultanée." },
      { title: "Conformité assureurs", desc: "Les systèmes certifiés sont exigés par les assurances pour les ERP et les industries." },
    ],
    industries: [
      { icon: "Factory", name: "Industrie", desc: "Usines avec risques d'incendie ou d'explosion" },
      { icon: "Cpu", name: "Data centers", desc: "Salles serveurs et centres de données (extinction gaz)" },
      { icon: "Landmark", name: "Archives", desc: "Archives nationales, bibliothèques, musées" },
      { icon: "Hotel", name: "Hôtellerie", desc: "Hôtels ERP avec obligation RIA réglementaire" },
      { icon: "ShoppingBag", name: "Commerce", desc: "Centres commerciaux et entrepôts de grande surface" },
      { icon: "Zap", name: "Énergie", desc: "Groupes électrogènes, transformateurs, locaux électriques" },
    ],
    faq: [
      {
        q: "Quelle est la différence entre un RIA 25 mm et 45 mm ?",
        a: "Le RIA 25 mm (dévidoir mural) est plus léger, manipulé par une personne non formée. Le RIA 45 mm offre un débit plus élevé, nécessite une formation et est utilisé pour des risques plus importants.",
      },
      {
        q: "L'extinction à gaz est-elle dangereuse pour les personnes ?",
        a: "Le FM-200 et le Novec 1230 sont conçus pour être utilisés en présence humaine à concentration d'extinction. Le CO2 pur, lui, est dangereux et nécessite une évacuation préalable. NTI Solutions recommande le bon agent selon votre usage.",
      },
      {
        q: "Quelle capacité de bâche à eau est nécessaire ?",
        a: "La capacité est calculée selon la superficie à protéger, le nombre de RIA, le débit requis et la durée d'intervention réglementaire (généralement 30 à 120 minutes). NTI Solutions réalise l'étude hydraulique complète.",
      },
      {
        q: "Le surpresseur doit-il fonctionner en permanence ?",
        a: "La pompe jockey (petite pompe) maintient la pression en permanence. La pompe principale et la pompe diesel de secours ne s'activent qu'en cas d'incendie ou d'exercice.",
      },
    ],
    related: ["detection-incendie", "desenfumage", "systeme-conventionnel"],
    seo: {
      title: "Lutte contre les Incendies | RIA et extinction gaz — NTI Solutions Tunisie",
      description:
        "Réseaux incendie armés RIA/PIA, extincteurs automatiques gaz, surpresseurs. Conformes NF EN 671. Étude et installation complète en Tunisie par NTI Solutions.",
    },
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(
  categorySlug: "videosurveillance" | "controle-acces" | "securite-incendie"
): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getRelatedProducts(slugs: string[]): Product[] {
  return slugs
    .map((s) => products.find((p) => p.slug === s))
    .filter((p): p is Product => p !== undefined);
}
