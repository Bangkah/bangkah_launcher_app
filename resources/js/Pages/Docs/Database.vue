<template>
  <DocsLayout page-title="Database" current-slug="database">
    <div class="prose prose-sm max-w-none">
      <h1 class="text-4xl font-bold mb-6">💾 Database Setup</h1>

      <h2 class="text-2xl font-bold mb-4">MySQL Configuration</h2>
      
      <CodeBlock :code="mysqlConfig" />

      <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4 mb-8">
        <p class="font-semibold text-blue-900 mb-2">✓ MySQL 8.0 Features:</p>
        <ul class="space-y-1 ml-4 text-sm">
          <li>• UTF8MB4 character set</li>
          <li>• InnoDB engine</li>
          <li>• Persistent volume (mysql_data)</li>
        </ul>
      </div>

      <h2 class="text-2xl font-bold mb-4">PostgreSQL Configuration</h2>
      
      <CodeBlock code="DB_CONNECTION=pgsql
DB_HOST=pgsql # or 127.0.0.1 without Docker
DB_PORT=5432
DB_DATABASE=laravel
DB_USERNAME=sail
DB_PASSWORD=passw:code="postgresConfignced features (JSON, Full-Text Search)</li>
          <li>• ACID compliance</li>
          <li>• Persistent volume (pgsql_data)</li>
        </ul>
      </div>

      <h2 class="text-2xl font-bold mb-4">Migrations & Seeding</h2>
      
      <div class="space-y-4">
        <div class="border-l-4 border-orange-500 bg-orange-50 p-4 rounded-r-lg">
          <p class="text-sm font-semibold mb-2">Run migrations</p>
          <CodeBlock code="php artisan migrate" />
        </div>

        <div class="border-l-4 border-purple-500 bg-purple-50 p-4 rounded-r-lg">
          <p class="text-sm font-semibold mb-2">Seed database</p>
          <CodeBlock code="php artisan make:seeder UserSeeder
php artisan db:seed --class=UserSeeder
php artisan db:seed" />
        </div>
      </div>

      <h2 class="text-2xl font-bold mb-4 mt-8">GUI Tools</h2>
      
      <div class="grid md:grid-cols-2 gap-4">
        <div class="border rounded-lg p-4">
          <h3 class=":code="seedCommandshpMyAdmin</li>
            <li>• MySQL Workbench</li>
            <li>• TablePlus</li>
          </ul>
        </div>

        <div class="border rounded-lg p-4">
          <h3 class="font-bold mb-2">PostgreSQL</h3>
          <ul class="space-y-1 text-sm ml-3">
            <li>• pgAdmin</li>
            <li>• DBeaver</li>
            <li>• TablePlus</li>
          </ul>
        </div>
      </div>

      <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-8">
        <p class="font-semibold text-blue-900 mb-3">Connection Details:</p>
        <ul class="space-y-1 text-sm ml-4">
          <li>Host: localhost</li>
          <li>Port: 3306 (MySQL) or 5432 (PostgreSQL)</li>
          <li>User: sail</li>
          <li>Password: password</li>
          <li>Database: laravel</li>
        </ul>
      </div>
    </div>
  </DocsLayout>
</template>

<script setup>
import DocsLayout from '../../Layouts/DocsLayout.vue'
import CodeBlock from '../../Components/CodeBlock.vue'

const mysqlConfig = `DB_CONNECTION=mysql
DB_HOST=mysql # or 127.0.0.1 without Docker
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=sail
DB_PASSWORD=password`

const postgresConfig = `DB_CONNECTION=pgsql
DB_HOST=pgsql # or 127.0.0.1 without Docker
DB_PORT=5432
DB_DATABASE=laravel
DB_USERNAME=sail
DB_PASSWORD=password`

const seedCommands = `php artisan make:seeder UserSeeder
php artisan db:seed --class=UserSeeder
php artisan db:seed`
</script>
