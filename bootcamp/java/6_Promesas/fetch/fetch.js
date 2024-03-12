const url = 'https://rickandmortyapi.com/api/character/';

async function cargarDatos(endPoint) {
    //fetch recibe dos parametros, endpoint y el segundo el metodo de conexion como objeto

    /*
    GET -> obtener datos
    POST -> enviar datos
    PUT -> actualizar datos
    DELETE -> Borrar datos
    CRUD Create Read Update Delete
    */
    const response = await fetch(endPoint, { method: 'GET' })
    const data = await response.json()
    console.log(data)


}
//cargar todos los personajes
//cargarDatos(url)
//carga solo el personaje 2
//cargarDatos(url + '2')
//carga pagina dos
//cargarDatos(url + '?page=2')
//filtrar por vivos y muertos
//cargarDatos(url + '?status=dead')

//-------------------------------------------
/*
<article>
            <figure>
                <img src="" alt="">
            </figure>
            <h3>Nombre personaje</h3>
            <p>Estatus: Vivo</p>
        </article> 
*/





const sectionCharacters = document.querySelector('.characters');

function pintarCharacters(lista, lugar) {
    for (let character of lista){
        const article = document.createElement('article');
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        img.src = character.image
        img.alt = charecter.name
        const h3 = document.createElement('h3')
        h3.textContent = character.name
        const p = document.createElement('p')
        p.textContent = `estado:${character.status}`

        figure.appendChild(img)
        article.append(figure, h3, p);

        lugar.appendChild(article)
    }
}


