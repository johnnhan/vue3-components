<template>
  <vue-dropdown></vue-dropdown>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VueDropdown from '../../components/vue-dropdown.vue';

export default defineComponent({
  name: 'DropdownTest',
  components: { VueDropdown },
});
</script>
