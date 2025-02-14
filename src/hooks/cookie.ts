import { useCookies } from '@vueuse/integrations/useCookies'
import { computed } from 'vue'

export default function () {
  const ssoAdminKey = `${import.meta.env.VITE_APP_ENV}_sso_admin`

  const { get, set, remove } = useCookies()

  // 获取管理员信息
  const adminInfo = computed<QLogin>(() => get(ssoAdminKey))
  const domain = location.host.includes('localhost') ? 'localhost' : '.caigou2003.com'
  // 储存管理员信息
  async function setAdminInfo(value: any) {
    set(ssoAdminKey, value, {
      path: '/',
      domain,
      expires: new Date(+new Date() + 60 * 60 * 24 * 180 * 1000),
    })
  }

  // 清除cookie
  async function removeCookie() {
    remove(ssoAdminKey, { domain })
  }

  return {
    adminInfo,
    setAdminInfo,
    removeCookie,
  }
}
