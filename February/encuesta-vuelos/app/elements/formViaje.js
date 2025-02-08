

export default async function FormViaje( { data }){
    

        return (
            <form>
            <div>
                <div><label htmlFor="destiny1">Primer destino</label></div>
                <select className="p-1 rounded-md" name="destiny1">
                {data.map((viaje) => (
                        <option value={viaje.id}>{viaje.name}</option>
                ))}
                </select>

            </div>

            <div>
                <div><label htmlFor="destiny2">Segundo destino</label></div>
                <select className="p-1 rounded-md" name="destiny2">
                {data.map((viaje) => (
                        <option value={viaje.id}>{viaje.name}</option>
                ))}
                </select>
            </div>

            <div>
                <div><label htmlFor="destiny3">Tercer destino</label></div>
                <select className="p-1 rounded-md" name="destiny3">
                {data.map((viaje) => (
                        <option value={viaje.id}>{viaje.name}</option>
                ))}
                </select>
            </div>

            <button className='bg-black hover:bg-red-700 transition-colors p-1 rounded-md text-white mt-2'>Enviar</button>
        </form>
        );
    
}