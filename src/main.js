// ie兼容处理
import "whatwg-fetch";
import "url-polyfill";

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { registerMicroApps, setDefaultMountApp, start } from "qiankun";

Vue.config.productionTip = false;
Vue.prototype.$store = store;
let app = null;

function render({ appContent, loading } = {}) {
  if (!app) {
    app = new Vue({
      router,
      data() {
        return {
          content: appContent,
          loading
        };
      },
      render(h) {
        return h(App, {
          props: {
            content: this.content,
            loading: this.loading
          }
        });
      }
    }).$mount("#main-app");
  } else {
    app.content = appContent;
    app.loading = loading;
  }
}

function genActiveRule(routerPrefix) {
  return location => location.pathname.startsWith(routerPrefix);
}

render({ appContent: "", loading: true });
const isDevlopment = process.env.NODE_ENV === "development";
registerMicroApps(
  [
    {
      name: "app1",
      entry: isDevlopment ? "//localhost:8091/app1/" : "//localhost:81/app1/",
      render,
      activeRule: genActiveRule("/app1")
    },
    {
      name: "app2",
      entry: isDevlopment ? "//localhost:8092/app2/" : "//localhost:81/app2/",
      render,
      activeRule: genActiveRule("/app2")
    }
  ],
  {
    beforeLoad: [
      app => {
        console.log("beforeLoad", app);
      }
    ],
    beforeMount: [
      app => {
        console.log("beforeMount", app);
      }
    ],
    afterMount: [
      app => {
        console.log("afterMount", app);
      }
    ],
    beforeUnmount: [
      app => {
        console.log("beforeUnmount", app);
      }
    ],
    afterUnmount: [
      app => {
        console.log("afterUnmount", app);
      }
    ]
  }
);

setDefaultMountApp("/app1");

start({
  jsSandbox: false
});
