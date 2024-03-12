const nombres = ['lucia', 'rocio', 'manuel', 'lorenzo','rodolfo'];
console.log(nombres)

//Agregamos elementos al array

const valor1 = nombres.pop();  //rodolfo
const valor2 = nombres.pop();  //lorenzo


nombres.unshift('ricardo')

//funcion .shift('')

nombres.shift(';');
    

//funcion .at(numero)___
//                     |
//                     v
console.log(nombres.at(3));

//splice

nombres.splice(2, 1);
console.log(nombres);



   