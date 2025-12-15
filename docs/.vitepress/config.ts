import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Bangkah Launcher',
  description: 'Dokumentasi resmi untuk Bangkah Launcher',
  lang: 'id-ID',
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Beranda', link: '/' },
      { text: 'Mulai', link: '/guide/mulai' },
      { text: 'Konfigurasi', link: '/guide/konfigurasi' },
      { text: 'GitHub', link: 'https://github.com/Bangkah/bangkah-launcher' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Panduan',
          items: [
            { text: 'Mulai', link: '/guide/mulai' },
            { text: 'Instalasi', link: '/guide/instalasi' },
            { text: 'Konfigurasi', link: '/guide/konfigurasi' },
            { text: 'CLI', link: '/guide/cli' }
          ]
        }
      ],
      '/docs/': [
        {
          text: 'Dokumentasi Lengkap',
          items: [
            { text: 'Tentang', link: '/docs/about' },
            { text: 'Fitur', link: '/docs/features' },
            { text: 'Requirements', link: '/docs/requirements' },
            { text: 'Instalasi', link: '/docs/installation' },
            { text: 'Quick Start', link: '/docs/quick-start' },
            { text: 'Usage', link: '/docs/usage' },
            { text: 'Examples', link: '/docs/examples' },
            { text: 'Templates', link: '/docs/templates' },
            { text: 'Docker', link: '/docs/docker' },
            { text: 'Database', link: '/docs/database' },
            { text: 'Authentication', link: '/docs/authentication' },
            { text: 'Frontend Assets', link: '/docs/frontend' },
            { text: 'Deployment', link: '/docs/deployment' },
            { text: 'Troubleshooting', link: '/docs/troubleshooting' },
            { text: 'FAQ', link: '/docs/faq' },
            { text: 'Development', link: '/docs/development' },
            { text: 'Advanced Usage', link: '/docs/advanced-usage' },
            { text: 'Contributing', link: '/docs/contributing' },
            { text: 'Changelog', link: '/docs/changelog' },
            { text: 'License', link: '/docs/license' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Bangkah/bangkah-launcher' }
    ],
    footer: {
      message: 'Dibuat dengan ❤️ oleh Bangkah',
      copyright: '© ' + new Date().getFullYear() + ' Bangkah'
    }
  }
})
