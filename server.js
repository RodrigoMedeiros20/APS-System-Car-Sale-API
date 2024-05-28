const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db'); // Certifique-se de que db.js está configurado corretamente para PostgreSQL
const helmet = require('helmet');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(helmet());

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
app.post('/purchase', async (req, res) => {
  const { nomeCompleto, cpf, gmail, telefone, cidade, estado, carroSelecionado } = req.body;
  console.log('Recebido:', req.body); // Log para depuração

  try {
    const result = await db`
      INSERT INTO purchases (nomeCompleto, cpf, gmail, telefone, cidade, estado, carroSelecionado)
      VALUES (${nomeCompleto}, ${cpf}, ${gmail}, ${telefone}, ${cidade}, ${estado}, ${carroSelecionado})
      RETURNING id`;
    console.log('Dados salvos com sucesso. ID:', result[0].id);
    res.status(201).json({ id: result[0].id });
  } catch (err) {
    console.error('Erro ao salvar no banco de dados:', err);
    res.status(500).json({ error: err.message });
  }
});

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});