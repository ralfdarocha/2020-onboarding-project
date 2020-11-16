const moduleNameMapper = require("tsconfig-paths-jest")(require("./tsconfig.json"))

module.exports = {
    "verbose": true,
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js"
    ],
    "moduleNameMapper": {
      "\\.(css|less|scss|sass)$": "identity-obj-proxy",
      ...moduleNameMapper
    },
    "transform": {
      "\\.(jpg|jpeg|png|gif|svg)$": "jest-url-loader",
      "\\.(ts|tsx)$": "ts-jest"
    },
    "testRegex": "(/__tests__/.*|(\\.|/)(test))\\.[jt]sx?$",
    "setupFilesAfterEnv": [
      "<rootDir>src/setupTests.ts"
    ]
}
