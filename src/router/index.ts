import { createRouter, createWebHistory } from 'vue-router'

import { requiresAuthenticationGuard } from './guards/requires-authentication'
import { AuthRouteName } from '@/modules/auth/routes'
import { useAuth } from '@/modules/auth/hooks/use-auth'
import { ContactRouteName } from '@/modules/contacts/routes'
import { LayoutName } from '@/common/layouts/types'

export enum AppRouteName {
  HOME_ROUTE = 'home',
  NOT_FOUND_ROUTE = 'not-found',
  NOT_AUTHORIZED_ROUTE = 'not-authorized',
  SERVER_ERROR_ROUTE = 'server-error',
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: AppRouteName.HOME_ROUTE,
      redirect: { name: ContactRouteName.LIST_ROUTE },
      meta: {
        layout: LayoutName.NO_LAYOUT,
      },
      beforeEnter() {
        const { isAuthenticated } = useAuth()
        return !isAuthenticated() ? { name: AuthRouteName.SIGN_IN } : true
      },
    },
  ],
})

router.beforeEach(requiresAuthenticationGuard)

export default router