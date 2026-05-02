const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // ⚠️ সব domain allow
      },
    ],
  },
};

export default nextConfig;