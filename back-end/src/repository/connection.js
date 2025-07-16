import mysql from 'mysql2/promise'

const connection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    typeCast: function (field, next) {
        if (field.type === "TINY" && field.length === 1) {
            return(field.string() === "1");

        } else if(field.type === 'DATE' || field.type === 'DATETIME') {
            const date = new Date(field.string());
            
            const dia = (`0${date.getDate()}`).slice(-2);
            const mes = (`0${date.getMonth() + 1}`).slice(-2);
            const ano = date.getFullYear();

            return `${ano}-${mes}-${dia}`;
        } else {
            return next();
        }
    }
});

console.log(`--> Conexão ao Banco de dados realizada com sucesso`);
export default connection;