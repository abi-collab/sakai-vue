<script setup>
import AppMenu from './AppMenu.vue';

import { onMounted } from 'vue';

onMounted(() => {
    if (typeof window !== 'undefined') {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        document.head.appendChild(script);

        window.googleTranslateElementInit = function () {
            new window.google.translate.TranslateElement(
                {
                    pageLanguage: 'en',
                    includedLanguages: 'en,tl' // Only English and Filipino
                },
                'google_translate_element'
            );
            // Wait for the widget to render, then add a custom class for styling
            setTimeout(() => {
                const combo = document.querySelector('.goog-te-combo');
                if (combo) {
                    combo.classList.add('custom-google-combo');
                }
            }, 500);
        };
    }
});
</script>

<template>
    <div class="layout-sidebar">
        <app-menu></app-menu>
        <div class="absolute bottom-0">
            <div id="google_translate_element" class="p-3 flex justify-center items-center bg-gray-50 rounded-b-lg shadow-inner">
                <!-- The Google Translate widget will render the select here -->
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
/* Custom styles for the Google Translate select input */
#google_translate_element {
    background-color: #f9fafb !important;
    border: 1px solid #d1d5db !important;
    border-radius: 6px !important;
    padding: 6px 12px !important;
    font-size: 15px !important;
    color: #374151 !important;
    outline: none !important;
    transition: border-color 0.2s;
    // display: none !important;
}
#google_translate_element:hover {
    border-color: #6366f1 !important;
}
#google_translate_element:focus {
    border-color: #2563eb !important;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2) !important;
}
</style>
