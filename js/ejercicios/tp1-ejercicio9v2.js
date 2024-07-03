// Escribe un programa que pida una frase y escriba las vocales que aparecen

let frase = prompt('Ingrese una frase');

console.log(frase.length)
// hola HOla HoLa
// argentina
console.log(frase.charAt(0)) 
//preguntar si cada caracter es una vocal
console.log(frase.toLowerCase())
frase = frase.toLowerCase(); //transformo mi frase a minusculas

for(let i = 0; i < frase.length; i++){
    if( frase.charAt(i) === 'a' || frase.charAt(i) === 'e' || frase.charAt(i) === 'i' || frase.charAt(i) === 'o' || frase.charAt(i) === 'u' || frase.charAt(i) === 'á' ){
        document.write(frase.charAt(i))
    }
}



