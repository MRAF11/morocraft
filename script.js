const text = document.getElementById('#text');

  gsap.from(text, {
    x: 1000, // Début de l'animation en dehors de la fenêtre
    opacity: 0,
    duration: 4.5,
    ease: "power4.out", // Animation fluide
    onComplete: function() {
      text.style.opacity = 1; // Assurer que l'opacité est définie à 1 à la fin de l'animation
    }
  });