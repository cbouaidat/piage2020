const express = require('express')
var app = express()
const bodyParser = require('body-parser');

const path = require("path");

const { Pool } = require('pg')

app.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded());

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    SCHEMA:"piage_dev",
    password: "1234",
    port: 5432
});

app.get('/', (req,res) => {
   pool.query("SELECT * FROM piage_dev.data_localisation L INNER JOIN piage_dev.list_nature N ON L.nature_pk = N.nature_pk WHERE N.nature LIKE 'faune'", (error, results) => {
        if (error) {
          throw error
        }
        sending = res.status(200).json(results.rows);
        res.send(sending)
      });

});

app.get('/')
app.listen(10000, function () {
    console.log('Example app listening on port 3000!')
});