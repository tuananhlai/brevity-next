// Jest doesn't work well with ESM imports.
// eslint-disable-next-line @typescript-eslint/no-require-imports
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

/** @type{import('jest').Config} */
const config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  collectCoverageFrom: [
    "src/components/**/*.{js,jsx,ts,tsx}",
    "!**/*.stories.{js,jsx,ts,tsx}",
    "!**/index.{js,jsx,ts,tsx}",
  ],
  coverageReporters: ["json-summary"],
};

// Fix issue with using ES6-only libraries with Jest and Next.js
// https://github.com/vercel/next.js/issues/40183
module.exports = async () => ({
  ...(await createJestConfig(config)()),
  transformIgnorePatterns: ["node_modules/(?!ky)/"],
});
