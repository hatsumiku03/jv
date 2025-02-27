import React from "react";
import Image from "next/image";

const CatchDisplay = ({pokemonCapturaos}) => {
    return (
        <div className="text-center mt-6">
            <h2 className="text-xl font-bold">Lista de pokemon capturados</h2>
            {pokemonCapturaos.map((pokemon, index) => (
                <div key={index} className="flex justify-center items-center">
                    {pokemon.name}
                    <Image src={pokemon.sprites.front_default} width={50} height={50} alt="Pokemon"></Image>
                </div>
            ))}
            
        </div>
    )
}

export default CatchDisplay;