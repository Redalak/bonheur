# Modèles de sites : 12 commerces

Douze modèles de sites vitrines prêts à montrer en démarchage (6 restaurants, 6 commerces de proximité), chacun avec sa propre direction artistique.
Même base technique que la démo Au Bonheur : HTML, CSS et JavaScript simples, hors ligne,
mobile d'abord, FR/EN, accessibles.

**Ouvrir :** double-cliquer sur `demos/modeles/index.html`. Rien à installer, pas besoin d'internet.

| Modèle | Nom fictif | Direction artistique | Animation signature | Polices |
|---|---|---|---|---|
| Bar | L'Heure Bleue | Art déco de nuit : encre, champagne, émeraude | Le nom s'allume comme un néon, soleil art déco qui tourne | Limelight + Jost |
| Italien | Trattoria Fiore | Papier crème, rouge tomate, basilic | Un spaghetti se dessine autour du nom, le basilic pousse | Gloock + Instrument Sans |
| Brasserie | Brasserie Lumière | Miroir doré, banquettes rouges, carrelage | Le nom se dore, l'ardoise du jour s'écrit à la craie | Bodoni Moda + Libre Franklin |
| Asiatique | Maison Kaze | Washi, encre, indigo, vermillon | Les rideaux noren ondulent dans le vent (風 = vent) | Shippori Mincho + Zen Kaku Gothic New |
| Turc | Kervan | Faïences d'Iznik : cobalt, turquoise, corail | Les carreaux à étoile se retournent un à un | Marcellus + Figtree |
| Africain | Teranga | Wax : safran, terre rouge, vert, indigo | Formes qui s'assemblent, frise wax qui défile | Syne + DM Sans |

### Commerces de proximité

Palettes et paires de polices issues du skill UI/UX Pro Max quand il avait une correspondance fiable, sinon choisies à la main (indiqué).

| Modèle | Nom fictif | Direction artistique | Animation signature | Polices |
|---|---|---|---|---|
| Boulangerie | Maison Farine | Fournil : brun chaud, crème, blé (palette « Bakery/Cafe » du skill) | La farine flotte, les grignes de la baguette se tracent | Amatic SC + Cabin (« Indie/Craft ») |
| Café torréfacteur | Grain Noir | Éditorial : espresso, crema, encre bleue | Le tampon du torréfacteur tourne autour du grain | Newsreader (éditorial) + Figtree |
| Fleuriste | Pétale | Organique : vert profond, rose, sauge (« Organic Biophilic ») | La tige pousse, la fleur s'ouvre, des pétales tombent | Playfair Display + Inter (« Classic Elegant ») |
| Barbier | Le Coupe-Chou | Rétro : marine, rouge barbier, laiton, damier | Le poteau de barbier tourne, tarifs sur tableau | Abril Fatface + Merriweather (« Retro Vintage ») |
| Glacier | Givre | Pastel : vanille, fraise, pistache, menthe | Les boules tombent sur le cornet et rebondissent | Fredoka + Nunito (« Playful Creative ») |
| Fromagerie | La Meule | Comté, croûte, lait, bleu d'Auvergne (choix maison) | La meule se pose, une part se détache, les trous apparaissent | DM Serif Display + Work Sans (choix maison) |

Pour les commerces, la « carte » devient selon le cas « Nos produits », « Tarifs », « Bouquets », « Parfums » ou « Fromages » (`navCarte`, `carteTitre` dans `config.js`). Un produit peut ne pas avoir de prix propre (`prix: null`, par exemple un parfum de glace compris dans la formule).

## Collection Signature : une variante haut de gamme de chaque modèle

Chaque modèle existe en **deux versions** : l'illustrée (animations ludiques, dessins SVG) et la **Signature**,
plus réaliste et plus « fancy », dans l'esprit des sites de restaurants étoilés :

- **Ambiance photographique plein écran** : des halos de lumière flous qui dérivent lentement (bougies,
  lampes hors mise au point), un grain de film et un vignettage. Aucune photo volée.
- **Typographie de luxe** : sérifs fines (Italiana, Cormorant Garamond, Bodoni, Cinzel, Gilda Display…),
  petites capitales espacées, filets d'un pixel, beaucoup d'espace.
- **Animations lentes** : le titre sort du flou lettre par lettre, la lumière « respire ».
- **Le lieu** : trois cadres « photo » d'ambiance, prêts à recevoir les vraies photos (`<img src alt>`).
- **Mêmes données** : la Signature lit le même `config.js` que la version illustrée. Une seule saisie.

Adresse : `<modele>/signature/index.html`. La barre démo permet de passer de l'une à l'autre
(« Signature » / « Illustrée »). Couleurs et polices de chaque variante : `<modele>/signature/style.css` ;
système commun : `commun/signature.css`.

