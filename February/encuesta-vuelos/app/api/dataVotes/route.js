// app/api/votes/route.js
import db from '../../../app/database';

export async function GET() {
    try {
        // Consultar la tabla votes y unir con destinations para obtener los nombres
        const votes = db.prepare(`
            SELECT 
                d1.name AS destiny1,
                d2.name AS destiny2,
                d3.name AS destiny3
            FROM votes
            JOIN destinations AS d1 ON votes.vote1_id = d1.id
            JOIN destinations AS d2 ON votes.vote2_id = d2.id
            JOIN destinations AS d3 ON votes.vote3_id = d3.id
        `).all();

        // Devolver los votos como respuesta
        return new Response(JSON.stringify(votes), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Error al obtener los votos' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}