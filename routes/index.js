var express = require('express');
var router = express.Router();
var fs = require("fs");

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log("router")
  	res.send('Hola mundo');
});

module.exports = router;
