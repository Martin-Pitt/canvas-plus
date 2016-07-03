# canvas-plus

## Extend HTML5 Canvas with practical and high level methods that were missing

## Install

	npm install canvas-plus

## Usage

`canvas-plus` can be used in two ways:

1. Extending the `prototype` for the `Canvas2DRenderingContext`
2. As a literal object of all the methods, where you can pass the context as the first argument

By default the documentation will assume the prototype was extended. Otherwise imagine all the method signatures with the context as the first argument. (E.g. `rotateAt(ctx, …)`)

Example with extended prototype:
```js
import 'canvas-plus';

var canvas = document.createElement('canvas');
canvas.width = 300;
canvas.height = 400;
var ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.roundedRect(50, 50, 200, 300, 10);

ctx.lineWidth = 2;
ctx.strokeStyle = 'hsla(215, 100%, 50%, 0.7)';
ctx.stroke();
```


As an object:

```js
import utilities from 'canvas-plus';

var canvas = document.createElement('canvas');
canvas.width = 300;
canvas.height = 400;
var ctx = canvas.getContext('2d');

ctx.beginPath();
utilities.roundedRect(ctx, 50, 50, 200, 300, 10);

ctx.lineWidth = 2;
ctx.strokeStyle = 'hsla(215, 100%, 50%, 0.7)';
ctx.stroke();
```


## Documentation

### dashedLine (x0, y0, x1, y1, dash, gap)

* Start coordinates of line (x0, y0)
* End coordinates of line (x1, y1)
* Length of a solid dash (dash)
* Length of gaps between dashes (gap)

Draws a dashed line, by using `moveTo` and `lineTo` to create small path segments in a straight line from A to B.


### roundedRect (x, y, w, h, r)

* Position of top left edge (x, y)
* Size of the rect (w, h)
* Radius of the rounded corners (r)

Draws a rect with rounded corners using `moveTo`, `lineTo` and `arcTo` to create a path.

Keep in mind that no limits are in place on the radius, so you might get corrupt shapes by drawing corners larger than the size of the rect. I'd ideally like to have an implementation as similar as possible to `border-radius`; Feel free to create an issue with implementation notes or write a pull request if you can figure out how to get it close to the CSS spec :)


### rotateAt (x, y, a)

* Axis position to rotate around (x, y)
* Angle in radians for rotation (a)

Rotates around the given position like an axis on the canvas.

This, albeit simple, method makes rotating around arbitrary positions on the canvas a breeze.






## Requirements

* `canvas-plus` expects ES6 modules syntax.
* If your extending the prototype, then the `Canvas2DRenderingContext` is expected as a global
* In general expects the `Canvas2DRenderingContext` interface to work on as a context
