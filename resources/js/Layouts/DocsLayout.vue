<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-white to-slate-50">
    <header class="sticky top-0 z-40 border-b bg-white/80 backdrop-blur-sm">
      <div class="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <button @click="sidebarOpen = !sidebarOpen" class="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          <span class="text-lg font-bold">Bangkah Docs</span>
        </div>
        <a href="/" class="text-sm text-gray-600 hover:text-black transition">← Back Home</a>
      </div>
    </header>

    <div class="flex flex-1 max-w-7xl mx-auto w-full">
      <!-- Sidebar with animation -->
      <transition name="slide-fade">
        <aside
          v-show="!(!sidebarOpen && sidebarOpen !== null)"
          class="w-64 border-r bg-white p-6 overflow-y-auto lg:static fixed lg:w-64 inset-y-0 left-0 top-16 z-30 h-[calc(100vh-4rem)]"
        >
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search docs..."
            class="w-full px-3 py-2 border rounded-lg mb-6 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          <nav class="space-y-1">
            <template v-for="section in filteredSections" :key="section.title">
              <div class="mb-6">
                <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  {{ section.title }}
                </h3>
                <ul class="space-y-2">
                  <li v-for="item in section.items" :key="item.slug">
                    <a
                      :href="`/docs/${item.slug}`"
                      :class="[
                        'block px-3 py-2 rounded-lg text-sm transition-all duration-200',
                        currentPage === item.slug
                          ? 'bg-blue-100 text-blue-700 font-medium'
                          : 'text-gray-700 hover:bg-gray-100'
                      ]"
                    >
                      {{ item.title }}
                    </a>
                  </li>
                </ul>
              </div>
            </template>
          </nav>
        </aside>
      </transition>

      <!-- Mobile overlay -->
      <div
        v-if="sidebarOpen"
        @click="sidebarOpen = false"
        class="fixed inset-0 bg-black/50 z-20 lg:hidden top-16"
      ></div>

      <!-- Main content -->
      <main class="flex-1 px-6 py-8 overflow-hidden">
        <div class="max-w-3xl mx-auto">
          <!-- Breadcrumb -->
          <div class="mb-6 flex items-center gap-2 text-sm text-gray-600 animate-fade-in">
            <a href="/" class="hover:text-black transition">Home</a>
            <span>/</span>
            <span class="font-medium text-gray-900">{{ pageTitle }}</span>
          </div>

          <!-- Content with fade animation -->
          <article class="animate-fade-in">
            <slot />
          </article>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  pageTitle: String,
  currentSlug: String,
})

const sidebarOpen = ref(false)
const searchQuery = ref('')

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
</script>

<style scoped>
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter-from {
  transform: translateX(-30px);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateX(-30px);
  opacity: 0;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-out;
}
</style>
