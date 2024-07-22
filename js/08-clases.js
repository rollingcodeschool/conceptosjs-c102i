// nombre, tipo, evoluciones, numPokeDex
// ataque
class Pokemon {
  //declarar propiedades privas
  #numPokeDex;
  //creo las propiedades de mis objetos
  constructor(nombreParam, tipo, evoluciones, numPokeDex) {
    //nombrePropiedad = nombreParametro
    this.nombre = nombreParam;
    this._tipo = tipo;
    this.evoluciones = evoluciones;
    this.#numPokeDex = numPokeDex;
    this.estado = true;
  }
  //propiedades computadas get y set
  get numPokeDex() {
    return this.#numPokeDex;
  }

  set numPokeDex(nuevoNumPokeDex) {
    if (nuevoNumPokeDex > 0 && nuevoNumPokeDex <= 300) {
      this.#numPokeDex = nuevoNumPokeDex;
    } else {
      alert("numero invalido");
    }
  }

  //agregar los metodos
  mostrarDatos() {
    document.write(`<ul>
        <li>Nombre: ${this.nombre}</li>
        <li>Tipo: ${this._tipo}</li>
        <li>Pokedex: ${this.numPokeDex}</li>
        <li>Evoluciones: ${this.evoluciones}</li>
        <li>Estado: ${this.estado ? "habilitado" : "deshabilitado"} 🚚</li>
        </ul>`);
  }
}

//nueva clase que hereda de pokemon
class PokemonLegendario extends Pokemon{
    #ataqueEspecial;
    constructor(nombreParam, tipo, evoluciones, numPokeDex, ataqueEspecial, nivel){
        super(nombreParam, tipo,evoluciones,numPokeDex);
        this.#ataqueEspecial = ataqueEspecial;
        this.nivel = nivel;
    }

    get ataqueEspecial(){
        return this.#ataqueEspecial;
    }

    set ataqueEspecial(nuevoAtaque){
        this.#ataqueEspecial = nuevoAtaque;
    }

    //agregar todos los metodos nuevos.

    mostrarDatosLegendario(){

    }

    mostrarDatos(){
        document.write(`<ul>
            <li>Nombre: ${this.nombre}</li>
            <li>Tipo: ${this._tipo}</li>
            <li>Pokedex: ${this.numPokeDex}</li>
            <li>Evoluciones: ${this.evoluciones}</li>
            <li>Estado: ${this.estado ? "habilitado" : "deshabilitado"}</li>
            <li>Ataque especial: ${this.ataqueEspecial}</li>
            <li>Nivel: ${this.nivel}</li>
            </ul>`);
    }
}

//Instanciar o crear un objeto de la clase pokemon

const pikachu = new Pokemon(
  "Pikachu",
  "Electrico",
  ["Pichu", "pikachu", "Raichu"],
  25
);
console.log(pikachu);

const squirtle = new Pokemon(
  "Squirtle",
  "Agua",
  ["Squirtle", "wartotle", "Blastoise"],
  7
);
console.log(squirtle);

pikachu._tipo = "Agua";
console.log(pikachu);

document.write(
  `<p>Pokemon: ${pikachu.nombre}, Num. pokedex:${pikachu.numPokeDex}</p>`
);
pikachu.numPokeDex = 50;
document.write(
  `<p>Pokemon: ${pikachu.nombre}, Num. pokedex:${pikachu.numPokeDex}</p>`
);

squirtle.mostrarDatos();
pikachu.estado = false;
pikachu.mostrarDatos();

const articuno = new PokemonLegendario('Articuno', 'Hielo', [],144,'congelar',100); 

console.log(articuno)
articuno.mostrarDatos();