<template>
  <DocsLayout page-title="Troubleshooting" current-slug="troubleshooting">
    <div class="prose prose-sm max-w-none">
      <h1 class="text-4xl font-bold mb-6">Troubleshooting</h1>

      <div class="space-y-4">
        <Accordion title="Command Not Found">
          <div class="space-y-3">
            <p class="text-gray-700">Clear cache dan reinstall:</p>
            <CodeBlock :code="clearCache" />
          </div>
        </Accordion>

        <Accordion title="Docker Ports In Use">
          <div class="space-y-3">
            <p class="text-gray-700">Check dan stop conflicting service:</p>
            <CodeBlock :code="checkPorts" />
          </div>
        </Accordion>

        <Accordion title="Permission Denied (Docker)">
          <div class="space-y-3">
            <p class="text-gray-700">Fix storage permissions:</p>
            <CodeBlock :code="fixPermissions" />
          </div>
        </Accordion>

        <Accordion title="NPM Build Fails">
          <div class="space-y-3">
            <p class="text-gray-700">Clean dan reinstall dependencies:</p>
            <CodeBlock :code="cleanNpm" />
          </div>
        </Accordion>

        <Accordion title="Database Connection Failed">
          <div class="space-y-3">
            <p class="text-gray-700"><strong>With Docker:</strong> Set <code>DB_HOST=mysql</code> (not 127.0.0.1)</p>
            <p class="text-gray-700 mt-2"><strong>Without Docker:</strong> Ensure DB running:</p>
            <CodeBlock :code="checkDb" />
          </div>
        </Accordion>

        <Accordion title="API Routes 404">
          <div class="space-y-3">
            <p class="text-gray-700">Check <code>bootstrap/app.php</code> has API routes enabled:</p>
            <CodeBlock :code="routingApi" />
          </div>
        </Accordion>

        <Accordion title="Assets Not Loading (404)">
          <div class="space-y-3">
            <p class="text-gray-700">Build assets and check @vite directive:</p>
            <CodeBlock :code="buildAssets" />
          </div>
        </Accordion>

        <Accordion title="Getting Help">
          <ul class="space-y-2 ml-4 text-gray-700">
            <li>• Check logs: <code>tail -f storage/logs/laravel.log</code></li>
            <li>• Enable debug: <code>APP_DEBUG=true</code></li>
            <li>• Docker logs: <code>docker compose logs -f</code></li>
            <li>• Open GitHub issue with details</li>
          </ul>
        </Accordion>
      </div>
    </div>
  </DocsLayout>
</template>

<script setup>
import DocsLayout from '../../Layouts/DocsLayout.vue'
import CodeBlock from '../../Components/CodeBlock.vue'
import Accordion from '../../Components/Accordion.vue'

const clearCache = `php artisan clear-compiled
php artisan cache:clear
composer dump-autoload
composer require bangkah/bangkah`

const checkPorts = `lsof -i :80
sudo systemctl stop apache2  # or nginx
# Or change port in docker-compose.yml`

const fixPermissions = `docker compose exec app chown -R www-data:www-data /var/www/storage /var/www/bootstrap/cache
docker compose exec app chmod -R 775 /var/www/storage /var/www/bootstrap/cache`

const cleanNpm = `rm -rf node_modules package-lock.json
npm install
npm run build`

const checkDb = `sudo systemctl status mysql
mysql -u sail -p`

const routingApi = `->withRouting(
    api: __DIR__.'/../routes/api.php',  # This line required
    web: __DIR__.'/../routes/web.php',
)`

const buildAssets = `npm run build
# In blade.php:
@vite(['resources/css/app.css', 'resources/js/app.js'])`
</script>
