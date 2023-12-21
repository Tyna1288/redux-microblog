/** Database connection for Microblog. */

const { Client } = require("pg");

const client = new Client(process.env.DATABASE_URL || "postgresql://postgres:1234567@localhost:5433/microblog");

client.connect();


module.exports = client;
