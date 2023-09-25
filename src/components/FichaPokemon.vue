<script setup>
import { Modal } from 'flowbite-vue'
import { ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const isShowModal = ref(false);

// function showModal() {
//   store.commit('showModal');
//   isShowModal.value = true;
// }

function closeModal() {
    store.commit('clearData');
    store.commit('closeModal');
    isShowModal.value = false;
}

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

</script>
<template>
    <Modal persistent :size="size" v-if="store.state.isModalVisible" @close="closeModal">
      <template #header>
        <div class="flex items-center text-lg">
          {{capitalizeFirstLetter(store.state.pokemonName)}}
        </div>
      </template>
      <template #body>
        <div class="flex">
            <!-- Mitad Izquierda -->
            <div class="w-1/2 p-4">
            <!-- Contenido de la mitad izquierda -->
            <img :src=store.state.imgUrl alt="Pokemon image" width="350" height="100"/>
            </div>
            
            <!-- Mitad Derecha -->
            <div class="w-1/2 p-4">
            <div class="h-1/2 flex flex-col justify-center items-center">
                <!-- Parte Superior de la Mitad Derecha -->
                <div>Stats:</div>
                <div>HP: {{store.state.stats.hp}}</div>
                <div>Attack: {{store.state.stats.atk}}</div>
                <div>Defense: {{store.state.stats.def}}</div>
                <div>Speed: {{store.state.stats.spd}}</div>
                <div>Height: {{store.state.stats.h}} Dm</div>
                <div>Weght: {{store.state.stats.w}} Hg</div>
            </div>
            <div class="h-1/2 flex flex-col justify-center items-center">
                <!-- Parte Inferior de la Mitad Derecha -->
                <div>Abilities:</div>
                <div v-for="(elemento, index) in store.state.abilities" :key="index">
                    {{ elemento.name }}
                </div>
            </div>
            </div>
        </div>
      </template>
      <template #footer>
        <div class="flex float-right">
          <button @click="closeModal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Ok
          </button>
        </div>
      </template>
    </Modal>
</template>