<template>
  <DocsLayout page-title="Frontend Assets" current-slug="frontend">
    <div class="prose prose-sm max-w-none">
      <h1 class="text-4xl font-bold mb-6">Frontend Assets</h1>

      <h2 class="text-2xl font-bold mb-4">Auto Build</h2>
      
      <p class="text-gray-700 mb-4">Bangkah otomatis build frontend assets setelah:</p>
      
      <ul class="space-y-2 mb-8 ml-4">
        <li>✓ NPM package installation</li>
        <li>✓ Auth scaffolding installation</li>
        <li>✓ Frontend framework installation</li>
        <li>✓ No manual npm run build needed!</li>
      </ul>

      <h2 class="text-2xl font-bold mb-4">Tailwind CSS</h2>

      <div class="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-r-lg mb-6">
        <p class="text-sm font-semibold mb-2">tailwind.config.js</p>
        <CodeBlock :code="tailwindConfig" />
      </div>

      <h2 class="text-2xl font-bold mb-4">Bootstrap</h2>

      <div class="border-l-4 border-purple-500 bg-purple-50 p-4 rounded-r-lg mb-6">
        <p class="text-sm font-semibold mb-2">package.json</p>
        <CodeBlock :code="packageJson" />
      </div>

      <h2 class="text-2xl font-bold mb-4">Vite Development</h2>

      <div class="grid md:grid-cols-2 gap-4 mb-8">
        <div class="border-l-4 border-green-500 bg-green-50 p-4 rounded-r-lg">
          <p class="font-semibold text-green-900 mb-2">Dev Mode</p>
          <CodeBlock code="npm run dev
php artisan serve" />
        </div>

        <div class="border-l-4 border-orange-500 bg-orange-50 p-4 rounded-r-lg">
          <p class="font-semibold text-orange-900 mb-2">Production Build</p>
          <CodeBlock code="npm run build" />
        </div>
      </div>

      <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p class="text-gray-700">Access at <code>http://localhost:8000</code> with hot reload!</p>
      </div>
    </div>
  </DocsLayout>
</template>

<script setup>
import DocsLayout from '../../Layouts/DocsLayout.vue'
import CodeBlock from '../../Components/CodeBlock.vue'

const tailwindConfig = `export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: { extend: {} },
  plugins: [],
}`

const packageJson = `{
  "devDependencies": {
    "bootstrap": "^5.3",
    "@popperjs/core": "^2.11"
  }
}`
</script>
