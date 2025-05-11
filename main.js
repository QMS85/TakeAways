// Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close navigation when clicking outside
document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
    }
});

// Cart functionality
let cartItems = [];

function addToCart(item) {
    cartItems.push(item);
    updateCartCount();
    saveCartToLocalStorage();
}

function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    cartCount.textContent = cartItems.length;
}

function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cartItems));
}

function loadCartFromLocalStorage() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cartItems = JSON.parse(savedCart);
        updateCartCount();
    }
}

// Load cart on page load
document.addEventListener('DOMContentLoaded', loadCartFromLocalStorage);

// Add click handlers to order buttons
document.querySelectorAll('.order-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const card = e.target.closest('.meal-card');
        const item = {
            name: card.querySelector('h3').textContent,
            price: card.querySelector('.price').textContent,
            image: card.querySelector('img').src
        };
        addToCart(item);
    });
});
