export function fetchCharacters(page) {
  return fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
    .then(characters => characters.json())
    .then(({ results }) => results);
}

export function fetchCharacter(id){
  return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(character => character.json());
}

