# NTI Solutions — Rebuild Package

Site source scrapé et préparé pour reconstruction du site http://ntisolutions.com.tn/
en version moderne et professionnelle via **Claude Code**.

## 📁 Fichiers

| Fichier | Rôle |
|---|---|
| **`CONTENT.md`** | Tout le contenu textuel du site, nettoyé et structuré (navigation, copy, contacts, services, problèmes à corriger). |
| **`CLAUDE.md`** | Brief technique pour Claude Code : stack, design system, structure, composants, exigences SEO/A11y, livrables. |

## 🚀 Comment l'utiliser avec Claude Code

### Étape 1 — Préparer un dossier projet vide
```bash
mkdir nti-solutions-v2
cd nti-solutions-v2
```

### Étape 2 — Copier les deux fichiers à la racine
Place `CONTENT.md` et `CLAUDE.md` dans `nti-solutions-v2/`.

### Étape 3 — Lancer Claude Code
```bash
claude
```

### Étape 4 — Donne-lui ce prompt initial
> Lis `CLAUDE.md` et `CONTENT.md` intégralement. Ensuite, initialise le projet Next.js 14
> selon le brief, et commence par construire la page d'accueil. Pose-moi des questions
> avant chaque grande étape si tu as un doute. Confirme d'abord la stack, puis go.

Claude Code va :
1. Lire les deux fichiers
2. Créer le projet Next.js + Tailwind + shadcn/ui
3. Bâtir la page d'accueil
4. Continuer page par page

### Étape 5 — Itère
À chaque étape, regarde le rendu (`npm run dev`), donne du feedback, demande des ajustements.

## 💡 Conseils

- **Ne change pas `CONTENT.md`** sans raison — c'est la source de vérité.
- Si tu veux changer la palette ou la stack, édite `CLAUDE.md` AVANT de lancer Claude Code.
- Garde Git activé dès le départ : `git init && git commit -am "initial"` après chaque grosse étape.
- Pour le déploiement, Vercel = le plus simple (gratuit, intégré Next.js, déploiement push-to-deploy).

## ⚠️ Choses à valider avec le client AVANT de coder

Voir la fin de `CLAUDE.md` section "Questions à poser au client" — surtout :
- logo SVG haute résolution
- photos réelles vs stock
- langues à couvrir en v1
- domaine final
# CLAUDE.md — NTI Solutions Website Rebuild Brief

## YOUR MISSION

Build a modern, professional, beautiful corporate website for **NTI Solutions**, a Tunisian
B2B company specialized in security and safety systems (fire detection, fire fighting,
smoke extraction, access control, video surveillance, anti-intrusion).

The complete site content (cleaned and structured) is in **`CONTENT.md`** — that file is the
single source of truth for all copy, structure, and contact info. Read it fully before starting.

---

## TECH STACK (recommended)

Use **Next.js 14+ (App Router) + TypeScript + Tailwind CSS + shadcn/ui + Framer Motion**.

- **Framework:** Next.js 14 App Router
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS
- **Components:** shadcn/ui (Button, Card, Sheet for mobile menu, Accordion for FAQ, Form, Dialog)
- **Icons:** lucide-react
- **Animations:** Framer Motion (subtle — fade/slide on scroll, hover lifts)
- **Forms:** react-hook-form + zod validation
- **i18n:** next-intl (FR default, EN secondary; leave AR scaffold optional)
- **Images:** next/image, optimize all assets, prefer modern stock from Unsplash/Pexels
- **Fonts:** Inter (corps) + Space Grotesk or Plus Jakarta Sans (titres) via next/font
- **SEO:** next-seo or App Router metadata API, OpenGraph images, sitemap.xml, robots.txt

If the user prefers a simpler stack (just HTML/CSS/JS or Astro), adapt — but keep the design
quality identical.

---

## DESIGN DIRECTION

**Tone:** Sérieux, technique, rassurant, premium. C'est du B2B critique (sécurité incendie =
vies humaines). Pas de gadgets, pas de gradient flashy, pas d'emojis dans le UI.

