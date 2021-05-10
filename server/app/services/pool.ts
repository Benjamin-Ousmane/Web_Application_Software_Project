import * as pg from "pg";
  // TODO: A MODIFIER POUR VOTRE BD
const connectionConfig: pg.ConnectionConfig = {
    user: "postgres",
    database: "TP3",
    password: "baseDonnee",
    port: 5432,
    host: "127.0.0.1",
    keepAlive: true
  };

export const pool = new pg.Pool(connectionConfig);
pool.connect(async(err,client) => {
        if (err) {
          return console.error('Error acquiring client', err.stack)
        }
        client.query('SELECT NOW()', (err, result) => {
          if (err) {
            return console.error('Error executing query', err.stack)
          }
          console.log(result.rows)
        })
});
