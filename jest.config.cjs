/** @type {import('jest').Config} */
module.exports = {
    testEnvironment: 'node', // для puppeteer-теста подойдёт node
    // Явно укажем трансформации для TS и JS:
    transform: {
        '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: 'tsconfig.jest.json' }],
        '^.+\\.(js|jsx)$': 'babel-jest',
    },
    transformIgnorePatterns: ['/node_modules/'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