**Inspiration de référence:** Bosch Security, Honeywell, Siemens Building Technologies, Securitas,
Tyco, Hochiki, Apollo Fire — sites corporates qui inspirent compétence technique.

### Palette suggérée

```
--primary:        #0F2C4A   (bleu nuit profond — confiance, sérieux)
--primary-light:  #1E4A7B
--accent:         #E63946   (rouge sécurité — feu, urgence) — usage parcimonieux
--accent-warm:    #F77F00   (orange — pour CTA secondaires si besoin)
--neutral-bg:     #F8FAFC   (presque blanc)
--neutral-card:   #FFFFFF
--neutral-border: #E2E8F0
--text-primary:   #0F172A
--text-secondary: #475569
--success:        #16A34A   (pour badges "certifié", "conforme")
```

Le rouge `#E63946` est l'accent principal mais doit être utilisé chirurgicalement
(badges, hover, icônes critiques) — surtout pas en grande surface.

### Typographie
- Titres : Space Grotesk ou Plus Jakarta Sans, weight 600–700, tracking -0.02em
- Corps : Inter, weight 400, ligne 1.65
- H1 ~ 56px desktop / 36px mobile, H2 ~ 40/28, H3 ~ 24/20

### Esthétique
- **Beaucoup de blanc**, sections généreuses (py-24 desktop, py-16 mobile)
- Cartes avec bordures fines `1px solid neutral-border` plutôt que des shadows lourdes
- Icônes lucide-react cohérentes (stroke-width 1.5)
- Photos pleine largeur avec **overlay sombre + texte blanc** pour les hero/CTA
- Hovers subtils : translate-y -2px + shadow douce
- Pas d'animations distrayantes — uniquement fade/slide-up à l'apparition (intersection observer)
- Coins légèrement arrondis (rounded-lg = 8px), pas de border-radius énorme

---

## STRUCTURE DU SITE (pages à créer)

```
/                            → Accueil
/a-propos                    → Histoire, valeurs, mot du fondateur
/sureté                      → Vue d'ensemble Système de sûreté
/sureté/videosurveillance    → Vidéosurveillance détaillée
/sureté/controle-acces       → Contrôle d'accès vue d'ensemble
/sureté/controle-acces/tourniquets
/sureté/controle-acces/anti-intrusion
/securite                    → Vue d'ensemble Système de sécurité
/securite/detection-incendie → Sécurité incendie
/securite/detection-incendie/conventionnel
/securite/detection-incendie/adressable
/securite/detection-incendie/composants
/securite/desenfumage        → Désenfumage et compartimentage
/securite/lutte-incendie     → Lutte contre les incendies
/recrutement                 → Page carrière (placeholder + form simple)
/contact                     → Formulaire + carte + coordonnées
```

Routes en français avec `/[locale]/...` si i18n actif (`/fr/sureté/...`, `/en/safety/...`).

---

## SECTIONS DE LA PAGE D'ACCUEIL

1. **Header sticky** — logo NTI, nav, CTA "Demander un devis", sélecteur langue (FR/EN), burger mobile
2. **Hero** — image pompier en arrière-plan + overlay sombre, headline "Nous sécurisons la sûreté.",
   sous-titre court, deux CTA ("Nos solutions" / "Demander un devis")
3. **Bandeau confiance** — 3-4 chiffres clés (Depuis 2013, X+ projets, X+ clients, couverture nationale)
4. **Nos domaines d'expertise** — 6 cartes grandes images (vidéosurveillance, contrôle d'accès,
   anti-intrusion, détection incendie, désenfumage, lutte incendie). Hover lift, lien vers la page dédiée.
5. **À propos résumé** — 2 colonnes : texte court + image. CTA "Découvrir notre histoire"
6. **Nos valeurs** — 4 cartes (Confiance, Intégration, Pérennité, Proximité) avec icônes lucide
7. **Marques partenaires** — logos Hochiki, Apollo, Dahua (en niveaux de gris, mention "Nous travaillons avec les meilleurs équipementiers")
8. **Processus** — timeline horizontale 4 étapes (Étude → Conception → Installation → Maintenance)
9. **CTA final** — bandeau pleine largeur sombre "Un projet de sécurité ? Parlons-en." + bouton
10. **Footer** — coordonnées Tunis, plan du site, mentions légales, année dynamique

