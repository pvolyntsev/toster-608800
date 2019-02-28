<template>
  <div class="page2">
    <div class="title">{{message}}</div>
  </div>
</template>

<style lang="less">
div.page2 {
  padding: 10px;
  border: 1px solid darkslateblue;
  .title { color: darkslateblue; }
}
</style>

<script>
export default {
  name: 'DefaultContainer',
  data() {
    return {
      message: 'Hello from src/pages/Page2.vue',
    };
  },
};
</script>
