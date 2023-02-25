<script lang="ts" setup>
import axios from '@/lib/axios'
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  password: '',
  password_confirmation: ''
})
const handleRegister = async () => {
  try {
    await axios.get('/sanctum/csrf-cookie')
    await axios.post('/register', form)
  } catch (error) {
    alert('we have error')
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
        <form @submit.prevent="handleRegister">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700"> Name </label>
            <div class="mt-1">
              <input
                v-model="form.name"
                type="text"
                name="name"
                id="name"
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>

          <div class="mt-6">
            <label for="email" class="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <div class="mt-1">
              <input
                v-model="form.email"
                type="email"
                name="email"
                id="email"
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            <label for="password_confirmation" class="block text-sm font-medium text-gray-700">
              Confirm password
            </label>
            <div class="mt-1">
              <input
                v-model="form.password_confirmation"
                type="password"
                name="password_confirmation"
                id="password_confirmation"
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>

          <div class="mt-6">
            <button
              type="submit"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Register
            </button>
          </div>

          <div class="mt-6">
            <p class="text-sm font-medium text-gray-700">
              Already have an account?
              <router-link to="/login" class="text-blue-600 hover:text-blue-500">
                Login
              </router-link>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
