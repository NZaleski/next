const express = require('express');
//const bodyParser = require('body-parser');
const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'sql9.freemysqlhosting.net',
  user     : 'sql9341439',
  password : 'TPy3d5DKBS',
  database : 'sql9341439'
});

// Initialize the app
const app = express();

// https://expressjs.com/en/guide/routing.html
app.get('/posts', function (req, res) {
    connection.connect();

    connection.query('SELECT * FROM food LIMIT 0, 10', function (error, results, fields) {
      if (error) throw error;
      res.send(results)
    });
    console.log(connection)
    connection.end();
});
// Start the server
app.listen(3000, () => {
 console.log('Go to http://localhost:3000/posts to see posts');
});