module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.ts$": "ts-jest", // Use ts-jest to transform TypeScript files
  },
  extensionsToTreatAsEsm: [".ts"], // Treat .ts files as ES modules
  globals: {
    "ts-jest": {
      useESM: true, // Enable ES module support
    },
  },
};
