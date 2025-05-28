<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import AppMenu from './AppMenu.vue';

const isTranslateActive = ref(false);

function checkTranslateActive() {
    // Google sets a hash like #googtrans(en|tl) when active
    isTranslateActive.value = window.location.hash.startsWith('#googtrans');
}

let comboListener = null;

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
                    includedLanguages: 'en,tl'
                },
                'google_translate_element'
            );
            setTimeout(() => {
                const combo = document.querySelector('.goog-te-combo');
                if (combo) {
                    combo.classList.add('custom-google-combo');
                    comboListener = () => {
                        checkTranslateActive();
                    };
                    combo.addEventListener('change', comboListener);
                }
            }, 500);
        };

        window.addEventListener('hashchange', checkTranslateActive);
        checkTranslateActive();
    }
});

onBeforeUnmount(() => {
    window.removeEventListener('hashchange', checkTranslateActive);
    const combo = document.querySelector('.goog-te-combo');
    if (combo && comboListener) {
        combo.removeEventListener('change', comboListener);
    }
});
</script>

<template>
    <div class="layout-sidebar">
        <!-- {{ isTranslateActive }} ------------------------------- -->
        <app-menu></app-menu>

        <ul class="layout-menu">
            <li class="mt-8">
                <details>
                    <summary><b>Change Language</b></summary>
                    <ul>
                        <li class="w-full">
                            <div id="google_translate_element" class="p-4"></div>
                        </li>
                    </ul>
                </details>
            </li>
        </ul>
    </div>
</template>

<style scoped>
/* Style the Google Translate select input */
/* .custom-google-combo {
    padding: 0.5rem 1.5rem 0.5rem 0.75rem;
    border-radius: 0.375rem;
    border: 1px solid #d1d5db;
    background-color: #fff;
    color: #374151;
    font-size: 1rem;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    outline: none;
    transition: border-color 0.2s;
    margin-left: 0.5rem;
}
.custom-google-combo:focus {
    border-color: #6366f1;
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
} */
/* .goog-te-banner-frame.skiptranslate,
body > .goog-te-spinner-pos,
body > .goog-te-banner-frame,
.goog-logo-link,
.goog-te-gadget span {
    display: none !important;
}
#google_translate_element .skiptranslate {
    display: none !important;
} */
</style>
