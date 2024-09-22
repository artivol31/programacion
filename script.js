const apiUrl = 'https://pokeapi.co/api/v2/pokemon';
let currentPage = 1;
const limit = 12; 


async function fetchPokemonData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Error en la API');
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        alert('Error al obtener los datos.');
    }
}


function renderCards(pokemonList) {
    const cardsContainer = document.getElementById('cards-container');
    cardsContainer.innerHTML = ''; 

    pokemonList.forEach(pokemon => {
        const card = document.createElement('div');
        card.classList.add('card', `type-${pokemon.types[0].type.name}`);

        const img = document.createElement('img');
        img.src = pokemon.sprites.front_default;
        img.alt = pokemon.name;

        const name = document.createElement('h3');
        name.textContent = pokemon.name;

        const type = document.createElement('p');
        type.textContent = `Tipo: ${pokemon.types[0].type.name}`;

        const level = document.createElement('p');
        level.textContent = `Nivel: ${pokemon.base_experience}`;

        card.append(img, name, type, level);
        cardsContainer.appendChild(card);
    });
}


async function loadPokemon(page = 1) {
    const offset = (page - 1) * limit;
    const url = `${apiUrl}?offset=${offset}&limit=${limit}`;
    const data = await fetchPokemonData(url);

    if (data) {
        const pokemonList = await Promise.all(data.results.map(pokemon => fetchPokemonData(pokemon.url)));
        renderCards(pokemonList);
        togglePaginationButtons(data.previous, data.next);
    }
}

function togglePaginationButtons(prevUrl, nextUrl) {
    const toggleButton = (btnId, isDisabled, action) => {
        const btn = document.getElementById(btnId);
        btn.disabled = isDisabled;
        btn.onclick = action;
    };

    toggleButton('prev-btn', !prevUrl, () => loadPokemon(--currentPage));
    toggleButton('next-btn', !nextUrl, () => loadPokemon(++currentPage));
    toggleButton('prev-btn-bottom', !prevUrl, () => loadPokemon(--currentPage));
    toggleButton('next-btn-bottom', !nextUrl, () => loadPokemon(++currentPage));
}


document.getElementById('search-btn').addEventListener('click', async () => {
    const query = document.getElementById('search-input').value.trim().toLowerCase();
    if (query) {
        const pokemon = await fetchPokemonData(`${apiUrl}/${query}`);
        if (pokemon) renderCards([pokemon]);
        else alert('Pokémon no encontrado.');
    } else {
        loadPokemon(currentPage);
    }
});


async function loadPokemonTypes() {
    const typeUrl = 'https://pokeapi.co/api/v2/type/';
    const data = await fetchPokemonData(typeUrl);

    if (data) {
        const typeDropdown = document.getElementById('type-dropdown');
        data.results.forEach(type => {
            const option = document.createElement('option');
            option.value = type.name;
            option.textContent = type.name;
            typeDropdown.appendChild(option);
        });
    }
}


document.getElementById('type-dropdown').addEventListener('change', async (event) => {
    const selectedType = event.target.value;
    if (selectedType) {
        const typeUrl = `https://pokeapi.co/api/v2/type/${selectedType}`;
        const data = await fetchPokemonData(typeUrl);

        if (data) {
            const pokemonList = await Promise.all(
                data.pokemon.slice(0, limit).map(pokeData => fetchPokemonData(pokeData.pokemon.url))
            );
            renderCards(pokemonList);
        }
    } else {
        loadPokemon(currentPage);
    }
});


document.getElementById('show-all-btn').addEventListener('click', () => loadPokemon(1));


window.onload = () => {
    loadPokemon(currentPage);
    loadPokemonTypes();
};