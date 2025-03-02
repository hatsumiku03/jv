"use client";
import Image from "next/image";
import { useState, useRef, useContext } from "react";
import useFetch from "./dataFetch/logic";
import Catch from "./ui/catch";
import PokemonList from "./ui/pokemonList";
import { PokemonProvider, PokemonContext } from "./context/sharePokemonForCatch";

export default function Home() {
  const search = useRef(null);
  const [trueSearch, setTrueSearch] = useState("");
  const { pokemonData, error } = useFetch(trueSearch);
  
  function searchPokemon(){
    setTrueSearch(search.current.value);
  }
  
  const {state,dispatch} = useContext(PokemonContext);
  

    // Preparar toda la parafernalia con el useContext para pasarle a catch y pokemonList cosicas
      return(
        <div className="flex flex-col items-center justify-center mt-5">
            <div> 
              <h1>Pokedex de Joselito</h1>
            </div>
    
            <div className="flex mt-5 gap-2 flex-col w-fit">
              {/* Navegación */}
              <input className="border-2 bg-white" type="text" placeholder="Buscar Pokemon" ref={search} />
              <button className="cursor-pointer hover:bg-gray-400" onClick={searchPokemon}>Buscar</button>
            
            
            <div className="mt-5 gap-2 flex-col w-fit text-center">
              {/* Nombre */}
              {pokemonData && 
              trueSearch !== "" &&
              pokemonData.name}
    
              {/* Sprite del pokemon */}
              {pokemonData &&
              pokemonData.sprites &&
              trueSearch !== "" &&
              <Image src={pokemonData.sprites.front_default} alt="digimon" width={140} height={140}/>}
    
              {/* Peso */}
              {pokemonData &&
              pokemonData.weight && 
              trueSearch !== "" &&
              pokemonData.weight/10 +" kg"}
              
              {/* Tipos */}
              {pokemonData && 
              pokemonData.types && 
              trueSearch !== "" &&
              pokemonData.types.map((type, index) => <p key={index}>{type.type.name}</p>)}
    
              {/* Decirle al usuario q se equivoco al escribir */}
              {error && <p>{error}</p>}
    
              {/* Botoncico con la lógica de atrapar */}
                <div>
                  {pokemonData &&
                  trueSearch !== "" &&
                  !error &&
                  <Catch pokemon={pokemonData}/>}
                </div>
    
            </div>
            <div className="mt-5">{pokemonData && <PokemonList/>}</div>
          </div>
    
    
        </div>
      );
    };
