const sqliteConnection = require('../database');

module.exports = {
  async create(req, res) {
    const { name } = req.body;
    const db = await sqliteConnection();

    const result = await db.run('INSERT INTO users (name) VALUES (?)', [name]);
    return res.status(201).json({ id: result.lastID, name });
  }, 

  async getSaldo(req, res) {
    const { id } = req.params;
    const { instituicao } = req.query;
    const db = await sqliteConnection();

    let query = `
      SELECT SUM(a.balance) as saldo_total
      FROM accounts a
      INNER JOIN banks b ON a.bank_id = b.id
      WHERE a.user_id = ?
    `;
    const params = [id];

    if (instituicao) {
      query += ' AND b.name = ?';
      params.push(instituicao);
    }

    const result = await db.get(query, params);
    return res.json({ saldo: result.saldo_total ?? 0 });
  },

  async getExtrato(req, res) {
    const { id } = req.params;
    const { instituicao } = req.query;
    const db = await sqliteConnection();

    let query = `
      SELECT t.*, b.name as banco, a.id as conta_id
      FROM transactions t
      INNER JOIN accounts a ON t.account_id = a.id
      INNER JOIN banks b ON a.bank_id = b.id
      WHERE a.user_id = ?
    `;
    const params = [id];

    if (instituicao) {
      query += ' AND b.name = ?';
      params.push(instituicao);
    }

    query += ' ORDER BY t.created_at DESC';

    const result = await db.all(query, params);
    return res.json(result);
  }
};
