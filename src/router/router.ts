import { createRouter, createWebHashHistory } from 'vue-router';

const routes: Array<any> = [
    {
        path: '/',
        name: 'home',
        exact: true,
        component: () => import('../views/Home.vue'),
        meta: {
            breadcrumb: [{ parent: 'Intro', label: 'Intro' }],
            auth: true
        },
    },
    {
        path: '/about',
        name: 'about',
        exact: true,
        component: () => import('../views/About.vue'),
        meta: {
            breadcrumb: [{ parent: 'Intro', label: 'Intro' }],
            auth: true
        },
    },
    {
        path: '/work',
        name: 'work',
        exact: true,
        component: () => import('../views/Work.vue'),
        meta: {
            breadcrumb: [{ parent: 'Intro', label: 'Intro' }],
            auth: true
        },
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior() {
        return { left: 0, top: 0 };
    },
});

export default router;
export {
    routes
}
