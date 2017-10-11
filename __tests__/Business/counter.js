import { increment, decrement } from '../../src/Business';

test('increments 1 to 0', () => expect(increment(0)).toBe(1));
test('limits max counter to 10', () => expect(increment(11)).toBe(10));
test('decrements 1 to 10', () => expect(decrement(10)).toBe(9));
test('limits minimum counter to 0', () => expect(decrement(0)).toBe(0));