const nextJest = require('next/jest')

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
        'components/(.*)$': '<rootDir>/components/$1',
        'pages/(.*)$': '<rootDir>/pages/$1',
    },
    testEnvironment: 'jest-environment-jsdom',
    globals: {
        'ts-jest': {
            'tsconfig': 'tsconfig.spec.json'
        }
    },
    setupFilesAfterEnv: ["./jest.setup.ts"],
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)