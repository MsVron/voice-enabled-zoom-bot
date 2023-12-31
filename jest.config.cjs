module.exports = {
        // This file configures Jest, a testing framework for JavaScript.

        // The root of source code
        roots: ["<rootDir>"],

        // Jest transformations
        transform: {
                "^.+\\.js?$": "babel-jest"
        },

        // Test spec file resolution pattern
        // Matches parent folder `__tests__` and filename
        // should contain `test` or `spec`.
        testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$",

        // Module file extensions for importing
        moduleFileExtensions: ["js", "json", "node"],
};