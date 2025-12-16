<template>
  <div class="min-h-screen flex flex-col bg-white">
    <!-- Header -->
    <header class="sticky top-0 z-40 border-b border-gray-200 bg-white">
      <div class="max-w-full mx-auto px-6 py-4 flex items-center justify-between">
        <div class="flex items-center gap-4">
          <button @click="sidebarOpen = !sidebarOpen" class="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          <a href="/" class="flex items-center gap-2 font-bold text-xl text-gray-900 hover:text-blue-600 transition">
            <!-- Logo SVG -->
            <svg class="w-8 h-8" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="19" stroke="url(#grad1)" stroke-width="2"/>
              <g transform="translate(20, 20)">
                <rect x="-3" y="-8" width="2" height="12" fill="url(#grad2)" rx="1"/>
                <rect x="1" y="-4" width="2" height="12" fill="url(#grad2)" rx="1"/>
                <rect x="-6" y="-7" width="14" height="2" fill="url(#grad2)" rx="1"/>
                <path d="M 8 -7 L 10 -5 L 7 -2" fill="url(#grad2)"/>
              </g>
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#2563eb;stop-opacity:1" />
                  <stop offset="100%" style="stop-color:#7c3aed;stop-opacity:1" />
                </linearGradient>
                <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#2563eb;stop-opacity:1" />
                  <stop offset="100%" style="stop-color:#7c3aed;stop-opacity:1" />
                </linearGradient>
              </defs>
            </svg>
            <span>Bangkah</span>
          </a>
        </div>
        <div class="flex items-center gap-4">
          <a href="/docs/about" class="hidden md:inline text-sm text-gray-600 hover:text-gray-900 transition">Documentation</a>
          <a href="https://github.com/Bangkah/bangkah-launcher" target="_blank" class="text-sm text-gray-600 hover:text-gray-900 transition">GitHub</a>
        </div>
      </div>
    </header>

    <!-- Main Layout -->
    <div class="flex flex-1 max-w-full w-full bg-gray-50">
      <!-- Left Sidebar -->
      <aside class="hidden lg:block w-72 min-h-screen border-r-2 border-blue-500 bg-gradient-to-b from-white to-gray-50 p-0 overflow-y-auto shadow-lg animate-slide-in-left">
        <!-- Sidebar Header -->
        <div class="sticky top-0 bg-white border-b-2 border-gray-300 px-6 py-5 shadow-sm z-10">
          <div class="mb-3">
            <p class="text-xs font-bold text-gray-600 uppercase tracking-widest mb-2">Search Documentation</p>
          </div>
          <div class="relative">
            <input
              v-model="searchQuery"
              @focus="showSearchResults = true"
              @input="handleSearch"
              type="text"
              placeholder="Cari judul atau konten..."
              class="w-full px-4 py-3 pr-10 border-2 border-gray-300 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition bg-white"
            />
            <svg v-if="!searchQuery" class="absolute right-3 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
            <button v-if="searchQuery" @click="clearSearch" class="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600 transition">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          
          <!-- Search Results Dropdown -->
          <div v-if="showSearchResults && searchQuery && searchResults.length > 0" class="absolute left-6 right-6 mt-2 bg-white border-2 border-blue-500 rounded-lg shadow-2xl max-h-96 overflow-y-auto z-50 animate-fade-in-up">
            <div class="p-2">
              <div class="text-xs font-bold text-gray-500 uppercase tracking-wider px-3 py-2">
                {{ searchResults.length }} hasil ditemukan
              </div>
              <a 
                v-for="(result, index) in searchResults" 
                :key="index"
                :href="result.url"
                class="block px-3 py-3 rounded-lg hover:bg-blue-50 transition group"
              >
                <div class="flex items-start gap-3">
                  <svg class="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  <div class="flex-1 min-w-0">
                    <div class="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition" v-html="highlightText(result.title)"></div>
                    <div class="text-xs text-gray-500 mt-1 line-clamp-2" v-html="highlightText(result.excerpt)"></div>
                    <div class="text-xs text-blue-600 mt-1">{{ result.section }}</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          
          <!-- No Results -->
          <div v-if="showSearchResults && searchQuery && searchResults.length === 0" class="absolute left-6 right-6 mt-2 bg-white border-2 border-gray-300 rounded-lg shadow-lg p-4 z-50 animate-fade-in-up">
            <div class="text-center text-gray-500">
              <svg class="w-12 h-12 mx-auto mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <p class="text-sm font-medium">Tidak ada hasil untuk "{{ searchQuery }}"</p>
              <p class="text-xs mt-1">Coba gunakan kata kunci yang berbeda</p>
            </div>
          </div>
        </div>

        <!-- Navigation Sections -->
        <nav class="px-6 py-6 space-y-7">
          <template v-for="section in filteredSections" :key="section.title">
            <div class="border-l-4 border-blue-500 pl-4">
              <!-- Section Label -->
              <h2 class="text-sm font-extrabold text-blue-700 uppercase tracking-widest px-0 py-2 mb-4">
                {{ section.title }}
              </h2>
              
              <!-- Section Links -->
              <ul class="space-y-2">
                <li v-for="item in section.items" :key="item.slug">
                  <a
                    :href="`/docs/${item.slug}`"
                    :class="[
                      'block px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ease-in-out transform hover:translate-x-1',
                      currentPage === item.slug
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg scale-105 border-l-4 border-blue-300 animate-pulse-slow'
                        : 'text-gray-800 hover:text-blue-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 hover:shadow-md hover:scale-102 border-l-4 border-transparent hover:border-blue-400'
                    ]"
                  >
                    {{ item.title }}
                  </a>
                </li>
              </ul>
            </div>
          </template>

          <!-- Empty State -->
          <div v-if="filteredSections.length === 0" class="px-4 py-10 text-center text-gray-500">
            <p class="text-sm font-medium">Tidak ada hasil untuk "{{ searchQuery }}"</p>
          </div>
        </nav>

        <!-- Sidebar Footer -->
        <div class="border-t-2 border-gray-300 px-6 py-6 mt-8 space-y-5 bg-gray-100">
          <!-- Resources -->
          <div>
            <h3 class="text-xs font-extrabold text-gray-700 uppercase tracking-widest mb-3">Resources</h3>
            <ul class="space-y-2 text-sm">
              <li>
                <a href="/" class="text-blue-700 hover:text-blue-900 font-semibold hover:underline transition flex items-center gap-2">
                  Kembali ke Home
                </a>
              </li>
              <li>
                <a href="https://github.com/Bangkah/bangkah-launcher" target="_blank" class="text-blue-700 hover:text-blue-900 font-semibold hover:underline transition flex items-center gap-2">
                  Buka di GitHub
                </a>
              </li>
            </ul>
          </div>

          <!-- Version -->
          <div class="pt-4 border-t-2 border-gray-300">
            <p class="text-xs text-gray-700 font-bold">
              <span class="bg-blue-600 text-white px-2 py-1 rounded-md">v1.0.4</span>
              <span class="text-gray-600 ml-2">Terbaru</span>
            </p>
          </div>
        </div>
      </aside>

      <!-- Mobile Sidebar -->
      <transition name="slide-fade">
        <aside
          v-show="sidebarOpen"
          class="lg:hidden w-72 min-h-screen border-r-2 border-blue-500 bg-gradient-to-b from-white to-gray-50 p-0 overflow-y-auto fixed inset-y-16 left-0 z-30 h-[calc(100vh-4rem)] shadow-lg"
        >
          <!-- Sidebar Header -->
          <div class="sticky top-0 bg-white border-b-2 border-gray-300 px-6 py-5 shadow-sm">
            <div class="mb-3">
              <p class="text-xs font-bold text-gray-600 uppercase tracking-widest mb-2">Search Documentation</p>
            </div>
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Cari dokumentasi..."
              class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition bg-white"
            />
          </div>

          <!-- Navigation Sections -->
          <nav class="px-6 py-6 space-y-7">
            <template v-for="section in filteredSections" :key="section.title">
              <div class="border-l-4 border-blue-500 pl-4">
                <!-- Section Label -->
                <h2 class="text-sm font-extrabold text-blue-700 uppercase tracking-widest px-0 py-2 mb-4">
                  {{ section.title }}
                </h2>
                
                <!-- Section Links -->
                <ul class="space-y-2">
                  <li v-for="item in section.items" :key="item.slug">
                    <a
                      :href="`/docs/${item.slug}`"
                      @click="sidebarOpen = false"
                      :class="[
                        'block px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-200 transform',
                        currentPage === item.slug
                          ? 'bg-blue-600 text-white shadow-md scale-105 border-l-4 border-blue-300'
                          : 'text-gray-800 hover:text-blue-700 hover:bg-blue-100 hover:shadow-sm border-l-4 border-transparent'
                      ]"
                    >
                      {{ item.title }}
                    </a>
                  </li>
                </ul>
              </div>
            </template>

            <!-- Empty State -->
            <div v-if="filteredSections.length === 0" class="px-4 py-10 text-center text-gray-500">
              <p class="text-sm font-medium">Tidak ada hasil untuk "{{ searchQuery }}"</p>
            </div>
          </nav>

          <!-- Sidebar Footer -->
          <div class="border-t-2 border-gray-300 px-6 py-6 mt-8 space-y-5 bg-gray-100">
            <!-- Resources -->
            <div>
              <h3 class="text-xs font-extrabold text-gray-700 uppercase tracking-widest mb-3">Resources</h3>
              <ul class="space-y-2 text-sm">
                <li>
                  <a href="/" class="text-blue-700 hover:text-blue-900 font-semibold hover:underline transition flex items-center gap-2">
                    Kembali ke Home
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Bangkah/bangkah-launcher" target="_blank" class="text-blue-700 hover:text-blue-900 font-semibold hover:underline transition flex items-center gap-2">
                    Buka di GitHub
                  </a>
                </li>
              </ul>
            </div>

            <!-- Version -->
            <div class="pt-4 border-t-2 border-gray-300">
              <p class="text-xs text-gray-700 font-bold">
                <span class="bg-blue-600 text-white px-2 py-1 rounded-md">v1.0.4</span>
                <span class="text-gray-600 ml-2">Terbaru</span>
              </p>
            </div>
          </div>
        </aside>
      </transition>

      <!-- Mobile Overlay -->
      <div
        v-if="sidebarOpen"
        @click="sidebarOpen = false"
        class="fixed inset-0 bg-black/50 z-20 lg:hidden"
      ></div>

      <!-- Main Content -->
      <main class="flex-1 overflow-y-auto bg-white">
        <div class="max-w-4xl mx-auto px-6 py-8 lg:px-12 animate-fade-in-up">
          <!-- Breadcrumb -->
          <div class="mb-8">
            <nav class="flex items-center gap-2 text-sm text-gray-600">
              <a href="/" class="hover:text-gray-900 transition">Home</a>
              <span class="text-gray-400">›</span>
              <a href="/docs/about" class="hover:text-gray-900 transition">Documentation</a>
              <span class="text-gray-400">›</span>
              <span class="text-gray-900 font-bold">{{ pageTitle }}</span>
            </nav>
          </div>

          <!-- Page Title -->
          <h1 class="text-4xl font-extrabold text-gray-900 mb-8 pb-6 border-b-2 border-blue-500 animate-fade-in">
            {{ pageTitle }}
          </h1>

          <!-- Page Content -->
          <article class="prose prose-base max-w-none animate-fade-in-delayed 
            prose-headings:text-gray-900 prose-headings:font-bold
            prose-h2:text-3xl prose-h2:mt-8 prose-h2:mb-4
            prose-h3:text-2xl prose-h3:mt-6 prose-h3:mb-3
            prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline 
            prose-code:text-red-600 prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
            prose-pre:bg-gray-900 prose-pre:text-gray-100
            prose-li:text-gray-700 prose-p:text-gray-700">
            <slot />
          </article>

          <!-- Navigation Buttons -->
          <div class="mt-12 pt-8 border-t-2 border-gray-300 flex justify-between gap-4 animate-fade-in-up">
            <div v-if="previousPage" class="text-left">
              <a :href="`/docs/${previousPage.slug}`" class="group inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-blue-600 text-gray-700 hover:text-white rounded-lg text-sm font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                <svg class="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
                {{ previousPage.title }}
              </a>
            </div>
            <div v-else></div>
            <div v-if="nextPage" class="text-right">
              <a :href="`/docs/${nextPage.slug}`" class="group inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-blue-600 text-gray-700 hover:text-white rounded-lg text-sm font-bold ml-auto transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                {{ nextPage.title }}
                <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </main>

      <!-- Right Sidebar - On This Page -->
      <aside class="hidden xl:block w-72 min-h-screen border-l border-gray-200 bg-gray-50 overflow-y-auto animate-slide-in-right">
        <div class="sticky top-24 px-6 py-8">
          <!-- On This Page Header -->
          <div class="mb-6">
            <h3 class="text-sm font-bold text-gray-900 mb-4">
              On this page
            </h3>
          </div>
          
          <!-- Table of Contents (Auto-generated) -->
          <nav class="space-y-3 text-sm" id="toc-container">
            <div v-if="tableOfContents.length === 0" class="text-gray-500 text-xs">
              No headings found
            </div>
            <a 
              v-for="(item, index) in tableOfContents" 
              :key="index"
              :href="`#${item.id}`"
              :class="[
                'block hover:text-blue-600 hover:translate-x-1 transition-all duration-200 border-l-2 hover:border-blue-500 py-1',
                item.level === 2 ? 'text-gray-700 font-medium pl-3 border-transparent' : 'text-gray-600 pl-6 border-transparent',
                activeHeading === item.id ? 'text-blue-600 border-blue-500' : ''
              ]"
              @click="smoothScroll(item.id)"
            >
              {{ item.text }}
            </a>
          </nav>

          <!-- Separator -->
          <div class="my-8 border-t border-gray-200"></div>

          <!-- Quick Links Section -->
          <div>
            <h4 class="text-sm font-bold text-gray-900 mb-4">Related Pages</h4>
            <ul class="space-y-3 text-sm">
              <li v-for="link in relatedPages" :key="link.slug">
                <a :href="`/docs/${link.slug}`" class="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  {{ link.title }}
                </a>
              </li>
            </ul>
          </div>

          <!-- Separator -->
          <div class="my-8 border-t border-gray-200"></div>

          <!-- Help Section -->
          <div class="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <h5 class="text-sm font-bold text-blue-900 mb-2">Need Help?</h5>
            <p class="text-xs text-blue-800 mb-3">
              Can't find what you're looking for?
            </p>
            <a href="https://github.com/Bangkah/bangkah-launcher/issues" target="_blank" class="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 hover:text-blue-700 transition">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Report an Issue
            </a>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from 'vue'

