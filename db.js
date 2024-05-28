const { Client } = require('pg');

// Configurações de conexão com o PostgreSQL
const client = new Client({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
  ssl: 'require',
  connection: {
    options: `project=${process.env.ENDPOINT_ID}`,
  },
});

// Conectando ao banco de dados PostgreSQL
client.connect((err) => {
  if (err) {
    console.error('Erro ao abrir banco de dados:', err.message);
  } else {
    console.log('Conectado ao banco de dados PostgreSQL.');
    
    // Criando a tabela purchases se não existir
    const query = `
      CREATE TABLE IF NOT EXISTS purchases (
        id SERIAL PRIMARY KEY,
        nomeCompleto TEXT,
        cpf TEXT,
        gmail TEXT,
        telefone TEXT,
        cidade TEXT,
        estado TEXT,
        carroSelecionado TEXT
      );
    `;

    client.query(query, (err) => {
      if (err) {
        console.error('Erro ao criar tabela:', err.message);
      } else {
        console.log('Tabela purchases criada ou já existe.');
      }
    });
  }
});

module.exports = client;