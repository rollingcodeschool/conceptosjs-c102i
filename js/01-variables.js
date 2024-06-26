// Esto es un comentario de una linea

/* Esto es un comentario
de
multiples
lineas
*/

// declarar una variable (var - let - const)

let anioActual = 2024;
console.log(anioActual);

// modificamos el contenido de una variable

anioActual = 2024 + 2;
console.log(anioActual);
document.write(anioActual);
document.write("<p class='textoResaltado'>Esto es un parrafo</p>");
document.write('Año actual: '+ (anioActual - 2));

// ventanas emergentes
// alert('Hola mundo');

const url = 'https://universe.rollingcodeschool.com/';

document.write('<br>' + url);

// url = 'hola mundo 2';
// console.log(url);

// pedir al usuario un numero
const numero1 = parseInt(prompt('Ingresa un número'));
console.log(numero1)
const resultado = numero1 + 20;
console.log(resultado)