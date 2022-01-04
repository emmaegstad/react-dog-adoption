import { render } from '@testing-library/react';
import DogDetail from '../DogDetail/DogDetail';
import { MemoryRouter } from 'react-router-dom';

test('renders the DogDetail component', () => {
  const container = render(
    <MemoryRouter>
      <DogDetail
        dog={[
          {
            name: 'Althea',
            age: 1,
            breed: 'German Short-haired Pointer',
            image: 'https://placedog.net/500?id=10',
            bio: 'High energy pooch! Would do well in an active family with another dog to keep her company.',
          },
        ]}
      />
    </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});