const props = defineProps({
  pageTitle: String,
  currentSlug: String,
})

const sidebarOpen = ref(false)
const searchQuery = ref('')
const tableOfContents = ref([])
const activeHeading = ref('')
const showSearchResults = ref(false)
const searchResults = ref([])

const allPages = [
  { title: 'About', slug: 'about', section: 'Getting Started', keywords: 'bangkah laravel php project generator scaffold introduction overview' },
  { title: 'Features', slug: 'features', section: 'Getting Started', keywords: 'features capabilities template docker database authentication frontend tailwind bootstrap breeze' },
  { title: 'Requirements', slug: 'requirements', section: 'Getting Started', keywords: 'requirements php composer node npm docker git system minimum' },
  { title: 'Installation', slug: 'installation', section: 'Getting Started', keywords: 'install setup composer global require download' },
  { title: 'Quick Start', slug: 'quick-start', section: 'Getting Started', keywords: 'quick start tutorial guide 30 seconds begin first project' },
  { title: 'Usage', slug: 'usage', section: 'Usage & Examples', keywords: 'usage command cli interactive non-interactive options flags' },
  { title: 'Examples', slug: 'examples', section: 'Usage & Examples', keywords: 'examples demo sample tutorial walkthrough' },
  { title: 'Templates', slug: 'templates', section: 'Usage & Examples', keywords: 'templates web api rest graphql starter boilerplate' },
  { title: 'Docker', slug: 'docker', section: 'Configuration', keywords: 'docker container compose mysql postgres redis nginx environment' },
  { title: 'Database', slug: 'database', section: 'Configuration', keywords: 'database mysql postgresql sqlite migration seeder connection' },
  { title: 'Authentication', slug: 'authentication', section: 'Configuration', keywords: 'auth authentication breeze jetstream sanctum passport login register' },
  { title: 'Frontend Assets', slug: 'frontend', section: 'Configuration', keywords: 'frontend css javascript tailwind bootstrap vite mix npm build' },
  { title: 'Deployment', slug: 'deployment', section: 'Deployment & Help', keywords: 'deploy deployment production server aws digitalocean forge vapor hosting' },
  { title: 'Troubleshooting', slug: 'troubleshooting', section: 'Deployment & Help', keywords: 'troubleshooting problems issues errors bugs fix solution help' },
  { title: 'FAQ', slug: 'faq', section: 'Deployment & Help', keywords: 'faq questions answers help support common issues' },
  { title: 'Development', slug: 'development', section: 'Development', keywords: 'development local environment setup contributing build test' },
  { title: 'Advanced Usage', slug: 'advanced-usage', section: 'Development', keywords: 'advanced custom customize configuration hooks plugins extend' },
  { title: 'Contributing', slug: 'contributing', section: 'Development', keywords: 'contributing contribute pull request issue bug feature development' },
  { title: 'Changelog', slug: 'changelog', section: 'Reference', keywords: 'changelog version release history updates changes new features' },
  { title: 'API Documentation', slug: 'api-documentation', section: 'Reference', keywords: 'api documentation reference endpoints routes rest json response' },
]

