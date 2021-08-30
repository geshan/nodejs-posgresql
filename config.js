const env = process.env;

const config = {
  db: { /* do not put password or any sensitive info here, done only for demo */
    host: env.DB_HOST || 'free-tier.gcp-us-central1.cockroachlabs.cloud',
    port: env.DB_PORT || '26257',
    user: env.DB_USER || 'quotes',
    password: env.DB_PASSWORD || 'n5sk@pvjT@HcbKU',
    database: env.DB_NAME || 'cockroach-2039.defaultdb',
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};

module.exports = config;
