var express = require('express');
var path = require('path');

var routes = require('./routes/index');
var mongoose = require("mongoose");
var options = {
	  db: { native_parser: true },
	  server: { poolSize: 5 },
	  replset: { rs_name: 'myReplicaSetName' },
	  user: 'ucmjyz7azolvkxk',
	  pass: 'gAqIh8CH8vldElz5JNmn'
}
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://ucmjyz7azolvkxk:gAqIh8CH8vldElz5JNmn@bgmltwkobgfjgr1-mongodb.services.clever-cloud.com:27017/bgmltwkobgfjgr1");

var app = express();
app.use("/", routes);

var port = Number(process.env.PORT || 8080);
app.listen(8080);