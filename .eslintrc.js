/*
 * @Author: Eric YangXinde
 * @Date: 2020-10-15 16:18:18
 * @LastModifiedBy: Eric YangXinde
 * @LastEditTime: 2020-10-15 16:19:19
 * @Description:
 */
module.exports = {
	root: false,
	env: {
		node: true,
	},
	extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
	parserOptions: {
		parser: "babel-eslint",
	},
	rules: {
		"no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
	},
};
