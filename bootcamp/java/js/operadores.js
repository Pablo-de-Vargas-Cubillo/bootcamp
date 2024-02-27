const num1 = 11;
const num2 = 5;
console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)
console.log(num1 % num2)

//comparacion
let numeroa = prompt('dameun número');
let numerob = prompt('Dame otro número');

//conversion de tipo
numeroa = Number(numeroa)
numerob = Number(numerob)

console.log(typeof numeroa, typeof numerob);
console.log(numeroa > numerob);
console.log(numeroa < numerob);
console.log(numeroa >= numerob);
//console.log(numeroa = numerob); ESTO ESTA MAL
console.log(numeroa == numerob); //ESTO SI ES CORRECTO
console.log(2 == '2');//NOS DEVUELVE TRUE

//operadores lógicos
//comparamos valores boolean
//AND
console.log(true && true);

/*pedir por prompt una edad
Comprobar si la edad recibida esta entre 18 y 65
*/
const edad = Number(prompt('Dime tu edad'));
const mayor18 = edad >= 18;
const menor65 = edad <= 65;
let resultado = mayor18 && menor65;
console.log(resultado);//  = console.log(edad>=18 && edad<=65)
console.log(edad < 18 || edad > 65);
