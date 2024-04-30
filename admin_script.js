let navbar = document.querySelector('.header .navbar');
let accountBox = document.querySelector('.header .account-box');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
   accountBox.classList.remove('active');
}

document.querySelector('#user-btn').onclick = () =>{
   accountBox.classList.toggle('active');
   navbar.classList.remove('active');
}

window.onscroll = () =>{
   navbar.classList.remove('active');
   accountBox.classList.remove('active');
}

document.querySelector('#close-update').onclick = () =>{
   document.querySelector('.edit-product-form').style.display = 'none';
   window.location.href = 'admin_products.php';
}

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