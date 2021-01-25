<template>
  <vue-select></vue-select>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VueSelect from '../../components/vue-select.vue';

export default defineComponent({
  name: 'SelectTest',
  components: { VueSelect },
});
</script>
