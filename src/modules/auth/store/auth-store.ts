import { reactive } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import { computed } from '@vue/reactivity'

import type { IUserInfo, IUserState } from '@/modules/auth/types/index'
import { ContactRouteName } from '@/modules/contacts/routes'

export const useAuthStore = defineStore('auth', () => {
  const router = useRouter()
  const state = reactive<IUserState>({
    user: null
  })

  const isAuthenticated = computed(() => state.user !== null)

  const setUser = (user: IUserInfo | null) => {
    state.user = user
    router.push({ name: ContactRouteName.LIST_ROUTE })
  }


  return {
    state,
    setUser,
    isAuthenticated
  }
}, {
  persist: true,
},)