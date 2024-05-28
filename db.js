require('dotenv').config();
const postgres = require('postgres');

// Configurações de conexão com o PostgreSQL usando variáveis de ambiente
const sql = postgres({
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
  ssl: 'require',
  connection: {
    options: `project=${process.env.ENDPOINT_ID}`
  },
});

// Criando a tabela purchases se não existir
(async () => {
  try {
    await sql`
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
    console.log('Tabela purchases criada ou já existe.');
  } catch (err) {
    console.error('Erro ao criar tabela:', err.message);
  }
})();

module.exports = sql;