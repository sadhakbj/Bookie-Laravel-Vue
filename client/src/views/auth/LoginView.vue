<script setup lang="ts">
import axios from '@/lib/axios'
import { useAuthStore } from '@/stores/auth'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const form = reactive<{ email: string; password: string }>({
  email: '',
  password: ''
})
const router = useRouter()
const authStore = useAuthStore()

const handleLogin = async () => {
  await axios.get('/sanctum/csrf-cookie')
  try {
    const { data } = await axios.post('/login', form)
    const user = data.data
    authStore.setCurrentUser(user)

    router.push('/')
  } catch (error) {
    console.log(error)

    alert('something went wrong')
  }
}
</script>
<template>
  <div class="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Register for an account
      </h2>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form @submit.prevent="handleLogin">
          <div>
            <label for="email" class="block text-sm text-gray-700"> Email </label>
            <div class="mt-1">
              <input
                v-model="form.email"
                type="text"
                name="email"
                id="email"
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
          </div>

          <div class="mt-6">
            <label for="password" class="block text-sm font-medium text-gray-700"> Password </label>
            <div class="mt-1">
              <input
                v-model="form.password"
                type="password"
                name="password"
                id="password"
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
          <div class="mt-6">
            <button
              type="submit"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Login
            </button>
          </div>

          <div class="mt-6">
            <p class="text-sm text-gray-700">
              Don't have an account?
              <router-link to="/register" class="text-blue-600 hover:text-blue-500">
                Register
              </router-link>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
