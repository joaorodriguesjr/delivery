/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/cardapio',
        permanent: false,
      },
    ]
  },
  i18n: {
    locales: ['pt-BR'],
    defaultLocale: 'pt-BR',
    localeDetection: false,
  }
}

module.exports = nextConfig
