<template>
  <div class="page1">
    <div class="title">{{message}}</div>
  </div>
</template>

<style lang="less">
div.page1 {
  padding: 10px;
  border: 1px solid orange;
  .title { color: orange; }
}
</style>

<script>
export default {
  name: 'DefaultContainer',
  data() {
    return {
      message: 'Hello from src/pages/Page1.vue',
    };
  },
};
</script>
