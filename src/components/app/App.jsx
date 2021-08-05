import React from 'react';
import CharacterList from '../characters/CharacterList';
import CharacterDetails from '../details/CharacterDetails';
import { Switch, Route } from 'react-router-dom';
import Header from '../header/Header';


export default function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path="/" component={CharacterList} />
        <Route exact path="/:id" component={CharacterDetails}/>
      </Switch>
    </>
  ); 
}
