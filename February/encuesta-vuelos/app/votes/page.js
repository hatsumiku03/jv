// app/success/page.js
'use client';

import { useEffect, useState } from 'react';

export default function SuccessPage() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const successMessage = localStorage.getItem('msg');
        if (successMessage) {
            setMessage(successMessage);
            localStorage.removeItem('msg'); 
        }
    }, []);

    return (
        <>
            <div className='flex justify-center mt-2'>
                {message && <h2 className='text-5xl text-green-500 mt-2 bg-black/70 w-fit p-1 rounded-md'>{message}</h2>}
            </div>

        <div className='flex justify-center mt-6'>
            <div className="relative overflow-x-auto">
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
                        <tr className="border-b bg-gray-800 border-gray-700">
                            <td scope="row" className="px-6 py-4">
                                Apple MacBook Pro 17"
                            </td>
                            <td class="px-6 py-4">
                                Silver
                            </td>
                            <td class="px-6 py-4">
                                Laptop
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </>
    );
}