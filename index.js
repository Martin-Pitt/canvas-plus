var utilities = require('./lib.js');
module.exports = utilities;

Object.keys(utilities).forEach(function(name, fn) {
	CanvasRenderingContext2D.prototype[name] = fn;
});
