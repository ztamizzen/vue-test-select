import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueSelect from "vue-select";
import "./registerServiceWorker";
import SvgIcon from "@/components/SvgIcon.vue";
import "@/assets/icons.svg";

Vue.component("v-select", VueSelect);
Vue.component("svg-icon", SvgIcon);
Vue.directive("focus", {
  // When the bound element is inserted into the DOM...
  inserted: function(el, binding, vNode) {
    // Focus the element
    console.log(el, binding, vNode);
    el.placeholder = "This a an input with focus...";
    el.classList.add("form-control");
    el.focus();
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
