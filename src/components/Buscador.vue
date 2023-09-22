<template>
  <div class="min-w-screen min-h-screen flex justify-center items-center">
    <div class="max-w-xs relative space-y-3">
      <label
        for="search"
        class="text-gray-900"
      >
        Type the name of a pokemon to search
      </label>

      <input
        type="text"
        id="search"
        v-model="searchTerm"
        placeholder="Type here..."
        class="p-3 mb-0.5 w-full border border-gray-300 rounded"
      >

      <ul
        v-if="searchPokemons.length"
        class="w-full rounded bg-white border border-gray-300 px-4 py-2 space-y-1 absolute z-10"
      >
        <li class="px-1 pt-1 pb-2 font-bold border-b border-gray-200">
          Showing {{ searchPokemons.length }} of {{ pokemons.length }} results
        </li>
        <li
            v-for="pokemon in searchPokemons"
            :key="pokemon.name"
            @click="selectPokemon(pokemon.name)"
            class="cursor-pointer hover:bg-gray-100 p-1"
        >
          {{ pokemon.name }}
        </li>
      </ul>

      <p
        v-if="selectedPokemon"
        class="text-lg pt-2 absolute"
      >
        You have selected: <span class="font-semibold">{{ selectedPokemon }}</span>
      </p>
    </div>
  </div>
</template>

<script>

import {ref, computed} from 'vue'

// URL de la API que deseas consultar
const apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0';
let pokemons = [];
// Realizar una solicitud GET a la API utilizando fetch
fetch(apiUrl)
  .then(response => {
    // Verificar si la solicitud fue exitosa (código de estado 200)
    if (!response.ok) {
      throw new Error('No se pudo obtener la información de la API');
    }
    // Parsear la respuesta JSON
    return response.json();
  })
  .then(data => {
    // El resultado de la API se almacena en la variable "data" como un objeto o array
    console.log(data);

    // Si necesitas almacenar los datos en una variable:
    pokemons = data.results; // Suponiendo que la respuesta es un array
    console.log(pokemons);
  })
  .catch(error => {
    // Manejar errores de solicitud
    console.error('Error:', error);
  });

export default {
  setup() {
    let searchTerm = ref('')

    const searchPokemons = computed(() => {
      if (searchTerm.value === '') {
        return []
      }

      let matches = 0

      return pokemons.filter(pokemon => {
        if (pokemon.name.toLowerCase().includes(searchTerm.value.toLowerCase()) && matches < 10) {
          matches++
          return pokemon
        }
      })
    });

    const selectPokemon = (pokemon) => {
      selectedPokemon.value = pokemon
      searchTerm.value = ''
    }

    let selectedPokemon = ref('')

    return {
      pokemons,
      searchTerm,
      searchPokemons,
      selectPokemon,
      selectedPokemon
    }
  }
}
</script>
