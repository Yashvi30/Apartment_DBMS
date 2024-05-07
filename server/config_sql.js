const config = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "0987609876",
  database: process.env.DB_DATABASE || "dbms",
  insecureAuth: true,
  protocol: "mysql",
};

module.exports = config;
