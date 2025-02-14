import { post } from '@/utils/request'

// 登录
export function ssoLogin(data: ILogin) {
  return post<QLogin>('login', data, { baseURL: import.meta.env.VITE_APP_SSO_API })
}
