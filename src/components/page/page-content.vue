<template>
  <div class="page-content">
    <slot name="content" />
  </div>
</template>
<style scoped lang="scss">
  .page-content {
    width: calc(100% - 56px);
    height: calc(100% - 114px);
    padding: 28px;
  }
</style>