import React from 'react';
import CharacterItem from './CharacterItem';
import { useCharacters } from '../../state/characters';
import { Link } from 'react-router-dom';
import usePagination from '../../state/pagination';
import Paging from '../paging/Paging';
const CharacterList = () => {
  const [page, handlePageClick] = usePagination();
  const [characters, loading] = useCharacters(page);

  const characterItems = characters.map((character) => {
    return (
      <>
        <Paging page={page} onClick={handlePageClick}/>
        <li key={character.id}>
          <Link to={`/${character.id}`}>
            <CharacterItem {...character} />      
          </Link>
        </li>
      </>
    );
  });

  if(loading) return <h1>Loading...</h1>;
  return <ul>{characterItems}</ul>;
  
};

export default CharacterList;
