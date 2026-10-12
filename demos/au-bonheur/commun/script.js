/* =====================================================================
   AU BONHEUR : script commun aux 3 propositions (A, B et C)
   ---------------------------------------------------------------------
   Ce fichier fait 5 choses :
     1. il contient TOUTES les données du site (objet CONFIG, juste en dessous) ;
     2. il calcule si le restaurant est ouvert, à l'heure de Paris (badge) ;
     3. il affiche la carte et le tableau des horaires à partir de CONFIG ;
     4. il bascule tous les textes entre français et anglais ;
     5. il met à jour les liens (téléphone, itinéraire) depuis CONFIG.

   Pour modifier un prix, un plat, un horaire ou le téléphone :
   on ne touche QU'À l'objet CONFIG. Le reste du fichier n'a pas besoin
   d'être modifié.

   Script classique (pas de module ES) pour fonctionner en double-clic,
   c'est-à-dire en file://, sans serveur.
   ===================================================================== */

const CONFIG = {
  nom: "Au Bonheur",                         // Nom affiché partout
  telephoneAffiche: "01 47 70 50 22",        // Numéro tel qu'on le lit
  telephoneLien: "+33147705022",             // Même numéro au format international, pour les liens tel:
  adresse: "11 rue Cadet, 75009 Paris",      // Adresse postale
  metro: "Cadet (ligne 7)",                  // Station de métro la plus proche
  lienItineraire: "https://www.google.com/maps/search/?api=1&query=Au+Bonheur+11+rue+Cadet+75009+Paris", // Bouton « Itinéraire »
  fuseau: "Europe/Paris",                    // Fuseau horaire du restaurant (ne pas changer)

  // Horaires : 0 = dimanche, 1 = lundi ... 6 = samedi.
  // Chaque jour contient une liste de services ["début", "fin"].
  // Un jour sans service ([]) est affiché « Fermé ».
  // Une fermeture après minuit s'écrit "01:00" : le script comprend
  // que le service se termine le lendemain.
  horaires: {
    0: [],                                   // dimanche : fermé
    1: [["12:00", "15:00"], ["18:30", "23:00"]], // lundi
    2: [["12:00", "15:00"], ["18:30", "23:00"]], // mardi
    3: [["12:00", "15:00"], ["18:30", "23:00"]], // mercredi
    4: [["12:00", "15:00"], ["18:30", "23:00"]], // jeudi
    5: [["12:00", "15:00"], ["18:30", "23:00"]], // vendredi
    6: [["12:00", "15:00"], ["18:30", "23:00"]]  // samedi
  }, // [À VÉRIFIER] sur place : horaires relevés sur la fiche Google

  prixExemple: true,        // true = affiche la mention « Prix d'exemple » (à passer à false avec les vrais prix)
  afficherAlcool: false,    // true = affiche les boissons alcoolisées ET la mention légale (loi Évin)
  reservationEnLigne: null, // [À VÉRIFIER] TheFork actif ? Si oui, mettre ici l'adresse du lien.

  // Photos de la grille inclinée du hero (version D uniquement).
  // Vide = tuiles graphiques (couleurs, plats, prix, bol).
  // Pour ajouter une photo : la déposer dans d/photos/ puis ajouter une ligne,
  // le chemin est relatif à d/index.html. Exemple :
  //   { src: "photos/1.jpg", alt: "" },
  // alt reste vide : la grille est décorative, le texte utile est dans la plaque au centre.
  // UNIQUEMENT des photos fournies par le patron ou prises par nous, avec son accord.
  photosHero: [], // [À VÉRIFIER] photos des plats et de la salle à récupérer

  // Infos pratiques : true = affichée, false = masquée.
  infos: {
    terrasse: true,          // [À VÉRIFIER] terrasse toute l'année ? (visible sur la photo de façade)
    surPlaceEtEmporter: true,// [À VÉRIFIER] fonctionnement exact de l'à emporter
    titresRestaurant: true,  // [À VÉRIFIER] titres-restaurant acceptés, d'après Google (papier ? carte ?)
    fauteuilRoulant: true    // [À VÉRIFIER] accès en fauteuil roulant, d'après Google
  },

  // [À VÉRIFIER] remplacer par la vraie carte (intitulés génériques et prix d'exemple)
  // Chaque catégorie a un nom FR, un nom EN et une liste de plats.
  // Chaque plat : { fr: "nom français", en: "nom anglais", prix: nombre avec un point }.
  // Un plat avec alcool: true n'est affiché que si afficherAlcool vaut true.
  carte: [
    {
      fr: "Entrées", en: "Starters",
      plats: [
        { fr: "Raviolis vapeur", en: "Steamed dumplings", prix: 6.5 },
        { fr: "Raviolis grillés", en: "Pan-fried dumplings", prix: 6.5 },
        { fr: "Nems", en: "Spring rolls", prix: 5.5 },
        { fr: "Soupe de raviolis", en: "Dumpling soup", prix: 7 }
      ]
    },
    {
      fr: "Plats", en: "Mains",
      plats: [
        { fr: "Nouilles sautées", en: "Stir-fried noodles", prix: 12.5 },
        { fr: "Soupe de nouilles", en: "Noodle soup", prix: 12.5 },
        { fr: "Riz sauté", en: "Fried rice", prix: 11.5 },
        { fr: "Bo bun", en: "Bo bun", prix: 13 },
        { fr: "Poulet croustillant", en: "Crispy chicken", prix: 13.5 }
      ]
    },
    {
      fr: "Desserts", en: "Desserts",
      plats: [
        { fr: "Dessert du moment", en: "Dessert of the day", prix: 5 },
        { fr: "Glaces", en: "Ice cream", prix: 4.5 }
      ]
    },
    {
      fr: "Boissons", en: "Drinks",
      plats: [
        { fr: "Thé chaud", en: "Hot tea", prix: 3 },
        { fr: "Thé glacé", en: "Iced tea", prix: 3.5 },
        { fr: "Jus de fruits", en: "Fruit juice", prix: 3.5 },
        { fr: "Sodas", en: "Soft drinks", prix: 3 },
        { fr: "Eau minérale", en: "Mineral water", prix: 2.5 }
        // Exemple de boisson alcoolisée (affichée seulement si afficherAlcool: true) :
        // { fr: "Bière", en: "Beer", prix: 4.5, alcool: true }
      ]
    }
  ],

  // Tous les textes du site, en français (fr) et en anglais (en).
  // Dans le HTML, un élément avec data-texte="cle" reçoit le texte CONFIG.textes[langue].cle.
  // {telephone}, {adresse} et {metro} sont remplacés automatiquement.
  textes: {
    fr: {
      titrePage: "Au Bonheur : cuisine chinoise et asiatique, 11 rue Cadet, Paris 9e",
      descriptionPage: "Nouilles, riz, raviolis et bols, sur place, à emporter et en terrasse. La carte, les prix et les horaires. Réservation par téléphone au 01 47 70 50 22.",
      evitement: "Aller au contenu",
      navLabel: "Navigation principale",
      navCarte: "Carte",
      navHoraires: "Horaires",
      navAcces: "Accès",
      boutonLangue: "EN",
      ariaLangue: "EN, switch to English",
      appeler: "Appeler",
      ariaAppeler: "Appeler Au Bonheur au {telephone}",
      itineraire: "Itinéraire",
      ariaItineraire: "Itinéraire vers Au Bonheur, ouvre Google Maps dans un nouvel onglet",
      heroTitre: "Au Bonheur",
      heroSousTitre: "Cuisine chinoise et asiatique, rue Cadet.",
      heroTexte: "Nouilles, riz, raviolis et bols, servis copieux, midi et soir.",
      argTitre: "Le midi, ça se remplit vite.",
      // [À VÉRIFIER] le fonctionnement exact de l'à emporter (délai, retrait au comptoir ?)
      argTexte: "Appelez pour réserver votre table, ou pour faire préparer votre commande à emporter.",
      argReserver: "Réserver une table",
      argEmporter: "Commander à emporter",
      argNumero: "{telephone}",
      carteTitre: "La carte",
      prixExemple: "Prix d'exemple",
      carteNote: "Prix en euros TTC. Informations sur les allergènes disponibles sur demande.",
      mentionAlcool: "L'abus d'alcool est dangereux pour la santé, à consommer avec modération.",
      ticketEntete: "Bon n° 11, rue Cadet",
      ticketPied: "Pour emporter, appelez le {telephone}",
      lieuTitre: "Le lieu",
      lieuTexte: "Une salle en bois clair sous des suspensions en rotin, et une terrasse sur la rue Cadet.",
      horairesTitre: "Horaires",
      horairesLegende: "Horaires d'ouverture, jour par jour",
      ferme: "Fermé",
      aujourdhui: "aujourd'hui",
      infosTitre: "Infos pratiques",
      infoTerrasse: "Terrasse sur la rue",
      infoSurPlace: "Sur place et à emporter",
      infoTitres: "Titres-restaurant acceptés",
      infoFauteuil: "Accessible en fauteuil roulant",
      accesTitre: "Accès",
      accesTexte: "{adresse}. Métro {metro}.",
      footerHoraires: "Du lundi au samedi, 12h00–15h00 et 18h30–23h00. Fermé le dimanche.",
      copyright: "© Au Bonheur",
      // Textes du badge « ouvert / fermé ». {heure} et {jour} sont remplis par le script.
      statutOuvert: "Ouvert · jusqu'à {heure}",
      statutReouverture: "Fermé · réouverture à {heure}",
      statutOuvertureAujourdhui: "Fermé · ouverture à {heure}",
      statutOuvertureDemain: "Fermé · ouverture demain à {heure}",
      statutOuvertureJour: "Fermé · ouverture {jour} à {heure}",
      statutFerme: "Fermé",
      jours: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
      // Barre démo
      demoNav: "Choisir une proposition",
      demoIndex: "Les 4",
      ariaDemoIndex: "Les 4 propositions",
      demoTexte: "Proposition de",
      pauseGrille: "Pause",
      relancerGrille: "Relancer",
      heroAdresse: "11 rue Cadet · métro Cadet",
      appelFlottant: "Appeler · {telephone}"
    },
    en: {
      titrePage: "Au Bonheur: Chinese & Asian kitchen, 11 Rue Cadet, Paris 9th",
      descriptionPage: "Noodles, rice, dumplings and bowls, eat in, takeaway or on the terrace. Menu, prices and opening hours. Book by phone on +33 1 47 70 50 22.",
      evitement: "Skip to content",
      navLabel: "Main navigation",
      navCarte: "Menu",
      navHoraires: "Hours",
      navAcces: "Directions",
      boutonLangue: "FR",
      ariaLangue: "FR, passer en français",
      appeler: "Call",
      ariaAppeler: "Call Au Bonheur on {telephone}",
      itineraire: "Directions",
      ariaItineraire: "Directions to Au Bonheur, opens Google Maps in a new tab",
      heroTitre: "Au Bonheur",
      heroSousTitre: "Chinese & Asian kitchen on Rue Cadet.",
      heroTexte: "Noodles, rice, dumplings and bowls, generous portions, lunch and dinner.",
      argTitre: "Lunchtime fills up fast.",
      argTexte: "Call us to book a table, or to have your takeaway order ready.",
      argReserver: "Book a table",
      argEmporter: "Order takeaway",
      argNumero: "{telephone}",
      carteTitre: "Menu",
      prixExemple: "Sample prices",
      carteNote: "Prices in euros, taxes included. Allergen information available on request.",
      mentionAlcool: "Alcohol abuse is dangerous for your health, drink in moderation.",
      ticketEntete: "Ticket no. 11, Rue Cadet",
      ticketPied: "For takeaway, call {telephone}",
      lieuTitre: "The place",
      lieuTexte: "A light-wood dining room under woven rattan lamps, and a terrace on Rue Cadet.",
      horairesTitre: "Opening hours",
      horairesLegende: "Opening hours, day by day",
      ferme: "Closed",
      aujourdhui: "today",
      infosTitre: "Good to know",
      infoTerrasse: "Terrace on the street",
      infoSurPlace: "Eat in or take away",
      infoTitres: "Meal vouchers (titres-restaurant) accepted",
      infoFauteuil: "Wheelchair accessible",
      accesTitre: "Getting here",
      accesTexte: "{adresse}. Metro {metro}.",
      footerHoraires: "Monday to Saturday, 12:00–3:00 pm and 6:30–11:00 pm. Closed on Sunday.",
      copyright: "© Au Bonheur",
      statutOuvert: "Open · until {heure}",
      statutReouverture: "Closed · reopens at {heure}",
      statutOuvertureAujourdhui: "Closed · opens at {heure}",
      statutOuvertureDemain: "Closed · opens tomorrow at {heure}",
      statutOuvertureJour: "Closed · opens {jour} at {heure}",
      statutFerme: "Closed",
      jours: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      demoNav: "Choose a proposal",
      demoIndex: "All 4",
      ariaDemoIndex: "All 4 proposals",
      demoTexte: "Proposal by",
      pauseGrille: "Pause",
      relancerGrille: "Play",
      heroAdresse: "11 Rue Cadet · Cadet metro",
      appelFlottant: "Call · {telephone}"
    }
  },

  // Coordonnées de la personne qui présente la démo (barre du bas).
  demo: { presentateur: "Reda Lakhledj", telephone: "07 63 45 60 80", telephoneLien: "+33763456080" }
};


