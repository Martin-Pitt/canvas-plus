/// Import all methods into an object
import * as utilities from 'lib.js';

/// Prepend a `ctx` as the first argument
/// Methods were expecting the `this` to be a `CanvasRenderingContext2D`
Object.keys(utilities)
.forEach(function(name, fn) {
	utilities[name] = function(ctx) {
		var args = Array.prototype.slice.call(arguments, 1);
		fn.apply(ctx, args);
	};
});

/// Re-export
export default utilities;
