import Database from 'better-sqlite3';

const db = new Database('./app/destination.sqlite');

export function validateDestinationId(id) {
    const stmt = db.prepare('SELECT id FROM destinations WHERE id = ?');
    const result = stmt.get(id);
    return result !== undefined;
}

export default db;