---
title: Quick Start
---

# Quick Start

30-Second Setup:

```bash
php artisan bangkah:create \
  --type=web \
  --frontend=tailwind \
  --docker \
  --nginx \
  --db=mysql \
  --yes
```

Start containers:
```bash
docker compose up -d
```

Access: http://localhost
