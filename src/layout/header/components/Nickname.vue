<script lang="ts" setup>
import { ArrowDown } from '@element-plus/icons-vue'
import useLogin from '@/hooks/login'
import useCookie from '@/hooks/cookie'

const { handleLogout } = useLogin()

function handleToSSO() {
  window.location.href = import.meta.env.VITE_APP_SSO_HOME_URL
}

const { adminInfo } = useCookie()
</script>

<template>
  <div class="center gap-8 pr-3">
    <el-button type="primary" @click="handleToSSO">统一登录后台</el-button>
    <el-dropdown trigger="click">
      <div>
        {{ adminInfo?.adminSso.adminTrueName }}
        <el-icon>
          <ArrowDown />
        </el-icon>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="handleLogout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<style lang="scss" scoped>

</style>
