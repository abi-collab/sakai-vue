<script setup>
// import { onBeforeUnmount, onMounted, ref } from 'vue';
import AppMenu from './AppMenu.vue';

// const isTranslateActive = ref(false);

// function checkTranslateActive() {
//     // Google sets a hash like #googtrans(en|tl) when active
//     isTranslateActive.value = window.location.hash.startsWith('#googtrans');
// }

// let comboListener = null;

// onMounted(() => {
//     if (typeof window !== 'undefined') {
//         const script = document.createElement('script');
//         script.type = 'text/javascript';
//         script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
//         document.head.appendChild(script);

//         window.googleTranslateElementInit = function () {
//             new window.google.translate.TranslateElement(
//                 {
//                     pageLanguage: 'en',
//                     includedLanguages: 'en,tl'
//                 },
//                 'google_translate_element'
//             );
//             setTimeout(() => {
//                 const combo = document.querySelector('.goog-te-combo');
//                 if (combo) {
//                     combo.classList.add('custom-google-combo');
//                     comboListener = () => {
//                         checkTranslateActive();
//                     };
//                     combo.addEventListener('change', comboListener);
//                 }
//             }, 500);
//         };

//         window.addEventListener('hashchange', checkTranslateActive);
//         checkTranslateActive();
//     }
// });

// onBeforeUnmount(() => {
//     window.removeEventListener('hashchange', checkTranslateActive);
//     const combo = document.querySelector('.goog-te-combo');
//     if (combo && comboListener) {
//         combo.removeEventListener('change', comboListener);
//     }
// });
</script>

<template>
    <div class="layout-sidebar">
        <!-- {{ isTranslateActive }} ------------------------------- -->
        <app-menu></app-menu>
        <!-- <div class="mt-16 relative md:absolute bottom-8 md:bottom-0 w-1/2">
            <div id="google_translate_element" class="p-3 flex justify-center items-center bg-gray-50 rounded-b-lg shadow-inner"></div>
            <div v-if="isTranslateActive" class="mt-2 text-green-600 text-center">Google Translate is active!</div>
        </div> -->
    </div>
</template>
