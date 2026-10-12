/* =====================================================================
   TRATTORIA FIORE : données du modèle « Restaurant italien »
   ---------------------------------------------------------------------
   Pour adapter ce modèle à un vrai établissement, on ne modifie QUE ce fichier
   (et le nom dans le HTML pour la copie de secours sans JavaScript).
   Nom, adresse et téléphone ci-dessous sont FICTIFS : le numéro est dans la
   plage 01 99 00 xx xx, réservée par l'ARCEP aux œuvres de fiction.
   ===================================================================== */

const CONFIG = {
  cle: "trattoria-fiore",                          // identifiant court (sert à mémoriser la langue)
  nom: "Trattoria Fiore",                          // nom affiché
  telephoneAffiche: "01 99 00 02 02",     // numéro tel qu'on le lit
  telephoneLien: "+33199000202",           // même numéro, format international (liens tel:)
  adresse: "24 rue de l'Exemple, 75010 Paris",
  transport: {"fr": "Métro Exemple (ligne 4)", "en": "Exemple metro (line 4)"},              // métro, bus... en français et en anglais
  lienItineraire: "https://www.google.com/maps/search/?api=1&query=Trattoria+Fiore+24+rue+de+l%27Exemple+75010+Paris",

  // Horaires : 0 = dimanche ... 6 = samedi. [] = fermé. Une fin « après minuit » (ex. "02:00") est gérée.
  horaires: {
    0: [["12:00", "15:00"]],                    // dimanche
    1: [],                                      // lundi
    2: [["12:00", "14:30"], ["19:00", "22:30"]], // mardi
    3: [["12:00", "14:30"], ["19:00", "22:30"]], // mercredi
    4: [["12:00", "14:30"], ["19:00", "22:30"]], // jeudi
    5: [["12:00", "14:30"], ["19:00", "23:00"]], // vendredi
    6: [["12:00", "14:30"], ["19:00", "23:00"]], // samedi
  },

  prixExemple: true,          // true = mention « Prix d'exemple » (à passer à false avec les vrais prix)
  afficherAlcool: false,       // true = boissons alcoolisées affichées + mention loi Évin automatique

  // La carte : catégories (nom fr/en, sous-titre facultatif) et plats { fr, en, prix, detail facultatif }.
  // Un plat avec alcool: true n'est affiché que si afficherAlcool vaut true.
  carte: [
    {
      "fr": "Antipasti", "en": "Antipasti", "sous": {"fr": "Pour commencer", "en": "To start"},
      plats: [
        {"fr": "Burrata", "en": "Burrata", "prix": 12},
        {"fr": "Vitello tonnato", "en": "Vitello tonnato", "prix": 13},
        {"fr": "Arancini", "en": "Arancini", "prix": 9}
      ]
    },
    {
      "fr": "Primi", "en": "Primi", "sous": {"fr": "Les pâtes", "en": "Pasta"},
      plats: [
        {"fr": "Spaghetti alla carbonara", "en": "Spaghetti alla carbonara", "prix": 16},
        {"fr": "Tagliatelle al ragù", "en": "Tagliatelle al ragù", "prix": 17},
        {"fr": "Rigatoni all'arrabbiata", "en": "Rigatoni all'arrabbiata", "prix": 15}
      ]
    },
    {
      "fr": "Pizze", "en": "Pizze", "sous": {"fr": "Les pizzas", "en": "Pizza"},
      plats: [
        {"fr": "Margherita", "en": "Margherita", "prix": 12},
        {"fr": "Diavola", "en": "Diavola", "prix": 14},
        {"fr": "Quattro formaggi", "en": "Quattro formaggi", "prix": 15}
      ]
    },
    {
      "fr": "Dolci", "en": "Dolci", "sous": {"fr": "Les desserts", "en": "Desserts"},
      plats: [
        {"fr": "Tiramisù", "en": "Tiramisù", "prix": 8},
        {"fr": "Panna cotta", "en": "Panna cotta", "prix": 7},
        {"fr": "Affogato", "en": "Affogato", "prix": 6}
      ]
    }
  ],

  // Infos pratiques (une ligne par info, en français et en anglais).
  infos: [
    {"fr": "Pizzas à emporter", "en": "Pizza to take away"},
    {"fr": "Grande table pour les groupes", "en": "Long table for groups"},
    {"fr": "Chaises hautes pour les enfants", "en": "High chairs for children"}
  ],

  // Textes propres à ce restaurant (les textes communs sont dans commun/moteur.js).
  textes: {
    fr: {
      "titrePage": "Trattoria Fiore : restaurant italien, Paris 10e",
      "descriptionPage": "Pâtes, pizzas, antipasti à partager et tiramisù. Sur place ou à emporter.",
      "heroSousTitre": "La trattoria du quartier, midi et soir.",
      "heroTexte": "Pâtes, pizzas, antipasti à partager et tiramisù.",
      "argTitre": "Le dimanche, on garde une place pour la famille ?",
      "argTexte": "Appelez pour réserver, ou pour commander vos pizzas à emporter.",
      "argBouton1": "Réserver une table",
      "argBouton2": "Pizzas à emporter",
      "carteTitre": "Il menu",
      "lieuTexte": "Des nappes blanches, du basilic aux fenêtres et une grande table pour les tablées du dimanche.",
      "heroType": "Trattoria · Paris 10e",
      "sigType": "Restaurant italien · Paris"
    },
    en: {
      "titrePage": "Trattoria Fiore: Italian restaurant, Paris 10th",
      "descriptionPage": "Pasta, pizza, antipasti to share and tiramisù. Eat in or take away.",
      "heroSousTitre": "The neighbourhood trattoria, lunch and dinner.",
      "heroTexte": "Pasta, pizza, antipasti to share and tiramisù.",
      "argTitre": "Saving a seat for the family on Sunday?",
      "argTexte": "Call us to book, or to order your pizzas to take away.",
      "argBouton1": "Book a table",
      "argBouton2": "Pizza to take away",
      "carteTitre": "Il menu",
      "lieuTexte": "White tablecloths, basil on the windowsills and one long table for Sunday get-togethers.",
      "heroType": "Trattoria · Paris 10th",
      "sigType": "Italian restaurant · Paris"
    }
  }
};
