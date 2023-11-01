import nextJest from 'next/jest'
import type { Config } from 'jest'

const createJestConfig = nextJest({
  dir: './'
})

const customJestConfig: Config = {
  rootDir: '../', 
  setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.tsx'],
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^.+\\.(svg)$': '<rootDir>/tests/__mocks__/svgr-mock.tsx'
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.{stories,test}.{ts,tsx}',
    '!src/@types/**/*.{ts,tsx}'
  ],
  testPathIgnorePatterns: [
    'node_modules',
    '\\.cache',
    '.next',
    'coverage',
    '\\.test.jsx'
  ]
}

async function jestConfig() {
  const nextJestConfig = await createJestConfig(customJestConfig)()
  nextJestConfig.transformIgnorePatterns[0] = '/node_modules/(?!uuid|remark)/'
  return nextJestConfig
}

export default jestConfig
