<template>
  <DocsLayout page-title="Features" current-slug="features">
    <div class="prose prose-sm max-w-none">
      <h1 class="text-4xl font-bold mb-6">✨ Features</h1>

      <div class="space-y-6">
        <div class="group border-l-4 border-blue-500 bg-blue-50 p-6 rounded-r-lg hover:shadow-md transition-all duration-300">
          <h2 class="text-2xl font-bold text-blue-900 mb-2">🚀 Zero Configuration</h2>
          <p class="text-gray-700">CLI interaktif yang memandu step-by-step. Tidak perlu memorize flags atau options!</p>
        </div>

        <div class="group border-l-4 border-purple-500 bg-purple-50 p-6 rounded-r-lg hover:shadow-md transition-all duration-300">
          <h2 class="text-2xl font-bold text-purple-900 mb-2">🐳 Docker Ready</h2>
          <p class="text-gray-700 mb-3">Dockerfile + docker-compose.yml generated otomatis dengan:</p>
          <ul class="space-y-2 ml-4">
            <li class="flex gap-2"><span class="text-purple-500">•</span> PHP 8.2-FPM optimized</li>
            <li class="flex gap-2"><span class="text-purple-500">•</span> Nginx latest stable</li>
            <li class="flex gap-2"><span class="text-purple-500">•</span> MySQL 8 atau PostgreSQL 16</li>
            <li class="flex gap-2"><span class="text-purple-500">•</span> Persistent volumes & network configured</li>
          </ul>
        </div>

        <div class="group border-l-4 border-green-500 bg-green-50 p-6 rounded-r-lg hover:shadow-md transition-all duration-300">
          <h2 class="text-2xl font-bold text-green-900 mb-2">🌐 Nginx Support</h2>
          <p class="text-gray-700 mb-3">Production-ready Nginx configuration:</p>
          <ul class="space-y-2 ml-4">
            <li class="flex gap-2"><span class="text-green-500">•</span> FastCGI caching</li>
            <li class="flex gap-2"><span class="text-green-500">•</span> Gzip compression</li>
            <li class="flex gap-2"><span class="text-green-500">•</span> Static file optimization</li>
            <li class="flex gap-2"><span class="text-green-500">•</span> Laravel-optimized routing</li>
          </ul>
        </div>

        <div class="group border-l-4 border-orange-500 bg-orange-50 p-6 rounded-r-lg hover:shadow-md transition-all duration-300">
          <h2 class="text-2xl font-bold text-orange-900 mb-2">📦 Multiple Templates</h2>
          <div class="grid md:grid-cols-2 gap-4 mt-4">
            <div class="bg-white p-4 rounded border border-orange-200">
              <h3 class="font-semibold text-orange-900 mb-2">Web Template</h3>
              <p class="text-sm text-gray-700">Homepage, routes, HomeController</p>
            </div>
            <div class="bg-white p-4 rounded border border-orange-200">
              <h3 class="font-semibold text-orange-900 mb-2">API Template</h3>
              <p class="text-sm text-gray-700">Health endpoint, CORS, API routes</p>
            </div>
          </div>
        </div>

        <div class="group border-l-4 border-pink-500 bg-pink-50 p-6 rounded-r-lg hover:shadow-md transition-all duration-300">
          <h2 class="text-2xl font-bold text-pink-900 mb-2">🎨 Frontend Flexibility</h2>
          <p class="text-gray-700 mb-3">Pilih framework sesuai preferensi:</p>
          <div class="grid md:grid-cols-3 gap-3 ml-4">
            <div class="bg-white p-3 rounded border border-pink-200 text-sm">
              <span class="font-semibold">Tailwind CSS</span><br/>
              <span class="text-gray-600">Recommended</span>
            </div>
            <div class="bg-white p-3 rounded border border-pink-200 text-sm">
              <span class="font-semibold">Bootstrap 5</span><br/>
              <span class="text-gray-600">Classic & responsive</span>
            </div>
            <div class="bg-white p-3 rounded border border-pink-200 text-sm">
              <span class="font-semibold">None</span><br/>
              <span class="text-gray-600">Headless API</span>
            </div>
          </div>
        </div>

        <div class="group border-l-4 border-red-500 bg-red-50 p-6 rounded-r-lg hover:shadow-md transition-all duration-300">
          <h2 class="text-2xl font-bold text-red-900 mb-2">🔐 Auth Scaffolding</h2>
          <p class="text-gray-700 mb-3">Lengkap dengan login, register, password reset, email verification:</p>
          <div class="grid md:grid-cols-2 gap-4 ml-4">
            <div class="bg-white p-3 rounded border border-red-200 text-sm">
              <span class="font-semibold">Laravel Breeze</span><br/>
              <span class="text-gray-600">Minimal & Tailwind</span>
            </div>
            <div class="bg-white p-3 rounded border border-red-200 text-sm">
              <span class="font-semibold">Laravel UI</span><br/>
              <span class="text-gray-600">Comprehensive & Bootstrap</span>
            </div>
          </div>
        </div>

        <div class="group border-l-4 border-cyan-500 bg-cyan-50 p-6 rounded-r-lg hover:shadow-md transition-all duration-300">
          <h2 class="text-2xl font-bold text-cyan-900 mb-2">💾 Database Options</h2>
          <p class="text-gray-700 mb-3">Support multiple databases dengan auto-config:</p>
          <ul class="space-y-2 ml-4">
            <li class="flex gap-2"><span class="text-cyan-500">•</span> <strong>MySQL 8.0</strong> - most popular</li>
            <li class="flex gap-2"><span class="text-cyan-500">•</span> <strong>PostgreSQL 16</strong> - advanced features</li>
            <li class="flex gap-2"><span class="text-cyan-500">•</span> Auto-configured .env dengan credentials tepat</li>
          </ul>
        </div>

        <div class="group border-l-4 border-indigo-500 bg-indigo-50 p-6 rounded-r-lg hover:shadow-md transition-all duration-300">
          <h2 class="text-2xl font-bold text-indigo-900 mb-2">⚡ Auto Build</h2>
          <p class="text-gray-700">Frontend assets di-build otomatis setelah:</p>
          <ul class="space-y-2 ml-4 mt-3">
            <li class="flex gap-2"><span class="text-indigo-500">•</span> NPM package installation</li>
            <li class="flex gap-2"><span class="text-indigo-500">•</span> Auth scaffolding installation</li>
            <li class="flex gap-2"><span class="text-indigo-500">•</span> No manual npm run build needed!</li>
          </ul>
        </div>
      </div>
    </div>
  </DocsLayout>
</template>

<script setup>
import DocsLayout from '../../Layouts/DocsLayout.vue'
</script>
