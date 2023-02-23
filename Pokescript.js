const fetchpokemon = () => {
    const getPokemon = id => `https://pokeapi.co/api/v2/pokemon/${id}`
    const pokemonpromises = []
    for (let i = 1; i <= 647; i++) {
        pokemonpromises.push(fetch(getPokemon(i)).then(response => response.json()))
    }
    Promise.all(pokemonpromises)
    .then(pokemons => {
        const pokelista = pokemons.reduce((accumulator, pokemons) => {
            accumulator += `
            <div class="card">
                <img class="telinha" src="./pokedeximg/telapokedex1.png" alt="">
                <img class="pokemonimg" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemons.id}.gif" alt="">
                <span class="pname">${pokemons.name}</span>
                <div class="tipo"><span>${pokemons.types.map(typeInfo => typeInfo.type.name).join(' | ')}</span></div>
                <span class="pnumber">#${pokemons.id}</span>
            </div>            
            `
            return accumulator
        },'')
        const main = document.querySelector('#main')
        main.innerHTML = pokelista   
    })
}
fetchpokemon();



