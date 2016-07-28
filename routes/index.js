var express = require('express');
var router = express.Router();
var fs = require("fs");
var Nombres = require("../model/Nombres");
/* GET home page. */
router.get('/', function(req, res, next) {
	console.log("router");

	var ejemplo = new Nombres({
		name : "jonatan"
	})
	ejemplo.save(function(err){
		if (err) {
		console.log("error al guardar");
			
		}
		console.log("Guardado");
	})

  	res.send('Hola mundo');

});

router.get("/name/:name", function(req , res , next){
	var nombre = new Nombres({
		name : req.params.name
	})
	nombre.save(function(err){
		res.send(nombre);
	})
	

})
router.get("/names", function(req , res , next){
	Nombres.find({}, function(err, data){
		res.send(data);
	})
})
module.exports = router;
