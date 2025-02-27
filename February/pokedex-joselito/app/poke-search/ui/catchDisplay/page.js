import React from "react";

const CatchDisplay = ({pokemonCapturaos}) => {
    return (
        // ! Hay que arreglar esto, no funciona, me dice que el map no existe xD
        <div className="text-center mt-6">
            <h2 className="text-xl font-bold">Lista de pokemon capturados</h2>
            {pokemonCapturaos.map((pokemon, index) => (
                <span key={index}>hola</span>
            ))}
            
        </div>
    )
}

export default CatchDisplay;