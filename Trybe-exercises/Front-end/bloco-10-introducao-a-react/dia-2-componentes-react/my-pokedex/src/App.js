import GeraCartaPokemon from './GeraCartaPokemon';
import React from 'react';
import pokemons from './data';
import './App.css';


function App() {
  return (
    <div className="Pokemons">
      {pokemons.map((pokemon) => <GeraCartaPokemon objPokemon = {pokemon} key={pokemon.name} />)}
    </div>
  );
}

export default App;
