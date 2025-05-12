<script setup>
import AppMenu from './AppMenu.vue';

if (typeof window !== 'undefined') {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.head.appendChild(script);

    window.googleTranslateElementInit = function () {
        new window.google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
    };
}
</script>

<template>
    <div class="layout-sidebar">
        <app-menu></app-menu>
        <div class="absolute bottom-0">
            <hr />
            <div id="google_translate_element"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#google_translate_element select {
    background-color: #f0f0f0 !important;
    border: 1px solid #ccc !important;
    border-radius: 4px !important;
    padding: 5px !important;
    font-size: 14px !important;
    color: #333 !important;
    outline: none !important;
    appearance: none !important;
    -webkit-appearance: none !important;
    -moz-appearance: none !important;
}

#google_translate_element select:hover {
    border-color: #888 !important;
}

#google_translate_element select:focus {
    border-color: #555 !important;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2) !important;
}
</style>
