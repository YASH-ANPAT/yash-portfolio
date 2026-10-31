import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

export const profile = require("./profile.json");
export const aiLabs = require("./ai-labs.json");
export const projects = [
  require("./projects/ai-document-assistant.json"),
  require("./projects/food-delivery-time-prediction.json"),
  require("./projects/medikeeps.json"),
  require("./projects/newshub.json"),
  require("./projects/predictive-maintenance-platform.json"),
  require("./projects/school-management-system.json"),
  require("./projects/wumpus-game-ai.json"),
];
