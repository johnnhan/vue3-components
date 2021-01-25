<template>
  <div class="vue3-component-select">
    I'm select!
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VueSelect',
  props: {
    msg: String,
  },
});
</script>

<style scoped lang="less">
.vue3-component-select {

}
</style>