/* =====================================================================
   1. PETITS OUTILS
   ===================================================================== */

// Nombre de minutes dans une journée et dans une semaine.
const MINUTES_PAR_JOUR = 24 * 60;
const MINUTES_PAR_SEMAINE = 7 * MINUTES_PAR_JOUR;

// Langue affichée en ce moment ("fr" ou "en").
let langueActuelle = "fr";

// "18:30" devient 1110 (nombre de minutes depuis minuit).
function heureEnMinutes(texteHeure) {
  const morceaux = texteHeure.split(":");
  return Number(morceaux[0]) * 60 + Number(morceaux[1]);
}

// 1110 devient "18h30" en français, ou "6:30 pm" en anglais.
function formaterHeure(minutes, langue) {
  const total = ((minutes % MINUTES_PAR_JOUR) + MINUTES_PAR_JOUR) % MINUTES_PAR_JOUR; // ramène entre 0h00 et 23h59
  const heures = Math.floor(total / 60);
  const mins = String(total % 60).padStart(2, "0");
  if (langue === "en") {
    const suffixe = heures < 12 ? "am" : "pm";
    const heures12 = heures % 12 === 0 ? 12 : heures % 12;
    return heures12 + ":" + mins + " " + suffixe;
  }
  return String(heures).padStart(2, "0") + "h" + mins;
}

