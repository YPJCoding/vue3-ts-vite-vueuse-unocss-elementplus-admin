import { createGlobalState } from '@vueuse/core'
import { ref } from 'vue'

export const useLayoutStore = createGlobalState(() => {
  // 收起状态
  const isCollapse = ref(false)

  // 菜单
  const menuList = ref<IMenu[]>([
    {
      title: '首页',
      icon: 'House',
      path: '/home',
    },
    // {
    //   title: 'XX管理',
    //   icon: 'House',
    //   path: '/management',
    //   children: [
    //     {
    //       title: 'YY管理',
    //       icon: 'House',
    //       path: '/management/list',
    //     },
    //     {
    //       title: 'ZZ管理',
    //       icon: 'House',
    //       path: '/management/top',
    //     },
    //   ],
    // },
  ])

  return {
    isCollapse,
    menuList,
  }
})
