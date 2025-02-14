<script lang="ts" setup>
import { useLayoutStore } from '@/store/layout'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import SubItem from './components/SubItem.vue'

const route = useRoute()

// 是否水平折叠收起菜单
const { isCollapse, menuList } = useLayoutStore()

const activeMenu = computed(() => {
  return (route.meta?.activeMenu || route.path) as string
})
</script>

<template>
  <div :style="{ width: isCollapse ? '65px' : '210px' }" class="menu">
    <el-scrollbar>
      <el-menu :collapse="isCollapse" :collapse-transition="false" :default-active="activeMenu" :router="true">
        <SubItem :menu-list="menuList" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<style lang="scss" scoped>
.menu {
  --el-menu-bg-color: #304156 !important;
  --el-menu-text-color: #c1cad7 !important;
  --el-menu-hover-bg-color: #263445 !important;
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #304156;
  transition: all 0.3s ease;

  .el-scrollbar {
    height: 100%;

    .el-menu {
      flex: 1;
      overflow: auto;
      overflow-x: hidden;
      border-right: none;
    }
  }
}
</style>
