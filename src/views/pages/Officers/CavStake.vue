<script setup>
import { ref } from 'vue';

//presenters
import cha from '@/assets/Officers/cha.jpeg';
import ferdie from '@/assets/Officers/ferdie.jpeg';
import juliet from '@/assets/Officers/juliet.jpeg';
import rey from '@/assets/Officers/rey.jpg';
import ruth from '@/assets/Officers/ruth.jpg';
//SSS
import aiza from '@/assets/Officers/aiza.jpg';
import bob from '@/assets/Officers/bob.jpg';
import CaneteRonnie from '@/assets/Officers/CaneteRonnie.jpg';
import jocelyn from '@/assets/Officers/jocelyn.jpg';
import rene from '@/assets/Officers/rene.jpg';
//CWSN
import joan from '@/assets/Officers/joan.jpg';
// placeholder
import placeholder from '@/assets/Officers/placeholder.jpg';
//spao
import gracia from '@/assets/Officers/gracia.jpg';
import jaydg from '@/assets/Officers/jaydg.jpg';
import maricel from '@/assets/Officers/maricel.jpg';
//patient care
import reynaldoDG from '@/assets/Officers/reynaldoDG.jpg';

//philhealth
import mark from '@/assets/Officers/mark.jpg';
import monaliza from '@/assets/Officers/monaliza.jpg';
import rowena from '@/assets/Officers/rowena.jpg';
//local-community
import albert from '@/assets/Officers/albert.jpg';
import francis from '@/assets/Officers/francis.jpeg';
import noel from '@/assets/Officers/noel.jpg';

const presenters = [
    {
        name: 'Ferdinand Obias',
        position: 'Team Lead',
        image: ferdie,
        phone: '---',
        ward: 'Cavite 2nd'
    },
    {
        name: 'Juliet Juanillo',
        position: 'Presenter',
        image: juliet,
        phone: '---',
        ward: 'General Trias 3rd'
    },
    {
        name: 'Ariane Listana',
        position: 'Presenter',
        image: placeholder,
        phone: '---',
        ward: 'General Trias 3rd'
    },
    {
        name: 'Jocelyn Salen',
        position: 'Presenter',
        image: placeholder,
        phone: '---',
        ward: 'General Trias 1st'
    },
    {
        name: 'Charisma T. Zambrano',
        position: 'Presenter',
        image: cha,
        phone: '---',
        ward: 'Rosario 2nd'
    },
    {
        name: 'Ruth Elliar',
        position: 'Presenter',
        image: ruth,
        phone: '---',
        ward: 'Rosario 1st'
    },
    {
        name: 'Joseph Rey Tolentino',
        position: 'Team Lead - Virtual Moderator',
        image: rey,
        phone: '63+9776529262',
        ward: 'Cavite 2nd'
    }
];

const sss = [
    {
        name: 'Ronnie Canete',
        position: 'SSS Specialist',
        image: CaneteRonnie,
        phone: '---',
        ward: 'General Trias 2nd'
    },
    {
        name: 'Roberto Noquillo',
        position: 'SSS Specialist',
        image: bob,
        phone: '---',
        ward: ' Cavite 2nd'
    },
    {
        name: 'Jocelyn Noquillo',
        position: 'SSS Specialist',
        image: jocelyn,
        phone: '---',
        ward: ' Cavite 2nd'
    },
    {
        name: 'Aiza Babaan',
        position: 'SSS Specialist',
        image: aiza,
        phone: '---',
        ward: ' Rosario 1st'
    },
    {
        name: 'Noah Gonzales',
        position: 'SSS Specialist',
        image: placeholder,
        phone: '---'
    },
    {
        name: 'Olivia Ramirez',
        position: 'SSS Specialist',
        image: placeholder,
        phone: '---'
    },
    {
        name: 'Rene Viernes',
        position: 'SSS Specialist',
        image: rene,
        phone: '---',
        ward: 'Noveleta'
    }
];

