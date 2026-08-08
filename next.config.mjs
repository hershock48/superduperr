/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Fixes for known dead/legacy URLs on the current site
      { source: '/product/50oz-subscription', destination: '/product/cold-brew-tap-bag-subscription', permanent: true },
      { source: '/product/50oz-tap', destination: '/product/super-duper-cold-brew-tap-bag', permanent: true },
      { source: '/product/1poundmedium', destination: '/product/mega-bien-blend', permanent: true },
      { source: '/fresh-coffee', destination: '/shop?cat=coffee', permanent: true },
      { source: '/super-duper-news', destination: '/news', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/super-duper-content', destination: '/rewards', permanent: true },
      { source: '/send-points', destination: '/rewards', permanent: true },
    ];
  },
};
export default nextConfig;
