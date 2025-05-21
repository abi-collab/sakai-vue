<script setup>
import doh from '@/assets/data/malasakit/doh.json';
import lgu from '@/assets/data/malasakit/lgu.json';
import { ref } from 'vue';

import one from '@/assets/imgs/malasakit/1.jpg';
import two from '@/assets/imgs/malasakit/2.jpg';
import three from '@/assets/imgs/malasakit/3.jpg';
import four from '@/assets/imgs/malasakit/4.jpg';

const tabs = [
    { name: 'DOH', data: doh },
    { name: 'LGU', data: lgu }
];
const activeTab = ref(0);
</script>

<template>
    <div class="px-0 lg:px-8">
        <div>
            <p>
                <b class="text-xl">Malasakit Centers</b> offer a centralized point of access for medical and financial assistance from PhilHealth, the Philippine Charity Sweepstakes Office, and the Department of Social Welfare and Development.
                Located within hospitals, they simplify the process for indigent and financially challenged patients seeking support.
            </p>
        </div>
        <h6>MALASAKIT CENTER PROGRAM OFFICES</h6>
        <div class="bg-white">
            <!-- Tabs -->
            <div class="my-6">
                <div class="flex flex-wrap border-b border-gray-200">
                    <button
                        v-for="(tab, idx) in tabs"
                        :key="tab.name"
                        @click="activeTab = idx"
                        :class="['px-6 py-2 font-semibold transition rounded-t', activeTab === idx ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-200']"
                        style="margin-bottom: -1px"
                    >
                        {{ tab.name }}
                    </button>
                </div>
            </div>
            <!-- Tab Content -->
            <div class="w-full overflow-x-auto bg-white px-8 rounded-xl">
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
                        <tr v-for="(center, idx) in tabs[activeTab].data" :key="idx" :class="idx % 2 === 0 ? 'bg-white' : 'bg-gray-100'" class="hover:cursor-pointer hover:bg-blue-100">
                            <td class="px-4 py-2 text-[1rem] sm:text-[1rem] text-gray-900">{{ center.region }}</td>
                            <td class="px-4 py-2 text-[1rem] sm:text-[1rem] text-gray-900">{{ center.name_of_facility }}</td>
                            <td class="px-4 py-2 text-[1rem] sm:text-[1rem] text-gray-900">{{ center.contact_number }}</td>
                            <td class="px-4 py-2 text-[1rem] sm:text-[1rem] text-gray-900">{{ center.contact_person }}</td>
                            <td class="px-4 py-2 text-[1rem] sm:text-[1rem] text-gray-900">
                                <a :href="'mailto:' + center.email" class="text-blue-500 hover:underline">{{ center.email }}</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="py-8">
            <h5>MALASAKIT CENTER 2022 ANNUAL ACCOMPLISHMENT</h5>
            <div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center my-4">
                    <vue-image-zoomer :regular="one" :zoom="one" zoom-amount="2" />
                    <vue-image-zoomer :regular="two" :zoom="two" zoom-amount="2" />
                    <vue-image-zoomer :regular="three" :zoom="three" zoom-amount="2" />
                    <vue-image-zoomer :regular="four" :zoom="four" zoom-amount="2" />
                </div>
            </div>
        </div>

        <div class="grid space-y-1">
            <h6>Reference: <a href="https://aics.dswd.gov.ph/malasakit-centers/" class="underline text-blue-400" target="_blank">https://aics.dswd.gov.ph/malasakit-centers/</a></h6>
            <h6>Reference: <a href="https://doh.gov.ph/mpo/mc-directory/" class="underline text-blue-400" target="_blank">https://doh.gov.ph/mpo/mc-directory/</a></h6>
        </div>
    </div>
</template>
