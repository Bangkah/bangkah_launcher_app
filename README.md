# Bangkah Launcher – Official Web

[Official GitHub Repository](https://github.com/Bangkah/bangkah-launcher)

> **Bangkah Launcher** is my official product: a modern, professional CLI tool to instantly scaffold, configure, and launch Laravel-based web projects with best practices, Docker/Nginx support, and frontend flexibility. This repository is the official website and documentation hub for Bangkah Launcher.

---

## About Bangkah Launcher
Bangkah Launcher streamlines Laravel project creation for developers and teams. With a single command, you get a production-ready, customizable web or API starter—complete with Docker, Nginx, authentication, and frontend options (Tailwind/Bootstrap).

**Key Features:**
- Interactive CLI wizard for rapid project setup
- Web/API templates, ready-to-use Docker & Nginx configs
- Frontend choice: Tailwind CSS or Bootstrap 5
- Auth scaffolding (Breeze or Laravel UI)
- MySQL/PostgreSQL support with automatic `.env` configuration
- Automated frontend build

## System Requirements
- PHP 8.2+, Composer 2+
- Node.js 18+/20+ LTS, npm 9+
- Git (recommended)
- Docker & Docker Compose (optional, for container workflow)
- Minimum: 2 CPU, 2GB RAM, 5GB storage
- Recommended: 4+ CPU, 4GB+ RAM, 10GB+ storage

## Getting Started
1. **Install Bangkah Launcher in your Laravel project:**
   ```bash
   composer require bangkah/bangkah
   ```
2. **Create a new project using the interactive wizard:**
   ```bash
   php artisan bangkah:create
   ```
   Follow the prompts to select template, frontend, database, and Docker/Nginx options.
3. **Complete setup as instructed:**
   - Run `composer install`, `npm install`, and database migrations if prompted.
   - For container workflow: run `docker compose up -d`.
4. **Start the local server:**
   ```bash
   php artisan serve
   ```

## Quick Start (One Liner)
Skip the wizard and scaffold a project instantly:
```bash
php artisan bangkah:create \
  --type=web \
  --frontend=tailwind \
  --docker \
  --nginx \
  --db=mysql \
  --yes
```
Then run `docker compose up -d` and open http://localhost.

## Documentation
- Full documentation is in the `docs` folder (VitePress). To run locally:
  ```bash
  npm run docs:dev
  ```
- To build static docs:
  ```bash
  npm run docs:build
  ```

## Testing
Run the full test suite:
```bash
composer test
```