const sections = [
  {
    title: 'Getting Started',
    items: [
      { title: 'About', slug: 'about' },
      { title: 'Features', slug: 'features' },
      { title: 'Requirements', slug: 'requirements' },
      { title: 'Installation', slug: 'installation' },
      { title: 'Quick Start', slug: 'quick-start' },
    ]
  },
  {
    title: 'Usage & Examples',
    items: [
      { title: 'Usage', slug: 'usage' },
      { title: 'Examples', slug: 'examples' },
      { title: 'Templates', slug: 'templates' },
    ]
  },
  {
    title: 'Configuration',
    items: [
      { title: 'Docker', slug: 'docker' },
      { title: 'Database', slug: 'database' },
      { title: 'Authentication', slug: 'authentication' },
      { title: 'Frontend Assets', slug: 'frontend' },
    ]
  },
  {
    title: 'Deployment & Help',
    items: [
      { title: 'Deployment', slug: 'deployment' },
      { title: 'Troubleshooting', slug: 'troubleshooting' },
      { title: 'FAQ', slug: 'faq' },
    ]
  },
  {
    title: 'Development',
    items: [
      { title: 'Development', slug: 'development' },
      { title: 'Advanced Usage', slug: 'advanced-usage' },
      { title: 'Contributing', slug: 'contributing' },
    ]
  },
  {
    title: 'Reference',
    items: [
      { title: 'Changelog', slug: 'changelog' },
      { title: 'API Documentation', slug: 'api-documentation' },
    ]
  }
]

