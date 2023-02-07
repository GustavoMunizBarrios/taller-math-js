//********************************************************************** */
// Área y perímetro de triangulo y cuadrado
//********************************************************************** */

console.group('Cuadrado') //-----------------------------------------

const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado
});

function calcularCuadrado (lado) {
    return {
        perimetro: lado * 4,
        area: lado * lado,
    }    
}

console.groupEnd('Cuadrado') //-----------------------------------------

console.group('Triangulo') //-----------------------------------------

const ladoTriangulo1 = 6;
const ladoTriangulo = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo + ladoTriangulo1 + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

function calcularTriangulo (lado1, lado2, base, altura) {
    return {
        perimetro: lado1 + lado2 + base,
        area: (base * altura) / 2,
    }    
}

function calcAltTriangulo(lado1, base) {
    if (lado1 == base) {
        console.warn('Este no es un triángulo isosceles')
    } else {
        // h= raizCuadrada (lado1**2 - (b**2)/4 )
        return Math.sqrt( (lado1**2) - ((base**2) / 4) );
    }
}

console.log({
    ladoTriangulo1,
    ladoTriangulo,
    ladoTrianguloBase,
    alturaTriangulo,
    perimetroTriangulo,
    areaTriangulo
});
console.groupEnd('Triangulo') //-----------------------------------------

//********************************************************************** */
// Área y perímetro de círculo 
//********************************************************************** */

console.group('circulo')

const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const PI = Math.PI;

const circunferencia = diametroCirculo * PI;
const areaCirculo = (radioCirculo ** 2) * PI;

console.log({
    radioCirculo,
    diametroCirculo,
    circunferencia,
    areaCirculo,
});

function calcularCirculo(radio) {
    const diametro = radio * 2;
    const radioAlCuadrado = Math.pow(radio, 2);

         
    return {
        circunferencia : (diametro * PI).toFixed(2),
        area : (radioAlCuadrado * PI).toFixed(2),
    }
}

console.groupEnd('circulo')
//**************************************************************** */
