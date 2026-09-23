# CLAUDE.md — Projet Ocré Peinture (Malek)
> Fichier de contexte à coller en début de session Claude Code

---

## IDENTITÉ DU PROJET

- **Nom commercial** : Ocré · Peinture Professionnelle
- **Client** : Malek (artisan peintre, ami de confiance)
- **Activité** : Peinture intérieure, extérieure, ravalement de façade — Gironde & Aquitaine
- **Téléphone** : +33 7 82 67 44 94
- **Email** : ocre.peinture.aquitaine@gmail.com
- **Zone d'intervention** : Bordeaux et agglomération, Bassin d'Arcachon, Bayonne, Pau, Mont-de-Marsan (Gironde 33, Landes 40, Pyrénées-Atlantiques 64, Lot-et-Garonne 47)
- **Expérience** : 10 ans d'activité en Gironde

---

## STACK TECHNIQUE

- **Framework** : React (Create React App)
- **Repo GitHub** : sabrina33-creator/ocre-peinture
- **Déploiement** : Netlify — auto-deploy sur push
- **URL live** : https://ocre-peinture.fr
- **GA4** : G-QQSXYNBXY2

---

## STRUCTURE DES FICHIERS

```
src/
├── App.js          ← composant principal, toutes les sections + routes (react-router-dom)
├── Seo.jsx         ← title/description/canonical dynamiques par page (ajouté 23/09/2026)
├── App.css         ← styles globaux, tokens CSS
├── analytics.js    ← wrapper trackEvent GA4
├── index.css       ← reset + base
└── [photos]
    ├── hero.jpg
    ├── photopeinture.jpg / photopeinture1.jpg
    ├── salon2.jpg / salonnetflix.png
    ├── remise.jpg
    └── Malek.jpeg

public/
├── index.html      ← meta SEO, GA4, JSON-LD, Google Fonts
├── og-image.jpg    ← copie de hero.jpg pour og:image (ajouté 08/07/2026)
├── ocrelogo.png    ← logo principal
├── sitemap.xml     ← 3 URLs (/, /services, /contact) depuis 23/09/2026
├── _redirects      ← fallback SPA Netlify (ajouté 23/09/2026, indispensable pour /services et /contact)
└── favicon.png
```

**Routes (depuis le 23/09/2026) :** `/` (Accueil), `/services`, `/contact` — voir section SEO / INDEXATION GOOGLE ci-dessous pour le contexte.

---

## IDENTITÉ VISUELLE

| Élément | Valeur |
|---|---|
| Couleur principale | Terra #C4813A |
| Couleur texte | Sage #2B3440 |
| Fond | Cream #FAF7F2 |
| Typographie titres | **Fraunces**, Georgia, serif |
| Typographie corps | **Figtree**, sans-serif |
| Style général | Sobre, artisanal, chaleureux |

**Couleurs complètes (objet C dans App.js) :**
- cream: `#FAF7F2`
- warmWhite: `#FFFDF9`
- beige: `#EDE5D8`
- sand: `#8C8680`
- terra: `#C4813A`
- sage: `#2B3440`
- sageDark: `#1E2630`
- dark: `#1A1A1A`
- darkSoft: `#4A4A48`
- white: `#FFFFFF`

---

## SERVICES ET TARIFS

- **Peinture intérieure** (murs, plafonds, boiseries) : 25-40€/m²
- **Peinture extérieure et façades** : devis sur place
- **Papiers peints et enduits décoratifs** : devis personnalisé
- **Chantiers professionnels** (bureaux, commerces, copropriétés) : devis
- **Remise en état** (après sinistre, départ locataire) : intervention rapide
- Devis gratuit, déplacement sans engagement, réponse sous 48h

---

## CE QUI EST FAIT ✅

- Site React livré et en ligne : https://ocre-peinture.fr
- Netlify auto-deploy configuré
- GA4 intégré (G-QQSXYNBXY2), `send_page_view: false`
- JSON-LD complet : LocalBusiness + HomeAndConstructionBusiness, WebSite, FAQPage (7 questions)
- Meta SEO : title, description, canonical
- **SEO corrigé (08/07/2026) :**
  - Open Graph ajouté : og:type, og:url, og:title, og:description, og:image, og:locale
  - Twitter card ajouté : twitter:card, twitter:title, twitter:description
  - og:image : `https://ocre-peinture.fr/og-image.jpg` (hero.jpg copié dans public/)
  - Polices remplacées : Playfair Display → **Fraunces**, DM Sans → **Figtree** (index.html + App.css + App.js)
- GMB créé — en attente validation vidéo de Malek

---

## CE QUI RESTE À FAIRE ⏳

- [ ] GMB : Malek doit filmer l'extérieur de son local → envoyer la vidéo → validation 1-3 jours
- [ ] Vrai numéro WhatsApp Malek → vérifier dans App.js et remplacer si placeholder
- [ ] Ajouter `sameAs` GMB dans le JSON-LD dès que la fiche est validée
- [ ] 5 premiers avis GMB dès que la fiche est active
- [ ] Page /realisations si chantiers > 5

---

