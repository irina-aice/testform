'use strict';

(function () {
  const addProduct = document.querySelector('.js-add-product');
  const modal = document.querySelector('.js-modal');
  const productTemplate = document.querySelector('#product-template').content;
  const productList = document.querySelector('.js-product-list');
  const modalForm = document.querySelector('.js-modal-form');

  addProduct.addEventListener('click', function (evt) {
    evt.preventDefault();
    modal.setAttribute('data-state', 'open')
  })

  modalForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    const checkedInput = modalForm.querySelector('input:checked');
    const productLength = productList.children.length;
    for (let i = 1; i <= checkedInput.value; i++) {
      const product = productTemplate.cloneNode(true);
      const number = product.querySelector('.js-product-number');
      const numberValue = productLength + i;
      number.textContent = numberValue.toString();
      productList.appendChild(product);
    }
    modal.setAttribute('data-state', 'close');
  })

  const recalcProducts = function () {
    const listElements = productList.querySelectorAll('.js-product');
    for (let i = 0; i < listElements.length; i++) {
      const listElement = listElements[i];
      const productNumber = listElement.querySelector('.js-product-number');
      const value = i + 1;
      productNumber.textContent = value.toString();
    }
  }

  productList.addEventListener('click', function (evt) {
    if(!evt.target.closest('.js-product-remove')) {
      return;
    }
    const productElement = evt.target.closest('.js-product');
    productElement.remove();
    recalcProducts();
  })
})();
