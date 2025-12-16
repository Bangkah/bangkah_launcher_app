<template>
  <DocsLayout page-title="Installation" current-slug="installation">
    <div class="prose prose-sm max-w-none space-y-6">
      <h1 class="text-4xl font-bold mb-6 text-gray-900">📦 Installation</h1>

      <!-- Warning Box -->
      <div class="mb-8 p-6 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg">
        <p class="text-gray-700">
          <strong>⚠️ Important:</strong> Bangkah akan memodifikasi files seperti <code class="bg-white px-2 py-1 rounded">.env</code>, <code class="bg-white px-2 py-1 rounded">routes/</code>, dan controllers. 
          File routes akan dibackup otomatis sebagai <code class="bg-white px-2 py-1 rounded">*.backup-YYYYMMDDHHMMSS</code>.
        </p>
      </div>

      <!-- Method 1 -->
      <section>
        <h2 class="text-2xl font-bold mb-4 text-gray-900">Method 1: Fresh Laravel Project (Recommended)</h2>
        
        <p class="text-gray-700 mb-4">Mulai dengan project Laravel baru:</p>
        
        <CodeBlock :code="methodFresh" language="bash" />

        <div class="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 mt-4">
          <p class="text-sm text-gray-700">
            <strong>💡 Tips:</strong> Method ini adalah yang paling direkomendasikan karena memberikan setup yang clean dan optimal.
          </p>
        </div>
      </section>

      <!-- Method 2 -->
      <section>
        <h2 class="text-2xl font-bold mb-4 text-gray-900">Method 2: Existing Laravel Project</h2>
        
        <p class="text-gray-700 mb-4">Jika Anda sudah punya project Laravel:</p>
        
        <CodeBlock :code="methodExisting" language="bash" />
      </section>

      <!-- Verification -->
      <section>
        <h2 class="text-2xl font-bold mb-4 text-gray-900">Verification</h2>
        
        <p class="text-gray-700 mb-4">Verify bahwa instalasi berhasil:</p>
        
        <CodeBlock code="php artisan list bangkah" language="bash" />

        <div class="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
          <p class="text-sm font-semibold text-gray-700 mb-2">Expected output:</p>
          <pre class="text-xs bg-white p-3 rounded border border-green-200 overflow-auto"><code>Available commands for the "bangkah" namespace:
  bangkah:create  Create a new starter project with Bangkah</code></pre>
        </div>
      </section>

      <!-- Requirements -->
      <section>
        <h2 class="text-2xl font-bold mb-4 text-gray-900">Requirements</h2>
        
        <p class="text-gray-700 mb-4">Sebelum menginstal Bangkah, pastikan Anda memiliki:</p>

        <div class="space-y-3">
          <div class="border rounded-lg p-4 hover:shadow-md transition">
            <div class="flex items-start gap-3">
              <span class="text-xl">📋</span>
              <div>
                <h3 class="font-semibold text-gray-900">PHP 8.2+</h3>
                <p class="text-sm text-gray-600">Required untuk Laravel 12.x</p>
              </div>
            </div>
          </div>
          
          <div class="border rounded-lg p-4 hover:shadow-md transition">
            <div class="flex items-start gap-3">
              <span class="text-xl">📦</span>
              <div>
                <h3 class="font-semibold text-gray-900">Composer 2.0+</h3>
                <p class="text-sm text-gray-600">PHP dependency manager</p>
              </div>
            </div>
          </div>

          <div class="border rounded-lg p-4 hover:shadow-md transition">
            <div class="flex items-start gap-3">
              <span class="text-xl">🚀</span>
              <div>
                <h3 class="font-semibold text-gray-900">Node.js 18+ atau 20+ LTS</h3>
                <p class="text-sm text-gray-600">Untuk frontend assets</p>
              </div>
            </div>
          </div>

          <div class="border rounded-lg p-4 hover:shadow-md transition">
            <div class="flex items-start gap-3">
              <span class="text-xl">📝</span>
              <div>
                <h3 class="font-semibold text-gray-900">NPM 9+</h3>
                <p class="text-sm text-gray-600">Node package manager</p>
              </div>
            </div>
          </div>

          <div class="border rounded-lg p-4 hover:shadow-md transition">
            <div class="flex items-start gap-3">
              <span class="text-xl">🐳</span>
              <div>
                <h3 class="font-semibold text-gray-900">Docker 20+ (Optional)</h3>
                <p class="text-sm text-gray-600">Hanya jika Anda ingin menggunakan containerization</p>
              </div>
            </div>
          </div>

          <div class="border rounded-lg p-4 hover:shadow-md transition">
            <div class="flex items-start gap-3">
              <span class="text-xl">🔧</span>
              <div>
                <h3 class="font-semibold text-gray-900">Git 2.x+ (Recommended)</h3>
                <p class="text-sm text-gray-600">Untuk version control</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- System Requirements -->
      <section>
        <h2 class="text-2xl font-bold mb-4 text-gray-900">System Requirements</h2>

        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-lg p-6">
            <h3 class="font-bold text-orange-900 mb-3">⚙️ Minimum</h3>
            <ul class="space-y-2 text-sm text-gray-700">
              <li class="flex gap-2"><span>•</span> 2 CPU cores</li>
              <li class="flex gap-2"><span>•</span> 2GB RAM</li>
              <li class="flex gap-2"><span>•</span> 5GB disk space</li>
            </ul>
          </div>

          <div class="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg p-6">
            <h3 class="font-bold text-green-900 mb-3">🚀 Recommended</h3>
            <ul class="space-y-2 text-sm text-gray-700">
              <li class="flex gap-2"><span>•</span> 4+ CPU cores</li>
              <li class="flex gap-2"><span>•</span> 4GB+ RAM</li>
              <li class="flex gap-2"><span>•</span> 10GB+ disk space (dengan Docker)</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Troubleshooting -->
      <section>
        <h2 class="text-2xl font-bold mb-4 text-gray-900">Common Issues</h2>

        <div class="space-y-4">
          <details class="border rounded-lg p-4 cursor-pointer hover:bg-gray-50">
            <summary class="font-semibold text-gray-900 flex items-center gap-2">
              <span>❓</span> Command not found: composer
            </summary>
            <div class="mt-3 text-sm text-gray-700 space-y-2">
              <p><strong>Solution:</strong> Install Composer dari https://getcomposer.org/download/</p>
              <CodeBlock code="# Check if installed
