const sqliteConnection = require('../database');

module.exports = {
  async create(req, res) {
    const { name } = req.body;
    const db = await sqliteConnection();

    await db.run('INSERT INTO banks (name) VALUES (?)', [name]);
    return res.status(201).json({ message: 'Instituição criada com sucesso.' });
  }
};
