/*
 * @Author: Eric YangXinde
 * @Date: 2020-10-16 10:14:11
 * @LastModifiedBy: Eric YangXinde
 * @LastEditTime: 2020-10-16 18:26:17
 * @Description:
 */
const express = require("express");
const fs = require("fs");
const app = express();
const path = require("path");
// const resolve = (file) => path.resolve(__dirname, file);
// 创建渲染器
const { createBundleRenderer } = require("vue-server-renderer");
const serverBundle = require("../dist/server/vue-ssr-server-bundle.json");
const clientManifest = require("../dist/client/vue-ssr-client-manifest.json");

const renderer = createBundleRenderer(serverBundle, {
	runInNewContext: false,
	template: fs.readFileSync(
		// path.resolve(__dirname, "../public/index.temp.html"),
		"../public/index.template.html",
		"utf-8"
	),
	clientManifest,
});

function renderToString(context) {
	return new Promise((resolve, reject) => {
		renderer.renderToString(context, (err, html) => {
			err ? reject(err) : resolve(html);
		});
	});
}

// 中间件处理静态文件请求
app.use(express.static("../dist/client", { index: false })); // index:false 防止使用默认的index.html页面，虽然页面也会显示内容，但不是由SSR生成的。
// app.use(express.static("../dist/client"));

// 路由处理交给Vue
app.get("*", async (req, res) => {
	try {
		const context = {
			url: req.url,
			title: "SSR Vue.js",
		};
		const html = await renderer.renderToString(context);
		// const html = await renderer.renderToString(context);
		console.log(html);
		res.send(html);
	} catch (error) {
		console.log(error);
		res.status(500).send("Server Internal Error");
	}
});

const port = 8090;
app.listen(port, () => {
	console.log(`Renderer server is running on ${port} now`);
});
