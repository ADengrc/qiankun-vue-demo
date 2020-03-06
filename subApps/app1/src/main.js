import "@app/public-path";
import { wrapRender } from "@app/utils";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
Vue.config.productionTip = false;

let instance = null;
const containerId = `#${process.env.VUE_APP_CONTAINER_ID}`;
const render = wrapRender(function() {
  instance = new Vue({
    router,
    render: h => h(App)
  }).$mount(containerId);
}, containerId);

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {}

export async function mount(props) {
  console.log("[vue] props from main framework", props);
  render();
}

export async function unmount() {
  instance.$destroy();
  instance = null;
}
