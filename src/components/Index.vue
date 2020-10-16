<!--
 * @Author: Eric YangXinde
 * @Date: 2020-10-16 10:45:59
 * @LastModifiedBy: Eric YangXinde
 * @LastEditTime: 2020-10-16 16:55:10
 * @Description: 
-->
<template>
	<div id="index">
		index
		<HelloWorld msg="Welcome to Your Vue.js App" />
	</div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
export default {
	name: "Index",
	data() {
		return {};
	},
	methods: {},
	components: { HelloWorld },
	mounted() {},
	beforeDestroy() {},
	watch: {},
	computed: {},
};
</script>

<style scoped></style>
