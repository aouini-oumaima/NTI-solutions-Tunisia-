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
