<template>
  <div class="vue3-component-dropdown">
    I'm dropdown!
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VueDropdown',
  props: {
    msg: String,
  },
});
</script>

<style scoped lang="less">
.vue3-component-dropdown {

}
</style>
