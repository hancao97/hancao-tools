<script setup lang="ts">
import PageMenu from './page-menu.vue'
import PageContent from './page-content.vue'

import { computed, ref, defineAsyncComponent } from 'vue';

const ToolsContent = defineAsyncComponent(() => import('../tools/tools-wrapper.vue'))
const SaysContent = defineAsyncComponent(() => import('../says/says-wrapper.vue'))

let menuKey = ref('tools');

const handleMenuChange = (key: string) => {
  menuKey.value = key;
}

const contentComponent = computed(() => {
  switch (menuKey.value) {
    case 'tools':
      return ToolsContent;
    case 'says':
      return SaysContent;
    default:
      return ToolsContent;
  }
})

</script>

<template>
  <div class="page-wrapper">
    <div class="menu-wrapper">
      <PageMenu 
        @menu-change="handleMenuChange"
      />
      <div class="menu-suffix">
        <slot name="menuSuffix" />
      </div>
    </div>
    <PageContent>
      <template #content>
        <component :is="contentComponent" />
      </template>
    </PageContent>
  </div>
</template>
<style scoped lang="scss">
  .page-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: var(--hancao-tools-bg-color);

    .menu-suffix {
      position: absolute;
      right: 28px;
      top: 14px;
    }
  }
</style>