<template>
  <div class="my-6 relative group">
    <div class="bg-gray-900 rounded-lg p-4 overflow-x-auto border border-gray-700 hover:border-gray-600 transition-colors">
      <pre class="text-gray-100 text-sm font-mono leading-relaxed"><code>{{ code }}</code></pre>
    </div>
    <button
      @click="copyCode"
      :class="[
        'absolute top-2 right-2 px-3 py-1 rounded text-xs font-medium transition-all duration-200',
        copied
          ? 'bg-green-500 text-white'
          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
      ]"
    >
      {{ copied ? '✓ Copied' : 'Copy' }}
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  code: String
})

const copied = ref(false)

const copyCode = async () => {
  await navigator.clipboard.writeText(props.code)
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 2000)
}
</script>

<style scoped>
pre {
  margin: 0;
}
</style>
