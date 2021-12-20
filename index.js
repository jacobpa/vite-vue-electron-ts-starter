/* eslint-disable @typescript-eslint/no-var-requires */
require("ts-node").register({
  project: "./tsconfig.electron.json",
});
require("./src/main/index.ts");
