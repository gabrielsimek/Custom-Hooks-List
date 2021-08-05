import React from 'react';
import CharacterItem from './CharacterItem';
import { useCharacters } from '../../state/characters';
import { Link } from 'react-router-dom';
const CharacterList = () => {
  const [characters, loading] = useCharacters();

  const characterItems = characters.map((character) => {
    return (
      <li key={character.id}>
        <Link to={`/${character.id}`}>
          <CharacterItem {...character} />      
        </Link>
      </li>
    );
  });

  if(loading) return <h1>Loading...</h1>;
  return <ul>{characterItems}</ul>;
  
};

export default CharacterList;
