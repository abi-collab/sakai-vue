import AppLayout from '@/layout/AppLayout.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: AppLayout,
            children: [
                {
                    path: '/',
                    name: 'dashboard',
                    component: () => import('@/views/Dashboard.vue')
                },
                {
                    path: '/uikit/formlayout',
                    name: 'formlayout',
                    component: () => import('@/views/uikit/FormLayout.vue')
                },
                {
                    path: '/uikit/input',
                    name: 'input',
                    component: () => import('@/views/uikit/InputDoc.vue')
                },
                {
                    path: '/uikit/button',
                    name: 'button',
                    component: () => import('@/views/uikit/ButtonDoc.vue')
                },
                {
                    path: '/uikit/table',
                    name: 'table',
                    component: () => import('@/views/uikit/TableDoc.vue')
                },
                {
                    path: '/uikit/list',
                    name: 'list',
                    component: () => import('@/views/uikit/ListDoc.vue')
                },
                {
                    path: '/uikit/tree',
                    name: 'tree',
                    component: () => import('@/views/uikit/TreeDoc.vue')
                },
                {
                    path: '/uikit/panel',
                    name: 'panel',
                    component: () => import('@/views/uikit/PanelsDoc.vue')
                },

                {
                    path: '/uikit/overlay',
                    name: 'overlay',
                    component: () => import('@/views/uikit/OverlayDoc.vue')
                },
                {
                    path: '/uikit/media',
                    name: 'media',
                    component: () => import('@/views/uikit/MediaDoc.vue')
                },
                {
                    path: '/uikit/message',
                    name: 'message',
                    component: () => import('@/views/uikit/MessagesDoc.vue')
                },
                {
                    path: '/uikit/file',
                    name: 'file',
                    component: () => import('@/views/uikit/FileDoc.vue')
                },
                {
                    path: '/uikit/menu',
                    name: 'menu',
                    component: () => import('@/views/uikit/MenuDoc.vue')
                },
                {
                    path: '/uikit/charts',
                    name: 'charts',
                    component: () => import('@/views/uikit/ChartDoc.vue')
                },
                {
                    path: '/uikit/misc',
                    name: 'misc',
                    component: () => import('@/views/uikit/MiscDoc.vue')
                },
                {
                    path: '/uikit/timeline',
                    name: 'timeline',
                    component: () => import('@/views/uikit/TimelineDoc.vue')
                },
                {
                    path: '/pages/empty',
                    name: 'empty',
                    component: () => import('@/views/pages/Empty.vue')
                },
                {
                    path: '/pages/crud',
                    name: 'crud',
                    component: () => import('@/views/pages/Crud.vue')
                },
                {
                    path: '/documentation',
                    name: 'documentation',
                    component: () => import('@/views/pages/Documentation.vue')
                },

                {
                    path: '/doh',
                    name: 'doh',
                    component: () => import('@/views/pages/govAgencies/DOH.vue')
                },
                {
                    path: '/dswd',
                    name: 'dswd',
                    component: () => import('@/views/pages/govAgencies/DSWD.vue')
                },
                {
                    path: '/op',
                    name: 'op',
                    component: () => import('@/views/pages/govAgencies/OP.vue')
                },
                {
                    path: '/ovp',
                    name: 'ovp',
                    component: () => import('@/views/pages/govAgencies/OVP.vue')
                },
                // {
                //     path: '/pace',
                //     name: 'pace',
                //     component: () => import('@/views/pages/govAgencies/PACE.vue')
                // },
                {
                    path: '/pagcor',
                    name: 'pagcor',
                    component: () => import('@/views/pages/govAgencies/PAGCOR.vue')
                },
                {
                    path: '/pcso',
                    name: 'pcso',
                    component: () => import('@/views/pages/govAgencies/PCSO.vue')
                },

                {
                    path: '/pcso',
                    name: 'pcso',
                    component: () => import('@/views/pages/govAgencies/PCSO.vue')
                },
                {
                    path: '/pms',
                    name: 'pms',
                    component: () => import('@/views/pages/govAgencies/PMS.vue')
                },
                {
                    path: '/spao',
                    name: 'spao',
                    component: () => import('@/views/pages/govAgencies/SPAO.vue')
                },
                {
                    path: '/sss',
                    name: 'sss',
                    component: () => import('@/views/pages/govAgencies/SSS.vue')
                },
                {
                    path: '/malasakit',
                    name: 'malasakit',
                    component: () => import('@/views/pages/govAgencies/Malasakit.vue')
                },

                {
                    path: '/officers',
                    name: 'officers',
                    component: () => import('@/views/pages/Officers/CavStake.vue')
                },
                {
                    path: '/stories',
                    name: 'stories',
                    component: () => import('@/views/pages/Stories/CavStake.vue')
                },
                {
                    path: '/about',
                    name: 'about',
                    component: () => import('@/views/pages/About.vue')
                },
                {
                    path: '/history',
                    name: 'history',
                    component: () => import('@/views/pages/History.vue')
                },
                ///////////////////////////// others

                {
                    path: '/cwsn',
                    name: 'children-with-special-needs',
                    component: () => import('@/views/pages/Other/ChildWithSpecialNeeds.vue')
                },
                {
                    path: '/patient-care',
                    name: 'Patient Care',
                    component: () => import('@/views/pages/Other/PatientCare.vue')
                }
            ]
        },
        {
            path: '/landing',
            name: 'landing',
            component: () => import('@/views/pages/Landing.vue')
        },
        {
            path: '/pages/notfound',
            name: 'notfound',
            component: () => import('@/views/pages/NotFound.vue')
        },

        {
            path: '/auth/login',
            name: 'login',
            component: () => import('@/views/pages/auth/Login.vue')
        },
        {
            path: '/auth/access',
            name: 'accessDenied',
            component: () => import('@/views/pages/auth/Access.vue')
        },
        {
            path: '/auth/error',
            name: 'error',
            component: () => import('@/views/pages/auth/Error.vue')
        }
    ]
});

export default router;
