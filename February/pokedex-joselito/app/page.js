import Image from "next/image";
import SelectTrainer from "@/app/select-trainer/page";
import TrainerDisplay from "@/app/trainer-display/page";

export default function Home() {
  return (
    <div className="flex flex-col items-center mt-5 font-salt">
        <h2 className="font-bold text-5xl">Pokedex del Joselito</h2>
        <div>
            <SelectTrainer />
        </div>
        <TrainerDisplay />
    </div>
  );
}
