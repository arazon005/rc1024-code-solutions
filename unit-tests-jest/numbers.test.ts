import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

describe('evenNumbers', () => {
  it('returns the even numbers', () => {
    const numbers = [1, 4, 5, 10, 0];
    const result = evenNumbers(numbers);
    expect(result).toEqual([4, 10, 0]);
  });
});

describe('toDollars', () => {
  it('converts a number to dollars and cents', () => {
    const number = 24;
    const number2 = 24.5;
    const number3 = 24.25;
    const result = toDollars(number);
    const result2 = toDollars(number2);
    const result3 = toDollars(number3);
    expect(result).toEqual('$24.00');
    expect(result2).toEqual('$24.50');
    expect(result3).toEqual('$24.25');
  });
});

describe('divideBy', () => {
  it('divides an array of numbers by a number', () => {
    const numbers = [1, 3, 24, 27];
    const result = divideBy(numbers, 3);
    expect(result).toEqual([1 / 3, 1, 8, 9]);
    expect(numbers).toEqual([1, 3, 24, 27]);
  });
});

describe('multiplyBy', () => {
  it('multiplies the value of the key if it is a number', () => {
    const record1 = { jacks: 25 };
    const record2 = { reps: 'N/A' };
    const result1 = multiplyBy(record1, 2);
    const result2 = multiplyBy(record2, 2);
    expect(result1.jacks).toEqual(50);
    expect(result2.reps).toEqual('N/A');
  });
});
