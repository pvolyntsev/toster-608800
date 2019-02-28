<template>
  <div class="container">
    <div class="title">{{message}}</div>
    <main class="main">
      <router-view></router-view>
    </main>
  </div>
</template>

<style lang="less">
div.container {
  padding: 10px;
  border: 1px solid red;
  .title { color: red; }
}
</style>

<script>
export default {
  name: 'DefaultContainer',
  data() {
    return {
      message: 'Hello from src/containers/DefaultContainer.vue',
    };
  },
};
</script>
