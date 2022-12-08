module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    testMatch: ["**/__tests__/**/*.ts?(x)", "**/?(*.)+(test).ts?(x)"],
    transform: {
        "^.+\\.(js|ts)$": "ts-jest",
    },
    transformIgnorePatterns: [
        "/node_modules/(?![./lib/axios.js]).+\\.js$",
        "/node_modules/(?![./lib/axios.js]).+\\.ts$",
        "/node_modules/(?![./lib/axios.js]).+\\.tsx$",
    ],
}