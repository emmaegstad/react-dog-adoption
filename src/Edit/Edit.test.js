import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Edit from './Edit';

test('should render form', () => {
  render(
    <MemoryRouter>
      <Edit />
    </MemoryRouter>
  );
  const element = screen.getByText('Enter Dog Details');
  expect(element).toBeInTheDocument();
});
