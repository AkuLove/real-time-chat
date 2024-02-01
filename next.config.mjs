/** @type {import('next').NextConfig} */

const nextConfig = {
  sassOptions: {
    includePaths: ['./'],
    prependData: `@import "styles/mixins.scss";`,
  },
  experimental: {
    swcPlugins: [['next-superjson-plugin', {}]],
  },
  images: {
    domains: [
      'res.cloudinary.com',
      'avatars.githubusercontent.com',
      'lh3.googleusercontent.com',
    ],
  },
};

export default nextConfig;
