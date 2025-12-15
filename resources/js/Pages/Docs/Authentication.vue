<template>
  <DocsLayout page-title="Authentication" current-slug="authentication">
    <div class="prose prose-sm max-w-none">
      <h1 class="text-4xl font-bold mb-6">🔐 Authentication</h1>

      <h2 class="text-2xl font-bold mb-4">Laravel Breeze</h2>
      
      <p class="text-gray-700 mb-4">Minimal & elegant authentication dengan Tailwind CSS.</p>
      
      <CodeBlock code="php artisan bangkah:create --auth --frontend=tailwind --yes" />

      <div class="grid md:grid-cols-2 gap-4 mt-6 mb-8">
        <div class="border rounded-lg p-4">
          <h3 class="font-bold text-blue-600 mb-2">✓ Routes</h3>
          <ul class="space-y-1 text-sm ml-3">
            <li>• /login</li>
            <li>• /register</li>
            <li>• /forgot-password</li>
            <li>• /dashboard</li>
          </ul>
        </div>

        <div class="border rounded-lg p-4">
          <h3 class="font-bold text-green-600 mb-2">✓ Includes</h3>
          <ul class="space-y-1 text-sm ml-3">
            <li>• Password Reset</li>
            <li>• Email Verification</li>
            <li>• Profile Management</li>
            <li>• Tailwind UI</li>
          </ul>
        </div>
      </div>

      <h2 class="text-2xl font-bold mb-4">Laravel UI</h2>
      
      <p class="text-gray-700 mb-4">Comprehensive authentication dengan Bootstrap 5.</p>
      
      <CodeBlock code="php artisan bangkah:create --auth --frontend=bootstrap --yes" />

      <div class="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-6 mb-8">
        <p class="font-semibold text-amber-900 mb-3">Routes:</p>
        <ul class="space-y-1 ml-4 text-sm">
          <li>• /login, /register</li>
          <li>• /password/reset</li>
          <li>• /home - User dashboard</li>
        </ul>
      </div>

      <h2 class="text-2xl font-bold mb-4">Post-Installation</h2>

      <div class="space-y-4">
        <div class="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-r-lg">
          <p class="font-semibold text-blue-900 mb-2">1. Run Migrations</p>
          <CodeBlock code="php artisan migrate" />
        </div>

        <div class="border-l-4 border-purple-500 bg-purple-50 p-4 rounded-r-lg">
          <p class="font-semibold text-purple-900 mb-2">2. Configure Email (for password reset)</p>
          <CodeBlock code="MAIL_MAILER=smtp
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=your_username
MAIL_PASSWORD=your_password" />
        </div>

        <div class="border-l-4 border-green-500 bg-green-50 p-4 rounded-r-lg">
          <p class="font-semibold text-green-900 mb-2">3. Test Registration</p>
          <p class="text-sm text-gray-700">Visit /register, create account, test login</p>
        </div>
      </div>
    </div>
  </DocsLayout>
</template>

<script setup>
import DocsLayout from '../../Layouts/DocsLayout.vue'
import CodeBlock from '../../Components/CodeBlock.vue'
</script>
