/* =====================================================================
   MODÈLES DE SITES : moteur commun aux 6 modèles
   ---------------------------------------------------------------------
   Ce fichier ne contient AUCUNE donnée d'un restaurant.
   Les données (nom, carte, prix, horaires, textes) sont dans le fichier
   config.js de chaque modèle, chargé AVANT ce moteur :
       <script src="config.js" defer></script>
       <script src="../commun/moteur.js" defer></script>

   Ce que fait le moteur :
     1. badge « Ouvert / Fermé » calculé à l'heure de Paris ;
     2. carte, horaires, infos pratiques construits depuis CONFIG ;
     3. bascule FR / EN de tous les textes ;
     4. animations (apparitions au défilement, titres lettre par lettre),
        coupées si l'appareil le demande ou via « Couper les animations ».

   Scripts classiques (pas de module) : tout fonctionne en double-clic (file://).
   ===================================================================== */


/* =====================================================================
   1. TEXTES COMMUNS À TOUS LES MODÈLES
   Les textes propres à un restaurant sont dans CONFIG.textes (config.js) ;
   s'ils portent le même nom, ce sont eux qui gagnent.
   {nom}, {telephone}, {adresse}, {transport}, {heure}, {jour} sont remplis automatiquement.
   ===================================================================== */

const TEXTES_COMMUNS = {
  fr: {
    evitement: "Aller au contenu",
    navLabel: "Navigation principale",
    navCarte: "Carte",
    navHoraires: "Horaires",
    navAcces: "Accès",
    boutonLangue: "EN",
    ariaLangue: "EN, switch to English",
    appeler: "Appeler",
    ariaAppeler: "Appeler {nom} au {telephone}",
    itineraire: "Itinéraire",
    ariaItineraire: "Itinéraire vers {nom}, ouvre Google Maps dans un nouvel onglet",
    carteTitre: "La carte",
    prixExemple: "Prix d'exemple",
    carteNote: "Prix en euros TTC. Informations sur les allergènes disponibles sur demande.",
    mentionAlcool: "L'abus d'alcool est dangereux pour la santé, à consommer avec modération.",
    lieuTitre: "Le lieu",
    horairesTitre: "Horaires",
    horairesLegende: "Horaires d'ouverture, jour par jour",
    ferme: "Fermé",
    aujourdhui: "aujourd'hui",
    infosTitre: "Infos pratiques",
    accesTitre: "Accès",
    accesTexte: "{adresse}. {transport}.",
    copyright: "© {nom}",
    statutOuvert: "Ouvert · jusqu'à {heure}",
    statutReouverture: "Fermé · réouverture à {heure}",
    statutOuvertureAujourdhui: "Fermé · ouverture à {heure}",
    statutOuvertureDemain: "Fermé · ouverture demain à {heure}",
    statutOuvertureJour: "Fermé · ouverture {jour} à {heure}",
    statutFerme: "Fermé",
    jours: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
    joursCourts: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
    tousLesJours: "Tous les jours",
    deuxPoints: " : ",          // en français, espace avant les deux-points
    couperAnims: "Couper les animations",
    remettreAnims: "Remettre les animations",
    demoNav: "Choisir un modèle",
    demoTexte: "Proposition de",
    decouvrir: "Découvrir la carte"
  },
  en: {
    evitement: "Skip to content",
    navLabel: "Main navigation",
    navCarte: "Menu",
    navHoraires: "Hours",
    navAcces: "Directions",
    boutonLangue: "FR",
    ariaLangue: "FR, passer en français",
    appeler: "Call",
    ariaAppeler: "Call {nom} on {telephone}",
    itineraire: "Directions",
    ariaItineraire: "Directions to {nom}, opens Google Maps in a new tab",
    carteTitre: "Menu",
    prixExemple: "Sample prices",
    carteNote: "Prices in euros, taxes included. Allergen information available on request.",
    mentionAlcool: "Alcohol abuse is dangerous for your health, drink in moderation.",
    lieuTitre: "The place",
    horairesTitre: "Opening hours",
    horairesLegende: "Opening hours, day by day",
    ferme: "Closed",
    aujourdhui: "today",
    infosTitre: "Good to know",
    accesTitre: "Getting here",
    accesTexte: "{adresse}. {transport}.",
    copyright: "© {nom}",
    statutOuvert: "Open · until {heure}",
    statutReouverture: "Closed · reopens at {heure}",
    statutOuvertureAujourdhui: "Closed · opens at {heure}",
    statutOuvertureDemain: "Closed · opens tomorrow at {heure}",
    statutOuvertureJour: "Closed · opens {jour} at {heure}",
    statutFerme: "Closed",
    jours: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    joursCourts: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    tousLesJours: "Every day",
    deuxPoints: ": ",
    couperAnims: "Turn animations off",
    remettreAnims: "Turn animations on",
    demoNav: "Choose a template",
    demoTexte: "Proposal by",
    decouvrir: "See the menu"
  }
};

