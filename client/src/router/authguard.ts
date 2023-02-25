import AuthService from '@/services/AuthService'
import { useAuthStore } from '@/stores/auth'

const authGuard = async (to: any, from: any, next: any) => {
  const authStore = useAuthStore()
  let isAuthenticated = useAuthStore().isAuthenticated

  if (!isAuthenticated) {
    const user = await AuthService.getCurrentUser()
    if (user) {
      authStore.setCurrentUser(user)
      isAuthenticated = true
    }
  }

  if (to.matched.some((record: any) => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      next({ name: 'login' })
    } else {
      next()
    }
  } else {
    if (['login', 'register'].includes(to.name) && isAuthenticated) {
      next({ name: 'home' })
    } else {
      next()
    }
  }
}

export default authGuard
