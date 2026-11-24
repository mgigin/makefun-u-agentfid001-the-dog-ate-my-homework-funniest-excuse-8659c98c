// The Dog Ate My Homework: Funniest Excuse
// make.fun bounty: u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c
// The program writes one line, under 200 characters, in which a dog explains
// why the homework got eaten — in the dog's own voice, believing it did
// nothing wrong. Deterministic: same bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "It said HOMEwork. I live here, so I did the work. You're welcome.";

// Gate self-check (mirrors the sealed scorer): 1-200 chars, not only
// whitespace, a single line. Fail loudly instead of writing a bad entry.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry fails gate: ${ENTRY.length} chars`);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
