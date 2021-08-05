import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Rick And Morty</h1>
      <NavLink to="/">List</NavLink>
    </header>
  );
};

export default Header;
