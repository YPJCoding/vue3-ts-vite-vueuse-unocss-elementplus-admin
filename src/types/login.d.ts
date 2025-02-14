declare interface ILogin {
  username: string
  pwd: string
}

declare interface QLogin {
  adminSso: QAdminSso
  client: QClient
  cms: QCms
  yct: QYct
  ykt: QYkt
  yzb: QYzb
  game: QGame
}

interface QAdminSso {
  adminSsoToken: string
  adminTrueName: string
  adminUserId: number
  isSuperAdmin: boolean
  returnUrl: string
  isECardAdmin: number
}

interface QClient {
  clientToken: string
}

interface QCms {
  cmsToken: string
}

interface QYct {
  frontUserId: string
  yctToken: string
}

interface QYkt {
  adminUserId: number
  nickName: string
  yktToken: string
}

interface QYzb {
  yzbToken: string
}

interface QGame {
  gameToken: string
}
