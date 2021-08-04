const fetchCharacters = () => {
  return fetch('https://rickandmortyapi.com/api/character')
    .then(characters => characters.json());
};

export { fetchCharacters };
