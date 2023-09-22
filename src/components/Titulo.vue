<template>
    <div class="image-container flex justify-center">
      <img :src="imageSrc" alt="Titulo" class="transparent-image" :style="{ top: topPosition, left: leftPosition }" />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      imageSrc: String,
      topPosition: String,
      leftPosition: String,
    },
  };
  </script>
  
  <style scoped>
  .image-container {
    position: relative;
  }
  
  .transparent-image {
    position: absolute;
  }
  </style>