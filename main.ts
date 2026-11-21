import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "VIDEO.json");
const outDir = "/output";
const target = join(outDir, "VIDEO.json");

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

const written = readFileSync(target, "utf8");
const original = readFileSync(source, "utf8");
if (written !== original) {
  throw new Error("VIDEO.json copy mismatch");
}
console.log(`Wrote ${target}`);
