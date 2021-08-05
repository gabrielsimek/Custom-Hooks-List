import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CharacterDetails from './CharacterDetails';
import { MemoryRouter } from 'react-router-dom';
describe('App CharacterDetails', () => {
  afterEach(() => cleanup());
  it('renders App', () => {
    const { asFragment } = render(<MemoryRouter>
      <CharacterDetails /></MemoryRouter>);
    expect(asFragment()).toMatchSnapshot();
  });
});
