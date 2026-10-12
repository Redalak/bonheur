# Au Bonheur : direction de design (A, B, C)

Ce document fixe les choix de design **avant** le code. Il a été relu point par point
contre le brief (section « Relecture » en bas) et corrigé avant de coder.

## Ce qu'on vend, en une phrase

> Le bon plan de la rue Cadet : la carte et les prix sous les yeux avant de venir,
> et un appel pour réserver sa table ou commander à emporter avant le rush.

Toutes les versions servent donc d'abord deux choses, sur un téléphone de 375 px :
1. **la carte et ses prix**, lisibles en 5 secondes ;
2. **le bouton d'appel**, présent dans le header, le hero et le bloc « Le midi, ça se remplit vite ».

Ordre des sections (identique dans A, B et C) : header, hero + badge, bloc argument clé,
carte, le lieu, horaires, infos pratiques et accès, footer, puis la barre démo.

## Matière d'origine (relevée sur la façade et la salle)

| Nom           | Hex       | D'où ça vient                       |
|---------------|-----------|-------------------------------------|
| anthracite    | `#26292E` | la toile du store                   |
| gris devanture| `#3A3F45` | menuiseries peintes                 |
| blanc         | `#FFFFFF` | le lettrage « AU BONHEUR »          |
| bois blond    | `#D9A86C` | murs, comptoir, tables              |
| ambre         | `#E9A23B` | lumière des suspensions en rotin    |
| pierre        | `#EFE7D8` | façade de l'hôtel Cromot du Bourg   |
| gris-vert     | `#5F716B` | la porte cochère voisine            |
| gris-vert foncé | `#4A5A55` | nuance du précédent, **ajoutée** pour le texte courant sur pierre |

## Contrastes vérifiés (formule WCAG 2.1)

| Texte / fond                 | Ratio | Usage autorisé |
|------------------------------|-------|----------------|
| blanc / anthracite           | 14,59 | tout texte |
| pierre / anthracite          | 11,88 | tout texte |
| bois blond / anthracite      | 6,79  | tout texte |
| ambre / anthracite           | 6,74  | tout texte (on le garde surtout pour les titres) |
| anthracite / bois blond      | 6,79  | tout texte |
| anthracite / ambre           | 6,74  | tout texte |
| gris-vert foncé / pierre     | 5,92  | liens et petits textes en C |
| blanc / gris-vert            | 5,17  | texte du bloc argument clé en C |
| gris devanture / blanc       | 10,62 | barre démo |
| gris-vert `#5F716B` / pierre | 4,21  | **refusé** en texte courant, donc remplacé par `#4A5A55` |
| ambre / blanc                | 2,17  | **interdit** en texte |
| bois blond / pierre          | 1,75  | **décor seulement** (cercle de C) |

Focus visible : contour de 3 px, en anthracite sur fond clair, et en ambre ou blanc sur fond
sombre (ratio de 6,7 minimum dans les deux cas).

---

## A : « Sous le store »

**Concept.** On lève les yeux, on voit le store anthracite et son lettrage blanc espacé ;
on entre, et c'est le bois blond et la lumière ambrée. Le site suit le même trajet,
de haut en bas.

**Le seul élément audacieux :** le store lui-même. Le hero est une grande toile anthracite
pleine largeur, avec le nom en capitales Jost très espacées et le bol au trait à droite,
comme sur la vraie façade. Au chargement, il se **déroule** (scaleY 0 → 1, 500 ms, origine en haut).
Tout le reste est calme.

**Polices.**
- Jost 400 et 500 : le nom, les titres de section, en capitales espacées (letter-spacing 0,18 à 0,3 em). C'est le seul endroit des 3 versions où l'on utilise des capitales espacées, parce que c'est le lettrage réel du store.
- Atkinson Hyperlegible 400 et 700 : texte, prix (chiffres tabulaires), horaires.

