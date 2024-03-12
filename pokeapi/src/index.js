// 1. IMPORTAR LIBRERIAS O VARIABLES EXTERNAS
const express = require('express'); // esto es un import (nos traemos código de fuera del archivo)
const { bikeRouter } = require('./src/routes/bike.routes');

// 2. CONFIGURACIÓN DE LA APLICACIÓN
const PORT = 3000;

const app = express();



// 3. ENDPOINTS


app.get('/', (request, response) => {
    response.status(200).json({
        status: 200,
        message: "Bienvenido a mi app"
    });
});

app.use('/bike', bikeRouter);


// 4. MANEJO DE ERRORES

// 5. FUNCIÓN DE INICIO

app.listen(PORT, () => {
    console.log(`app running in port ${PORT}`);
});