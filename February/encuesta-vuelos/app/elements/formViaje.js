'use client';

import { useState } from 'react';

export default function FormViaje({ data }) {
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const destiny1 = formData.get('destiny1');
        const destiny2 = formData.get('destiny2');
        const destiny3 = formData.get('destiny3');

        if (destiny1 === destiny2 || destiny1 === destiny3 || destiny2 === destiny3) {
            setError('No se permiten destinos duplicados, srry :/');
            setSuccess(null);
            return;
        }

        try {
            const response = await fetch('/api/vote', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ destiny1, destiny2, destiny3 }),
            });

            const result = await response.json();

            if (response.ok) {
                window.location.href = result.redirect;
            }
        } catch (error) {
            setError('Error al enviar el voto QwQ');
            setSuccess(null);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <div><label htmlFor="destiny1">Primer destino</label></div>
                <select className="p-1 rounded-md" name="destiny1" required>
                    {data.map((viaje) => (
                        <option key={viaje.id} value={viaje.id}>{viaje.name}</option>
                    ))}
                </select>
            </div>

            <div>
                <div><label htmlFor="destiny2">Segundo destino</label></div>
                <select className="p-1 rounded-md" name="destiny2" required>
                    {data.map((viaje) => (
                        <option key={viaje.id} value={viaje.id}>{viaje.name}</option>
                    ))}
                </select>
            </div>

            <div>
                <div><label htmlFor="destiny3">Tercer destino</label></div>
                <select className="p-1 rounded-md" name="destiny3" required>
                    {data.map((viaje) => (
                        <option key={viaje.id} value={viaje.id}>{viaje.name}</option>
                    ))}
                </select>
            </div>

            <div className='flex justify-center'>
                {error && <div className="text-red-500 mt-2 bg-black/70 w-fit p-1 rounded-md">{error}</div>}
                {success && <div className="text-green-500 mt-2 bg-black/70 w-fit p-1 rounded-md">{success}</div>}
            </div>

            <button className='bg-black hover:bg-red-700 transition-colors p-1 rounded-md text-white mt-2' type="submit">
                Enviar
            </button>
        </form>
    );
}