# Démo « Au Bonheur », 11 rue Cadet, Paris 9e

## L'établissement

- **Au Bonheur** : restaurant chinois et asiatique (nouilles, riz, raviolis, bols). Sur place, à emporter, terrasse.
- 11 rue Cadet, 75009 Paris, métro Cadet (ligne 7). Tél. 01 47 70 50 22.
- Clientèle d'habitués et d'employés le midi, salle très pleine à l'heure du déjeuner.

## Mode DÉMO

Ce dossier est une **démo de prospection**. Elle n'est pas destinée à être mise en ligne telle quelle.

- Présentée par Reda Lakhledj (07 63 45 60 80), visite prévue le **lundi 12 octobre 2026**.
- But : montrer **7 directions visuelles** sur un téléphone et laisser le patron choisir.
- Toutes les pages ont `noindex, nofollow`. Les prix sont des **prix d'exemple**, et les intitulés de la carte sont **génériques**.
- Il n'y a ni photo, ni avis, ni mentions légales : ce n'est pas encore le site final.

| Version | Nom | En une phrase |
|---|---|---|
| A | Sous le store | Fidèle à la façade : le store anthracite qui se déroule, la carte sur une ardoise de comptoir. |
| B | Le ticket du rush | Le service du midi : nom géant, panneau ambre pour appeler, carte en ticket de cuisine. |
| C | Lumière de rotin | La salle : grand cercle de lumière en rotin, mise en page éditoriale et aérée. |
| D | Céladon | Nouvelle identité (jade, piment, jaune d'œuf) : plateau de cartes de menu qui défile, bouton d'appel flottant. |
| E | Plateau tournant | Enseigne bilingue avec 福 et plateau tournant de table chinoise qu'on fait tourner du doigt (inspirée de Mister Jiu's et BAO). |
| F | Bonheur Gang | Esprit BAO Family : noir, blanc, aplats francs, logo géant « AU 幸福 BONHEUR », bandeau rouge qui défile en chinois et en français. |
| G | Le service | La version tout animée : bol qui se dessine, rush du midi épinglé (l'horloge avance, la salle se remplit), carte en cascade. Bouton « Couper les animations ». |

La direction de design détaillée (polices, palettes, contrastes) se trouve dans [DESIGN.md](DESIGN.md).

## Ouvrir la démo

1. Double-cliquer sur `demos/au-bonheur/index.html`.
2. C'est tout : pas de serveur ni d'internet, tout fonctionne en `file://`.

Pour la présentation sur un « téléphone » dans Chrome, voir [CHECKLIST-VISITE.md](CHECKLIST-VISITE.md).

## Arborescence

```
demos/au-bonheur/
├── index.html          page qui présente les 7 directions
├── README.md           ce fichier
├── CHECKLIST-VISITE.md préparation de la visite
├── DESIGN.md           direction de design
├── .gitignore
├── commun/
│   ├── commun.css      polices, reset, badge, barre démo
│   ├── script.js       CONFIG + tout le JavaScript
│   └── fonts/          17 fichiers .woff2 + 12 licences OFL-*.txt
├── a/  index.html + style.css
├── b/  index.html + style.css
├── c/  index.html + style.css
├── d/  index.html + style.css + photos/ (vide, prêt pour les photos du patron)
├── e/  index.html + style.css
├── f/  index.html + style.css
└── g/  index.html + style.css
```

## Modifier le contenu : tout se passe dans `commun/script.js`

L'objet `CONFIG`, en haut du fichier, contient **toutes** les données, commentées ligne par ligne.
Une modification vaut pour les 7 versions à la fois.

| Je veux changer… | Où, dans `CONFIG` |
|---|---|
| Le téléphone | `telephoneAffiche` (affichage) **et** `telephoneLien` (format +33…) |
| Les horaires | `horaires` : `0` = dimanche … `6` = samedi, ex. `[["12:00","15:00"],["18:30","23:00"]]` ; `[]` = fermé ; une fin à `"01:00"` = après minuit, c'est géré |
| Le résumé des horaires dans le footer | `textes.fr.footerHoraires` et `textes.en.footerHoraires` (à mettre à jour à la main si les horaires changent) |
| Un prix | `carte` → la catégorie → le plat → `prix: 12.5` (avec un **point**) |
| Ajouter un plat | Copier une ligne `{ fr: "...", en: "...", prix: 0 }` dans la bonne catégorie |
| Retirer la mention « Prix d'exemple » | `prixExemple: false` (une fois les vrais prix saisis) |
| Afficher de l'alcool | Ajouter les boissons avec `alcool: true`, puis `afficherAlcool: true` : la mention loi Évin apparaît alors automatiquement |
| Ajouter des photos au hero de D | Déposer les fichiers dans `d/photos/`, puis ajouter `{ src: "photos/1.jpg", alt: "" }` dans `photosHero` |
| Masquer une info pratique | `infos` → mettre `false` (ex. `titresRestaurant: false`) |
| Un texte FR ou EN | `textes.fr` / `textes.en`, même clé dans les deux |

Bon à savoir :
- La carte et le tableau des horaires sont **reconstruits par le JavaScript** à partir de `CONFIG`.
  Le HTML en contient une copie française, qui ne sert que si le JavaScript ne se charge pas.
  Si la carte change beaucoup, il faut mettre cette copie à jour aussi (ou la laisser telle quelle pour la démo).
- La langue choisie (FR ou EN) est mémorisée d'une version à l'autre, pour qu'on puisse passer de A à B à C en anglais.
- La fonction `calculerStatut(dateParis, horaires)` est **pure** : on peut la tester dans la console du navigateur, par exemple
  `texteStatut(calculerStatut({ jour: 6, minutes: 23*60+30 }, CONFIG.horaires), "fr")` renvoie « Fermé · ouverture lundi à 12h00 ».

## Liste complète des [À VÉRIFIER] (questions à poser au patron)

1. **Horaires** : « Vos horaires sont-ils bien 12h–15h et 18h30–23h du lundi au samedi, et fermé le dimanche ? Y a-t-il des fermetures annuelles ? »
2. **Carte** : « Pouvez-vous nous donner la carte complète, avec les intitulés exacts et les prix ? » (une photo de la carte papier suffit)
3. **À emporter** : « Comment marche l'à emporter ? On appelle, et combien de temps avant ? On récupère au comptoir ? »
4. **Réservation** : « Prenez-vous les réservations par téléphone le midi ? Êtes-vous sur TheFork ou un autre outil en ligne ? » (`reservationEnLigne`)
5. **Titres-restaurant** : « Acceptez-vous les titres-restaurant, en papier et/ou en carte ? »
6. **Accessibilité** : « La salle est-elle accessible en fauteuil roulant, sans marche ? Et les toilettes ? »
7. **Terrasse** : « La terrasse est-elle ouverte toute l'année ? Combien de places ? »
8. **Alcool** : « Servez-vous de l'alcool (bière, vin) ? Voulez-vous qu'il figure sur le site ? » (`afficherAlcool`)
9. **Allergènes** : « Avez-vous un document sur les allergènes à remettre sur demande ? »
10. **Photos** : « Avez-vous des photos de vos plats et de la salle dont vous êtes propriétaire, ou peut-on venir en faire ? » (elles iront dans la grille de la version D, `photosHero`)
11. **Logo** : « Avez-vous le fichier de votre logo (store et logo rond lumineux) ? » (la démo ne le reproduit pas)
    Et : « Le restaurant a-t-il un nom chinois ? » (E affiche 福 et F affiche 幸福, simples traductions de « bonheur »)
12. **Mentions légales** (pour la mise en ligne) : raison sociale, SIRET, nom du responsable de publication, hébergeur.

## Checklist de conformité

Vérifiée le 9 octobre 2026 (A, B, C) et le 12 octobre 2026 (D) avec Playwright (Chromium), en `file://`, avec toutes les requêtes réseau bloquées.

### Fonctionnement
- [x] Fonctionne par double-clic en `file://`, sans serveur ni internet (0 requête externe, 0 erreur console sur les 8 pages).
- [x] Aucun CDN, Google Fonts en ligne, iframe, `fetch()`, module ES, JS inline ni `onclick`.
- [x] Polices auto-hébergées (woff2, sous-ensemble latin, 2 graisses par police) avec leurs licences OFL.
- [x] Sans JavaScript, la carte (16 plats) et les horaires (7 jours) restent lisibles en français.
- [x] FR/EN : tous les textes basculent, carte et badge compris, ainsi que `<html lang>`, `<title>`, la meta description et `og:locale`. Les seuls textes identiques dans les deux langues sont des noms propres, l'adresse, « Bo bun » et « Desserts ».

### Badge « Ouvert / Fermé » (14 cas sur 14)
- [x] Lundi 11h00 → « Fermé · ouverture à 12h00 »
- [x] Lundi 12h30 → « Ouvert · jusqu'à 15h00 »
- [x] Lundi 16h00 → « Fermé · réouverture à 18h30 »
- [x] Lundi 22h59 → « Ouvert · jusqu'à 23h00 »
- [x] Lundi 23h30 → « Fermé · ouverture demain à 12h00 »
- [x] Samedi 23h30 → « Fermé · ouverture lundi à 12h00 »
- [x] Dimanche 15h00 → « Fermé · ouverture demain à 12h00 » (demain = lundi)
- [x] Cas fictif, service du samedi jusqu'à 01:00 : samedi 23h30 et dimanche 00h30 → « Ouvert · jusqu'à 01h00 » ; dimanche 01h30 → fermé
- [x] Version anglaise (« Closed · reopens at 6:30 pm »…) et heure de Paris indépendante du fuseau de l'ordinateur
- [x] `aria-live="polite"`, point plein (ouvert) ou vide (fermé) en plus du texte, mise à jour toutes les 60 secondes

### Liens
- [x] Tous les liens d'appel du restaurant pointent vers `tel:+33147705022` (8 à 9 par version).
- [x] « Itinéraire » : lien Google Maps simple, `target="_blank" rel="noopener noreferrer"`, sans iframe.
- [x] Barre démo : A à G et « Les 7 » (sur deux lignes sous 480 px, hauteur réservée) (la version en cours est mise en évidence) et `tel:+33763456080`.

### Mobile et accessibilité
- [x] Aucun scroll horizontal à 375, 768 et 1440 px (FR et EN).
- [x] Toutes les zones cliquables font au moins 44 × 44 px, et tout le texte des pages au moins 16 px.
- [x] La barre démo ne masque rien : `padding-bottom` sur le body.
- [x] Contrastes AA vérifiés pour chaque couple texte/fond (tableau dans DESIGN.md) ; l'ambre n'est jamais utilisé en texte sur fond clair.
- [x] Focus visible (contour de 3 px de couleur contrastée), lien « Aller au contenu ».
- [x] Balises sémantiques, titres hiérarchisés, tableau des horaires avec en-têtes de ligne, `aria-label` sur les boutons qui en ont besoin, SVG décoratifs en `aria-hidden`.
- [x] `prefers-reduced-motion` coupe toutes les animations ; une seule animation d'entrée par version, aucune au scroll.

### Design (interdits)
- [x] Ni violet, ni dégradé, ni glassmorphism, ni emoji ; une seule ombre (très discrète, sur la barre démo).
- [x] Ni Inter, ni Roboto, ni Arial, ni Poppins.
- [x] Pas de grille de cartes identiques, sauf sur l'index des propositions (autorisé). La grille de tuiles de D est un décor incliné aux contenus et couleurs alternés, pas une grille de cartes.
- [x] D : défilement continu des colonnes (écart assumé avec la règle « une seule animation », demandé pour D), avec bouton Pause / Relancer et grille figée en mouvement réduit.
- [x] Pictogrammes : seulement le bol, le téléphone et le repère de lieu, dessinés pour la démo. Le logo du store n'est pas reproduit.

### Contenus et légal
- [x] Aucune photo ni personne identifiable, aucune image récupérée en ligne.
- [x] Mention « Prix d'exemple » et « Prix en euros TTC. Informations sur les allergènes disponibles sur demande. » toujours sous la carte.
- [x] Aucune boisson alcoolisée affichée (`afficherAlcool: false`) ; la mention loi Évin s'affiche automatiquement si on l'active.
- [x] Aucun « fait maison », « halal », « végan », « végétarien », « livraison », « produits frais », ni faux avis, étoiles ou notes.
- [x] Aucun cookie ni traceur, donc pas de bandeau RGPD.
- [ ] [À VÉRIFIER] Horaires, carte, prix, à emporter, titres-restaurant, accessibilité : voir la liste des questions ci-dessus.
- [ ] Avant toute mise en ligne : retirer la barre démo et `noindex`, ajouter les mentions légales et les vrais contenus.
