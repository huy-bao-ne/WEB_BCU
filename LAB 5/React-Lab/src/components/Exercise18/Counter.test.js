import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('initial count is 0', () => {
  render(<Counter />);
  expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
});

test('increment button increases count', () => {
  render(<Counter />);
  fireEvent.click(screen.getByText(/Increment/i));
  expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();
});

test('decrement button decreases count', () => {
  render(<Counter />);
  fireEvent.click(screen.getByText(/Decrement/i));
  expect(screen.getByText(/Count: -1/i)).toBeInTheDocument();
});

test('reset button sets count to 0', () => {
  render(<Counter />);
  fireEvent.click(screen.getByText(/Increment/i));
  fireEvent.click(screen.getByText(/Reset/i));
  expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
});
