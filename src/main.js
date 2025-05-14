import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import Aura from '@primeuix/themes/aura';
import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';

import '@/assets/styles.scss';
import VueImageZoomer from 'vue-image-zoomer';
import 'vue-image-zoomer/dist/style.css';

const app = createApp(App);

app.use(VueImageZoomer);
app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: '.app-dark'
        }
    }
});
app.use(ToastService);
app.use(ConfirmationService);
// app.use(Vue3Lottie, {
//     name: 'Lottie',
//     defaultOptions: {
//         loop: true,
//         autoplay: true
//     }
// });

app.mount('#app');
