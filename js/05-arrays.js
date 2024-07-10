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
// al principio
comidas.unshift('tira de asado','guiso')

document.write(`<h3>Lista de comidas, elementos: ${comidas.length}</h3>`);
document.write(`<ul>`);
for(let i = 0; i < comidas.length; i++){
    document.write(`<li>${comidas[i]}</li>`);
}
document.write(`</ul>`);

//agregar elementos al final
comidas.push('ravioles', 'sorrentinos')
document.write(`<h3>Lista de comidas, elementos: ${comidas.length}</h3>`);
document.write(`<ul>`);
for(let i = 0; i < comidas.length; i++){
    document.write(`<li>${comidas[i]}</li>`);
}
document.write(`</ul>`);

// agregar un elemento en una posicion particular del array
comidas.splice(6, 0, 'fideos')

document.write(`<h3>Lista de comidas, elementos: ${comidas.length}</h3>`);
document.write(`<ul>`);
for(let i = 0; i < comidas.length; i++){
    document.write(`<li>${comidas[i]}</li>`);
}
document.write(`</ul>`);

//borrar elementos de un array
//borrar el primer elemento
comidas.shift();

document.write(`<h3>Lista de comidas, elementos: ${comidas.length}</h3>`);
document.write(`<ul>`);
for(let i = 0; i < comidas.length; i++){
    document.write(`<li>${comidas[i]}</li>`);
}
document.write(`</ul>`);

//borrar el ultimo elemento
comidas.pop();

document.write(`<h3>Lista de comidas, elementos: ${comidas.length}</h3>`);
document.write(`<ul>`);
for(let i = 0; i < comidas.length; i++){
    document.write(`<li>${comidas[i]}</li>`);
}
document.write(`</ul>`);

//borrar uno o varios elementos de una posicion particular
// comidas.splice(7,1);
// comidas.splice(7,2);
comidas.splice(7);

document.write(`<h3>Lista de comidas, elementos: ${comidas.length}</h3>`);
document.write(`<ul>`);
for(let i = 0; i < comidas.length; i++){
    document.write(`<li>${comidas[i]}</li>`);
}
document.write(`</ul>`);

document.write(`<p>Comida de la posicion 10: ${comidas[10]} </p>`);

// modifico un valor
// comidas.splice(4,1,'Lasagna');
comidas[4] = 'Lasagna';

document.write(`<h3>Lista de comidas, elementos: ${comidas.length}</h3>`);
document.write(`<ul>`);
for(let i = 0; i < comidas.length; i++){
    document.write(`<li>${comidas[i]}</li>`);
}
document.write(`</ul>`);