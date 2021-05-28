const env = process.env;

const config = {
  db: { /* do not put password or any sensitive info here, done only for demo */
    host: env.DB_HOST || 'otto.db.elephantsql.com',
    port: env.DB_PORT || '5432',
    user: env.DB_USER || 'cklijfef',
    password: env.DB_PASSWORD || 'V1qidES5k3DSJICDRgXtyT8qeu2SPCZp',
    database: env.DB_NAME || 'cklijfef',
  },
  redis: {
    host: env.REDIS_HOST || 'redis-12753.c253.us-central1-1.gce.cloud.redislabs.com',
    port: env.REDIS_PORT || 12753,
    password: env.REDIS_PASSWORD || 'eYVX7EwVmmxKPCDmwMtyKVge8oLd2t81'
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};

module.exports = config;
