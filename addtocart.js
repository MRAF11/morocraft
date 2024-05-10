// Récupérer le bouton "ajouter au panier"
var addToCartButtons = document.querySelectorAll('#btn3 button');

// Fonction pour ajouter un produit au panier
function addToCart(productName, price) {
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: productName, price: price });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount(cart.length);
}

// Fonction pour mettre à jour l'affichage du nombre d'articles dans le panier
function updateCartCount(count) {
    var cartCountElement = document.querySelector('.cart p');
    cartCountElement.textContent = count;
}

// Ajouter un écouteur d'événement à chaque bouton "ajouter au panier"
addToCartButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var productName = this.parentNode.parentNode.querySelector('.card-body span').textContent;
        var price = parseFloat(this.parentNode.parentNode.querySelector('.card-body p').textContent.substring(1));
        addToCart(productName, price);
    });
});
// Fonction pour ajouter un produit au panier
function addToCart(productName, price) {
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: productName, price: price });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount(cart.length);
    showMessage('Produit ajouté avec succès !');
}

// Fonction pour mettre à jour l'affichage du nombre d'articles dans le panier
function updateCartCount(count) {
    var cartCountElement = document.querySelector('.cart p');
    cartCountElement.textContent = count;
}

// Fonction pour afficher un message
function showMessage(message) {
    var messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageElement.classList.add('message');
    document.body.appendChild(messageElement);
    setTimeout(function() {
        messageElement.remove();
    }, 3000); // Supprimer le message après 3 secondes
}

// Au chargement de la page
window.onload = function() {
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    updateCartCount(cart.length);
};

// Au chargement de la page
window.onload = function() {
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    updateCartCount(cart.length);

    // Gestionnaire d'événements pour réinitialiser le panier lors du clic sur l'image du panier
    var cartImage = document.querySelector('.cart i img');
    if (cartImage) {
        cartImage.addEventListener('click', function() {
            localStorage.removeItem('cart'); // Efface le panier du stockage local
            updateCartCount(0); // Met à jour le compteur à zéro
        });
    }
};

// Sélectionner l'icône du panier et le message
const cartIcon = document.getElementById('cart-icon');
const cartCounter = document.getElementById('cart-counter');
const cartMessage = document.getElementById('cart-message');

// Ajouter un événement pour afficher le message lorsque le curseur est sur l'icône du panier
cartIcon.addEventListener('mouseover', function() {
    cartMessage.style.display = 'block';
});

// Ajouter un événement pour masquer le message lorsque le curseur quitte l'icône du panier
cartIcon.addEventListener('mouseout', function() {
    cartMessage.style.display = 'none';
});

// Réinitialiser le compteur lorsque le curseur est sur l'icône du panier
cartIcon.addEventListener('click', function() {
    cartCounter.innerText = '0';
});
// Sélectionnez tous les boutons "ajouter au panier"
var addToCartButtons = document.querySelectorAll("#btn3 button");

// Parcourez chaque bouton et ajoutez un gestionnaire d'événements de clic
addToCartButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        // Créez un élément de message
        var message = document.createElement("div");
        message.textContent = "Produit ajouté";
        message.classList.add("cart-added-message"); // Ajoutez une classe pour le style CSS

        // Insérez le message à côté du bouton cliqué
        button.parentNode.insertBefore(message, button.nextSibling);

        // Supprimez le message après 2 secondes
        setTimeout(function() {
            message.remove();
        }, 2000);
    });
});



  

