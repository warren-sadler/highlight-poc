import { get } from "env-var";

const NEXT_PUBLIC_HIGHLIGHT_PROJECT_ID =
  "NEXT_PUBLIC_HIGHLIGHT_PROJECT_ID" as const;

interface HighlightConfiguration {
  NEXT_PUBLIC_HIGHLIGHT_PROJECT_ID: string;
}

export const getHighlightConfiguration = (
  overrides: Partial<HighlightConfiguration> = {}
): HighlightConfiguration => {
  return {
    NEXT_PUBLIC_HIGHLIGHT_PROJECT_ID: get(NEXT_PUBLIC_HIGHLIGHT_PROJECT_ID)
      .required()
      .asString(),
  };
};

export const withHighlightConfiguration = <T>(
  callback: (config: HighlightConfiguration) => T,
  overrides: Partial<HighlightConfiguration> = {}
) => {
  return callback(getHighlightConfiguration(overrides));
};
