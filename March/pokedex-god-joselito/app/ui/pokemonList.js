import { useContext, useEffect } from "react";
import { PokemonContext } from "../context/sharePokemonForCatch";

const PokemonList = () => {
  const { state, dispatch } = useContext(PokemonContext);
  
  return (
    <div className="flex text-center mt-5 flex-col">
      <h2>Lista de Pokémon Capturados</h2>
      <ul>
        {state.caughtPokemons.map((pokemon, index) => (
          <li key={index}>
          <span>{pokemon.name}</span>
          <button onClick={() => dispatch({ type: "release", payload: pokemon })}>Liberar</button></li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonList;