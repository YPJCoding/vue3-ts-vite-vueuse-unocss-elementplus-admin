<script lang="ts" setup>
import { ArrowRight } from '@element-plus/icons-vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const matched = computed(() =>
  route.matched.filter(item => item.meta && item.meta.title && item.meta.title !== '首页'),
)
</script>

<template>
  <div class="center">
    <el-breadcrumb :separator-icon="ArrowRight">
      <transition-group name="breadcrumb">
        <el-breadcrumb-item key="/home" :to="{ path: '/' }">
          <span>首页</span>
        </el-breadcrumb-item>
        <!-- :to="{ path: item.path }" -->
        <el-breadcrumb-item v-for="item in matched" :key="item.path">
          <span>{{ item.meta.title }}</span>
        </el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>
  </div>
</template>

<style lang="scss" scoped>
.breadcrumb-enter-active,
.breadcrumb-leave-active,
.breadcrumb-move {
  transition: all 0.3s;
}

.breadcrumb-enter,
.breadcrumb-enter-from,
.breadcrumb-leave-active {
  opacity: 0;
  transform: translateX(20px);
}

.breadcrumb-leave-active {
  position: absolute;
}
</style>
