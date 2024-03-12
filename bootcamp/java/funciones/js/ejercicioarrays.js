const listaNombres = ['Ana', 'Natalia', 'Pepe', 'Juan', 'Antonio', 'Alejandro', 'Almudena'];

// Funcion que reciba como parametro y como array una letra, muestra por consola los nombres que empiecen por esa letra.
// 1-crear funcion
// 2-¿que parametros le paso?
// 3-recorrer el array- comprobar que lo recorre bien.
// 4- Si el nombre empieza por la letra correspondiente, lo muestro por consola
// 5- Un string utiliza indices como si fuese un array

function buscanombres(array, letra) {

    for (let elemento of array) {

        if (elemento.at(0) === letra) {
            console.log(elemento)
        }
    }  
       
} 




buscanombres(listaNombres, 'P')













const listaNombre = ['Ana', 'Natalia', 'Pepe', 'Juan', 'Antonio', 'Alejandro', 'Almudena'];

// Función que reciba como parámetro un array y una letra
// Muestra por consola los nombres que empiecen por esa letra
// - Crear la función
// - ¿Qué parámetros le paso?
// - Recorrer el array - ¡¡Compruebo que lo recorro bien!!
// - SI el nombre empieza por la letra correspondiente, lo muestro por consola
// - Un String utiliza índices como si fuese un array

function buscaNombre(lista, letra) {
    for (let elemento of lista) {
        if (elemento[0] === letra) {
            console.log(elemento);
        }
    }
}

function buscarNombreV2(lista, letra) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i][0] === letra) {
            console.log(lista[i]);
        }
    }
}

buscaNombre(listaNombre, 'A');
buscaNombre(['Ana', 'Lorenzo'], 'L')
// buscaNombre(listaNombres, 'B');
// buscaNombre(listaNombres, 'Y');



