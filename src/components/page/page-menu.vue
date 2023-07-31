<script setup lang="ts">
const emits = defineEmits([
  'menu-change'
])
</script>

<template>
  <a-menu 
    mode="horizontal" 
    :default-selected-keys="['tools']" 
    @menu-item-click="(key: string) => emits('menu-change', key)"
  >
    <a-menu-item key="tools">
      <template #icon>
        <icon-thunderbolt />
      </template>工具集
    </a-menu-item>
    <a-menu-item key="says">
      <template #icon>
        <icon-send />
      </template>寒草说
    </a-menu-item>
  </a-menu>
</template>