import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import router from "@/router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBalanceScale, faBalanceScaleRight, faBalanceScaleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon, FontAwesomeLayers } from "@fortawesome/vue-fontawesome";

import BaseButton from "@/components/BaseButton";

Vue.config.productionTip = false;
library.add(faBalanceScale, faBalanceScaleLeft, faBalanceScaleRight);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("font-awesome-layers", FontAwesomeLayers);
Vue.component("BaseButton", BaseButton);

[[VueAxios, axios]].forEach(args => Vue.use(...args));

new Vue({
  router,
  render: h => h(App),
}).$mount("#app");
