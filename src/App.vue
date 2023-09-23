<script setup>
import Buscador from './components/Buscador.vue';
import Titulo from './components/Titulo.vue';
import FichaPokemon from './components/FichaPokemon.vue';
</script>

<template>
    <Titulo
    image-src="myVuePokedex.png"
    ></Titulo>
    <FichaPokemon></FichaPokemon>
    <Buscador></Buscador>

  
</template>

<style>
body{
  background-image: url('bg.png');
  background-repeat: repeat; /* Esto hará que la imagen se repita en forma de mosaico */
  /* Ajusta otras propiedades de fondo, como el tamaño y la posición si es necesario */
  background-size: auto; /* Puedes ajustar esto según tus necesidades */
  background-position: center; /* Puedes ajustar esto según tus necesidades */
  /* Agrega otros estilos globales según sea necesario */
}
</style>
