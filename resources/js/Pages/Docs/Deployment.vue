<template>
  <DocsLayout page-title="Deployment" current-slug="deployment">
    <div class="prose prose-sm max-w-none">
      <h1 class="text-4xl font-bold mb-6">🚀 Deployment</h1>

      <h2 class="text-2xl font-bold mb-4">Pre-Deployment Checklist</h2>

      <div class="bg-amber-50 border-l-4 border-amber-500 rounded-r-lg p-6 mb-8">
        <ul class="space-y-2 ml-4">
          <li>☐ Set <code>APP_ENV=production</code> in .env</li>
          <li>☐ Set <code>APP_DEBUG=false</code></li>
          <li>☐ Generate production <code>APP_KEY</code></li>
          <li>☐ Configure production database</li>
          <li>☐ Set up proper MAIL_* credentials</li>
          <li>☐ Configure QUEUE_CONNECTION (redis/database)</li>
          <li>☐ Set SESSION_DRIVER (redis/database)</li>
          <li>☐ Update APP_URL to production domain</li>
          <li>☐ Configure SSL/HTTPS</li>
          <li>☐ Set up proper logging</li>
        </ul>
      </div>

      <h2 class="text-2xl font-bold mb-4">Laravel Optimization</h2>

      <CodeBlock code="composer install --optimize-autoloader --no-dev
php artisan config:cache
php artisan route:cache
php artisan view:cache
php artisan event:cache
npm run build
php artisan migrate --force
php artisan storage:link" />

      <h2 class="text-2xl font-bold mb-4">Docker Production</h2>

      <p class="text-gray-700 mb-4">Use multi-stage Dockerfile dan optimize environment:</p>

      <ul class="space-y-2 mb-8 ml-4">
        <li>✓ Set <code>restart: unless-stopped</code></li>
        <li>✓ Environment set to production</li>
        <li>✓ Optimized multi-stage builds</li>
        <li>✓ Health checks configured</li>
      </ul>

      <h2 class="text-2xl font-bold mb-4">SSL/HTTPS</h2>

      <div class="grid md:grid-cols-2 gap-4 mb-8">
        <div class="border rounded-lg p-4">
          <h3 class="font-bold text-blue-600 mb-2">Certbot (Nginx)</h3>
          <CodeBlock code="apt-get install certbot python3-certbot-nginx
certbot --nginx -d yourdomain.com" />
        </div>

        <div class="border rounded-lg p-4">
          <h3 class="font-bold text-purple-600 mb-2">Cloudflare</h3>
          <p class="text-sm text-gray-700 mb-3">Add domain to Cloudflare, enable SSL, auto-renews</p>
        </div>
      </div>

      <div class="bg-green-50 border border-green-200 rounded-lg p-4">
        <p class="font-semibold text-green-900 mb-2">💡 Pro Tip</p>
        <p class="text-gray-700">Use Laravel Forge for automatic deployments, SSL management, and monitoring.</p>
      </div>
    </div>
  </DocsLayout>
</template>

<script setup>
import DocsLayout from '../../Layouts/DocsLayout.vue'
import CodeBlock from '../../Components/CodeBlock.vue'
</script>
