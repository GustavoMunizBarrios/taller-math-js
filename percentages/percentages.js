const inputPrice = document.querySelector('.input-producto');
const inputDiscount = document.querySelector('.input-descuento');
const btn = document.querySelector('.button');
const pResult = document.querySelector('.result');

btn.addEventListener('click', calcPriceDiscount);

function calcPriceDiscount() {
    const price = inputPrice.value;
    const discount = inputDiscount.value;
    const priceDiscount = (price - ((price * discount)/ 100));
    console.log(priceDiscount);

    pResult.innerText = '$ ' + priceDiscount;
}