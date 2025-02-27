import React from "react";
import ButtonContent from "./buttonContent";

// Lógica de captura del bicho en el formularuio
const CatchAllEm = ({pokemon,capturando}) => {
    const capturador = (e ) => {
        e.preventDefault();
            if(capturando){
                capturando(pokemon);
            }
        
    }

    // Tremendo formulario chamuco
    return (
        <div className="flex justify-center items-center">
            <form onSubmit={capturador}>
                <input type="hidden" value={pokemon}></input>
                <button type="submit" className="mt-3 group p-5 cursor-pointer relative text-xl font-normal border-0 flex items-center justify-center bg-transparent text-violet-500 h-auto w-[170px] overflow-hidden transition-all duration-100">
                    <ButtonContent/>
                </button>
            </form>
        </div>
    )
}

export default CatchAllEm;