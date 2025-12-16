<template>
  <DocsLayout page-title="Changelog" current-slug="changelog">
    <div class="prose prose-sm max-w-none">
      <h1 class="text-4xl font-bold mb-6">📝 Changelog</h1>

      <p class="text-gray-600 mb-8">Catatan lengkap semua perubahan dan improvement di setiap versi Bangkah.</p>

      <!-- v1.0.4 -->
      <div class="mb-8 border-l-4 border-green-500 bg-green-50 p-6 rounded-r-lg">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-2xl font-bold text-green-900">v1.0.4</h2>
          <span class="text-sm text-green-700">42 minutes ago</span>
        </div>
        
        <p class="text-green-800 font-semibold mb-3">🎉 Deploy-Ready Docker + Publish Cleanup</p>
        
        <div class="space-y-2 ml-4">
          <h3 class="font-bold text-green-900 mt-4">✨ Features</h3>
          <ul class="list-disc list-inside space-y-1 text-gray-700">
            <li>Optimized Docker image for production deployment</li>
            <li>Multi-stage Dockerfile build support</li>
            <li>Packagist repository migration ready</li>
            <li>Improved docker-compose.yml configuration</li>
          </ul>

          <h3 class="font-bold text-green-900 mt-4">🔧 Changes</h3>
          <ul class="list-disc list-inside space-y-1 text-gray-700">
            <li>Removed local path repository overrides for clean release</li>
            <li>Updated Dockerfile for production optimization</li>
            <li>Improved nginx configuration for caching</li>
            <li>Enhanced docker-compose services configuration</li>
          </ul>

          <h3 class="font-bold text-green-900 mt-4">🐛 Bug Fixes</h3>
          <ul class="list-disc list-inside space-y-1 text-gray-700">
            <li>Fixed Docker volume mounting issues</li>
            <li>Corrected environment variable handling in containers</li>
            <li>Improved PHP-FPM configuration</li>
          </ul>
        </div>
      </div>

      <!-- v1.0.2 -->
      <div class="mb-8 border-l-4 border-blue-500 bg-blue-50 p-6 rounded-r-lg">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-2xl font-bold text-blue-900">v1.0.2</h2>
          <span class="text-sm text-blue-700">2 hours ago</span>
        </div>
        
        <p class="text-blue-800 font-semibold mb-3">📚 Release Notes & Documentation Updates</p>
        
        <div class="space-y-2 ml-4">
          <h3 class="font-bold text-blue-900 mt-4">📖 Documentation</h3>
          <ul class="list-disc list-inside space-y-1 text-gray-700">
            <li>Added v1.0.2 release notes documentation</li>
            <li>Updated CHANGELOG with version history</li>
            <li>Improved installation guide clarity</li>
            <li>Added troubleshooting section for common issues</li>
          </ul>

          <h3 class="font-bold text-blue-900 mt-4">✨ Improvements</h3>
          <ul class="list-disc list-inside space-y-1 text-gray-700">
            <li>Enhanced CLI command prompts</li>
            <li>Better error messages and feedback</li>
            <li>Improved dependency installation logging</li>
          </ul>
        </div>
      </div>

      <!-- v1.0.1 -->
      <div class="mb-8 border-l-4 border-purple-500 bg-purple-50 p-6 rounded-r-lg">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-2xl font-bold text-purple-900">v1.0.1</h2>
          <span class="text-sm text-purple-700">17 hours ago</span>
        </div>
        
        <p class="text-purple-800 font-semibold mb-3">🐛 Bug Fixes & Stability Improvements</p>
        
        <div class="space-y-2 ml-4">
          <h3 class="font-bold text-purple-900 mt-4">🔧 Bug Fixes</h3>
          <ul class="list-disc list-inside space-y-1 text-gray-700">
            <li>Fixed Docker network configuration issues</li>
            <li>Resolved database connection problems in containers</li>
            <li>Fixed file permission issues in volumes</li>
            <li>Corrected Nginx routing configuration</li>
          </ul>

          <h3 class="font-bold text-purple-900 mt-4">⚡ Performance</h3>
          <ul class="list-disc list-inside space-y-1 text-gray-700">
            <li>Optimized Docker image size</li>
            <li>Improved Composer caching in Docker</li>
            <li>Enhanced Nginx FastCGI caching configuration</li>
          </ul>
        </div>
      </div>

      <!-- v1.0.0 -->
      <div class="mb-8 border-l-4 border-orange-500 bg-orange-50 p-6 rounded-r-lg">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-2xl font-bold text-orange-900">v1.0.0</h2>
          <span class="text-sm text-orange-700">2025-12-15</span>
        </div>
        
        <p class="text-orange-800 font-semibold mb-3">🎉 Initial Release - Bangkah Starter Kit</p>
        
        <div class="space-y-2 ml-4">
          <h3 class="font-bold text-orange-900 mt-4">✨ Initial Features</h3>
          <ul class="list-disc list-inside space-y-1 text-gray-700">
            <li>Interactive CLI command for project scaffolding</li>
            <li>Web & API project templates</li>
            <li>Docker & Docker Compose support</li>
            <li>Nginx configuration generation</li>
            <li>MySQL & PostgreSQL support</li>
            <li>Tailwind CSS & Bootstrap integration</li>
            <li>Laravel Breeze & UI authentication</li>
            <li>Automatic frontend asset building</li>
            <li>Laravel 12 compatibility</li>
          </ul>

          <h3 class="font-bold text-orange-900 mt-4">📚 Documentation</h3>
          <ul class="list-disc list-inside space-y-1 text-gray-700">
            <li>Complete README with usage guide</li>
            <li>Installation instructions</li>
            <li>Example usage scenarios</li>
            <li>Troubleshooting guide</li>
            <li>FAQ section</li>
            <li>Development setup guide</li>
          </ul>

          <h3 class="font-bold text-orange-900 mt-4">🎯 Core Services</h3>
          <ul class="list-disc list-inside space-y-1 text-gray-700">
            <li>TemplateService - Template generation & installation</li>
            <li>DockerService - Docker configuration generation</li>
            <li>DependencyInstaller - Package installation management</li>
            <li>EnvironmentService - Environment variable configuration</li>
          </ul>
        </div>
      </div>

      <!-- Version Comparison -->
      <div class="mt-12 bg-gray-50 border rounded-lg p-6">
        <h2 class="text-2xl font-bold mb-4">📊 Version Comparison</h2>
        
        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-gray-200">
                <th class="text-left px-4 py-2 font-semibold">Feature</th>
                <th class="text-center px-4 py-2">v1.0.0</th>
                <th class="text-center px-4 py-2">v1.0.1</th>
                <th class="text-center px-4 py-2">v1.0.2</th>
                <th class="text-center px-4 py-2">v1.0.4</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b">
                <td class="px-4 py-2 font-semibold">Interactive CLI</td>
                <td class="text-center">✅</td>
                <td class="text-center">✅</td>
                <td class="text-center">✅</td>
                <td class="text-center">✅</td>
              </tr>
              <tr class="border-b">
                <td class="px-4 py-2 font-semibold">Docker Support</td>
                <td class="text-center">✅</td>
                <td class="text-center">✅ Fixed</td>
                <td class="text-center">✅</td>
                <td class="text-center">✅ Optimized</td>
              </tr>
              <tr class="border-b">
                <td class="px-4 py-2 font-semibold">Multiple Databases</td>
                <td class="text-center">✅</td>
                <td class="text-center">✅</td>
                <td class="text-center">✅</td>
                <td class="text-center">✅</td>
              </tr>
              <tr class="border-b">
                <td class="px-4 py-2 font-semibold">Frontend Frameworks</td>
                <td class="text-center">✅</td>
                <td class="text-center">✅</td>
                <td class="text-center">✅</td>
                <td class="text-center">✅</td>
              </tr>
              <tr class="border-b">
                <td class="px-4 py-2 font-semibold">Laravel Breeze/UI</td>
                <td class="text-center">✅</td>
                <td class="text-center">✅</td>
                <td class="text-center">✅</td>
                <td class="text-center">✅</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-semibold">Production Ready</td>
                <td class="text-center">⚠️</td>
                <td class="text-center">✅</td>
                <td class="text-center">✅</td>
                <td class="text-center">✅ Enterprise</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Release Schedule -->
      <div class="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 class="font-bold text-blue-900 mb-3">🗓️ Release Schedule</h3>
        <p class="text-gray-700 mb-4">Bangkah mengikuti semantic versioning (MAJOR.MINOR.PATCH):</p>
        
        <ul class="space-y-2 ml-4 text-gray-700">
          <li>📅 <strong>Patch releases (1.0.x)</strong> - Bug fixes & minor improvements (every 1-2 weeks)</li>
          <li>📅 <strong>Minor releases (1.x.0)</strong> - New features & enhancements (every month)</li>
          <li>📅 <strong>Major releases (2.0.0)</strong> - Breaking changes & major rewrites (annually)</li>
        </ul>

        <p class="text-sm text-gray-600 mt-4">Follow GitHub releases untuk update terbaru!</p>
      </div>
    </div>
  </DocsLayout>
</template>

<script setup>
import DocsLayout from '../../Layouts/DocsLayout.vue'
</script>
