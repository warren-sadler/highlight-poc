import { withHighlightConfiguration } from "@/shared/vendors/highlight/configuration";
import { NodeOptions } from "@highlight-run/node";
import pino, { Logger, LoggerOptions } from "pino";

const highlightConfig = withHighlightConfiguration(
  (NEXT_PUBLIC_HIGHLIGHT_PROJECT_ID) => ({
    projectID: NEXT_PUBLIC_HIGHLIGHT_PROJECT_ID,
    serviceName: "highlight-poc",
    tracingOrigins: ["localhost"],
    serviceVersion: "git-sha",
  })
);

const pinoConfig = {
  level: "debug",
  transport: {
    target: "@highlight-run/pino",
    options: highlightConfig,
  },
} as LoggerOptions;

if (
  typeof process.env.NEXT_RUNTIME === "undefined" ||
  process.env.NEXT_RUNTIME === "nodejs"
) {
  const { H } = require("@highlight-run/node");
  H.init(highlightConfig);
}

export const logger: Logger =
  process.env["NODE_ENV"] === "production"
    ? // JSON in production
      pino({ level: "warn" })
    : // Pretty print in development
      pino(pinoConfig);
