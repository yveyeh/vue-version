module.exports = {
    testRegex: 'spec.ts$',
    moduleFileExtensions: ['js', 'ts'],
    transform: {
      '^.+\\.js$': 'babel-jest',
      '^.+\\.ts$': 'ts-jest'
    },
    coverageDirectory: './coverage/'
}