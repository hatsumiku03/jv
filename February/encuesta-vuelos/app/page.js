import Image from "next/image";
import Carousel from "./elements/carousel";
import db from "./database"

export default async function Home() {
  const destinations = db.prepare('SELECT * FROM destinations').all();
  return (
    <div>
        <div className="text-center mt-5">
          <h2 className="font-bold text-4xl">Sorteo de donde iremos de viaje :D</h2>
          <p className="text-lg mt-2">Esto es una mini encuesta para ver donde iremos de viaje este fin de curso.
            <br/>Elegir tres opciones, la más votada es la que se hará, así que ante la duda, podéis dejar varias opciones de donde queréis ir ^^</p>
            <Carousel destiny={destinations} />
        </div>
    </div>
  );
}
