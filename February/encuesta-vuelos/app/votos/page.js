// app/success/page.js
'use client';

import { useEffect, useState } from 'react';

export default function SuccessPage() {
    const [message, setMessage] = useState('');
    const [votes, setVotes] = useState([]);

    useEffect(() => {
        // Obtener el mensaje de éxito
        const successMessage = localStorage.getItem('msg');
        if (successMessage) {
            setMessage(successMessage);
            localStorage.removeItem('msg');
        }

        // Obtener los votos desde la API
        const fetchVotes = async () => {
                const response = await fetch('../api/dataVotes');
                    const data = await response.json();
                    setVotes(data);
        };

        fetchVotes();
    }, []);

    return (
        <>
        <div className='flex justify-center font-bold text-6xl bg-slate-500 p-3 mt-3 border-4 border-black'>
            <h1>Página para ver los votos que se han hecho ;3</h1>
        </div>
            <div className='flex justify-center mt-2'>
                {message && <h2 className='text-5xl text-green-500 mt-2 bg-black/70 w-fit p-1 rounded-md'>{message}</h2>}
            </div>

            <div className='flex justify-center mt-6'>
                <div className="relative overflow-x-auto w-full">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-400">
                        <thead className="text-xs uppercase bg-gray-700 text-gray-200">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Destino 1
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Destino 2
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Destino 3
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {votes.map((vote, index) => (
                                <tr key={index} className="border-b bg-gray-800 border-gray-700">
                                    <td scope="row" className="px-6 py-4">
                                        {vote.destiny1}
                                    </td>
                                    <td className="px-6 py-4">
                                        {vote.destiny2}
                                    </td>
                                    <td className="px-6 py-4">
                                        {vote.destiny3}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}