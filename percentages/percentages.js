const inputPrice = document.querySelector('.input-producto');
const inputDiscount = document.querySelector('.input-descuento');
const btn = document.querySelector('.button');
const pResult = document.querySelector('.result');
const pError = document.querySelector('.error');

btn.addEventListener('click', calcPriceDiscount);

function calcPriceDiscount() {
    const price = Number(inputPrice.value); //Number convierte el string inputPrice en un number.
    const discount = Number(inputDiscount.value);//Number convierte el string inputDiscount en un number.

    if (!price || !discount) { //Si no hay price o discount:
        pError.innerText = 'Por favor escriba el precio y descuento del producto';
        pResult.innerText = '';
    } else {
        if (discount > 100) {
            pError.innerText = 'Escriba un porcentaje entre 1 y 100'
            pResult.innerText = '';
            return;
        }
        const priceDiscount = (price - ((price * discount)/ 100)).toFixed(2);
        console.log(priceDiscount);
    
        pResult.innerText = '$ ' + priceDiscount;
        pError.innerText = '';
    }


}