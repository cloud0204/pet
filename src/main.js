import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";


import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faDog,
  faShoppingCart,
  faMap,
  faPhone,
  faPaperPlane,
  faCheck,
  faSearchPlus,
  faPlus,
  faMinus
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faBars,
  faDog,
  faShoppingCart,
  faTwitter,
  faFacebook,
  faInstagram,
  faMap,
  faPhone,
  faPaperPlane,
  faCheck,
  faSearchPlus,
  faPlus,
  faMinus
);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.directive('focus', {
  // When the bound element is inserted into the DOM...
  inserted: function (el) {
    // Focus the element
    el.focus()
  }
})

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
