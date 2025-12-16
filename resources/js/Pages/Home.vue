<template>
  <AppLayout>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 md:py-24">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid md:grid-cols-2 gap-12 items-center mb-16">
          <!-- Left: Text Content -->
          <div class="space-y-6">
            <div class="space-y-2">
              <p class="text-sm font-bold text-blue-600 uppercase tracking-wide">Bangkah Launcher</p>
              <h1 class="text-5xl md:text-6xl font-bold leading-tight">
                Laravel Starter Kit
              </h1>
              <p class="text-xl text-gray-600">
                Scaffold production-ready Laravel projects in seconds with Docker, Nginx, Authentication, and more!
              </p>
            </div>

            <!-- CTA Buttons -->
            <div class="flex flex-wrap gap-3 pt-4">
              <a 
                href="/docs/about" 
                class="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition font-semibold"
              >
                Baca Dokumentasi
              </a>
              <a 
                href="/docs/quick-start" 
                class="px-6 py-3 bg-white border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition font-semibold"
              >
                Quick Start
              </a>
              <a 
                href="https://github.com/Bangkah/bangkah-launcher" 
                target="_blank"
                class="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition font-semibold flex items-center gap-2"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v-3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </div>
          </div>

          <!-- Right: Code Block -->
          <div class="bg-white rounded-xl border border-gray-200 p-6 shadow-lg">
            <div class="flex items-center gap-2 mb-4 pb-4 border-b">
              <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Quick Start
              </span>
            </div>
            <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-auto"><code><span class="text-green-400"># Step 1: Create Laravel project</span>
composer create-project laravel/laravel my-project
cd my-project

<span class="text-green-400"># Step 2: Install Bangkah</span>
composer require bangkah/bangkah

