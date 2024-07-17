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

//aqui agrego las funciones
const mostrarComidas = () => {
  document.write(`<h3>Lista de comidas, elementos: ${comidas.length}</h3>`);
  document.write(`<ul>`);
  for (let i = 0; i < comidas.length; i++) {
    document.write(`<li>${comidas[i]}</li>`);
  }
  document.write(`</ul>`);
};

const mostrarArray = (arreglo, titulo) => {
  document.write(`<h3>${titulo}, elementos: ${arreglo.length}</h3>`);
  document.write(`<ol>`);
  arreglo.map((item, posicion) =>
    document.write(`<li>${item} - posicion del array:${posicion}</li>`)
  );
  document.write(`</ol>`);
};

document.write(`<p>El array de comidas tiene ${comidas.length} elementos</p>`);
document.write(`<p>La primer comida es: ${comidas[0]} </p>`);
document.write(`<p>La segunda comida es: ${comidas[1]} </p>`);
document.write(`<p>Las comidas son: ${comidas} </p>`);
console.log(comidas);

//mostrar los elementos del array como una lista
mostrarComidas();

// modificar elementos en un array
comidas[2] = "locro";
mostrarComidas();

// agregar elementos en un array
// al principio
comidas.unshift("tira de asado", "guiso");
mostrarComidas();

//agregar elementos al final
comidas.push("ravioles", "sorrentinos");
mostrarComidas();

// agregar un elemento en una posicion particular del array
comidas.splice(6, 0, "fideos");
mostrarComidas();

//borrar elementos de un array
//borrar el primer elemento
comidas.shift();
mostrarComidas();

//borrar el ultimo elemento
comidas.pop();
mostrarComidas();

//borrar uno o varios elementos de una posicion particular
// comidas.splice(7,1);
// comidas.splice(7,2);
comidas.splice(7);
mostrarComidas();

document.write(`<p>Comida de la posicion 10: ${comidas[10]} </p>`);

// modifico un valor
// comidas.splice(4,1,'Lasagna');
comidas[4] = "Lasagna";
mostrarComidas();

//buscar si existe el item pizza

const existePizza = comidas.find((comida) => comida === "pizza");
const existeGuiso = comidas.find((comida) => comida.includes("guiso"));
const existeTamales = comidas.find((comida) => comida === "tamales");

console.log(existePizza);
console.log(existeGuiso);
console.log(existeTamales);
// if(existePizza){
//   document.write(`<p>Existe el elemento Pizza: Existe</p>`)
// }else{
//   document.write(`<p>Existe el elemento Pizza: no existe</p>`)
// }

// operador ternario ? :
// (condicion logica)? el codigo cuando se cumple : el codigo cuando no se cumple
(existePizza)  ? document.write(`<p>Existe el elemento Pizza: Existe</p>`)  : document.write(`<p>Existe el elemento Pizza: no existe</p>`);
existeTamales
  ? document.write(`<p>Existe el elemento Tamales: Existe</p>`)
  : document.write(`<p>Existe el elemento Tamales: no existe</p>`);

// if(existeTamales){
//   document.write(`<p>Existe el elemento Tamales: Existe</p>`)
// }else{
//   document.write(`<p>Existe el elemento Tamales: no existe</p>`)
// }

const prueba = "hola mundo";
console.log(prueba.includes("hola"));
console.log(prueba.includes("javascript"));

comidas.push("pizza común", "pizza especial");
mostrarComidas();

//mostrar todas las pizzas
const listaPizzas = comidas.filter((alimento) => alimento.includes("pizza"));
console.log(listaPizzas);

//implementar o usar la funcion que muestra arrays
mostrarArray(listaPizzas, "Lista de pizzas");
mostrarArray(comidas, "Lista de comidas");

// foreach
listaPizzas.forEach((item) => console.log("item foreach - " + item));
