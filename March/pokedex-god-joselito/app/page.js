"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [pokemonData, setPokemonData] = useState([]);
  const [search, setSearch] = useState("");
  const [trueSearch, setTrueSearch] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if(trueSearch){
      fetch(`https://pokeapi.co/api/v2/pokemon/${trueSearch}`)
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
  }, [trueSearch]);

  function searchPokemon(){
    setTrueSearch(search);
  }

  return (
    <div>
        <div>
          <h1>Pokedex de Joselito</h1>
        </div>

        <div className="flex mt-5 gap-2 flex-col w-fit">
          <input className="border-2" type="text" placeholder="Buscar Pokemon" onChange={(e) => setSearch(e.target.value)} />
          <button className="cursor-pointer hover:bg-gray-400" onClick={searchPokemon}>Buscar</button>
        </div>

        {pokemonData && pokemonData.name}
        {pokemonData && 
        pokemonData.sprites && 
        <Image src={pokemonData.sprites.front_default} alt="pokamion" width={40} height={40}/>}

        {error && <p>{error}</p>}

    </div>
  );
}
