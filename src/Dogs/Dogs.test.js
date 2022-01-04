import { render } from '@testing-library/react';
import DogList from '../DogList/DogList';
import { MemoryRouter } from 'react-router-dom';

test('renders the DogList component', () => {
  const container = render(
    <MemoryRouter>
      <DogList
        dog={{
          id: 3,
          name: 'Althea',
          breed: 'German Short-haired Pointer',
          image: 'https://placedog.net/500?id=10',
        }}
      />
    </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});
