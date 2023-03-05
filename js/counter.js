document.addEventListener('click', function (e) {
  let wrapper;
  let counter;

  if (e.target.dataset.action == 'plus' || e.target.dataset.action == 'minus') {
    wrapper = e.target.closest('.counter-wrapper');
    counter = wrapper.querySelector('[data-counter]');
  }

  if (e.target.dataset.action == 'plus') {
    counter.innerText = Number(counter.innerText) + 1;
  }

  if (e.target.dataset.action == 'minus') {
    if (Number(counter.innerText) <= 1) {
      return;
    }
    counter.innerText = Number(counter.innerText) - 1;
  }
});
