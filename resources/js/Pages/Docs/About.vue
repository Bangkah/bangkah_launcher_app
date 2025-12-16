<template>
  <DocsLayout page-title="About" current-slug="about">
    <div class="prose prose-sm max-w-none">
      <h1 class="text-4xl font-bold mb-4 text-gray-900">About Bangkah</h1>
      
      <div class="mb-8 p-6 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg animate-slide-in">
        <p class="text-lg text-gray-700 font-semibold">
          Bangkah adalah modern Laravel starter kit yang mempercepat setup proyek dengan scaffolding otomatis: Docker, Nginx, database, autentikasi, dan frontend.
        </p>
      </div>

      <h2 class="text-2xl font-bold mt-8 mb-4">Why Bangkah?</h2>
      
      <div class="grid md:grid-cols-2 gap-4 mb-8">
        <div class="p-4 border rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
          <div class="text-3xl mb-2">⏱️</div>
          <h3 class="font-semibold mb-2">Hemat Waktu</h3>
          <p class="text-gray-600 text-sm">Setup 2–3 menit, biasanya butuh 30-60 menit</p>
        </div>
        <div class="p-4 border rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
          <div class="text-3xl mb-2"></div>
          <h3 class="font-semibold mb-2">Best Practices</h3>
          <p class="text-gray-600 text-sm">Mengikuti konvensi Laravel & standards industri</p>
        </div>
        <div class="p-4 border rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
          <div class="text-3xl mb-2"></div>
          <h3 class="font-semibold mb-2">Fleksibel</h3>
          <p class="text-gray-600 text-sm">CLI interaktif, customize sesuai kebutuhan</p>
        </div>
        <div class="p-4 border rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
          <div class="text-3xl mb-2"></div>
          <h3 class="font-semibold mb-2">Siap Produksi</h3>
          <p class="text-gray-600 text-sm">Konfigurasi Docker optimal untuk production</p>
        </div>
        <div class="p-4 border rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
          <div class="text-3xl mb-2"></div>
          <h3 class="font-semibold mb-2">Modern Stack</h3>
          <p class="text-gray-600 text-sm">Laravel 12.x dengan fitur terbaru</p>
        </div>
        <div class="p-4 border rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
          <div class="text-3xl mb-2"></div>
          <h3 class="font-semibold mb-2">Frontend Agnostic</h3>
          <p class="text-gray-600 text-sm">Tailwind, Bootstrap, atau headless API</p>
        </div>
      </div>

      <h2 class="text-2xl font-bold mt-8 mb-4">Apa Yang Membuat Berbeda?</h2>
      
      <ul class="space-y-3 mb-8">
        <li class="flex gap-3 items-start hover:translate-x-1 transition-transform">
          <span class="text-green-500 font-bold text-xl">✓</span>
          <span class="text-gray-700"><strong>Tanpa arsitektur yang memaksa</strong> - hanya clean Laravel best practices</span>
        </li>
        <li class="flex gap-3 items-start hover:translate-x-1 transition-transform">
          <span class="text-green-500 font-bold text-xl">✓</span>
          <span class="text-gray-700"><strong>CLI interaktif</strong> yang menyesuaikan kebutuhan</span>
        </li>
        <li class="flex gap-3 items-start hover:translate-x-1 transition-transform">
          <span class="text-green-500 font-bold text-xl">✓</span>
          <span class="text-gray-700"><strong>Docker untuk dev & prod</strong> dengan configs yang optimal</span>
        </li>
        <li class="flex gap-3 items-start hover:translate-x-1 transition-transform">
          <span class="text-green-500 font-bold text-xl">✓</span>
          <span class="text-gray-700"><strong>Build aset otomatis</strong> - no manual intervention</span>
        </li>
        <li class="flex gap-3 items-start hover:translate-x-1 transition-transform">
          <span class="text-green-500 font-bold text-xl">✓</span>
          <span class="text-gray-700"><strong>Kurva belajar rendah</strong> - standard Laravel structure</span>
        </li>
      </ul>

      <div class="mt-8 p-6 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg">
        <p class="text-gray-700">
          Bangkah dirancang untuk developer yang ingin scaffolding cepat tanpa dipaksa mengikuti arsitektur opinionated. 
          Mulai dari zero dalam hitungan menit, bukan jam.
        </p>
      </div>
    </div>
  </DocsLayout>
</template>

<script setup>
import DocsLayout from '../../Layouts/DocsLayout.vue'
</script>

<style scoped>
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-slide-in {
  animation: slideIn 0.6s ease-out;
}
</style>
