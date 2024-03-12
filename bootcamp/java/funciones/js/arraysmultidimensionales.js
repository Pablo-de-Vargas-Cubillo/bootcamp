//arrays de arrays

const ropa = ['camiseta', 'sudadera', 'calcetines', 'gorro', 'bufanda', 'abrigo']//\
const marcascasual = ['h&m', 'mango', 'bimba y lola', 'lacoste']                 // | Arrays "hijos"
const marcasdeportivas = ['nike', 'fila', 'adidas', 'hummer']                  ///

const tiposdemarcas = [ropa, marcascasual, marcasdeportivas];   //Array "padre"
let marca = ["ROPA" , "CASUAL","DEPORTIVAS"]

//console.log(tiposdemarcas[1])// saldria h&m mango, bimba y lola, y lacoste
//console.log(tiposdemarcas[1] [3])// marcascasual, bimba y lola

for (let i = 0; i < tiposdemarcas.length; i++) {
    console.log(marca[i])
        for (let j = 0; j < tiposdemarcas[i].length; j++) {
            console.log(tiposdemarcas[i][j])
 
    }
}

// for-of
//mostrar por consola cada una de las posiciones del array de ropa

//sintaxsis -- for(creaciondevariable of array)
//for (let rom of tiposdemarcas) {
  //  for (let trom of rom) {
    //    console.log(trom)
    //}
   //}

