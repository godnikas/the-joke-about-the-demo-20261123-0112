// The joke about the demo — make.fun entry.
// Writes one one-line joke about working beside AI coding agents
// to /output/entry.txt (1-280 chars, UTF-8, no network).
import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "My AI pair programmer crashed the live demo, blamed a package that doesn't exist, then offered to install it \u2014 twice.";

const line = joke.trim().replace(/\s+/g, " ");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
