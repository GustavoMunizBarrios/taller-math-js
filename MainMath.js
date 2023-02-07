const MainMath = {};

MainMath.esPar = function esPar(numeros) {
    if (numeros.length % 2 == 0) {  // %  operador de residuo, si hay residuo entonces es true(1)
        return true;
    } else {
        return false;
    }
    // Es decir es impar 
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

MainMath.calcPromedio = function calcPromedio (lista){
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

MainMath.ordenarLista = function ordenarLista (listaDesordenada) {
    const lista = listaDesordenada.sort((a,b) => a-b);
    return lista;
}

MainMath.ordenarListaBidimensional = function ordenarListaBidimensional (listaDesordenada, index) {
    // Con a[index]-b[index] lo que hacemos es entrar al indice que se indique en la función.
    const lista = listaDesordenada.sort((a,b) => a[index]-b[index]);
    return lista;
}