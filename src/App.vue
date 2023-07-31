<script setup lang="ts">
  import { computed } from 'vue';
  import PageWrapper from './components/page/page-wrapper.vue'
  import ThemeToggler from './components/theme-toggler.vue';
  import { useThemeStore } from './stores/theme';

  // handle theme
  const themeStore = useThemeStore();
  themeStore.initTheme();
  const dataTheme = computed(() => themeStore.theme);
  const changeTheme = (val: boolean) => {
    themeStore.toggleTheme(val ? 'dark' : 'light');
  }
</script>

<template>
  <div :data-theme="dataTheme" class="app-wrapper">
    <PageWrapper>
      <template #menuSuffix>
        <ThemeToggler :default-theme="dataTheme" @change-theme="changeTheme" />
      </template>
    </PageWrapper>  
  </div>
</template>
<style scoped>
.app-wrapper {
  width: 100%;
  height: 100%;
}
</style>
