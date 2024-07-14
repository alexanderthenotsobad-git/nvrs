import { createPool } from 'mysql2/promise';

//console.log('MySQL Config:', {
//    port: process.env.MYSQL_PORT,
//    password: process.env.MYSQL_PASSWORD,
//    host: process.env.MYSQL_HOST,
//    database: process.env.MYSQL_DATABASE_NAME,
//    user: process.env.MYSQL_USER,
//});


const pool = createPool ({
    port: process.env.MYSQL_PORT,
    password: process.env.MYSQL_PASSWORD,
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE_NAME,
    user: process.env.MYSQL_USER,
});

const connectToDatabase = async () => {
    try {
        await pool.getConnection();
        console.log("MySQL Connection Successful 🧮️")
    } catch (error) {
        console.log("Database Connection Error");
        console.log(error);
        throw error;
    }
};

export { connectToDatabase, pool};