**Palette (5).** anthracite, blanc, bois blond, pierre, ambre (en touches : titres de
catégorie sur l'ardoise, point du badge).

**Structure.**
```
┌──────────────────────────────┐
│ AU BONHEUR      EN  [Appeler]│  header anthracite collant
│ Carte  Horaires  Accès       │
├──────────────────────────────┤
│ ███ A U   B O N H E U R  (bol)│  LE STORE (hero), se déroule
│ ███████████████████████████  │
├──────────────────────────────┤
│ Cuisine chinoise et asiatique│  vitrine : pierre
│ ● Ouvert · jusqu'à 15h00     │
│ [Appeler] [Itinéraire]       │
├──────────────────────────────┤
│ ▓ Le midi, ça se remplit vite│  panneau bois blond (le comptoir)
│ [Réserver] [À emporter]      │
├──────────────────────────────┤
│ ┌ ardoise anthracite ───────┐│  carte = menu au-dessus du comptoir
│ │ ENTRÉES                   ││  points de conduite, prix à droite
│ │ Raviolis vapeur ..... 6,50││
│ └───────────────────────────┘│
│ le lieu · horaires · accès   │  pierre, filets fins
└──────────────────────────────┘
```
Alignement : à gauche partout ; seul le nom du store est justifié par son espacement.

---

## B : « Le ticket du rush »

**Concept.** 12 h 40, la salle est pleine, l'imprimante de la cuisine crache des tickets.
De très grandes lettres, des prix énormes, des phrases courtes.

**Le seul élément audacieux :** le **ticket**. La carte est un long ticket blanc aux bords
crantés (clip-path en CSS, aucune image), écrit en mono, qui sort de l'imprimante au chargement
(translateY + clip-path, 600 ms, une seule fois). Le nom géant et le bol géant du hero
servent de décor autour.

**Polices.**
- Bricolage Grotesque 700 et 800 : le nom sur toute la largeur, les titres.
- IBM Plex Mono 400 et 600 : prix, horaires, éléments du ticket. Le mono est ici justifié par
  le sujet (un ticket de caisse), ce n'est pas une décoration.

**Palette (4).** anthracite (dominant), ambre (gros titres, aplats), blanc (papier du ticket, texte), bois blond (section « le lieu »).

**Structure.**
```
┌──────────────────────────────┐
│ AU BONHEUR   EN [APPELER]    │  anthracite
├──────────────────────────────┤
│ AU                           │  hero sombre, nom en ambre
│ BONHEUR                      │  sur toute la largeur
│ Cuisine chinoise, rue Cadet. │
│ ● Ouvert · jusqu'à 15h00     │
│ [Appeler] [Itinéraire]  (BOL │  bol géant qui déborde
├──────────────────────────────┤
│█ LE MIDI, ÇA SE REMPLIT VITE█│  panneau ambre plein, impossible à rater
│█ [RÉSERVER]  [À EMPORTER]   █│
├──────────────────────────────┤
│   /\/\/\/\/\/\/\/\/\/\/\     │  le ticket (fond anthracite autour)
│   N° 11 · RUE CADET          │
│   1  ENTRÉES                 │  numéros = ordre du service sur un vrai ticket
│   Raviolis vapeur     6,50   │
│   \/\/\/\/\/\/\/\/\/\/\/     │
├──────────────────────────────┤
│ le lieu : aplat bois blond   │  rupture de couleur
│ horaires : grille mono       │  anthracite, jour courant en ambre
│ accès : blanc                │
└──────────────────────────────┘
```
Ici, les numéros de catégorie (1 à 4) ont un vrai sens : c'est l'ordre d'envoi
des plats (entrée, plat, dessert, boisson), comme sur un bon de cuisine.

---

## C : « Lumière de rotin »

**Concept.** Assis dans la salle, sous une suspension ronde en rotin : bois clair, lumière douce,
le vert de la porte cochère et des plantes. Une mise en page éditoriale, aérée, posée.

**Le seul élément audacieux :** le **grand cercle de lumière** du hero. C'est un aplat bois
blond, posé en décalé et coupé par le bord de l'écran, avec une série de cercles concentriques
fins. Un trait sur deux est en pointillé, pour évoquer le tressage du rotin. Au centre, une
petite pastille ambre fait l'ampoule. Pur CSS, sans dégradé. Il apparaît en fondu avec une
mise à l'échelle de 0,96 à 1 (700 ms).

**Polices.**
- Fraunces (fichier variable « soft », axe SOFT à 100, graisses 400 à 600) : titres. Ses courbes molles répondent à la rondeur des suspensions.
- Manrope 400 et 600 : texte, prix (chiffres tabulaires).

**Palette (5 + 1 nuance).** pierre (fond), bois blond (le cercle, les filets), gris-vert
(aplat du bloc argument clé), gris-vert foncé (liens, petits textes), anthracite (texte),
ambre (uniquement l'ampoule et le point du badge).

**Structure.**
```
┌──────────────────────────────┐
│ Au Bonheur    EN  [Appeler]  │  pierre, sans filet lourd
│ Carte  Horaires  Accès       │
├──────────────────────────────┤
│ Au                     ╭──── │  hero asymétrique
│ Bonheur              ╭(  ●   │  cercle bois blond coupé à droite
│ Cuisine chinoise...  ╰─(     │
│ ● Ouvert · ...         ╰──── │
│ [Appeler] [Itinéraire]       │
├──────────────────────────────┤
│ ░ Le midi, ça se remplit vite│  aplat gris-vert, texte blanc
│ [Réserver] [À emporter]      │
├──────────────────────────────┤
│ La carte                     │  1 colonne en mobile,
│ Entrées        │ Plats       │  2 colonnes dès 768 px
│ ...      6,50  │ ...   12,50 │
├──────────────────────────────┤
│   « Une salle en bois clair… »│  grande phrase en Fraunces, décalée
│ Horaires        Infos & accès│  2 colonnes sur grand écran
└──────────────────────────────┘
```
Alignement : à gauche, avec une marge gauche plus large que la droite sur grand écran,
pour garder l'asymétrie du hero.

---

## D : « Céladon » (nouvelle identité, ajoutée à la demande de Reda)

**Concept.** D ne reprend volontairement **pas** la palette de la façade : c'est la proposition
« on change d'image ». Le vert jade d'un bol en porcelaine céladon, le rouge de l'huile pimentée,
le jaune d'œuf. Appétissant, clairement asiatique, sans dragon ni lanterne. But : que le patron se dise
« c'est ça qu'il me faut ».

**Le seul élément audacieux :** le **plateau de cartes de menu en perspective isométrique**
(rotateZ -40°, rotateX 52°) qui défile lentement, une colonne sur deux dans chaque sens. Chaque carte a
une épaisseur (bordures droite et basse plus foncées, sans ombre). Les cartes sont générées depuis
`CONFIG.carte` (catégorie, plat, prix) ; une sur trois devient une photo dès qu'on remplit `CONFIG.photosHero`.

**Conversion.** Sur mobile, un **bouton d'appel flottant** « Appeler · 01 47 70 50 22 » reste toujours
sous le pouce (au-dessus de la barre démo, la page réserve sa hauteur). La plaque du hero donne en
5 secondes : le nom, ce qu'on mange, l'adresse, ouvert ou fermé, Appeler, Itinéraire.

**Police.** Une seule famille, **Archivo** (variable, OFL) : largeur 125 % et graisse 850 pour l'enseigne
(« AU BONHEUR », titres, prix), largeur normale pour le texte.

**Palette (6).**

| Nom | Hex | Usage | Contraste vérifié |
|---|---|---|---|
| jade | `#0E4A3B` | texte, fonds sombres | 7,9 sur céladon, 8,9 sur céladon clair, 10,2 avec du blanc |
| jade foncé | `#0A3A2E` | footer, cartes sombres | jaune dessus : 6,9 |
| céladon | `#D7E6DA` | fond principal | |
| céladon clair | `#EAF2EC` | plaque, section carte | |
| piment | `#B02E17` | boutons d'appel, bloc argument clé | blanc dessus : 6,5 ; sur céladon : 5,0 |
| jaune d'œuf | `#F4B400` | étiquettes de la carte, jour actuel | jade dessus : 5,5 |

**Animations.** Entrée du plateau (1,1 s) puis défilement continu (70 et 90 s par cycle).
**Écart assumé avec le brief** (« une seule animation d'entrée ») : demandé pour D uniquement.
Bouton **Pause / Relancer** (WCAG 2.2.2) ; tout est figé avec `prefers-reduced-motion`.

---

## E : « Plateau tournant » (inspirée de restaurants asiatiques de référence)

**Références regardées.** *Mister Jiu's* (San Francisco) : l'enseigne bilingue, nom latin + caractères
chinois, qui ancre le lieu sans kitsch. *BAO* (Londres) : un seul objet au centre de l'écran, beaucoup de
calme autour. Les deux reposent sur la photo ; sans photo, on transpose en graphisme et en interaction.

**Le seul élément audacieux :** le **plateau tournant** des tables chinoises, vu du dessus : une table
en bois blond (le bois de la vraie salle), 6 assiettes en porcelaine tirées de `CONFIG.carte`, et au
centre un moyeu gravé de **福**. Il tourne lentement ; on le fait tourner d'un glissement horizontal
(le défilement vertical reste libre) ou avec les boutons Précédent / Suivant. L'assiette « devant vous »
s'affiche en grand sous le plateau.

**L'enseigne.** « Au Bonheur » + **福** (fú, « le bonheur ») : c'est la **traduction du nom**, affichée
comme telle (« 福, fú : le bonheur en chinois »), pas un nom chinois inventé. [À VÉRIFIER] demander au
patron s'il a un nom chinois officiel (le logo rond au mur ?) pour le mettre à la place.
Le caractère vient de Noto Serif SC (OFL), converti en tracé SVG (1,2 Ko) : pas de police chinoise à charger.

**Polices.** Young Serif (titres, une graisse) + Schibsted Grotesk 400/700 (texte).

**Palette (6).** sauce soja `#2A1B13` (fond), riz `#F7F2E8` (texte, infos pratiques ; 14,9),
bois blond `#D9A86C` (la table ; 7,7 sur soja), piment `#C23A22` (appel ; blanc dessus 5,35),
moutarde `#F0B43C` (福, titres ; 8,9 sur soja), blanc (porcelaine). Vert thé écarté (4,2 : échoue).

**Mouvement.** Entrée de la table (0,8 s), puis rotation lente (5°/s) qui s'arrête 4 s après chaque geste.
Bouton Pause ; rien ne tourne avec `prefers-reduced-motion`. Mouvement continu : écart assumé avec le brief, comme D.

---

## F : « Bonheur Gang » (dans l'esprit de BAO Family, Paris)

**Référence regardée.** baofamily.co : noir et blanc, aplats francs (rouge, vert, jaune), typo condensée
très grasse en capitales, logos bilingues géants (« GROS 大包子 BAO »), bandeau rouge qui défile en chinois
et en français, ton streetwear et fier. Leur site repose sur la photo ; ici, les aplats et la typo portent l'énergie.

**Le seul élément audacieux :** le **logo bilingue géant** « AU 幸福 BONHEUR » sur fond noir, suivi du
**bandeau rouge** qui défile : 吃饱了吗？ (« t'as bien mangé ? », la salutation du quotidien), 饺子 raviolis,
面条 nouilles, 米饭 riz. Chaque mot chinois est accompagné du français. La carte affiche aussi 菜单 (la carte)
et les catégories 前菜, 主菜, 甜点, 饮料 (champ `zh` de `CONFIG.carte`).

**Chinois.** 幸福 (xìngfú) = « bonheur » : **traduction** du nom, présentée comme telle, pas un nom officiel
([À VÉRIFIER] avec le patron). Les caractères sont des **dessins SVG** tirés de Noto Sans SC Black (OFL) :
aucune police chinoise à charger, fonctionne hors ligne partout.

**Polices.** Big Shoulders Display 800/900 (titres condensés) + Schibsted Grotesk 400/700 (texte).

**Palette (5).** noir `#000000`, blanc `#FFFFFF`, rouge `#D42A20` (blanc dessus 5,1 ; sur noir 4,15, donc
réservé aux très gros caractères), jaune `#FFD23F` (noir dessus 14,5), vert `#0E6B3C` (blanc dessus 6,6).

**Mouvement.** Entrée du logo (0,7 s) et défilement du bandeau (28 s par boucle), avec bouton Pause ;
tout est figé avec `prefers-reduced-motion`. Mouvement continu : écart assumé avec le brief, comme D et E.

---

## G : « Le service » (la version tout animée, à la demande de Reda)

**Concept.** La page raconte un service du midi. Recommandations du skill UI/UX appliquées : entrées en
cascade avec une courbe « expo out », **une seule** section épinglée pilotée par le défilement, petits
décalages sur les listes, uniquement `transform` et `opacity`, état final lisible si l'animation est coupée.
Tout en JavaScript vanilla (pas de GSAP : le brief interdit les librairies et la démo doit marcher hors ligne).

**La chorégraphie.**
1. Ouverture : le bol se dessine trait par trait, la vapeur monte en boucle, les baguettes soulèvent les
   nouilles ; « Au Bonheur » arrive lettre par lettre (mot par mot, jamais coupé), puis le reste du hero.
2. Le rush (épinglé, `position: sticky` sur 280 vh) : l'horloge avance de 11h45 à 13h00 et les 24 places de
   la salle se remplissent pendant le défilement ; à salle pleine, « Le midi, ça se remplit vite » passe en or.
3. La carte : catégories puis plats en cascade, trait doré qui se dessine sous chaque catégorie.
4. Le lieu : la phrase s'allume mot par mot pendant le défilement.
5. Détails : barre de progression dorée sous le header, grand « Au Bonheur » qui glisse dans le pied de page,
   bol qui suit légèrement la souris et boutons « aimantés » (ordinateur uniquement).

**Accessibilité.** Toutes les animations dépendent de la classe `anims-actives` posée par le script :
sans JavaScript, avec `prefers-reduced-motion`, ou après un clic sur **« Couper les animations »**, tout est
affiché dans son état final (salle pleine, 13h00, tous les mots allumés). Écart assumé avec le brief
(« aucune animation au scroll ») : demandé pour G uniquement.

**Polices.** Fraunces (axe SOFT, déjà utilisée par C) + Schibsted Grotesk.
**Palette (5).** or `#F3B53F` (soja dessus 9,1), soja `#2A1B13`, crème `#FBF4E6` (soja dessus 15,2),
piment `#A92F1A` (blanc dessus 6,8 ; sur crème 6,2), blanc.

---

## Règles communes

- Mobile d'abord : tout est pensé à 375 px, puis élargi à 768 et 1280 px.
- Zones tactiles d'au moins 44 × 44 px, corps de texte à 16 px minimum (17 à 18 px en pratique).
- Prix : chiffres tabulaires (`font-variant-numeric: tabular-nums`), alignés à droite.
- Une seule animation d'entrée par version, aucune au scroll, et toutes coupées par
  `prefers-reduced-motion: reduce`.
- Pictogrammes : seulement le bol, un téléphone (mobile au trait) et un repère de lieu, dessinés à la main en SVG.
- La barre démo prend la police de la version, sur fond blanc neutre, avec une seule ombre très discrète.

---

## Relecture contre le brief (faite avant de coder)

| Point du brief | Vérifié | Correction apportée |
|---|---|---|
| Couleurs tirées du lieu | Oui, les 7 couleurs du relevé, plus une nuance foncée du gris-vert | Le gris-vert d'origine échoue en texte sur pierre (4,21), d'où l'ajout de `#4A5A55`. |
| 4 à 6 couleurs par version | A : 5, B : 4, C : 6 (dont la nuance) | |
| Ambre jamais en texte courant sur clair | Oui | Dans A, l'ambre était prévu pour les prix ; je l'ai déplacé vers les titres de catégorie, **sur l'ardoise sombre** uniquement. |
| 2 polices max, OFL, auto-hébergées, ni Inter, Roboto, Arial ni Poppins | Oui | La barre démo devait avoir sa propre police, ce qui aurait fait 3 polices par page : elle hérite maintenant de la police de la version. |
| Mobile-first, carte lisible en 5 s | Oui | Dans B, la carte venait d'abord après « le lieu » ; elle passe juste après le bloc argument clé, conformément à l'ordre imposé. |
| Bloc argument clé = le plus visible | A : panneau bois, B : panneau ambre plein écran, C : aplat gris-vert | |
| Pas de violet, de dégradé, de glassmorphism ni d'ombres | Oui | Les cercles de C étaient prévus en `repeating-radial-gradient`. C'est techniquement un dégradé, donc je les ai refaits en bordures de `div` imbriquées. Les crans du ticket B utilisent `clip-path: polygon` pour la même raison. |
| Pas de grille de cartes identiques | Oui, sauf sur l'index des propositions (autorisé) | |
| Pas de « hero + 3 features + témoignages » | Oui, aucune section « features », aucun avis | |
| Pas d'emoji ni d'icône décorative | Oui, seulement le bol, le téléphone et le repère | |
| Clichés de page générée (relecture du plugin de design) | | Pas de petites étiquettes en capitales au-dessus de chaque titre, pas de « → » dans les boutons, pas de mot isolé en couleur dans les titres. Le mono n'apparaît que dans B, où il fait partie du sujet. Les capitales espacées ne sont que dans A, car elles viennent du vrai store. En C, le fond pierre et le titre serif pouvaient faire « page crème générique » : pas d'accent terracotta, le gris-vert de la porte cochère joue l'accent, et le cercle de rotin porte l'identité. |
