import type { FormInstance } from 'element-plus'
import type { Ref } from 'vue'
import { ssoLogin } from '@/api/login'
import useCookie from '@/hooks/cookie'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default function (formRef?: Ref<FormInstance>) {
  const form = ref<ILogin>({
    username: '',
    pwd: '',
  })

  const rule = {
    username: [
      { required: true, message: '请输入账户', trigger: 'change' },
      { pattern: /^.{1,20}$/, message: '不要超过20个字符', trigger: 'blur' },
    ],
    pwd: [
      { required: true, message: '请输入密码', trigger: 'change' },
      { pattern: /^.{6,18}$/, message: '密码长度：6~18位', trigger: 'blur' },
    ],
  }

  const loading = ref(false)

  const { setAdminInfo, removeCookie } = useCookie()

  const router = useRouter()

  // 点击登录
  async function handleLogin() {
    if (!formRef) return
    await formRef.value.validate(async (valid) => {
      if (!valid) return
      if (loading.value) return
      loading.value = true
      const [err, res] = await ssoLogin(form.value)
      if (err) {
        loading.value = false
        return
      }
      await setAdminInfo(res)
      await router.replace({ name: 'Home' })
      loading.value = false
    })
  }

  // 退出登录
  async function handleLogout() {
    if (import.meta.env.VITE_APP_ENV === 'development') {
      await removeCookie()
      await router.replace({ name: 'Login' })
    } else {
      const r = `?logout=1&source=6&returnUrl=${encodeURIComponent(window.location.href)}`
      location.replace(import.meta.env.VITE_APP_SSO_HOME_URL + r)
    }
  }

  return {
    form,
    rule,
    loading,
    handleLogin,
    handleLogout,
  }
}
