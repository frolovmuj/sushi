function textForm() {
  const cart = document.querySelector('.cart-wrapper');
  const title = document.querySelector('[data-cart-empty]');
  const form = document.querySelector('#order-form');
  let price = document.querySelector('.total-price');
  if (cart.children.length) {
    form.classList.remove('hidden');
    title.innerHTML = 'Ваша корзина:';

    removeBasket(cart);
  } else {
    form.classList.add('hidden');
    title.innerHTML = 'Ваша корзина пуста';
    totalPrice = calcTotalPrice();
    totalPrice = 0;
    price.innerHTML = 0;
  }
}

function removeBasket(cart) {
  const btnRemove = document.querySelector('[data-form-remove]');
  const cartItems = cart.querySelectorAll('.cart-item');
  let price = document.querySelector('.total-price');

  btnRemove.addEventListener('click', (e) => {
    e.preventDefault();
    totalPrice = calcTotalPrice();
    totalPrice = 0;
    price.innerHTML = 0;
    cartItems.forEach((cart) => cart.remove());
  });
}
