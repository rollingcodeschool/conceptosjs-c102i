// Escribe un programa que pida una frase y escriba las vocales que aparecen

let frase = prompt('Ingrese una frase de 4 caracteres');

console.log(frase.length)
// hola HOla HoLa
// argentina
console.log(frase.charAt(0)) 
//preguntar si cada caracter es una vocal
console.log(frase.toLowerCase())
frase = frase.toLowerCase(); //transformo mi frase a minusculas
if( frase.charAt(0) === 'a' || frase.charAt(0) === 'e' || frase.charAt(0) === 'i' || frase.charAt(0) === 'o' || frase.charAt(0) === 'u' || frase.charAt(0) === 'á' ){
    document.write(frase.charAt(0))
}
if( frase.charAt(1) === 'a' || frase.charAt(1) === 'e' || frase.charAt(1) === 'i' || frase.charAt(1) === 'o' || frase.charAt(1) === 'u'){
    document.write(frase.charAt(1))
}
if( frase.charAt(2) === 'a' || frase.charAt(2) === 'e' || frase.charAt(2) === 'i' || frase.charAt(2) === 'o' || frase.charAt(2) === 'u'){
    document.write(frase.charAt(2))
}
if( frase.charAt(3) === 'a' || frase.charAt(3) === 'e' || frase.charAt(3) === 'i' || frase.charAt(3) === 'o' || frase.charAt(3) === 'u'){
    document.write(frase.charAt(3))
}