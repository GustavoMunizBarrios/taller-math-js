/* let numeros = [11,8,31,47,53,49,72,81,99];
numeros.sort((a,b)=>a - b);
console.log(numeros); */
//const index = (numeros.length / 2) ;

function esPar(numeros) {
    if (numeros.length % 2 == 0) {  // %  operador de residuo, si hay residuo entonces es true(1)
        return true;
    } else {
        return false;
    }
    // Es decir es impar 
}

function calcularMediana(listaDesordenada) {
    const numeros = ordenarLista(listaDesordenada);
    const par = esPar(numeros);

    if (par) {
        const indexMitad1ListaPar = (numeros.length / 2) - 1;//indice de la mitad inferior
        const indexMitad2ListaPar = (numeros.length / 2); //indice de la mitad superior
        // numeros[indexMitad1ListaPar] = numero de la mitad inferior
        // numeros[indexMitad2ListaPar] = numero de la mitad superior
        result = calcPromedio([numeros[indexMitad1ListaPar], numeros[indexMitad2ListaPar]]);
        console.log('Mediana de lista par: ' + result)
    } else {
        //Math.round redondea hacia arriba
        const indexMitadListaImpar = Math.round((numeros.length / 2)-1); //esto devuelve la posicion en el array del elemento de en medio de una lista con un numero impar de elementos..
        console.log( 'index de lista impar: ' +  indexMitadListaImpar);
        console.log('Mediana de lista impar: '+(numeros[indexMitadListaImpar]));
    }
}

function calcPromedio (lista){
        function sumarTodosElementos(valorAcumulado, nuevoValor) {
            return valorAcumulado + nuevoValor;
        }

        const sumaLista = lista.reduce(sumarTodosElementos);//reduce recibe como argumento a la función sumarTodosElementos()
        const promedio = sumaLista / lista.length;

        console.log(promedio);
        return promedio; 
}
function ordenarLista (listaDesordenada) {
    const lista = listaDesordenada.sort((a,b) => a-b);
    return lista;
}