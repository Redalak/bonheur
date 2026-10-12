/* =====================================================================
   GIVRE : données du modèle « Glacier artisanal »
   ---------------------------------------------------------------------
   Pour adapter ce modèle à un vrai établissement, on ne modifie QUE ce fichier
   (et le nom dans le HTML pour la copie de secours sans JavaScript).
   Nom, adresse et téléphone ci-dessous sont FICTIFS : le numéro est dans la
   plage 01 99 00 xx xx, réservée par l'ARCEP aux œuvres de fiction.
   ===================================================================== */

const CONFIG = {
  cle: "givre",                          // identifiant court (sert à mémoriser la langue)
  nom: "Givre",                          // nom affiché
  telephoneAffiche: "01 99 00 11 11",     // numéro tel qu'on le lit
  telephoneLien: "+33199001111",           // même numéro, format international (liens tel:)
  adresse: "2 place de l'Exemple, 75004 Paris",
  transport: {"fr": "Métro Exemple (ligne 1)", "en": "Exemple metro (line 1)"},              // métro, bus... en français et en anglais
  lienItineraire: "https://www.google.com/maps/search/?api=1&query=Givre+2+place+de+l%27Exemple+75004+Paris",

  // Horaires : 0 = dimanche ... 6 = samedi. [] = fermé. Une fin « après minuit » (ex. "02:00") est gérée.
  horaires: {
    0: [["13:00", "23:00"]],                    // dimanche
    1: [["13:00", "23:00"]],                    // lundi
    2: [["13:00", "23:00"]],                    // mardi
    3: [["13:00", "23:00"]],                    // mercredi
    4: [["13:00", "23:00"]],                    // jeudi
    5: [["13:00", "23:00"]],                    // vendredi
    6: [["13:00", "23:00"]],                    // samedi
  },

  prixExemple: true,          // true = mention « Prix d'exemple » (à passer à false avec les vrais prix)
  afficherAlcool: false,       // true = boissons alcoolisées affichées + mention loi Évin automatique

  // La carte : catégories (nom fr/en, sous-titre facultatif) et plats { fr, en, prix, detail facultatif }.
  // Un plat avec alcool: true n'est affiché que si afficherAlcool vaut true.
  carte: [
    {
      "fr": "Cornet ou pot", "en": "Cone or cup",
      plats: [
        {"fr": "1 boule", "en": "1 scoop", "prix": 3.5},
        {"fr": "2 boules", "en": "2 scoops", "prix": 6},
        {"fr": "3 boules", "en": "3 scoops", "prix": 8}
      ]
    },
    {
      "fr": "Parfums", "en": "Flavours", "sous": {"fr": "Compris dans le prix", "en": "Included"},
      plats: [
        {"fr": "Vanille", "en": "Vanilla", "prix": null},
        {"fr": "Pistache", "en": "Pistachio", "prix": null},
        {"fr": "Chocolat noir", "en": "Dark chocolate", "prix": null},
        {"fr": "Sorbet fraise", "en": "Strawberry sorbet", "prix": null}
      ]
    },
    {
      "fr": "Gourmandises", "en": "Treats",
      plats: [
        {"fr": "Affogato", "en": "Affogato", "prix": 5.5},
        {"fr": "Milkshake", "en": "Milkshake", "prix": 6.5},
        {"fr": "Coupe chantilly", "en": "Sundae with whipped cream", "prix": 7.5}
      ]
    },
    {
      "fr": "À emporter", "en": "To take away",
      plats: [
        {"fr": "Pot 500 ml", "en": "500 ml tub", "prix": 12},
        {"fr": "Gâteau glacé 6 parts", "en": "Ice cream cake, 6 servings", "prix": 32}
      ]
    }
  ],

  // Infos pratiques (une ligne par info, en français et en anglais).
  infos: [
    {"fr": "Ouvert tous les jours", "en": "Open every day"},
    {"fr": "Bancs sur la place", "en": "Benches on the square"},
    {"fr": "Options sans lactose", "en": "Dairy-free options"}
  ],

  // Textes propres à ce restaurant (les textes communs sont dans commun/moteur.js).
  textes: {
    fr: {
      "titrePage": "Givre : glacier, Paris 4e",
      "descriptionPage": "Glaces et sorbets, cornets et pots à emporter, tous les jours de 13h à 23h.",
      "heroType": "Glacier · glaces & sorbets",
      "heroSousTitre": "Une boule, deux boules, trois boules.",
      "heroTexte": "Glaces crémeuses, sorbets aux fruits et cornets croustillants, tous les jours jusqu'à 23h.",
      "argTitre": "Un anniversaire ? Prenez un bac pour toute la tablée.",
      "argTexte": "Appelez la veille pour réserver vos pots de glace ou un gâteau glacé.",
      "argBouton1": "Réserver des pots",
      "argBouton2": "Commander un gâteau glacé",
      "navCarte": "Parfums",
      "carteTitre": "Les glaces",
      "lieuTexte": "Une vitrine pleine de couleurs, un comptoir rose pâle et des bancs sur la place pour manger dehors.",
      "sigType": "Glacier artisanal · Paris"
    },
    en: {
      "titrePage": "Givre: ice cream shop, Paris 4th",
      "descriptionPage": "Ice creams and sorbets, cones and tubs to take away, every day from 1 pm to 11 pm.",
      "heroType": "Ice cream · gelato & sorbet",
      "heroSousTitre": "One scoop, two scoops, three scoops.",
      "heroTexte": "Creamy ice cream, fruit sorbets and crunchy cones, every day until 11 pm.",
      "argTitre": "A birthday? Grab a tub for the whole table.",
      "argTexte": "Call the day before to reserve tubs or an ice cream cake.",
      "argBouton1": "Reserve tubs",
      "argBouton2": "Order an ice cream cake",
      "navCarte": "Flavours",
      "carteTitre": "Ice creams",
      "lieuTexte": "A display case full of colour, a pale pink counter and benches on the square to eat outside.",
      "sigType": "Ice cream shop · Paris"
    }
  }
};
