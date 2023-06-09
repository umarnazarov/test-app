import { LayoutName } from '@/common/layouts/types'
import type { RouteRecordRaw } from 'vue-router'

export enum ContactRouteName {
  LIST_ROUTE = 'contacts',
  CONTACT_ROUTE = 'contact',
}

const routes: RouteRecordRaw[] = [
  {
    path: '/contacts',
    name: ContactRouteName.LIST_ROUTE,
    component: () => import('../views/contacts-list.vue'),
    meta: {
      layout: LayoutName.DEFAULT_LAYOUT,
      requiresAuthentication: true,
    },
  },
  {
    path: '/contact/:id',
    name: ContactRouteName.CONTACT_ROUTE,
    component: () => import('../views/contact-item.vue'),
    meta: {
      layout: LayoutName.DEFAULT_LAYOUT,
      requiresAuthentication: true,
    },
  },
]

export default routes