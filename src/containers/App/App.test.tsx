import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '.';

/* 
  I have nothing to unit test - mostly util functions are good candidates to test
*/
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
