/* =====================================================================
   LA MEULE : données du modèle « Fromagerie »
   ---------------------------------------------------------------------
   Pour adapter ce modèle à un vrai établissement, on ne modifie QUE ce fichier
   (et le nom dans le HTML pour la copie de secours sans JavaScript).
   Nom, adresse et téléphone ci-dessous sont FICTIFS : le numéro est dans la
   plage 01 99 00 xx xx, réservée par l'ARCEP aux œuvres de fiction.
   ===================================================================== */

const CONFIG = {
  cle: "la-meule",                          // identifiant court (sert à mémoriser la langue)
  nom: "La Meule",                          // nom affiché
  telephoneAffiche: "01 99 00 12 12",     // numéro tel qu'on le lit
  telephoneLien: "+33199001212",           // même numéro, format international (liens tel:)
  adresse: "11 rue de l'Exemple, 75006 Paris",
  transport: {"fr": "Métro Exemple (ligne 10)", "en": "Exemple metro (line 10)"},              // métro, bus... en français et en anglais
  lienItineraire: "https://www.google.com/maps/search/?api=1&query=La+Meule+11+rue+de+l%27Exemple+75006+Paris",

  // Horaires : 0 = dimanche ... 6 = samedi. [] = fermé. Une fin « après minuit » (ex. "02:00") est gérée.
  horaires: {
    0: [["09:00", "13:00"]],                    // dimanche
    1: [],                                      // lundi
    2: [["09:30", "13:00"], ["15:30", "19:30"]], // mardi
    3: [["09:30", "13:00"], ["15:30", "19:30"]], // mercredi
    4: [["09:30", "13:00"], ["15:30", "19:30"]], // jeudi
    5: [["09:30", "19:30"]],                    // vendredi
    6: [["09:00", "19:30"]],                    // samedi
  },

  prixExemple: true,          // true = mention « Prix d'exemple » (à passer à false avec les vrais prix)
  afficherAlcool: false,       // true = boissons alcoolisées affichées + mention loi Évin automatique

  // La carte : catégories (nom fr/en, sous-titre facultatif) et plats { fr, en, prix, detail facultatif }.
  // Un plat avec alcool: true n'est affiché que si afficherAlcool vaut true.
  carte: [
    {
      "fr": "Pâtes pressées", "en": "Hard cheeses",
      plats: [
        {"fr": "Comté 18 mois (100 g)", "en": "Comté, 18 months (100 g)", "prix": 4.2},
        {"fr": "Beaufort (100 g)", "en": "Beaufort (100 g)", "prix": 4.8},
        {"fr": "Tomme de montagne (100 g)", "en": "Mountain tomme (100 g)", "prix": 3.6}
      ]
    },
    {
      "fr": "Bleus et pâtes molles", "en": "Blue and soft cheeses",
      plats: [
        {"fr": "Bleu d'Auvergne (100 g)", "en": "Bleu d'Auvergne (100 g)", "prix": 2.9},
        {"fr": "Brie de Meaux (100 g)", "en": "Brie de Meaux (100 g)", "prix": 3.4},
        {"fr": "Camembert", "en": "Camembert", "prix": 6.5}
      ]
    },
    {
      "fr": "Chèvres", "en": "Goat's cheeses",
      plats: [
        {"fr": "Crottin", "en": "Crottin", "prix": 3.2},
        {"fr": "Bûche cendrée", "en": "Ash-coated log", "prix": 7.5}
      ]
    },
    {
      "fr": "Plateaux", "en": "Platters", "sous": {"fr": "Sur commande, la veille", "en": "To order, the day before"},
      plats: [
        {"fr": "Plateau 4 personnes", "en": "Platter for 4", "prix": 32},
        {"fr": "Plateau 8 personnes", "en": "Platter for 8", "prix": 58}
      ]
    }
  ],

  // Infos pratiques (une ligne par info, en français et en anglais).
  infos: [
    {"fr": "Plateaux sur commande", "en": "Platters to order"},
    {"fr": "Coupe à la demande", "en": "Cut to order"},
    {"fr": "Cave d'affinage", "en": "Ageing cellar"}
  ],

  // Textes propres à ce restaurant (les textes communs sont dans commun/moteur.js).
  textes: {
    fr: {
      "titrePage": "La Meule : fromagerie, Paris 6e",
      "descriptionPage": "Fromages affinés, plateaux sur commande et épicerie fine. Commandez vos plateaux par téléphone.",
      "heroType": "Fromagerie · crèmerie",
      "heroSousTitre": "Fromages affinés, coupés à la demande.",
      "heroTexte": "Tommes, bleus, chèvres et pâtes molles, et des plateaux composés pour vos repas.",
      "argTitre": "Un plateau pour samedi ? Commandez-le la veille.",
      "argTexte": "Dites-nous combien vous serez : on compose le plateau, vous passez le prendre.",
      "argBouton1": "Commander un plateau",
      "argBouton2": "Demander conseil",
      "navCarte": "Fromages",
      "carteTitre": "Au comptoir",
      "carteNote": "Prix en euros TTC. Les fromages au lait cru sont signalés en boutique. Informations sur les allergènes disponibles sur demande.",
      "lieuTexte": "Des meules empilées jusqu'au plafond, une cave d'affinage en sous-sol et un comptoir en marbre.",
      "sigType": "Fromagerie · Paris"
    },
    en: {
      "titrePage": "La Meule: cheese shop, Paris 6th",
      "descriptionPage": "Aged cheeses, platters to order and fine groceries. Order your platters by phone.",
      "heroType": "Cheese shop · dairy",
      "heroSousTitre": "Aged cheeses, cut to order.",
      "heroTexte": "Tommes, blues, goat's cheeses and soft cheeses, plus platters made up for your meals.",
      "argTitre": "A platter for Saturday? Order it the day before.",
      "argTexte": "Tell us how many guests: we make up the platter, you pick it up.",
      "argBouton1": "Order a platter",
      "argBouton2": "Ask for advice",
      "navCarte": "Cheeses",
      "carteTitre": "At the counter",
      "carteNote": "Prices in euros including VAT. Raw-milk cheeses are labelled in store. Allergen information available on request.",
      "lieuTexte": "Wheels stacked to the ceiling, an ageing cellar downstairs and a marble counter.",
      "sigType": "Cheese shop · Paris"
    }
  }
};
