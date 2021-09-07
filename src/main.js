import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import MaterialKit from "./plugins/material-kit";

import iView from 'iview';
import locale from 'iview/dist/locale/en-US'
import 'iview/dist/styles/iview.css';

Vue.config.productionTip = false;

Vue.use(iView, { locale });

Vue.use(MaterialKit);

const NavbarStore = {
  showNavbar: false
};

Vue.mixin({
  data() {
    return {
      NavbarStore
    };
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
