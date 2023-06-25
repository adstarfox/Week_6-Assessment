const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  test('Return an array', () => {
    expect(typeof shuffle(['a','b','c','d'])).toBe('array')
  })

  test('Return Length', () => {
    expect(shuffle(['a','b','c','d']).length).toBe(4)
  })
});
