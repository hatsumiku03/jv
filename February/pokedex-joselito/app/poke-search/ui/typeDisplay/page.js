import React from 'react';

const getTypeStyles = (type) => {
    // Acá por hacer la pavada me pase el array de los tipos acá para hacerles display 'to bonicos
    switch (type) {
        case 'fire':
            return 'bg-[#E72324] text-white';
        case 'water':
            return 'bg-[#2481EF] text-white';
        case 'grass':
            return 'bg-[#3DA224] text-white';
        case 'electric':
            return 'bg-yellow-200 text-yellow-800';
        case 'normal':
            return 'bg-slate-200 text-neutral-800';
        case 'dark':
            return 'bg-[#4D3C3A] text-rose-400';
        case 'fairy':
            return 'bg-[#EF70EF] text-white';
        case 'fighting':
            return 'bg-[#FF8100] text-white';
        case 'ground':
            return 'bg-[#92501B] text-white';
        case 'poison':
            return 'bg-[#923FCC] text-white';
        case 'flying':
            return 'bg-[#82BAEF] text-white';
        case 'rock':
            return 'bg-[#B0AA82] text-white';
        case 'ice':
            return 'bg-[#3DD9FF] text-white';
        case 'ghost':
            return 'bg-[#703F70] text-white';
        case 'dragon':
            return 'bg-[#4F60E2] text-white';
        case 'bug':
            return 'bg-[#92A212] text-white';
        case 'steel':
            return 'bg-[#60A2B9] text-white';
        case 'psychic':
            return 'bg-pink-400 text-white';
    }
};

const TypeDisplay = ({pokemon}) => {
    return (
        <div className='flex gap-1'>
            {pokemon && pokemon.map((typeGordet, index) => (
                <span key={index}  className={`px-2 py-1 rounded-full text-xs font-semibold ${getTypeStyles(typeGordet.type.name)}`}>
                  {typeGordet.type.name}
                </span>
              ))}
        </div>
    )
}

export default TypeDisplay;