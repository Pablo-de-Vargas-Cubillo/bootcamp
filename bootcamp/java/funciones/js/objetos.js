//arrays asociativos |diccionarios| objetos
// Definir estructuras que asocien claves a valores
const producto = {
    nombre: 'leche',
    precio: 2,
    departamento: 'lacteos',
    disponible: true
};

console.log(producto);

// Recupero valores
// Opcion 1
console.log(producto['nombre']);

//Opcion 2
console.log(producto.disponible)

//modificación
producto.precio = 3.23;

producto['departamento'] = 'hogar';

producto.stock = 100;

console.log(producto)

//for-in
for (clave in producto) {
    console.log(producto[clave]);
}