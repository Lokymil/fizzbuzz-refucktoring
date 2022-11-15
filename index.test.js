const { fizzBuzz } = require('./index');

describe('fizzbuzz function', () => {
  test.each([
    { input: 1, expected: '1' },
    { input: 2, expected: '2' },
    { input: 3, expected: 'fizz' },
    { input: 5, expected: 'buzz' },
    { input: 6, expected: 'fizz' },
    { input: 7, expected: '7' },
    { input: 10, expected: 'buzz' },
    { input: 15, expected: 'fizzbuzz' },
    { input: 30, expected: 'fizzbuzz' },
  ])('should return $expected when given $input', ({ input, expected }) => {
    expect(fizzBuzz(input)).toBe(expected);
  });
});
