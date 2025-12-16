<template>
  <DocsLayout page-title="API Documentation" current-slug="api-documentation">
    <div class="prose prose-sm max-w-none">
      <h1 class="text-4xl font-bold mb-6">API Documentation</h1>

      <p class="text-gray-600 mb-8">Dokumentasi lengkap untuk API endpoints yang dihasilkan Bangkah, termasuk request/response examples dan best practices.</p>

      <!-- Health Check Endpoint -->
      <div class="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
        <h2 class="text-2xl font-bold text-blue-900 mb-4">Health Check Endpoint</h2>
        
        <div class="bg-white p-4 rounded border border-gray-200 mb-4">
          <p class="font-semibold text-gray-800 mb-2">GET /api/health</p>
          <p class="text-sm text-gray-600">Check if API is running dan mendapatkan informasi sistem</p>
        </div>

        <h3 class="font-bold text-blue-900 mt-6 mb-3">cURL Request:</h3>
        <CodeBlock :code="healthCurlRequest" />

        <h3 class="font-bold text-blue-900 mt-6 mb-3">Success Response (200 OK):</h3>
        <CodeBlock :code="healthSuccessResponse" />

        <h3 class="font-bold text-blue-900 mt-6 mb-3">Response Fields:</h3>
        <div class="overflow-x-auto mb-4">
          <table class="w-full text-sm border-collapse">
            <thead>
              <tr class="bg-blue-100">
                <th class="text-left px-4 py-2 font-semibold">Field</th>
                <th class="text-left px-4 py-2 font-semibold">Type</th>
                <th class="text-left px-4 py-2 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b">
                <td class="px-4 py-2"><code>status</code></td>
                <td class="px-4 py-2">string</td>
                <td class="px-4 py-2">Status API: "ok" atau "error"</td>
              </tr>
              <tr class="border-b">
                <td class="px-4 py-2"><code>message</code></td>
                <td class="px-4 py-2">string</td>
                <td class="px-4 py-2">Pesan deskriptif status</td>
              </tr>
              <tr class="border-b">
                <td class="px-4 py-2"><code>app</code></td>
                <td class="px-4 py-2">string</td>
                <td class="px-4 py-2">Nama aplikasi (dari APP_NAME)</td>
              </tr>
              <tr class="border-b">
                <td class="px-4 py-2"><code>environment</code></td>
                <td class="px-4 py-2">string</td>
                <td class="px-4 py-2">Environment (local, production, dll)</td>
              </tr>
              <tr class="border-b">
                <td class="px-4 py-2"><code>laravel</code></td>
                <td class="px-4 py-2">string</td>
                <td class="px-4 py-2">Versi Laravel yang digunakan</td>
              </tr>
              <tr class="border-b">
                <td class="px-4 py-2"><code>php</code></td>
                <td class="px-4 py-2">string</td>
                <td class="px-4 py-2">Versi PHP yang digunakan</td>
              </tr>
              <tr>
                <td class="px-4 py-2"><code>time</code></td>
                <td class="px-4 py-2">string</td>
                <td class="px-4 py-2">Timestamp ISO8601 server</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- API Response Format -->
      <div class="mb-8 border-l-4 border-green-500 bg-green-50 p-6 rounded-r-lg">
        <h2 class="text-2xl font-bold text-green-900 mb-4"> Response Format</h2>
        
        <h3 class="font-bold text-green-900 mt-4 mb-3">Success Response Structure:</h3>
        <CodeBlock :code="successResponseStructure" />

        <h3 class="font-bold text-green-900 mt-6 mb-3">Error Response Structure:</h3>
        <CodeBlock :code="errorResponseStructure" />
      </div>

      <!-- HTTP Status Codes -->
      <div class="mb-8 border-l-4 border-orange-500 bg-orange-50 p-6 rounded-r-lg">
        <h2 class="text-2xl font-bold text-orange-900 mb-4"> HTTP Status Codes</h2>
        
        <div class="space-y-3">
          <div class="bg-white p-3 rounded border border-gray-200">
            <p class="font-semibold text-gray-800">200 OK</p>
            <p class="text-sm text-gray-600">Request berhasil diproses</p>
          </div>

          <div class="bg-white p-3 rounded border border-gray-200">
            <p class="font-semibold text-gray-800">201 Created</p>
            <p class="text-sm text-gray-600">Resource baru berhasil dibuat</p>
          </div>

          <div class="bg-white p-3 rounded border border-gray-200">
            <p class="font-semibold text-gray-800">400 Bad Request</p>
            <p class="text-sm text-gray-600">Request tidak valid (validation error)</p>
          </div>

          <div class="bg-white p-3 rounded border border-gray-200">
            <p class="font-semibold text-gray-800">401 Unauthorized</p>
            <p class="text-sm text-gray-600">Authentication diperlukan</p>
          </div>

          <div class="bg-white p-3 rounded border border-gray-200">
            <p class="font-semibold text-gray-800">403 Forbidden</p>
            <p class="text-sm text-gray-600">Tidak memiliki akses ke resource</p>
          </div>

          <div class="bg-white p-3 rounded border border-gray-200">
            <p class="font-semibold text-gray-800">404 Not Found</p>
            <p class="text-sm text-gray-600">Resource tidak ditemukan</p>
          </div>

          <div class="bg-white p-3 rounded border border-gray-200">
            <p class="font-semibold text-gray-800">422 Unprocessable Entity</p>
            <p class="text-sm text-gray-600">Validasi gagal (semantic error)</p>
          </div>

          <div class="bg-white p-3 rounded border border-gray-200">
            <p class="font-semibold text-gray-800">429 Too Many Requests</p>
            <p class="text-sm text-gray-600">Rate limit exceeded</p>
          </div>

          <div class="bg-white p-3 rounded border border-gray-200">
            <p class="font-semibold text-gray-800">500 Internal Server Error</p>
            <p class="text-sm text-gray-600">Error pada server (unexpected)</p>
          </div>
        </div>
      </div>

      <!-- CORS Configuration -->
      <div class="mb-8 border-l-4 border-purple-500 bg-purple-50 p-6 rounded-r-lg">
        <h2 class="text-2xl font-bold text-purple-900 mb-4">🔒 CORS Configuration</h2>
        
        <p class="text-gray-700 mb-4">Bangkah mengkonfigurasi CORS otomatis untuk API template:</p>

        <h3 class="font-bold text-purple-900 mt-4 mb-3">Default CORS Config:</h3>
        <CodeBlock :code="corsConfig" />

        <h3 class="font-bold text-purple-900 mt-6 mb-3">Customize CORS (config/cors.php):</h3>
        <CodeBlock :code="customCorsConfig" />
      </div>

      <!-- Rate Limiting -->
      <div class="mb-8 border-l-4 border-red-500 bg-red-50 p-6 rounded-r-lg">
        <h2 class="text-2xl font-bold text-red-900 mb-4">⏱️ Rate Limiting</h2>
        
        <p class="text-gray-700 mb-4">Lindungi API Anda dari abuse dengan rate limiting:</p>

        <h3 class="font-bold text-red-900 mt-4 mb-3">Apply Rate Limit di Routes:</h3>
        <CodeBlock :code="rateLimitingCode" />

        <h3 class="font-bold text-red-900 mt-6 mb-3">Rate Limit Response Headers:</h3>
        <CodeBlock :code="rateLimitHeaders" />

        <p class="text-gray-700 mt-4">Ketika limit terlampaui, client akan mendapat response 429 dengan headers di atas.</p>
      </div>

      <!-- Pagination -->
      <div class="mb-8 border-l-4 border-indigo-500 bg-indigo-50 p-6 rounded-r-lg">
        <h2 class="text-2xl font-bold text-indigo-900 mb-4"> Pagination</h2>
        
        <h3 class="font-bold text-indigo-900 mt-4 mb-3">Paginated List Response:</h3>
        <CodeBlock :code="paginatedResponse" />

        <h3 class="font-bold text-indigo-900 mt-6 mb-3">Query Parameters:</h3>
        <div class="overflow-x-auto">
          <table class="w-full text-sm border-collapse">
            <thead>
              <tr class="bg-indigo-100">
                <th class="text-left px-4 py-2 font-semibold">Parameter</th>
                <th class="text-left px-4 py-2 font-semibold">Type</th>
                <th class="text-left px-4 py-2 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b">
                <td class="px-4 py-2"><code>page</code></td>
                <td class="px-4 py-2">integer</td>
                <td class="px-4 py-2">Halaman yang diminta (default: 1)</td>
              </tr>
              <tr>
                <td class="px-4 py-2"><code>per_page</code></td>
                <td class="px-4 py-2">integer</td>
                <td class="px-4 py-2">Items per halaman (default: 15, max: 100)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Authentication -->
      <div class="mt-12 p-6 bg-gray-50 rounded-lg border">
        <h2 class="text-2xl font-bold mb-4"> API Authentication</h2>
        
        <p class="text-gray-700 mb-4">Untuk endpoints yang memerlukan authentication, gunakan Bearer token:</p>

        <h3 class="font-bold text-gray-900 mt-4 mb-3">Request dengan Authentication:</h3>
        <CodeBlock :code="authRequest" />

        <p class="text-gray-700 mt-4">Token biasanya diperoleh dari login endpoint atau OAuth provider.</p>
      </div>
    </div>
  </DocsLayout>
