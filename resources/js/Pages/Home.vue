<template>
  <AppLayout>
    <section class="max-w-7xl mx-auto px-4 py-16">
      <div class="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 class="text-4xl font-bold mb-4">Bangkah Launcher</h1>
          <p class="text-gray-700 mb-6">
            Website resmi berbasis Inertia + Vue, bergaya seperti Laravel/Filament: sederhana, cepat, dan jelas.
          </p>
          <div class="flex gap-3">
            <a href="/docs/about" class="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition">Mulai Dokumentasi</a>
            <a href="https://github.com/Bangkah/bangkah-launcher" target="_blank" class="px-4 py-2 border rounded hover:bg-gray-50 transition">GitHub</a>
          </div>
        </div>
        <div class="rounded-xl border bg-white p-6">
          <h2 class="text-lg font-semibold mb-3">Quick Start</h2>
          <pre class="bg-gray-100 p-4 rounded text-sm overflow-auto"><code>git clone https://github.com/Bangkah/bangkah-launcher.git
cd bangkah-launcher
bangkah-launcher --help</code></pre>
        </div>
      </div>
    </section>
  </AppLayout>
</template>

<script setup>
import AppLayout from '../Layouts/AppLayout.vue'
</script>
