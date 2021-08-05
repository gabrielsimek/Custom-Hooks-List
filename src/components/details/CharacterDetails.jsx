import React from 'react';
import { useCharacter } from '../../state/characters';

const CharacterDetails = () => {
  const [character, loading] = useCharacter();

  if(loading) return <h1>Loading...</h1>;
  return ( 
    <article>
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name}/>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Origin: {character.origin.name}</p>
      <p>Location: {character.location.name}</p>
      <p>Type: {character.type ? character.type : 'No Type'}</p>
    </article>
  );
};

export default CharacterDetails;
