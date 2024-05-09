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

  

