import { AppRouterHighlight } from "@highlight-run/next/server";
import { withHighlightConfiguration } from "./configuration";

export const withAppRouterHighlight = withHighlightConfiguration(
  ({ NEXT_PUBLIC_HIGHLIGHT_PROJECT_ID }) =>
    AppRouterHighlight({
      projectID: NEXT_PUBLIC_HIGHLIGHT_PROJECT_ID,
    })
);
