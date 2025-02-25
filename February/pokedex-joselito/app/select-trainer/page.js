"use client";
import React, { useState } from "react";
import TrainerDisplay from "@/app/trainer-display/page";

export default function SelectTrainer() {
    const [showPopup, setShowPopup] = useState(true);
    const [selectedTrainer, setSelectedTrainer] = useState(null);
    const trainers = ['Chico', 'Chica'];

    const handleTrainerSelection = (trainer) => {
        setSelectedTrainer(trainer);
        setShowPopup(false);
    };

    return (
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
            <TrainerDisplay trainer={selectedTrainer} />
        </div>
    );
}