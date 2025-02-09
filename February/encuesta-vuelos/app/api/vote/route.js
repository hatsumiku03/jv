// app/api/vote/route.js
import db from '../../../app/database';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { destiny1, destiny2, destiny3 } = await request.json();

        // Insertar en la tabla votes
        const stmt = db.prepare('INSERT INTO votes (vote1_id, vote2_id, vote3_id) VALUES (?, ?, ?)');
        stmt.run(destiny1, destiny2, destiny3);

        return NextResponse.json({ redirect: '/votos' }, { status: 200 });
    } catch (error) {
        return new Response(null, {status: 500});
    }
}