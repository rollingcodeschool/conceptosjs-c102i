// estructuras repetitivas

//estructura while

/* 
while(condicion logica){
    aqui agrego todo el codigo que quiero repetir varias veces
    agregar un codigo que haga que la condicion logica se deje de cumplir
}
*/
let renglon = 11;

while (renglon <= 10) {
  document.write(`<p>Renglon número ${renglon}</p>`);
  renglon++; //  renglon = renglon + 1;
}

//estructura do-while

/*
do{
    aqui agrego todo el codigo que quiero repetir varias veces
    agregar un codigo que haga que la condicion logica se deje de cumplir
}while(condicion logica)

*/

let linea = 100;

do{
    document.write(`<p>Renglon número ${linea}</p>`);
    linea++;
}while(linea <=5)

//estructura for
/*
for(let variable= 1; variable<10 ; variable++){
    aqui agrego todo el codigo que quiero repetir varias veces
}
*/

for(let contador =10; contador > 0; contador--){
    document.write(`<p>Cuenta regresiva ${contador}</p>`);
    
}
