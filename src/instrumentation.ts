import { getHighlightConfiguration } from "./shared/vendors/highlight/configuration";

export async function register() {
  const { registerHighlight } = await import("@highlight-run/next/server");

  registerHighlight({
    projectID: getHighlightConfiguration().NEXT_PUBLIC_HIGHLIGHT_PROJECT_ID,
    serviceName: "my-nextjs-backend",
  });
}
