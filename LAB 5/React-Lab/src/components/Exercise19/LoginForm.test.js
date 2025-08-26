import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from './LoginForm';

test('renders form with empty inputs', () => {
  render(<LoginForm />);
  expect(screen.getByLabelText(/email/i)).toHaveValue('');
  expect(screen.getByLabelText(/password/i)).toHaveValue('');
});

test('shows error for invalid email', () => {
  render(<LoginForm />);
  fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'invalid' } });
  fireEvent.change(screen.getByLabelText(/password/i), { target: { value: '123456' } });
  fireEvent.click(screen.getByText(/login/i));
  expect(screen.getByText(/email is invalid/i)).toBeInTheDocument();
});

test('shows error for short password', () => {
  render(<LoginForm />);
  fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'test@email.com' } });
  fireEvent.change(screen.getByLabelText(/password/i), { target: { value: '123' } });
  fireEvent.click(screen.getByText(/login/i));
  expect(screen.getByText(/password must be at least 6/i)).toBeInTheDocument();
});

test('disables submit button when invalid', () => {
  render(<LoginForm />);
  expect(screen.getByText(/login/i)).toBeDisabled();
});

test('shows success message on valid submit', () => {
  render(<LoginForm />);
  fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'test@email.com' } });
  fireEvent.change(screen.getByLabelText(/password/i), { target: { value: '123456' } });
  fireEvent.click(screen.getByText(/login/i));
  expect(screen.getByText(/login successful/i)).toBeInTheDocument();
});
