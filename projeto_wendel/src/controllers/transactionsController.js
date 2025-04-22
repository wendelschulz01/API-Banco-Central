const sqliteConnection = require('../database');

module.exports = {
  async create(req, res) {
    const { id: user_id } = req.params;
    const { conta_id, tipo, valor } = req.body;
    const db = await sqliteConnection();

    const account = await db.get('SELECT * FROM accounts WHERE id = ? AND user_id = ?', [conta_id, user_id]);
    if (!account) return res.status(404).json({ message: 'Conta não encontrada para este usuário.' });

    const novoSaldo = tipo === 'credito'
      ? account.balance + valor
      : account.balance - valor;

    await db.run('INSERT INTO transactions (bank_id, account_id, type, amount) VALUES (?, ?, ?, ?)', [
      account.bank_id,
      conta_id,
      tipo,
      valor
    ]);

    await db.run('UPDATE accounts SET balance = ? WHERE id = ?', [novoSaldo, conta_id]);

    return res.status(201).json({ message: 'Transação registrada com sucesso.' });
  }
};
