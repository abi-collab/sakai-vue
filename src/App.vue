<script setup>
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
    <!-- <div class="bg"></div>
    <div class="bg bg2"></div>
    <div class="bg bg3"></div> -->
    <div>
        <router-view />
    </div>
    <!-- <img :src="bgFlat" alt="Background" class="absolute top-16 left-0 w-full h-full object-cover opacity-5" style="z-index: -1" /> -->
</template>

<!-- <style scoped>
.bg {
    animation: slide 3s ease-in-out infinite alternate;
    /* background-image: linear-gradient(-60deg, rgba(255, 255, 255, 0.7) 50%, rgba(250, 250, 250, 0.7) 50%); */
    bottom: 0;
    left: -50%;
    opacity: 0.85;
    position: fixed;
    right: -50%;
    top: 0;
    z-index: -1;
}

.bg2 {
    animation-direction: alternate-reverse;
    animation-duration: 4s;
    background-image: linear-gradient(-60deg, rgba(245, 245, 245, 0.8) 50%, rgba(255, 255, 255, 0.7) 50%);
    opacity: 0.9;
}

.bg3 {
    animation-duration: 5s;
    background-image: linear-gradient(-60deg, rgba(250, 250, 250, 0.85) 50%, rgba(255, 255, 255, 0.8) 50%);
    opacity: 0.92;
}

@keyframes slide {
    0% {
        transform: translateX(-25%);
    }
    100% {
        transform: translateX(25%);
    }
}
</style> -->
