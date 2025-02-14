<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './header/index.vue'
import Menu from './menu/index.vue'

const keepAliveName = ['']
</script>

<template>
  <el-container>
    <el-aside>
      <Menu />
    </el-aside>
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-main>
        <RouterView v-slot="{ Component, route }">
          <transition appear mode="out-in" name="fade-transform">
            <keep-alive :include="keepAliveName">
              <component :is="Component" :key="route.fullPath" />
            </keep-alive>
          </transition>
        </RouterView>
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
.el-container {
  @apply w-full min-w-[740px] h-full;

  .el-aside {
    @apply w-auto;
    overflow: inherit;
  }

  .el-header,
  .el-footer {
    @apply h-auto p-0;
  }

  .el-main {
    @apply w-full p-3;
    height: calc(100vh - 50px);

    &::-webkit-scrollbar {
      @apply bg-[#f0f2f5];
    }
  }
}

/* fade-transform */
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.2s;
}

.fade-transform-enter-from {
  opacity: 0;
  transition: all 0.2s;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transition: all 0.2s;
  transform: translateX(30px);
}
</style>
