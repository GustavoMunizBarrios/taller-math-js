/* En este desafío debes convertir las llaves y valores de un objeto en 
propiedades (id y name) de un objeto dentro de un array.

Input:
---------------------------------|
const obj = {                    |
    123: 'Juanito Alcachofa',    |
    456: 'Juanita Alcaparra',    |
  };                             | 
                                 |
  solution(obj);                 |
---------------------------------|
 
Output: 
-----------------------------------------------|
[  { id: "123", name: 'Juanito Alcachofa',},   |
   { id: "456", name: 'Juanita Alcaparra',},   |
]                                              |
-----------------------------------------------|
*/

//************ SOLUCIÓN: ********************************

const obj = {
    123: 'Juanito Alcachofa',
    456: 'Juanita Alacaparra',
};

function solution(obj) {
    const array = [];
    const arrayObj = Object.entries(obj);
    console.log(arrayObj);

    for (let i=0; i < arrayObj.length; i++) {
        array.push({
            id: arrayObj[i][0], //[index dentro del array][array]
            name: arrayObj[i][1],
        });
    }
    //console.log(array);
    return array;
}
//****************************************************** */


/****** SOLUCIÓN simplificada ******************************

function solution(obj) {
  return Object.entries(obj).map(value => {
    return { id: value[0], name: value[1]}})
}

*********************************************************
*/

/* El método .map

El método .map() en JavaScript es un método de arrays que permite 
transformar cada elemento del array y devolver un nuevo array con 
los resultados de la transformación. Es decir, itera sobre cada 
elemento del array y aplica una función dada a cada uno de ellos.

Aquí hay un ejemplo de uso:

-----------------------------------------------------------|
let numbers = [1, 2, 3, 4, 5];                             |
let doubledNumbers = numbers.map(function(number) {        |
  return number * 2;                                       |
});                                                        |
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]   |
-----------------------------------------------------------|

*/