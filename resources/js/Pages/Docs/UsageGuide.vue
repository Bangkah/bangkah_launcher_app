<template>
  <DocsLayout page-title="Usage" current-slug="usage">
    <div class="space-y-6">
      <h1 class="text-4xl font-bold text-gray-900">Usage Guide</h1>

      <!-- Interactive Mode Section -->
      <section>
        <h2 class="text-2xl font-bold mb-4 text-gray-900"> Interactive Mode</h2>
        
        <p class="text-gray-700 mb-4">Mode paling mudah - Bangkah akan menanyakan semua pilihan interactively:</p>

        <CodeBlock code="php artisan bangkah:create" language="bash" />

        <h3 class="text-xl font-bold mt-6 mb-3 text-gray-900">Interactive Flow</h3>

        <div class="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6 overflow-x-auto">
          <pre class="text-sm"><code>┌──────────────────────────────────────────┐
│   Bangkah Starter Kit                  │
└──────────────────────────────────────────┘

❯ Pilih template project:
  ○ Web Application (dengan homepage)
  ● API Application (RESTful API)

❯ Install Docker?
  ● Yes
  ○ No

❯ Install Nginx?
  ● Yes
  ○ No

❯ Pilih database:
  ● MySQL
  ○ PostgreSQL

❯ Pilih frontend framework:
  ● Tailwind CSS
  ○ Bootstrap
  ○ None

