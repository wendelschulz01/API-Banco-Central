const sqliteConnection = require('../database');

module.exports = {
  async create(req, res) {
    const { id: user_id } = req.params;
    const { banco_id, saldo_inicial = 0 } = req.body;
    const db = await sqliteConnection();

    const result = await db.run(
      'INSERT INTO accounts (user_id, bank_id, balance) VALUES (?, ?, ?)',
      [user_id, banco_id, saldo_inicial]
    );

    return res.status(201).json({ id: result.lastID, user_id, banco_id, saldo: saldo_inicial });
  }
};
