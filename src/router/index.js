/*
 * @Author: Eric YangXinde
 * @Date: 2020-10-16 10:47:36
 * @LastModifiedBy: Eric YangXinde
 * @LastEditTime: 2020-10-16 17:13:01
 * @Description:
 */
import VueRouter from "vue-router";
import Vue from "vue";

import Index from "@/components/Index.vue";
import Detail from "@/components/Detail.vue";

Vue.use(VueRouter);
// 每次用户请求都需要创建一个router实例
export default function createRouter() {
	return new VueRouter({
		mode: "history",
		routes: [
			{
				path: "/",
				component: Index,
			},
			{
				path: "/detail",
				component: Detail,
			},
		],
	});
}
