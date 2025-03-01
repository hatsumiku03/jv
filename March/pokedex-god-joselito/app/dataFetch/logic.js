"use client";
import { useEffect, useState} from "react";


const useFetch = (pokemonName) => {
    const [error, setError] = useState("");
    const [pokemonData, setPokemonData] = useState([]);

    useEffect(() => {
      if(pokemonName){
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
          .then((response) => {
            if(!response.ok){
              console.log("Pokemon no encontrado");
            }
            return response.json()
          })
          .then((data) => {
            setPokemonData(data);
            setError("");
          })
          .catch((error) => {
            setPokemonData(null);
            setError("Pon bien el nombre del pokemon");
          });
      }
    }, [pokemonName]);

    return {pokemonData, error};
}

export default useFetch;