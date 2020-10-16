/*
 * @Author: Eric YangXinde
 * @Date: 2020-10-16 17:12:03
 * @LastModifiedBy: Eric YangXinde
 * @LastEditTime: 2020-10-16 17:12:33
 * @Description:
 */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default function createStore() {
	return new Vuex.Store({
		state: {},
		mutations: {},
		actions: {},
		modules: {},
	});
}
