export default {
  collectCoverage: true,
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  globals: {
    "ts-jest": {
      useESM: true,
    },
  },
  preset: "ts-jest/presets/default-esm",
  testEnvironment: "jsdom",
  testURL: "http://localhost/",
  transform: {},
};
