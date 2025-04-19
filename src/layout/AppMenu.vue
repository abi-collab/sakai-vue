<script setup>
import doh from '@/assets/logo/doh.png';
import dswd from '@/assets/logo/dswd2.png';
import op from '@/assets/logo/op.svg';
import ovp from '@/assets/logo/ovp.svg';
import pagcor from '@/assets/logo/pagcor.png';
import pcso from '@/assets/logo/pcso.png';
import pms from '@/assets/logo/pms.png';
import spao from '@/assets/logo/spao.png';

//flats

import { ref } from 'vue';

import AppMenuItem from './AppMenuItem.vue';

const model = ref([
    {
        label: 'Home',
        items: [{ label: 'Home', icon: 'pi pi-fw pi-home', to: '/' }]
    },
    // {
    //     label: 'UI Components',
    //     items: [
    //         { label: 'Form Layout', icon: 'pi pi-fw pi-id-card', to: '/uikit/formlayout' },
    //         { label: 'Input', icon: 'pi pi-fw pi-check-square', to: '/uikit/input' }
    //         { label: 'Button', icon: 'pi pi-fw pi-mobile', to: '/uikit/button', class: 'rotated-icon' },
    //         { label: 'Table', icon: 'pi pi-fw pi-table', to: '/uikit/table' },
    //         { label: 'List', icon: 'pi pi-fw pi-list', to: '/uikit/list' },
    //         { label: 'Tree', icon: 'pi pi-fw pi-share-alt', to: '/uikit/tree' },
    //         { label: 'Panel', icon: 'pi pi-fw pi-tablet', to: '/uikit/panel' },
    //         { label: 'Overlay', icon: 'pi pi-fw pi-clone', to: '/uikit/overlay' },
    //         { label: 'Media', icon: 'pi pi-fw pi-image', to: '/uikit/media' },
    //         { label: 'Menu', icon: 'pi pi-fw pi-bars', to: '/uikit/menu' },
    //         { label: 'Message', icon: 'pi pi-fw pi-comment', to: '/uikit/message' },
    //         { label: 'File', icon: 'pi pi-fw pi-file', to: '/uikit/file' },
    //         { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', to: '/uikit/charts' },
    //         { label: 'Timeline', icon: 'pi pi-fw pi-calendar', to: '/uikit/timeline' },
    //         { label: 'Misc', icon: 'pi pi-fw pi-circle', to: '/uikit/misc' }
    //     ]
    // },
    {
        label: 'GOV. Agencies',
        icon: 'pi pi-fw pi-briefcase',
        to: '/pages',
        items: [
            // {
            //     label: 'Landing',
            //     icon: 'pi pi-fw pi-globe',
            //     to: '/landing'
            // },
            // {
            //     label: 'Auth',
            //     icon: 'pi pi-fw pi-user',
            //     items: [
            //         {
            //             label: 'Login',
            //             icon: 'pi pi-fw pi-sign-in',
            //             to: '/auth/login'
            //         },
            //         {
            //             label: 'Error',
            //             icon: 'pi pi-fw pi-times-circle',
            //             to: '/auth/error'
            //         },
            //         {
            //             label: 'Access Denied',
            //             icon: 'pi pi-fw pi-lock',
            //             to: '/auth/access'
            //         }
            //     ]
            // },
            // {
            //     label: 'Crud',
            //     icon: 'pi pi-fw pi-pencil',
            //     to: '/pages/crud'
            // },
            // {
            //     label: 'Not Found',
            //     icon: 'pi pi-fw pi-exclamation-circle',
            //     to: '/pages/notfound'
            // },
            // {
            //     label: 'Empty',
            //     icon: 'pi pi-fw pi-circle-off',
            //     to: '/pages/empty'
            // }

            {
                label: 'DOH',
                icon: 'pi pi-fw pi-globe',
                logo: doh,
                to: '/doh'
            },
            {
                label: 'DSWD',
                icon: 'pi pi-fw pi-globe',
                logo: dswd,
                to: '/dswd'
            },
            {
                label: 'OP',
                icon: 'pi pi-fw pi-globe',
                logo: op,
                to: '/op'
            },
            {
                label: 'OVP',
                icon: 'pi pi-fw pi-globe',
                logo: ovp,
                to: '/ovp'
            },
            // {
            //     label: 'PACE',
            //     icon: 'pi pi-fw pi-globe',
            //     logo: pace,
            //     to: '/pace'
            // },
            {
                label: 'PAGCOR',
                icon: 'pi pi-fw pi-globe',
                logo: pagcor,
                to: '/pagcor'
            },
            {
                label: 'PCSO',
                icon: 'pi pi-fw pi-globe',
                logo: pcso,
                to: '/pcso'
            },
            {
                label: 'PMS',
                icon: 'pi pi-fw pi-globe',
                logo: pms,
                to: '/pms'
            },
            {
                label: 'SPAO',
                icon: 'pi pi-fw pi-globe',
                logo: spao,
                to: '/spao'
            }
        ]
    },
    {
        label: 'Others',
        items: [
            {
                label: 'Officers',
                icon: 'pi pi-fw pi-user',
                to: '/officers'
            },
            {
                label: 'Stories',
                icon: 'pi pi-fw pi-comment',
                to: '/stories'
            },
            {
                label: 'About',
                icon: 'pi pi-fw pi-info-circle',
                to: '/about'
            }
        ]
    }
    // {
    //     label: 'Hierarchy',
    //     items: [
    //         {
    //             label: 'Submenu 1',
    //             icon: 'pi pi-fw pi-bookmark',
    //             items: [
    //                 {
    //                     label: 'Submenu 1.1',
    //                     icon: 'pi pi-fw pi-bookmark',
    //                     items: [
    //                         { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
    //                         { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
    //                         { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' }
    //                     ]
    //                 },
    //                 {
    //                     label: 'Submenu 1.2',
    //                     icon: 'pi pi-fw pi-bookmark',
    //                     items: [{ label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }]
    //                 }
    //             ]
    //         },
    //         {
    //             label: 'Submenu 2',
    //             icon: 'pi pi-fw pi-bookmark',
    //             items: [
    //                 {
    //                     label: 'Submenu 2.1',
    //                     icon: 'pi pi-fw pi-bookmark',
    //                     items: [
    //                         { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
    //                         { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' }
    //                     ]
    //                 },
    //                 {
    //                     label: 'Submenu 2.2',
    //                     icon: 'pi pi-fw pi-bookmark',
    //                     items: [{ label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' }]
    //                 }
    //             ]
    //         }
    //     ]
    // },
    // {
    //     label: 'Get Started',
    //     items: [
    //         {
    //             label: 'Documentation',
    //             icon: 'pi pi-fw pi-book',
    //             to: '/documentation'
    //         },
    //         {
    //             label: 'View Source',
    //             icon: 'pi pi-fw pi-github',
    //             url: 'https://github.com/primefaces/sakai-vue',
    //             target: '_blank'
    //         }
    //     ]
    // }
]);
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
    </ul>
</template>

<style lang="scss" scoped></style>
