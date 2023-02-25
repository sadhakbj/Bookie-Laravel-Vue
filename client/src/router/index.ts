import { createRouter, createWebHistory } from 'vue-router'
import authGuard from './authguard'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

router.beforeEach(authGuard)

// router.beforeEach((to, from, next) => {
//   const isAuthenticated = useAuthStore().isAuthenticated
//   const user = await AuthService.getCurrentUser()
//   console.log(user)

//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     if (!isAuthenticated) {
//       // user is not authenticated, redirect to login page
//       next({ path: '/login', query: { redirect: to.fullPath } })
//     } else {
//       // user is authenticated, continue to the protected route
//       next()
//     }
//   } else {
//     // this route does not require authentication, continue to the route
//     next()
//   }
// })

export default router
