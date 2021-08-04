import { useState, useEffect } from 'react';
import { fetchCharacters } from '../services/rickAndMortyApi.js';

const useCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCharacters()
      .then(characters => setCharacters(characters))
      .finally(() => setLoading(false));
  }, []);

  return [characters, loading];
};

export { useCharacters };
