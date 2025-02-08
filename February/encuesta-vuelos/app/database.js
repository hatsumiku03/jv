import Database from 'better-sqlite3';

const db = new Database('./app/destination.sqlite');

export default db;