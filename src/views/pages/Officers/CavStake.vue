<script setup>
import rey from '@/assets/Officers/rey.jpg';
const presenters = [
    {
        name: 'Joseph Rey Tolentino',
        position: 'Team Lead - Virtual Moderator',
        image: rey,
        messageLink: '#'
    },
    {
        name: 'Maria Clara Santos',
        position: 'Team Lead',
        image: rey,
        messageLink: '#'
    },
    {
        name: 'Juan Dela Cruz',
        position: 'Presenter',
        image: rey,
        messageLink: '#'
    }
];

const sss = [
    {
        name: 'Sophia Reyes',
        position: 'Community Outreach',
        image: rey,
        messageLink: '#'
    },
    {
        name: 'Liam Martinez',
        position: 'Music Director',
        image: rey,
        messageLink: '#'
    },
    {
        name: 'Emma Cruz',
        position: 'Event Planner',
        image: rey,
        messageLink: '#'
    },
    {
        name: 'Noah Gonzales',
        position: 'Treasurer',
        image: rey,
        messageLink: '#'
    },
    {
        name: 'Olivia Ramirez',
        position: 'Public Relations',
        image: rey,
        messageLink: '#'
    }
];
</script>
<template>
    <div class="grid space-y-4">
        <div class="border bg-gray-50 dark:bg-gray-900 dark:text-white p-8 rounded-lg">
            <h3 class="text-2xl font-bold mb-4">Presenters</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 w-full dark:bg-gray-800 dark:border-gray-700">
                <div v-for="i in presenters" :key="i" class="flex flex-col items-center py-8">
                    <img class="w-24 h-24 mb-3 rounded-full shadow-lg object-cover" :src="i.image" alt="Bonnie image" />
                    <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white text-center">{{ i.name }}</h5>
                    <span class="text-sm text-gray-500 dark:text-gray-400">{{ i.position }}</span>
                    <div class="flex mt-2">
                        <a
                            href="#"
                            class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                            >Message</a
                        >
                    </div>
                </div>
            </div>
        </div>

        <div class="border bg-gray-50 dark:bg-gray-900 dark:text-white p-8 rounded-lg">
            <h1 class="text-2xl font-bold mb-4">SSS</h1>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 w-full dark:bg-gray-800 dark:border-gray-700">
                <div v-for="i in sss" :key="i" class="flex flex-col items-center py-8">
                    <img class="w-24 h-24 mb-3 rounded-full shadow-lg object-cover" :src="i.image" alt="Bonnie image" />
                    <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white text-center">{{ i.name }}</h5>
                    <span class="text-sm text-gray-500 dark:text-gray-400">{{ i.position }}</span>
                    <div class="flex mt-2">
                        <a
                            href="#"
                            class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                            >Message</a
                        >
                    </div>
                </div>
            </div>
        </div>

        <div class="border bg-gray-50 dark:bg-gray-900 dark:text-white p-8 rounded-lg">
            <h1 class="text-2xl font-bold mb-4">SPAO</h1>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 w-full dark:bg-gray-800 dark:border-gray-700">
                <div v-for="i in sss" :key="i" class="flex flex-col items-center py-8">
                    <img class="w-24 h-24 mb-3 rounded-full shadow-lg object-cover" :src="i.image" alt="Bonnie image" />
                    <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white text-center">{{ i.name }}</h5>
                    <span class="text-sm text-gray-500 dark:text-gray-400">{{ i.position }}</span>
                    <div class="flex mt-2">
                        <a
                            href="#"
                            class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                            >Message</a
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
