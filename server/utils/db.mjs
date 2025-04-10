import pkg from 'pg';
const { Pool } = pkg;

const connectionPool = new Pool({
  connectionString:
    "postgresql://your-db-username:your-db-password@localhost:5432/your-db-name",
});

export default connectionPool;
