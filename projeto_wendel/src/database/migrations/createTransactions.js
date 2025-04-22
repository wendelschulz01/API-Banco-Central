const createTransactions = `
    CREATE TABLE IF NOT EXISTS
        transactions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            bank_id INTEGER NOT NULL,
            account_id INTEGER NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            amount REAL NOT NULL,
            type VARCHAR,
            FOREIGN KEY (bank_id) REFERENCES banks(id),
            FOREIGN KEY (account_id) REFERENCES accounts(id)
        );
`;

module.exports = createTransactions;
