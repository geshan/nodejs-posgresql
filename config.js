require('dotenv').config();

const config = {
  db: { /* do not put password or any sensitive info here, done only for demo */
    host: process.env.DB_HOST || 'otto.db.elephantsql.com',
    port: process.env.DB_PORT || '5432',
    user: process.env.DB_USER || 'cklijfef',
    password: process.env.DB_PASSWORD || 'V1qidES5k3DSJICDRgXtyT8qeu2SPCZp',
    database: process.env.DB_NAME || 'cklijfef',
  },
  listPerPage: process.env.LIST_PER_PAGE || 10,
};

module.exports = config;
