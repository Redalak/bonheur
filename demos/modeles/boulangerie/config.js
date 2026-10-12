/* =====================================================================
   MAISON FARINE : données du modèle « Boulangerie-pâtisserie »
   ---------------------------------------------------------------------
   Pour adapter ce modèle à un vrai établissement, on ne modifie QUE ce fichier
   (et le nom dans le HTML pour la copie de secours sans JavaScript).
   Nom, adresse et téléphone ci-dessous sont FICTIFS : le numéro est dans la
   plage 01 99 00 xx xx, réservée par l'ARCEP aux œuvres de fiction.
   ===================================================================== */

const CONFIG = {
  cle: "maison-farine",                          // identifiant court (sert à mémoriser la langue)
  nom: "Maison Farine",                          // nom affiché
  telephoneAffiche: "01 99 00 07 07",     // numéro tel qu'on le lit
  telephoneLien: "+33199000707",           // même numéro, format international (liens tel:)
  adresse: "5 rue de l'Exemple, 75015 Paris",
  transport: {"fr": "Métro Exemple (ligne 8)", "en": "Exemple metro (line 8)"},              // métro, bus... en français et en anglais
  lienItineraire: "https://www.google.com/maps/search/?api=1&query=Maison+Farine+5+rue+de+l%27Exemple+75015+Paris",

  // Horaires : 0 = dimanche ... 6 = samedi. [] = fermé. Une fin « après minuit » (ex. "02:00") est gérée.
  horaires: {
    0: [["07:30", "13:30"]],                    // dimanche
    1: [],                                      // lundi
    2: [["07:00", "20:00"]],                    // mardi
    3: [["07:00", "20:00"]],                    // mercredi
    4: [["07:00", "20:00"]],                    // jeudi
    5: [["07:00", "20:00"]],                    // vendredi
    6: [["07:00", "20:00"]],                    // samedi
  },

  prixExemple: true,          // true = mention « Prix d'exemple » (à passer à false avec les vrais prix)
  afficherAlcool: false,       // true = boissons alcoolisées affichées + mention loi Évin automatique

  // La carte : catégories (nom fr/en, sous-titre facultatif) et plats { fr, en, prix, detail facultatif }.
  // Un plat avec alcool: true n'est affiché que si afficherAlcool vaut true.
  carte: [
    {
      "fr": "Pains", "en": "Bread",
      plats: [
        {"fr": "Baguette tradition", "en": "Traditional baguette", "prix": 1.3},
        {"fr": "Pain au levain (500 g)", "en": "Sourdough loaf (500 g)", "prix": 4.5},
        {"fr": "Pain aux céréales", "en": "Multigrain loaf", "prix": 3.8}
      ]
    },
    {
      "fr": "Viennoiseries", "en": "Viennoiseries",
      plats: [
        {"fr": "Croissant", "en": "Croissant", "prix": 1.4},
        {"fr": "Pain au chocolat", "en": "Pain au chocolat", "prix": 1.6},
        {"fr": "Brioche", "en": "Brioche", "prix": 2.2}
      ]
    },
    {
      "fr": "Pâtisseries", "en": "Pastries",
      plats: [
        {"fr": "Éclair au chocolat", "en": "Chocolate éclair", "prix": 4.5},
        {"fr": "Tarte aux fruits", "en": "Fruit tart", "prix": 4.8},
        {"fr": "Paris-brest", "en": "Paris-brest", "prix": 5.2}
      ]
    },
    {
      "fr": "Gâteaux sur commande", "en": "Cakes to order", "sous": {"fr": "48 h à l'avance", "en": "48 hours ahead"},
      plats: [
        {"fr": "Gâteau 6 parts", "en": "Cake, 6 servings", "prix": 28},
        {"fr": "Gâteau 10 parts", "en": "Cake, 10 servings", "prix": 42}
      ]
    }
  ],

  // Infos pratiques (une ligne par info, en français et en anglais).
  infos: [
    {"fr": "Commandes de gâteaux par téléphone", "en": "Cake orders by phone"},
    {"fr": "Ouvert le dimanche matin", "en": "Open Sunday morning"},
    {"fr": "Cartes bancaires acceptées", "en": "Cards accepted"}
  ],

  // Textes propres à ce restaurant (les textes communs sont dans commun/moteur.js).
  textes: {
    fr: {
      "titrePage": "Maison Farine : boulangerie-pâtisserie, Paris 15e",
      "descriptionPage": "Pains au levain, viennoiseries et pâtisseries. Commandez vos gâteaux par téléphone.",
      "heroType": "Boulangerie · pâtisserie",
      "heroSousTitre": "Le pain du quartier, dès 7h.",
      "heroTexte": "Pains au levain, croissants du matin et pâtisseries du week-end.",
      "argTitre": "Un gâteau pour dimanche ? Commandez-le avant vendredi.",
      "argTexte": "Appelez pour réserver vos gâteaux d'anniversaire, vos pièces montées ou votre pain pour une grande tablée.",
      "argBouton1": "Commander un gâteau",
      "argBouton2": "Réserver du pain",
      "navCarte": "Nos produits",
      "carteTitre": "Nos produits",
      "lieuTexte": "Un fournil ouvert sur la boutique, l'odeur du pain chaud et des baguettes qui sortent toute la journée.",
      "sigType": "Boulangerie-pâtisserie · Paris"
    },
    en: {
      "titrePage": "Maison Farine: bakery and pâtisserie, Paris 15th",
      "descriptionPage": "Sourdough bread, viennoiseries and pastries. Order your cakes by phone.",
      "heroType": "Bakery · pâtisserie",
      "heroSousTitre": "The neighbourhood bakery, from 7 am.",
      "heroTexte": "Sourdough loaves, morning croissants and weekend pastries.",
      "argTitre": "A cake for Sunday? Order it before Friday.",
      "argTexte": "Call us to order birthday cakes, celebration pieces or bread for a big table.",
      "argBouton1": "Order a cake",
      "argBouton2": "Reserve bread",
      "navCarte": "Our products",
      "carteTitre": "Our products",
      "lieuTexte": "An open bakehouse behind the counter, the smell of warm bread and baguettes coming out all day long.",
      "sigType": "Bakery & pâtisserie · Paris"
    }
  }
};
