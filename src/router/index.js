import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
	mode: 'history',
	base: '/',
	routes: [
		{
			path: '/',
			redirect: '/main'
		},
		{
			path: '/',
			component: () => import(/* webpackChunkName: "home" */ '../components/common/Home.vue'),
			children: [
				{
					path: '/main',
					component: () => import(/* webpackChunkName: "MainPage" */ '../components/page/mainPage/MainPage.vue'),
				}
			]
		}
	]

});
