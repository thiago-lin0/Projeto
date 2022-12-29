/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  env:{
    NEXT_PUBLIC_REPORT_AUTH_SERVER: "https://boost.auth.beansoftwares.com.br",
    NEXT_PUBLIC_BOOST_HASURA: "https://boost.hasura.beansoftwares.com.br/v1/graphql",
    NEXT_PUBLIC_REACT_APP_GOOGLE_ANALITY: "true",
    NEXT_PUBLIC_REACT_APP_GOOGLE_TRACKING_ID: "UA-251806642-2"
  },
  }

module.exports = nextConfig;
