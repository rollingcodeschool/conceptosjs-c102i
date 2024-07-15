//funciones declarativas
//funcion sin parametros
function saludar(){
    //todo el codigo que quiero agregar para saludar
    document.write('<p>Hola a mundo 🖐</p>')
}

function saludarPersona(nombre, apellido){
    console.log(nombre);
    console.log(apellido);
    const nombreCompleto = nombre +', '+apellido;
    document.write(`<p>Hola ${nombreCompleto} 🖐</p>`)
}

//invocar o llamar a una funcion
saludar();
document.write('<p>tareas varias</p>');
saludar();

const nombre = prompt('Ingresa tu nombre');
const apellido = prompt('Ingresa tu apellido');

saludarPersona(nombre,apellido);
saludarPersona('Felicitas','Ralle');
saludarPersona('Elian', 20);

document.write(`<p>Otra prueba de nombre ${nombreCompleto} </p>`)