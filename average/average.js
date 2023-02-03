
function calcPromedio (lista){
//sumar todos los elementos del array / cantidad de elementos

    /* //*********Forma 'for' para calcular promedio******************
    let sumaLista = 0;

    for (let i = 0; i < lista.length; i++) {
        sumaLista = sumaLista + lista[i];
    }
    //************************************************************ */
    
    //****** Forma com método .'reduce' para calcular promedio ************
    function sumarTodosElementos(valorAcumulado, nuevoValor) {
        return valorAcumulado + nuevoValor;
    }
    const sumaLista = lista.reduce(sumarTodosElementos());//reduce recibe como argumento a la función sumarTodosElementos()
    //****************************************************************** */
    
    const promedio = sumaLista / lista.lenght;
    console.log(promedio);
    return promedio; 

    //*********************************************************** */
    //************************NOTAS*******************************
    //********************************************************** */
/* 
    Arrow functions: 

    const a = (argumento1, argumento2) => {cuerpo de la función};
    
    Donde a es el nombre opcional de la función, argumentos son los argumentos de la función, y cuerpo de la función es el código que se ejecutará cuando se llame a la función.

    Si la función solo tiene una línea de código, se puede omitir las llaves y la palabra clave 'return':

    const a = (argumentos) => resultado;

    A continuación un ejemplo:

    const sum = (a, b) => a + b;
    console.log( sum(1,2) );   // 3
*/
}