// 6.5 devient "6,50 €" en français, ou "€6.50" en anglais.
function formaterPrix(prix, langue) {
  const format = new Intl.NumberFormat(langue === "en" ? "en-GB" : "fr-FR", {
    style: "currency",
    currency: "EUR"
  });
  return format.format(prix);
}

// Remplace {telephone}, {adresse}, {metro}, {heure}, {jour} dans un texte.
function remplir(texte, valeurs) {
  const toutes = Object.assign({
    telephone: CONFIG.telephoneAffiche,
    adresse: CONFIG.adresse,
    metro: CONFIG.metro
  }, valeurs || {});
  return texte.replace(/\{(\w+)\}/g, function (morceau, cle) {
    return toutes[cle] !== undefined ? toutes[cle] : morceau;
  });
}

// Crée un élément HTML avec une classe et un texte (plus sûr que innerHTML).
function creer(balise, classe, texte) {
  const element = document.createElement(balise);
  if (classe) element.className = classe;
  if (texte !== undefined) element.textContent = texte;
  return element;
}


/* =====================================================================
   2. HEURE DE PARIS ET STATUT OUVERT / FERMÉ
   ===================================================================== */

// Renvoie le jour (0 = dimanche) et l'heure EN MINUTES à Paris,
// quel que soit le fuseau horaire de l'ordinateur ou du téléphone.
function obtenirHeureParis(date) {
  const format = new Intl.DateTimeFormat("fr-FR", {
    timeZone: CONFIG.fuseau,
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23"
  });
  const parties = {};
  format.formatToParts(date || new Date()).forEach(function (partie) {
    parties[partie.type] = partie.value;
  });
  const nomsJours = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
  return {
    jour: nomsJours.indexOf(parties.weekday),
    minutes: Number(parties.hour) * 60 + Number(parties.minute)
  };
}

