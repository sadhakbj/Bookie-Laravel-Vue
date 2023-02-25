import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    currentUser: null
  }),
  actions: {
    setCurrentUser(user: any) {
      this.currentUser = user
    }
  },
  getters: {
    getUser(): any {
      return this.currentUser
    },
    isAuthenticated(): boolean {
      return !!this.currentUser
    }
  }
})
