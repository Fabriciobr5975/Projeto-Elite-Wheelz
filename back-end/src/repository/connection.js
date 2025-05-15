import mysql from 'mysql2/promise'

const connection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
});

console.log(`--> Conexão ao Banco de dados realizada com sucesso`);
export default connection;