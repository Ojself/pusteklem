// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.wikihow.com",
      },
    ],
  },
};
