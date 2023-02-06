/* Para convertir un objeto en un array tenemos disponibles varios métodos:
primero establecamo un objeto
const objeto = {a:1, b:2, c:3};

Si llamamos al método .keys:
Object.keys(objeto);
output : ['a', 'b', 'c'] 

Si llamamos al método .values:
object.values(objeto);
output: [1, 2, 3]

Si usamos el método .entries nos devuelve arrays, es decir una lista 
de otras listas
Object.entries(objeto);
output: [Array(2), Array(2), Array(2)]
0:(2) ['a', 1]
1:(2) ['b', 2]
2:(2) ['c', 3]
*/



function calcularModa(lista) {
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

//Clase 18 13:40
// La función ordenarListaBidimensional debemos pasarle dos parámetros: nuestro array desordenado
// y el indice del array con el cual debemos hacer la comparación. 
function ordenarListaBidimensional (listaDesordenada, index) {
    // Con a[index]-b[index] lo que hacemos es entrar al indice que se indique en la función.
    const lista = listaDesordenada.sort((a,b) => a[index]-b[index]);
    return lista;
}