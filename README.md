# Projeto de Venda de Carros

## Visão Geral

Este é um projeto de aplicação web para facilitar a compra de carros seminovos e usados. Os usuários podem pesquisar, filtrar e visualizar carros disponíveis para compra e preencher um formulário de compra para iniciar o processo de aquisição.

## Funcionalidades

- *Pesquisa de Carros*: Pesquise carros por marca ou modelo.
- *Filtros Avançados*: Filtre carros por categoria, preço, quilometragem, ano, marca e tipo de câmbio.
- *Visualização de Detalhes*: Veja detalhes completos de cada carro.
- *Formulário de Compra*: Preencha um formulário com suas informações pessoais para comprar um carro.
- *Armazenamento de Dados*: As informações de compra são armazenadas em um banco de dados SQLite.

## Tecnologias Utilizadas

### Frontend
- React.js
- CSS

### Backend
- Node.js
- Express.js
- SQLite

## Estrutura do Projeto
car-sales-project/
├── backend/
│ ├── db.js
│ ├── server.js
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── assets/
│ │ │ ├── header-image.png
│ │ │ ├── footer-image.png
│ │ ├── components/
│ │ │ ├── Header.js
│ │ │ ├── SearchBar.js
│ │ │ ├── Filters.js
│ │ │ ├── CarList.js
│ │ │ ├── PurchaseForm.js
│ │ ├── App.js
│ │ ├── App.css
│ ├── package.json

## Configuração do Ambiente

### 1. Clonar o Repositório

```bash
git clone https://github.com/seu-usuario/car-sales-project.git
cd car-sales-project

cd backend
npm install

cd ../frontend
npm install

cd backend
node server.js

+------------------+          +------------------+
|      Carro       |          |     Compra       |
+------------------+          +------------------+
| id               |          | id               |
| categoria        |          | nomeCompleto     |
| marca            |          | cpf              |
| modelo           |          | email            |
| km               |          | telefone         |
| ano              |          | cidade           |
| cambio           |          | estado           |
| preco            |          | carroId          |
| localizacao      |          +------------------+
| imagem           |
+------------------+

Carro
------
id (PK)
categoria
marca
modelo
km
ano
cambio
preco
localizacao
imagem

Compra
------
id (PK)
nomeCompleto
cpf
email
telefone
cidade
estado
carroId (FK)

-- Criação da tabela Carro
CREATE TABLE Carro (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    categoria TEXT NOT NULL,
    marca TEXT NOT NULL,
    modelo TEXT NOT NULL,
    km INTEGER NOT NULL,
    ano INTEGER NOT NULL,
    cambio TEXT NOT NULL,
    preco INTEGER NOT NULL,
    localizacao TEXT NOT NULL,
    imagem TEXT NOT NULL
);

-- Criação da tabela Compra
CREATE TABLE Compra (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nomeCompleto TEXT NOT NULL,
    cpf TEXT NOT NULL,
    email TEXT NOT NULL,
    telefone TEXT NOT NULL,
    cidade TEXT NOT NULL,
    estado TEXT NOT NULL,
    carroId INTEGER,
    FOREIGN KEY (carroId) REFERENCES Carro(id)
);

Metodologia de Desenvolvimento
Histórias do Usuário
História do Usuário 1: Pesquisa e Filtro de Carros

Como um usuário interessado em comprar um carro,
Quero poder pesquisar e filtrar carros por marca, modelo, categoria, preço, quilometragem, ano e tipo de câmbio,
Para encontrar rapidamente os carros que atendem às minhas necessidades específicas.
História do Usuário 2: Visualização de Detalhes do Carro

Como um usuário interessado em comprar um carro,
Quero visualizar detalhes completos de um carro específico,
Para tomar uma decisão informada sobre a compra.
História do Usuário 3: Formulário de Compra

Como um usuário decidido a comprar um carro,
Quero preencher um formulário com minhas informações pessoais,
Para iniciar o processo de compra do carro selecionado.
Critérios de Aceitação
Critérios de Aceitação para História do Usuário 1: Pesquisa e Filtro de Carros

O sistema deve permitir a pesquisa de carros por marca ou modelo.
O sistema deve fornecer filtros para categoria, preço, quilometragem, ano e tipo de câmbio.
Os resultados devem ser atualizados em tempo real conforme os filtros são aplicados.
Critérios de Aceitação para História do Usuário 2: Visualização de Detalhes do Carro

O sistema deve exibir uma lista de carros com imagem, marca, modelo, categoria, quilometragem, ano, tipo de câmbio, preço e localização.
O sistema deve permitir que o usuário clique em um carro para visualizar detalhes completos.
A página de detalhes deve exibir todas as informações mencionadas acima.
Critérios de Aceitação para História do Usuário 3: Formulário de Compra

O sistema deve exibir um formulário de compra com campos para nome completo, CPF, e-mail, telefone, cidade e estado.
O sistema deve pré-preencher o campo do carro selecionado com os detalhes do carro escolhido.
O sistema deve validar todos os campos obrigatórios antes de permitir o envio do formulário.
O sistema deve confirmar o envio bem-sucedido das informações ao usuário.
Cenários de Uso
Cenário de Uso 1: Pesquisa e Filtro de Carros

Atores: Usuário
Pré-condições: O usuário está na página principal da aplicação.
Passos:
O usuário digita uma marca ou modelo na barra de pesquisa.
O sistema exibe resultados correspondentes.
O usuário aplica filtros adicionais (categoria, preço, quilometragem, ano, câmbio).
O sistema atualiza a lista de carros com base nos filtros aplicados.
Pós-condições: O usuário vê uma lista filtrada de carros que atendem aos critérios especificados.
Cenário de Uso 2: Visualização de Detalhes do Carro

Atores: Usuário
Pré-condições: O usuário visualizou a lista de carros filtrados.
Passos:
O usuário clica em um carro específico na lista.
O sistema redireciona o usuário para a página de detalhes do carro.
O sistema exibe todas as informações detalhadas do carro selecionado.
Pós-condições: O usuário visualiza detalhes completos do carro e pode decidir se deseja iniciar o processo de compra.
Cenário de Uso 3: Formulário de Compra

Atores: Usuário
Pré-condições: O usuário está na página de detalhes do carro e decidiu comprá-lo.
Passos:
O usuário clica no botão "Comprar".
O sistema redireciona o usuário para o formulário de compra.
O usuário preenche o formulário com suas informações pessoais.
O usuário clica no botão "Enviar Dados".
O sistema valida os campos obrigatórios e exibe mensagens de erro, se necessário.
O sistema salva as informações no banco de dados e exibe uma mensagem de confirmação ao usuário.
Pós-condições: As informações do usuário são armazenadas no banco de dados e o processo de compra é iniciado.
Contribuição
Para contribuir com este projeto, siga estas etapas:

Faça um fork do projeto.
Crie uma branch para sua feature (git checkout -b feature/fooBar).
Commit suas alterações (git commit -am 'Add some fooBar').
Faça um push para a branch (git push origin feature/fooBar).
Crie um novo Pull Request.

### Conclusão

Este README.md cobre todos os aspectos importantes do projeto, desde a visão geral e funcionalidades até a configuração do ambiente, execução, e detalhes dos modelos de dados e metodologia de desenvolvimento. Adicione esse arquivo ao seu repositório GitHub para fornecer aos colaboradores e usuários todas as informações necessárias sobre o projeto.