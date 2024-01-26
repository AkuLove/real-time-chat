import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

/** @type {import('next').NextConfig} */

const nextConfig = {
  sassOptions: {
    includePaths: ['./'],
    prependData: `@import "styles/mixins.scss";`,
  },
};

export default nextConfig;
