"use client"
import { useState } from 'react';
import Button from './button';

const Carousel = ({ destiny }) => {
    const [index, setIndex] = useState(0);

const nextDestiny = () => {
    setIndex((prevIndex) => (prevIndex + 1) % destiny.length);
};

const prevDestiny = () => {
    setIndex((prevIndex) => (prevIndex - 1 + destiny.length) % destiny.length);
};

return (
    <div className="mt-4">
        <div className="flex justify-center">
            <img className='w-96 h-80 border-1 border-black rounded-md' src={destiny[index].image} alt={destiny[index].name} />
        </div>
        <div className="font-bold text-4xl mt-1">
            <h3>{destiny[index].name}</h3>
        </div>

        <div className="text-xl mt-4">
            <h3>Precio:</h3>
        </div>
            <p>{destiny[index].price}</p>

        <div className="mt-4">
            <button className='bg-black hover:bg-red-700 transition-colors p-1 rounded-md text-white' onClick={prevDestiny}>Anterior</button>
            <button className='bg-black hover:bg-red-700 transition-colors p-1 rounded-md text-white ml-5' onClick={nextDestiny}>Siguiente</button>
        </div>
    </div>
    );
};

export default Carousel;