module.exports = {
  roots: ['<rootDir>/src'],
  setupFiles: [
    '<rootDir>/node_modules/regenerator-runtime/runtime',
    '<rootDir>/setup-tests.js'
  ],
  testPathIgnorePatterns: ['mock-data', 'coverage'],
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ['**/*.js'],
  coveragePathIgnorePatterns: ['__tests__'],
  coverageDirectory: '<rootDir>/src/__tests__/coverage'
};
