var express = require("express");
var bodyParser = require('body-parser');

var app = express();

//Carga de rutas
var prueba_route = require('./routes/prueba');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

var port = process.env.PORT || 4200;

//ruta base
app.use('/api', prueba_route);

//Iniciamos el servidor
app.listen(port);
console.log("API escuchando en la url: http://localhost:" + port);