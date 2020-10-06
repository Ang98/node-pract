const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const response = require("./network/response");
var app = express();

app.use(bodyParser.json());
app.use(router);

router.get("/", function (req, res) {
  res.header({
    hola: "angel estuvo aqui",
  });
  console.log(req.headers);
  res.send("Listar mensajes");
});

router.post("/", function (req, res) {
  res.send("Aniadir mensaje");
});

router.delete("/", function (req, res) {
  console.log(req.query);
  console.log(req.body);
  res.status(201).send();
});

//app.use('/', function(req, res){
//    res.send('Hola')
//})

app.listen(3000);
console.log("La aplicacion esta escuchando en http://localhost:3000");
