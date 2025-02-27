"use client"
import React, { useState, useEffect } from "react";
import Image  from "next/image";
import TypeDisplay from "./ui/typeDisplay/page";
import CatchAllEm from "./ui/catch/page";
import CatchDisplay from "./ui/catchDisplay/page";

export default function PokeSearch() {
    const [pokemon, setPokemon] = useState(null);
    const [search, setSearch] = useState("");
    const [catchedMons, setCatchedMons] = useState([]);

    useEffect(() =>{
      if(search){
        fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
          .then(response => response.json())
          .then(data => setPokemon(data))
          .catch(gerror => setPokemon(null));
      }
      else{
        setSearch("");
        setPokemon(null);
      }
    })

    // Para setear el evento de captura a la hora de mandarlo por el form
    function eventCapturica(){
      setCatchedMons(catchedMons =>[...catchedMons, pokemon]);
    }

    return (
      <div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-xs">
          
          {/* Imagen que se muestra del pokemon */}
          <div className="flex justify-center items-center h-48 bg-gray-100 border-2">
            {pokemon && <Image src={pokemon.sprites.front_default} width={150} height={150} alt="Pokemon"></Image>}
          </div>
          
          <div className="p-4">
            {/* Nombre y descripción */}
            <div className="flex justify-center items-center">
              <h2 className="text-xl font-bold text-gray-900">{pokemon && pokemon.name}</h2>
            </div>

            <div className="mt-2 flex justify-between items-center">
              {/* Número, peso y  tipo */}
              <span className="text-gray-900 font-bold">{pokemon && "#"+pokemon.id}</span>
              {/* Acá divido el peso entre 10 porque los borrachos dan el peso en hectogramos, la medida normal de los pokemon es en kilogramos xD */}
              <span className="text-gray-900 font-bold">{pokemon && "Peso: "+pokemon.weight/10+" kg"}</span>
              {pokemon && <TypeDisplay pokemon={pokemon && pokemon.types}/>}
            </div>
              {/* Buscador de digimamones */}
              <div className="flex">
                <input type="text" onChange={(e) => setSearch(e.target.value)} className="border-2 p-1 m-2"/>
              </div>

              {/* Display y form para capturar a los bichos q busques */}
                {/* ! Arreglar */}
              <div>
                {pokemon && <CatchAllEm pokemon={pokemon.name} capturando={eventCapturica}/>}
              </div>

          </div>
            
        </div>

        {/* Lista de digimamones capturados */}
          {/* ! Hay que arreglar esto, no funciona, me dice que el map no existe xD */}
        <CatchDisplay pokemonCapturaos={catchedMons}/>

      </div>
    )
}