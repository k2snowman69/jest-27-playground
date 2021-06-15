module.exports = {
  collectCoverage: true,
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testURL: "http://localhost/",
  transform: {
    "^.+\\.js$": "babel-jest",
  },
  transformIgnorePatterns: [],
};