// FONCTION PURE : elle ne lit ni l'heure ni la page, elle calcule seulement.
// On peut donc la tester avec n'importe quelle date simulée.
//   dateParis : { jour: 0 à 6 (0 = dimanche), minutes: minutes depuis minuit }
//   horaires  : le même format que CONFIG.horaires
// Renvoie un objet :
//   { ouvert: true,  fermeture: minutes }  si c'est ouvert
//   { ouvert: false, ouverture: minutes, jourOuverture: 0 à 6,
//     ecartJours: 0 (aujourd'hui), 1 (demain), 2..., reouverture: true/false }
//   { ouvert: false, ouverture: null }     si aucun service n'est prévu
function calculerStatut(dateParis, horaires) {
  const maintenant = dateParis.jour * MINUTES_PAR_JOUR + dateParis.minutes;

  // On place chaque service de la semaine sur une même règle en minutes,
  // du dimanche 0h00 (0) au samedi 23h59 (10079).
  // Chaque service est copié une semaine avant et une semaine après :
  // ça règle le cas « samedi soir → dimanche 1h00 » et la recherche de
  // la prochaine ouverture la semaine suivante.
  const services = [];
  for (let jour = 0; jour <= 6; jour++) {
    const creneaux = horaires[jour] || [];
    creneaux.forEach(function (creneau) {
      const debut = jour * MINUTES_PAR_JOUR + heureEnMinutes(creneau[0]);
      let fin = jour * MINUTES_PAR_JOUR + heureEnMinutes(creneau[1]);
      if (fin <= debut) fin += MINUTES_PAR_JOUR; // fin après minuit : le service finit le lendemain
      [-MINUTES_PAR_SEMAINE, 0, MINUTES_PAR_SEMAINE].forEach(function (decalage) {
        services.push({ debut: debut + decalage, fin: fin + decalage });
      });
    });
  }

  // Est-ce qu'un service est en cours ?
  for (const service of services) {
    if (service.debut <= maintenant && maintenant < service.fin) {
      return { ouvert: true, fermeture: service.fin % MINUTES_PAR_JOUR };
    }
  }

  // Sinon, on cherche le service qui commence le plus tôt après maintenant.
  let prochain = null;
  for (const service of services) {
    if (service.debut > maintenant && (prochain === null || service.debut < prochain.debut)) {
      prochain = service;
    }
  }
  if (prochain === null) return { ouvert: false, ouverture: null };

  const jourDuProchain = Math.floor(prochain.debut / MINUTES_PAR_JOUR);
  const debutDuJour = dateParis.jour * MINUTES_PAR_JOUR;
  // Un service a-t-il déjà eu lieu aujourd'hui ? (pour dire « réouverture » plutôt qu'« ouverture »)
  const dejaServiAujourdhui = services.some(function (service) {
    return service.debut >= debutDuJour && service.fin <= maintenant;
  });
  const ecartJours = jourDuProchain - dateParis.jour;

  return {
    ouvert: false,
    ouverture: prochain.debut % MINUTES_PAR_JOUR,
    jourOuverture: ((jourDuProchain % 7) + 7) % 7,
    ecartJours: ecartJours,
    reouverture: ecartJours === 0 && dejaServiAujourdhui
  };
}

