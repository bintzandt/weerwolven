import * as React from 'react';
import { render } from '@testing-library/react';
import { CreateGame } from './CreateGame';

test('create game link on home', () => {
  const { getByText } = render(<CreateGame />);
  const linkElement = getByText(/Create game/i);
  expect(linkElement).toBeInTheDocument();
});
