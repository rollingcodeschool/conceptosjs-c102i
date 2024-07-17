//declarar o crear un objeto con notacion literal
const pelicula = {
    // propiedades=> clave: valor 
    titulo: 'Bad Boys 4', 
    genero: 'Acción',
    director: 'Adil El Arbi, Bilall Fallah',
    reparto: ['Will Smith', 'Martin Lawrence', 'Vanessa Hudgens'],
    estado: true,
    duracion: 115,
    //metodos
    play: function (){
        document.write('<p>... comenzando pelicula 🎦 </p>')
    },
    stop: ()=>{
        document.write('<p>Se detuvo la peli </p>')
    }
}

//mostrar el objeto
console.log(pelicula);
document.write(`<p>Titulo: ${pelicula.titulo}</p>`);
document.write(`<p>Duración en min: ${pelicula.duracion}</p>`);
document.write(`<p>Género: ${pelicula['genero']}</p>`);

//modificar el objeto
pelicula.duracion = 120;
document.write(`<p>Duración en min: ${pelicula.duracion}</p>`);

//agregar una propiedad nuevo
pelicula.origen = 'USA';
console.log(pelicula)

//borrar una propiedad de un objeto
delete pelicula.genero;
console.log(pelicula)

//usar un metodo
pelicula.play();
pelicula.play();
pelicula.play();
pelicula.play();
pelicula.play();
pelicula.stop();