const filteredSections = computed(() =>
  sections.map(section => ({
    ...section,
    items: section.items.filter(item =>
      item.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  })).filter(section => section.items.length > 0)
)

const currentPage = computed(() => props.currentSlug)

const currentPageIndex = computed(() => {
  return allPages.findIndex(p => p.slug === props.currentSlug)
})

const previousPage = computed(() => {
  const index = currentPageIndex.value
  return index > 0 ? allPages[index - 1] : null
})

const nextPage = computed(() => {
  const index = currentPageIndex.value
  return index < allPages.length - 1 ? allPages[index + 1] : null
})

// Generate table of contents from headings
const generateTOC = () => {
  nextTick(() => {
    const article = document.querySelector('article')
    if (!article) return
    
    const headings = article.querySelectorAll('h2, h3')
    const toc = []
    
    headings.forEach((heading, index) => {
      // Create ID if not exists
      if (!heading.id) {
        const text = heading.textContent.trim()
        heading.id = text.toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '')
      }
      
      toc.push({
        id: heading.id,
        text: heading.textContent.trim(),
        level: parseInt(heading.tagName.substring(1))
      })
    })
    
    tableOfContents.value = toc
  })
}

// Smooth scroll to heading
const smoothScroll = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    activeHeading.value = id
  }
}