| Variante Signature | Ambiance | Police de titre |
|---|---|---|
| Bar · L'Heure Bleue | Bougies ambrées, reflets émeraude | Italiana |
| Italien · Trattoria Fiore | Lumière dorée de fin d'après-midi (claire) | Cormorant Garamond |
| Brasserie · Brasserie Lumière | Laiton et velours rouge dans les miroirs | Bodoni Moda |
| Asiatique · Maison Kaze | Lanternes de papier, encre et indigo | Shippori Mincho |
| Turc · Kervan | Lampes de cuivre, éclats turquoise | Marcellus |
| Africain · Teranga | Coucher de soleil : safran, braise, indigo | Cormorant Garamond |
| Boulangerie · Maison Farine | Lumière du matin, farine et blé (claire) | Cormorant Garamond |
| Café · Grain Noir | Crema, acier bleuté, lampe d'atelier | Newsreader |
| Fleuriste · Pétale | Lumière d'atelier, pétales hors mise au point (claire) | Playfair Display |
| Barbier · Le Coupe-Chou | Clair-obscur : lampe chaude, cuir, acier | Cinzel |
| Glacier · Givre | Pastels en flou doux (claire) | Gilda Display |
| Fromagerie · La Meule | Cave d'affinage à la bougie | DM Serif Display |

## Noms et coordonnées : tous fictifs

- Noms inventés, adresses « rue de l'Exemple ».
- Téléphones dans la plage **01 99 00 xx xx**, réservée par l'ARCEP aux œuvres de fiction : ils ne sonnent chez personne.
- Prix d'exemple, avec la mention « Prix d'exemple » affichée sous la carte.

## Adapter un modèle à un vrai client (15 minutes)

1. Copier le dossier du modèle (ex. `italien/`) avec `commun/` dans le dépôt du client.
2. Ouvrir **`config.js`** : c'est le seul fichier à modifier. Tout y est commenté en français :
   - `nom`, `telephoneAffiche`, `telephoneLien`, `adresse`, `transport`, `lienItineraire` ;
   - `horaires` (0 = dimanche … 6 = samedi ; une fermeture après minuit comme `"02:00"` est gérée) ;
   - `carte` : catégories et plats `{ fr, en, prix }`, avec un `detail` facultatif ;
   - `infos` : les infos pratiques ;
   - `textes.fr` / `textes.en` : titre, accroche, bloc d'appel, le lieu ;
   - `prixExemple: false` une fois les vrais prix saisis ;
   - `afficherAlcool` : si `true`, la mention loi Évin s'affiche automatiquement sous la carte.
3. Dans `index.html`, remplacer le nom, l'adresse et le téléphone en dur : ils servent de copie de secours si le JavaScript ne se charge pas.
4. Avant la mise en ligne : retirer la barre démo et la balise `noindex`, ajouter les mentions légales.

Le pied de page résume les horaires **automatiquement** à partir de `CONFIG.horaires` (« mar.–sam. : 18h00–01h00… »).

## Comment c'est construit

```
modeles/
├── index.html            présentation des 12 modèles
├── README.md
├── commun/
│   ├── commun.css        polices, squelette de mise en page, badge, barre démo, animations génériques
│   ├── moteur.js         badge ouvert/fermé (heure de Paris), carte, horaires, FR/EN, animations
│   └── fonts/            polices .woff2 + licences OFL-*.txt
└── bar/ italien/ brasserie/ asiatique/ turc/ africain/
    boulangerie/ cafe/ fleuriste/ barbier/ glacier/ fromagerie/
    ├── index.html        la page (hero propre au modèle + sections communes)
    ├── config.js         TOUTES les données du restaurant
    └── style.css         la direction artistique du modèle
```

- `config.js` est chargé **avant** `commun/moteur.js` (scripts classiques avec `defer`, compatibles avec l'ouverture en `file://`).
- Le moteur ne contient aucune donnée de commerce : un seul moteur pour les 12 modèles.
- La barre démo de chaque modèle relie les modèles de sa série (restaurants ou commerces) et « Tous ».
- `calculerStatut(dateParis, horaires)` est une fonction pure, testable avec des dates simulées.

## Animations et accessibilité

- Chaque modèle a **une animation signature** dans son hero, plus des apparitions douces au défilement.
- Animations faites uniquement avec `transform` et `opacity`, sans librairie.
- **« Couper les animations »**, un bouton dans chaque hero, affiche tout dans son état final. C'est automatique si l'appareil demande moins d'animations. Sans JavaScript, tout reste visible.
- Contrastes vérifiés par **axe-core** (WCAG 2 AA) : 0 violation sur les 12 modèles et les 12 variantes Signature.
- Cibles tactiles de 44 px minimum, aucun scroll horizontal à 375 et 1440 px, polices auto-hébergées.

## Vérifié avec Playwright (Chromium, toutes requêtes réseau bloquées)

- [x] 12 modèles + 12 variantes Signature : aucune erreur console, aucun scroll horizontal (320, 375 et 1440 px).
- [x] axe-core WCAG 2 A/AA : 0 violation.
- [x] Badge ouvert/fermé : cas simulés (avant, pendant, entre deux services, après minuit, jour fermé).
- [x] FR/EN : tous les textes, la carte et les horaires basculent, ainsi que l'attribut `lang`.
- [x] Sans JavaScript : la carte, les horaires et les infos restent lisibles.
- [x] Mouvement réduit : aucune animation.