</template>

<script setup>
import DocsLayout from '../../Layouts/DocsLayout.vue'
import CodeBlock from '../../Components/CodeBlock.vue'

const healthCurlRequest = `curl -X GET http://localhost/api/health \
  -H "Accept: application/json"`

const healthSuccessResponse = `{
  "status": "ok",
  "message": "API is running",
  "app": "MyApp",
  "environment": "local",
  "laravel": "12.42.0",
  "php": "8.4.1",
  "time": "2025-12-15T10:30:00.000000Z"
}`

const successResponseStructure = `{
  "success": true,
  "message": "Operation successful",
  "data": {
    // Your response data here
  }
}`

const errorResponseStructure = `{
  "success": false,
  "message": "Error message",
  "errors": {
    "field_name": ["Error message for this field"]
  }
}`

const corsConfig = `// Default CORS allows:
- All origins in development
- Specific origins in production
- Common methods: GET, POST, PUT, DELETE, PATCH
- Common headers: Accept, Content-Type, Authorization`

const customCorsConfig = `// In config/cors.php
'paths' => ['api/*'],
'allowed_methods' => ['*'],
'allowed_origins' => ['https://example.com'],
'allowed_origins_patterns' => [],
'allowed_headers' => ['*'],
'exposed_headers' => [],
'max_age' => 0,
'supports_credentials' => false,`

const rateLimitingCode = `// In routes/api.php
Route::middleware('throttle:60,1')->group(function () {
    // 60 requests per minute
    Route::get('/health', [HealthController::class, 'check']);
});

// Custom throttle
Route::middleware('throttle:100,1')->group(function () {
    // 100 requests per minute for authenticated users
    Route::middleware('auth:api')->group(function () {
        Route::get('/user', [UserController::class, 'show']);
    });
});`

const rateLimitHeaders = `X-RateLimit-Limit: 60
X-RateLimit-Remaining: 59
X-RateLimit-Reset: 1639570800`

const paginatedResponse = `{
  "data": [
    { "id": 1, "name": "Item 1" },
    { "id": 2, "name": "Item 2" }
  ],
  "links": {
    "first": "http://localhost/api/items?page=1",
    "last": "http://localhost/api/items?page=10",
    "prev": null,
    "next": "http://localhost/api/items?page=2"
  },
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 10,
    "per_page": 15,
    "to": 15,
    "total": 150
  }
}`

const authRequest = `curl -X GET http://localhost/api/user \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -H "Accept: application/json"`
</script>
