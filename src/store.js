import { createStore } from 'vuex';



export default createStore({
  state: {
    isModalVisible: false,
    pokemonName: '',
    pokemonUrl: '',
    abilities: [{name:''}],
    stats: {hp:'',atk:'',def:'',spd:'',w:'',h:''},
    imgUrl: '',

  },
  mutations: {
    showModal(state) {
      state.isModalVisible = true;
    },
    closeModal(state) {
      state.isModalVisible = false;
    },
    setPokemonName(state, newName){
        state.pokemonName = newName;
    },
    setPokemonUrl(state, newUrl){
        state.pokemonUrl = newUrl
    },
    getPokemonData(state){
        fetch(state.pokemonUrl)
        .then(response => {
            // Verificar si la solicitud fue exitosa (código de estado 200)
            if (!response.ok) {
            throw new Error('No se pudo obtener la información de la API');
            }
            // Parsear la respuesta JSON
            return response.json();
        })
        .then(data => {
            function getBaseStatByName(statName) {
                for (const stat of data.stats) {
                  if (stat.stat.name === statName) {
                    return stat.base_stat;
                  }
                }
                // Retornar un valor predeterminado o manejar el caso en el que no se encuentra el nombre de estadística.
                return null;
              }
            // El resultado de la API se almacena en la variable "data" como un objeto o array
            state.stats.w = data.weight
            state.stats.h = data.height
            state.stats.hp = getBaseStatByName('hp')
            state.stats.atk = getBaseStatByName('attack')
            state.stats.def = getBaseStatByName('defense')
            state.stats.spd = getBaseStatByName('speed')
            state.imgUrl = data.sprites.other.dream_world.front_default
            state.abilities = data.abilities.map(ability => ({
                name: ability.ability.name
              }));
            console.log(state);

        })
        .catch(error => {
            // Manejar errores de solicitud
            console.error('Error:', error);
        });
    },
    clearData(state){
        state.stats = {}
        state.pokemonUrl = ''
        state.imageUrl = ''
        state.abilities = {}
    }
  },
});