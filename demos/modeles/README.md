# Modèles de sites : 12 commerces

Douze modèles de sites vitrines prêts à montrer en démarchage (6 restaurants, 6 commerces de proximité), chacun avec sa propre direction artistique, et **cinq versions** par modèle (60 pages) : Illustrée, Signature, Affiche, Journal et Rétro.
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

## Trois directions de plus : Affiche, Journal, Rétro

Chaque modèle se décline aussi en trois directions graphiques très différentes, avec **sa propre palette et ses propres polices**
selon le commerce. Elles lisent le même `config.js` : on remplit une fois, les cinq versions suivent.

| Direction | Esprit | Ce qui la distingue | Animation |
|---|---|---|---|
| **Affiche** | Graphisme suisse, affiche d'exposition | Trame de colonnes, nom géant en capitales, grand aplat de couleur avec texte vertical et prix « Dès … », sommaire numéroté 01, 02… | La trame se dessine, les lettres montent d'un coup sec, l'aplat s'ouvre |
| **Journal** | Une de quotidien, magazine | Manchette « Le journal de… » avec la date du jour, une en trois colonnes (article avec lettrine, photo de une, rubrique « Au menu »), citation en exergue | Les doubles filets se tirent, les colonnes arrivent l'une après l'autre |
| **Rétro** | Étiquette des années 70 | Soleil à rayures, nom courbé en arc, pastille, boutons « autocollants » à ombre pleine, vagues entre les sections | Le soleil tourne lentement, l'étiquette se pose avec un rebond |

- Adresses : `<modele>/affiche/`, `<modele>/journal/`, `<modele>/retro/`. La barre démo en bas permet de passer d'une version à l'autre.
- Mise en page commune : `commun/affiche.css`, `commun/journal.css`, `commun/retro.css`. Couleurs et polices de chaque commerce : `<modele>/<direction>/style.css`.
- La taille du nom en Affiche est calculée selon la police et le mot le plus long, pour qu'il ne déborde jamais.
- « Au menu » (Journal) et le prix « Dès … » (Affiche) sont tirés automatiquement de la carte.

## Collection Signature : une variante haut de gamme de chaque modèle

Chaque modèle existe en **deux versions** : l'illustrée (animations ludiques, dessins SVG) et la **Signature**,
plus réaliste et plus « fancy ». Chaque Signature a **sa propre composition et sa propre matière**,
tirées du métier, rendues de façon réaliste en CSS et en filtres SVG (bruit, relief, éclairage, encre) :

| Signature | Identité | Matières réalistes | Police de titre |
|---|---|---|---|
| Bar · L'Heure Bleue | Speakeasy : une porte art déco en laiton, entrouverte sur les lumières du bar ; carte numérotée | Laiton métallique, verre fumé | Italiana |
| Italien · Trattoria Fiore | La carte du jour sur papier, posée sur une nappe en lin, cachet de cire | Lin tissé, papier à bord déchiré, cire | Cormorant Garamond |
| Brasserie · Brasserie Lumière | Le texte écrit dans un miroir ancien au cadre doré ; l'ardoise du jour à la craie | Dorure, glace piquée et reflet, ardoise | Bodoni Moda |
| Asiatique · Maison Kaze | Un ensō tracé au pinceau sur washi, sceau rouge ; photos en kakemono | Encre aux bords irréguliers, papier fibreux | Shippori Mincho |
| Turc · Kervan | Une arche outrepassée remplie de zelliges émaillés, lueur de lanterne | Céramique vernissée, enduit, cuivre | Marcellus |
| Africain · Teranga | Un pan de kente tissé qui se déroule, frange qui ondule, lumière du couchant | Tissage, fils | Cormorant Garamond |
| Boulangerie · Maison Farine | Planche de bois farinée, rayons du matin, farine en suspension | Veinage du bois, farine, rayons | Cormorant Garamond |
| Café · Grain Noir | L'étiquette d'un sac de café sur kraft : torréfaction, tampon bleu, auréole de tasse ; photos Polaroid | Kraft, encre de tampon | Newsreader |
| Fleuriste · Pétale | Planche d'herbier : fleur gravée au trait fin, étiquette de spécimen, rubans adhésifs | Gravure botanique, papier, ruban | Playfair Display |
| Barbier · Le Coupe-Chou | Plaque de laiton gravée vissée sur du cuir surpiqué, damier en perspective | Cuir en relief, laiton, coutures | Cinzel |
| Glacier · Givre | Store rayé de gelateria qui ondule, vitrine de bacs de glace | Toile ombrée, crème glacée, verre | Gilda Display |
| Fromagerie · La Meule | Cave d'affinage : mur de pierre à la bougie, étagère de meules, étiquette à la craie | Pierre, bois d'épicéa, croûte | DM Serif Display |

Les animations sont lentes et feutrées : le titre sort du flou lettre par lettre, puis chaque variante a son
geste (la porte s'éclaire, la carte se pose, le pinceau trace l'ensō, les zelliges se posent, le kente se déroule,
la farine flotte, le tampon frappe, la fleur se grave, la plaque se visse, le store ondule, les meules se posent…).

- **Mêmes données** : la Signature lit le même `config.js` que la version illustrée. Une seule saisie.
- **Photos** : les trois cadres de « Le lieu » attendent les vraies photos du client (`<img src alt>`).
- Adresse : `<modele>/signature/index.html` ; la barre démo bascule entre « Signature » et « Illustrée ».
- Identité de chaque variante : `<modele>/signature/style.css` ; base commune : `commun/signature.css`.
- Les matières sont des **calques SVG opaques** (teinte mélangée dans le filtre, pas de mode de fusion CSS) :
  les outils d'accessibilité lisent correctement les contrastes.

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
- Contrastes vérifiés par **axe-core** (WCAG 2 AA) : 0 violation sur les 60 pages.
- Cibles tactiles de 44 px minimum, aucun scroll horizontal à 375 et 1440 px, polices auto-hébergées.

## Vérifié avec Playwright (Chromium, toutes requêtes réseau bloquées)

- [x] 60 pages (12 modèles × 5 versions) : aucune erreur console, aucun scroll horizontal (320, 375 et 1440 px).
- [x] axe-core WCAG 2 A/AA : 0 violation.
- [x] Badge ouvert/fermé : cas simulés (avant, pendant, entre deux services, après minuit, jour fermé).
- [x] FR/EN : tous les textes, la carte et les horaires basculent, ainsi que l'attribut `lang`.
- [x] Sans JavaScript : la carte, les horaires et les infos restent lisibles.
- [x] Mouvement réduit : aucune animation.
