const createAccounts = `
    CREATE TABLE IF NOT EXISTS
        accounts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            bank_id INTEGER NOT NULL,
            owner VARCHAR,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            balance REAL DEFAULT 0.0,
            FOREIGN KEY (user_id) REFERENCES users(id),
            FOREIGN KEY (bank_id) REFERENCES banks(id)
        );
`;

module.exports = createAccounts;
