import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
console.log("baseUrl", process.env.BASE_URL);
export default new VueRouter({
  base: process.env.BASE_URL,
  mode: "history",
  routes: []
});
