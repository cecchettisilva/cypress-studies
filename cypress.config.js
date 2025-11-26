const { defineConfig } = require("cypress");
const sql = require('mssql');
require('dotenv').config();

const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  port: Number(process.env.DB_PORT) || 1433,
  database: process.env.DB_DATABASE || 'GisDemo',
  options: {
    encrypt: false,              // for local SQL Server
    trustServerCertificate: true // avoid SSL issues in dev
  }
};

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        async queryDb({ query }) {
          let pool;
          try {
            pool = await sql.connect(dbConfig);
            const result = await pool.request().query(query);
            
            // If the query returns data (SELECT), return the recordset
            // If not (INSERT, UPDATE, DELETE), return information about the operation
            if (result.recordset) {
              return result.recordset; // For SELECT
            } else {
              // For INSERT, UPDATE, DELETE
              return {
                rowsAffected: result.rowsAffected[0],
                success: true
              };
            }
          } catch (err) {
            console.error('DB error:', err);
            // Return an error object instead of throw
            return {
              error: true,
              message: err.message
            };
          } finally {
            if (pool) {
              await pool.close();
            }
          }
        }
      });

      return config;
    },
    baseUrl: 'https://petstore.swagger.io',
    experimentalPromptCommand: true,
    projectId: "ao5ucg"
  },
});
