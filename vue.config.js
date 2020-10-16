/*
 * @Author: Eric YangXinde
 * @Date: 2020-10-16 11:41:02
 * @LastModifiedBy: Eric YangXinde
 * @LastEditTime: 2020-10-16 18:14:10
 * @Description:
 */
const VueSSRServerPlugin = require("vue-server-renderer/server-plugin");
const VueSSRClientPlugin = require("vue-server-renderer/client-plugin");

const nodeExternals = require("webpack-node-externals");
const merge = require("lodash.merge");
const TARGET_NODE = process.env.WEBPACK_TARGET === "node";
const target = TARGET_NODE ? "server" : "client";

module.exports = {
	lintOnSave: false,
	publicPath: "./",
	css: {
		extract: false,
	},
	outputDir: `./dist/${target}`,
	configureWebpack: {
		// 将 entry 指向应用程序的 server / client 文件
		entry: `./src/entry-${target}.js`,
		devtool: "source-map",
		// 这允许 webpack 以 Node 适用方式(Node-appropriate fashion)处理动态导入(dynamic import)，
		// 并且还会在编译 Vue 组件时，
		// 告知 `vue-loader` 输送面向服务器代码(server-oriented code)。
		target: TARGET_NODE ? "node" : "web",
		node: TARGET_NODE ? undefined : false,
		output: {
			// 此处告知 server bundle 使用 Node 风格导出模块(Node-style exports)
			libraryTarget: TARGET_NODE ? "commonjs2" : undefined,
		},
		// 外置化应用程序依赖模块。可以使服务器构建速度更快，并生成较小的 bundle 文件。
		externals: TARGET_NODE
			? nodeExternals({
					allowlist: /\.css$/,
			  })
			: undefined,
		optimization: {
			splitChunks: TARGET_NODE ? false : undefined,
		},
		plugins: [
			TARGET_NODE ? new VueSSRServerPlugin() : new VueSSRClientPlugin(),
		],
	},
	chainWebpack: (config) => {
		config.module
			.rule("vue")
			.use("vue-loader")
			.tap((options) => {
				merge(options, {
					optimizeSSR: false,
				});
			});
	},
};
