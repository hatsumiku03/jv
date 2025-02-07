"use client"
import { useState } from 'react';

const Carousel = ({ destiny }) => {
    const [index, setIndex] = useState(0);

const nextDestiny = () => {
    setIndex((prevIndex) => (prevIndex + 1) % destiny.length);
};

const prevDestiny = () => {
    setIndex((prevIndex) => (prevIndex - 1 + destiny.length) % destiny.length);
};

return (
    <div className="carousel">
    <div className="carousel-image">
        <img src={destiny[index].image} alt={destiny[index].name} />
    </div>
    <div className="carousel-name">
        <h3>{destiny[index].name}</h3>
    </div>
    <div className="carousel-buttons">
        <button onClick={prevDestiny}>Anterior</button>
        <button onClick={nextDestiny}>Siguiente</button>
    </div>
    </div>
    );
};

export default Carousel;