module.exports = (pg, options) => {
  const client = new pg.Client(options);
  client.connect();
  const createQuery = client.query(
    `CREATE TABLE IF NOT EXISTS Emails (
      id SERIAL PRIMARY KEY,
      email TEXT NOT NULL,
      added BOOLEAN NOT NULL
    )`
  );
  createQuery.on('end', () => { client.end(); });
};
