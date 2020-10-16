/*
 * @Author: Eric YangXinde
 * @Date: 2020-10-16 10:14:11
 * @LastModifiedBy: Eric YangXinde
 * @LastEditTime: 2020-10-16 10:38:29
 * @Description:
 */
const express = require("express");
const Vue = require("vue");

const app = express();

// 创建渲染器
const renderer = require("vue-server-renderer").createRenderer();
// 将来用渲染器渲染page可以得到html
const page = new Vue({
	template: "<div> Hello Vue SSR! </div>",
});

app.get("/", async (req, res) => {
	try {
		const html = await renderer.renderToString(page);
		console.log(html);
		res.send(html);
	} catch (error) {
		console.log(error);
		res.status(500).send("Server Internal Error");
	}
});
app.listen(8090, () => {
	console.log(`Renderer server is running now`);
});
