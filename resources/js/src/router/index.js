import Vue from 'vue';
import VueRouter from 'vue-router';


Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'home',
        redirect: {name: 'crosword-index'},
		component: () => import('./../components/layouts/Home.vue'),
		children: [
			{
				path: 'crossword',
				component: () => import('./../views/crossword'),
                children: [
                    {
                        path: '',
                        name: 'crosword-index',
                        component: () => import('./../views/crossword/pages')
                    },
                    // {
                    //     path: 'create',
                    //     name: 'crosword-create',
                    //     component: () => import('./../views/expenditures/pages/add-edit')
                    // }
                ]
			}
		],
	},
    {
        path: '/admin',
        component: () => import('./../components/layouts/Admin.vue'),
        redirect: {name: 'dashboard-index'},
        children: [
            {
                path: '',
                name: 'dashboard',
                component: () => import('./../views/admin'),
                children: [
                    {
                        path: '',
                        name: 'dashboard-index',
                        component: () => import('./../views/admin/dashboard'),
                    }
                ]
            }
        ]
    }
];

const router = new VueRouter({
	mode: 'history',
	routes,
	scrollBehavior: () => ({
		y: 0,
	}),
});

export default router;
