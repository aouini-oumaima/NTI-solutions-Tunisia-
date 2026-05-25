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
