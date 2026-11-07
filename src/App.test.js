import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the home page with the beers on tap', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/good times/i);
  expect(screen.getByRole('heading', { name: /on tap now/i })).toBeInTheDocument();
  expect(screen.getAllByAltText(/OKTOBER/).length).toBeGreaterThan(0);
});
