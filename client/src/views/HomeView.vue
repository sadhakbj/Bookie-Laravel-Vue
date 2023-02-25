<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
const user = authStore.getUser
</script>

<template>
  <main>
    <h1>This is the main page</h1>
    <p>{{ user.name }}</p>
  </main>
</template>
