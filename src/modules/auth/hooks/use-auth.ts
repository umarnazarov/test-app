import type { IUserInfo } from '@/modules/auth/types/'
import { useAuthStore } from '@/modules/auth/store/auth-store'

export function useAuth() {
  const store = useAuthStore()

  function isAuthenticated() {
    return store.isAuthenticated
  }

  async function login(user: IUserInfo) {
    store.setUser(user)
  }

  function logout() {
    store.setUser(null)
  }

  return {
    isAuthenticated,
    login,
    logout,
  }
}