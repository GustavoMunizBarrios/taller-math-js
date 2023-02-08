const MainMath = {};

MainMath.esPar = function esPar(numeros) {
    if (numeros.length % 2 == 0) {  // %  operador de residuo, si hay residuo entonces es true(1)
        return true;
    } else {
        return false;
    }
    // Es decir es impar 
}
MainMath.ordenarLista = function ordenarLista(listaDesordenada) {
    function ordenarListaSort(valorAcumulado, nuevoValor) {
      return valorAcumulado - nuevoValor;
    }
    
    // const lista = listaDesordenada.sort((a,b) => a-b);
    const lista = listaDesordenada.sort(ordenarListaSort);
    
    return lista;
  }

MainMath.calcularModa = function calcularModa(lista) {
    const listaCount = {}; // objeto llamado listaCount

    for (let i = 0; i < lista.length; i++ ) {
        const elemento = lista[i];
        //Por cada elemento de nuestro Array, estamos preguntando: 
        if (listaCount[elemento]) { // Si nuestro objeto listaCount tiene una propiedad que se llame elemento.
            listaCount[elemento] += 1; // si es asi le sumamos 1 al valor acumulado 
        } else {
            listaCount[elemento] = 1;// si no, solo le asigna 1
        }
    }
    const listaArray = Object.entries(listaCount);
    const listaOrdenada = ordenarListaBidimensional(listaArray,1);
    const listaOrdenadaMaxNumber = listaOrdenada[listaOrdenada.length - 1];
    console.log({listaCount, listaArray, listaOrdenada, listaOrdenadaMaxNumber});
    console.log('La moda de la lista es: ' + listaOrdenadaMaxNumber[0]);
    const moda =listaOrdenadaMaxNumber[0];
    return moda;

}

MainMath.calcularMediana = function calcularMediana(listaDesordenada) {
    const lista = MainMath.ordenarLista(listaDesordenada);
    const listaEsPar = MainMath.esPar(lista);
  
    if (listaEsPar) {
      const indexMitad1ListaPar = (lista.length / 2) - 1;
      const indexMitad2ListaPar = lista.length / 2;
      const listaMitades = [];
      listaMitades.push(lista[indexMitad1ListaPar]);
      listaMitades.push(lista[indexMitad2ListaPar]);
  
      const medianaListaPar = MainMath.calcPromedio(listaMitades);
      return medianaListaPar;
    } else {
      const indexMitadListaImpar = Math.floor(lista.length / 2);
      const medianaListaImpar = lista[indexMitadListaImpar];
      //console.log(indexMitadListaImpar);
      //console.log(medianaListaImpar);
      return medianaListaImpar;
    }
  }

MainMath.calcPromedio = function calcularPromedio(lista) {
function sumarTodosElementos(valorAcumulado, nuevoValor) {
    return valorAcumulado + nuevoValor;
}

const sumaLista = lista.reduce(sumarTodosElementos);  
const promedio = sumaLista / lista.length;
// console.log(promedio);
return promedio;
}

MainMath.ordenarListaBidimensional = function ordenarListaBidimensional (listaDesordenada, index) {
    // Con a[index]-b[index] lo que hacemos es entrar al indice que se indique en la función.
    const lista = listaDesordenada.sort((a,b) => a[index]-b[index]);
    return lista;
}