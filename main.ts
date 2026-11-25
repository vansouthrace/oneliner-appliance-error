import { mkdirSync, writeFileSync } from "node:fs";

// The joke is the truth of the fault: a washing machine overloaded with
// towels and no detergent, speaking in its own flat, put-upon voice.
// It names the real failure first, then refuses to take the blame for it.
const entry = "ERROR E7: Fourteen towels, no detergent, and you expected miracles. I am a washing machine, not a priest. Run me again, properly.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
