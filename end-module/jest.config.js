export default {
  collectCoverage: true,
  preset: "ts-jest/presets/default-esm",
  testURL: "http://localhost/",
  transform: {},
  globals: {
    "ts-jest": {
      useESM: true,
    },
  },
  extensionsToTreatAsEsm: [".ts"],
};
