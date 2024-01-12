<script setup lang="ts">
import useForm from "@/composables/useForm";
import axios from "@/lib/axios";
import { useAuthStore } from "@/stores/auth";
import { ref } from "vue";
import { useRouter } from "vue-router";


interface ILoginCredentials {
  email: string;
  password: string;
}

const form = useForm<ILoginCredentials>({
  email: "",
  password: "",
});



const router = useRouter();
const authStore = useAuthStore();


const handleLogin = async () => {
  await form.submit(async (fields) => {
    await axios.get("/sanctum/csrf-cookie");
    const {data} = await axios.post("/login", fields);
    const user = data.data;
    authStore.setCurrentUser(user);
    await router.push("/");
    console.log(data);
  });
};

</script>
<template>
  <div class="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="text-center text-3xl font-extrabold text-gray-900">
        Login to your account
      </h2>
    </div>


    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form @submit.prevent="handleLogin">
          <div>
            <label for="email" class="block text-sm text-gray-700"> Email </label>
            <div class="mt-1">
              <input
                  v-model="form.fields.email"
                  type="text"
                  name="email"
                  id="email"
                  class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  :class="{ 'border-red-500': form.hasError('password') }"
              />
            </div>
            <p class="text-xs mt-1 text-red-500" v-if="form.hasError('email')">{{ form.getError("email") }}</p>
          </div>

          <div class="mt-6">
            <label for="password" class="block text-sm font-medium text-gray-700"> Password </label>
            <div class="mt-1">
              <input
                  v-model="form.fields.password"
                  type="password"
                  name="password"
                  id="password"
                  class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  :class="{ 'border-red-500': form.hasError('password') }"
              />
            </div>
            <p class="text-xs mt-1 text-red-500" v-if="form.hasError('password')">{{ form.getError("password") }}</p>
          </div>
          <div class="mt-6">
            <button
                type="submit"
                class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                :class="{ 'bg-blue-400': form.processing, 'hover:bg-blue-700': !form.processing, 'hover:bg-blue-400': form.processing }"
                :disabled="form.processing"
                :style="{ cursor: form.processing ? 'wait' : 'pointer' }"
            >
              {{ form.processing ? 'Logging in...' : 'Login'}}
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
