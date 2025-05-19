<script setup>
import Community from './HowToComponents/Community.vue';
import ExtendedFamily from './HowToComponents/ExtendedFam.vue';
import OwnEfforts from './HowToComponents/OwnEfforts.vue';
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
    <Accordion :activeIndex="0" class="space-y-4">
        <AccordionTab header="1. OWN EFFORTS">
            <OwnEfforts />
        </AccordionTab>
        <AccordionTab header="2. EXTENDED FAMILY">
            <ExtendedFamily />
        </AccordionTab>
        <AccordionTab header="3. GOVERNMENT, INSURANCE and COMMUNITY RESOURCES">
            <Community />
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
