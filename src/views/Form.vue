<template>
  <h1>Form</h1>

  <div>
    <router-link :to="{ name: 'Result' }">Go to Result</router-link>
  </div>
  <div>
    <a href="javascript:;" @click="$router.back()">Back</a>
  </div>

  <div>
    <input type="text" v-model="value" />
  </div>
</template>

<script>
import store from '@/store';

export default {
  name: "Form",

  data() {
    return {
      value: ""
    };
  },

  // beforeRouteEnter(to, from, next) {
  //   console.log("beforeRouteEnter:", to, from)
  //   next(vm => {
  //     // 通过 `vm` 访问组件实例
  //   })
  // }

  beforeRouteLeave(to, from, next) {
    console.log("beforeRouteLeave:", to, from)
    if (to.name !== 'Result') {
      store.remove();
    }
    next()
  }
};
</script>

<style scoped>
</style>
