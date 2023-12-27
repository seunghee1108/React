import React from 'react';

const PokemonList = () => {

  const pokemon = ["피카츄", "라이츄", "파이리", "꼬부기"];

  const updatePokemon = pokemon.map((PokemonName) => {
    if (pokemonName === "파이리") {
      return "버터풀";
    }
    return PokemonName;
  });
  
  const pokemonElements = updatePokemon.map((pokemonName, index) => (
    <div key={index}>
      <p>{pokemonName}</p>
    </div>
));
  return <div>{pokemonElements}</div>;
};

export default PokemonList;
