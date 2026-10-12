/* =====================================================================
   KERVAN : données du modèle « Grill turc »
   ---------------------------------------------------------------------
   Pour adapter ce modèle à un vrai établissement, on ne modifie QUE ce fichier
   (et le nom dans le HTML pour la copie de secours sans JavaScript).
   Nom, adresse et téléphone ci-dessous sont FICTIFS : le numéro est dans la
   plage 01 99 00 xx xx, réservée par l'ARCEP aux œuvres de fiction.
   ===================================================================== */

const CONFIG = {
  cle: "kervan",                          // identifiant court (sert à mémoriser la langue)
  nom: "Kervan",                          // nom affiché
  telephoneAffiche: "01 99 00 05 05",     // numéro tel qu'on le lit
  telephoneLien: "+33199000505",           // même numéro, format international (liens tel:)
  adresse: "42 rue de l'Exemple, 75010 Paris",
  transport: {"fr": "Métro Exemple (ligne 5)", "en": "Exemple metro (line 5)"},              // métro, bus... en français et en anglais
  lienItineraire: "https://www.google.com/maps/search/?api=1&query=Kervan+42+rue+de+l%27Exemple+75010+Paris",

  // Horaires : 0 = dimanche ... 6 = samedi. [] = fermé. Une fin « après minuit » (ex. "02:00") est gérée.
  horaires: {
    0: [["11:30", "23:30"]],                    // dimanche
    1: [["11:30", "23:30"]],                    // lundi
    2: [["11:30", "23:30"]],                    // mardi
    3: [["11:30", "23:30"]],                    // mercredi
    4: [["11:30", "23:30"]],                    // jeudi
    5: [["11:30", "23:30"]],                    // vendredi
    6: [["11:30", "23:30"]],                    // samedi
  },

  prixExemple: true,          // true = mention « Prix d'exemple » (à passer à false avec les vrais prix)
  afficherAlcool: false,       // true = boissons alcoolisées affichées + mention loi Évin automatique

  // La carte : catégories (nom fr/en, sous-titre facultatif) et plats { fr, en, prix, detail facultatif }.
  // Un plat avec alcool: true n'est affiché que si afficherAlcool vaut true.
  carte: [
    {
      "fr": "Meze", "en": "Meze", "sous": {"fr": "Mezzés froids et chauds", "en": "Cold and hot mezze"},
      plats: [
        {"fr": "Houmous", "en": "Hummus", "prix": 6},
        {"fr": "Ezme", "en": "Ezme", "prix": 6},
        {"fr": "Sigara böreği", "en": "Sigara böreği", "prix": 7},
        {"fr": "Mercimek çorbası", "en": "Mercimek çorbası", "prix": 6, "detail": {"fr": "Soupe de lentilles", "en": "Lentil soup"}}
      ]
    },
    {
      "fr": "Izgara", "en": "Izgara", "sous": {"fr": "Grillades au charbon", "en": "Charcoal grill"},
      plats: [
        {"fr": "Adana kebap", "en": "Adana kebap", "prix": 17},
        {"fr": "İskender", "en": "İskender", "prix": 18},
        {"fr": "Tavuk şiş", "en": "Tavuk şiş", "prix": 16},
        {"fr": "Köfte", "en": "Köfte", "prix": 16}
      ]
    },
    {
      "fr": "Pide", "en": "Pide", "sous": {"fr": "Du four", "en": "From the oven"},
      plats: [
        {"fr": "Kıymalı pide", "en": "Kıymalı pide", "prix": 13, "detail": {"fr": "Viande hachée", "en": "Minced meat"}},
        {"fr": "Peynirli pide", "en": "Peynirli pide", "prix": 12, "detail": {"fr": "Fromage", "en": "Cheese"}}
      ]
    },
    {
      "fr": "Tatlı", "en": "Tatlı", "sous": {"fr": "Desserts et boissons", "en": "Desserts and drinks"},
      plats: [
        {"fr": "Baklava", "en": "Baklava", "prix": 6},
        {"fr": "Künefe", "en": "Künefe", "prix": 8},
        {"fr": "Sütlaç", "en": "Sütlaç", "prix": 5, "detail": {"fr": "Riz au lait", "en": "Rice pudding"}},
        {"fr": "Thé turc", "en": "Turkish tea", "prix": 2},
        {"fr": "Ayran", "en": "Ayran", "prix": 3}
      ]
    }
  ],

  // Infos pratiques (une ligne par info, en français et en anglais).
  infos: [
    {"fr": "Grill au charbon", "en": "Charcoal grill"},
    {"fr": "Sur place et à emporter", "en": "Eat in or take away"},
    {"fr": "Ouvert tous les jours", "en": "Open every day"}
  ],

  // Textes propres à ce restaurant (les textes communs sont dans commun/moteur.js).
  textes: {
    fr: {
      "titrePage": "Kervan : grill turc et mezzés, Paris 10e",
      "descriptionPage": "Grillades à la braise, pide et mezzés turcs, tous les jours, sur place ou à emporter.",
      "heroSousTitre": "Grillades à la braise et mezzés turcs.",
      "heroTexte": "Kebabs au charbon, pide sortis du four et baklava, tous les jours.",
      "argTitre": "Le soir, les tables partent vite.",
      "argTexte": "Appelez pour réserver, ou faites préparer votre commande à emporter.",
      "argBouton1": "Réserver une table",
      "argBouton2": "Commander à emporter",
      "carteTitre": "La carte",
      "lieuTexte": "Des faïences bleues, un grill au charbon à la vue de tous et des thés servis dans des verres tulipe.",
      "heroType": "Ocakbaşı · grill turc · Paris 10e",
      "sigType": "Grill turc · Paris"
    },
    en: {
      "titrePage": "Kervan: Turkish grill and mezze, Paris 10th",
      "descriptionPage": "Charcoal grill, pide and Turkish mezze, every day, eat in or take away.",
      "heroSousTitre": "Charcoal grill and Turkish mezze.",
      "heroTexte": "Charcoal kebabs, pide fresh from the oven and baklava, every day.",
      "argTitre": "Evening tables go fast.",
      "argTexte": "Call us to book, or to have your takeaway order ready.",
      "argBouton1": "Book a table",
      "argBouton2": "Order takeaway",
      "carteTitre": "Menu",
      "lieuTexte": "Blue tiles, an open charcoal grill and tea served in tulip glasses.",
      "heroType": "Ocakbaşı · Turkish grill · Paris 10th",
      "sigType": "Turkish grill · Paris"
    }
  }
};
