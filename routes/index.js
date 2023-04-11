var express = require('express');
var router = express.Router();
const mysql = require('mysql'); 


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'woonwinkel'
});
 
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Server!');
});

/* GET home page. */
router.get('/', (req, res, next) => {
  const query = req.query.query;
  const sql = `SELECT * FROM products WHERE naam LIKE '%${query}%'`;

  connection.query(sql, (err, products) => {
    if (err) throw err;

    res.render('index', { products: products, query: query});
  });
});






module.exports = router;



// router.get('/', function(req, res, next) {
//   res.render('index');
// });
