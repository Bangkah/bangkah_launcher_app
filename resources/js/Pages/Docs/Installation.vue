<template>
  <DocsLayout page-title="Installation" current-slug="installation">
    <div class="prose prose-sm max-w-none">
      <h1 class="text-4xl font-bold mb-6">📦 Installation</h1>

      <div class="mb-8 p-6 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg">
        <p class="text-gray-700">
          <strong>⚠️ Important:</strong> Bangkah akan memodifikasi files seperti <code>.env</code>, <code>routes/</code>, dan controllers. 
          File routes akan dibackup otomatis sebagai <code>*.backup-YYYYMMDDHHMMSS</code>.
        </p>
      </div>

      <h2 class="text-2xl font-bold mb-4">Method 1: Fresh Laravel Project (Recommended)</h2>
      
      <CodeBlock :code="freshProject" />

      <h2 class="text-2xl font-bold mb-4 mt-8">Method 2: Existing Laravel Project</h2>
      
      <p class="text-gray-700 mb-4">Jika Anda sudah punya project Laravel:</p>
      
      <CodeBlock code="cd my-existing-project
composer require bangkah/bangkah
php artisan bangkah:create" />
:code="existingProject
      <p class="text-gray-700 mb-4">Verify instalasi berhasil:</p>
      
      <CodeBlock code="php artisan list bangkah" />

      <div class="bg-green-50 border border-green-200 rounded-lg p-4 mt-4 mb-8">
        <p class="text-sm text-gray-700"><strong>Expected output:</strong></p>
        <pre class="text-xs mt-2 bg-white p-3 rounded border border-green-200"><code>Available commands for the "bangkah" namespace:
  bangkah:create :code="verifyInstallwith Bangkah</code></pre>
      </div>

      <div class="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-6 mt-8">
        <h3 class="font-bold text-blue-900 mb-2">💡 Pro Tip</h3>
        <p class="text-gray-700">
          Gunakan <code>--yes</code> flag untuk skip interactive prompts dan langsung membuat project dengan default settings!
        </p>
      </div>
    </div>
  </DocsLayout>
</template>

<script setup>
import DocsLayout from '../../Layouts/DocsLayout.vue'
import CodeBlock from '../../Components/CodeBlock.vue'

const freshProject = `composer create-project laravel/laravel my-awesome-project
cd my-awesome-project
composer require bangkah/bangkah
php artisan bangkah:create`

const existingProject = `cd my-existing-project
composer require bangkah/bangkah
php artisan bangkah:create`

const verifyInstall = `php artisan list bangkah`
</script>