// Transforme le résultat de calculerStatut() en phrase, dans la langue voulue.
function texteStatut(statut, langue) {
  const t = CONFIG.textes[langue];
  if (statut.ouvert) {
    return remplir(t.statutOuvert, { heure: formaterHeure(statut.fermeture, langue) });
  }
  if (statut.ouverture === null) return t.statutFerme;
  const heure = formaterHeure(statut.ouverture, langue);
  if (statut.ecartJours === 0) {
    return remplir(statut.reouverture ? t.statutReouverture : t.statutOuvertureAujourdhui, { heure: heure });
  }
  if (statut.ecartJours === 1) return remplir(t.statutOuvertureDemain, { heure: heure });
  return remplir(t.statutOuvertureJour, { heure: heure, jour: t.jours[statut.jourOuverture] });
}

// Met à jour le badge (ou les badges) de la page.
function mettreAJourBadge() {
  const statut = calculerStatut(obtenirHeureParis(), CONFIG.horaires);
  document.querySelectorAll("[data-badge]").forEach(function (badge) {
    badge.classList.toggle("est-ouvert", statut.ouvert);
    badge.classList.toggle("est-ferme", !statut.ouvert);
    const texte = badge.querySelector("[data-badge-texte]");
    if (texte) texte.textContent = texteStatut(statut, langueActuelle);
  });
}


