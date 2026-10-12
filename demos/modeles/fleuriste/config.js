/* =====================================================================
   PÉTALE : données du modèle « Fleuriste »
   ---------------------------------------------------------------------
   Pour adapter ce modèle à un vrai établissement, on ne modifie QUE ce fichier
   (et le nom dans le HTML pour la copie de secours sans JavaScript).
   Nom, adresse et téléphone ci-dessous sont FICTIFS : le numéro est dans la
   plage 01 99 00 xx xx, réservée par l'ARCEP aux œuvres de fiction.
   ===================================================================== */

const CONFIG = {
  cle: "petale",                          // identifiant court (sert à mémoriser la langue)
  nom: "Pétale",                          // nom affiché
  telephoneAffiche: "01 99 00 09 09",     // numéro tel qu'on le lit
  telephoneLien: "+33199000909",           // même numéro, format international (liens tel:)
  adresse: "18 rue de l'Exemple, 75017 Paris",
  transport: {"fr": "Métro Exemple (ligne 2)", "en": "Exemple metro (line 2)"},              // métro, bus... en français et en anglais
  lienItineraire: "https://www.google.com/maps/search/?api=1&query=Pétale+18+rue+de+l%27Exemple+75017+Paris",

  // Horaires : 0 = dimanche ... 6 = samedi. [] = fermé. Une fin « après minuit » (ex. "02:00") est gérée.
  horaires: {
    0: [["09:30", "13:30"]],                    // dimanche
    1: [],                                      // lundi
    2: [["09:30", "19:30"]],                    // mardi
    3: [["09:30", "19:30"]],                    // mercredi
    4: [["09:30", "19:30"]],                    // jeudi
    5: [["09:30", "19:30"]],                    // vendredi
    6: [["09:30", "19:30"]],                    // samedi
  },

  prixExemple: true,          // true = mention « Prix d'exemple » (à passer à false avec les vrais prix)
  afficherAlcool: false,       // true = boissons alcoolisées affichées + mention loi Évin automatique

  // La carte : catégories (nom fr/en, sous-titre facultatif) et plats { fr, en, prix, detail facultatif }.
  // Un plat avec alcool: true n'est affiché que si afficherAlcool vaut true.
  carte: [
    {
      "fr": "Bouquets", "en": "Bouquets", "sous": {"fr": "À partir de", "en": "Starting from"},
      plats: [
        {"fr": "Petit bouquet de saison", "en": "Small seasonal bouquet", "prix": 30},
        {"fr": "Bouquet généreux", "en": "Generous bouquet", "prix": 50},
        {"fr": "Bouquet signature", "en": "Signature bouquet", "prix": 75}
      ]
    },
    {
      "fr": "Plantes", "en": "Plants",
      plats: [
        {"fr": "Plante en pot", "en": "Potted plant", "prix": 25},
        {"fr": "Grande plante d'intérieur", "en": "Large houseplant", "prix": 60}
      ]
    },
    {
      "fr": "Événements", "en": "Events", "sous": {"fr": "Sur devis", "en": "On quotation"},
      plats: [
        {"fr": "Bouquet de mariée", "en": "Bridal bouquet", "prix": 120},
        {"fr": "Centre de table", "en": "Table centrepiece", "prix": 45}
      ]
    },
    {
      "fr": "Abonnement", "en": "Subscription",
      plats: [
        {"fr": "Un bouquet par semaine (mois)", "en": "One bouquet a week (month)", "prix": 110}
      ]
    }
  ],

  // Infos pratiques (une ligne par info, en français et en anglais).
  infos: [
    {"fr": "Bouquets prêts en fin de journée", "en": "Bouquets ready by evening"},
    {"fr": "Fleurs pour mariages et événements", "en": "Wedding and event flowers"},
    {"fr": "Emballage kraft offert", "en": "Kraft wrapping included"}
  ],

  // Textes propres à ce restaurant (les textes communs sont dans commun/moteur.js).
  textes: {
    fr: {
      "titrePage": "Pétale : fleuriste, Paris 17e",
      "descriptionPage": "Bouquets de saison, plantes et fleurs pour les événements. Commandez par téléphone.",
      "heroType": "Fleuriste · fleurs de saison",
      "heroSousTitre": "Des bouquets de saison, composés devant vous.",
      "heroTexte": "Bouquets, plantes d'intérieur et fleurs pour les mariages et les événements.",
      "argTitre": "Un bouquet pour ce soir ? Appelez avant 16h.",
      "argTexte": "On le compose dans l'après-midi, vous passez le récupérer en fin de journée.",
      "argBouton1": "Commander un bouquet",
      "argBouton2": "Parler d'un événement",
      "navCarte": "Bouquets",
      "carteTitre": "Bouquets et tarifs",
      "carteNote": "Prix en euros TTC, à partir de. Les fleurs changent avec les saisons.",
      "lieuTexte": "Des seaux de fleurs jusque sur le trottoir, un atelier au fond et du papier kraft pour tout emballer.",
      "sigType": "Fleuriste · Paris"
    },
    en: {
      "titrePage": "Pétale: florist, Paris 17th",
      "descriptionPage": "Seasonal bouquets, plants and event flowers. Order by phone.",
      "heroType": "Florist · seasonal flowers",
      "heroSousTitre": "Seasonal bouquets, arranged in front of you.",
      "heroTexte": "Bouquets, houseplants and flowers for weddings and events.",
      "argTitre": "A bouquet for tonight? Call before 4 pm.",
      "argTexte": "We arrange it in the afternoon, you pick it up at the end of the day.",
      "argBouton1": "Order a bouquet",
      "argBouton2": "Talk about an event",
      "navCarte": "Bouquets",
      "carteTitre": "Bouquets and prices",
      "carteNote": "Prices in euros including VAT, starting from. Flowers change with the seasons.",
      "lieuTexte": "Buckets of flowers out on the pavement, a workshop at the back and kraft paper to wrap it all.",
      "sigType": "Florist · Paris"
    }
  }
};
