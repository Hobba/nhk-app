import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Home from "./pages/Home/Home";

test('renders learn react link', () => {
  render(<Home />);
  const linkElement = screen.getByText(/willkommen/i);
  expect(linkElement).toBeInTheDocument();
});