---

## COMPOSANTS RÉUTILISABLES À CRÉER

```
components/
  layout/
    Header.tsx          (sticky, transparent → opaque on scroll)
    Footer.tsx
    LocaleSwitcher.tsx
  ui/                   (shadcn/ui — installer via CLI)
  sections/
    Hero.tsx
    StatsBar.tsx
    ServiceCard.tsx     (image, titre, courte description, "En savoir plus →")
    ServiceGrid.tsx
    ValueCard.tsx       (icône, titre, description)
    BrandLogos.tsx
    ProcessTimeline.tsx
    CTABanner.tsx
    PageHeader.tsx      (breadcrumb + titre + image bannière pour pages internes)
  forms/
    ContactForm.tsx     (react-hook-form + zod, action server)
    QuoteRequestForm.tsx
```

---

## PAGES INTERNES — PATTERN

Chaque page produit suit la même structure :
1. **PageHeader** avec image héro + breadcrumb + titre H1
2. **Section intro** : 1 paragraphe + image latérale
3. **Sections produits** : alterner image gauche/droite avec texte, ou grille de cards
4. **Tableau spécifications** quand pertinent (ex. compatibilités Hochiki/Apollo)
5. **Bloc CTA** en fin de page : "Besoin d'une étude personnalisée ? Contactez-nous"

---

## FORMULAIRE DE CONTACT — règles

- Champs : Nom*, Email*, Téléphone, Société, Sujet (select : Devis / Information / Maintenance / Autre), Message*
- Validation zod : email valide, téléphone optionnel (regex tunisien `^(\+216)?[0-9]{8}$`)
- État de chargement, message succès, gestion d'erreurs
- Server Action Next.js qui envoie via Resend, Nodemailer, ou simple mailto en fallback
- reCAPTCHA v3 ou Cloudflare Turnstile contre le spam
- RGPD : checkbox "J'accepte que mes données soient utilisées pour répondre à ma demande"

---

## SEO & PERF — exigences

- Lighthouse score ≥ 95 sur les 4 axes
- Toutes les images en `next/image` avec `priority` sur le hero, lazy ailleurs, dimensions explicites
- Metadata complète par page (title, description, OG image, locale)
- `sitemap.xml` et `robots.txt` générés
- JSON-LD `Organization` + `LocalBusiness` (avec adresse Tunis, GPS, horaires)
- `lang="fr"` (ou locale active) sur `<html>`
- Structure heading correcte (un seul H1 par page)
- Liens internes en `<Link>`, externes avec `rel="noopener noreferrer"`

---

## ACCESSIBILITÉ

- Contraste AA minimum partout (vérifier le rouge accent sur fond blanc)
- Tous les inputs ont des labels associés
- Focus rings visibles (Tailwind `focus-visible:ring-2`)
- Skip-to-content link
- Alt text descriptifs sur toutes les images
- Navigation clavier sur le menu burger et les accordéons
- ARIA roles sur les nav, main, footer

---

## CE QU'IL FAUT ABSOLUMENT ÉVITER

❌ Lorem ipsum résiduel
❌ Adresse "Minneapolis" du site actuel — c'est une boîte tunisienne, adresse à Tunis
❌ Email "xtemos@gmail.com" — utiliser contact@ntisolutions.com.tn
❌ Widgets e-commerce (panier, wishlist, login client) — ce n'est PAS un e-commerce
❌ Liens "voir plus" qui ne mènent nulle part
❌ Sliders/carousels lourds (RevSlider) — utiliser des images statiques optimisées
❌ Stock photos cliché "homme en costume serre la main" — préférer photos techniques crédibles
❌ Trop de couleurs, gradients criards, neon
❌ Footer "© 2021" — utiliser `new Date().getFullYear()`

---

## LIVRABLE ATTENDU

