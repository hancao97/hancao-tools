import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const theme = ref('light')

  function initTheme() {
    const theme = localStorage.getItem('hancao-tools-theme') || 'light';
    toggleTheme(theme);
  }

  function setArcoTheme() {
    if(theme.value==='dark') {
      document.body.setAttribute('arco-theme', 'dark')
    } else {
      document.body.removeAttribute('arco-theme');
    }
  }

  function toggleTheme(v = 'light') {
    theme.value = v;
    localStorage.setItem('hancao-tools-theme', v);
    setArcoTheme();
  }

  return {
    theme,
    initTheme,
    toggleTheme,
  }
})