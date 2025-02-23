/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: '/muncharoo',
    images: {
      domains: ['placehold.co', 'www.themealdb.com'], // Add this line
      dangerouslyAllowSVG: true, // Enable SVG support
    },
  }

  
export default nextConfig;