<span class="text-green-400"># Step 3: Run scaffolding</span>
php artisan bangkah:create</code></pre>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-16 md:py-24">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-4xl font-bold mb-4 text-center">Fitur Utama</h2>
        <p class="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Semua yang Anda butuhkan untuk memulai project Laravel production-ready
        </p>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Feature 1: Zero Configuration -->
          <a href="/docs/quick-start" class="group p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-lg transition">
            <div class="text-3xl mb-3 font-bold text-blue-600">→</div>
            <h3 class="font-bold text-lg mb-2 group-hover:text-blue-600 transition">Zero Configuration</h3>
            <p class="text-sm text-gray-600">
              Interactive CLI wizard yang memandu Anda step-by-step. Tidak perlu memorize flags!
            </p>
          </a>

          <!-- Feature 2: Docker Ready -->
          <a href="/docs/docker" class="group p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-lg transition">
            <div class="text-3xl mb-3 font-bold text-blue-600">[*]</div>
            <h3 class="font-bold text-lg mb-2 group-hover:text-blue-600 transition">Docker Ready</h3>
            <p class="text-sm text-gray-600">
              Dockerfile + docker-compose.yml generated otomatis dengan PHP, Nginx, MySQL/PostgreSQL
            </p>
          </a>

          <!-- Feature 3: Authentication -->
          <a href="/docs/authentication" class="group p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-lg transition">
            <div class="text-3xl mb-3 font-bold text-blue-600"></div>
            <h3 class="font-bold text-lg mb-2 group-hover:text-blue-600 transition">Auth Scaffolding</h3>
            <p class="text-sm text-gray-600">
              Pilih Laravel Breeze atau UI. Login, register, password reset semuanya siap pakai.
            </p>
          </a>

          <!-- Feature 4: Frontend Flexibility -->
          <a href="/docs/frontend" class="group p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-lg transition">
            <div class="text-3xl mb-3"></div>
            <h3 class="font-bold text-lg mb-2 group-hover:text-blue-600 transition">Frontend Flexibility</h3>
            <p class="text-sm text-gray-600">
              Pilih Tailwind CSS, Bootstrap, atau headless API. Sesuai kebutuhan Anda.
            </p>
          </a>

          <!-- Feature 5: Production Ready -->
          <a href="/docs/deployment" class="group p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-lg transition">
            <div class="text-3xl mb-3"></div>
            <h3 class="font-bold text-lg mb-2 group-hover:text-blue-600 transition">Production Ready</h3>
            <p class="text-sm text-gray-600">
              Docker configs yang optimized untuk production. Deploy dengan confidence.
            </p>
          </a>

          <!-- Feature 6: Modern Stack -->
          <a href="/docs/requirements" class="group p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-lg transition">
            <div class="text-3xl mb-3"></div>
            <h3 class="font-bold text-lg mb-2 group-hover:text-blue-600 transition">Modern Stack</h3>
            <p class="text-sm text-gray-600">
              Laravel 12.x, PHP 8.2+, Vite, Tailwind CSS. Latest dan terbaik.
            </p>
          </a>
        </div>
      </div>
    </section>

    <!-- Documentation Quick Links -->
    <section class="py-16 md:py-24 bg-gradient-to-r from-blue-50 to-purple-50">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-4xl font-bold mb-4 text-center"> Dokumentasi Lengkap</h2>
        <p class="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Akses dokumentasi comprehensive untuk semua kebutuhan Anda
        </p>

        <div class="grid md:grid-cols-4 gap-4">
          <!-- Getting Started -->
          <div class="space-y-3">
            <h3 class="font-bold text-lg text-gray-900">Getting Started</h3>
            <ul class="space-y-2">
              <li><a href="/docs/about" class="text-blue-600 hover:text-blue-700 transition">About Bangkah</a></li>
              <li><a href="/docs/features" class="text-blue-600 hover:text-blue-700 transition">Features</a></li>
              <li><a href="/docs/requirements" class="text-blue-600 hover:text-blue-700 transition">Requirements</a></li>
              <li><a href="/docs/installation" class="text-blue-600 hover:text-blue-700 transition">Installation</a></li>
              <li><a href="/docs/quick-start" class="text-blue-600 hover:text-blue-700 transition">Quick Start</a></li>
            </ul>
          </div>

          <!-- Usage & Examples -->
          <div class="space-y-3">
            <h3 class="font-bold text-lg text-gray-900">Usage & Examples</h3>
            <ul class="space-y-2">
              <li><a href="/docs/usage" class="text-blue-600 hover:text-blue-700 transition">Usage Guide</a></li>
              <li><a href="/docs/examples" class="text-blue-600 hover:text-blue-700 transition">Examples</a></li>
              <li><a href="/docs/templates" class="text-blue-600 hover:text-blue-700 transition">Templates</a></li>
              <li><a href="/docs/docker" class="text-blue-600 hover:text-blue-700 transition">Docker Config</a></li>
              <li><a href="/docs/database" class="text-blue-600 hover:text-blue-700 transition">Database Setup</a></li>
            </ul>
          </div>

          <!-- Configuration -->
          <div class="space-y-3">
            <h3 class="font-bold text-lg text-gray-900"> Configuration</h3>
            <ul class="space-y-2">
              <li><a href="/docs/authentication" class="text-blue-600 hover:text-blue-700 transition">Authentication</a></li>
              <li><a href="/docs/frontend" class="text-blue-600 hover:text-blue-700 transition">Frontend Assets</a></li>
              <li><a href="/docs/deployment" class="text-blue-600 hover:text-blue-700 transition">Deployment</a></li>
              <li><a href="/docs/troubleshooting" class="text-blue-600 hover:text-blue-700 transition">Troubleshooting</a></li>
              <li><a href="/docs/faq" class="text-blue-600 hover:text-blue-700 transition">FAQ</a></li>
            </ul>
          </div>

          <!-- Reference -->
          <div class="space-y-3">
            <h3 class="font-bold text-lg text-gray-900">Reference</h3>
            <ul class="space-y-2">
              <li><a href="/docs/changelog" class="text-blue-600 hover:text-blue-700 transition">Changelog</a></li>
              <li><a href="/docs/api-documentation" class="text-blue-600 hover:text-blue-700 transition">API Docs</a></li>
              <li><a href="/docs/development" class="text-blue-600 hover:text-blue-700 transition">Development</a></li>
              <li><a href="/docs/advanced-usage" class="text-blue-600 hover:text-blue-700 transition">Advanced</a></li>
              <li><a href="/docs/contributing" class="text-blue-600 hover:text-blue-700 transition">Contributing</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 md:py-24">
      <div class="max-w-4xl mx-auto px-4 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Siap untuk memulai?</h2>
        <p class="text-lg opacity-90 mb-8">
          Baca dokumentasi lengkap kami dan setup project Laravel impian Anda dalam beberapa menit.
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <a 
            href="/docs/about" 
            class="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition font-bold"
          >
             Dokumentasi Lengkap
          </a>
          <a 
            href="/docs/quick-start" 
            class="px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white/10 transition font-bold"
          >
             Quick Start
          </a>
        </div>
      </div>
    </section>
  </AppLayout>
</template>

<script setup>
import AppLayout from '../Layouts/AppLayout.vue'
</script>

<style scoped>
</style>
