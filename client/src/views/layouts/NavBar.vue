<template>
  <nav class="bg-indigo-500">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex-shrink-0">
          <router-link to="/" class="text-white text-lg">Bookie</router-link>
        </div>
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-4">
            <router-link
              to="/"
              class="text-white hover:bg-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
              >Home</router-link
            >
            <router-link
              to="/books"
              class="text-white hover:bg-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
              >Books</router-link
            >
            <router-link
              to="/contact"
              class="text-white hover:bg-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
              >Contact</router-link
            >
          </div>
        </div>
        <div class="md:hidden">
          <button
            @click="openMenu = !openMenu"
            class="text-white hover:text-gray-100 focus:outline-none focus:text-white"
          >
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                v-if="openMenu"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.293 17.707a1 1 0 01-1.414 0L12 10.414l-6.879 6.879a1 1 0 01-1.414-1.414l6.879-6.879L2.707 6.293a1 1 0 011.414-1.414L12 8.586l6.879-6.879a1 1 0 011.414 1.414L13.414 10l6.879 6.879a1 1 0 010 1.414z"
              />
              <path
                v-else
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="md:hidden" :class="{ hidden: !openMenu }" id="menu-options">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <router-link
            to="/"
            class="text-white hover:bg-indigo-600 block px-3 py-2 rounded-md text-base"
            >Home</router-link
          >
          <router-link
            to="/books"
            class="text-white hover:bg-indigo-600 block px-3 py-2 rounded-md text-base"
            >Books</router-link
          >
          <router-link
            to="/contact"
            class="text-white hover:bg-indigo-600 block px-3 py-2 rounded-md text-base"
            >Contact</router-link
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const openMenu = ref(false)
</script>
