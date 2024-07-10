//declarar un array vacio
const alumnos = [];

//declarar un array con datos

const comidas = [
  "sanguche de milanesa",
  "hamburguesa",
  true,
  "humita",
  "pizza",
  2024,
  "Empanadas",
];

document.write(`<p>El array de comidas tiene ${comidas.length} elementos</p>`);
document.write(`<p>La primer comida es: ${comidas[0]} </p>`);
document.write(`<p>La segunda comida es: ${comidas[1]} </p>`);
document.write(`<p>Las comidas son: ${comidas} </p>`);
console.log(comidas);

//mostrar los elementos del array como una lista
document.write(`<h3>Lista de comidas, elementos: ${comidas.length}</h3>`);
document.write(`<ul>`);
for(let i = 0; i < comidas.length; i++){
    document.write(`<li>${comidas[i]}</li>`);
}
document.write(`</ul>`);

// modificar elementos en un array
comidas[2] = 'locro';

document.write(`<h3>Lista de comidas, elementos: ${comidas.length}</h3>`);
document.write(`<ul>`);
for(let i = 0; i < comidas.length; i++){
    document.write(`<li>${comidas[i]}</li>`);
}
document.write(`</ul>`);

// agregar elementos en un array

//borrar elementos de un array
