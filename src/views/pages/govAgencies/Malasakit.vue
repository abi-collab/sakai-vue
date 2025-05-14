<script setup>
import { ref } from 'vue';
import doh from '@/assets/data/malasakit/doh.json';
import lgu from '@/assets/data/malasakit/lgu.json';

import one from '@/assets/imgs/malasakit/1.jpg';
import two from '@/assets/imgs/malasakit/2.jpg';
import three from '@/assets/imgs/malasakit/3.jpg';
import four from '@/assets/imgs/malasakit/4.jpg';

let activeData = ref(doh);
const buttons = [
    { name: 'DOH', data: doh },
    { name: 'LGU', data: lgu }
];
</script>

<template>
    <div class="px-4 sm:px-6 lg:px-8">
        <div>
            <p>
                <b class="text-xl">Malasakit Centers</b> offer a centralized point of access for medical and financial assistance from PhilHealth, the Philippine Charity Sweepstakes Office, and the Department of Social Welfare and Development.
                Located within hospitals, they simplify the process for indigent and financially challenged patients seeking support.
            </p>
        </div>
        <div class="py-8">
            <h5>MALASAKIT CENTER 2022 ANNUAL ACCOMPLISHMENT</h5>
            <div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center my-4">
                    <vue-image-zoomer :regular="one" :zoom="one" zoom-amount="3" />
                    <vue-image-zoomer :regular="two" :zoom="two" zoom-amount="3" />
                    <vue-image-zoomer :regular="three" :zoom="three" zoom-amount="3" />
                    <vue-image-zoomer :regular="four" :zoom="four" zoom-amount="3" />
                </div>
            </div>
        </div>

        <h5>MALASAKIT CENTER PROGRAM OFFICE</h5>
        <div class="my-6 flex gap-4">
            <button
                v-for="btn in buttons"
                :key="btn.name"
                @click="activeData.value = btn.data"
                :class="[activeData.value === btn.data ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-700', 'px-6 py-2 rounded font-semibold shadow transition']"
            >
                {{ btn.name }}
            </button>
        </div>
        <div class="max-w-7xl overflow-x-auto">
            <table class="min-w-full divide-y bg-white divide-gray-200 my-8">
                <thead class="bg-gray-100">
                    <tr>
                        <th class="px-4 py-2 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Region</th>
                        <th class="px-4 py-2 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Name of Facility</th>
                        <th class="px-4 py-2 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Contact Number</th>
                        <th class="px-4 py-2 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Contact Person</th>
                        <th class="px-4 py-2 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Email</th>
                    </tr>
                </thead>
                <tbody class="bg-gray-50 divide-y divide-gray-200 rounded">
                    <tr v-for="(center, idx) in activeData" :key="idx">
                        <td class="px-4 py-2 text-[1rem] sm:text-[1.1rem]">{{ center.region }}</td>
                        <td class="px-4 py-2 text-[1rem] sm:text-[1.1rem]">{{ center.name_of_facility }}</td>
                        <td class="px-4 py-2 text-[1rem] sm:text-[1.1rem]">{{ center.contact_number }}</td>
                        <td class="px-4 py-2 text-[1rem] sm:text-[1.1rem]">{{ center.contact_person }}</td>
                        <td class="px-4 py-2 text-[1rem] sm:text-[1.1rem]">
                            <a :href="'mailto:' + center.email" class="text-blue-500 hover:underline">{{ center.email }}</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
