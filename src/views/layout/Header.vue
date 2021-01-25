<template>
  <div class="vue3-layout-header">
    Vue3 Components
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
});
</script>

<style lang="less" scoped>
.vue3-layout-header {
  padding: 10px 20px;
  font-size: 24px;
  font-weight: bold;
  border-bottom: 1px solid #eee;
}
</style>
