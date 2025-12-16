<template>
  <DocsLayout page-title="Development" current-slug="development">
    <div class="prose prose-sm max-w-none">
      <h1 class="text-4xl font-bold mb-6">🛠️ Development</h1>

      <h2 class="text-2xl font-bold mb-4">Local Development</h2>

      <CodeBlock :code="cloneSetup" />

      <h2 class="text-2xl font-bold mb-4 mt-8">Testing Your Changes</h2>

      <p class="text-gray-700 mb-4">Create test Laravel project:</p>

      <CodeBlock :code="testProject" />

      <h2 class="text-2xl font-bold mb-4 mt-8">Project Structure</h2>

      <div class="bg-gray-900 text-gray-100 p-6 rounded-lg mb-8 font-mono text-sm">
        <pre>bangkah/
├── src/
│   ├── Commands/
│   │   └── StarterCreateCommand.php
│   ├── Services/
│   │   ├── TemplateService.php
│   │   ├── DockerService.php
│   │   └── EnvironmentService.php
│   └── BangkahServiceProvider.php
├── stubs/
│   ├── web/
│   ├── api/
│   └── nginx/
├── tests/
├── composer.json
└── README.md</pre>
      </div>

      <h2 class="text-2xl font-bold mb-4">Running Tests</h2>

      <div class="space-y-3 mb-8">
        <div class="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-r-lg">
          <p class="text-sm font-semibold mb-2">All tests</p>
          <CodeBlock :code="testAll" />
        </div>

        <div class="border-l-4 border-green-500 bg-green-50 p-4 rounded-r-lg">
          <p class="text-sm font-semibold mb-2">Specific test</p>
          <CodeBlock :code="testSpecific" />
        </div>

        <div class="border-l-4 border-purple-500 bg-purple-50 p-4 rounded-r-lg">
          <p class="text-sm font-semibold mb-2">With coverage</p>
          <CodeBlock :code="testCoverage" />
        </div>
      </div>

      <h2 class="text-2xl font-bold mb-4">Code Style (PSR-12)</h2>

      <div class="space-y-3">
        <div class="border-l-4 border-orange-500 bg-orange-50 p-4 rounded-r-lg">
          <p class="text-sm font-semibold mb-2">Check style</p>
          <CodeBlock :code="checkStyle" />
        </div>

        <div class="border-l-4 border-purple-500 bg-purple-50 p-4 rounded-r-lg">
          <p class="text-sm font-semibold mb-2">Fix style</p>
          <CodeBlock :code="fixStyle" />
        </div>
      </div>
    </div>
  </DocsLayout>
</template>

<script setup>
import DocsLayout from '../../Layouts/DocsLayout.vue'
import CodeBlock from '../../Components/CodeBlock.vue'

const cloneSetup = `git clone https://github.com/Bangkah/bangkah-launcher.git
cd bangkah-launcher
composer install
./vendor/bin/phpunit`

const testProject = `composer create-project laravel/laravel test-project
cd test-project
composer config repositories.bangkah path ../bangkah
composer require bangkah/bangkah @dev
php artisan bangkah:create`

const testAll = `./vendor/bin/phpunit`
const testSpecific = `./vendor/bin/phpunit --filter StarterCreateCommandTest`
const testCoverage = `./vendor/bin/phpunit --coverage-html coverage`
const checkStyle = `./vendor/bin/phpcs`
const fixStyle = `./vendor/bin/phpcbf`
</script>
