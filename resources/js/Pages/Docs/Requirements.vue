<template>
  <DocsLayout page-title="Requirements" current-slug="requirements">
    <div class="prose prose-sm max-w-none">
      <h1 class="text-4xl font-bold mb-6">📋 Requirements</h1>

      <h2 class="text-2xl font-bold mb-4">Software Requirements</h2>

      <div class="overflow-x-auto mb-8">
        <table class="w-full text-sm border-collapse">
          <thead>
            <tr class="bg-blue-100 border-b">
              <th class="text-left px-4 py-2 font-semibold">Requirement</th>
              <th class="text-left px-4 py-2 font-semibold">Version</th>
              <th class="text-left px-4 py-2 font-semibold">Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b hover:bg-gray-50">
              <td class="px-4 py-2 font-semibold">PHP</td>
              <td class="px-4 py-2">8.2 or higher</td>
              <td class="px-4 py-2">Required for Laravel 12.x</td>
            </tr>
            <tr class="border-b hover:bg-gray-50">
              <td class="px-4 py-2 font-semibold">Composer</td>
              <td class="px-4 py-2">2.0+</td>
              <td class="px-4 py-2">Dependency management</td>
            </tr>
            <tr class="border-b hover:bg-gray-50">
              <td class="px-4 py-2 font-semibold">Node.js</td>
              <td class="px-4 py-2">18+ / 20+ LTS</td>
              <td class="px-4 py-2">For frontend assets</td>
            </tr>
            <tr class="border-b hover:bg-gray-50">
              <td class="px-4 py-2 font-semibold">NPM</td>
              <td class="px-4 py-2">9+</td>
              <td class="px-4 py-2">Package manager</td>
            </tr>
            <tr class="border-b hover:bg-gray-50">
              <td class="px-4 py-2 font-semibold">Docker</td>
              <td class="px-4 py-2">20+</td>
              <td class="px-4 py-2">Optional</td>
            </tr>
            <tr class="border-b hover:bg-gray-50">
              <td class="px-4 py-2 font-semibold">Docker Compose</td>
              <td class="px-4 py-2">2.0+</td>
              <td class="px-4 py-2">Optional</td>
            </tr>
            <tr class="hover:bg-gray-50">
              <td class="px-4 py-2 font-semibold">Git</td>
              <td class="px-4 py-2">2.x+</td>
              <td class="px-4 py-2">Recommended</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 class="text-2xl font-bold mb-4">System Requirements</h2>

      <div class="grid md:grid-cols-2 gap-4 mb-8">
        <div class="border-l-4 border-orange-500 bg-orange-50 p-6 rounded-r-lg">
          <h3 class="font-bold text-orange-900 mb-3">⚙️ Minimum</h3>
          <ul class="space-y-2 text-sm ml-4">
            <li>• 2 CPU cores</li>
            <li>• 2GB RAM</li>
            <li>• 5GB disk space</li>
          </ul>
        </div>

        <div class="border-l-4 border-green-500 bg-green-50 p-6 rounded-r-lg">
          <h3 class="font-bold text-green-900 mb-3">🚀 Recommended</h3>
          <ul class="space-y-2 text-sm ml-4">
            <li>• 4+ CPU cores</li>
            <li>• 4GB+ RAM</li>
            <li>• 10GB+ disk space (with Docker)</li>
          </ul>
        </div>
      </div>

      <div class="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-6">
        <h3 class="font-bold text-blue-900 mb-2">💡 Pro Tip</h3>
        <p class="text-gray-700">
          Check versions installed di system Anda:
        </p>
        <CodeBlock code="php --version
composer --version
node --version
npm --version
docker --version
git --version" />
      </div>
    </div>
  </DocsLayout>
</template>

<script setup>
import DocsLayout from '../../Layouts/DocsLayout.vue'
import CodeBlock from '../../Components/CodeBlock.vue'
</script>
