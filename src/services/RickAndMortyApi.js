const fetchCharacters = () => {
  console.log('I get here');
  return fetch('https://rickandmortyapi.com/api/character')
    .then(characters => characters.json())
    .then(({ results }) => results);
};

export { fetchCharacters };
