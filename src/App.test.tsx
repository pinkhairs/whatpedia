import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  const { baseElement } = render(<App />);
  expect(baseElement).toBeDefined();
});

test('words output as text input is populated', () => {
  // arrange
  const input = 'word';
  // act
  const result = getWords(input);
  // assert
  expect(result).toBeTruthy();
});

test('show a message when no results', () => {
  // arrange
  const input = 'blahdeeblahgoo';
  // act
  
  // assert
});

test('word is copied to clipboard when selected', () => {
  // arrange
  // act
  // assert
});

test('word list clears when input is empty', () => {
  // arrange
  // act
  // assert
});