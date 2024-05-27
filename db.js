const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('database.db'); // Altere para um arquivo persistente

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS purchases (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nomeCompleto TEXT,
    cpf TEXT,
    gmail TEXT,
    telefone TEXT,
    cidade TEXT,
    estado TEXT,
    carroSelecionado TEXT
  )`);
});

module.exports = db;