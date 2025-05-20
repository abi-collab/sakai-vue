<script setup>
import five from '@/assets/imgs/stories/five.png';
import four from '@/assets/imgs/stories/four.png';
import one from '@/assets/imgs/stories/one.png';
import six from '@/assets/imgs/stories/six.png';
import three from '@/assets/imgs/stories/three.png';
import two from '@/assets/imgs/stories/two.png';
import { ref } from 'vue';

const events = ref([
    {
        status: 'Juan learns about government financial aid',
        date: '01/03/2023 09:00',
        icon: 'pi pi-info-circle',
        color: '#2196F3',
        image: one,
        description: 'Juan discovers that there are government programs that can help families in financial distress. He learns about the eligibility criteria and the types of assistance available, including medical aid and food support.'
    },
    {
        status: 'Juan gathers required documents',
        date: '02/03/2023 11:30',
        icon: 'pi pi-file',
        color: '#FFC107',
        image: two,
        description: 'Juan collects all the necessary paperwork, including proof of income, medical bills, and identification documents. He carefully organizes everything to ensure a smooth application process.'
    },
    {
        status: 'Juan submits application at the local government office',
        date: '03/03/2023 14:00',
        icon: 'pi pi-send',
        color: '#4CAF50',
        image: three,
        description: 'Juan visits the local government office and submits his application for financial assistance. The staff reviews his documents and assures him that his case will be processed soon.'
    },
    {
        status: 'Juan attends an interview for verification',
        date: '05/03/2023 10:00',
        icon: 'pi pi-users',
        color: '#9C27B0',
        image: four,
        description: 'Juan is called in for an interview to verify his situation. He answers questions about his family, finances, and the circumstances that led to his need for assistance.'
    },
    {
        status: 'Juan receives approval notification',
        date: '10/03/2023 16:00',
        icon: 'pi pi-bell',
        color: '#00BCD4',
        image: five,
        description: 'Juan receives a phone call and an official letter notifying him that his application has been approved.'
    },
    {
        status: 'Juan receives financial assistance grant',
        date: '12/03/2023 09:30',
        icon: 'pi pi-check-circle',
        color: '#4BB543',
        image: six,
        description: 'Juan is granted financial assistance, which helps him pay off the hospital bills and stabilize his family’s finances. He now knows how to access government resources for future needs.'
    }
]);
</script>
<template>
    <div>
        <p>
            This illustrates the traditional process of availing government financial assistance: starting with getting informed about available aid, gathering and organizing the required documents, submitting the application at the local office,
            attending an interview for verification, receiving notification of approval, and finally obtaining the financial support. Each step is crucial for families seeking help during difficult times.
        </p>
        <Timeline :value="events" align="alternate" class="customized-timeline -ml-12 md:ml-0">
            <template #marker="slotProps">
                <span class="flex w-10 h-10 items-center justify-center text-white rounded-full z-10 shadow-sm" :style="{ backgroundColor: slotProps.item.color }">
                    <i :class="slotProps.item.icon" style="font-size: 1.5rem"></i>
                </span>
            </template>
            <template #content="slotProps">
                <Card class="mt-4 flex flex-col items-center text-center">
                    <!-- <template #title>
                                <span class="font-bold text-xl">{{ slotProps.item.status }}</span>
                            </template>
                            <template #subtitle>
                                <span class="text-gray-500">{{ slotProps.item.date }}</span>
                            </template> -->
                    <template #content>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                            <div class="flex justify-center">
                                <img v-if="slotProps.item.image" :src="slotProps.item.image" :alt="slotProps.item.status" width="200" class="shadow-sm rounded mb-2" />
                            </div>
                            <div>
                                <div class="font-bold text-xl text-left mb-4 leading-tight">{{ slotProps.item.status }}</div>
                                <p class="text-base leading-normal md:leading-relaxed text-left">
                                    {{ slotProps.item.description }}
                                </p>
                            </div>
                        </div>
                    </template>
                </Card>
            </template>
        </Timeline>
    </div>
</template>
