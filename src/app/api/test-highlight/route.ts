import { NextRequest } from "next/server";
import { withAppRouterHighlight } from "@/shared/vendors/highlight";
import { H } from "@highlight-run/next/server";
import { logger } from "@/shared/utils/logger";

const log = logger.child({ module: "test-highlight/route" });

export const GET = withAppRouterHighlight(async function GET(
  request: NextRequest
) {
  return new Promise(async (resolve) => {
    const span = await H.startActiveSpan("app-router-span", {});

    log.info("Here: /api/test-highlight/route.ts ⏰⏰⏰");

    span.end();

    resolve(new Response("Success: /api/test-highlight"));
  });
});
