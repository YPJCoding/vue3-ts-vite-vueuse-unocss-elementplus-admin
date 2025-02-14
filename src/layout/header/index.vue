<script lang="ts" setup>
import CollapseIcon from './components/CollapseIcon.vue'
import Breadcrumb from './components/Breadcrumb.vue'
import Nickname from '@/layout/header/components/Nickname.vue'
</script>

<template>
  <div class="header">
    <div class="flex">
      <CollapseIcon />
      <Breadcrumb />
    </div>
    <Nickname />
  </div>
</template>

<style lang="scss" scoped>
.header {
  @apply flex justify-between h-50px bg-white shadow;
}
</style>
