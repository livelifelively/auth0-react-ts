module.exports = {
  "rootDir": "..",
  "coverageDirectory": "<rootDir>/coverage/",
  "roots": [
    "<rootDir>/src/"
  ],
  setupTestFrameworkScriptFile: '<rootDir>/test/setup-tests.ts',
  "moduleNameMapper": {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|scss|less)$": "<rootDir>/__mocks__/styleMock.js"
  },
  "moduleFileExtensions": ["ts", "tsx", "js", "jsx"],
  "transform": {
    "^.+\\.(ts|tsx)$": "<rootDir>/config/jest.preprocessor.js"
  },
  "transformIgnorePatterns": [
    "/node_modules/"
  ],
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  "moduleDirectories": [
    "node_modules"
  ],
  "globals": {
    "DEVELOPMENT": false,
    "FAKE_SERVER": false
  },
  testURL: "http://localhost:8080/"
};
