<template>
  <router-view v-slot="{ Component, route, name }">
    <keep-alive :include="list">
      <component :is="Component" />
    </keep-alive>

    <div>{{ list }}</div>
  </router-view>
</template>

<script>
import store from '@/store';

export default {
  name: "App",

  computed: {
    list() {
      return store.state.keepAliveList;
    }
  },

  beforeRouteEnter(to, from, next) {
    console.log("App:", to, from)
    next(vm => {
      // 通过 `vm` 访问组件实例
    })
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
