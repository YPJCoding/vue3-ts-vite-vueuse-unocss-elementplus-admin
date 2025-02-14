<script lang="ts" setup>
import { useRouter } from 'vue-router'

defineProps<{
  menuList: IMenu[]
}>()

const router = useRouter()

function handleClickMenu(subItem: IMenu) {
  router.push(subItem.path)
}
</script>

<template>
  <template v-for="subItem in menuList" :key="subItem.path">
    <el-sub-menu v-if="subItem.children && subItem.children.length > 0" :index="subItem.path">
      <template #title>
        <el-icon>
          <component :is="subItem.icon" />
        </el-icon>
        <span>{{ subItem.title }}</span>
      </template>
      <SubItem :menu-list="subItem.children" />
    </el-sub-menu>
    <el-menu-item v-else :index="subItem.path" @click="handleClickMenu(subItem)">
      <el-icon>
        <component :is="subItem.icon" />
      </el-icon>
      <template #title>
        <span>{{ subItem.title }}</span>
      </template>
    </el-menu-item>
  </template>
</template>

<style lang="scss" scoped>

</style>
