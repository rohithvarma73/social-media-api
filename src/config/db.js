const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.DB_USER || "postgres",
  host: process.env.DB_HOST || "localhost",
  database: process.env.DB_NAME || "socialmedia",
  password: process.env.DB_PASSWORD || "Rohith@73",
  port: process.env.DB_PORT || 5432,
});

module.exports = pool;
