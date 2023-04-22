const sum = require('./sum');
const pot = require('./pot');
const mult = require('./mult');

test('sums two numbers', () => {
  expect(sum(1, 2)).toBe(3);
});

test('pot two numbers', () => {
    expect(pot(2, 3)).toBe(8);
});

test('mult two numbers', () => {
    expect(mult(5, 2)).toBe(10);
});