<template>
  <DocsLayout page-title="Examples" current-slug="examples">
    <div class="prose prose-sm max-w-none">
      <h1 class="text-4xl font-bold mb-6">💡 Examples</h1>

      <h2 class="text-2xl font-bold mb-4">Full-Stack Web Application</h2>
      
      <p class="text-gray-700 mb-3">Web app dengan Docker, Nginx, MySQL, Tailwind, dan Authentication:</p>
      
      <CodeBlock code="php artisan bangkah:create \
  --type=web \
  --docker \
  --nginx \
  --db=mysql \
  --frontend=tailwind \
  --auth \
  --yes" />

      <div class="bg-green-50 border border-green-200 rounded-lg p-4 mt-4 mb-8">
        <p class="font-semibold text-green-900 mb-3">Generated Files:</p>
        <ul class="space-y-1 text-sm ml-4">
          <li>✓ Dockerfile & docker-compose.yml</li>
          <li>✓ Nginx configuration</li>
          <li>✓ HomeController, homepage, routes</li>
          <li>✓ .env MySQL configured</li>
          <li>✓ Laravel Breeze + Tailwind</li>
          <li>✓ 3 Docker containers (app, mysql, nginx)</li>
        </ul>
      </div>

      <h2 class="text-2xl font-bold mb-4 mt-8">RESTful API with PostgreSQL</h2>
      
      <CodeBlock code="php artisan bangkah:create \
  --type=api \
  --docker \
  --nginx \
  --db=postgres \
  --frontend=none \
  --yes" />

      <p class="text-gray-700 mt-4 mb-4">Test health endpoint:</p>
      
      <CodeBlock code="curl http://localhost/api/health" />

      <h2 class="text-2xl font-bold mb-4 mt-8">Traditional Bootstrap Web App</h2>
      
      <CodeBlock code="php artisan bangkah:create \
  --type=web \
  --frontend=bootstrap \
  --auth \
  --db=mysql \
  --yes" />

      <h2 class="text-2xl font-bold mb-4 mt-8">Minimal Setup</h2>
      
      <CodeBlock code="php artisan bangkah:create --type=web --frontend=none --yes" />

      <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
        <p class="text-gray-700">Perfect untuk quick prototypes, learning Laravel, atau custom frontend (React, Vue, Alpine).</p>
      </div>
    </div>
  </DocsLayout>
</template>

<script setup>
import DocsLayout from '../../Layouts/DocsLayout.vue'
import CodeBlock from '../../Components/CodeBlock.vue'
</script>
