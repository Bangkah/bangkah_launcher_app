<template>
  <DocsLayout page-title="FAQ" current-slug="faq">
    <div class="prose prose-sm max-w-none">
      <h1 class="text-4xl font-bold mb-6">FAQ</h1>

      <div class="space-y-4">
        <Accordion title="Perbedaan Bangkah dengan Laravel Breeze/Jetstream?">
          <p class="text-gray-700">
            Bangkah adalah <strong>scaffolding tool</strong>, bukan starter kit yang opinionated. Bangkah membantu setup infrastructure 
            (Docker, Nginx, DB, Frontend), sedangkan Breeze/Jetstream fokus pada authentication dan application features.
          </p>
          <p class="text-gray-700 mt-3">
            <strong>Anda bisa menggunakan Bangkah bersamaan dengan Breeze/Jetstream!</strong>
          </p>
        </Accordion>

        <Accordion title="Apakah Bangkah mengganti file existing?">
          <p class="text-gray-700 mb-3">Ya, Bangkah akan override beberapa files:</p>
          <ul class="space-y-2 ml-4 text-gray-700">
            <li>• <code>.env</code> (database credentials)</li>
            <li>• <code>routes/web.php</code> atau <code>routes/api.php</code></li>
            <li>• <code>bootstrap/app.php</code> (untuk API routes)</li>
          </ul>
          <p class="text-gray-700 mt-3 font-semibold">⚠️ Selalu backup project Anda sebelum menjalankan Bangkah!</p>
        </Accordion>

        <Accordion title="Bisakah saya use Bangkah di project Laravel lama?">
          <p class="text-gray-700">
            Ya, tapi hati-hati. Bangkah tested di Laravel 11 & 12. Untuk versi lama, mungkin perlu adjustment manual.
          </p>
        </Accordion>

        <Accordion title="Apakah Bangkah free?">
          <p class="text-gray-700">
            Ya! Bangkah adalah <strong>100% free dan open-source</strong> (MIT License).
          </p>
        </Accordion>

        <Accordion title="Kenapa npm run build dijalankan otomatis?">
          <p class="text-gray-700">
            Untuk convenience. Frontend assets langsung ready tanpa manual build. Jika tidak suka, Anda bisa skip dengan <code>--frontend=none</code>.
          </p>
        </Accordion>

        <Accordion title="Bisakah saya customize templates?">
          <p class="text-gray-700 mb-3">Ya! Templates ada di <code>vendor/bangkah/bangkah/stubs/</code>. Anda bisa publish dan modify:</p>
          <CodeBlock code="php artisan vendor:publish --tag=bangkah-stubs" />
        </Accordion>

        <Accordion title="Apakah Docker wajib?">
          <p class="text-gray-700">
            Tidak. Docker optional. Anda bisa skip dengan tidak menggunakan flag <code>--docker</code>.
          </p>
        </Accordion>

        <Accordion title="Support Laravel 11?">
          <p class="text-gray-700">
            Ya, Bangkah support Laravel 11 & 12.
          </p>
        </Accordion>

        <Accordion title="Apakah bisa pakai database lain selain MySQL/PostgreSQL?">
          <p class="text-gray-700">
            Secara default hanya MySQL & PostgreSQL. Untuk SQLite, MariaDB, atau SQL Server, Anda perlu configure manual di <code>.env</code> dan <code>docker-compose.yml</code>.
          </p>
        </Accordion>

        <Accordion title="Bagaimana cara update Bangkah?">
          <CodeBlock code="composer update bangkah/bangkah" />
        </Accordion>

        <Accordion title="Apakah ada conflict dengan package lain?">
          <p class="text-gray-700">
            Bangkah dirancang non-intrusive. Tidak ada conflict dengan package popular seperti Livewire, Inertia, Filament, dll.
          </p>
        </Accordion>
      </div>
    </div>
  </DocsLayout>
</template>

<script setup>
import DocsLayout from '../../Layouts/DocsLayout.vue'
import CodeBlock from '../../Components/CodeBlock.vue'
import Accordion from '../../Components/Accordion.vue'
</script>
