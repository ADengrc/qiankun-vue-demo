module.exports = {
  publicPath: process.env.VUE_APP_BASE_URL,
  devServer: {
    port: 8090
  },
  configureWebpack: {
    externals: {
      vue: "Vue",
      "vue-router": "VueRouter",
      vuex: "Vuex"
    }
  }
};
