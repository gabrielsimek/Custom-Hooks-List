import React from 'react';
import { useCharacter } from '../../state/characters';

const CharacterDetails = () => {
  const [character, loading] = useCharacter();

  if(loading) return <h1>Loading...</h1>;
  return ( 
    <article>
      <h2>Name: {character.name}</h2>
      <img src={character.image} alt={character.name}/>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
    </article>
  );
};

export default CharacterDetails;
