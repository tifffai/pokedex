const renderPokemon = (pokemon) => {
    const list = document.querySelector('#pokemon-list');
    pokemon.forEach((poke, index) => {
        console.log(poke);
        const panel = `
        <div>
            <a href="poke-info.html?${index + 1}">
                <p>${poke.name}</p>
            </a>
        </div>
        `
        list.insertAdjacentHTML('beforeend', panel)
    })
    console.log(list);
}


// console.log(list);
const url = 'https://pokeapi.co/api/v2/pokemon/';
fetch(url)
// const response = fetch(url)
// console.log(response)
    .then((resp) => resp.json()) //Returns a promise 
    .then(json =>  {
        const actualPokemon = json.results.slice(0, 151);
        // console.log(actualPokemon); //To check and see what type of data we are working with and make sure we are retrieving exactly what we want
        // const actualPokemon = json.results.slice(0, 151)[5].name; //Example of pulling out a specific data (if you go lower than 2 levels best to split them up)
        // renderPokemon(json)
        renderPokemon(actualPokemon);
    }) 
    // .then(json => renderPokemon(json)) //reminds us we converted raw the response into a json representation & hen there is only 1 param then do not need bracket example
    .catch((error) => console.error(error)) //catches Promise that did not work and console logs the error in red for an exception to control how the users see the error message. If you want multiple error catches then open up the {} to list all the responses. NOTE: have the .catch at the end after all the .then codes
    

// const sum = (x, y) => x + y; // all declared on one line and implicitly returns whats on the right of the arrows & when there is only 1 param then do not need brackets



///// Worked for Lili
// const list = document.querySelector('#pokemonList')
// console.log(list)

// list.innerHTML = `<p>hello</p>`

// const url = 'https://pokeapi.co/api/v2/pokemon/'

// fetch(url)
//    .then(resp => resp.json())
//    .then(json => console.log(json))