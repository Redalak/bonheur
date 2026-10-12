/* =====================================================================
   BRASSERIE LUMIÈRE : données du modèle « Brasserie parisienne »
   ---------------------------------------------------------------------
   Pour adapter ce modèle à un vrai établissement, on ne modifie QUE ce fichier
   (et le nom dans le HTML pour la copie de secours sans JavaScript).
   Nom, adresse et téléphone ci-dessous sont FICTIFS : le numéro est dans la
   plage 01 99 00 xx xx, réservée par l'ARCEP aux œuvres de fiction.
   ===================================================================== */

const CONFIG = {
  cle: "brasserie-lumiere",                          // identifiant court (sert à mémoriser la langue)
  nom: "Brasserie Lumière",                          // nom affiché
  telephoneAffiche: "01 99 00 03 03",     // numéro tel qu'on le lit
  telephoneLien: "+33199000303",           // même numéro, format international (liens tel:)
  adresse: "3 place de l'Exemple, 75002 Paris",
  transport: {"fr": "Métro Exemple (lignes 3 et 8)", "en": "Exemple metro (lines 3 and 8)"},              // métro, bus... en français et en anglais
  lienItineraire: "https://www.google.com/maps/search/?api=1&query=Brasserie+Lumière+3+place+de+l%27Exemple+75002+Paris",

  // Horaires : 0 = dimanche ... 6 = samedi. [] = fermé. Une fin « après minuit » (ex. "02:00") est gérée.
  horaires: {
    0: [["08:00", "00:00"]],                    // dimanche
    1: [["08:00", "00:00"]],                    // lundi
    2: [["08:00", "00:00"]],                    // mardi
    3: [["08:00", "00:00"]],                    // mercredi
    4: [["08:00", "00:00"]],                    // jeudi
    5: [["08:00", "00:00"]],                    // vendredi
    6: [["08:00", "00:00"]],                    // samedi
  },

  prixExemple: true,          // true = mention « Prix d'exemple » (à passer à false avec les vrais prix)
  afficherAlcool: true,       // true = boissons alcoolisées affichées + mention loi Évin automatique

  // L'ardoise du jour (brasserie) : à changer chaque jour, mêmes champs que les plats.
  ardoise: [
    {"fr": "Œuf mayonnaise", "en": "Egg mayonnaise", "prix": 6},
    {"fr": "Bœuf bourguignon", "en": "Beef bourguignon", "prix": 19},
    {"fr": "Tarte Tatin", "en": "Tarte Tatin", "prix": 8}
  ],

  // La carte : catégories (nom fr/en, sous-titre facultatif) et plats { fr, en, prix, detail facultatif }.
  // Un plat avec alcool: true n'est affiché que si afficherAlcool vaut true.
  carte: [
    {
      "fr": "Entrées", "en": "Starters",
      plats: [
        {"fr": "Soupe à l'oignon", "en": "French onion soup", "prix": 9},
        {"fr": "Poireaux vinaigrette", "en": "Leeks vinaigrette", "prix": 8},
        {"fr": "Terrine de campagne", "en": "Country terrine", "prix": 9}
      ]
    },
    {
      "fr": "Plats", "en": "Mains",
      plats: [
        {"fr": "Steak frites", "en": "Steak and fries", "prix": 22},
        {"fr": "Confit de canard", "en": "Duck confit", "prix": 21},
        {"fr": "Sole meunière", "en": "Sole meunière", "prix": 32},
        {"fr": "Croque-monsieur", "en": "Croque-monsieur", "prix": 14}
      ]
    },
    {
      "fr": "Desserts", "en": "Desserts",
      plats: [
        {"fr": "Profiteroles", "en": "Profiteroles", "prix": 9},
        {"fr": "Crème brûlée", "en": "Crème brûlée", "prix": 8},
        {"fr": "Île flottante", "en": "Floating island", "prix": 8}
      ]
    },
    {
      "fr": "Boissons", "en": "Drinks",
      plats: [
        {"fr": "Café", "en": "Espresso", "prix": 2.5},
        {"fr": "Limonade", "en": "Lemonade", "prix": 4.5},
        {"fr": "Verre de vin", "en": "Glass of wine", "prix": 6, "alcool": true}
      ]
    }
  ],

  // Infos pratiques (une ligne par info, en français et en anglais).
  infos: [
    {"fr": "Ouvert tous les jours", "en": "Open every day"},
    {"fr": "Terrasse sur la place", "en": "Terrace on the square"},
    {"fr": "Service continu", "en": "All-day service"}
  ],

  // Textes propres à ce restaurant (les textes communs sont dans commun/moteur.js).
  textes: {
    fr: {
      "titrePage": "Brasserie Lumière : brasserie parisienne, Paris 2e",
      "descriptionPage": "Brasserie ouverte tous les jours de 8h à minuit : ardoise du jour, grands classiques et terrasse.",
      "heroSousTitre": "Brasserie parisienne, du premier café au dernier verre.",
      "heroTexte": "Ardoise du jour, grands classiques et terrasse, tous les jours de 8h à minuit.",
      "argTitre": "Entre midi et deux, la salle est pleine.",
      "argTexte": "Réservez pour le déjeuner : on vous garde la banquette.",
      "argBouton1": "Réserver une table",
      "argBouton2": "Appeler la brasserie",
      "carteTitre": "La carte",
      "ardoiseTitre": "L'ardoise du jour",
      "lieuTexte": "Des miroirs dorés, des banquettes rouges, un carrelage noir et blanc et une terrasse sur la place.",
      "heroType": "Brasserie parisienne · depuis le matin",
      "sigType": "Brasserie parisienne · Paris"
    },
    en: {
      "titrePage": "Brasserie Lumière: Parisian brasserie, Paris 2nd",
      "descriptionPage": "Brasserie open every day from 8 am to midnight: daily specials, classics and a terrace.",
      "heroSousTitre": "Parisian brasserie, from first coffee to last glass.",
      "heroTexte": "Daily specials, timeless classics and a terrace, every day from 8 am to midnight.",
      "argTitre": "At lunchtime, the room is full.",
      "argTexte": "Book for lunch: we'll keep the banquette for you.",
      "argBouton1": "Book a table",
      "argBouton2": "Call the brasserie",
      "carteTitre": "Menu",
      "ardoiseTitre": "Today's specials",
      "lieuTexte": "Gilded mirrors, red banquettes, black and white tiles and a terrace on the square.",
      "heroType": "Parisian brasserie · from breakfast on",
      "sigType": "Parisian brasserie · Paris"
    }
  }
};

// Propre à ce modèle : l'ardoise du jour est réécrite à chaque changement de langue.
// (window.apresLangue est appelé par le moteur commun, voir commun/moteur.js.)
window.apresLangue = function (langue) {
  const liste = document.querySelector("[data-ardoise]");
  if (!liste) return;
  liste.textContent = "";
  CONFIG.ardoise.forEach(function (plat, n) {
    const ligne = creer("li", "ardoise-ligne");
    ligne.style.setProperty("--n", n);
    ligne.appendChild(creer("span", null, plat[langue]));
    ligne.appendChild(creer("span", "ardoise-prix", formaterPrix(plat.prix, langue)));
    liste.appendChild(ligne);
  });
};

