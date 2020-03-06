<template>
  <div>
    <div id="nav">
      <router-link to="/app1">app1</router-link>|
      <router-link to="/app2">app2</router-link>
    </div>
    <button @click="setTestInfo('父级点击了一次按钮')">父级按钮</button>
    <div>测试父子级应用通讯：</div>
    <div v-for="(item, index) in testInfo" :key="index">{{ item }}</div>
    <div v-if="loading">loading...</div>
    <div v-if="isApp1">
      <div>主应用容器1</div>
      <div v-html="content"></div>
    </div>
    <div v-else>
      <div>主应用容器2</div>
      <div v-html="content"></div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "mainApp",
  props: {
    loading: Boolean,
    content: String
  },
  computed: {
    ...mapState(["testInfo"]),
    isApp1() {
      return this.$route.fullPath.startsWith("/app1");
    }
  },
  methods: {
    ...mapMutations(["setTestInfo"])
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
