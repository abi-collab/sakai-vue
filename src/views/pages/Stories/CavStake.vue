<script setup>
import { ref } from 'vue';

const events = ref([
    {
        status: 'Maria goes to DSWD to ask for assistance',
        date: '15/10/2020 10:30',
        icon: 'pi pi-shopping-cart',
        color: '#9C27B0',
        image: 'game-controller.jpg'
    },
    {
        status: 'A SPAO GAMA specialist accompanied her to Senate',
        date: '15/10/2020 14:00',
        icon: 'pi pi-cog',
        color: '#673AB7'
    },
    {
        status: 'She goes to Mayor`s office to ask for additional assistance',
        date: '15/10/2020 16:15',
        icon: 'pi pi-envelope',
        color: '#FF9800'
    },
    {
        status: 'She was able to gather ₱300,000 in total to satisfy the ₱280,000 hospital bills',
        date: '16/10/2020 10:00',
        icon: 'pi pi-check',
        color: '#4BB543'
    }
]);
</script>

<template>
    <div class="grid grid-cols-12 gap-8">
        <div class="col-span-full">
            <div class="card">
                <div class="font-semibold text-xl mb-4">A GAMA True Story</div>
                <p class="font-semibold mb-2">
                    Maria faces overwhelming hospital bills after her son's accident, despite having some insurance. A kind nurse informs her about potential financial assistance programs, offering a glimmer of hope. Maria resolves to navigate the
                    complex system to secure aid for her family's financial recovery.
                </p>
                <Timeline :value="events" align="alternate" class="customized-timeline">
                    <template #marker="slotProps">
                        <span class="flex w-8 h-8 items-center justify-center text-white rounded-full z-10 shadow-sm" :style="{ backgroundColor: slotProps.item.color }">
                            <i :class="slotProps.item.icon"></i>
                        </span>
                    </template>
                    <template #content="slotProps">
                        <Card class="mt-4">
                            <template #title>
                                {{ slotProps.item.status }}
                            </template>
                            <template #subtitle>
                                {{ slotProps.item.date }}
                            </template>
                            <template #content>
                                <img v-if="slotProps.item.image" :src="`https://primefaces.org/cdn/primevue/images/product/${slotProps.item.image}`" :alt="slotProps.item.name" width="200" class="shadow-sm" />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse,
                                    cupiditate neque quas!
                                </p>
                                <!-- <Button label="Read more" text></Button> -->
                            </template>
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