❯ Install authentication?
  ○ Laravel Breeze (Tailwind)
  ○ Laravel UI (Bootstrap)
  ● No</code></pre>
        </div>

        <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p class="text-gray-700">
            Setelah semua pilihan dibuat, Bangkah akan:
          </p>
          <ol class="space-y-2 mt-3 text-gray-700">
            <li>✅ Generate files berdasarkan template</li>
            <li>✅ Configure environment variables</li>
            <li>✅ Install dependencies (composer & npm)</li>
            <li>✅ Build frontend assets</li>
            <li>✅ Start Docker containers (jika dipilih)</li>
          </ol>
          <p class="mt-4 font-semibold text-gray-900">Total time: ~2-3 menit ☕</p>
        </div>
      </section>

      <!-- Non-Interactive Mode Section -->
      <section>
        <h2 class="text-2xl font-bold mb-4 text-gray-900"> Non-Interactive Mode</h2>
        
        <p class="text-gray-700 mb-4">Untuk CI/CD atau automation, gunakan flags untuk skip prompts:</p>

        <CodeBlock code="php artisan bangkah:create --yes [options]" language="bash" />

        <p class="text-sm text-gray-600 mt-4">
          Flag <code class="bg-gray-100 px-2 py-1 rounded">--yes</code> akan use defaults untuk semua options yang tidak disebutkan.
        </p>

        <h3 class="text-xl font-bold mt-6 mb-4 text-gray-900">Contoh</h3>

        <div class="space-y-4">
          <div class="border rounded-lg p-4 hover:shadow-md transition">
            <p class="text-sm font-semibold text-gray-900 mb-2">API Project dengan Docker:</p>
            <CodeBlock code="php artisan bangkah:create --type=api --docker --nginx --db=postgres --yes" language="bash" />
          </div>

          <div class="border rounded-lg p-4 hover:shadow-md transition">
            <p class="text-sm font-semibold text-gray-900 mb-2">Web Project tanpa Docker:</p>
            <CodeBlock code="php artisan bangkah:create --type=web --frontend=tailwind --auth --yes" language="bash" />
          </div>

          <div class="border rounded-lg p-4 hover:shadow-md transition">
            <p class="text-sm font-semibold text-gray-900 mb-2">Minimal Setup:</p>
            <CodeBlock code="php artisan bangkah:create --type=web --frontend=none --yes" language="bash" />
          </div>
        </div>
      </section>

      <!-- Command Options Section -->
      <section>
        <h2 class="text-2xl font-bold mb-4 text-gray-900"> Command Options</h2>

        <div class="overflow-x-auto mb-6">
          <table class="w-full text-sm border-collapse">
            <thead>
              <tr class="bg-gray-100 border-b-2 border-gray-300">
                <th class="border p-3 text-left font-semibold">Option</th>
                <th class="border p-3 text-left font-semibold">Values</th>
                <th class="border p-3 text-left font-semibold">Default</th>
                <th class="border p-3 text-left font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b hover:bg-gray-50">
                <td class="border p-3"><code class="bg-gray-100 px-2 py-1 rounded">--type</code></td>
                <td class="border p-3">web, api</td>
                <td class="border p-3">web</td>
                <td class="border p-3">Project template type</td>
              </tr>
              <tr class="border-b hover:bg-gray-50">
                <td class="border p-3"><code class="bg-gray-100 px-2 py-1 rounded">--docker</code></td>
                <td class="border p-3">flag</td>
                <td class="border p-3">false</td>
                <td class="border p-3">Install Docker configuration</td>
              </tr>
              <tr class="border-b hover:bg-gray-50">
                <td class="border p-3"><code class="bg-gray-100 px-2 py-1 rounded">--nginx</code></td>
                <td class="border p-3">flag</td>
                <td class="border p-3">false</td>
                <td class="border p-3">Install Nginx configuration</td>
              </tr>
              <tr class="border-b hover:bg-gray-50">
                <td class="border p-3"><code class="bg-gray-100 px-2 py-1 rounded">--db</code></td>
                <td class="border p-3">mysql, postgres</td>
                <td class="border p-3">mysql</td>
                <td class="border p-3">Database type</td>
              </tr>
              <tr class="border-b hover:bg-gray-50">
                <td class="border p-3"><code class="bg-gray-100 px-2 py-1 rounded">--frontend</code></td>
                <td class="border p-3">tailwind, bootstrap, none</td>
                <td class="border p-3">tailwind</td>
                <td class="border p-3">Frontend framework</td>
              </tr>
              <tr class="border-b hover:bg-gray-50">
                <td class="border p-3"><code class="bg-gray-100 px-2 py-1 rounded">--auth</code></td>
                <td class="border p-3">flag</td>
                <td class="border p-3">false</td>
                <td class="border p-3">Install authentication scaffolding</td>
              </tr>
              <tr class="border-b hover:bg-gray-50">
                <td class="border p-3"><code class="bg-gray-100 px-2 py-1 rounded">--yes</code></td>
                <td class="border p-3">flag</td>
                <td class="border p-3">false</td>
                <td class="border p-3">Non-interactive mode (use defaults)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="text-xl font-bold mb-3 text-gray-900">Option Combinations</h3>

        <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <p class="text-sm text-gray-700 mb-3">Beberapa options bekerja bersama:</p>
          <ul class="space-y-2 text-sm text-gray-700">
            <li>• <code class="bg-white px-2 py-1 rounded">--docker</code> + <code class="bg-white px-2 py-1 rounded">--nginx</code> = Full containerized setup</li>
            <li>• <code class="bg-white px-2 py-1 rounded">--auth</code> + <code class="bg-white px-2 py-1 rounded">--frontend=tailwind</code> = Laravel Breeze</li>
            <li>• <code class="bg-white px-2 py-1 rounded">--auth</code> + <code class="bg-white px-2 py-1 rounded">--frontend=bootstrap</code> = Laravel UI</li>
            <li>• <code class="bg-white px-2 py-1 rounded">--type=api</code> + <code class="bg-white px-2 py-1 rounded">--frontend=none</code> = Headless API (recommended)</li>
          </ul>
        </div>
      </section>

      <!-- Output Files Section -->
      <section>
        <h2 class="text-2xl font-bold mb-4 text-gray-900"> Generated Files</h2>

        <h3 class="text-lg font-bold mb-3 text-gray-900">Infrastructure Files</h3>

        <div class="space-y-3 mb-6">
          <div class="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-r-lg">
            <p class="font-mono font-semibold text-gray-900">Dockerfile</p>
            <p class="text-sm text-gray-700 mt-1">Multi-stage application container dengan PHP 8.2-FPM</p>
          </div>

          <div class="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-r-lg">
            <p class="font-mono font-semibold text-gray-900">docker-compose.yml</p>
            <p class="text-sm text-gray-700 mt-1">Multi-container orchestration dengan app, database, dan nginx</p>
          </div>

          <div class="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-r-lg">
            <p class="font-mono font-semibold text-gray-900">docker/nginx/default.conf</p>
            <p class="text-sm text-gray-700 mt-1">Production-ready Nginx configuration dengan caching dan compression</p>
          </div>
        </div>

        <h3 class="text-lg font-bold mb-3 text-gray-900">Application Files</h3>

        <div class="space-y-3">
          <div class="border-l-4 border-green-500 bg-green-50 p-4 rounded-r-lg">
            <p class="font-mono font-semibold text-gray-900">app/Http/Controllers/HomeController.php</p>
            <p class="text-sm text-gray-700 mt-1">Home page controller</p>
          </div>

          <div class="border-l-4 border-green-500 bg-green-50 p-4 rounded-r-lg">
            <p class="font-mono font-semibold text-gray-900">resources/views/home.blade.php</p>
            <p class="text-sm text-gray-700 mt-1">Modern gradient homepage template</p>
          </div>

          <div class="border-l-4 border-green-500 bg-green-50 p-4 rounded-r-lg">
            <p class="font-mono font-semibold text-gray-900">routes/web.php atau routes/api.php</p>
            <p class="text-sm text-gray-700 mt-1">Configured routes dengan home route atau health endpoint</p>
          </div>

          <div class="border-l-4 border-green-500 bg-green-50 p-4 rounded-r-lg">
            <p class="font-mono font-semibold text-gray-900">.env</p>
            <p class="text-sm text-gray-700 mt-1">Environment variables pre-configured untuk database pilihan</p>
          </div>
        </div>
      </section>

      <!-- Verification Section -->
      <section>
        <h2 class="text-2xl font-bold mb-4 text-gray-900">✅ Verification</h2>

        <p class="text-gray-700 mb-4">Untuk memverifikasi setup berhasil:</p>

        <CodeBlock code="# Check if containers are running
