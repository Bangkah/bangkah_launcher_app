<template>
  <DocsLayout page-title="Docker" current-slug="docker">
    <div class="prose prose-sm max-w-none">
      <h1 class="text-4xl font-bold mb-6">Docker Configuration</h1>

      <div class="mb-8 p-6 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
        <p class="text-gray-700">
          Bangkah otomatis generate Dockerfile dan docker-compose.yml dengan konfigurasi production-ready.
        </p>
      </div>

      <h2 class="text-2xl font-bold mb-4">Generated Files</h2>

      <ul class="space-y-2 mb-8 ml-4">
        <li class="flex gap-2"><span class="text-blue-500"></span> <code>Dockerfile</code> - PHP 8.2-FPM container</li>
        <li class="flex gap-2"><span class="text-blue-500"></span> <code>docker-compose.yml</code> - Multi-container orchestration</li>
        <li class="flex gap-2"><span class="text-blue-500"></span> <code>docker/nginx/default.conf</code> - Nginx configuration</li>
      </ul>

      <h2 class="text-2xl font-bold mb-4">Common Commands</h2>

      <div class="space-y-3 mb-8">
        <div class="border-l-4 border-orange-500 bg-orange-50 p-4 rounded-r-lg">
          <p class="text-sm font-semibold text-orange-900 mb-2">Start containers</p>
          <CodeBlock code="docker compose up -d" />
        </div>

        <div class="border-l-4 border-purple-500 bg-purple-50 p-4 rounded-r-lg">
          <p class="text-sm font-semibold text-purple-900 mb-2">View logs</p>
          <CodeBlock code="docker compose logs -f
docker compose logs -f app" />
        </div>

        <div class="border-l-4 border-green-500 bg-green-50 p-4 rounded-r-lg">
          <p class="text-sm font-semibold text-green-900 mb-2">Stop & restart</p>
          <CodeBlock code="docker compose down
docker compose restart" />
        </div>

        <div class="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-r-lg">
          <p class="text-sm font-semibold text-blue-900 mb-2">Run artisan commands</p>
          <CodeBlock code="docker compose exec app php artisan migrate
docker compose exec app bash" />
        </div>
      </div>

      <h2 class="text-2xl font-bold mb-4">Services Architecture</h2>

      <div class="bg-gray-900 text-gray-100 p-6 rounded-lg mb-8 font-mono text-sm">
        <pre>┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   Nginx         │────▶│   Laravel App   │────▶│   Database      │
│   Port 80       │     │   PHP 8.2-FPM   │     │   MySQL/Postgres│
└─────────────────┘     └─────────────────┘     └─────────────────┘
       │                        │                        │
       └────────────────────────┴────────────────────────┘
                        Docker Network</pre>
      </div>

      <h2 class="text-2xl font-bold mb-4">Dockerfile Features</h2>

      <ul class="space-y-2 mb-8 ml-4">
        <li>✓ Base: php:8.2-fpm</li>
        <li>✓ Extensions: pdo, pdo_mysql, pdo_pgsql</li>
        <li>✓ Tools: Composer 2.x, Git, Zip/Unzip</li>
        <li>✓ Optimization: multi-stage ready, non-root user</li>
      </ul>

      <h2 class="text-2xl font-bold mb-4">Troubleshooting</h2>

      <div class="border-l-4 border-red-500 bg-red-50 p-4 rounded-r-lg">
        <p class="font-semibold text-red-900 mb-3">Port already in use?</p>
        <CodeBlock code="lsof -i :80
sudo systemctl stop apache2
# Or change port in docker-compose.yml" />
      </div>
    </div>
  </DocsLayout>
</template>

<script setup>
import DocsLayout from '../../Layouts/DocsLayout.vue'
import CodeBlock from '../../Components/CodeBlock.vue'
</script>
