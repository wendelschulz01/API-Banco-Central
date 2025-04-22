const express = require('express');
const usersController = require('../controllers/usersController');
const banksController = require('../controllers/banksController');
const accountsController = require('../controllers/accountsController');
const transactionsController = require('../controllers/transactionsController');

const routes = express.Router();

// Instituições
routes.post('/instituicoes', banksController.create);

// Usuários
routes.post('/usuarios', usersController.create);

// Contas
routes.post('/usuarios/:id/contas', accountsController.create);

// Transações
routes.post('/usuarios/:id/transacoes', transactionsController.create);

// Saldos
routes.get('/usuarios/:id/saldo', usersController.getSaldo);

// Extrato
routes.get('/usuarios/:id/extrato', usersController.getExtrato);

module.exports = routes;
