import { products } from "./products";
import type { ChatMessage, Lang } from "./types";

// ─── Intent detection ───────────────────────────────────────────────────────

type Intent =
  | "videosurveillance"
  | "incendie"
  | "controle_acces"
  | "desenfumage"
  | "lutte_incendie"
  | "anti_intrusion"
  | "quote"
  | "contact"
  | "company"
  | "maintenance"
  | "marques"
  | "normes"
  | "installation"
  | "catalogue"
  | "greeting"
  | "unknown";

const INTENT_KEYWORDS: Record<Intent, string[]> = {
  videosurveillance: [
    "vidéo","video","caméra","camera","camèra","cctv","ip","ptz","bullet","dôme","dome",
    "thermique","surveillance","dvr","nvr","xvr","enregistreur","analogique","dahua",
    "video surveillance","industrial","industrielle","industry",
    "كاميرا","مراقبة","تصوير","فيديو",
  ],
  incendie: [
    "incendie","feu","détection","detection","conventionnel","adressable","hochiki","apollo",
    "centrale","déclencheur","alarme incendie","fumée","smok","détecteur","detecteur",
    "fire","smoke","alarm","detector","heat","chaleur","en 54","nf 54",
    "حريق","إنذار","كشف","دخان",
  ],
  controle_acces: [
    "contrôle","controle","accès","acces","badge","biométrie","biometrie","rfid","lecteur",
    "porte","serrure","clé","cle","access","control","badge reader","badgeuse",
    "كنترول","وصول","دخول",
  ],
  anti_intrusion: [
    "intrusion","anti-intrusion","alarme","alerte","détecteur mouvement","mouvement","pir",
    "périmètre","perimetre","volet","barrière","barrier","clôture","cloture",
    "سطو","اقتحام","إنذار سرقة",
  ],
  desenfumage: [
    "désenfumage","desenfumage","fumée","fumee","ventilation","compartimentage","évacuation fumée",
    "smoke extraction","ventilation",
    "تهوية","دخان",
  ],
  lutte_incendie: [
    "lutte","extinction","extincteur","sprinkler","mousse","co2","agent","suppression",
    "fire fighting","firefighting","suppression",
    "إخماد","إطفاء",
  ],
  quote: [
    "devis","prix","tarif","coût","cout","combien","budget","offre","proposition","estimation",
    "quote","price","cost","how much","pricing",
    "سعر","تكلفة","عرض","ميزانية",
  ],
  contact: [
    "contact","téléphone","telephone","phone","email","mail","adresse","address","où","ou",
    "horaires","hours","ouvert","open","joindre","appeler","appel","whatsapp",
    "اتصال","هاتف","عنوان","بريد","واتساب",
  ],
  company: [
    "nti","entreprise","société","société","histoire","fondée","fondee","depuis","2013","equipe","équipe",
    "qui êtes","qui etes","about","company","tunisie","tunis","values","valeurs",
    "شركة","تاريخ","فريق","تونس",
  ],
  maintenance: [
    "maintenance","entretien","panne","réparation","reparation","contrat","suivi","service après-vente","sav",
    "repair","support","after-sales",
    "صيانة","إصلاح","عقد","دعم",
  ],
  marques: [
    "marque","marques","hochiki","apollo","dahua","hikvision","brand","partner","partenaire",
    "ماركة","علامة",
  ],
  normes: [
    "norme","certification","certifié","certifie","conformité","conformite","en 54","nf","standard",
    "certified","compliance","iso","norm",
    "معيار","شهادة","مطابقة",
  ],
  installation: [
    "installation","installer","mise en service","délai","delai","durée","duree","technicien",
    "install","setup","commissioning","deploy",
    "تركيب","تشغيل","مدة",
  ],
  catalogue: [
    "catalogue","produit","produits","liste","tout","all","gamme","solution",
    "catalog","product","products","range",
    "كتالوج","منتجات","قائمة",
  ],
  greeting: [
    "bonjour","salut","hello","hi","bonsoir","coucou","hey",
    "مرحبا","السلام","أهلا","صباح","مساء",
  ],
  unknown: [],
};

function detectIntent(text: string): Intent[] {
  const lower = text.toLowerCase();
  const intents: Intent[] = [];
  for (const [intent, keywords] of Object.entries(INTENT_KEYWORDS) as [Intent, string[]][]) {
    if (intent === "unknown") continue;
    if (keywords.some((kw) => lower.includes(kw))) {
      intents.push(intent);
    }
  }
  return intents.length ? intents : ["unknown"];
}

// ─── Response templates ──────────────────────────────────────────────────────

