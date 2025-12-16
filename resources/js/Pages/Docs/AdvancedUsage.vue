<template>
  <DocsLayout page-title="Advanced Usage" current-slug="advanced-usage">
    <div class="prose prose-sm max-w-none">
      <h1 class="text-4xl font-bold mb-6">🚀 Advanced Usage</h1>

      <h2 class="text-2xl font-bold mb-4">Custom Templates</h2>

      <p class="text-gray-700 mb-4">Publish dan customize stubs:</p>

      <CodeBlock :code="publishStubs" />

      <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4 mb-8">
        <p class="text-gray-700">Edit stubs di <code>resources/bangkah/stubs/</code>:</p>
        <ul class="space-y-1 ml-4 mt-2 text-sm">
          <li>• Tambah custom controllers</li>
          <li>• Customize views</li>
          <li>• Tambah custom routes</li>
        </ul>
      </div>

      <h2 class="text-2xl font-bold mb-4">Extending Services</h2>

      <p class="text-gray-700 mb-4">Extend services dalam <code>AppServiceProvider</code>:</p>

      <CodeBlock :code="customService" />

      <h2 class="text-2xl font-bold mb-4 mt-8">Programmatic Usage</h2>

      <p class="text-gray-700 mb-4">Use services dari container:</p>

      <CodeBlock :code="programmaticUsage" />

      <div class="bg-green-50 border border-green-200 rounded-lg p-4 mt-8">
        <p class="font-semibold text-green-900 mb-2">💡 Advanced Tips</p>
        <ul class="space-y-2 ml-4 text-gray-700">
          <li>• Mix multiple templates dengan artisan commands</li>
          <li>• Pipeline custom logic dalam services</li>
          <li>• Hook ke Bangkah lifecycle events</li>
          <li>• Publish & customize launchpad UI components</li>
        </ul>
      </div>
    </div>
  </DocsLayout>
</template>

<script setup>
import DocsLayout from '../../Layouts/DocsLayout.vue'
import CodeBlock from '../../Components/CodeBlock.vue'

const publishStubs = `php artisan vendor:publish --tag=bangkah-stubs`

const customService = `namespace App\\Services;

use Bangkah\\Starter\\Services\\TemplateService;

class CustomTemplateService extends TemplateService
{
    public function applyCustomTemplate(string $basePath): void
    {
        $this->copyController($basePath, 'CustomController');
        $this->copyView($basePath, 'custom.blade.php');
    }
}`

const programmaticUsage = `use Bangkah\\Starter\\Services\\TemplateService;
use Bangkah\\Starter\\Services\\DockerService;

$templateService = app(TemplateService::class);
$dockerService = app(DockerService::class);

$templateService->applyWeb(base_path());
$dockerService->generateDockerFiles(base_path(), 'mysql', true);`
</script>
