import React from 'react';
import {  render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router-dom';
import CharacterList from '../characters/CharacterList';
import CharacterDetails from '../details/CharacterDetails';
import App from './App';
const response = { results: 
  [...Array(20)].map((_, i) => {
    return  {
      id: i,
      name: `Character${i}`,
      status: `Status${i}`,
      species: `Species${i}`,
      image: `http://image${i}.com`
    };
  }) };  


const server = setupServer(
  rest.get(
    'https://rickandmortyapi.com/api/character',
    (req, res, ctx) => {
      const query = req.url.searchParams;
      query.get('page');
      return res(
        ctx.json(response)
      );
    }),
  rest.get(
    'https://rickandmortyapi.com/api/character/1',
    (req, res, ctx) => {
      return res(
        ctx.json(
          {
            'id': 1,
            'name': 'Rick Sanchez',
            'status': 'Alive',
            'species': 'Human',
            'type': '',
            'gender': 'Male',
            'origin': {
              'name': 'Earth (C-137)',
              'url': 'https://rickandmortyapi.com/api/location/1'
            },
            'location': {
              'name': 'Earth (Replacement Dimension)',
              'url': 'https://rickandmortyapi.com/api/location/20'
            },
            'image': 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
            'episode': [
              'https://rickandmortyapi.com/api/episode/1',
              'https://rickandmortyapi.com/api/episode/2',
              'https://rickandmortyapi.com/api/episode/3',
              'https://rickandmortyapi.com/api/episode/4',
              'https://rickandmortyapi.com/api/episode/5',
              'https://rickandmortyapi.com/api/episode/6',
              'https://rickandmortyapi.com/api/episode/7',
              'https://rickandmortyapi.com/api/episode/8',
              'https://rickandmortyapi.com/api/episode/9',
              'https://rickandmortyapi.com/api/episode/10',
              'https://rickandmortyapi.com/api/episode/11',
              'https://rickandmortyapi.com/api/episode/12',
              'https://rickandmortyapi.com/api/episode/13',
              'https://rickandmortyapi.com/api/episode/14',
              'https://rickandmortyapi.com/api/episode/15',
              'https://rickandmortyapi.com/api/episode/16',
              'https://rickandmortyapi.com/api/episode/17',
              'https://rickandmortyapi.com/api/episode/18',
              'https://rickandmortyapi.com/api/episode/19',
              'https://rickandmortyapi.com/api/episode/20',
              'https://rickandmortyapi.com/api/episode/21',
              'https://rickandmortyapi.com/api/episode/22',
              'https://rickandmortyapi.com/api/episode/23',
              'https://rickandmortyapi.com/api/episode/24',
              'https://rickandmortyapi.com/api/episode/25',
              'https://rickandmortyapi.com/api/episode/26',
              'https://rickandmortyapi.com/api/episode/27',
              'https://rickandmortyapi.com/api/episode/28',
              'https://rickandmortyapi.com/api/episode/29',
              'https://rickandmortyapi.com/api/episode/30',
              'https://rickandmortyapi.com/api/episode/31',
              'https://rickandmortyapi.com/api/episode/32',
              'https://rickandmortyapi.com/api/episode/33',
              'https://rickandmortyapi.com/api/episode/34',
              'https://rickandmortyapi.com/api/episode/35',
              'https://rickandmortyapi.com/api/episode/36',
              'https://rickandmortyapi.com/api/episode/37',
              'https://rickandmortyapi.com/api/episode/38',
              'https://rickandmortyapi.com/api/episode/39',
              'https://rickandmortyapi.com/api/episode/40',
              'https://rickandmortyapi.com/api/episode/41'
            ],
            'url': 'https://rickandmortyapi.com/api/character/1',
            'created': '2017-11-04T18:48:46.250Z'
          }
        )
      );
    })
);
//not nec when only rendering app
// mock useParams b/c it does not work as intended w/ testing
// jest.mock('react-router-dom', () => ({
//   ...jest.requireActual('react-router-dom'), 
//   useParams: () => ({
//     id: 1
//   })
// }));

describe('RickAndMortyCharacters Container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('displays a list of characters', async () => {
    render(
      <MemoryRouter  initialEntries={['/']}>
        <App />
      </MemoryRouter>
    ); 
    screen.getByText('Loading...');
    const ul = await screen.findByRole('list');
    expect(ul.children.length).toEqual(20);
  });

  it('displays a character Detail page', async () => {
    render(
      <MemoryRouter initialEntries={['/1']}>
        <App />
      </MemoryRouter>
    );
    screen.getByText('Loading...');
    await screen.findByText('Rick Sanchez');
    await screen.findByText('Status: Alive');
    await screen.findByText('Species: Human');
    await screen.findByText('Origin: Earth (C-137)');
    await screen.findByText('Location: Earth (Replacement Dimension)');
    await screen.findByText('Type: No Type');
    await screen.findAllByAltText('Rick Sanchez');
  });
});
