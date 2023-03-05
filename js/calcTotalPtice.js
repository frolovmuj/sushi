function calcTotalPrice() {
  let totalPrice = 0;
  const deliveryCost = document.querySelector('.delivery-cost');
  const itemInCarts = document.querySelectorAll('.cart-item');
  itemInCarts.forEach((item) => {
    const price = item.querySelector('.price__currency');
    const quanity = item.querySelector('[data-counter]');
    const finalPrice = parseInt(price.innerText) * parseInt(quanity.innerText);
    totalPrice += finalPrice;
  });
  if (totalPrice < 1000) {
    totalPrice += 450;
    deliveryCost.innerHTML = '450р';
    deliveryCost.classList.remove('free')
    deliveryCost.classList.add('paid')
} else {
    totalPrice - 450;
    deliveryCost.innerHTML = 'Бесплатная';
    deliveryCost.classList.add('free')
    deliveryCost.classList.remove('paid')
  }
  return totalPrice;
}
