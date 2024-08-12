/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["unicrea.crea-sc.org.br", "img.skore.io"],
  },
  async redirects() {
    return [
      {
        source: "/programas-creasc",
        destination: "/programas",
        permanent: false, // Use `true` if this is a permanent redirect
      },
    ];
  },
};

export default nextConfig;
