const env = process.env;

const config = {
  db: { /* do not put password or any sensitive info here, done only for demo */
    host: env.DB_HOST || 'otto.db.elephantsql.com',
    port: env.DB_PORT || '5432',
    user: env.DB_USER || 'cklijfef',
    password: env.DB_PASSWORD || 'V1qidES5k3DSJICDRgXtyT8qeu2SPCZp',
    database: env.DB_NAME || 'cklijfef',
    // this object will be passed to the TLSSocket constructor
    ssl: {
      rejectUnauthorized: false,
      //ca: fs.readFileSync('/path/to/server-certificates/root.crt').toString(),
      //key: fs.readFileSync('/path/to/client-key/postgresql.key').toString(),
      //cert: fs.readFileSync('/path/to/client-certificates/postgresql.crt').toString(),
    },
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};

module.exports = config;
