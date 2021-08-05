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
    
        
      <li key={character.id}>
        <Link to={`/${character.id}`}>
          <CharacterItem {...character} />      
        </Link>
      </li>
     
    );
  });

  if(loading) return <h1>Loading...</h1>;
  return (
    <>  <Paging page={page} characterLength={characters.length}
      onClick={handlePageClick}/>
    <ul>{characterItems}</ul>
    </>
  );
  
};

export default CharacterList;
