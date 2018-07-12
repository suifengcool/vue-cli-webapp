import Vue from 'vue';
import VueRouter from 'vue-router';
import XXBUI from '../src/xxb-ui.js';
import App from './app.vue';
import Index from './routers/index.vue';

Vue.use(VueRouter);
Vue.use(XXBUI);

document.addEventListener('DOMContentLoaded', function () {
	typeof FastClick == 'function' && FastClick.attach(document.body);
}, false);

const router = new VueRouter({
	routes: [{
		path: '/', component: Index
	}]
});

const app = new Vue({
	router: router,
	render: v => v(App)
}).$mount('#app');

// fix ios wechat webview scroll bug
(() => {
	let lastY	//最后一次y坐标点

	document.body.addEventListener('touchstart', event => {
		// 点击屏幕时记录最后一次Y度坐标
		lastY = event.changedTouches[0].clientY
	}, false)

	document.body.addEventListener('touchmove', event => {
		let y = event.changedTouches[0].clientY,
			$scrollview = document.querySelector('.xxb-scrollview')

		let st = $scrollview.scrollTop		  // 已滚动高度
		let sh = $scrollview.scrollHeight  	// 滚动区总高度
		let ch = $scrollview.clientHeight  	// 滚动区可见高度

		// 如果到顶/到底了，且是下拉/上拉情况下，阻止touchmove事件
		if ((y >= lastY && st <= 10) || (y <= lastY && sh-st-ch <= 10)) {
			lastY = y
			event.preventDefault()
		}
		lastY = y
	}, false)
})()