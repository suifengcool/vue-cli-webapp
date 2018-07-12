import Vue from 'vue';
import VueRouter from 'vue-router';

import XXBUI from '../src/xxb-ui.js';

import Index from './routers/index.vue';

import App from './app.vue';

Vue.use(VueRouter);
Vue.use(XXBUI);

document.addEventListener('DOMContentLoaded', function () {
    typeof FastClick === 'function' && FastClick.attach(document.body);
}, false);

const router = new VueRouter({
    routes: [{
        path: '/', name: 'index', component: Index
    }]
});

const app = new Vue({
    router: router,
    render: v => v(App)
}).$mount('#app');

let scrollTop = 0;

router.beforeEach((route, redirect, next) => {
    if (redirect.path === '/') {
        scrollTop = document.getElementById('scrollView').scrollTop;
    }
    document.title = ' XXBUI - ' + route.name;
    next();
});

router.afterEach(route => {
    if (route.path === '/') {
        Vue.nextTick(() => {
            document.getElementById('scrollView').scrollTop = scrollTop;
        });
    } else {
        document.getElementById('scrollView').scrollTop = 0;
    }
});
