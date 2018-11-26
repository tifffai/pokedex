// we're going to be making a request to the pokeapi but getting info on just one of them.
const renderPokemon = (poke) => {
    const panel = document.querySelector('#pokeInfo')
    console.log(poke)

    const pokeInfo = `
        <h1>${poke.id}: ${poke.name.toUpperCase()}</h1>
        <p>Weight: ${poke.weight} | Height: ${poke.height}</p>
        <img src="${poke.sprites.front_default}" style="width:200px"/>
        <img src="${poke.sprites.back_default}" style="width:200px"/><br>
        <p>Abilities:</p> 
        <ul id="ability"></ul>
        <p>Moves: </p>
        <ul id="moves"></ul>
        <a href="/index.html">back</a>
    `

    panel.insertAdjacentHTML('beforeend', pokeInfo)

    const pArray = pokeAbility(poke)
    pArray.forEach((ability) => {
        const abilityUl = document.querySelector('#ability')
        abilityUl.appendChild(ability)
    })
    
    const mArray = pokeMoves(poke)
    mArray.forEach((move) => {
        const moveUl= document.querySelector('#moves')
        moveUl.appendChild(move)
    })
}

function goBack() {
    window.history.back();
}

// const makeLi = (list, values) =>{
//     const array = []
//     list.forEach(item => {
//         const li = document.createElement('li')
//         li.innerText = item.values
//         array.push(li)
//     })
//     return array
// }

const pokeMoves = (poke) => {
    const moveArray = []
    poke.moves.forEach(move => {
        const li = document.createElement('li')
        li.innerText = move.move.name
        moveArray.push(li)
    })
    return moveArray
}

const pokeAbility = (poke) => {
    const abilityPArray = []
    poke.abilities.forEach(ability => {
        const li = document.createElement('li')
        li.innerText = ability.ability.name
        abilityPArray.push(li)
    })
    return abilityPArray
}


const getId = () => {
    const queryParams = window.location.search;
    const id = queryParams.substr(1); //substring takes from that specified first number till the end of the length
    // console.log(window.location)
    return id;
}

const fetchInfo = () => {
    const id = getId();
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`
    fetch(url)
        .then(resp => resp.json())
        .then(json => renderPokemon(json))
        .catch(error => console.error(error));
        
}

fetchInfo();