// Track active heading on scroll
const handleScroll = () => {
  const headings = tableOfContents.value.map(item => document.getElementById(item.id)).filter(Boolean)
  
  for (let i = headings.length - 1; i >= 0; i--) {
    const heading = headings[i]
    if (heading.getBoundingClientRect().top <= 100) {
      activeHeading.value = heading.id
      break
    }
  }
}

// Related pages based on current section
const relatedPages = computed(() => {
  const currentPageData = allPages.find(p => p.slug === props.currentSlug)
  if (!currentPageData) return []
  
  // Get pages from same section
  const sameSection = allPages
    .filter(p => p.section === currentPageData.section && p.slug !== props.currentSlug)
    .slice(0, 3)
  
  // If not enough, add some popular pages
  if (sameSection.length < 3) {
    const popularPages = [
      { title: 'Installation', slug: 'installation' },
      { title: 'Quick Start', slug: 'quick-start' },
      { title: 'FAQ', slug: 'faq' },
      { title: 'API Documentation', slug: 'api-documentation' },
    ].filter(p => p.slug !== props.currentSlug && !sameSection.find(s => s.slug === p.slug))
    
    return [...sameSection, ...popularPages].slice(0, 4)
  }
  
  return sameSection
})

// Search functionality
const handleSearch = () => {
  if (!searchQuery.value || searchQuery.value.length < 2) {
    searchResults.value = []
    return
  }
  
  const query = searchQuery.value.toLowerCase()
  const results = []
  
  allPages.forEach(page => {
    // Search in title
    if (page.title.toLowerCase().includes(query)) {
      results.push({
        title: page.title,
        url: `/docs/${page.slug}`,
        section: page.section,
        excerpt: `Dokumentasi ${page.title} - ${page.section}`,
        score: 10 // Higher score for title match
      })
      return
    }
    
    // Search in keywords
    if (page.keywords && page.keywords.toLowerCase().includes(query)) {
      results.push({
        title: page.title,
        url: `/docs/${page.slug}`,
        section: page.section,
        excerpt: getExcerpt(page.keywords, query),
        score: 5 // Medium score for keyword match
      })
    }
  })
  
  // Sort by score (highest first) and limit to 8 results
  searchResults.value = results
    .sort((a, b) => b.score - a.score)
    .slice(0, 8)
}

