var express = require('express');
var path = require('path');

var routes = require('./routes/index');

var app = express();
app.use("/", routes);

var port = Number(process.env.PORT || 8080);
app.listen(8080);