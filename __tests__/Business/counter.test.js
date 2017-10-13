import { increment, decrement } from '../../src/Business';

describe('counter', () => {
  it('increments 1 to 0', () => {
    expect(increment(0)).toBe(1);
  });

  it('limits max counter to 10', () => {
    expect(increment(11)).toBe(10);
  });

  it('decrements 1 to 10', () => {
    expect(decrement(10)).toBe(9);
  });
  
  it('limits minimum counter to 0', () => {
    expect(decrement(0)).toBe(0);
  });
});