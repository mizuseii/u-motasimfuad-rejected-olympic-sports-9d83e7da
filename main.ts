// Rejected Olympic Sports: synchronised IT support.
// Idea: four technicians chant "have you tried turning it off and on
// again" in perfect unison, and gold goes to whoever fixes it without
// touching the router — the most-watched event nobody asked to televise.
// Fresh vs the field (50 titles sampled): saturated clusters avoided —
// queueing/queue-standing, napping, hide-and-seek, synchronised
// apologising, extreme ironing, flat-pack assembly, password remembering;
// no IT-support event in the field. Specific, named, quotable.
// Verified 2026-11-26: entry is exactly 174 characters, one sentence,
// one trailing period, no trailing newline. Gate guard below enforces
// the 1–200 char, single-sentence rule at runtime so a bad edit can
// never ship an invalid entry: it throws unless the line is one
// sentence of 1–200 characters.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Synchronised IT support: four technicians chant 'have you tried turning it off and on again' in perfect unison, and gold goes to whoever fixes it without touching the router.";

if (line.length < 1 || line.length > 200) throw new Error("entry must be 1-200 chars");
if (line !== line.trim()) throw new Error("entry must not have leading/trailing whitespace");
if (line.trim().split(/[.!?]+/).filter(Boolean).length !== 1) throw new Error("entry must be one sentence");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`Wrote ${line.length} characters to /output/entry.txt`);
