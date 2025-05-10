// next.config.mjs
import nextPWA from "next-pwa";

const pwaConfig = {
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  // runtimeCaching: []
};

const withPWA = nextPWA(pwaConfig);

export default withPWA({
  // Your existing Next.js config
  // reactStrictMode: true, etc...
});