// numero 1 - domingo hasta el 7 = sabado

const dia = parseInt(prompt('Ingresa el numero del día'));

// if(dia === 1){
//     document.write('Hoy es domingo')
// }else if(dia === 2){
//     document.write('Hoy es lunes')
// }else if(dia === 3){
//     document.write('Hoy es martes')
// }else if(dia === 4){
//     document.write('Hoy es miercoles')
// }

switch(dia){
    case 1:
        document.write('Hoy es domingo');
        break;
    case 2:
        document.write('Hoy es lunes');
        break;
    case 3:
        document.write('Hoy es martes');
        break;
    default:
        document.write('Ingresaste un valor invalido');
}


