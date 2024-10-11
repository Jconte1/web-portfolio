/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,    // Enables React strict mode
    pageExtensions: ['js'],   // Recognizes .js files for routing
    experimental: {
      appDir: true,           // Enables the app directory for routing (Next.js 13+)
    },
  };
  
  export default nextConfig;
  