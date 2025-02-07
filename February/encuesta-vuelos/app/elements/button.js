import React from 'react';

export default function Button({children}){

    return (
    <>
        <button className="text-white bg-slate-600 p-1 rounded-md hover:bg-red-800 transition-colors">{children}</button>
    </>
    );
}