"use client";
import React, { useState } from "react";
import TrainerDisplay from "@/app/trainer-display/page";
import PokeSearch from "./poke-search/page";

export default function Home() {
    // º Variables para el display de los trainers
    // @ Srry Juanjo, lo tenía en un componente a parte
    // @ Pero me dio pereza hacer el parse del background xD
      const [showPopup, setShowPopup] = useState(true);
      const [selectedTrainer, setSelectedTrainer] = useState(null);
      const [bg, setBg] = useState(null);
      const trainers = ['Chico', 'Chica'];
      const bgColor = ['bg-blue-300', 'bg-rose-200'];
  
      const handleTrainerSelection = (trainer) => {
          setSelectedTrainer(trainer);
          setBg(bgColor[trainers.indexOf(trainer)]);
          setShowPopup(false);
      };
      
  return (
    <body className={bg}>
        <div className="flex flex-col items-center mt-5 font-salt">
            <h2 className="font-bold text-5xl mb-4">Pokedex del Joselito</h2>
            
            {/* Popup para elegir si eres chico o chica */}
            <div>
                {showPopup && (
                    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="justify-center items-center flex flex-col">
                        <img src="oak.png" width={100} height={100}></img>
                        <div className="bg-white p-5 rounded-lg text-center">
                            <h2>¿Qué eres?</h2>
                            {trainers.map(trainer => (
                                <button
                                    key={trainer}
                                    className="m-[10px]"
                                    onClick={() => handleTrainerSelection(trainer)}
                                >
                                    {trainer}
                                </button>
                            ))}
                            <div className="flex">
                              <img src="trainers/red.png" width={50} height={50}></img>
                              <img src="trainers/leaf.png" width={50} height={50} className="ml-4"></img>
                            </div>
                        </div>
                    </div>
                </div>
                )}
                <TrainerDisplay trainer={selectedTrainer}/>
            </div>
            {/* Fin del popup para elegir si eres chico o chica */}

            <TrainerDisplay />
            
            <PokeSearch />
            
        </div>
</body>
  );
}
