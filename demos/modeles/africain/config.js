/* =====================================================================
   TERANGA : données du modèle « Cuisine d'Afrique de l'Ouest »
   ---------------------------------------------------------------------
   Pour adapter ce modèle à un vrai établissement, on ne modifie QUE ce fichier
   (et le nom dans le HTML pour la copie de secours sans JavaScript).
   Nom, adresse et téléphone ci-dessous sont FICTIFS : le numéro est dans la
   plage 01 99 00 xx xx, réservée par l'ARCEP aux œuvres de fiction.
   ===================================================================== */

const CONFIG = {
  cle: "teranga",                          // identifiant court (sert à mémoriser la langue)
  nom: "Teranga",                          // nom affiché
  telephoneAffiche: "01 99 00 06 06",     // numéro tel qu'on le lit
  telephoneLien: "+33199000606",           // même numéro, format international (liens tel:)
  adresse: "9 rue de l'Exemple, 75018 Paris",
  transport: {"fr": "Métro Exemple (ligne 12)", "en": "Exemple metro (line 12)"},              // métro, bus... en français et en anglais
  lienItineraire: "https://www.google.com/maps/search/?api=1&query=Teranga+9+rue+de+l%27Exemple+75018+Paris",

  // Horaires : 0 = dimanche ... 6 = samedi. [] = fermé. Une fin « après minuit » (ex. "02:00") est gérée.
  horaires: {
    0: [["12:00", "15:00"], ["19:00", "23:30"]], // dimanche
    1: [],                                      // lundi
    2: [["12:00", "15:00"], ["19:00", "23:30"]], // mardi
    3: [["12:00", "15:00"], ["19:00", "23:30"]], // mercredi
    4: [["12:00", "15:00"], ["19:00", "23:30"]], // jeudi
    5: [["12:00", "15:00"], ["19:00", "00:30"]], // vendredi
    6: [["12:00", "15:00"], ["19:00", "00:30"]], // samedi
  },

  prixExemple: true,          // true = mention « Prix d'exemple » (à passer à false avec les vrais prix)
  afficherAlcool: false,       // true = boissons alcoolisées affichées + mention loi Évin automatique

  // La carte : catégories (nom fr/en, sous-titre facultatif) et plats { fr, en, prix, detail facultatif }.
  // Un plat avec alcool: true n'est affiché que si afficherAlcool vaut true.
  carte: [
    {
      "fr": "Entrées", "en": "Starters",
      plats: [
        {"fr": "Pastels", "en": "Pastels", "prix": 7, "detail": {"fr": "Chaussons frits", "en": "Fried turnovers"}},
        {"fr": "Alloco", "en": "Alloco", "prix": 6, "detail": {"fr": "Bananes plantain frites", "en": "Fried plantain"}},
        {"fr": "Fataya", "en": "Fataya", "prix": 7}
      ]
    },
    {
      "fr": "Plats", "en": "Mains",
      plats: [
        {"fr": "Thiéboudienne", "en": "Thieboudienne", "prix": 17, "detail": {"fr": "Riz au poisson", "en": "Fish and rice"}},
        {"fr": "Poulet yassa", "en": "Chicken yassa", "prix": 16},
        {"fr": "Mafé", "en": "Mafé", "prix": 16, "detail": {"fr": "Sauce arachide", "en": "Peanut sauce"}},
        {"fr": "Poisson braisé", "en": "Grilled fish", "prix": 19}
      ]
    },
    {
      "fr": "Desserts", "en": "Desserts",
      plats: [
        {"fr": "Thiakry", "en": "Thiakry", "prix": 6},
        {"fr": "Beignets", "en": "Doughnuts", "prix": 5}
      ]
    },
    {
      "fr": "Boissons", "en": "Drinks",
      plats: [
        {"fr": "Bissap", "en": "Bissap", "prix": 4, "detail": {"fr": "Fleur d'hibiscus", "en": "Hibiscus"}},
        {"fr": "Gingembre", "en": "Ginger juice", "prix": 4},
        {"fr": "Bouye", "en": "Bouye", "prix": 4, "detail": {"fr": "Fruit du baobab", "en": "Baobab fruit"}}
      ]
    }
  ],

  // Infos pratiques (une ligne par info, en français et en anglais).
  infos: [
    {"fr": "Grandes tables pour les familles", "en": "Big tables for families"},
    {"fr": "Sur place et à emporter", "en": "Eat in or take away"},
    {"fr": "Ouvert tard le week-end", "en": "Open late at weekends"}
  ],

  // Textes propres à ce restaurant (les textes communs sont dans commun/moteur.js).
  textes: {
    fr: {
      "titrePage": "Teranga : cuisine d'Afrique de l'Ouest, Paris 18e",
      "descriptionPage": "Thiéboudienne, yassa, mafé et jus de bissap, à partager. Sur place ou à emporter.",
      "heroSousTitre": "Cuisine d'Afrique de l'Ouest, généreuse et parfumée.",
      "heroTexte": "Thiéboudienne, yassa, mafé et jus de bissap, à partager.",
      "argTitre": "Le week-end, on vient en famille.",
      "argTexte": "Appelez pour réserver une grande table, ou pour commander à emporter.",
      "argBouton1": "Réserver une grande table",
      "argBouton2": "Commander à emporter",
      "carteTitre": "La carte",
      "teranga": "Teranga : l'hospitalité, en wolof.",
      "lieuTexte": "Des tissus wax aux murs, des grandes tables à partager et de la musique, toujours.",
      "sigType": "Cuisine d'Afrique de l'Ouest · Paris"
    },
    en: {
      "titrePage": "Teranga: West African cuisine, Paris 18th",
      "descriptionPage": "Thieboudienne, yassa, mafé and bissap juice to share. Eat in or take away.",
      "heroSousTitre": "West African cooking, generous and fragrant.",
      "heroTexte": "Thieboudienne, yassa, mafé and bissap juice, made to share.",
      "argTitre": "Weekends are for family.",
      "argTexte": "Call to book a big table, or to order takeaway.",
      "argBouton1": "Book a big table",
      "argBouton2": "Order takeaway",
      "carteTitre": "Menu",
      "teranga": "Teranga: hospitality, in Wolof.",
      "lieuTexte": "Wax prints on the walls, long tables to share and music, always.",
      "sigType": "West African cuisine · Paris"
    }
  }
};
