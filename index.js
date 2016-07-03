import * as utilities from 'lib.js';
export default utilities;

Object.keys(utilities).forEach(function(name, fn) {
	CanvasRenderingContext2D.prototype[name] = fn;
});
