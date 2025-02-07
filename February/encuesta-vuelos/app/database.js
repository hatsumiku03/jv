import Database from 'better-sqlite3';

const db = new Database('destinations.db');

// Crear la tabla si no existe
db.exec(`
    CREATE TABLE IF NOT EXISTS destinations (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        image TEXT NOT NULL
    )
`);

export default db;