<script setup>
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import { ref } from 'vue';

// Import your tab components here
import COMMUNITY from '@/views/pages/HowToComponents/Community.vue';
import EXTENDFAM from '@/views/pages/HowToComponents/ExtendedFam.vue';
import OWNEFFORTS from '@/views/pages/HowToComponents/OwnEfforts.vue';

const activeIndex = ref(0);

const tabs = [
    {
        header: 'Own Efforts',
        component: OWNEFFORTS,
        bgColor: '#e0f7fa' // Cool light cyan
    },
    {
        header: 'Extended Family',
        component: EXTENDFAM,
        bgColor: '#e3f2fd' // Cool light blue
    },
    {
        header: 'Government, Insurance and Community Resources',
        component: COMMUNITY,
        bgColor: '#ede7f6' // Cool light purple
    }
];
</script>

<template>
    <div>
        <section class="howto-intro mb-8">
            <h3>Understanding Your Healthcare Affordability</h3>
            <p>
                See how financial analysis helps assess your capacity to handle medical and hospitalization costs, ensuring you can access the care you need without undue financial strain. We help you understand your options and plan for a healthier
                future.
            </p>
        </section>
    </div>
    <Accordion
        :activeIndex="activeIndex"
        class="space-y-4"
        :expandIcon="activeIndex === i ? 'pi pi-chevron-up' : 'pi pi-chevron-down'"
        :collapseIcon="activeIndex === i ? 'pi pi-chevron-up' : 'pi pi-chevron-down'"
        @update:activeIndex="(val) => (activeIndex = val)"
    >
        <AccordionTab v-for="(tab, i) in tabs" :key="i" :header="tab.header" :class="{ 'bg-gray-100': activeIndex === i }" :style="{ backgroundColor: tab.bgColor }" headerStyle="font-family: 'Segoe UI', Arial, sans-serif;">
            <component :is="tab.component" />
        </AccordionTab>
    </Accordion>
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