```
nti-solutions/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx
│   │   ├── page.tsx                       # accueil
│   │   ├── a-propos/page.tsx
│   │   ├── surete/page.tsx
│   │   ├── surete/videosurveillance/page.tsx
│   │   ├── surete/controle-acces/page.tsx
│   │   ├── surete/controle-acces/tourniquets/page.tsx
│   │   ├── surete/controle-acces/anti-intrusion/page.tsx
│   │   ├── securite/page.tsx
│   │   ├── securite/detection-incendie/page.tsx
│   │   ├── securite/detection-incendie/conventionnel/page.tsx
│   │   ├── securite/detection-incendie/adressable/page.tsx
│   │   ├── securite/detection-incendie/composants/page.tsx
│   │   ├── securite/desenfumage/page.tsx
│   │   ├── securite/lutte-incendie/page.tsx
│   │   ├── recrutement/page.tsx
│   │   └── contact/page.tsx
│   ├── api/contact/route.ts               # API contact
│   ├── sitemap.ts
│   ├── robots.ts
│   └── globals.css
├── components/...
├── messages/
│   ├── fr.json
│   └── en.json
├── lib/...
├── public/
│   ├── images/...                         # images optimisées
│   ├── og-image.jpg
│   └── favicon.ico
├── tailwind.config.ts
├── next.config.mjs
├── package.json
└── README.md                              # instructions installation + déploiement Vercel
```

---

## ÉTAPES DE TRAVAIL SUGGÉRÉES POUR CLAUDE CODE

1. Lire CONTENT.md intégralement
2. Initialiser le projet Next.js 14 + TypeScript + Tailwind + shadcn/ui
3. Configurer next-intl avec FR/EN, créer messages/fr.json en injectant tout CONTENT.md
4. Construire les composants layout (Header, Footer, LocaleSwitcher)
5. Construire la page d'accueil section par section
6. Construire le template PageHeader puis dérouler chaque page interne
7. Implémenter le formulaire de contact + API route
8. SEO : metadata, sitemap, robots, JSON-LD
9. Optimiser les images, Lighthouse pass
10. README avec commandes `npm install`, `npm run dev`, déploiement Vercel

---

## QUESTIONS À POSER AU CLIENT (si possible) AVANT DE COMMENCER

1. Logo en SVG haute résolution (le PNG actuel est moyen)
2. Photos réelles de l'équipe / installations (sinon stock pro)
3. Liste exacte des marques partenaires officielles (Hochiki, Apollo, Dahua confirmés ; autres ?)
4. Références clients citables (avec accord)
5. Veulent-ils un blog / actualités ? (Non implémenté par défaut)
6. Hébergement final : Vercel ? OVH ? Hébergeur tunisien ?
7. Domaine final : ntisolutions.com.tn (existant) ou nouveau ?
8. Besoin EN/AR dès v1 ou seulement FR ?
# NTI SOLUTIONS — Site Content (Scraped & Cleaned)

> Source: http://ntisolutions.com.tn/ — content scraped May 2026, cleaned of WordPress chrome,
> placeholder lorem ipsum, and broken e-commerce widgets that were left over from the old theme.
> All copy is in **French** (the new site should stay in French; optionally add EN/AR toggles).

---

## 1. COMPANY IDENTITY

- **Name:** NTI Solutions
- **Founded:** 2013
- **Country:** Tunisia
- **Tagline (current):** « Nous sécurisons la sûreté »
- **Mission statement (current):**
  Intégration de solutions électroniques et opération dans le domaine de la sécurité.
  Large gamme de produits et de solutions développés pour la détection et la lutte contre les incendies,
  le désenfumage, le contrôle d'accès, l'anti-intrusion et la vidéosurveillance.

### Founder's note
> Nous ne pouvons pas, à nous seuls, garantir notre sécurité, défendre et sécuriser nos rues, nos
> maisons, nos entreprises et nos villes. J'ai décidé de créer NTI Solutions pour répondre à tous
> les problèmes liés à la sécurité. Je crois en cette équipe, je crois en nous, je crois en vous,
> et je garantis votre sécurité.

