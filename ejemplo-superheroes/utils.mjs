// Importar el módulo fs (Fil System) de Node.js
// Permite leer y escribir archivos en el sistema
import fs from "fs";

/* Creación de una clase que sirve como modelo para representear un superhéroe.
Cuando se hace new Superheroe() se crea un objeto con las propiedades */
class Superheroe {
    constructor(
        id,
        nombreSuperheroe,
        nombreReal,
        nombreSociedad,
        edad,
        planetaOrigen,
        debilidad,
        poder,
        habilidadEspecial,
        aliado,
        enemigo,
    ) {
        // Se crea un objeto con las propiedades
        this.id = id;
        this.nombreSuperheroe = nombreSuperheroe;
        this.nombreReal = nombreReal;
        this.nombreSociedad = nombreSociedad;
        this.edad = edad;
        this.planetaOrigen = planetaOrigen;
        this.debilidad = debilidad;
        this.poder = poder;
        this.habilidadEspecial = habilidadEspecial;
        this.aliado = aliado;
        this.enemigo = enemigo;
    }
}

// Función para leer y ordenar los superhéroes
/* Recibe como parámetro la ruta del archivo JSON que contiene los superhéroes y
lee el archivo en la ruta indicada */
export function leerSuperheroes(ruta) {
    /* readFileSync lee el contenido de un archivo de manera asicrona y bloqueante.
    Que sea bloqueante significa que la ejecución del hilo principal se detiene y espera a que finalice esta operación. */
    const datos = fs.readFileSync(ruta, "utf8");
    /* El metodo JSON.parse analiza la cadena de texto que se le pasa como parametro y la convierte en un array de objetos JavaScript,
    permitiendo así acceder a sus propiedades */
    const superheroesArray = JSON.parse(datos);

    // Convertir a instancias de Superhéroes
    /* El método map crea un nuevo array aplicando una función especifica a cada elemento del array, no midifica el original */
    const superHeroes = superheroesArray.map(
        /* Arrow Function que recibe como parámetro un objeto "hero" y devuelve una nueva instancia de la clase Superheroe es equivalente a hacer:
        function(hero) { return new Superheroe }*/
        (hero) =>
            new Superheroe(
                hero.id,
                hero.nombreSuperheroe,
                hero.nombreReal,
                hero.nombreSociedad,
                hero.edad,
                hero.planetaOrigen,
                hero.debilidad,
                hero.poder,
                hero.habilidadEspecial,
                hero.aliado,
                hero.enemigo,
            ),
    );

    // Ordenar Superhéroes por su nombre
    /* El método sort() ordena los elementos de una array modificando el mismno con los elementos ordenados */
    /* localCompare() comprara los strings respetando las reglas del idioma, ordena alfabéticamente por nombreSuperheroe */
    superHeroes.sort((a, b) =>
        a.nombreSuperheroe.localeCompare(b.nombreSuperheroe),
    );
    return superHeroes;
}

export function agregarSuperheroes(rutaOriginal, rutaNuevos) {
    const datosOriginales = fs.readFileSync(rutaOriginal, "utf8");
    const datosNuevos = fs.readFileSync(rutaNuevos, "utf8");

    const superheroesOriginales = JSON.parse(datosOriginales);
    const nuevosSuperheroes = JSON.parse(datosNuevos);

    // Convertir los nuevos superhéroes a instancias de Superhéroe
    const instanciaNuevos = nuevosSuperheroes.map(
        (hero) =>
            new Superheroe(
                hero.id,
                hero.nombreSuperheroe,
                hero.nombreReal,
                hero.nombreSociedad,
                hero.edad,
                hero.planetaOrigen,
                hero.debilidad,
                hero.poder,
                hero.habilidadEspecial,
                hero.aliado,
                hero.enemigo,
            ),
    );

    // Combinar listas
    const listaActualizada = [...superheroesOriginales, ...instanciaNuevos];

    // Guardar la lista actualizada
    fs.writeFileSync(
        rutaOriginal,
        JSON.stringify(listaActualizada, null, 2),
        "utf8",
    );
    console.log("Lista de superhéroes actualizada con éxito");
}
