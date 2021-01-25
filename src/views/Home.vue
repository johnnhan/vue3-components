<template>
  <div class="vue3-layout">
    <layout-header></layout-header>
    <layout-aside></layout-aside>
    <layout-section></layout-section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LayoutHeader from './layout/Header.vue';
import LayoutAside from './layout/Aside.vue';
import LayoutSection from './layout/Section.vue';

export default defineComponent({
  name: 'Home',
  components: {
    LayoutHeader,
    LayoutAside,
    LayoutSection,
  },
});
</script>

<style lang="less" scoped>
@header-height: 54px;
@aside-width: 240px;

.vue3-layout {
  width: 100%;
  height: 100%;

  .vue3-layout-header {
    position: absolute;
    top: 0;
    left: 0;
    height: @header-height;
    width: 100%;
  }

  .vue3-layout-aside {
    position: absolute;
    top: @header-height;
    left: 0;
    width: @aside-width;
    height: calc(~'100% - @{header-height}');
  }

  .vue3-layout-section {
    position: absolute;
    top: @header-height;
    left: @aside-width;
    width: calc(~'100% - @{aside-width}');
    height: calc(~'100% - @{header-height}');
  }
}
</style>
