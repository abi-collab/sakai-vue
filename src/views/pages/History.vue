<script setup>
import placeholderImg from '@/assets/imgs/placeholderImg.jpg';
import { ref } from 'vue';

const events = ref([
    {
        id: 1,
        status: 'Mr. Froilan had a personal experience as a patient needing government assistance, which inspired their involvement in helping others.',
        date: '2008',
        icon: 'pi pi-shopping-cart',
        color: '#1976D2' // Blue
        // image: 'game-controller.jpg'
    },
    {
        id: 2,
        status: 'The concept for what would become the GAMA program began in Imus 2nd Ward.',
        date: 'March 2019',
        icon: 'pi pi-shopping-cart',
        color: '#388E3C' // Green
        // image: 'game-controller.jpg'
    },
    {
        id: 3,
        status: 'The concept was strengthened through the efforts of colleagues in GPTA (later SPTA), leaders from other denominations, and barangay officials (BIG - Believers In Government).',
        date: '2019 (March - early 2022)',
        icon: 'pi pi-cog',
        color: '#FBC02D' // Yellow
    },
    {
        id: 4,
        status: 'The GAMA (Guide in Administering Medical Assistance) program was formally introduced.',
        date: 'January 1, 2022',
        icon: 'pi pi-envelope',
        color: '#E64A19' // Deep Orange
    },
    {
        id: 5,
        status: 'Over 200 patients have been educated through the GAMA program, which aims to help those in public and private hospitals needing financial assistance.',
        date: 'March 2019 - Present',
        icon: 'pi pi-check',
        color: '#8E24AA' // Purple
    },
    {
        id: 6,
        status: 'Mr. Froilan emphasizes the availability of resources at the local, provincial, and national levels, as well as through government agencies, organized groups/partylists, and Foundations.',
        date: 'Ongoing',
        icon: 'pi pi-check',
        color: '#1976D2' // Teal
    }
]);
</script>

<template>
    <div class="grid grid-cols-12 gap-8">
        <div class="col-span-12 md:col-span-4">
            <div>
                <img class="w-56 mb-4 shadow-lg object-cover rounded-lg" :src="placeholderImg" alt="Officer image" />
            </div>
            <div class="text-lg md:text-xl mt-8">
                GAMA, an acronym that stands for Guide in Administering Medical Assistance, represents a significant initiative spearheaded by the church.
                <br />
                <br />
                This program is thoughtfully designed with the primary objective of empowering individuals with the knowledge and skills necessary to effectively navigate and maximize the utilization of available government resources.
                <br />
                <br />
                <b>Froilan Abella</b>
                <br />
                <sup>GAMA Expert</sup>
            </div>
        </div>
        <div class="col-span-12 md:col-span-8">
            <div class="card">
                <div class="font-semibold text-base md:text-xl text-center mb-4">GAMA Timeline</div>
                <!-- <p class="font-semibold mb-2">
                    Maria faces overwhelming hospital bills after her son's accident, despite having some insurance. A kind nurse informs her about potential financial assistance programs, offering a glimmer of hope. Maria resolves to navigate the
                    complex system to secure aid for her family's financial recovery.
                </p> -->
                <Timeline :value="events" align="alternate" class="customized-timeline">
                    <template #marker="slotProps">
                        <div class="text-white rounded-b-full rounded-tr-2xl py-6 px-2 md:px-4 z-10 shadow-sm grid place-items-center" :style="{ backgroundColor: slotProps.item.color }">
                            <!-- <i :class="slotProps.item.icon"></i> -->
                            <span class="font-bold text-center text-sm md:text-md">
                                {{ slotProps.item.date }}
                            </span>
                        </div>
                    </template>
                    <template #content="slotProps">
                        <Card class="mt-8">
                            <template #title>
                                <div :class="slotProps.item.id % 2 === 1 ? 'flex justify-start mb-4' : 'flex justify-start md:justify-end mb-4'">
                                    <p class="rounded-full h-4 w-4" :style="{ backgroundColor: slotProps.item.color }"></p>
                                </div>
                                <p class="leading-normal text-sm md:text-lg">
                                    {{ slotProps.item.status }}
                                </p>
                            </template>
                            <!-- <template #subtitle>
                                <b class="text-xl">{{ slotProps.item.date }}</b>
                            </template> -->
                            <!-- <template #content>
                                <img v-if="slotProps.item.image" :src="`https://primefaces.org/cdn/primevue/images/product/${slotProps.item.image}`" :alt="slotProps.item.name" width="200" class="shadow-sm" />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse,
                                    cupiditate neque quas!
                                </p>
                             
                            </template> -->
                        </Card>
                    </template>
                </Timeline>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@media screen and (max-width: 960px) {
    ::v-deep(.customized-timeline) {
        .p-timeline-event:nth-child(even) {
            flex-direction: row !important;

            .p-timeline-event-content {
                text-align: left !important;
            }
        }

        .p-timeline-event-opposite {
            flex: 0;
        }

        .p-card {
            margin-top: 1rem;
        }
    }
}
</style>

<!-- <script setup>
import { ref } from 'vue';
const horizontalEvents = ref(['2020', '2021', '2022', '2023']);
</script>

<template>
    <div class="grid grid-cols-12 gap-8">
        <div class="col-span-full">
            <div class="card">
                <div class="font-semibold text-xl mb-4">History</div>
                <div class="font-semibold mb-2">How it All Started</div>
                <Timeline :value="horizontalEvents" layout="horizontal" align="top">
                    <template #content="slotProps">
                        {{ slotProps.item }}
                    </template>
                </Timeline>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@media screen and (max-width: 960px) {
    ::v-deep(.customized-timeline) {
        .p-timeline-event:nth-child(even) {
            flex-direction: row !important;

            .p-timeline-event-content {
                text-align: left !important;
            }
        }

        .p-timeline-event-opposite {
            flex: 0;
        }

        .p-card {
            margin-top: 1rem;
        }
    }
}
</style> -->
