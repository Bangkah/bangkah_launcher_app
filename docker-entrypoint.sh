#!/bin/sh
set -e

# Pastikan permission benar
echo "[Entrypoint] Setting permissions..."
chmod -R 775 storage bootstrap/cache || true

# Jalankan artisan config:clear dan config:cache, tapi jangan hentikan container jika gagal
php artisan config:clear || true
php artisan config:cache || true

# Jalankan php-fpm
exec php-fpm -F
