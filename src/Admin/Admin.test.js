import { render, screen } from '@testing-library/react';
import Admin from './Admin';

test('should display form', () => {
  render(<Admin />);
  const linkElement = screen.getByText('Enter Dog Details');
  expect(linkElement).toBeInTheDocument();
});
