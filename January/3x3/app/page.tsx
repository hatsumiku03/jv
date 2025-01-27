import Image from "next/image";
import Game from "@/src/3";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen py-4">
      <h1 className="text-7xl font-bold">3 en raya</h1>
      <p>By Joselito Alba Arrufat</p>
      <Game className="py-12" />
    </div>
  );
}
