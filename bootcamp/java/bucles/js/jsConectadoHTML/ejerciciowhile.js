let saldo = 300

// opciones: sacar dinero, ingresar, ver saldo, salir
let option = '';

while (option !== 'salir') {
    option = prompt('Quieres sacar dinero, ingresarlo, comprobar saldo o salir')
    switch (option) {
        case 'sacar':
            const remove = Number(prompt('¿Cuánto dinero quieres sacar?')); 
            if(remove > saldo){alert('NO TIENES SALDO SUFICIENTE')}
                
            saldo = saldo - remove;
            break;
        
        case 'ingresar':
            removeadd = Number(prompt('¿Cuánto quieres ingresar?'));
            saldo = saldo + removeadd;
            break;
        
        case 'saldo':
            alert(`la cantidad de dinero que tienes es ${saldo}`)
            break;
        
        case 'salir':
            alert('hasta pronto');
            break;
        default:
            alert('Opción no contemplada')
    }
}