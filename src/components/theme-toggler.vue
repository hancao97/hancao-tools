<script setup lang="ts">
  defineProps({
    defaultTheme: String
  })
  const emits = defineEmits([
    'changeTheme'
  ])
</script>

<template>
  <a-switch type="round" unchecked-color="#14C9C9" checked-color="#db5c9a" :defaultChecked="defaultTheme === 'dark'" @change="(v: boolean) => emits('changeTheme', v)">
    <template #unchecked>
      <icon-sun-fill />
    </template>
    <template #checked>
      <icon-moon-fill />
    </template>
  </a-switch>
</template>