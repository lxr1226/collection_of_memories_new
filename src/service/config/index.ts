let BASE_URL = ''
if (import.meta.env.PROD) {
  // 生产环境
  BASE_URL = 'http://47.108.144.113:7824'
} else {
  // 开发环境
  BASE_URL = 'http://47.108.144.113:7824'
}
// http://172.17.154.201:8080

// 10秒
export const TIME_OUT = 10000

export { BASE_URL }
