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
        <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
        </p>
        <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
        </p>
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