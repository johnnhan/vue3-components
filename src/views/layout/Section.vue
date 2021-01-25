<template>
  <div class="vue3-layout-section">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Section',
});
</script>

<style lang="less" scoped>
.vue3-layout-section {
  padding: 20px;
}
</style>
