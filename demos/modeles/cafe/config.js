/* =====================================================================
   GRAIN NOIR : données du modèle « Café et torréfacteur »
   ---------------------------------------------------------------------
   Pour adapter ce modèle à un vrai établissement, on ne modifie QUE ce fichier
   (et le nom dans le HTML pour la copie de secours sans JavaScript).
   Nom, adresse et téléphone ci-dessous sont FICTIFS : le numéro est dans la
   plage 01 99 00 xx xx, réservée par l'ARCEP aux œuvres de fiction.
   ===================================================================== */

const CONFIG = {
  cle: "grain-noir",                          // identifiant court (sert à mémoriser la langue)
  nom: "Grain Noir",                          // nom affiché
  telephoneAffiche: "01 99 00 08 08",     // numéro tel qu'on le lit
  telephoneLien: "+33199000808",           // même numéro, format international (liens tel:)
  adresse: "31 rue de l'Exemple, 75003 Paris",
  transport: {"fr": "Métro Exemple (ligne 11)", "en": "Exemple metro (line 11)"},              // métro, bus... en français et en anglais
  lienItineraire: "https://www.google.com/maps/search/?api=1&query=Grain+Noir+31+rue+de+l%27Exemple+75003+Paris",

  // Horaires : 0 = dimanche ... 6 = samedi. [] = fermé. Une fin « après minuit » (ex. "02:00") est gérée.
  horaires: {
    0: [["09:00", "17:00"]],                    // dimanche
    1: [["08:00", "18:00"]],                    // lundi
    2: [["08:00", "18:00"]],                    // mardi
    3: [["08:00", "18:00"]],                    // mercredi
    4: [["08:00", "18:00"]],                    // jeudi
    5: [["08:00", "18:00"]],                    // vendredi
    6: [["09:00", "18:00"]],                    // samedi
  },

  prixExemple: true,          // true = mention « Prix d'exemple » (à passer à false avec les vrais prix)
  afficherAlcool: false,       // true = boissons alcoolisées affichées + mention loi Évin automatique

  // La carte : catégories (nom fr/en, sous-titre facultatif) et plats { fr, en, prix, detail facultatif }.
  // Un plat avec alcool: true n'est affiché que si afficherAlcool vaut true.
  carte: [
    {
      "fr": "Espresso", "en": "Espresso",
      plats: [
        {"fr": "Espresso", "en": "Espresso", "prix": 2.5},
        {"fr": "Cappuccino", "en": "Cappuccino", "prix": 4.2},
        {"fr": "Flat white", "en": "Flat white", "prix": 4.5}
      ]
    },
    {
      "fr": "Filtre", "en": "Filter",
      plats: [
        {"fr": "V60", "en": "V60", "prix": 5},
        {"fr": "Batch brew", "en": "Batch brew", "prix": 3.5},
        {"fr": "Cold brew", "en": "Cold brew", "prix": 4.5}
      ]
    },
    {
      "fr": "À grignoter", "en": "To nibble",
      plats: [
        {"fr": "Cookie", "en": "Cookie", "prix": 3},
        {"fr": "Banana bread", "en": "Banana bread", "prix": 3.8},
        {"fr": "Cinnamon roll", "en": "Cinnamon roll", "prix": 4}
      ]
    },
    {
      "fr": "Grains à emporter", "en": "Beans to take home",
      plats: [
        {"fr": "Éthiopie (250 g)", "en": "Ethiopia (250 g)", "prix": 14, "detail": {"fr": "Notes de fleurs et d'agrumes", "en": "Floral, citrus notes"}},
        {"fr": "Colombie (250 g)", "en": "Colombia (250 g)", "prix": 12, "detail": {"fr": "Notes de chocolat et de noisette", "en": "Chocolate, hazelnut notes"}}
      ]
    }
  ],

  // Infos pratiques (une ligne par info, en français et en anglais).
  infos: [
    {"fr": "Wi-Fi et prises", "en": "Wi-Fi and sockets"},
    {"fr": "Grains moulus à la demande", "en": "Beans ground to order"},
    {"fr": "Ateliers dégustation sur réservation", "en": "Tasting workshops on booking"}
  ],

  // Textes propres à ce restaurant (les textes communs sont dans commun/moteur.js).
  textes: {
    fr: {
      "titrePage": "Grain Noir : café et torréfaction, Paris 3e",
      "descriptionPage": "Café de spécialité, grains torréfiés sur place, pâtisseries du jour. Ouvert tous les jours.",
      "heroType": "Café · torréfaction",
      "heroSousTitre": "Le café, du grain à la tasse.",
      "heroTexte": "Espressos, filtres et cappuccinos, avec des grains torréfiés dans l'arrière-boutique.",
      "argTitre": "Vos grains, moulus pour votre cafetière.",
      "argTexte": "Appelez pour réserver un paquet, ou pour privatiser le café pour un atelier dégustation.",
      "argBouton1": "Réserver des grains",
      "argBouton2": "Privatiser le café",
      "carteTitre": "La carte",
      "lieuTexte": "Un long comptoir en chêne, le torréfacteur qui tourne au fond et de grandes tables pour travailler.",
      "sigType": "Café et torréfacteur · Paris"
    },
    en: {
      "titrePage": "Grain Noir: coffee and roastery, Paris 3rd",
      "descriptionPage": "Specialty coffee, beans roasted in-house, daily pastries. Open every day.",
      "heroType": "Coffee · roastery",
      "heroSousTitre": "Coffee, from bean to cup.",
      "heroTexte": "Espresso, filter and cappuccino, with beans roasted in the back room.",
      "argTitre": "Your beans, ground for your coffee maker.",
      "argTexte": "Call to reserve a bag, or to hire the café for a tasting workshop.",
      "argBouton1": "Reserve beans",
      "argBouton2": "Hire the café",
      "carteTitre": "Menu",
      "lieuTexte": "A long oak counter, the roaster turning at the back and big tables to work at.",
      "sigType": "Coffee & roastery · Paris"
    }
  }
};
