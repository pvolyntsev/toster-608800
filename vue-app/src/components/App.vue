<template>
  <div class="app">
    <div class="title">{{message}}</div>
    <a target="_self" href="/">Return to Yii2</a>
    <router-link to="/app">Home</router-link>
    <router-link to="/app/page1">Page1</router-link>
    <router-link to="/app/page2">Page2</router-link>
    <router-view></router-view>
  </div>
</template>

<style lang="less">
body {
  background: lightgoldenrodyellow;
}

div.app {
  padding: 10px;
  border: 1px solid olive;
  .title { color: olive; }
  width: 300px;
  margin: 0 auto;
}
</style>

<script>
export default {
  data() {
    return {
      message: 'Hello from src/components/App.vue',
    };
  },
};
</script>

