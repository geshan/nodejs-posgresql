const redis = require('redis');
const config = require('../config');
const client = redis.createClient({
    host: config.redis.host,
    port: config.redis.port,
    password: config.redis.password 
});

const { promisify } = require('util');
const setAsyncEx = promisify(client.setex).bind(client);
const getAsync = promisify(client.get).bind(client);

client.on('error', err => {
    console.log('Error ' + err);
});

async function saveWithTtl(key, value, ttlSeconds = 60) {
  return await setAsyncEx(key, ttlSeconds, JSON.stringify(value)); 
}

async function get(key) {
  const jsonString = await getAsync(key);

  if (jsonString) {
    return JSON.parse(jsonString);
  }
}

module.exports = {
  saveWithTtl,
  get
}