### Core values (4)
1. **Confiance** — Réputation de qualité et de confiance pour offrir une excellente qualité, sérénité et tranquillité.
2. **Intégration** — Intégration et maintenance multimarques des installations de sûreté et de sécurité.
3. **Pérennité** — Équipe qualifiée qui suit le client de l'avant-projet à la maintenance de l'installation.
4. **Proximité** — Intervention sur l'ensemble du territoire national tunisien.

---

## 2. CONTACT INFORMATION

| Field | Value |
|---|---|
| Adresse | 3, Rue Ibrahim Cherif, Cité Olympique — 1003 Tunis — Tunisie |
| Téléphone fixe | (+216) 71 805 945 |
| Mobile | (+216) 29 600 424 |
| Fax | (+216) 71 805 944 |
| Email | contact@ntisolutions.com.tn |
| Heures | Lundi–Vendredi 9h00–19h00 · Samedi 10h00–17h00 |

> ⚠️ The current contact page on the live site contains lorem ipsum placeholder text and a wrong
> US address ("8099 Trenton St., Minneapolis, MN") — IGNORE that. The real address is the Tunis one above.

---

## 3. SITE STRUCTURE / NAVIGATION

```
Accueil
├── Système de sûreté
│   ├── Vidéosurveillance
│   ├── Contrôle d'accès
│   │   ├── Tourniquets
│   │   └── Portes (Anti-intrusion)
│   └── (Contrôle d'accès véhicules — sub-section)
│
├── Système de sécurité
│   ├── Sécurité incendie (détection)
│   │   ├── Conventionnel
│   │   ├── Adressable (Solution F1 / F2)
│   │   └── Composants
│   ├── Désenfumage et compartimentage
│   └── Lutte contre les incendies
│
├── À propos / Histoire
├── Recrutement
└── Contact
```

---

## 4. PAGE-BY-PAGE CONTENT

### 4.1 — HOME / ACCUEIL

**Hero headline:** Nous sécurisons la sûreté.
**Hero sub:** NTI Solutions, fondée en 2013. Une large gamme de produits et solutions pour la détection
et la lutte contre les incendies, le désenfumage, le contrôle d'accès, l'anti-intrusion et la vidéosurveillance.

**Secondary slogan:** « N'ayez plus peur — nous prenons en charge votre sécurité. »
Nos solutions sont élaborées selon les spécificités et demandes de chaque client pour assurer une
sécurité optimale et sur-mesure.

**Services teasers (4 cards on homepage):**
1. **Détection automatique incendie** — Centrale de détection nouvelle génération dotée d'une interface facile.
2. **Lutte contre l'incendie** — Équipe d'ingénieurs et de techniciens qualifiés.
3. **Désenfumage naturel et mécanique** — Par nos professionnels du secours incendie.
4. **Compartimentage coupe-feu** — Diviser votre espace en plusieurs volumes et confiner.

---

### 4.2 — VIDÉOSURVEILLANCE

#### Caméras numériques IP
Caméras qui procurent des vidéos en haute résolution tout en minimisant la bande passante grâce à
la compression. La visualisation peut être effectuée par ordinateur, décodeur, PDA ou smartphone.

#### Caméras numériques CCTV (circuit fermé)
Dotées d'un système permettant la liaison directe à un moniteur. Transmission vidéo en temps réel
via câble coaxial. Pour enregistrer les vidéos, raccordement à un enregistreur numérique DVR.

#### Équipements de réception (5 types)

| Type | Description |
|---|---|
| **Caméras immobiles** | Champ de vision fixe, clair, dissuasif. Monture CS et objectif interchangeable. |
| **Caméras Fixed Bullet** | Minces et compactes, éclairage IR, haute résolution, intérieur/extérieur. |
| **Caméras dômes fixes** | Boîtier dôme protégé contre déréglage et chocs. Orientation cachée. |
| **Caméras PTZ** | Tournables, inclinables, avec zoom. Couvrent zones étendues et petits détails. |
| **Caméras thermiques** | Détection dans l'obscurité absolue grâce au rayonnement thermique. |

#### Équipements de gestion (3 types)

