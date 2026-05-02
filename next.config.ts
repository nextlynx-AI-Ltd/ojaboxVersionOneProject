import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "style-src 'self' 'unsafe-inline' https://checkout.paystack.com https://paystack.com",
              "style-src 'self' 'unsafe-inline' https://checkout.paystack.com",
              "frame-src 'self' https://checkout.paystack.com",
              "img-src 'self' data: https://checkout.paystack.com",
              "connect-src 'self' https://api.paystack.co https://checkout.paystack.com",
              "font-src 'self' https://checkout.paystack.com",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;