//funciones declarativas
//funcion sin parametros
function saludar(){
    //todo el codigo que quiero agregar para saludar
    document.write('<p>Hola a mundo 🖐</p>')
}
//funcion con parametro
function saludarPersona(nombre, apellido){
    console.log(nombre);
    console.log(apellido);
    document.write(`<p>Hola ${nombre}, ${apellido} 🖐</p>`)
}

// function saludarNuevaPersona(nombre, apellido){
//     console.log(nombre);
//     console.log(apellido);
//     // const nombreCompleto = nombre +', '+apellido;
//     return nombre +', '+apellido;
// }

// arrow Functions
const saludarNuevaPersona = (nombre, apellido) => nombre +', '+apellido

//invocar o llamar a una funcion
saludar();
document.write('<p>tareas varias</p>');
saludar();

const nombre = prompt('Ingresa tu nombre');
const apellido = prompt('Ingresa tu apellido');

saludarPersona(nombre,apellido);
saludarPersona('Felicitas','Ralle');
saludarPersona('Elian', 20);

const nombreCompleto = saludarNuevaPersona('Luis','Avila');
document.write(`<p>Otra prueba de nombre ${nombreCompleto} </p>`)
document.write(`<p>Otra prueba de nombre ${saludarNuevaPersona('Fabricio', 'Neme')} </p>`)