import {useContext, useReducer, useRef } from 'react';

const Catch = ({ pokemon }) => {

    const catchRef = useRef(null);
    const { state, dispatch } = useContext(PokemonContext);

    const handleCatch = () => {
        if (catchRef.current) {
            console.log(`Capturaste a ${pokemon.name}`);
        }
    };

    return (
      <div>
        <button 
          className="cursor-pointer bg-gray-300 hover:bg-gray-400" 
          onClick={handleCatch} 
          ref={catchRef}
        >
          Atrapar
        </button>
      </div>
    );
}

export default Catch;