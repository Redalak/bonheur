/* =====================================================================
   LE COUPE-CHOU : données du modèle « Barbier »
   ---------------------------------------------------------------------
   Pour adapter ce modèle à un vrai établissement, on ne modifie QUE ce fichier
   (et le nom dans le HTML pour la copie de secours sans JavaScript).
   Nom, adresse et téléphone ci-dessous sont FICTIFS : le numéro est dans la
   plage 01 99 00 xx xx, réservée par l'ARCEP aux œuvres de fiction.
   ===================================================================== */

const CONFIG = {
  cle: "coupe-chou",                          // identifiant court (sert à mémoriser la langue)
  nom: "Le Coupe-Chou",                          // nom affiché
  telephoneAffiche: "01 99 00 10 10",     // numéro tel qu'on le lit
  telephoneLien: "+33199001010",           // même numéro, format international (liens tel:)
  adresse: "27 rue de l'Exemple, 75020 Paris",
  transport: {"fr": "Métro Exemple (ligne 3)", "en": "Exemple metro (line 3)"},              // métro, bus... en français et en anglais
  lienItineraire: "https://www.google.com/maps/search/?api=1&query=Le+Coupe-Chou+27+rue+de+l%27Exemple+75020+Paris",

  // Horaires : 0 = dimanche ... 6 = samedi. [] = fermé. Une fin « après minuit » (ex. "02:00") est gérée.
  horaires: {
    0: [],                                      // dimanche
    1: [],                                      // lundi
    2: [["10:00", "19:30"]],                    // mardi
    3: [["10:00", "19:30"]],                    // mercredi
    4: [["10:00", "21:00"]],                    // jeudi
    5: [["10:00", "19:30"]],                    // vendredi
    6: [["09:00", "18:00"]],                    // samedi
  },

  prixExemple: true,          // true = mention « Prix d'exemple » (à passer à false avec les vrais prix)
  afficherAlcool: false,       // true = boissons alcoolisées affichées + mention loi Évin automatique

  // La carte : catégories (nom fr/en, sous-titre facultatif) et plats { fr, en, prix, detail facultatif }.
  // Un plat avec alcool: true n'est affiché que si afficherAlcool vaut true.
  carte: [
    {
      "fr": "Cheveux", "en": "Hair",
      plats: [
        {"fr": "Coupe", "en": "Haircut", "prix": 25},
        {"fr": "Coupe et shampoing", "en": "Cut and wash", "prix": 30},
        {"fr": "Coupe enfant (moins de 12 ans)", "en": "Kids' cut (under 12)", "prix": 18}
      ]
    },
    {
      "fr": "Barbe", "en": "Beard",
      plats: [
        {"fr": "Taille de barbe", "en": "Beard trim", "prix": 18},
        {"fr": "Rasage au coupe-chou", "en": "Straight-razor shave", "prix": 30, "detail": {"fr": "Serviette chaude incluse", "en": "Hot towel included"}}
      ]
    },
    {
      "fr": "Formules", "en": "Packages",
      plats: [
        {"fr": "Coupe et barbe", "en": "Cut and beard", "prix": 38},
        {"fr": "Le grand jeu", "en": "The full works", "prix": 55, "detail": {"fr": "Coupe, rasage, soin du visage", "en": "Cut, shave, face care"}}
      ]
    }
  ],

  // Infos pratiques (une ligne par info, en français et en anglais).
  infos: [
    {"fr": "Sans rendez-vous en semaine", "en": "Walk-ins on weekdays"},
    {"fr": "Nocturne le jeudi jusqu'à 21h", "en": "Late opening Thursday until 9 pm"},
    {"fr": "Cartes bancaires acceptées", "en": "Cards accepted"}
  ],

  // Textes propres à ce restaurant (les textes communs sont dans commun/moteur.js).
  textes: {
    fr: {
      "titrePage": "Le Coupe-Chou : barbier, Paris 20e",
      "descriptionPage": "Coupes, tailles de barbe et rasage à l'ancienne au coupe-chou. Rendez-vous par téléphone.",
      "heroType": "Barbier · coupe & rasage",
      "heroSousTitre": "Coupe, barbe et rasage à l'ancienne.",
      "heroTexte": "Ciseaux, tondeuse et serviette chaude : le rasage au coupe-chou, comme avant.",
      "argTitre": "Le samedi, le fauteuil est pris. Réservez.",
      "argTexte": "Appelez pour réserver votre créneau, ou passez sans rendez-vous en semaine.",
      "argBouton1": "Prendre rendez-vous",
      "argBouton2": "Une place cet après-midi ?",
      "navCarte": "Tarifs",
      "carteTitre": "Les prestations",
      "carteNote": "Prix en euros TTC.",
      "lieuTexte": "Trois fauteuils en cuir, un carrelage damier, des miroirs anciens et la radio qui joue du jazz.",
      "sigType": "Barbier · Paris"
    },
    en: {
      "titrePage": "Le Coupe-Chou: barber shop, Paris 20th",
      "descriptionPage": "Haircuts, beard trims and old-school straight-razor shaves. Book by phone.",
      "heroType": "Barber · cut & shave",
      "heroSousTitre": "Cuts, beards and old-school shaves.",
      "heroTexte": "Scissors, clippers and a hot towel: the straight-razor shave, like it used to be.",
      "argTitre": "Saturdays are booked. Reserve your chair.",
      "argTexte": "Call to book your slot, or walk in during the week.",
      "argBouton1": "Book an appointment",
      "argBouton2": "A slot this afternoon?",
      "navCarte": "Prices",
      "carteTitre": "Services",
      "carteNote": "Prices in euros including VAT.",
      "lieuTexte": "Three leather chairs, a checkerboard floor, vintage mirrors and the radio playing jazz.",
      "sigType": "Barber · Paris"
    }
  }
};
