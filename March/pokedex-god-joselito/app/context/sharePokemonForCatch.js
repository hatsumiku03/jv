    const reducer = (state, action) => {
    switch(action.type){
        case "catch":
            return {
                ...state,
                pokemons: [...state.pokemons, action.payload]
            };
        case 'release':
            return {
                ...state,
                pokemons: state.pokemons.filter(pokemon => pokemon !== action.payload)
            };
        default:
            return state;
    }
}