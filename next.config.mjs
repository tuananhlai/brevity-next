/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // https://github.com/vercel/next.js/issues/71638#issuecomment-2431137842
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"],
  },
  images: {
    remotePatterns: [
      {
        hostname: "gravatar.com",
      },
    ],
  },
};

export default nextConfig;
