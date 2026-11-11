import {products} from './products.js';

const templateProducts = document.getElementById('products-template');
const productsList = document.getElementById('products-list');

function getCartsCount() {
  let count = null;
  while (count ===null) {
    const answer = prompt('Сколько карточек товара хотите увидить? (от 1 до 5)')
    if (answer === null) {
      return null
    }
    const number = Number(answer);
    if (Number.isInteger(number) && number >0 && number <=5){
      count = number;
    }
    else {
      alert('Ввидите число от 1 до 5. Повторите попытку')
    }
  }

  return count;
}

function renderCartds(products) {
  products.forEach(product => {
    const productClone = templateProducts.content.cloneNode(true);
    productClone.querySelector('.products-type').textContent = product.type;
    productClone.querySelector('.products-name').textContent = product.name;
    productClone.querySelector('.products-effect').textContent = product.effect;
    productClone.querySelector('.products-composition').textContent = product.composition;
    productClone.querySelector('.products-components1').textContent = product.components1;
    productClone.querySelector('.products-components2').textContent = product.components2;
    productClone.querySelector('.products-components3').textContent = product.components3;
    productClone.querySelector('.products-price').textContent = product.price;
    productClone.querySelector('.products-priceTag').textContent = product.priceTag;
    productClone.querySelector('.products-image').src = product.image;
    productClone.querySelector('.products-image').alt = product.imageComment;
    productsList.appendChild(productClone)
  });
}

const count = getCartsCount();
renderCartds(products.slice(0, count));

const productsInfo = products.reduce((result, product) => {
  result.push({
    [product.name]: product.effect,
  });
  return result;
}, []);

console.log(productsInfo);