composer --version" language="bash" />
            </div>
          </details>

          <details class="border rounded-lg p-4 cursor-pointer hover:bg-gray-50">
            <summary class="font-semibold text-gray-900 flex items-center gap-2">
              <span>❓</span> PHP version too old
            </summary>
            <div class="mt-3 text-sm text-gray-700 space-y-2">
              <p><strong>Solution:</strong> Upgrade PHP ke 8.2 atau lebih tinggi</p>
              <CodeBlock code="# Check current PHP version
php --version" language="bash" />
            </div>
          </details>

          <details class="border rounded-lg p-4 cursor-pointer hover:bg-gray-50">
            <summary class="font-semibold text-gray-900 flex items-center gap-2">
              <span>❓</span> npm not found
            </summary>
            <div class="mt-3 text-sm text-gray-700 space-y-2">
              <p><strong>Solution:</strong> Install Node.js dari https://nodejs.org/</p>
              <CodeBlock code="# Check if installed
node --version
npm --version" language="bash" />
            </div>
          </details>
        </div>
      </section>

      <!-- Next Steps -->
      <section class="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6">
        <h2 class="text-2xl font-bold mb-4 text-gray-900">📚 Next Steps</h2>
        <ol class="space-y-3 text-gray-700">
          <li class="flex gap-3"><span class="font-bold text-blue-600">1.</span> Baca <a href="/docs/quick-start" class="text-blue-600 hover:underline">Quick Start</a> untuk setup cepat</li>
          <li class="flex gap-3"><span class="font-bold text-blue-600">2.</span> Lihat <a href="/docs/usage" class="text-blue-600 hover:underline">Usage Guide</a> untuk interactive prompts</li>
          <li class="flex gap-3"><span class="font-bold text-blue-600">3.</span> Explore <a href="/docs/examples" class="text-blue-600 hover:underline">Examples</a> untuk berbagai use cases</li>
          <li class="flex gap-3"><span class="font-bold text-blue-600">4.</span> Cek <a href="/docs/docker" class="text-blue-600 hover:underline">Docker Configuration</a> untuk containerization</li>
        </ol>
      </section>
    </div>
  </DocsLayout>
</template>

<script setup>
import DocsLayout from '../../Layouts/DocsLayout.vue'
import CodeBlock from '../../Components/CodeBlock.vue'

const methodFresh = `# Step 1: Create Laravel project
composer create-project laravel/laravel my-awesome-project
cd my-awesome-project

# Step 2: Install Bangkah
composer require bangkah/bangkah

# Step 3: Run Bangkah scaffolding
php artisan bangkah:create`

const methodExisting = `# Navigate to your project
cd my-existing-project

# Install Bangkah
composer require bangkah/bangkah

# Run scaffolding
php artisan bangkah:create`
</script>
