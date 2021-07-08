'use strict';

(function () {
  const addProduct = document.querySelector('.js-add-product');
  const modal = document.querySelector('.js-modal');

  addProduct.addEventListener('click', function (evt) {
    evt.preventDefault();
    modal.classList.add('modal-show');
  })
})();
