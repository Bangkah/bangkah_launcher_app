<template>
  <DocsLayout page-title="Quick Start" current-slug="quick-start">
    <div class="prose prose-sm max-w-none">
      <h1 class="text-4xl font-bold mb-6">🚀 Quick Start</h1>

      <div class="mb-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 rounded-r-lg">
        <p class="text-lg font-semibold text-gray-900 mb-3">30-Second Setup</p>
        <p class="text-gray-700">Jalankan satu command dengan semua defaults yang perfect untuk mayoritas use case:</p>
      </div>

      <CodeBlock code="php artisan bangkah:create \
  --type=web \
  --frontend=tailwind \
  --docker \
  --nginx \
  --db=mysql \
  --yes" />

      <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6 mb-8">
        <p class="text-gray-700"><strong>Ini akan generate:</strong></p>
        <ul class="mt-3 space-y-2 ml-4">
          <li class="flex gap-2"><span class="text-blue-500">✓</span> Dockerfile & docker-compose.yml</li>
          <li class="flex gap-2"><span class="text-blue-500">✓</span> Nginx configuration</li>
          <li class="flex gap-2"><span class="text-blue-500">✓</span> MySQL setup & .env configuration</li>
          <li class="flex gap-2"><span class="text-blue-500">✓</span> Tailwind CSS configured</li>
          <li class="flex gap-2"><span class="text-blue-500">✓</span> Modern homepage dengan Vite</li>
          <li class="flex gap-2"><span class="text-blue-500">✓</span> All dependencies installed & built</li>
        </ul>
      </div>

      <h2 class="text-2xl font-bold mb-4 mt-8">Start Docker Containers</h2>

      <CodeBlock code="docker compose up -d" />

      <p class="text-gray-700 mt-4 mb-8">Tunggu ~30 detik untuk MySQL initialize. Akses aplikasi di:</p>

      <div class="bg-purple-50 border-2 border-purple-300 rounded-lg p-4 text-center mb-8">
        <p class="text-lg font-mono text-purple-900">http://localhost</p>
      </div>

      <div class="grid md:grid-cols-3 gap-4 mt-8">
        <div class="p-4 bg-white border rounded-lg hover:shadow-lg transition-shadow">
          <div class="text-2xl mb-2">✓</div>
          <p class="text-sm text-gray-700"><strong>Ready to Go</strong><br/>Production-grade setup dalam sekejap</p>
        </div>
        <div class="p-4 bg-white border rounded-lg hover:shadow-lg transition-shadow">
          <div class="text-2xl mb-2">⚡</div>
          <p class="text-sm text-gray-700"><strong>Dev Experience</strong><br/>Hot reload, auto-build, live updates</p>
        </div>
        <div class="p-4 bg-white border rounded-lg hover:shadow-lg transition-shadow">
          <div class="text-2xl mb-2">🔧</div>
          <p class="text-sm text-gray-700"><strong>Flexible</strong><br/>Customize sesuai kebutuhan kapan saja</p>
        </div>
      </div>

      <div class="bg-amber-50 border-l-4 border-amber-500 rounded-r-lg p-6 mt-8">
        <h3 class="font-bold text-amber-900 mb-2">Next Steps</h3>
        <ul class="space-y-2 ml-4 text-gray-700">
          <li>1. <code>docker compose exec app php artisan migrate</code> untuk setup database</li>
          <li>2. Buat file <code>.env.local</code> untuk local overrides (optional)</li>
          <li>3. Edit <code>resources/views/home.blade.php</code> untuk customize homepage</li>
          <li>4. Start coding! 🎉</li>
        </ul>
      </div>
    </div>
  </DocsLayout>
</template>

<script setup>
import DocsLayout from '../../Layouts/DocsLayout.vue'
import CodeBlock from '../../Components/CodeBlock.vue'
</script>
