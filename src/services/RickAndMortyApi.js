const fetchCharacters = () => {
  
  return fetch('https://rickandmortyapi.com/api/character')
    .then(characters => characters.json())
    .then(({ results }) => results);
};

const fetchCharacter = (id) => {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(character => character.json());
};

export { fetchCharacters, fetchCharacter };
