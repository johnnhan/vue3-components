<template>
  <div class="vue3-layout-aside">
    <router-link
      class="router-link"
      v-for="menu in menus"
      :to="menu.name"
      :key="menu.name"
    >{{menu.name}}</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import menus from '../../router/menus';

export default defineComponent({
  name: 'Aside',
  setup() {
    return {
      menus,
    };
  },
});
</script>

<style lang="less" scoped>
@import '../../assets/css/global.less';

.vue3-layout-aside {
  padding: 20px;
  border-right: 1px solid @border-color;

  .router-link {
    display: block;
    margin-bottom: 10px;
    text-decoration: none;
    color: @font-color;
  }

  .router-link-active {
    color: @theme-color;
  }
}
</style>
