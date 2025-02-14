<script lang="ts" setup>
import useLogin from '@/hooks/login'
import { ref } from 'vue'

const formRef = ref()

const { form, handleLogin, loading } = useLogin(formRef)
</script>

<template>
  <div class="h-screen center bg-#303A4A">
    <el-card>
      <el-form ref="formRef" :model="form">
        <el-form-item label="账号">
          <el-input v-model="form.username" placeholder="请输入账号" type="text" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.pwd" placeholder="请输入密码" type="password" />
        </el-form-item>
        <el-form-item>
          <el-button :loading="loading" type="primary" @click="handleLogin">
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<style scoped>

</style>
