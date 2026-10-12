/* =====================================================================
   L'HEURE BLEUE : données du modèle « Bar à cocktails »
   ---------------------------------------------------------------------
   Pour adapter ce modèle à un vrai établissement, on ne modifie QUE ce fichier
   (et le nom dans le HTML pour la copie de secours sans JavaScript).
   Nom, adresse et téléphone ci-dessous sont FICTIFS : le numéro est dans la
   plage 01 99 00 xx xx, réservée par l'ARCEP aux œuvres de fiction.
   ===================================================================== */

const CONFIG = {
  cle: "heure-bleue",                          // identifiant court (sert à mémoriser la langue)
  nom: "L'Heure Bleue",                          // nom affiché
  telephoneAffiche: "01 99 00 01 01",     // numéro tel qu'on le lit
  telephoneLien: "+33199000101",           // même numéro, format international (liens tel:)
  adresse: "8 rue de l'Exemple, 75011 Paris",
  transport: {"fr": "Métro Exemple (ligne 9)", "en": "Exemple metro (line 9)"},              // métro, bus... en français et en anglais
  lienItineraire: "https://www.google.com/maps/search/?api=1&query=L%27Heure+Bleue+8+rue+de+l%27Exemple+75011+Paris",

  // Horaires : 0 = dimanche ... 6 = samedi. [] = fermé. Une fin « après minuit » (ex. "02:00") est gérée.
  horaires: {
    0: [],                                      // dimanche
    1: [],                                      // lundi
    2: [["18:00", "01:00"]],                    // mardi
    3: [["18:00", "01:00"]],                    // mercredi
    4: [["18:00", "01:00"]],                    // jeudi
    5: [["18:00", "02:00"]],                    // vendredi
    6: [["18:00", "02:00"]],                    // samedi
  },

  prixExemple: true,          // true = mention « Prix d'exemple » (à passer à false avec les vrais prix)
  afficherAlcool: true,       // true = boissons alcoolisées affichées + mention loi Évin automatique

  // La carte : catégories (nom fr/en, sous-titre facultatif) et plats { fr, en, prix, detail facultatif }.
  // Un plat avec alcool: true n'est affiché que si afficherAlcool vaut true.
  carte: [
    {
      "fr": "Signatures", "en": "Signatures", "sous": {"fr": "Cocktails de la maison", "en": "House cocktails"},
      plats: [
        {"fr": "L'Heure Bleue", "en": "L'Heure Bleue", "prix": 13, "alcool": true, "detail": {"fr": "Gin, citron, violette", "en": "Gin, lemon, violet"}},
        {"fr": "Minuit Doré", "en": "Golden Midnight", "prix": 14, "alcool": true, "detail": {"fr": "Rhum ambré, miel, épices", "en": "Aged rum, honey, spices"}},
        {"fr": "Fleur de Sureau", "en": "Elderflower", "prix": 13, "alcool": true, "detail": {"fr": "Vodka, sureau, concombre", "en": "Vodka, elderflower, cucumber"}}
      ]
    },
    {
      "fr": "Classiques", "en": "Classics",
      plats: [
        {"fr": "Negroni", "en": "Negroni", "prix": 12, "alcool": true},
        {"fr": "Old Fashioned", "en": "Old Fashioned", "prix": 13, "alcool": true},
        {"fr": "Margarita", "en": "Margarita", "prix": 12, "alcool": true}
      ]
    },
    {
      "fr": "Sans alcool", "en": "Alcohol-free",
      plats: [
        {"fr": "Spritz sans alcool", "en": "Alcohol-free spritz", "prix": 9},
        {"fr": "Citronnade au gingembre", "en": "Ginger lemonade", "prix": 7}
      ]
    },
    {
      "fr": "À partager", "en": "To share",
      plats: [
        {"fr": "Planche de charcuterie", "en": "Charcuterie board", "prix": 18},
        {"fr": "Planche de fromages", "en": "Cheese board", "prix": 17},
        {"fr": "Olives et focaccia", "en": "Olives and focaccia", "prix": 8}
      ]
    }
  ],

  // Infos pratiques (une ligne par info, en français et en anglais).
  infos: [
    {"fr": "Privatisation possible", "en": "Private hire available"},
    {"fr": "Réservation conseillée le week-end", "en": "Booking advised at weekends"},
    {"fr": "Cartes bancaires acceptées", "en": "Cards accepted"}
  ],

  // Textes propres à ce restaurant (les textes communs sont dans commun/moteur.js).
  textes: {
    fr: {
      "titrePage": "L'Heure Bleue : bar à cocktails, Paris 11e",
      "descriptionPage": "Cocktails de saison, grands classiques et planches à partager, du mardi au samedi dès 18h.",
      "heroSousTitre": "Bar à cocktails, de 18h jusqu'à tard.",
      "heroTexte": "Cocktails de saison, grands classiques et planches à partager.",
      "argTitre": "Le vendredi, on affiche vite complet.",
      "argTexte": "Réservez une table pour votre groupe, ou appelez pour privatiser le bar.",
      "argBouton1": "Réserver une table",
      "argBouton2": "Privatiser le bar",
      "carteTitre": "La carte du bar",
      "lieuTexte": "Un comptoir en laiton, des banquettes vert émeraude et une lumière basse, comme à l'heure bleue.",
      "heroType": "Bar à cocktails · Paris 11e",
      "sigType": "Bar à cocktails · Paris"
    },
    en: {
      "titrePage": "L'Heure Bleue: cocktail bar, Paris 11th",
      "descriptionPage": "Seasonal cocktails, classics and sharing boards, Tuesday to Saturday from 6 pm.",
      "heroSousTitre": "Cocktail bar, from 6 pm until late.",
      "heroTexte": "Seasonal cocktails, timeless classics and boards to share.",
      "argTitre": "Fridays book up fast.",
      "argTexte": "Book a table for your group, or call us to hire the whole bar.",
      "argBouton1": "Book a table",
      "argBouton2": "Hire the bar",
      "carteTitre": "Bar menu",
      "lieuTexte": "A brass counter, emerald banquettes and low light, like the blue hour itself.",
      "heroType": "Cocktail bar · Paris 11th",
      "sigType": "Cocktail bar · Paris"
    }
  }
};
