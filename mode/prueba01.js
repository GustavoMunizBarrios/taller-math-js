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


const obj = {
    123: 'Juanito Alcachofa',
    456: 'Juanita Alacaparra',
};

function solution(obj) {
    const array = [];
    const arrayObj = Object.entries(obj);
    const numbersOfArrays = arrayObj.length - 1; 
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