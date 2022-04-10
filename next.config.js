/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  images: {
    loader: 'akamai',
    path: '',
  },
  reactStrictMode: true,
  // add scss file
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      '/series': { page: '/series' },
    };
  }
};

module.exports = nextConfig;
