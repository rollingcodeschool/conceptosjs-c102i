// numero 1 - domingo hasta el 7 = sabado
// if(dia === 1){
//     document.write('Hoy es domingo')
// }else if(dia === 2){
//     document.write('Hoy es lunes')
// }else if(dia === 3){
//     document.write('Hoy es martes')
// }else if(dia === 4){
//     document.write('Hoy es miercoles')
// }

do {
  let dia = prompt("Ingresa el numero del día: 1- Domingo, 2- Lunes, 3-Martes");
  console.log(new Date());
  dia = dia.toLowerCase(); //aqui transformo a minuscula
  // dia = dia.toUpperCase(); //aqui transformo a mayuscula

  switch (dia) {
    case "1":
    case "domingo":
      document.write("Hoy es domingo");
      console.log("Hoy es domingo")
      break;
    case "2":
      document.write("Hoy es lunes");
      console.log("Hoy es lunes")
    case "3":
      document.write("Hoy es martes");
      console.log("Hoy es martes")
      break;
    default:
      document.write("Ingresaste un valor invalido");
  }
} while (confirm("¿Quieres seleccionar otra opción?"));
