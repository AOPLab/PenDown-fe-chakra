/* eslint-disable no-undef */
import { avatarSrc, statFormatting } from './Helper';

test('avatarSrc Function Test', () => {
  const name = 'TEST_NAME';
  const expectedValue = 'https://avatars.dicebear.com/api/open-peeps/:TEST_NAME.svg?background=%23';
  expect(avatarSrc(name)).toMatch(expectedValue);
});

test.each([
  [1000, '1,000'],
  [15000, '15K'],
  [60, '60'],
  [1832000, '1.8M'],
  [3491, '3,491'],
])('statFormatting: num %d will has result %s', (num, expected) => {
  expect(statFormatting(num)).toBe(expected);
});
