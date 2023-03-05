const cart = document.querySelector('.cart-wrapper');

document.addEventListener('click', function (e) {
  //Если кликнули по кнопке добавить
  if (e.target.hasAttribute('data-cart')) {
    const card = e.target.closest('.card');
    // Наши суши
    const ProductInfo = {
      id: card.dataset.id,
      src: card.querySelector('.product-img').getAttribute('src'),
      title: card.querySelector('.item-title').innerText,
      itemsInBox: card.querySelector('[data-items-in-box]').innerText,
      price: card.querySelector('.price__currency').innerText,
      weight: card.querySelector('.price__weight').innerText,
      counter: card.querySelector('[data-counter]').innerText,
    };

    const itemInCart = cart.querySelector(`[data-id="${ProductInfo.id}"]`);
    // Если суши есть, значит просто плюсуем количество
    if (itemInCart) {
      let counterElement = itemInCart.querySelector('[data-counter]');
      counterElement.innerText =
        Number(counterElement.innerText) + Number(ProductInfo.counter);
    // Если суши нет, значит добавляем
    } else {
      const cardItem = `
      <div class="cart-item" data-id="${ProductInfo.id}">
      <div class="cart-item__top">
      <div class="cart-item__img">
      <img src="${ProductInfo.src}">
        </div>
        <div class="cart-item__desc">
          <div class="cart-item__title">${ProductInfo.title}</div>
          <div class="cart-item__weight">${ProductInfo.itemsInBox} / ${ProductInfo.weight}</div>
          
          <!-- cart-item__details -->
          <div class="cart-item__details">
          
          <div class="items items--small counter-wrapper">
          <div class="items__control" data-action="minus">-</div>
          <div class="items__current" data-counter="">${ProductInfo.counter}</div>
          <div class="items__control" data-action="plus">+</div>
          
          </div>
          
          <div class="price">
          <div class="price__currency">${ProductInfo.price}</div>
          </div>
          
          </div>
          <button data-cart-remove type="button" class="btn btn-remove btn-block btn-outline-warning">
                    Убрать из корзины
          </button>
          <!-- // cart-item__details -->
          
          </div>
          </div>
          </div>
          `;
      cart.insertAdjacentHTML('beforeend', cardItem);
    }
  }
  //Если кликнули по кнопке убрать - убираем элемент
  if (e.target.hasAttribute('data-cart-remove')) {
    const cartItem = e.target.closest('.cart-item');
    cartItem.remove();
  }
  //Если кликнули по кнопке убрать, добавить, расчитываем цену
  if (
    (e.target.hasAttribute('data-action') && e.target.closest('.cart-wrapper')) ||
    e.target.hasAttribute('data-cart') ||
    e.target.hasAttribute('data-cart-remove')
  ) {
    const formTotal = document.querySelector('.total-price');
    const FinalPrice = calcTotalPrice();
    formTotal.innerHTML = FinalPrice;
  }
  textForm();
});
