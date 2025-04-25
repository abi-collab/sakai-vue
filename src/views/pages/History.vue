<script setup>
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
                <!-- 
                <div class="font-semibold mt-4 mb-2">Bottom Align</div>
                <Timeline :value="horizontalEvents" layout="horizontal" align="bottom">
                    <template #content="slotProps">
                        {{ slotProps.item }}
                    </template>
                </Timeline>

                <div class="font-semibold mt-4 mb-2">Alternate Align</div>
                <Timeline :value="horizontalEvents" layout="horizontal" align="alternate">
                    <template #opposite> &nbsp; </template>
                    <template #content="slotProps">
                        {{ slotProps.item }}
                    </template>
                </Timeline> -->
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
