// 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.
// hola
// mundo
// hola-mundo

let fraseCompleta = "";
do{
    const palabraIngresada = prompt('Ingrese una palabra');
    // preguntar si fraseCompleta esta vacia
    if(fraseCompleta.length === 0){
        fraseCompleta = palabraIngresada
    }else{
        fraseCompleta = fraseCompleta +'-' + palabraIngresada; 
    }
    console.log(fraseCompleta)

}while(confirm('¿Desea continuar?'))
// while (true === true)
// while (true)
console.log(fraseCompleta)
document.write(`Frase ingresada: ${fraseCompleta}`)