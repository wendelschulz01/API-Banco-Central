const sqliteConnection = require('../');
const createUsers = require('./createUsers.js');
const createBanks = require('./createBanks');
const createAccounts = require('./createAccounts');
const createTransactions = require('./createTransactions');

async function migrationsRun() {
  try {
    const db = await sqliteConnection();

    // Ativa o suporte a chaves estrangeiras
    await db.exec('PRAGMA foreign_keys = ON');

    // Executa as migrações uma por uma para facilitar o diagnóstico de erros
    await db.exec(createUsers);
    await db.exec(createBanks);
    await db.exec(createAccounts);
    await db.exec(createTransactions);

    console.log("Migrations executadas com sucesso!");
  } catch (error) {
    console.error("Erro ao rodar migrations:", error);
  }
}

module.exports = migrationsRun;
