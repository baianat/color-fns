module.exports = {
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/index.*.ts',
  ],
  moduleFileExtensions: [
    'ts',
    'js'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  testMatch: [
    '**/test/**/*.js'
  ],
  transform: {
    '\\.(ts)$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest'
  }
};