| Type | Description |
|---|---|
| **DVR** | Enregistre signal vidéo numérique sur disque dur, mémoire flash, DVD ou CD. |
| **NVR** (Network Video Recorder) | Enregistre flux IP venant du réseau, médium courant : disque dur. |
| **XVR** | Multi-technologies : CVBS, HDCVI, AHD, HDTVI sur un même appareil (ex. Dahua). |

---

### 4.3 — CONTRÔLE D'ACCÈS

**Définition :** Solutions techniques pour sécuriser et gérer les accès physiques à un bâtiment ou un site.

**Objectifs :**
- Protéger bâtiments, biens et marchandises
- Prévenir les intrusions de personnes non habilitées
- Éviter et dissuader les actes de malveillance
- Sécuriser le personnel

#### Sous-systèmes

##### Système de contrôle de ronde
Système d'automatisation et de tour de patrouille pour les lieux à contrôler périodiquement
(usines, entrepôts, chantiers, unités militaires). Définit les moments de contrôle des points
de sécurité et génère des rapports automatiques.

##### Système de contrôle d'accès de tourniquet
Choix lié au système de sécurité du lieu. Contrôle des heures d'entrée/sortie : réfectoires, stades,
musées, lieux touristiques.

**Trois variantes :**
1. **Tourniquet barreaudé** — haut niveau de sécurité, franchissement unipersonnel piéton, ancrage
   sol robuste, configurable en sens unique ou bidirectionnel. Idéal entrée de site / zones sécurisées.
2. **Tourniquet tripode** — plus compact, unicité de passage, idéal entrées salariés (1 entrée à la fois).
   Activé par lecteur d'accès intégré ou piloté à distance.
3. **Couloir sécurisé de passage** — unicité de passage à l'intérieur des bâtiments, gestion de flux
   jusqu'à 2× plus rapide qu'un tripode. Esthétique discrète et épurée, intégration architecturale facile.

##### Système de contrôle d'accès des véhicules
Pour zones de transition sûres et contrôlées.
- Barrières de bras (zones résidentielles et publiques) — compatibles cartes, RFID, télécommandes, boutons.
- Barrières champignons et bloqueurs de routes.

##### Système anti-intrusion (contrôle d'accès des portes)
Alarme indispensable pour habitations et entreprises. Sans fil ou filaire.

**Composants :**
- Capteurs de mouvement (passage / déplacement)
- Détecteurs d'ouverture (portes / fenêtres)
- Centrale d'alarme
- Sirène
- Transmetteur GSM (notification téléphone)

**Types de détecteurs :**
- Périphériques extérieurs : infrarouges actifs, barrière hyperfréquence, câbles enterrés
- Périmétriques : ouverture (contact magnétique), choc (vitres), rideau, sismiques, volumétriques (IR passif, ultrason, hyperfréquence)

**Coût :** variable selon superficie, nombre de portes/fenêtres, technologies. Les meilleurs systèmes
ont **double technologie** (IR + hyperfréquence, ou ultrason + IR) pour éviter les déclenchements intempestifs.

---

### 4.4 — SÉCURITÉ INCENDIE

**Système de détection incendie :** conventionnel ou adressable. Assure la détection d'un phénomène
lié au développement d'un feu, le localise, et envoie l'information pour activer les commandes
adéquates. Comprend au minimum les **détecteurs automatiques** et l'**équipement de contrôle et
de signalisation (ECS)**. L'alarme prévient les occupants et provoque l'évacuation.

#### Type 1 : Conventionnel
Couvre 2, 4 ou 6 zones. Compatible avec :
- Détecteurs et modules **HOCHIKI ESP**
- Détecteurs **Apollo** séries Xplorer, XP95, Discover

3 relais programmables, 3000 messages d'événements, carte d'extension RS 485.
Détection au niveau de l'ensemble des boucles d'organes.

#### Type 2 : Adressable
Identification et localisation de zones distinctes sur une même boucle.

##### Solution F2 (petites propriétés)
- Centrale 1 boucle, dernière génération
- Extensible par cartes
- Modules pompiers, interfaces RS-485
- Compatible Hochiki ESP + Apollo XPlorer/XP95/Discover

