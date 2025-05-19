<script setup>
import bgFlat from '@/assets/flat/38549135_8638026.svg';
import { onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

onMounted(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

watch(
    () => router.currentRoute.value.fullPath,
    () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
);
</script>

<template>
    <div>
        <router-view />
    </div>
    <img :src="bgFlat" alt="Background" class="absolute top-16 left-0 w-full h-full object-cover opacity-5" style="z-index: -1" />
</template>

<style scoped></style>
