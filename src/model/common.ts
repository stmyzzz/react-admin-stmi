export interface IPermission {
  id: number
  type: 'route' | 'button'
  name: string
  // 描述
  description?: string
  // 提示信息
  reminder?: string
}
