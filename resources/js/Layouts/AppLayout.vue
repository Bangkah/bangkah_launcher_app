<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <header class="border-b bg-white">
      <div class="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <span class="text-xl font-bold">Bangkah</span>
          <span class="text-gray-400">•</span>
          <span class="text-gray-600">Launcher Docs</span>
        </div>
        <nav class="flex items-center gap-6">
          <a class="text-gray-700 hover:text-black" href="/">Beranda</a>
          <a class="text-gray-700 hover:text-black" href="/docs/about">Dokumentasi</a>
          <a class="text-gray-700 hover:text-black" href="https://github.com/Bangkah/bangkah-launcher" target="_blank">GitHub</a>
        </nav>
      </div>
    </header>

    <main class="flex-1">
      <slot />
    </main>

    <footer class="border-t bg-white">
      <div class="max-w-7xl mx-auto px-4 py-6 text-sm text-gray-600">
        © {{ new Date().getFullYear() }} Bangkah — Dibuat dengan Inertia + Vue
      </div>
    </footer>
  </div>
</template>

<script setup>
// Simple layout component
</script>

<style>
/* Scoped styles if needed */
</style>
