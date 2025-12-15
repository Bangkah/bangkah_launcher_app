---
title: Installation
---

# Installation

## Method 1: Fresh Laravel Project (Recommended)

```bash
composer create-project laravel/laravel my-awesome-project
cd my-awesome-project
composer require bangkah/bangkah
php artisan bangkah:create
```

## Method 2: Existing Project

```bash
cd my-existing-project
composer require bangkah/bangkah
php artisan bangkah:create
```

Warning: Bangkah akan memodifikasi `.env`, `routes`, dan beberapa file. Backup otomatis dibuat: `*.backup-YYYYMMDDHHMMSS`.

## Verification

```bash
php artisan list bangkah
```

Expected:

```
Available commands for the "bangkah" namespace:
  bangkah:create  Create a new starter project with Bangkah
```
