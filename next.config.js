/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/cardapio',
        permanent: true,
      },
    ]
  },
  i18n: {
    locales: ['pt-BR'],
    defaultLocale: 'pt-BR',
  }
}

module.exports = nextConfig
