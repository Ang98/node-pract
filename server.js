const express = require("express");
const bodyParser = require("body-parser");

const db = require('./db')

db('mongodb://localhost:27017/telegram')

//const router = require('./components/message/network')
const router = require('./network/routes')

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }))
//app.use(router);


router(app);

app.listen(3000);
console.log("La aplicacion esta escuchando en http://localhost:3000");