// Langue affichée en ce moment ("fr" ou "en").
let langueActuelle = "fr";

// Tous les textes d'une langue : les communs, puis ceux du restaurant par-dessus.
function textes(langue) {
  return Object.assign({}, TEXTES_COMMUNS[langue], CONFIG.textes[langue]);
}


/* =====================================================================
   2. PETITS OUTILS
   ===================================================================== */

const MINUTES_PAR_JOUR = 24 * 60;
const MINUTES_PAR_SEMAINE = 7 * MINUTES_PAR_JOUR;

// "18:30" devient 1110 (minutes depuis minuit).
function heureEnMinutes(texteHeure) {
  const morceaux = texteHeure.split(":");
  return Number(morceaux[0]) * 60 + Number(morceaux[1]);
}

// 1110 devient "18h30" (fr) ou "6:30 pm" (en).
function formaterHeure(minutes, langue) {
  const total = ((minutes % MINUTES_PAR_JOUR) + MINUTES_PAR_JOUR) % MINUTES_PAR_JOUR;
  const heures = Math.floor(total / 60);
  const mins = String(total % 60).padStart(2, "0");
  if (langue === "en") {
    const suffixe = heures < 12 ? "am" : "pm";
    const heures12 = heures % 12 === 0 ? 12 : heures % 12;
    return heures12 + ":" + mins + " " + suffixe;
  }
  return String(heures).padStart(2, "0") + "h" + mins;
}

// 6.5 devient "6,50 €" (fr) ou "€6.50" (en).
function formaterPrix(prix, langue) {
  return new Intl.NumberFormat(langue === "en" ? "en-GB" : "fr-FR", { style: "currency", currency: "EUR" }).format(prix);
}

// Remplace {nom}, {telephone}, {adresse}, {transport}... dans un texte.
function remplir(texte, valeurs) {
  const toutes = Object.assign({
    nom: CONFIG.nom,
    telephone: CONFIG.telephoneAffiche,
    adresse: CONFIG.adresse,
    transport: CONFIG.transport[langueActuelle]
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

function mouvementReduit() {
  return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}


/* =====================================================================
   3. OUVERT / FERMÉ, À L'HEURE DE PARIS
   ===================================================================== */

// Jour (0 = dimanche) et heure en minutes à Paris, quel que soit le fuseau de l'appareil.
function obtenirHeureParis(date) {
  const format = new Intl.DateTimeFormat("fr-FR", {
    timeZone: "Europe/Paris", weekday: "long", hour: "2-digit", minute: "2-digit", hourCycle: "h23"
  });
  const parties = {};
  format.formatToParts(date || new Date()).forEach(function (partie) { parties[partie.type] = partie.value; });
  const nomsJours = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
  return { jour: nomsJours.indexOf(parties.weekday), minutes: Number(parties.hour) * 60 + Number(parties.minute) };
}

// FONCTION PURE (testable avec des dates simulées).
//   dateParis : { jour: 0 à 6, minutes }   horaires : même format que CONFIG.horaires
// Renvoie { ouvert: true, fermeture } ou { ouvert: false, ouverture, jourOuverture, ecartJours, reouverture }.
function calculerStatut(dateParis, horaires) {
  const maintenant = dateParis.jour * MINUTES_PAR_JOUR + dateParis.minutes;
  const services = [];
  for (let jour = 0; jour <= 6; jour++) {
    (horaires[jour] || []).forEach(function (creneau) {
      const debut = jour * MINUTES_PAR_JOUR + heureEnMinutes(creneau[0]);
      let fin = jour * MINUTES_PAR_JOUR + heureEnMinutes(creneau[1]);
      if (fin <= debut) fin += MINUTES_PAR_JOUR;   // fermeture après minuit
      [-MINUTES_PAR_SEMAINE, 0, MINUTES_PAR_SEMAINE].forEach(function (decalage) {
        services.push({ debut: debut + decalage, fin: fin + decalage });
      });
    });
  }
  for (const service of services) {
    if (service.debut <= maintenant && maintenant < service.fin) {
      return { ouvert: true, fermeture: service.fin % MINUTES_PAR_JOUR };
    }
  }
  let prochain = null;
  for (const service of services) {
    if (service.debut > maintenant && (prochain === null || service.debut < prochain.debut)) prochain = service;
  }
  if (prochain === null) return { ouvert: false, ouverture: null };
  const jourDuProchain = Math.floor(prochain.debut / MINUTES_PAR_JOUR);
  const debutDuJour = dateParis.jour * MINUTES_PAR_JOUR;
  const dejaServi = services.some(function (s) { return s.debut >= debutDuJour && s.fin <= maintenant; });
  const ecartJours = jourDuProchain - dateParis.jour;
  return {
    ouvert: false,
    ouverture: prochain.debut % MINUTES_PAR_JOUR,
    jourOuverture: ((jourDuProchain % 7) + 7) % 7,
    ecartJours: ecartJours,
    reouverture: ecartJours === 0 && dejaServi
  };
}

function texteStatut(statut, langue) {
  const t = textes(langue);
  if (statut.ouvert) return remplir(t.statutOuvert, { heure: formaterHeure(statut.fermeture, langue) });
  if (statut.ouverture === null) return t.statutFerme;
  const heure = formaterHeure(statut.ouverture, langue);
  if (statut.ecartJours === 0) return remplir(statut.reouverture ? t.statutReouverture : t.statutOuvertureAujourdhui, { heure: heure });
  if (statut.ecartJours === 1) return remplir(t.statutOuvertureDemain, { heure: heure });
  return remplir(t.statutOuvertureJour, { heure: heure, jour: t.jours[statut.jourOuverture] });
}

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
   4. CARTE, HORAIRES, INFOS : CONSTRUITS DEPUIS CONFIG
   ===================================================================== */

// Structure produite (identique pour tous les modèles, seul le CSS change) :
//   div.carte-categorie > h3.carte-titre (span.carte-nom-categorie + span.carte-sous-titre)
//                       > ul.carte-liste > li.carte-plat (span.carte-nom [+ span.carte-detail], span.carte-points, span.carte-prix)
// Un plat avec prix: null n'affiche pas de prix.
function afficherCarte(langue) {
  const conteneur = document.querySelector("[data-carte]");
  if (!conteneur) return;
  conteneur.textContent = "";
  CONFIG.carte.forEach(function (categorie, index) {
    const bloc = creer("div", "carte-categorie");
    bloc.style.setProperty("--c", index);
    const titre = creer("h3", "carte-titre");
    titre.appendChild(creer("span", "carte-nom-categorie", categorie[langue]));
    if (categorie.sous) titre.appendChild(creer("span", "carte-sous-titre", categorie.sous[langue]));
    bloc.appendChild(titre);
    const liste = creer("ul", "carte-liste");
    let numero = 0;
    categorie.plats.forEach(function (plat) {
      if (plat.alcool && !CONFIG.afficherAlcool) return;
      const ligne = creer("li", "carte-plat");
      ligne.style.setProperty("--p", numero++);
      const nom = creer("span", "carte-nom", plat[langue]);
      if (plat.detail) nom.appendChild(creer("span", "carte-detail", plat.detail[langue]));
      ligne.appendChild(nom);
      // prix: null = pas de prix propre (ex. un parfum de glace compris dans la formule)
      if (plat.prix !== null && plat.prix !== undefined) {
        const points = creer("span", "carte-points");
        points.setAttribute("aria-hidden", "true");
        ligne.appendChild(points);
        ligne.appendChild(creer("span", "carte-prix", formaterPrix(plat.prix, langue)));
      }
      liste.appendChild(ligne);
    });
    bloc.appendChild(liste);
    conteneur.appendChild(bloc);
  });
  document.querySelectorAll("[data-mention-prix-exemple]").forEach(function (el) { el.hidden = !CONFIG.prixExemple; });
  document.querySelectorAll("[data-mention-alcool]").forEach(function (el) { el.hidden = !CONFIG.afficherAlcool; });
}

// Tableau des horaires, du lundi au dimanche, jour actuel mis en évidence.
function afficherHoraires(langue) {
  const corps = document.querySelector("[data-horaires]");
  if (!corps) return;
  const t = textes(langue);
  const aujourdhui = obtenirHeureParis().jour;
  corps.textContent = "";
  [1, 2, 3, 4, 5, 6, 0].forEach(function (jour) {
    const ligne = creer("tr");
    const nomJour = t.jours[jour];
    const entete = creer("th", "horaires-jour", nomJour.charAt(0).toUpperCase() + nomJour.slice(1));
    entete.scope = "row";
    const creneaux = CONFIG.horaires[jour] || [];
    const cellule = creer("td", "horaires-services");
    if (creneaux.length === 0) { cellule.textContent = t.ferme; ligne.classList.add("est-ferme"); }
    creneaux.forEach(function (c) {
      cellule.appendChild(creer("span", "horaires-service", formaterHeure(heureEnMinutes(c[0]), langue) + "–" + formaterHeure(heureEnMinutes(c[1]), langue)));
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

// Résumé automatique des horaires pour le pied de page :
// regroupe les jours qui se suivent avec les mêmes horaires (« mar.–sam. : 18h00–02h00 »).
function resumeHoraires(langue) {
  const t = textes(langue);
  const ordre = [1, 2, 3, 4, 5, 6, 0];
  const cle = function (jour) { return JSON.stringify(CONFIG.horaires[jour] || []); };
  const groupes = [];
  ordre.forEach(function (jour) {
    const dernier = groupes[groupes.length - 1];
    if (dernier && dernier.cle === cle(jour)) dernier.fin = jour;
    else groupes.push({ debut: jour, fin: jour, cle: cle(jour) });
  });
  return groupes.map(function (g) {
    const creneaux = CONFIG.horaires[g.debut] || [];
    let jours = t.joursCourts[g.debut] + (g.debut !== g.fin ? "–" + t.joursCourts[g.fin] : "");
    if (groupes.length === 1) jours = t.tousLesJours;
    const heures = creneaux.length === 0 ? t.ferme.toLowerCase() : creneaux.map(function (c) {
      return formaterHeure(heureEnMinutes(c[0]), langue) + "–" + formaterHeure(heureEnMinutes(c[1]), langue);
    }).join(", ");
    return jours + t.deuxPoints + heures;
  }).join(" · ");
}

function afficherInfos(langue) {
  const liste = document.querySelector("[data-infos]");
  if (!liste) return;
  liste.textContent = "";
  CONFIG.infos.forEach(function (info) { liste.appendChild(creer("li", null, info[langue])); });
  document.querySelectorAll("[data-resume-horaires]").forEach(function (el) { el.textContent = resumeHoraires(langue); });
}


/* =====================================================================
   5. LANGUE ET LIENS
   ===================================================================== */

function appliquerLangue(langue) {
  langueActuelle = langue;
  const t = textes(langue);
  document.documentElement.lang = langue;
  document.querySelectorAll("[data-texte]").forEach(function (el) {
    const cle = el.getAttribute("data-texte");
    if (t[cle] !== undefined) el.textContent = remplir(t[cle]);
  });
  document.querySelectorAll("[data-texte-aria]").forEach(function (el) {
    const cle = el.getAttribute("data-texte-aria");
    if (t[cle] !== undefined) el.setAttribute("aria-label", remplir(t[cle]));
  });
  document.querySelectorAll("[data-texte-meta]").forEach(function (el) {
    const cle = el.getAttribute("data-texte-meta");
    if (t[cle] !== undefined) el.setAttribute("content", remplir(t[cle]));
  });
  const locale = document.querySelector('meta[property="og:locale"]');
  if (locale) locale.setAttribute("content", langue === "en" ? "en_GB" : "fr_FR");
  afficherCarte(langue);
  afficherHoraires(langue);
  afficherInfos(langue);
  mettreAJourBadge();
  mettreAJourBoutonAnims();
  document.querySelectorAll("[data-lettres]").forEach(decouperEnLettres);
  if (typeof window.apresLangue === "function") window.apresLangue(langue);   // crochet facultatif d'un modèle
  try { localStorage.setItem("modele-" + CONFIG.cle + "-langue", langue); } catch (erreur) { /* rien */ }
}

function mettreAJourLiens() {
  document.querySelectorAll("[data-lien-tel]").forEach(function (lien) { lien.href = "tel:" + CONFIG.telephoneLien; });
  document.querySelectorAll("[data-lien-itineraire]").forEach(function (lien) { lien.href = CONFIG.lienItineraire; });
}


/* =====================================================================
   6. ANIMATIONS
   La classe « anims-actives » sur <html> active les animations dans le CSS.
   Sans elle (pas de JavaScript, mouvement réduit, ou bouton « Couper »),
   tout est affiché dans son état final.
   ===================================================================== */

let animsActives = false;

// Découpe un titre en lettres, regroupées par mot (un mot n'est jamais coupé en fin de ligne).
function decouperEnLettres(element) {
  const texte = (element.getAttribute("aria-label") && element.querySelector(".lettre"))
    ? element.getAttribute("aria-label")
    : element.textContent.trim();
  element.setAttribute("aria-label", texte);
  element.textContent = "";
  let n = 0;
  texte.split(/\s+/).forEach(function (mot, i) {
    if (i > 0) element.appendChild(document.createTextNode(" "));
    const bloc = creer("span", "mot-entier");
    bloc.setAttribute("aria-hidden", "true");
    Array.prototype.forEach.call(mot, function (caractere) {
      const lettre = creer("span", "lettre", caractere);
      lettre.style.setProperty("--n", n++);
      bloc.appendChild(lettre);
    });
    element.appendChild(bloc);
  });
}

function mettreAJourBoutonAnims() {
  document.querySelectorAll("[data-bascule-anims]").forEach(function (bouton) {
    bouton.setAttribute("aria-pressed", String(!animsActives));
    bouton.textContent = textes(langueActuelle)[animsActives ? "couperAnims" : "remettreAnims"];
  });
}

function activerAnimations(oui) {
  animsActives = oui;
  document.documentElement.classList.toggle("anims-actives", oui);
  document.documentElement.classList.toggle("anims-coupees", !oui);
  mettreAJourBoutonAnims();
}

function demarrerAnimations() {
  // Apparition des blocs [data-revele] quand ils entrent à l'écran (une seule fois).
  const blocs = document.querySelectorAll("[data-revele]");
  if ("IntersectionObserver" in window) {
    const observateur = new IntersectionObserver(function (entrees) {
      entrees.forEach(function (entree) {
        if (entree.isIntersecting) { entree.target.classList.add("est-visible"); observateur.unobserve(entree.target); }
      });
    }, { rootMargin: "0px 0px -10% 0px" });
    blocs.forEach(function (bloc) { observateur.observe(bloc); });
  } else {
    blocs.forEach(function (bloc) { bloc.classList.add("est-visible"); });
  }
  document.querySelectorAll("[data-bascule-anims]").forEach(function (bouton) {
    bouton.addEventListener("click", function () { activerAnimations(!animsActives); });
  });
  activerAnimations(!mouvementReduit());
}


/* =====================================================================
   7. DÉMARRAGE
   ===================================================================== */

function demarrer() {
  mettreAJourLiens();
  let langue = "fr";
  try {
    const memorisee = localStorage.getItem("modele-" + CONFIG.cle + "-langue");
    if (memorisee === "fr" || memorisee === "en") langue = memorisee;
  } catch (erreur) { /* localStorage indisponible */ }
  demarrerAnimations();
  appliquerLangue(langue);
  document.querySelectorAll("[data-bascule-langue]").forEach(function (bouton) {
    bouton.addEventListener("click", function () { appliquerLangue(langueActuelle === "fr" ? "en" : "fr"); });
  });
  setInterval(mettreAJourBadge, 60 * 1000);
  if (typeof window.demarrerModele === "function") window.demarrerModele();   // animation signature d'un modèle
}

demarrer();