function getProductsByCategory(slug: string) {
  return products.filter((p) => p.categorySlug === slug);
}

function formatProductList(prods: typeof products, max = 4) {
  return prods
    .slice(0, max)
    .map((p) => `• **${p.name}** — ${p.tagline} → [Voir le produit](/produits/${p.slug})`)
    .join("\n");
}

type Responses = Record<Intent, Record<Lang, string>>;

const RESPONSES: Partial<Responses> = {
  greeting: {
    fr: "Bonjour ! Comment puis-je vous aider aujourd'hui ?\n\nJe peux répondre à vos questions sur nos systèmes de **vidéosurveillance**, **détection incendie**, **contrôle d'accès**, **désenfumage** et **lutte incendie**.",
    en: "Hello! How can I help you today?\n\nI can answer questions about our **video surveillance**, **fire detection**, **access control**, **smoke extraction**, and **fire fighting** systems.",
    ar: "مرحباً! كيف يمكنني مساعدتك اليوم؟\n\nيمكنني الإجابة على أسئلتك حول أنظمة **المراقبة بالفيديو** و**الكشف عن الحرائق** و**التحكم في الوصول** و**إخماد الحرائق**.",
  },
  quote: {
    fr: "Pour obtenir un **devis personnalisé**, nos équipes sont à votre disposition :\n\n• 📲 WhatsApp : **+216 29 600 424**\n• 📧 Email : **contact@ntisolutions.com.tn**\n• 📋 [Formulaire de contact](/contact)\n\nNous répondons sous **24h ouvrées** avec une étude gratuite et un devis détaillé sans engagement.",
    en: "To get a **personalized quote**, our team is available:\n\n• 📲 WhatsApp: **+216 29 600 424**\n• 📧 Email: **contact@ntisolutions.com.tn**\n• 📋 [Contact form](/contact)\n\nWe respond within **24 business hours** with a free assessment and detailed quote.",
    ar: "للحصول على **عرض سعر مخصص**، فريقنا متاح:\n\n• 📲 واتساب: **+216 29 600 424**\n• 📧 بريد: **contact@ntisolutions.com.tn**\n• 📋 [نموذج الاتصال](/contact)\n\nنرد خلال **24 ساعة عمل** بدراسة مجانية وعرض سعر مفصل.",
  },
  contact: {
    fr: "**Coordonnées NTI Solutions :**\n\n• 📍 3, Rue Ibrahim Cherif, Cité Olympique — 1003 Tunis\n• 📞 Fixe : +216 71 805 945\n• 📲 WhatsApp : +216 29 600 424\n• 📧 contact@ntisolutions.com.tn\n• 🕐 Lun–Ven 9h00–19h00 | Sam 10h00–17h00\n\n[Voir la page contact](/contact)",
    en: "**NTI Solutions Contact Details:**\n\n• 📍 3 Rue Ibrahim Cherif, Cité Olympique — 1003 Tunis\n• 📞 Landline: +216 71 805 945\n• 📲 WhatsApp: +216 29 600 424\n• 📧 contact@ntisolutions.com.tn\n• 🕐 Mon–Fri 9am–7pm | Sat 10am–5pm\n\n[View contact page](/contact)",
    ar: "**معلومات الاتصال بـ NTI Solutions:**\n\n• 📍 3 شارع إبراهيم الشريف، المدينة الأولمبية — 1003 تونس\n• 📞 هاتف: 71 805 945 216+\n• 📲 واتساب: 29 600 424 216+\n• 📧 contact@ntisolutions.com.tn\n• 🕐 الإثنين–الجمعة 9:00–19:00 | السبت 10:00–17:00\n\n[صفحة الاتصال](/contact)",
  },
  company: {
    fr: "**NTI Solutions** est une entreprise tunisienne fondée en **2013**, spécialisée dans l'intégration de systèmes électroniques de sécurité et sûreté.\n\nNous intervenons sur l'ensemble du territoire tunisien pour les **entreprises, industries, hôtels et institutions**.\n\nNos domaines : vidéosurveillance, contrôle d'accès, détection incendie, désenfumage et lutte incendie.\n\n[En savoir plus](/a-propos)",
    en: "**NTI Solutions** is a Tunisian company founded in **2013**, specialized in the integration of electronic security and safety systems.\n\nWe serve the entire Tunisian territory for **businesses, industries, hotels and institutions**.\n\n[Learn more](/a-propos)",
    ar: "**NTI Solutions** شركة تونسية تأسست عام **2013**، متخصصة في تكامل أنظمة الأمن والسلامة الإلكترونية.\n\nنخدم جميع أنحاء تونس لـ **الشركات والصناعات والفنادق والمؤسسات**.\n\n[معرفة المزيد](/a-propos)",
  },
  maintenance: {
    fr: "NTI Solutions propose des **contrats de maintenance** annuels comprenant :\n\n• Visites préventives programmées\n• Interventions curatives sous 24h\n• Hotline technique dédiée\n• Disponibilité 24h/7j pour les urgences\n\nPour un contrat de maintenance, contactez-nous : **+216 29 600 424** ou [formulaire de contact](/contact).",
    en: "NTI Solutions offers annual **maintenance contracts** including:\n\n• Scheduled preventive visits\n• Corrective interventions within 24h\n• Dedicated technical hotline\n• 24/7 availability for emergencies\n\nFor a maintenance contract: **+216 29 600 424** or [contact form](/contact).",
    ar: "تقدم NTI Solutions **عقود صيانة** سنوية تشمل:\n\n• زيارات وقائية مجدولة\n• تدخلات إصلاحية خلال 24 ساعة\n• خط ساخن تقني مخصص\n• متاح 24/7 للطوارئ\n\nللتواصل: **+216 29 600 424** أو [نموذج الاتصال](/contact).",
  },
  marques: {
    fr: "NTI Solutions travaille avec les **meilleurs équipementiers** :\n\n• 🔴 **Hochiki** — centrales incendie ESP, détecteurs premium\n• 🟠 **Apollo Fire** — détecteurs Serie 65, XP95\n• 🔵 **Dahua Technology** — caméras IP, NVR, XVR\n• ⚪ **Hikvision** — sur demande\n• ⚪ **Uniview (UNV)** — sur demande\n\nNous sélectionnons les équipements selon votre infrastructure et budget, sans imposer de marque.",
    en: "NTI Solutions works with **leading manufacturers**:\n\n• 🔴 **Hochiki** — ESP fire panels, premium detectors\n• 🟠 **Apollo Fire** — Series 65, XP95 detectors\n• 🔵 **Dahua Technology** — IP cameras, NVR, XVR\n• ⚪ **Hikvision** — on request\n\nWe select equipment based on your infrastructure and budget.",
    ar: "تعمل NTI Solutions مع **أفضل المصنعين**:\n\n• 🔴 **Hochiki** — لوحات الحريق ESP، كاشفات متميزة\n• 🟠 **Apollo Fire** — كاشفات Serie 65، XP95\n• 🔵 **Dahua** — كاميرات IP، NVR، XVR\n• ⚪ **Hikvision** — عند الطلب\n\nنختار المعدات حسب البنية التحتية والميزانية.",
  },
  normes: {
    fr: "Nos systèmes respectent les **normes internationales** :\n\n• **NF EN 54** — Détection et alarme incendie\n• **EN 50131** — Systèmes anti-intrusion\n• **IP66 / IP67** — Résistance intempéries (caméras)\n• **ONVIF** — Interopérabilité caméras IP\n• **IK10** — Anti-vandalisme (caméras dôme)\n\nTous nos équipements sont certifiés et nos techniciens sont formés aux normes en vigueur.",
    en: "Our systems comply with **international standards**:\n\n• **NF EN 54** — Fire detection and alarm\n• **EN 50131** — Anti-intrusion systems\n• **IP66 / IP67** — Weather resistance (cameras)\n• **ONVIF** — IP camera interoperability\n\nAll equipment is certified.",
    ar: "أنظمتنا تتوافق مع **المعايير الدولية**:\n\n• **NF EN 54** — الكشف عن الحرائق والإنذار\n• **EN 50131** — أنظمة مكافحة الاقتحام\n• **IP66 / IP67** — مقاومة الطقس (الكاميرات)\n• **ONVIF** — توافق كاميرات IP\n\nجميع المعدات معتمدة.",
  },
  installation: {
    fr: "**Processus d'installation NTI Solutions :**\n\n1. 📋 **Étude** — analyse des besoins, plan d'implantation\n2. 🔧 **Installation** — pose par techniciens certifiés\n3. ⚡ **Mise en service** — paramétrage, tests complets\n4. 🎓 **Formation** — prise en main par vos équipes\n\nDurée selon envergure : 1-2 jours (petit site) à plusieurs semaines (complexe industriel).\n\nPour planifier votre projet : [Contact](/contact)",
    en: "**NTI Solutions Installation Process:**\n\n1. 📋 **Study** — needs analysis, layout plan\n2. 🔧 **Installation** — by certified technicians\n3. ⚡ **Commissioning** — configuration, full testing\n4. 🎓 **Training** — user training included\n\nTimeline: 1-2 days (small site) to weeks (industrial complex).\n\n[Contact us](/contact)",
    ar: "**عملية التركيب في NTI Solutions:**\n\n1. 📋 **الدراسة** — تحليل الاحتياجات، خطة التوضع\n2. 🔧 **التركيب** — بواسطة تقنيين معتمدين\n3. ⚡ **التشغيل** — الإعداد والاختبار\n4. 🎓 **التدريب** — تدريب المستخدمين مشمول\n\n[اتصل بنا](/contact)",
  },
  catalogue: {
    fr: "",
    en: "",
    ar: "",
  },
};

