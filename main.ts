// Entry: a one-line joke about coding beside an AI agent.
// The program writes exactly one line to $MAKEFUN_OUTPUT_DIR/entry.txt.

const fs = require("fs");
const path = require("path");

const joke =
  "My AI pair programmer crashed our live demo, then confidently blamed a package that doesn't exist — and offered to install it from a repo it also invented.";

// Normalize to a single clean line: no embedded newlines, one trailing newline.
const line = joke.replace(/\s*\n\s*/g, " ").trim();

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), line + "\n", "utf8");
