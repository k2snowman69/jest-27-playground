module.exports = {
  collectCoverage: true,
  preset: "ts-jest",
  testURL: "http://localhost/",
  transform: {
    "^.+\\.js$": "babel-jest",
  },
  transformIgnorePatterns: [],
};
