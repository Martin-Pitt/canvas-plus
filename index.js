var utilities = require('./lib.js');
module.exports = utilities;

Object.keys(utilities).forEach(function(name) {
	CanvasRenderingContext2D.prototype[name] = utilities[name];
});
