import { useState, useEffect } from 'react';
import { 
  fetchCharacters, 
  fetchCharacter } from '../services/rickAndMortyApi.js';
import { useParams } from 'react-router-dom';
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

const useCharacter = () => {
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    fetchCharacter(id)
      .then(setCharacter)
      .finally(() => setLoading(false));
  }, []);

  return [character, loading];

};

export { useCharacters, useCharacter };
