const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');
const helmet = require('helmet');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(helmet()); // Adicione o Helmet para ajudar a definir cabeçalhos de segurança

// Configure CSP para permitir recursos externos, como fontes do Google
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", 'https://fonts.googleapis.com'],
      fontSrc: ["'self'", 'https://fonts.gstatic.com'],
    },
  })
);

app.use(bodyParser.json());

// Adicionando uma rota GET para a raiz
app.get('/', (req, res) => {
  res.send('Servidor rodando');
});

// Rota POST para salvar os dados de compra
app.post('/purchase', (req, res) => {
  const { nomeCompleto, cpf, gmail, telefone, cidade, estado } = req.body;
  console.log('Recebido:', req.body); // Log para depuração
  const stmt = db.prepare('INSERT INTO purchases (nomeCompleto, cpf, gmail, telefone, cidade, estado) VALUES (?, ?, ?, ?, ?, ?)');
  stmt.run(nomeCompleto, cpf, gmail, telefone, cidade, estado, function(err) {
    if (err) {
      console.error('Erro ao salvar no banco de dados:', err);
      return res.status(500).json({ error: err.message });
    }
    console.log('Dados salvos com sucesso. ID:', this.lastID);
    res.status(201).json({ id: this.lastID });
  });
  stmt.finalize();
});

// Iniciando o servidor
app.listen(port, () => {
  console.log('Server running at http://localhost:3001/');
});