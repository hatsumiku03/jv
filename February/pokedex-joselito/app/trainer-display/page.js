import React from "react";

export default function TrainerDisplay({ trainer }) {
    if (!trainer) return null;

    const trainerGifs = {
        'Chico': 'trainers/Sprites/RedWalking.gif',
        'Chica': 'trainers/Sprites/LeafWalking.gif'
    };

    return (
        <div className="fixed top-0 right-0 m-4">
            <img src={trainerGifs[trainer]} alt={trainer} width={50} height={50} />
        </div>
    );
}
