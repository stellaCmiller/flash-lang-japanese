const mysql = require('mysql')
const config = {
  host: 'localhost',
  port: '3305',
  user: 'root',
  password: 'jupiter',
  database: 'japanese_dict'
}

const connection = mysql.createConnection(process.env.JAWSDB_URL || config)

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;


  