## AGENT WHATSAPP IA — n8n ⏳ EN ATTENTE

**Statut : workflow créé, EN ATTENTE que Malek ait WhatsApp Business**

- Workflow n8n : `hqKp6XAQfOn33ojN`
- URL n8n : https://n8n.srv980557.hstgr.cloud/workflow/hqKp6XAQfOn33ojN
- Webhook test : POST `https://n8n.srv980557.hstgr.cloud/webhook/malek-agent`
- Body test : `{"phone": "0600000000", "message": "Bonjour, disponible jeudi ?"}`

**Ce que fait l'agent (quand activé) :**
1. Reçoit les messages WhatsApp des clients
2. Répond aux questions (tarifs, services, zone)
3. Vérifie les créneaux disponibles (Google Calendar de Malek)
4. Crée le RDV dans le calendrier si confirmé
5. Envoie un email à Malek à chaque nouveau RDV

**Stack :** n8n + Claude Sonnet 4.6 + Google Calendar OAuth2 + Gmail OAuth2

**Credentials à configurer dans n8n (quand Malek est prêt) :**
- [ ] Credential "Anthropic API" → clé sk-ant-...
- [ ] Credential "Google Calendar Malek" → compte Google de Malek (OAuth2) + créer calendrier "Planning Malek"
- [ ] Credential "Gmail Malek" → Gmail de Malek (OAuth2)
- [ ] Saisir l'email de Malek dans le noeud "Email Malek — Nouveau RDV"

**Quand Malek a WhatsApp Business :**
- Remplacer le noeud Webhook par WhatsApp Business (Meta) ou Twilio
- Option recommandée pour commencer : Twilio sandbox (gratuit, scan QR personnel)
- Tout le reste du workflow reste intact

---

## SEO / INDEXATION GOOGLE

### 2026-09-23 — Migration vers de vraies URLs par page + indexation initiale

**Constat de départ :** le site n'avait aucun routing — "Accueil", "Services", "Devis" étaient de simples changements d'état React (`setPage(...)`) sans jamais changer l'URL affichée. Conséquence : Google Search Console ne pouvait connaître/indexer qu'une seule URL (`https://ocre-peinture.fr/`), impossible de faire remonter directement quelqu'un sur "Services" ou "Devis" depuis une recherche, et impossible de demander l'indexation séparée de ces sections. Détecté en voulant indexer le site (l'utilisatrice a remarqué que 3 sections existaient visuellement mais que l'URL ne changeait jamais).

**Migration effectuée (commit `768d859`) :**
- `react-router-dom` (^7.17.0) ajouté en dépendance
- `App.js` : `BrowserRouter` + `Routes`/`Route` avec 3 vraies routes : `/`, `/services`, `/contact`. Tous les `setPage(...)` remplacés par `navigate(...)` (`useNavigate`/`useLocation`), pattern identique à celui déjà utilisé sur le projet Loya (`essaloc`)
- `src/Seo.jsx` créé — met à jour `title`/`meta description`/`canonical`/`og:*` au montage de chaque page via `document.querySelector` (pas de dépendance type `react-helmet`, même pattern que celui déjà validé sur `flow-sublim-net`)
- `public/_redirects` ajouté (`/* /index.html 200`) — indispensable sur Netlify pour que `/services` et `/contact` répondent en 200 au lieu d'un 404 (sans ce fichier, seule `/` aurait fonctionné)
- `public/sitemap.xml` mis à jour : 3 URLs au lieu d'une seule

**Vérification avant de considérer que c'était fait** : `npm run build` sans erreur, test local (`serve -s build`) confirmant un 200 sur les 3 routes, puis en production avec **Chrome headless réel** (pas seulement `curl`/`WebFetch`, qui n'exécutent pas le JS et auraient montré à tort le même title partout) : title et canonical bien distincts et corrects sur `/services` ("Nos prestations — ...") et `/contact` ("Devis gratuit — ...").

**Indexation Google Search Console :**
- Propriété `https://ocre-peinture.fr/` déjà existante et validée (vérification automatique)
- `sitemap.xml` soumis — premier essai "Impossible de récupérer" (délai de traitement normal, pas une erreur — confirmé par `curl` montrant un 200/XML valide), résolu après nouvelle soumission
- `/` déjà indexée automatiquement par Google avant même la demande manuelle
- Indexation manuelle demandée via "Inspection de l'URL" pour les 2 nouvelles pages : `/services` et `/contact`

**Prochaine étape :** revérifier le statut d'indexation de `/services` et `/contact` dans Search Console → Pages, d'ici 2-3 jours.

---

## DÉPLOIEMENT

```bash
npm run build       # vérifier zéro erreur
git add .
git commit -m "..."
git push            # Netlify rebuild automatique en 1-2 min
```

---

## GMB

- Fiche créée, en attente validation vidéo
- Procédure Q&A : chercher l'établissement sur Google Maps → "Questions & réponses" → poster ses propres questions + réponses
- Photos : business.google.com → Photos → ajouter (min 5 : chantiers, matériaux, logo)
- Dès 5 avis : ajouter section témoignages dans le code