/* =====================================================================
   3. CARTE ET HORAIRES, CONSTRUITS DEPUIS CONFIG
   ===================================================================== */

// Construit la carte dans l'élément <div data-carte>.
// Structure produite (la même pour A, B et C, seul le CSS change) :
//   div.carte-categorie > h3.carte-titre (span.carte-numero + span.carte-nom-categorie)
//                       > ul.carte-liste > li.carte-plat (nom, points, prix)
function afficherCarte(langue) {
  const conteneur = document.querySelector("[data-carte]");
  if (!conteneur) return;
  conteneur.textContent = ""; // on vide l'ancienne version

  CONFIG.carte.forEach(function (categorie, index) {
    const bloc = creer("div", "carte-categorie");
    const titre = creer("h3", "carte-titre");
    titre.appendChild(creer("span", "carte-numero", String(index + 1)));
    titre.appendChild(creer("span", "carte-nom-categorie", categorie[langue]));
    bloc.appendChild(titre);

    const liste = creer("ul", "carte-liste");
    categorie.plats.forEach(function (plat) {
      if (plat.alcool && !CONFIG.afficherAlcool) return; // pas d'alcool sans accord
      const ligne = creer("li", "carte-plat");
      ligne.appendChild(creer("span", "carte-nom", plat[langue]));
      const points = creer("span", "carte-points");
      points.setAttribute("aria-hidden", "true");
      ligne.appendChild(points);
      ligne.appendChild(creer("span", "carte-prix", formaterPrix(plat.prix, langue)));
      liste.appendChild(ligne);
    });
    bloc.appendChild(liste);
    conteneur.appendChild(bloc);
  });

  // Mentions sous la carte
  document.querySelectorAll("[data-mention-prix-exemple]").forEach(function (el) {
    el.hidden = !CONFIG.prixExemple;
  });
  document.querySelectorAll("[data-mention-alcool]").forEach(function (el) {
    el.hidden = !CONFIG.afficherAlcool; // mention loi Évin obligatoire si de l'alcool est affiché
  });
}

// Remplit le tableau <tbody data-horaires>, du lundi au dimanche,
// et met en évidence le jour actuel (à Paris).
function afficherHoraires(langue) {
  const corps = document.querySelector("[data-horaires]");
  if (!corps) return;
  const t = CONFIG.textes[langue];
  const aujourdhui = obtenirHeureParis().jour;
  corps.textContent = "";

  [1, 2, 3, 4, 5, 6, 0].forEach(function (jour) { // lundi d'abord, dimanche à la fin
    const ligne = creer("tr");
    const nomJour = t.jours[jour];
    const entete = creer("th", "horaires-jour", nomJour.charAt(0).toUpperCase() + nomJour.slice(1));
    entete.scope = "row";

    // Un service par ligne (midi, puis soir) : plus lisible sur mobile.
    const creneaux = CONFIG.horaires[jour] || [];
    const cellule = creer("td", "horaires-services");
    if (creneaux.length === 0) {
      cellule.textContent = t.ferme;
      ligne.classList.add("est-ferme");
    }
    creneaux.forEach(function (c) {
      const texte = formaterHeure(heureEnMinutes(c[0]), langue) + "–" + formaterHeure(heureEnMinutes(c[1]), langue);
      cellule.appendChild(creer("span", "horaires-service", texte));
    });

    if (jour === aujourdhui) {
      ligne.classList.add("est-aujourdhui");
      ligne.setAttribute("aria-current", "date");
      entete.appendChild(creer("span", "horaires-marque", " (" + t.aujourdhui + ")"));
    }
    ligne.appendChild(entete);
    ligne.appendChild(cellule);
    corps.appendChild(ligne);
  });
}


