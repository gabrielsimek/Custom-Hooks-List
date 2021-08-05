import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CharacterItem from './CharacterItem';
import { MemoryRouter } from 'react-router-dom';
describe('App CharacterItem', () => {
  afterEach(() => cleanup());
  it('renders App', () => {
    const { asFragment } = render(<MemoryRouter>
      <CharacterItem /></MemoryRouter>);
    expect(asFragment()).toMatchSnapshot();
  });
});
