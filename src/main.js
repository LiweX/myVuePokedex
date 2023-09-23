import './style.css'
import { createApp } from 'vue';
import App from './App.vue';
import store from './store'; // Importa tu archivo de configuración de Vuex

const app = createApp(App);

// Registra Vuex en la aplicación
app.use(store);

app.mount('#app');