// Remplit la grille inclinée du hero (version D) : <div data-grille-hero>.
// Les tuiles alternent 5 styles (bois, sombre, ambre, pierre, vert) et
// reprennent les plats et les prix de CONFIG.carte, pour rester cohérentes avec la carte.
const BOL_SVG = '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" focusable="false"><path d="M8 32H56A24 21 0 0 1 8 32Z"/><path d="M24 57H40"/><path d="M22 32C22 26 27 26 27 20"/><path d="M31 32C31 26 36 26 36 20"/><path d="M26 19L58 4"/><path d="M29 23L60 11"/></svg>';
const STYLES_TUILES = ["bois", "sombre", "ambre", "pierre", "vert"];

function afficherGrilleHero(langue) {
  const grille = document.querySelector("[data-grille-hero]");
  if (!grille) return;
  grille.textContent = "";

  // Tous les plats de la carte, à la suite (sans l'alcool s'il est masqué).
  // Chaque plat garde le nom de sa catégorie, affiché en petit en haut de la tuile.
  const plats = [];
  CONFIG.carte.forEach(function (categorie) {
    categorie.plats.forEach(function (plat) {
      if (!plat.alcool || CONFIG.afficherAlcool) plats.push({ plat: plat, categorie: categorie });
    });
  });

  const nombreColonnes = 8;
  const nombreRangees = 5; // 8 colonnes × 5 rangées = 40 tuiles
  let numeroPlat = 0;

  // On prépare les 6 colonnes. Chacune défile verticalement (voir d/style.css).
  const colonnes = [];
  for (let c = 0; c < nombreColonnes; c++) {
    const colonne = creer("div", "colonne");
    grille.appendChild(colonne);
    colonnes.push(colonne);
  }

  for (let i = 0; i < nombreColonnes * nombreRangees; i++) {
    const rangee = Math.floor(i / nombreColonnes);
    const colonne = i % nombreColonnes;
    // Couleur selon la colonne, décalée de 2 à chaque rangée :
    // deux tuiles voisines (à côté ou au-dessus) n'ont jamais la même couleur.
    const style = STYLES_TUILES[(colonne + rangee * 2) % STYLES_TUILES.length];
    const tuile = creer("div", "tuile tuile-" + style);

    // Une tuile sur trois devient une photo, si des photos sont déclarées dans CONFIG.
    if (CONFIG.photosHero.length > 0 && i % 3 === 0) {
      const photo = CONFIG.photosHero[(i / 3) % CONFIG.photosHero.length];
      const image = document.createElement("img");
      image.src = photo.src;
      image.alt = photo.alt || "";
      image.loading = "lazy";
      image.decoding = "async";
      tuile.className = "tuile tuile-photo";
      tuile.appendChild(image);
    } else if (style === "sombre" || style === "vert") {
      tuile.innerHTML = BOL_SVG; // texte fixe écrit par nous : innerHTML sans risque ici
    } else {
      const element = plats[numeroPlat % plats.length];
      numeroPlat++;
      tuile.appendChild(creer("span", "tuile-categorie", element.categorie[langue]));
      tuile.appendChild(creer("span", "tuile-nom", element.plat[langue]));
      tuile.appendChild(creer("span", "tuile-prix", formaterPrix(element.plat.prix, langue)));
    }
    colonnes[colonne].appendChild(tuile);
  }

  // Défilement sans à-coup : chaque colonne contient 3 fois ses 5 tuiles,
  // et l'animation la décale exactement d'une série. Quand elle reboucle,
  // on voit les mêmes tuiles au même endroit : la coupure est invisible.
  colonnes.forEach(function (colonne) {
    const serie = Array.prototype.slice.call(colonne.children);
    for (let copie = 0; copie < 2; copie++) {
      serie.forEach(function (tuile) { colonne.appendChild(tuile.cloneNode(true)); });
    }
  });
}

// Bouton Pause / Relancer du défilement de la grille (version D).
// Obligatoire en accessibilité : tout ce qui bouge plus de 5 secondes doit pouvoir être arrêté.
function brancherPauseGrille() {
  const bouton = document.querySelector("[data-pause-grille]");
  const hero = document.querySelector(".hero");
  if (!bouton || !hero) return;
  bouton.addEventListener("click", function () {
    const enPause = hero.classList.toggle("est-en-pause");
    bouton.setAttribute("aria-pressed", String(enPause));
    mettreAJourBoutonPause();
  });
}