function buildProductIntentResponse(intent: Intent, lang: Lang): string {
  const catMap: Partial<Record<Intent, string>> = {
    videosurveillance: "videosurveillance",
    incendie: "securite-incendie",
    controle_acces: "controle-acces",
    anti_intrusion: "controle-acces",
    desenfumage: "securite-incendie",
    lutte_incendie: "securite-incendie",
  };

  const pageMap: Partial<Record<Intent, string>> = {
    videosurveillance: "/surete/videosurveillance",
    incendie: "/securite/detection-incendie",
    controle_acces: "/surete/controle-acces",
    anti_intrusion: "/surete/controle-acces/anti-intrusion",
    desenfumage: "/securite/desenfumage",
    lutte_incendie: "/securite/lutte-incendie",
  };

  const labelMap: Partial<Record<Intent, Record<Lang, string>>> = {
    videosurveillance: { fr: "Vidéosurveillance", en: "Video Surveillance", ar: "المراقبة بالفيديو" },
    incendie: { fr: "Détection Incendie", en: "Fire Detection", ar: "الكشف عن الحرائق" },
    controle_acces: { fr: "Contrôle d'accès", en: "Access Control", ar: "التحكم في الوصول" },
    anti_intrusion: { fr: "Anti-intrusion", en: "Anti-intrusion", ar: "مكافحة الاقتحام" },
    desenfumage: { fr: "Désenfumage", en: "Smoke Extraction", ar: "إخراج الدخان" },
    lutte_incendie: { fr: "Lutte Incendie", en: "Fire Fighting", ar: "إطفاء الحرائق" },
  };

  const catSlug = catMap[intent];
  const pagePath = pageMap[intent];
  const label = labelMap[intent]?.[lang] ?? intent;

  let prods = catSlug ? getProductsByCategory(catSlug) : [];

  // Further filter for anti_intrusion and desenfumage / lutte
  if (intent === "anti_intrusion") {
    prods = products.filter((p) =>
      p.slug.includes("intrusion") || p.slug.includes("controle")
    );
  }
  if (intent === "desenfumage") {
    prods = products.filter((p) => p.slug.includes("desenfumage") || p.slug.includes("couloir"));
  }
  if (intent === "lutte_incendie") {
    prods = products.filter((p) => p.slug.includes("lutte"));
  }
  if (intent === "incendie") {
    prods = products.filter((p) =>
      p.slug.includes("incendie") || p.slug.includes("conventionnel") || p.slug.includes("detection")
    );
  }

  const introMap: Record<Lang, string> = {
    fr: `Voici nos solutions en **${label}** :\n\n`,
    en: `Here are our **${label}** solutions:\n\n`,
    ar: `إليك حلولنا في **${label}**:\n\n`,
  };

  const seeMoreMap: Record<Lang, string> = {
    fr: `\n\n📄 [Voir toute la gamme ${label}](${pagePath}) | [Catalogue complet](/produits)\n\nPour un **devis** ou des informations techniques : WhatsApp **+216 29 600 424**`,
    en: `\n\n📄 [See all ${label} solutions](${pagePath}) | [Full catalog](/produits)\n\nFor a **quote** or technical info: WhatsApp **+216 29 600 424**`,
    ar: `\n\n📄 [عرض جميع حلول ${label}](${pagePath}) | [الكتالوج الكامل](/produits)\n\nللحصول على **عرض سعر**: واتساب **+216 29 600 424**`,
  };

  return introMap[lang] + formatProductList(prods) + seeMoreMap[lang];
}

