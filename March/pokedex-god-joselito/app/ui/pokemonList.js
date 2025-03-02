import { useContext, useEffect } from "react";
import { PokemonContext } from "../context/sharePokemonForCatch";
import { v4 as uuidv4 } from 'uuid';

const PokemonList = () => {
  const { state, dispatch } = useContext(PokemonContext);
  
  return (
    <div className="flex text-center mt-5 flex-col">
      <h2>Lista de Pokémon Capturados</h2>
      <ul>
        {state.PC.map((pokemon) => (
          <li key={pokemon.idUnique}>
          <span>{pokemon.name}</span>
          <button onClick={() => dispatch({ type: "release", payload: pokemon })}>Liberar</button></li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonList;