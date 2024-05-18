gsap.to("#text", {
  duration: 10, // Durée de l'animation (en secondes)
  x: "15.5%", // Déplacement horizontal vers le centre de l'écran
  ease: "power2.out" // Fonction d'accélération de l'animation
});
gsap.to("#logo", {
  duration:1, // Durée de l'animation (en secondes)
  x: "15%", // Déplacement horizontal de la gauche à la droite
  repeat: -1, // Répéter l'animation indéfiniment
  yoyo: true, // Répéter l'animation en sens inverse
  ease: "power1.inOut" // Effet d'accélération (facultatif)
});

gsap.registerPlugin(ScrollTrigger);

// Création de l'animation avec GSAP
const slideInAnimation1 = gsap.to("#one", {
  x: "25%", // Déplacement horizontal vers la position originale de l'élément
  duration: 1, // Durée de l'animation (en secondes)
  paused: true, // Animation en pause initialement
});

// Déclenchement de l'animation lors du scroll jusqu'à l'emplacement de la boîte
ScrollTrigger.create({
  trigger: "#one", // Déclencheur de l'animation
  start: "top 50%", // Position de démarrage de l'animation (par rapport au viewport)
  onEnter: () => slideInAnimation1.play(), // Fonction exécutée lorsque l'élément entre dans le viewport
  onLeaveBack: () => slideInAnimation1.reverse(), // Fonction exécutée lorsque l'élément sort du viewport
  onEnterBack: () => slideInAnimation1.play(), // Fonction exécutée lorsque l'utilisateur fait défiler vers le haut et que l'élément réapparaît dans le viewport
});

gsap.registerPlugin(ScrollTrigger);

// Création de l'animation avec GSAP
const slideInAnimation = gsap.to("#tw", {
  x: "-23%", // Déplacement horizontal de la position originale de l'élément vers la gauche
  duration: 1, // Durée de l'animation (en secondes)
  paused: true, // Animation en pause initialement
});

// Déclenchement de l'animation lors du scroll jusqu'à l'emplacement de la boîte
ScrollTrigger.create({
  trigger: "#tw", // Déclencheur de l'animation
  start: "top 80%", // Position de démarrage de l'animation (par rapport au viewport)
  onEnter: () => slideInAnimation.play(), // Fonction exécutée lorsque l'élément entre dans le viewport
  onLeaveBack: () => slideInAnimation.reverse(), // Fonction exécutée lorsque l'élément sort du viewport
  onEnterBack: () => slideInAnimation.play(), // Fonction exécutée lorsque l'utilisateur fait défiler vers le haut et que l'élément réapparaît dans le viewport
});

gsap.registerPlugin(ScrollTrigger);

// Création de l'animation avec GSAP
const slideInAnimation3 = gsap.to("#tr", {
  x: "25%", // Déplacement horizontal vers la position originale de l'élément
  duration: 1, // Durée de l'animation (en secondes)
  paused: true, // Animation en pause initialement
});

// Déclenchement de l'animation lors du scroll jusqu'à l'emplacement de la boîte
ScrollTrigger.create({
  trigger: "#tr", // Déclencheur de l'animation
  start: "top 50%", // Position de démarrage de l'animation (par rapport au viewport)
  onEnter: () => slideInAnimation3.play(), // Fonction exécutée lorsque l'élément entre dans le viewport
  onLeaveBack: () => slideInAnimation3.reverse(), // Fonction exécutée lorsque l'élément sort du viewport
  onEnterBack: () => slideInAnimation3.play(), // Fonction exécutée lorsque l'utilisateur fait défiler vers le haut et que l'élément réapparaît dans le viewport
});


const boutonAjouter = document.getElementById('ajouterAuPanier');

// Sélection du span pour afficher le nombre de produits dans le panier
const spanNombreDansPanier = document.getElementById('nombreDansPanier');

// Variable pour stocker le nombre de produits dans le panier
let nombreProduitsDansPanier = 0;

// Ajouter un écouteur d'événements pour le clic sur le bouton "Ajouter au panier"
boutonAjouter.addEventListener('click', () => {
  // Incrémenter le nombre de produits dans le panier
  nombreProduitsDansPanier++;
  // Mettre à jour le texte dans le span
  spanNombreDansPanier.textContent = nombreProduitsDansPanier;
});




