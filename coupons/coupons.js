const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento);

//const arrayUObjecto = undefined; // ['cupones': descuento] {}?

const couponList = [];
couponList.push({
    name: 'descuento20',
    discount: 20,
})
couponList.push({
    name: 'descuento30',
    discount: 30,
})
couponList.push({
    name: 'descuento40',
    discount: 40,
})
couponList.push({
    name: 'descuento50',
    discount: 50,
})

function calcularPrecioConDescuento() {
  const price = Number(inputPrice.value);
  const coupon = inputCoupon.value;

  if (!price || !coupon) {
    pResult.innerText = 'Por favor llena el formulario';
    return;
  }

  function isCouponInArray(couponElement) {
    return couponElement.name == coupon;
  }
  console.log(isCouponInArray);

  //utilizamos el método .find para preguntarle al array couponList si alguno de los objetos con propiedad 'name' coincide con lo que escribieron los usuarios en inputCoupon
  const couponInArray = couponList.find(isCouponInArray);
  console.log(couponInArray);

  let discount;

  if (couponInArray) {
    discount = couponInArray.discount;
  } else {
    pResult.innerText = "El cupón no es válido.";
    return;
  }


/*   switch (coupon) {
    case 'Cupon del 30%':
      discount = 30;
      break;
    case 'Cupon del 25%':
      discount = 25;
      break;
    default:
      pResult.innerText = 'El cupón no es válido';
      return;
  } */
  
  // if (coupon == 'JuanDC_es_Batman') {
  //   discount = 30;
  // } else if (coupon == 'no_le_digas_a_nadie') {
  //   discount = 25;
  // } else {
  // pResult.innerText = 'El cupón no es válido';
  // return;
  // }
  
  const newPrice = (price * (100 - discount)) / 100;

  pResult.innerText = 'El nuevo precio con descuento es $' + newPrice;
}