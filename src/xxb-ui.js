import './styles/base.less';
import './xxb-ui.flexible.js'

import {Layout} from './components/layout';
import {Sticky} from './components/sticky';
import {BackTop} from './components/backTop';
import {Slider} from './components/slider';
import {Navbar} from './components/navbar';
import {TabBar,TabBarItem} from './components/tabbar';
import {CellItem} from './components/cell';
import {Popup} from './components/popup';
import {Button} from './components/button';
import {PullDown} from './components/pull_down';
import {Toast, Confirm, Alert} from './components/dialog';
// import {Picker} from './components/picker';

const components = [
  Layout,
  Sticky,
  BackTop,
  Slider,
  Navbar,
  TabBar,TabBarItem,
  CellItem,
  Popup,
  Button,
  PullDown
]
window.document.addEventListener('touchstart', function (event) {
  /* Do Nothing */
}, false);

const install = function (Vue, opt={}) {
  components.map(component => {
    Vue.component(component.name, component);
  })
  
  Vue.prototype.$dialog = {
    toast: Toast,
    confirm: Confirm,
    alert: Alert
  };
};

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install
};
