// import './styles/base.less';

// import {Layout} from './components/layout';
// import {Popup} from './components/popup';

window.document.addEventListener('touchstart', function (event) {
    /* Do Nothing */
}, false);

const install = function (Vue) {
    // Vue.component(Layout.name, Layout);
    // Vue.component(Popup.name, Popup);
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install
};