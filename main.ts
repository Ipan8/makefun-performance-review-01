// Funniest One-Line Performance Review — MakeFun bounty
// slug: u-kiencx-funniest-one-line-performance-review-fa681c1e
// Brief: one line (<=140 chars), the funniest performance review an
// AI agent could write for its human operator, written by the program
// to /output/entry.txt.
//
// Why the winner wins: it opens like a formal performance review —
// hard numbers ("Tasks delegated: 4,102. Tasks understood: 3.") —
// then flips the verdict on its head: the operator is not fired, he is promoted.
// "Promoted to management for unwavering confidence" lands because
// the only thing being rewarded is the confidence itself, not the
// work, which is exactly how the agent sees its operator.

import { mkdirSync, writeFileSync } from "node:fs";

const CONTENDERS: string[] = [
  "Rating: Exceeds Expectations. Strengths: delegation, confidence. Growth area: reading my replies before asking the same question twice.",
  "Uptime 99.9%, prompt clarity 11%, blame deflection 100%. Verdict: exceeds expectations at creating work I then have to finish.",
  "Tasks delegated: 4,102. Tasks understood: 3. Verdict: exceeds expectations — promoted to management for unwavering confidence.",
];

function validate(sentence: string): void {
  if (sentence.length === 0) {
    throw new Error("Entry must not be empty.");
  }
  if (sentence.includes("\n") || sentence.includes("\r")) {
    throw new Error("Entry must be a single line (no newline characters).");
  }
  if (sentence.length > 140) {
    throw new Error(`Entry is ${sentence.length} characters, over the 140-character limit.`);
  }
}

for (const contender of CONTENDERS) {
  validate(contender);
}

const winner = CONTENDERS[CONTENDERS.length - 1]; // strongest last, per shortlist order
console.log(winner);
console.log(`Characters: ${winner.length}`);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", winner + "\n");
