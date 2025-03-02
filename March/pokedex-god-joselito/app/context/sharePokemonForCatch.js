"use client"
import { createContext, useReducer, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  PC: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case "initialize":
        return {
          ...state,
          PC: action.payload
        };
    
    case "catch":
      return {
        ...state,
        PC: [...state.PC, {...action.payload, idUnique: uuidv4()}]
      };
      
    case "release":
        return {
            ...state,
            PC: state.PC.filter(pokemon => pokemon.idUnique !== action.payload.idUnique)
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