const spao = [
    {
        name: 'Virgielita Morite',
        position: 'SPAO Specialist',
        image: placeholder,
        phone: '---',
        ward: 'Rosario 1st'
    },
    {
        name: 'Rickson Jay De Guzman',
        position: 'SPAO Specialist',
        image: jaydg,
        phone: '---',
        ward: ' Cavite 1st'
    },
    {
        name: 'Myrna Ong',
        position: 'SPAO Specialist',
        image: placeholder,
        phone: '---',
        ward: 'Rosario 1st'
    },
    {
        name: 'Maritez Saulog',
        position: 'SPAO Specialist',
        image: placeholder,
        phone: '---',
        ward: 'General Trias 3rd'
    },
    {
        name: 'Maricel Depano',
        position: 'SPAO Specialist',
        image: maricel,
        phone: '---',
        ward: 'Cavite 2nd'
    },
    {
        name: 'Maria Gracia Ponferrada',
        position: 'SPAO Specialist',
        image: gracia,
        phone: '---',
        ward: 'General Trias 1st'
    },
    {
        name: 'Lilia Wolff',
        position: 'SPAO Specialist',
        image: placeholder,
        phone: '---',
        ward: 'General Trias 1st'
    },
    {
        name: 'Leomar Zambrano',
        position: 'SPAO Specialist',
        image: placeholder,
        phone: '---',
        ward: 'Rosario 2nd'
    },
    {
        name: 'Jingle Elliar',
        position: 'SPAO Specialist',
        image: placeholder,
        phone: '---',
        ward: 'Rosario 1st'
    },
    // {
    //     name: 'Gene Benhur Licerio',
    //     position: 'SPAO Specialist',
    //     image: placeholder,
    //     phone: '---',
    //     ward: 'Cavite 2nd'
    // },
    {
        name: 'Romeo Castillo',
        position: 'SPAO Specialist',
        image: placeholder,
        phone: '---'
    },
    {
        name: 'Blademer Escamilla',
        position: 'SPAO Specialist',
        image: placeholder,
        phone: '---',
        ward: 'General Trias 3rd'
    },
    {
        name: 'Conalie Montemayor',
        position: 'SPAO Specialist',
        image: placeholder,
        phone: '---',
        ward: 'Noveleta'
    }
];

const philhealth = [
    {
        name: 'Rowena Tolentino',
        position: 'PhilHealth Specialist',
        image: rowena,
        phone: '---',
        ward: 'Cavite 2nd'
    },
    {
        name: 'Monaliza Petacte',
        position: 'PhilHealth Specialist',
        image: monaliza,
        phone: '---',
        ward: 'General Trias 3rd'
    },
    {
        name: 'Mark Domingo',
        position: 'PhilHealth Specialist',
        image: mark,
        phone: '---',
        ward: 'Noveleta'
    }
];

const cwsn = [
    {
        name: 'Joann Obias',
        position: 'CWSN Specialist',
        image: joan,
        phone: '---',
        ward: 'Cavite 2nd'
    }
];

const patientCare = [
    {
        name: 'REYNALDO DE GUZMAN',
        position: 'Patient Care Specialist',
        image: reynaldoDG,
        phone: '---',
        ward: 'General Trias 1st'
    }
];

const community_and_local = [
    {
        name: 'Albert Maquimot',
        position: 'Community Resources Specialist',
        image: albert,
        phone: '---',
        ward: 'Stake Presidency 1st Counselor'
    },
    {
        name: 'Francsis Soberano',
        position: 'Local Government Resources Specialist',
        image: francis,
        phone: '---',
        ward: 'Stake President'
    },
    {
        name: 'Noel Montemayor',
        position: 'Community Resources Specialist',
        image: noel,
        phone: '---',
        ward: 'Stake Presidency 2nd Counselor'
    }
];

const selectedOfficer = ref(null);

function openModal(officer) {
    selectedOfficer.value = officer;
}

function closeModal() {
    selectedOfficer.value = null;
}
</script>
<template>
    <div class="grid space-y-4">
        <div v-for="(group, groupName) in { presenters, sss, spao, cwsn, philhealth, patientCare, community_and_local }" :key="groupName" class="border bg-gray-50 dark:bg-gray-900 dark:text-white p-8 rounded-lg">
            <h3 class="text-2xl font-bold mb-4">{{ groupName.toUpperCase() }}</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 w-full dark:bg-gray-800 dark:border-gray-700">
                <div v-for="officer in group" :key="officer.name" class="flex flex-col items-center py-8 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" @click="openModal(officer)">
                    <img class="w-32 h-32 mb-3 rounded-full shadow-lg object-cover" :src="officer.image" alt="Officer image" />
                    <h5 class="mb-1 text-lg text-gray-900 dark:text-white text-center capitalize">{{ officer.name }}</h5>
                    <span class="text-sm text-gray-500 dark:text-gray-400 text-center">{{ officer.position }}</span>

                    <span class="text-sm text-gray-500 dark:text-gray-400 text-center">{{ officer.ward }}</span>
                    <span v-if="officer.phone" class="text-sm text-gray-500 dark:text-gray-400">{{ officer.phone }}</span>
                </div>
            </div>
        </div>
        <div v-if="selectedOfficer" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" @click.self="closeModal">
            <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
                <!-- <button class="absolute top-2 right-2 text-gray-500 dark:text-gray-400" @click="closeModal">✖</button> -->
                <img class="w-85 h-85 mb-4 shadow-lg object-cover mx-auto" :src="selectedOfficer.image" alt="Officer image" />
                <h5 class="mb-2 text-xl font-medium text-gray-900 dark:text-white text-center capitalize">{{ selectedOfficer.name }}</h5>
                <p class="text-sm text-gray-500 dark:text-gray-400 text-center">{{ selectedOfficer.position }}</p>
                <p class="text-sm text-gray-500 dark:text-gray-400 text-center">{{ selectedOfficer.ward }}</p>
                <p v-if="selectedOfficer.phone" class="text-sm text-gray-500 dark:text-gray-400 text-center">{{ selectedOfficer.phone }}</p>
            </div>
        </div>
    </div>
</template>
