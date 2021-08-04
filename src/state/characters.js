import React, { useState, useEffect } from 'react';
import { fetchCharacters } from '../services/fetchCharacters.js';

const useCharacters = () => {
  const [characters, setCharacters] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCharacters()
      .then(setCharacters)
      .finally(() => setLoading(false));
  });

  return [characters, loading];
};

export { useCharacters };
