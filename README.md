📡 API Banco Central
API RESTful que simula funcionalidades de um Mini Banco Central, permitindo o gerenciamento de contas, bancos, transações e usuários. Este projeto tem fins educativos no contexto de Open Finance.

📁 Estrutura de Pastas
pgsql
Copiar
Editar
projeto_wendel/
├── node_modules/
├── src/
│   ├── controllers/
│   │   ├── accountsController.js
│   │   ├── banksController.js
│   │   ├── transactionsController.js
│   │   └── usersController.js
│   ├── database/
│   │   ├── migrations/
│   │   │   ├── createAccounts.js
│   │   │   ├── createBanks.js
│   │   │   ├── createTransactions.js
│   │   │   ├── createUsers.js
│   │   │   └── index.js
│   │   ├── database.db
│   │   └── index.js
│   └── routes/
│       └── index.js
├── .gitignore
├── package.json
├── package-lock.json

🚀 Tecnologias Utilizadas
Node.js

Express.js

SQLite

sqlite3

⚙️ Como Rodar o Projeto
Clone o repositório: git clone https://github.com/wendelschulz01/API-Banco-Central.git
Acesse a pasta do projeto: cd projeto_wendel
Instale as dependências: npm install
Inicie o servidor em modo desenvolvimento: npm run dev
O servidor será iniciado com node --watch a partir de src/index.js.

📌 Endpoints (Rotas)
As rotas da API estão organizadas por recursos principais: instituições, usuários, contas e transações.

🏦 Instituições Financeiras
POST /instituicoes
Cria uma nova instituição financeira (banco).

👤 Usuários
POST /usuarios
Cria um novo usuário.

💳 Contas
POST /usuarios/:id/contas
Cria uma nova conta bancária associada a um usuário específico (:id representa o ID do usuário).

💸 Transações
POST /usuarios/:id/transacoes
Cria uma nova transação para um usuário específico.

📊 Saldo
GET /usuarios/:id/saldo
Retorna o saldo atual de um usuário com base nas transações realizadas.

📈 Extrato
GET /usuarios/:id/extrato
Retorna o extrato completo (histórico de transações) de um usuário.

🛠️ Scripts
json
Copiar
Editar
"scripts": {
  "dev": "node --watch src/index.js"
}
Use npm run dev para iniciar o servidor com hot-reload.
