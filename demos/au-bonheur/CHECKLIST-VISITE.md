# Checklist : visite chez Au Bonheur, lundi 12 octobre 2026

11 rue Cadet, 75009 Paris (métro Cadet). Heure de visite : **à définir**.
Conseil : éviter le rush, donc plutôt **entre 15h00 et 18h00**, quand la salle est fermée entre les deux services.

## La veille (dimanche)

- [ ] Ordinateur chargé à 100 %, chargeur dans le sac.
- [ ] Les 7 versions testées en FR **et** en EN (bouton EN/FR en haut à droite).
- [ ] Vérifier que le badge affiche bien « Fermé · ouverture demain à 12h00 ».
- [ ] Imprimer ou noter les questions ci-dessous.
- [ ] Faire un `git pull` pour avoir la dernière version.

## Préparer la démo dans Chrome (mode « téléphone »)

1. Ouvrir `demos/au-bonheur/index.html` dans Chrome (glisser le fichier dans la fenêtre, ou clic droit > Ouvrir avec > Chrome).
2. **F12** pour ouvrir les outils de développement (Mac : **Cmd + Option + I**).
3. **Ctrl + Maj + M** (Mac : **Cmd + Maj + M**) pour passer en mode appareil.
4. En haut, dans la liste des appareils, choisir un **iPhone** (par exemple iPhone 12 Pro).
5. Mettre le zoom à **100 %** (menu juste à côté du nom de l'appareil).
6. Ancrer le panneau DevTools sur le côté : menu **⋮** (en haut à droite du panneau) > **Dock side** > icône « à droite », pour que le téléphone reste bien visible et grand.
7. Préparer **un onglet par version** : A à G (pour G, recharger juste avant de la montrer : l'ouverture animée ne se joue qu'au chargement) (le mode appareil reste actif dans chaque onglet ouvert depuis DevTools ; sinon refaire l'étape 3).
8. Recharger chaque onglet une fois (**Ctrl + R** / **Cmd + R**) juste avant d'entrer, pour rejouer l'animation d'entrée.

Rappel : rien n'a besoin d'internet. Si le Wi-Fi est mauvais, la démo marche quand même.

## Scénario de présentation (1 minute par version)

1. **La carte et les prix** : « Vos clients voient la carte et les prix en 5 secondes, avant même de venir. » Faire défiler jusqu'à la carte.
2. **Le bouton Appeler** : « Un seul geste pour appeler, réserver le midi ou commander à emporter. Ça évite que les gens arrivent pendant le rush et repartent. »
3. **Le badge ouvert / fermé** : « Il se met à jour tout seul avec vos horaires, à l'heure de Paris. »
4. **Le passage en anglais** : toucher **EN** : « Pour les touristes et les clients du quartier qui ne parlent pas français, tout bascule, la carte comprise. »
5. **« Laquelle vous préférez ? »** Montrer A, puis B, puis C, puis D (barre en bas de l'écran), et laisser choisir. Sur D : « Ici, on mettra vos photos à la place des cases de couleur. » Sur E : faire tourner le plateau du doigt devant lui, puis demander s'il a un nom chinois.

À dire si on vous pose la question : les prix et les plats sont **des exemples** ; on mettra les vrais avec sa carte. Pas de photos volées : on utilisera les siennes ou on viendra en faire.

## Questions à poser sur place (les [À VÉRIFIER])

- [ ] Horaires exacts (12h–15h et 18h30–23h du lundi au samedi, fermé le dimanche ?) et fermetures annuelles.
- [ ] La carte complète avec les prix (une photo de la carte papier suffit).
- [ ] À emporter : on commande par téléphone ? combien de temps avant ? retrait au comptoir ?
- [ ] Réservations par téléphone le midi ? TheFork ou autre outil en ligne ?
- [ ] Titres-restaurant acceptés ? En papier, en carte, les deux ?
- [ ] Accès en fauteuil roulant (entrée sans marche, toilettes) ?
- [ ] Terrasse toute l'année ? Combien de places ?
- [ ] Alcool servi ? À afficher sur le site ou non ?
- [ ] Document allergènes disponible ?
- [ ] Photos des plats et de la salle (à lui), ou accord pour venir en faire ?
- [ ] Fichier du logo (store, logo rond lumineux) ? Un nom chinois officiel ?
- [ ] Pour la suite : nom, e-mail, et qui décide.

## Après la visite

- [ ] Noter la version choisie (A à G) et les remarques.
- [ ] Mettre à jour `CONFIG` dans `commun/script.js` avec les vraies infos.
- [ ] Envoyer un message de remerciement le jour même.
