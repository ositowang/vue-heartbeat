import Vue from "vue";
import App from "./App.vue";
import HeartBeat from "./heartbeat/index.js";

Vue.use(HeartBeat);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
