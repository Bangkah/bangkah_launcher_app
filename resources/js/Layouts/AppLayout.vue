<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-white to-slate-50">
    <!-- Header -->
    <header class="sticky top-0 z-40 border-b bg-white/80 backdrop-blur-sm">
      <div class="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <!-- Logo & Branding -->
        <div class="flex items-center gap-3">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-sm">🎯</span>
            </div>
            <span class="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Bangkah
            </span>
          </div>
          <span class="text-gray-400">•</span>
          <span class="text-sm text-gray-600">Laravel Starter Kit</span>
        </div>

        <!-- Navigation -->
        <nav class="hidden md:flex items-center gap-8">
          <a href="/" class="text-gray-700 hover:text-blue-600 transition font-medium text-sm">
            🏠 Beranda
          </a>
          <a href="/docs/about" class="text-gray-700 hover:text-blue-600 transition font-medium text-sm">
            📚 Dokumentasi
          </a>
          <a href="/docs/features" class="text-gray-700 hover:text-blue-600 transition font-medium text-sm">
            ✨ Fitur
          </a>
          <a 
            href="https://github.com/Bangkah/bangkah-launcher" 
            target="_blank" 
            rel="noopener noreferrer"
            class="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition font-medium text-sm"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v-3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </nav>

        <!-- Mobile menu button -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
        >
          <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <transition name="slide-down">
        <div v-if="mobileMenuOpen" class="md:hidden border-t bg-white py-3 px-4">
          <nav class="flex flex-col gap-3">
            <a href="/" @click="mobileMenuOpen = false" class="text-gray-700 hover:text-blue-600 transition font-medium">
              🏠 Beranda
            </a>
            <a href="/docs/about" @click="mobileMenuOpen = false" class="text-gray-700 hover:text-blue-600 transition font-medium">
              📚 Dokumentasi
            </a>
            <a href="/docs/features" @click="mobileMenuOpen = false" class="text-gray-700 hover:text-blue-600 transition font-medium">
              ✨ Fitur
            </a>
            <a 
              href="https://github.com/Bangkah/bangkah-launcher" 
              target="_blank"
              class="text-gray-700 hover:text-blue-600 transition font-medium"
            >
              🔗 GitHub
            </a>
          </nav>
        </div>
      </transition>
    </header>

    <!-- Main Content -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="border-t bg-white/50 backdrop-blur-sm">
      <div class="max-w-7xl mx-auto px-4 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <!-- About Column -->
          <div>
            <h3 class="font-bold text-gray-900 mb-4">🎯 Bangkah</h3>
            <p class="text-sm text-gray-600">
              Modern Laravel starter kit untuk mempercepat development dengan Docker, Nginx, dan Frontend framework pilihan.
            </p>
          </div>

          <!-- Documentation Links -->
          <div>
            <h4 class="font-semibold text-gray-900 mb-4">Dokumentasi</h4>
            <ul class="space-y-2 text-sm">
              <li><a href="/docs/about" class="text-gray-600 hover:text-blue-600 transition">Tentang</a></li>
              <li><a href="/docs/installation" class="text-gray-600 hover:text-blue-600 transition">Instalasi</a></li>
              <li><a href="/docs/quick-start" class="text-gray-600 hover:text-blue-600 transition">Quick Start</a></li>
              <li><a href="/docs/usage" class="text-gray-600 hover:text-blue-600 transition">Usage</a></li>
            </ul>
          </div>

          <!-- Resources -->
          <div>
            <h4 class="font-semibold text-gray-900 mb-4">Resources</h4>
            <ul class="space-y-2 text-sm">
              <li><a href="/docs/troubleshooting" class="text-gray-600 hover:text-blue-600 transition">Troubleshooting</a></li>
              <li><a href="/docs/faq" class="text-gray-600 hover:text-blue-600 transition">FAQ</a></li>
              <li><a href="/docs/contributing" class="text-gray-600 hover:text-blue-600 transition">Kontribusi</a></li>
              <li><a href="/docs/changelog" class="text-gray-600 hover:text-blue-600 transition">Changelog</a></li>
            </ul>
          </div>

          <!-- Community -->
          <div>
            <h4 class="font-semibold text-gray-900 mb-4">Komunitas</h4>
            <ul class="space-y-2 text-sm">
              <li>
                <a 
                  href="https://github.com/Bangkah/bangkah-launcher" 
                  target="_blank"
                  class="text-gray-600 hover:text-blue-600 transition flex items-center gap-2"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v-3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https://laravel.com" 
                  target="_blank"
                  class="text-gray-600 hover:text-blue-600 transition"
                >
                  Laravel
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Divider -->
        <div class="border-t pt-8">
          <div class="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <p>© {{ new Date().getFullYear() }} Bangkah Launcher. All rights reserved.</p>
            <div class="flex items-center gap-6">
              <a href="https://github.com/Bangkah" target="_blank" class="hover:text-blue-600 transition">
                GitHub Profile
              </a>
              <a href="https://laravel.com" target="_blank" class="hover:text-blue-600 transition">
                Laravel
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
