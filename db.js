const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('database.db', (err) => {
  if (err) {
    console.error('Erro ao abrir banco de dados:', err.message);
  } else {
    console.log('Conectado ao banco de dados SQLite.');
    db.run(`CREATE TABLE IF NOT EXISTS purchases (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nomeCompleto TEXT,
      cpf TEXT,
      gmail TEXT,
      telefone TEXT,
      cidade TEXT,
      estado TEXT,
      carroSelecionado TEXT
    )`, (err) => {
      if (err) {
        console.error('Erro ao criar tabela:', err.message);
      } else {
        console.log('Tabela purchases criada ou já existe.');
      }
    });
  }
});

module.exports = db;
