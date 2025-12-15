<template>
  <div class="mb-3 border rounded-lg overflow-hidden transition-all duration-300" :class="open ? 'border-blue-300 bg-blue-50' : 'border-gray-200 bg-white hover:border-gray-300'">
    <button
      @click="open = !open"
      class="w-full px-5 py-4 text-left font-semibold text-gray-900 hover:bg-gray-50 transition-colors flex items-center justify-between"
    >
      <span>{{ title }}</span>
      <svg
        class="w-5 h-5 text-gray-500 transition-transform duration-300"
        :class="open ? 'transform rotate-180' : ''"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
    </button>
    
    <transition
      enter-active-class="transition-all duration-300"
      leave-active-class="transition-all duration-200"
      enter-from-class="max-h-0 opacity-0"
      enter-to-class="max-h-96 opacity-100"
      leave-from-class="max-h-96 opacity-100"
      leave-to-class="max-h-0 opacity-0"
    >
      <div v-if="open" class="px-5 py-4 border-t border-gray-200 text-gray-700">
        <slot />
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  title: String
})

const open = ref(false)
</script>
