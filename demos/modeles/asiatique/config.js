/* =====================================================================
   MAISON KAZE : données du modèle « Cantine japonaise »
   ---------------------------------------------------------------------
   Pour adapter ce modèle à un vrai établissement, on ne modifie QUE ce fichier
   (et le nom dans le HTML pour la copie de secours sans JavaScript).
   Nom, adresse et téléphone ci-dessous sont FICTIFS : le numéro est dans la
   plage 01 99 00 xx xx, réservée par l'ARCEP aux œuvres de fiction.
   ===================================================================== */

const CONFIG = {
  cle: "maison-kaze",                          // identifiant court (sert à mémoriser la langue)
  nom: "Maison Kaze",                          // nom affiché
  telephoneAffiche: "01 99 00 04 04",     // numéro tel qu'on le lit
  telephoneLien: "+33199000404",           // même numéro, format international (liens tel:)
  adresse: "15 rue de l'Exemple, 75001 Paris",
  transport: {"fr": "Métro Exemple (ligne 7)", "en": "Exemple metro (line 7)"},              // métro, bus... en français et en anglais
  lienItineraire: "https://www.google.com/maps/search/?api=1&query=Maison+Kaze+15+rue+de+l%27Exemple+75001+Paris",

  // Horaires : 0 = dimanche ... 6 = samedi. [] = fermé. Une fin « après minuit » (ex. "02:00") est gérée.
  horaires: {
    0: [],                                      // dimanche
    1: [["11:45", "14:30"], ["18:45", "22:30"]], // lundi
    2: [["11:45", "14:30"], ["18:45", "22:30"]], // mardi
    3: [["11:45", "14:30"], ["18:45", "22:30"]], // mercredi
    4: [["11:45", "14:30"], ["18:45", "22:30"]], // jeudi
    5: [["11:45", "14:30"], ["18:45", "23:00"]], // vendredi
    6: [["11:45", "14:30"], ["18:45", "23:00"]], // samedi
  },

  prixExemple: true,          // true = mention « Prix d'exemple » (à passer à false avec les vrais prix)
  afficherAlcool: false,       // true = boissons alcoolisées affichées + mention loi Évin automatique

  // La carte : catégories (nom fr/en, sous-titre facultatif) et plats { fr, en, prix, detail facultatif }.
  // Un plat avec alcool: true n'est affiché que si afficherAlcool vaut true.
  carte: [
    {
      "fr": "Ramen", "en": "Ramen",
      plats: [
        {"fr": "Shoyu ramen", "en": "Shoyu ramen", "prix": 15},
        {"fr": "Miso ramen", "en": "Miso ramen", "prix": 16},
        {"fr": "Tantanmen", "en": "Tantanmen", "prix": 16}
      ]
    },
    {
      "fr": "Petites assiettes", "en": "Small plates",
      plats: [
        {"fr": "Gyozas (5 pièces)", "en": "Gyoza (5 pieces)", "prix": 7},
        {"fr": "Edamame", "en": "Edamame", "prix": 5},
        {"fr": "Karaage", "en": "Karaage", "prix": 9}
      ]
    },
    {
      "fr": "Donburi", "en": "Donburi",
      plats: [
        {"fr": "Katsudon", "en": "Katsudon", "prix": 15},
        {"fr": "Gyudon", "en": "Gyudon", "prix": 14}
      ]
    },
    {
      "fr": "Desserts et boissons", "en": "Desserts and drinks",
      plats: [
        {"fr": "Mochi glacé", "en": "Mochi ice cream", "prix": 6},
        {"fr": "Dorayaki", "en": "Dorayaki", "prix": 5},
        {"fr": "Thé vert", "en": "Green tea", "prix": 3.5},
        {"fr": "Ramune", "en": "Ramune", "prix": 4.5}
      ]
    }
  ],

  // Infos pratiques (une ligne par info, en français et en anglais).
  infos: [
    {"fr": "Places au comptoir", "en": "Counter seating"},
    {"fr": "Sur place et à emporter", "en": "Eat in or take away"},
    {"fr": "Service rapide le midi", "en": "Quick lunch service"}
  ],

  // Textes propres à ce restaurant (les textes communs sont dans commun/moteur.js).
  textes: {
    fr: {
      "titrePage": "Maison Kaze : ramen et cantine japonaise, Paris 1er",
      "descriptionPage": "Ramen, gyozas et donburi, sur place ou à emporter, du lundi au samedi.",
      "heroSousTitre": "Ramen, gyozas et donburi.",
      "heroTexte": "Des bouillons longs, des nouilles fermes et des bols servis vite, midi et soir.",
      "argTitre": "Le midi, on sert vite. Le soir, on prend le temps.",
      "argTexte": "Appelez pour réserver le soir, ou pour commander à emporter.",
      "argBouton1": "Réserver le soir",
      "argBouton2": "Commander à emporter",
      "carteTitre": "La carte",
      "lieuTexte": "Un comptoir en bois clair face à la cuisine, des rideaux noren et quelques tables au calme.",
      "heroVertical": "Ramen · Gyoza · Donburi",
      "kanjiLegende": "風, kaze : « le vent » en japonais",
      "sigType": "Cantine japonaise · Paris"
    },
    en: {
      "titrePage": "Maison Kaze: ramen and Japanese canteen, Paris 1st",
      "descriptionPage": "Ramen, gyoza and donburi, eat in or take away, Monday to Saturday.",
      "heroSousTitre": "Ramen, gyoza and donburi.",
      "heroTexte": "Slow-simmered broths, springy noodles and bowls served fast, lunch and dinner.",
      "argTitre": "Quick at lunch. Unhurried at dinner.",
      "argTexte": "Call to book for dinner, or to order takeaway.",
      "argBouton1": "Book for dinner",
      "argBouton2": "Order takeaway",
      "carteTitre": "Menu",
      "lieuTexte": "A light-wood counter facing the kitchen, noren curtains and a few quiet tables.",
      "heroVertical": "Ramen · Gyoza · Donburi",
      "kanjiLegende": "風, kaze: “wind” in Japanese",
      "sigType": "Japanese canteen · Paris"
    }
  }
};
