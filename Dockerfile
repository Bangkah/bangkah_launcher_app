# Node build
FROM node:20 AS nodebuild
WORKDIR /app
COPY . .
RUN npm ci && npm run build

# Composer build
FROM php:8.4-cli AS composerbuild
RUN apt-get update && apt-get install -y git unzip libzip-dev \
    && docker-php-ext-install zip \
    && rm -rf /var/lib/apt/lists/*
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer


# PHP runtime
FROM php:8.4-fpm-alpine

RUN apk add --no-cache \
    bash icu-dev libzip-dev oniguruma-dev zlib-dev nginx supervisor

RUN docker-php-ext-install intl zip bcmath opcache

WORKDIR /var/www/html
COPY --from=composerbuild /usr/local/bin/composer /usr/local/bin/composer
COPY . .
COPY --from=nodebuild /app/public/build /var/www/html/public/build
COPY default.conf /etc/nginx/conf.d/default.conf
COPY supervisord.conf /etc/supervisord.conf
RUN composer install --no-dev --optimize-autoloader --no-interaction
RUN chown -R www-data:www-data storage bootstrap/cache
RUN chmod -R 775 storage bootstrap/cache || true
EXPOSE 8080
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"]
