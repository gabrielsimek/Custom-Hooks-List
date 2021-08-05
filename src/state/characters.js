import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCharacters, fetchCharacter } from '../services/rickAndMortyApi.js';

const useCharacters = (page) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // setLoading(true);
    fetchCharacters(page)
      .then(characters => setCharacters(characters))
      .finally(() => setLoading(false));
  }, [page]);
  
  return [characters, loading];
};

const useCharacter = () => {
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);
  // const {params} = useParams();
  // console.log(params);
  const { id } = useParams();
  useEffect(() => {
    fetchCharacter(id)
      .then(setCharacter)
      .finally(() => setLoading(false));
  }, []);

  return [character, loading];
};

export { useCharacters, useCharacter };
