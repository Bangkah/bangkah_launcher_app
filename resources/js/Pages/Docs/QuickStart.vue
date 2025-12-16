<template>
  <DocsLayout page-title="Quick Start" current-slug="quick-start">
    <div class="space-y-6">
      <h1 class="text-4xl font-bold text-gray-900">Quick Start</h1>

      <!-- 30 Second Setup -->
      <section class="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6">
        <h2 class="text-2xl font-bold mb-4 text-gray-900">30-Second Setup</h2>
        <p class="text-gray-700 mb-4">Jalankan satu command dengan semua defaults yang perfect untuk mayoritas use case:</p>
        
        <CodeBlock :code="quickSetup" language="bash" />

        <div class="mt-4 space-y-3">
          <p class="text-sm font-semibold text-gray-900">Ini akan generate:</p>
          <ul class="space-y-2 ml-4">
            <li class="flex gap-2 text-gray-700"><span class="text-green-500">✓</span> Dockerfile & docker-compose.yml</li>
            <li class="flex gap-2 text-gray-700"><span class="text-green-500">✓</span> Nginx configuration</li>
            <li class="flex gap-2 text-gray-700"><span class="text-green-500">✓</span> MySQL setup & .env configuration</li>
            <li class="flex gap-2 text-gray-700"><span class="text-green-500">✓</span> Tailwind CSS configured</li>
            <li class="flex gap-2 text-gray-700"><span class="text-green-500">✓</span> Modern homepage dengan Vite</li>
            <li class="flex gap-2 text-gray-700"><span class="text-green-500">✓</span> All dependencies installed & built</li>
          </ul>
        </div>
      </section>

      <!-- Start Containers -->
      <section>
        <h2 class="text-2xl font-bold mb-4 text-gray-900">Start Docker Containers</h2>
        
        <CodeBlock code="docker compose up -d" language="bash" />

        <div class="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p class="text-sm text-gray-700">Tunggu ~30 detik untuk MySQL initialize. Akses aplikasi di:</p>
          <p class="text-lg font-mono text-blue-600 mt-2">http://localhost</p>
        </div>
      </section>

      <!-- What You Get -->
      <section>
        <div class="grid md:grid-cols-3 gap-4">
          <div class="p-6 bg-white border rounded-lg hover:shadow-lg transition-shadow">
            <div class="text-3xl mb-3">✓</div>
            <h3 class="font-bold text-gray-900 mb-2">Ready to Go</h3>
            <p class="text-sm text-gray-600">Production-grade setup dalam sekejap</p>
          </div>
          <div class="p-6 bg-white border rounded-lg hover:shadow-lg transition-shadow">
            <div class="text-3xl mb-3"></div>
            <h3 class="font-bold text-gray-900 mb-2">Dev Experience</h3>
            <p class="text-sm text-gray-600">Hot reload, auto-build, live updates</p>
          </div>
          <div class="p-6 bg-white border rounded-lg hover:shadow-lg transition-shadow">
            <div class="text-3xl mb-3"></div>
            <h3 class="font-bold text-gray-900 mb-2">Flexible</h3>
            <p class="text-sm text-gray-600">Customize sesuai kebutuhan kapan saja</p>
          </div>
        </div>
      </section>

      <!-- Alternative Setups -->
      <section>
        <h2 class="text-2xl font-bold mb-4 text-gray-900"> Alternative Setups</h2>

        <div class="space-y-3">
          <!-- API Setup -->
          <details class="border rounded-lg p-4 hover:shadow-md transition cursor-pointer">
            <summary class="font-bold text-gray-900 flex items-center gap-2">
              <span>RESTful API dengan PostgreSQL</span>
            </summary>
            <div class="mt-4 space-y-2">
              <CodeBlock :code="apiSetup" language="bash" />
            </div>
          </details>

          <!-- Bootstrap Setup -->
          <details class="border rounded-lg p-4 hover:shadow-md transition cursor-pointer">
            <summary class="font-bold text-gray-900 flex items-center gap-2">
              <span>Bootstrap 5 dengan Authentication</span>
            </summary>
            <div class="mt-4 space-y-2">
              <CodeBlock :code="bootstrapSetup" language="bash" />
            </div>
          </details>

          <!-- Minimal Setup -->
          <details class="border rounded-lg p-4 hover:shadow-md transition cursor-pointer">
            <summary class="font-bold text-gray-900 flex items-center gap-2">
              <span>Minimal Setup (No Docker, No Auth)</span>
            </summary>
            <div class="mt-4 space-y-2">
              <CodeBlock :code="minimalSetup" language="bash" />
            </div>
          </details>
        </div>
      </section>

      <!-- Interactive Mode -->
      <section class="bg-purple-50 border border-purple-200 rounded-lg p-6">
        <h2 class="text-2xl font-bold mb-4 text-gray-900">Interactive Mode</h2>
        <p class="text-gray-700 mb-4">Lebih suka dialog step-by-step? Jalankan tanpa flags:</p>
        
        <CodeBlock code="php artisan bangkah:create" language="bash" />

        <p class="text-sm text-gray-700 mt-4">
          Bangkah akan menanyakan semua pilihan secara interaktif dan membuat project sesuai preferensi Anda!
        </p>
      </section>

      <!-- Database Setup -->
      <section>
        <h2 class="text-2xl font-bold mb-4 text-gray-900">Setup Database</h2>
        
        <CodeBlock :code="migrateCmd" language="bash" />

        <div class="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p class="text-sm text-gray-700">
            ✓ Database sudah tersetup dan migrations telah dijalankan!
          </p>
        </div>
      </section>

      <!-- Next Steps -->
      <section class="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6">
        <h2 class="text-2xl font-bold mb-4 text-gray-900">Next Steps</h2>
        <ol class="space-y-3 text-gray-700">
          <li class="flex gap-3"><span class="font-bold text-blue-600">1.</span> <a href="/docs/usage" class="text-blue-600 hover:underline">Lihat Usage Guide</a> untuk semua command options</li>
          <li class="flex gap-3"><span class="font-bold text-blue-600">2.</span> <a href="/docs/examples" class="text-blue-600 hover:underline">Explore Examples</a> untuk berbagai use cases</li>
          <li class="flex gap-3"><span class="font-bold text-blue-600">3.</span> <a href="/docs/docker" class="text-blue-600 hover:underline">Pelajari Docker</a> untuk advanced configuration</li>
          <li class="flex gap-3"><span class="font-bold text-blue-600">4.</span> <a href="/docs/deployment" class="text-blue-600 hover:underline">Deploy to Production</a> dengan confidence!</li>
        </ol>
      </section>

      <!-- Tips -->
      <section class="border-l-4 border-yellow-500 bg-yellow-50 p-6 rounded-r-lg">
        <h3 class="font-bold text-yellow-900 mb-3">Tips & Tricks</h3>
        <ul class="space-y-2 text-sm text-gray-700">
          <li>• Gunakan <code class="bg-white px-2 py-1 rounded">--yes</code> flag untuk skip prompts di CI/CD pipelines</li>
          <li>• Setiap run akan backup routes file otomatis sebelum replace</li>
          <li>• Modifikasi <code class="bg-white px-2 py-1 rounded">docker-compose.yml</code> sebelum running untuk customize ports</li>
          <li>• Check <code class="bg-white px-2 py-1 rounded">.env</code> untuk credentials default (user: sail, password: password)</li>
          <li>• Run <code class="bg-white px-2 py-1 rounded">npm run dev</code> untuk hot reload saat development</li>
        </ul>
      </section>

      <!-- Common Issues -->
      <section>
        <h2 class="text-2xl font-bold mb-4 text-gray-900">❓ Common Issues</h2>

        <div class="space-y-3">
          <details class="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
            <summary class="font-semibold text-gray-900">Port 80 sudah digunakan</summary>
            <div class="mt-3 text-sm text-gray-700">
              <p class="mb-2">Edit <code class="bg-gray-100 px-2 py-1 rounded">docker-compose.yml</code>:</p>
              <CodeBlock code='ports:
  - "8080:80"  # Map ke port 8080 instead' language="yaml" />
            </div>
          </details>

          <details class="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
            <summary class="font-semibold text-gray-900">Permission denied (Docker)</summary>
            <div class="mt-3 text-sm text-gray-700">
              <CodeBlock code="docker compose exec app chown -R www-data:www-data /var/www" language="bash" />
            </div>
          </details>

          <details class="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
            <summary class="font-semibold text-gray-900">npm build fails</summary>
            <div class="mt-3 text-sm text-gray-700">
              <CodeBlock :code="npmFix" language="bash" />
            </div>
          </details>
        </div>
      </section>
    </div>
  </DocsLayout>
</template>

<script setup>
import DocsLayout from '../../Layouts/DocsLayout.vue'
import CodeBlock from '../../Components/CodeBlock.vue'

const quickSetup = `php artisan bangkah:create \\
  --type=web \\
  --frontend=tailwind \\
  --docker \\
  --nginx \\
  --db=mysql \\
  --yes`

const apiSetup = `php artisan bangkah:create \\
  --type=api \\
  --docker \\
  --nginx \\
  --db=postgres \\
  --frontend=none \\
  --yes`

const bootstrapSetup = `php artisan bangkah:create \\
  --type=web \\
  --frontend=bootstrap \\
  --auth \\
  --db=mysql \\
  --yes`

const minimalSetup = `php artisan bangkah:create \\
  --type=web \\
  --frontend=none \\
  --yes`

const migrateCmd = `docker compose exec app php artisan migrate`

const npmFix = `rm -rf node_modules package-lock.json
npm install
npm run build`
</script>
