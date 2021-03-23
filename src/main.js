import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLaugh, faLaughWink, faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faPowerOff, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import router from "@/router";

Vue.config.productionTip = false;
library.add(faLaughWink, faLaugh, faPaperPlane, faPowerOff, faArrowDown);
Vue.component("font-awesome-icon", FontAwesomeIcon);

[[VueAxios, axios]].forEach(args => Vue.use(...args));

new Vue({
  router,
  render: h => h(App),
}).$mount("#app");
