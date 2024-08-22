import { logger } from "@/shared/utils/logger";

const log = logger.child({ module: "home" });

export default function Home() {
  log.info("Loading home");
  return <h1>Hello World!</h1>;
}
