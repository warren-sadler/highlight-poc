import { withHighlightConfig } from "@highlight-run/next/config";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: [
      "pino",
      "pino-pretty",
      "@highlight-run/node",
    ],
    instrumentationHook: true,
  },
  webpack(config, options) {
    if (options.isServer) {
      config.ignoreWarnings = [{ module: /highlight-(run\/)?node/ }];
    }

    return config;
  },
};

export default withHighlightConfig(nextConfig);