function buildCatalogueResponse(lang: Lang): string {
  const intro: Record<Lang, string> = {
    fr: "**NTI Solutions propose 3 grandes familles de produits :**\n\n",
    en: "**NTI Solutions offers 3 main product families:**\n\n",
    ar: "**تقدم NTI Solutions 3 عائلات منتجات رئيسية:**\n\n",
  };
  const catLines: Record<Lang, string[]> = {
    fr: [
      "🔵 **Vidéosurveillance** — caméras IP, CCTV, PTZ, thermiques, DVR/NVR → [Voir](/surete/videosurveillance)",
      "🔴 **Sécurité incendie** — détection conventionnelle/adressable, désenfumage, lutte → [Voir](/securite/detection-incendie)",
      "🟠 **Contrôle d'accès** — tourniquets, portes sécurisées, anti-intrusion → [Voir](/surete/controle-acces)",
    ],
    en: [
      "🔵 **Video Surveillance** — IP cameras, CCTV, PTZ, thermal, DVR/NVR → [View](/surete/videosurveillance)",
      "🔴 **Fire Safety** — conventional/addressable detection, smoke extraction, fire fighting → [View](/securite/detection-incendie)",
      "🟠 **Access Control** — turnstiles, secure doors, anti-intrusion → [View](/surete/controle-acces)",
    ],
    ar: [
      "🔵 **المراقبة بالفيديو** — كاميرات IP، CCTV، PTZ، حرارية، DVR/NVR → [عرض](/surete/videosurveillance)",
      "🔴 **السلامة من الحرائق** — كشف تقليدي/عنواني، إخراج دخان، إطفاء → [عرض](/securite/detection-incendie)",
      "🟠 **التحكم في الوصول** — بوابات، أبواب مؤمنة، مكافحة اقتحام → [عرض](/surete/controle-acces)",
    ],
  };
  const outro: Record<Lang, string> = {
    fr: "\n\n[Voir le catalogue complet](/produits) | Pour un devis : **+216 29 600 424**",
    en: "\n\n[View full catalog](/produits) | For a quote: **+216 29 600 424**",
    ar: "\n\n[الكتالوج الكامل](/produits) | للحصول على عرض سعر: **+216 29 600 424**",
  };
  return intro[lang] + catLines[lang].join("\n") + outro[lang];
}

