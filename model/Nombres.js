var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var nombres = new Schema({
	name : String
})
console.log("modelos");
var detalles = mongoose.model('bgmltwkobgfjgr1', nombres);

module.exports = detalles;