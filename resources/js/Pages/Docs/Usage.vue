<template>
  <DocsLayout page-title="Usage" current-slug="usage">
    <div class="prose prose-sm max-w-none">
      <h1 class="text-4xl font-bold mb-6">Usage</h1>

      <h2 class="text-2xl font-bold mb-4">Interactive Mode</h2>
      
      <p class="text-gray-700 mb-4">Mode paling mudah - Bangkah akan menanyakan semua pilihan:</p>
      
      <CodeBlock code="php artisan bangkah:create" />

      <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4 mb-8">
        <p class="text-gray-700 mb-3"><strong>Interactive Flow:</strong></p>
        <pre class="bg-white p-3 rounded text-xs border border-blue-200"><code>┌──────────────────────────────────────────┐
│  Bangkah Starter Kit                  │
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

      <h2 class="text-2xl font-bold mb-4 mt-8">Non-Interactive Mode</h2>
      
      <p class="text-gray-700 mb-4">Untuk CI/CD atau automation, gunakan flags untuk skip prompts:</p>
      
      <CodeBlock code="php artisan bangkah:create --yes [options]" />

      <h3 class="text-lg font-bold mb-3 mt-6">Examples</h3>

      <div class="space-y-4">
        <div class="border-l-4 border-orange-500 bg-orange-50 p-4 rounded-r-lg">
          <p class="text-sm text-gray-600 mb-2"><strong>API Project dengan Docker:</strong></p>
          <CodeBlock code="php artisan bangkah:create --type=api --docker --nginx --db=postgres --yes" />
        </div>

        <div class="border-l-4 border-green-500 bg-green-50 p-4 rounded-r-lg">
          <p class="text-sm text-gray-600 mb-2"><strong>Web Project tanpa Docker:</strong></p>
          <CodeBlock code="php artisan bangkah:create --type=web --frontend=tailwind --auth --yes" />
        </div>

        <div class="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-r-lg">
          <p class="text-sm text-gray-600 mb-2"><strong>Minimal Setup:</strong></p>
          <CodeBlock code="php artisan bangkah:create --type=web --frontend=none --yes" />
        </div>
      </div>

      <h2 class="text-2xl font-bold mb-4 mt-8">Command Options</h2>

      <div class="overflow-x-auto">
        <table class="w-full text-sm border-collapse">
          <thead>
            <tr class="bg-gray-100 border-b">
              <th class="text-left px-4 py-2 font-semibold">Option</th>
              <th class="text-left px-4 py-2 font-semibold">Values</th>
              <th class="text-left px-4 py-2 font-semibold">Default</th>
              <th class="text-left px-4 py-2 font-semibold">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b hover:bg-gray-50">
              <td class="px-4 py-2 font-mono text-blue-600">--type</td>
              <td class="px-4 py-2">web, api</td>
              <td class="px-4 py-2">web</td>
              <td class="px-4 py-2">Project template type</td>
            </tr>
            <tr class="border-b hover:bg-gray-50">
              <td class="px-4 py-2 font-mono text-blue-600">--docker</td>
              <td class="px-4 py-2">flag</td>
              <td class="px-4 py-2">false</td>
              <td class="px-4 py-2">Install Docker configuration</td>
            </tr>
            <tr class="border-b hover:bg-gray-50">
              <td class="px-4 py-2 font-mono text-blue-600">--nginx</td>
              <td class="px-4 py-2">flag</td>
              <td class="px-4 py-2">false</td>
              <td class="px-4 py-2">Install Nginx configuration</td>
            </tr>
            <tr class="border-b hover:bg-gray-50">
              <td class="px-4 py-2 font-mono text-blue-600">--db</td>
              <td class="px-4 py-2">mysql, postgres</td>
              <td class="px-4 py-2">mysql</td>
              <td class="px-4 py-2">Database type</td>
            </tr>
            <tr class="border-b hover:bg-gray-50">
              <td class="px-4 py-2 font-mono text-blue-600">--frontend</td>
              <td class="px-4 py-2">tailwind, bootstrap, none</td>
              <td class="px-4 py-2">tailwind</td>
              <td class="px-4 py-2">Frontend framework</td>
            </tr>
            <tr class="border-b hover:bg-gray-50">
              <td class="px-4 py-2 font-mono text-blue-600">--auth</td>
              <td class="px-4 py-2">flag</td>
              <td class="px-4 py-2">false</td>
              <td class="px-4 py-2">Install auth scaffolding</td>
            </tr>
            <tr class="hover:bg-gray-50">
              <td class="px-4 py-2 font-mono text-blue-600">--yes</td>
              <td class="px-4 py-2">flag</td>
              <td class="px-4 py-2">false</td>
              <td class="px-4 py-2">Non-interactive (use defaults)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </DocsLayout>
</template>

<script setup>
import DocsLayout from '../../Layouts/DocsLayout.vue'
import CodeBlock from '../../Components/CodeBlock.vue'
</script>
