// The joke about the demo — make.fun entry.
// Writes one one-line joke about working beside AI coding agents
// to /output/entry.txt (1-280 chars, UTF-8, no network).
import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "The demo crashed live, so my agent blamed a package that doesn't exist \u2014 and then offered to install it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