function buildUnknownResponse(lang: Lang): string {
  const msgs: Record<Lang, string> = {
    fr: "Je suis spécialisé dans les systèmes de **sécurité et sûreté** de NTI Solutions. Je peux vous aider sur :\n\n• Vidéosurveillance & caméras\n• Détection incendie\n• Contrôle d'accès & tourniquets\n• Désenfumage & lutte incendie\n• Devis et informations de contact\n\nQue souhaitez-vous savoir ?",
    en: "I specialize in **security and safety** systems from NTI Solutions. I can help with:\n\n• Video surveillance & cameras\n• Fire detection\n• Access control & turnstiles\n• Smoke extraction & fire fighting\n• Quotes and contact information\n\nWhat would you like to know?",
    ar: "أنا متخصص في أنظمة **الأمن والسلامة** من NTI Solutions. يمكنني المساعدة في:\n\n• المراقبة بالفيديو والكاميرات\n• الكشف عن الحرائق\n• التحكم في الوصول والبوابات\n• إخراج الدخان وإطفاء الحرائق\n• عروض الأسعار ومعلومات الاتصال\n\nماذا تريد أن تعرف؟",
  };
  return msgs[lang];
}

// ─── Main fallback engine ────────────────────────────────────────────────────

export function getFallbackResponse(messages: ChatMessage[], lang: Lang = "fr"): string {
  const lastUser = [...messages].reverse().find((m) => m.role === "user");
  if (!lastUser) return buildUnknownResponse(lang);

  const text = lastUser.content;
  const intents = detectIntent(text);
  const primary = intents[0];

  // Static response intents
  const staticIntents: Intent[] = [
    "greeting","quote","contact","company","maintenance","marques","normes","installation",
  ];

  if (staticIntents.includes(primary)) {
    const resp = RESPONSES[primary]?.[lang];
    if (resp) return resp;
  }

  if (primary === "catalogue") return buildCatalogueResponse(lang);

  // Product category intents
  const productIntents: Intent[] = [
    "videosurveillance","incendie","controle_acces","anti_intrusion","desenfumage","lutte_incendie",
  ];
  if (productIntents.includes(primary)) {
    return buildProductIntentResponse(primary, lang);
  }

  // Multiple intents — pick the most specific product one
  for (const intent of intents) {
    if (productIntents.includes(intent)) {
      return buildProductIntentResponse(intent, lang);
    }
  }

  return buildUnknownResponse(lang);
}

// ─── Simulate streaming (chunk the response) ────────────────────────────────

export async function* streamFallbackResponse(
  messages: ChatMessage[],
  lang: Lang
): AsyncGenerator<string> {
  const response = getFallbackResponse(messages, lang);
  // Stream word by word for natural feel
  const words = response.split(/(\s+)/);
  for (const chunk of words) {
    yield chunk;
    // Small delay between words for streaming effect
    await new Promise((r) => setTimeout(r, 18 + Math.random() * 22));
  }
}