##### Solution F1 (moyennes/grandes propriétés)
Centrale modulaire dernière génération. Deux configurations :
- 2 à 6 boucles
- 6 à 18 boucles

**Atouts :**
- **Fiabilité** — panneau de commande tactile (laque piézo), pas de pièces d'usure mécanique, robuste contre nettoyage et CEM.
- **Flexibilité** — compatible quasi tous détecteurs du marché (Hochiki, Apollo).
- **Extensibilité** — modem analogique/RNIS, serveur web pour intégration internet, télémaintenance et diagnostic.

**Rôle de la centrale :**
- Gérer le réseau de détection (mode dérangement / alarme feu)
- Avertir les personnes sur site
- Alimenter les éléments de sécurité (même en cas de coupure)
- Gérer le transmetteur d'alarme
- Générer la séquence de transmission d'alarme

#### Composants d'un système de détection incendie

| Composant | Rôle |
|---|---|
| **Détecteurs** | Chaleur, thermostatique, optique ponctuel de fumée, optique linéaire de fumée. Surveillent les phénomènes chimiques d'un incendie. |
| **BBG / Déclencheur manuel (DM)** | Signale manuellement la présence d'un incendie ; envoie l'info à l'ECS, CMSI ou BAAS. |
| **Sirène / Diffuseur sonore** | Signal d'alarme générale. Niveau sonore > bruit ambiant, audible partout, durée min. 5 min. Autonomes (BAAS) ou non. |
| **Indicateur d'action** | Visualisation immédiate du détecteur en action. Indispensable pour combles, faux-plafonds, locaux fermés. Saillie ou encastré, lumineux ± sonore. |

---

### 4.5 — DÉSENFUMAGE ET COMPARTIMENTAGE

**Désenfumage :** évacuer une partie des fumées en créant une hauteur d'air libre sous la couche de fumée.

**Buts :**
- Faciliter l'évacuation des occupants
- Limiter la propagation de l'incendie
- Permettre l'accès des locaux aux pompiers

**Deux principes :**
1. Évacuation fumée/gaz/chaleur via exutoires en toiture et ouvertures en façade
2. Amenée d'air neuf en partie basse

#### Désenfumage naturel
Tirage thermique naturel. Installation d'**exutoires de désenfumage type SKYDOME**.

#### Désenfumage mécanique
Renouvellement d'air carbonisé par installation de **tourelles** et **extracteurs de désenfumage**.

#### Écrans de cantonnement
Solution complémentaire.

#### Compartimentage
Réalisé par **portes coupe-feu** ou **rideaux d'eau**.

---

### 4.6 — LUTTE CONTRE LES INCENDIES

**Principe :** priver le feu de l'un des trois éléments du triangle du feu — **combustible**,
**comburant**, **énergie d'activation**.

**Moyens à adapter au risque incendie présent dans l'entreprise.**

#### Réseau Incendie Armé (RIA)
Comporte :
- Un poste **RIA** ou **PIA**
- Tuyauterie
- Surpresseur
- Bâche à eau

#### Extinction automatique à gaz
Solution alternative.

> Citation utilisée sur le site (Nelson Mandela) :
> « Un être humain, c'est un être de lumière libre, qui se fait braise quand il tombe, qui se fait
> incendie quand il se relève. »
> *Note pour le redesign : on peut garder ou retirer cette citation — elle est jolie mais facultative.*

---

## 5. ASSETS DISPONIBLES (URLs des images du site actuel)

> Pour réutiliser les images du site existant, voici les URLs. Le mieux est probablement d'utiliser
> de nouvelles images de meilleure qualité (Unsplash, Pexels — chercher : "fire safety", "cctv camera",
> "access control", "security system", "firefighter", "smoke detector").

