const createBanks = `
    CREATE TABLE IF NOT EXISTS
        banks (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name VARCHAR,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
`;

module.exports = createBanks;
