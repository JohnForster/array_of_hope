import { findMethod, workOutType, workOutArray } from './model';

test('it returns .join when required for desiredOutput', () => {
  expect(findMethod([1, 2, 3], '1,2,3')).toContain('.join');
});

test("it returns 'no method found' if it is unable to find a method", () => {
  expect(findMethod([1, 2, 3], [2342, 534534, 65464654])).toContain('No method found');
});

test('it returns .pop when appropriate', () => {
  expect(findMethod([1, 2, 3], 3)).toContain('.pop');
});

test('it returns .reverse when appropriate', () => {
  expect(findMethod([1, 2, 3], [3, 2, 1])).toContain('.reverse');
});

test('it returns .shift when appropriate', () => {
  expect(findMethod([1, 2, 3], 1)).toContain('.shift');
});

test('it returns .slice when appropriate', () => {
  expect(findMethod([1, 2, 3], [1, 2, 3])).toContain('.slice');
});

test('it returns .toString when appropriate', () => {
  expect(findMethod([1, 2, 3], '1,2,3')).toContain('.toString');
});

test('workOutType turns a single quoted string into a string', () => {
  expect(workOutType("'This is a string'")).toBe('This is a string');
});

test('workOutType turns a double quoted string into a string', () => {
  expect(workOutType('"This is a string"')).toBe('This is a string');
});

test('workOutType turns an integer string into an integer', () => {
  expect(workOutType('2')).toBe(2);
});

test('workOutArray fully parses an array string of integers', () => {
  expect(JSON.stringify(workOutArray('[1,2,3]'))).toBe(JSON.stringify([1, 2, 3]));
});

test('workOutArray fully parses a double quoted array string of integers', () => {
  expect(JSON.stringify(workOutArray('"[1,2,3]"'))).toBe(JSON.stringify([1, 2, 3]));
});
