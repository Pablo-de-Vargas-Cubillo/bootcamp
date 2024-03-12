////for off, for &&,for each:
//items.forEach(item =>
//    document.write(`<p>${inde}</p>`));
////
////for each sirve para recorre arrays
////coge un elemento en cada iteracion
//item.forEach(item => document.write(`<p>${i} {item.name} {item.precio}</p>`))

////ultima funcion de array:
////map es una funcion de array que aplica a cada elemento del array una operación
//const numeros = [1, 2, 3, 4, 5]
////quiero un array con los dobles del array
//const colt = numeros.map(numero => numero * 2)
//console.log(dobles)

const personas = [
    { nombre: 'pepe', apellidos: 'villuela' },
    { nombre: 'pepe', apellidos: 'villuela' },
    { nombre: 'pepe', apellidos: 'villuela' }
]
const nombre completo = personas.map(persona=>`${persona.nombre}${persona.apellidos}`)