docker compose ps

# View logs
docker compose logs -f

# Access app shell
docker compose exec app bash

# Run migrations
docker compose exec app php artisan migrate" language="bash" />
      </section>

      <!-- Troubleshooting -->
      <section class="bg-red-50 border border-red-200 rounded-lg p-6">
        <h2 class="text-2xl font-bold mb-4 text-gray-900">❓ Troubleshooting</h2>

        <details class="border rounded-lg p-4 hover:bg-white cursor-pointer mb-3">
          <summary class="font-bold text-gray-900">Command not found: bangkah:create</summary>
          <div class="mt-3 text-sm text-gray-700 space-y-2">
            <p>Solusi: Jalankan <code class="bg-white px-2 py-1 rounded">composer dump-autoload</code></p>
            <CodeBlock code="php artisan clear-compiled
php artisan cache:clear
composer dump-autoload" language="bash" />
          </div>
        </details>

        <details class="border rounded-lg p-4 hover:bg-white cursor-pointer mb-3">
          <summary class="font-bold text-gray-900">Port sudah digunakan</summary>
          <div class="mt-3 text-sm text-gray-700">
            Edit <code class="bg-white px-2 py-1 rounded">docker-compose.yml</code> dan ubah port sebelum running
          </div>
        </details>

        <details class="border rounded-lg p-4 hover:bg-white cursor-pointer">
          <summary class="font-bold text-gray-900">npm build fails</summary>
          <div class="mt-3 text-sm text-gray-700 space-y-2">
            <CodeBlock code="rm -rf node_modules package-lock.json
npm install
npm run build" language="bash" />
          </div>
        </details>
      </section>

      <!-- Next Steps -->
      <section class="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6">
        <h2 class="text-2xl font-bold mb-4 text-gray-900"> Next Steps</h2>
        <ol class="space-y-3 text-gray-700">
          <li class="flex gap-3"><span class="font-bold text-blue-600">1.</span> <a href="/docs/quick-start" class="text-blue-600 hover:underline">Quick Start</a> untuk setup 30 detik</li>
          <li class="flex gap-3"><span class="font-bold text-blue-600">2.</span> <a href="/docs/examples" class="text-blue-600 hover:underline">Explore Examples</a> untuk berbagai use cases</li>
          <li class="flex gap-3"><span class="font-bold text-blue-600">3.</span> <a href="/docs/docker" class="text-blue-600 hover:underline">Pelajari Docker</a> untuk production setup</li>
        </ol>
      </section>
    </div>
  </DocsLayout>
</template>

<script setup>
import DocsLayout from '../../Layouts/DocsLayout.vue'
import CodeBlock from '../../Components/CodeBlock.vue'
</script>
