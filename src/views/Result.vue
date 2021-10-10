<template>
  <h1>Result</h1>

  <div>
    <router-link :to="{ name: 'Home' }">Go to Home</router-link>
  </div>
  <div>
    <a href="javascript:;" @click="$router.back()">Back</a>
  </div>
</template>

<script>
export default {
  name: "Result",
};
</script>

<style scoped>
</style>
