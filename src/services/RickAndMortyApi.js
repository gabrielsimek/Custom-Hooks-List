const fetchCharacters = (page) => {
  return fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
    .then(characters => characters.json())
    .then(({ results }) => results);
};

const fetchCharacter = (id) => {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(character => character.json());
};

export { fetchCharacters, fetchCharacter };
