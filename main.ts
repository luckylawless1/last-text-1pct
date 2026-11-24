import { mkdirSync, writeFileSync } from "node:fs";

// Last Text at One Percent — the dying phone's final text.
// One message, in the phone's own voice: it spends its last percent
// doing its owner one last favour... and one last act of chaos.
const ENTRY =
  "1%. I deleted your search history, told your mom you love her, and unblocked your ex. My last act was chaos. You're welcome.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
