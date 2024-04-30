gsap.to("#text", {
  duration: 1, // Durée de l'animation (en secondes)
  x: "15.5%", // Déplacement horizontal vers le centre de l'écran
  ease: "power2.out" // Fonction d'accélération de l'animation
});

gsap.to("#logo", {
  scale: 4, // Échelle finale (sans zoom)
  opacity: 1, // Opacité finale
  duration: 1, // Durée de l'animation (en secondes)
  ease: "power2.out" // Fonction d'accélération de l'animation
});