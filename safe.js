/// Import all methods into an object
var utilities = require('./lib.js');

/// Prepend a `ctx` as the first argument
/// Methods were expecting the `this` to be a `CanvasRenderingContext2D`
/// Puts directly into exports object
Object.keys(utilities)
.forEach(function(name, fn) {
	module.exports[name] = function(ctx) {
		var args = Array.prototype.slice.call(arguments, 1);
		fn.apply(ctx, args);
	};
});
