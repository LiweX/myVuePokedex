import { createStore } from 'vuex';

export default createStore({
  state: {
    isModalVisible: false,
    pokemonName: '',
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
    }
  },
});