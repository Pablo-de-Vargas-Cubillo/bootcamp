const listaPokemon = document.querySelector('listaPokemon');
let url = "https://pokeapi.co/api/v2/pokemon/";

for (let i = 1; i <= 151; i++){
    fetch(url + i)
        .then((response) => response.json())
        .then(data => mostrarPokemon(data))
}
        
function mostrarPokemon(poke) {

    let tipos = poke.type.map(type => type.type.name);
    console.log(tipos)
    

    const div = document.createElement("div");
    div.classList.add("pokemon");
    div.innerHTML = `<p>#{poke.id}</p>
    <div>
        <img src="${poke.sprites.other["official-artwork"].front_default}" alt="${poke.name}">
    </div>
    <div>
        <p>#{poke.id}</p>
        <h2>${poke.name}</h2>
    </div>
    <div>
    <p>Electric</p>
    <p>fighting</p>
    </div>
    <div>
        <p>${poke.height}</p>
        <p>${poke.weight}</p>
    </div>`;
    listaPokemon.append(div)
} 