- Logo blanc : http://ntisolutions.com.tn/wp-content/uploads/2021/07/logo-blanc.png
- Hero pompier : http://ntisolutions.com.tn/wp-content/uploads/2021/07/panoramic-firefighter-team-use-water-fog-type-fire-extinguisher-fight-with-flame-1-scaled.jpg
- Pompiers tuyau : http://ntisolutions.com.tn/wp-content/uploads/2021/04/firemen-using-water-from-hose-fire-fighting-firefight-training-insurance-group.jpg
- Caméra IP : http://ntisolutions.com.tn/wp-content/uploads/2021/07/camera-ip-1.jpg
- Caméra CCTV : http://ntisolutions.com.tn/wp-content/uploads/2021/07/camera-numerique-cctv.jpg
- Caméras immobiles : http://ntisolutions.com.tn/wp-content/uploads/2021/07/camera-immobiles-1-1.jpg
- Caméra fixed bullet : http://ntisolutions.com.tn/wp-content/uploads/2021/07/camera-fixed-bullet-1.jpg
- Caméras dômes : http://ntisolutions.com.tn/wp-content/uploads/2021/07/camera-domes-fixes-1.jpg
- Caméra PTZ : http://ntisolutions.com.tn/wp-content/uploads/2021/07/camera-ptz.jpg
- Caméras thermiques : http://ntisolutions.com.tn/wp-content/uploads/2021/07/camera-thermiques-1.jpg
- DVR : http://ntisolutions.com.tn/wp-content/uploads/2021/07/equipement-de-gestion-DVR.jpg
- NVR : http://ntisolutions.com.tn/wp-content/uploads/2021/07/equipement-de-gestion-NVR.jpg
- XVR : http://ntisolutions.com.tn/wp-content/uploads/2021/07/equipement-de-gestion-XVR.jpg
- Contrôle d'accès : http://ntisolutions.com.tn/wp-content/uploads/2021/07/controle-dacces-1.jpg
- Tourniquet barreaudé : http://ntisolutions.com.tn/wp-content/uploads/2021/07/systeme-de-tournique-barreaude.jpg
- Tourniquet tripode : http://ntisolutions.com.tn/wp-content/uploads/2021/07/systeme-de-tourniquet-tripod.jpg
- Couloir sécurisé : http://ntisolutions.com.tn/wp-content/uploads/2021/07/couloir.jpg
- Système ronde : http://ntisolutions.com.tn/wp-content/uploads/2021/07/systeme-de-comtrole-de-ronde-1.jpg
- Voitures : http://ntisolutions.com.tn/wp-content/uploads/2021/07/VOITURES.jpg
- Portes : http://ntisolutions.com.tn/wp-content/uploads/2021/07/PORTES.jpg
- Sécurité incendie : http://ntisolutions.com.tn/wp-content/uploads/2021/07/Le-systeme-de-securite-incendie.jpg.png
- Système conventionnel : http://ntisolutions.com.tn/wp-content/uploads/2021/07/Conventionnel.jpg.png
- Désenfumage : http://ntisolutions.com.tn/wp-content/uploads/2021/07/Desenfumage-et-compartimentage-1.png
- Lutte incendie : http://ntisolutions.com.tn/wp-content/uploads/2021/07/lutte.png

---

## 6. PROBLÈMES À CORRIGER (du site actuel)

Le redesign doit éviter ces défauts du site existant :

1. **Lorem ipsum** dans la section "Informations de contact" de l'accueil → REMPLACER par texte réel
2. **Mauvaise adresse** sur la page Contact ("8099 Trenton St., Minneapolis") → utiliser la vraie adresse Tunis
3. **Email factice** sur Contact ("xtemos@gmail.com") → utiliser contact@ntisolutions.com.tn
4. **Liens "Voir plus" cassés** sur certaines cartes services → tous les liens doivent fonctionner
5. **Widgets WooCommerce inutiles** (panier, wishlist, login/register, brands Vitra/Magisso/etc.) → SUPPRIMER, ce n'est pas un e-commerce
6. **Footer "2021"** obsolète → utiliser année dynamique
7. **Reste de thème WoodMart** (theme commerce détourné) → repartir from scratch
8. **Pas de version EN/AR** → ajouter sélecteur de langue (FR par défaut, EN et AR optionnels)
9. **Pas de SEO** propre, métadescriptions absentes
10. **Pas responsive optimal**, lourdeur Slider Revolution