// Get excerpt with search query highlighted
const getExcerpt = (text, query) => {
  const index = text.toLowerCase().indexOf(query.toLowerCase())
  if (index === -1) return text.substring(0, 100) + '...'
  
  const start = Math.max(0, index - 30)
  const end = Math.min(text.length, index + query.length + 50)
  let excerpt = text.substring(start, end)
  
  if (start > 0) excerpt = '...' + excerpt
  if (end < text.length) excerpt = excerpt + '...'
  
  return excerpt
}

// Highlight search query in text
const highlightText = (text) => {
  if (!searchQuery.value) return text
  const regex = new RegExp(`(${searchQuery.value})`, 'gi')
  return text.replace(regex, '<mark class="bg-yellow-200 font-semibold">$1</mark>')
}

// Clear search
const clearSearch = () => {
  searchQuery.value = ''
  searchResults.value = []
  showSearchResults.value = false
}

// Close search results when clicking outside
const handleClickOutside = (event) => {
  const searchContainer = event.target.closest('.sticky')
  if (!searchContainer) {
    showSearchResults.value = false
  }
}

onMounted(() => {
  generateTOC()
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('click', handleClickOutside)
})
</script>

<style scoped>
/* Mobile sidebar transitions */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

/* Slide in from left animation */
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-slide-in-left {
  animation: slideInLeft 0.5s ease-out;
}

/* Slide in from right animation */
@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-slide-in-right {
  animation: slideInRight 0.5s ease-out;
}

/* Fade in animation */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out;
}

/* Fade in from bottom animation */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}

/* Fade in with delay */
@keyframes fadeInDelayed {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  50% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-delayed {
  animation: fadeInDelayed 0.8s ease-out;
}

/* Smooth transitions for interactive elements */
:deep(a) {
  transition: all 0.2s ease;
}

:deep(button) {
  transition: all 0.2s ease;
}

/* Scale animation on hover for navigation items */
:deep(.hover\:scale-105):hover {
  transform: scale(1.05);
}

/* Smooth color transitions */
:deep(.transition-colors) {
  transition-property: color, background-color, border-color;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
}

/* Pulse animation for active nav item */
@keyframes pulseSlow {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.95;
  }
}

.animate-pulse-slow {
  animation: pulseSlow 3s ease-in-out infinite;
}

/* Small scale on hover */
.hover\:scale-102:hover {
  transform: scale(1.02);
}

/* Smooth transitions for all elements */
* {
  scroll-behavior: smooth;
}

/* Custom scrollbar styling */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

/* Search results styling */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

:deep(mark) {
  border-radius: 2px;
  padding: 1px 2px;
}
</style>

