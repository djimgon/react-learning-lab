import { getFormattedWord } from '../../getFormattedWord.js';

test('capitalizes the first letter of a word', () => {
  expect(getFormattedWord('hello')).toBe('Hello');
});