function mettreAJourBoutonPause() {
  const bouton = document.querySelector("[data-pause-grille]");
  if (!bouton) return;
  const enPause = bouton.getAttribute("aria-pressed") === "true";
  bouton.textContent = CONFIG.textes[langueActuelle][enPause ? "relancerGrille" : "pauseGrille"];
}


/* =====================================================================
   4. CHANGEMENT DE LANGUE
   ===================================================================== */

function appliquerLangue(langue) {
  langueActuelle = langue;
  const t = CONFIG.textes[langue];
  document.documentElement.lang = langue; // attribut lang de <html>

  // Textes visibles : <span data-texte="cle">
  document.querySelectorAll("[data-texte]").forEach(function (el) {
    const cle = el.getAttribute("data-texte");
    if (t[cle] !== undefined) el.textContent = remplir(t[cle]);
  });
  // Étiquettes pour les lecteurs d'écran : data-texte-aria="cle"
  document.querySelectorAll("[data-texte-aria]").forEach(function (el) {
    const cle = el.getAttribute("data-texte-aria");
    if (t[cle] !== undefined) el.setAttribute("aria-label", remplir(t[cle]));
  });
  // Balises meta (description, Open Graph) : data-texte-meta="cle"
  document.querySelectorAll("[data-texte-meta]").forEach(function (el) {
    const cle = el.getAttribute("data-texte-meta");
    if (t[cle] !== undefined) el.setAttribute("content", remplir(t[cle]));
  });
  const locale = document.querySelector('meta[property="og:locale"]');
  if (locale) locale.setAttribute("content", langue === "en" ? "en_GB" : "fr_FR");

  afficherCarte(langue);
  afficherHoraires(langue);
  afficherGrilleHero(langue);
  mettreAJourBoutonPause();
  mettreAJourBadge();

  // On mémorise le choix (facultatif). try/catch : en file:// ou en
  // navigation privée, localStorage peut être bloqué.
  try { localStorage.setItem("au-bonheur-langue", langue); } catch (erreur) { /* rien à faire */ }
}


/* =====================================================================
   5. LIENS ET DÉMARRAGE
   ===================================================================== */

// Met à jour tous les liens depuis CONFIG (utile si le numéro change).
function mettreAJourLiens() {
  document.querySelectorAll("[data-lien-tel]").forEach(function (lien) {
    lien.href = "tel:" + CONFIG.telephoneLien;
  });
  document.querySelectorAll("[data-lien-itineraire]").forEach(function (lien) {
    lien.href = CONFIG.lienItineraire;
  });
  document.querySelectorAll("[data-lien-demo]").forEach(function (lien) {
    lien.href = "tel:" + CONFIG.demo.telephoneLien;
    lien.textContent = CONFIG.demo.telephone;
  });
  document.querySelectorAll("[data-demo-nom]").forEach(function (el) {
    el.textContent = CONFIG.demo.presentateur;
  });
  // Infos pratiques : on masque celles qui valent false dans CONFIG.infos.
  document.querySelectorAll("[data-info]").forEach(function (el) {
    el.hidden = !CONFIG.infos[el.getAttribute("data-info")];
  });
}

function demarrer() {
  mettreAJourLiens();

  // Langue de départ : celle mémorisée, sinon le français.
  let langue = "fr";
  try {
    const memorisee = localStorage.getItem("au-bonheur-langue");
    if (memorisee === "fr" || memorisee === "en") langue = memorisee;
  } catch (erreur) { /* localStorage indisponible : on reste en français */ }
  appliquerLangue(langue);
  brancherPauseGrille();

  // Bouton FR / EN
  document.querySelectorAll("[data-bascule-langue]").forEach(function (bouton) {
    bouton.addEventListener("click", function () {
      appliquerLangue(langueActuelle === "fr" ? "en" : "fr");
    });
  });

  // Le badge est recalculé toutes les 60 secondes.
  setInterval(mettreAJourBadge, 60 * 1000);
}

// Le script est chargé avec "defer" : la page est prête quand il s'exécute.
demarrer();
