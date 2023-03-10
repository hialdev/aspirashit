const mysql = require('mysql')
require('dotenv').config()

// Create connection to MySQL database
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
})
connection.connect(error => {
    if (error) throw error
    console.log('Connected to MySQL database')
})

module.exports = connection;