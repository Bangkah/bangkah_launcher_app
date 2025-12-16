<template>
  <DocsLayout page-title="Contributing" current-slug="contributing">
    <div class="prose prose-sm max-w-none">
      <h1 class="text-4xl font-bold mb-6">Contributing</h1>

      <p class="text-lg text-gray-700 mb-8">
        Kami welcome contributions! Baik bug reports, features, PRs, atau docs improvements.
      </p>

      <h2 class="text-2xl font-bold mb-4">Ways to Contribute</h2>

      <div class="grid md:grid-cols-2 gap-4 mb-8">
        <div class="border-l-4 border-red-500 bg-red-50 p-4 rounded-r-lg">
          <h3 class="font-bold text-red-900 mb-2"> Report Bugs</h3>
          <p class="text-sm text-gray-700">Open issue dengan detailed info & steps to reproduce</p>
        </div>

        <div class="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-r-lg">
          <h3 class="font-bold text-blue-900 mb-2"> Suggest Features</h3>
          <p class="text-sm text-gray-700">Share ideas via GitHub Issues</p>
        </div>

        <div class="border-l-4 border-green-500 bg-green-50 p-4 rounded-r-lg">
          <h3 class="font-bold text-green-900 mb-2"> Improve Docs</h3>
          <p class="text-sm text-gray-700">Fix typos, clarify instructions, add examples</p>
        </div>

        <div class="border-l-4 border-purple-500 bg-purple-50 p-4 rounded-r-lg">
          <h3 class="font-bold text-purple-900 mb-2"> Submit PRs</h3>
          <p class="text-sm text-gray-700">Fix bugs atau implement features</p>
        </div>
      </div>

      <h2 class="text-2xl font-bold mb-4">Contribution Workflow</h2>

      <CodeBlock :code="workflowCode" />

      <h2 class="text-2xl font-bold mb-4 mt-8">Code Standards</h2>

      <div class="space-y-3 mb-8">
        <div class="border rounded-lg p-4 hover:shadow-lg transition-shadow">
          <h3 class="font-bold mb-2">PSR-12 Compliance</h3>
          <p class="text-sm text-gray-700">Follow PHP modern coding standards</p>
        </div>

        <div class="border rounded-lg p-4 hover:shadow-lg transition-shadow">
          <h3 class="font-bold mb-2">Testing Required</h3>
          <p class="text-sm text-gray-700">Add tests untuk new features & bug fixes</p>
        </div>

        <div class="border rounded-lg p-4 hover:shadow-lg transition-shadow">
          <h3 class="font-bold mb-2">Documentation</h3>
          <p class="text-sm text-gray-700">Update docs untuk API changes</p>
        </div>
      </div>

      <h2 class="text-2xl font-bold mb-4">Code of Conduct</h2>

      <div class="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-6">
        <ul class="space-y-2 ml-4 text-gray-700">
          <li>✓ Respek dan inklusif</li>
          <li>✓ Bantu newcomers dengan sopan</li>
          <li>✓ Berikan feedback konstruktif</li>
          <li>✓ Fokus pada code, bukan orang</li>
          <li>✓ No harassment atau discrimination</li>
        </ul>
      </div>
    </div>
  </DocsLayout>
</template>

<script setup>
import DocsLayout from '../../Layouts/DocsLayout.vue'
import CodeBlock from '../../Components/CodeBlock.vue'

const workflowCode = `# 1. Fork & clone
git clone https://github.com/your-fork/bangkah-launcher.git
cd bangkah-launcher

# 2. Create feature branch
git checkout -b feature/amazing-feature

# 3. Make changes & add tests
# Follow PSR-12 coding standards

# 4. Run tests
./vendor/bin/phpunit

# 5. Commit & push
git commit -m "Add amazing feature"
git push origin feature/amazing-feature

# 6. Open Pull Request on GitHub
# Describe changes, link related issues`
</script>
