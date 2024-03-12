/*
    Crear una función que me pida por prompt los datos de contacto de una persona
    (nombre, email, telefono)
    Con esos datos vamos a generar un objeto
    Ese objeto lo incluimos en un array
*/

const contactos = [];

function crearPersona() {
    const nombrePrompt = prompt('Dime tu nombre');
    const emailPrompt = prompt('Dime tu email');
    const telefonoPrompt = prompt('Dime tu teléfono');

    const persona = {
        nombre: nombrePrompt,
        email: emailPrompt,
        telefono: telefonoPrompt
    }

    contactos.push(persona);
}

// Función que me muestre el nombre y el email de todos los contactos del array
function mostrarContactos() {
    for (let contacto of contactos) {
        console.log(`Nombre: ${contacto.nombre}. Email: ${contacto.email}`);
    }
}


//borrar a alguien en concreto
function borrar(email){ 
    let posicion = 0;
    for(let contacto of contactos)
    {
        if(contacto.email === email)
        {
           contactos.splice(posicion, 1)
        }
        posicion++; //2
    }
}

// Crear una función que nos pida por prompt qué acción queremos llevar a cabo
// crear, ver, salir
// Función que borre un contacto (splice)

let option = "";

do {
     opcion = prompt('¿que quieres hacer, crear, ver, salir?');  

    switch (opcion.toLowerCase()) {
        case 'crear':
            crearPersona//llamaremis a la funcion crear persona
            break;  
    
        case 'ver':
            //llamaremos a la función mostrar constactosç
            mostrarContactos
            break;
        case 'salir':
            alert('hasta pronto')
            break;
        case 'eliminar':
            let email = prompt('dame el email');
            borrar(email)
            break;
        default:
            alert('opción no valida');
            break;
    }
} while (opcion !== "salir");
