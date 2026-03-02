// Importamos la función leerSuperheroes desde utils.mjs
import { agregarSuperheroes, leerSuperheroes } from "./utils.mjs";

const archivoOriginal = "./ejemplo-superheroes/superheroes.txt";
const archivoNuevos = "./ejemplo-superheroes/agregarSuperheroes.txt";

// Agregar los nuevos superhéroes
agregarSuperheroes(archivoOriginal, archivoNuevos);

// Leer y mostrar la lista de superhéroes ordenada
const superHeroes = leerSuperheroes("./ejemplo-superheroes/superheroes.txt");
console.log("Superhéroes ordenados:");
console.log(superHeroes);
