<script lang="ts" setup>
import { Expand, Fold } from '@element-plus/icons-vue'
import { useLayoutStore } from '@/store/layout'

const { isCollapse } = useLayoutStore()
</script>

<template>
  <div class="w-50px center bg-white transition-all _active" @click="isCollapse = !isCollapse">
    <el-icon size="20">
      <Expand v-if="isCollapse" />
      <Fold v-else />
    </el-icon>
  </div>
</template>

<style lang="scss" scoped>

</style>
