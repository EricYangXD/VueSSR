/*
 * @Author: Eric YangXinde
 * @Date: 2020-10-16 10:59:18
 * @LastModifiedBy: Eric YangXinde
 * @LastEditTime: 2020-10-16 17:53:33
 * @Description:
 */

// 创建Vue实例
import Vue from "vue";
import createRouter from "./router";
// vuex
// import createStore from "./store";
// import { sync } from "vuex-router-sync";
import App from "./App.vue";
// import { sync } from "vuex-router-sync";

Vue.config.productionTip = false;

export default function createApp() {
	const router = createRouter();
	// const store = createStore();
	// 同步路由状态(route state)到store
	// sync(store, router);
	const app = new Vue({
		router,
		// store,
		render: (h) => h(App),
	});
	return { app, router };
	// return { app, router, store };
}
