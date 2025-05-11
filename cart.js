// Cart page functionality
function displayCart() {
    const cartContainer = document.querySelector('.cart-items');
    const cartTotal = document.querySelector('.cart-total');
    let total = 0;

    cartContainer.innerHTML = '';

    cartItems.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="item-details">
                <h3>${item.name}</h3>
                <p>${item.price}</p>
            </div>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartContainer.appendChild(cartItem);
        total += parseFloat(item.price.replace('R', ''));
    });

    cartTotal.textContent = `Total: R${total.toFixed(2)}`;
}

function removeFromCart(index) {
    cartItems.splice(index, 1);
    updateCartCount();
    saveCartToLocalStorage();
    displayCart();
}

// Initialize cart page
if (document.querySelector('.cart-page')) {
    displayCart();
}
