"use client"
import { createContext, useReducer, useEffect } from "react";

const initialState = {
  caughtPokemons: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case "initialize":
        return {
          ...state,
          caughtPokemons: action.payload
        };
    
    case "catch":
      return {
        ...state,
        caughtPokemons: [...state.caughtPokemons, action.payload]
      };
      
    case "release":
        return {
            ...state,
            caughtPokemons: state.caughtPokemons.filter(pokemon => pokemon.name !== action.payload.name)
        };
    default:
      return state;
  }
};

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <PokemonContext.Provider value={{ state, dispatch }}>
      {children}
    </PokemonContext.Provider>
  );
};