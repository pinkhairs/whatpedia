import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { getReverseWords } from './helpers/Dictionary';

test('words output as text input is populated', () => {
  // arrange
  const input = 'word';
  // act
  const result = getReverseWords(input);
  // assert
  expect(result.length).toBeGreaterThanOrEqual(1);
});

test('show a message when no results', () => {
  // arrange
  const input = 'blahblahblahgoobledeegook';
  const expected = 'No results found';
  // act
  const result = getReverseWords(input);
  // assert
  expect(result).toBe(expected);
});

test('word list clears when input is empty', () => {
  // arrange
  const input = '';
  // act
  const result = getReverseWords(input);
  // assert
  expect(result).toBe([]);
});