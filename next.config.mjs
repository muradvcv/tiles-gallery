/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images:{
    remotePatterns:[
      {
        hostname:"images.unsplash.com"
      }
    ],
    domains: [
      'images.unsplash.com',
      'plus.unsplash.com', // 👈 এটা add করো
    ],
  }
};

export default nextConfig;
