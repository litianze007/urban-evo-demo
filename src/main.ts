import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import * as VueGoogleMaps from 'vue2-google-maps';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en';

import '@/style/reset.css';
import "@/style/global.less"

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCrjFjoIBudZUa7OpNrOSN8_tgiXwga9rs', // 此处填入谷歌地图申请的key
    libraries: 'places',
  },
});


Vue.use(ElementUI, { locale });


new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
