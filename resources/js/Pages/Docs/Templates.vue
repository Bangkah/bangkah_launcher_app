<template>
  <DocsLayout page-title="Templates" current-slug="templates">
    <div class="prose prose-sm max-w-none">
      <h1 class="text-4xl font-bold mb-6">📦 Templates</h1>

      <h2 class="text-2xl font-bold mb-4">Web Template</h2>
      
      <p class="text-gray-700 mb-4">Traditional web applications with server-rendered views.</p>
      
      <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <p class="font-semibold text-blue-900 mb-3">Includes:</p>
        <ul class="space-y-1 ml-4 text-sm">
          <li>• <code>app/Http/Controllers/HomeController.php</code></li>
          <li>• <code>resources/views/home.blade.php</code> - Modern gradient homepage</li>
          <li>• <code>routes/web.php</code> - Web routes configured</li>
        </ul>
      </div>

      <div class="grid md:grid-cols-2 gap-4 mb-8">
        <div class="border rounded-lg p-4 hover:shadow-lg transition-shadow">
          <h3 class="font-bold mb-2">✨ Features</h3>
          <ul class="space-y-1 text-sm ml-3">
            <li>• Modern gradient design</li>
            <li>• Fully responsive</li>
            <li>• Feature cards</li>
            <li>• Vite integration ready</li>
          </ul>
        </div>

        <div class="border rounded-lg p-4 hover:shadow-lg transition-shadow">
          <h3 class="font-bold mb-2">💼 Use Cases</h3>
          <ul class="space-y-1 text-sm ml-3">
            <li>• E-commerce</li>
            <li>• Business sites</li>
            <li>• CMS / Admin</li>
            <li>• Marketing sites</li>
          </ul>
        </div>
      </div>

      <h2 class="text-2xl font-bold mb-4 mt-8">API Template</h2>
      
      <p class="text-gray-700 mb-4">RESTful APIs and headless applications.</p>
      
      <div class="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
        <p class="font-semibold text-green-900 mb-3">Includes:</p>
        <ul class="space-y-1 ml-4 text-sm">
          <li>• <code>app/Http/Controllers/Api/HealthController.php</code></li>
          <li>• <code>routes/api.php</code> - API routes</li>
          <li>• <code>bootstrap/app.php</code> - API routes enabled</li>
        </ul>
      </div>

      <h3 class="text-lg font-bold mb-3">Health Endpoint</h3>
      
      <CodeBlock :code="healthEndpoint" />

      <div class="bg-purple-50 border border-purple-200 rounded-lg p-4 mt-6 mb-8">
        <p class="font-semibold text-purple-900 mb-3">Response:</p>
        <CodeBlock :code="healthResponse" />
      </div>
    </div>
  </DocsLayout>
</template>

<script setup>
import DocsLayout from '../../Layouts/DocsLayout.vue'
import CodeBlock from '../../Components/CodeBlock.vue'

const healthEndpoint = 'GET /api/health'
const healthResponse = `{
  "status": "ok",
  "message": "API is running",
  "app": "MyApp",
  "environment": "local",
  "laravel": "12.42.0",
  "php": "8.4.1",
  "time": "2025-12-15T10:30:00.000000Z"
}`
</script>
