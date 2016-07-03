module.exports.dashedLine = function dashedLine (x0, y0, x1, y1, dash, gap) {
    if(dash == undefined) dash = 2;
	if(gap == undefined) gap = 2;
	var dx = x1 - x0;
    var dy = y1 - y0;
	var dist = Math.sqrt(dx * dx + dy * dy);
	var nx = dx / dist;
	var ny = dy / dist;
	
    var approx = dist / (dash + gap);
	var total = Math.floor(approx);
	var exposed = approx - total;
	
	x0 += nx * (dash + gap) * exposed * 0.5;
	y0 += ny * (dash + gap) * exposed * 0.5;
	
	x0 -= nx * gap * 0.5;
	y0 -= ny * gap * 0.5;
	
    while (total-->0)
	{
        x0 += nx * gap;
		y0 += ny * gap;
		this.moveTo(x0, y0);
		x0 += nx * dash;
		y0 += ny * dash;
		this.lineTo(x0, y0);
    }
};

module.exports.roundedRect = function roundedRect (x, y, w, h, r) {
	this.moveTo(x + r, y);
	this.arcTo(x + w, y, x + w, y + r, r);
	this.arcTo(x + w, y + h, x + w - r, y + h, r);
	this.arcTo(x, y + h, x, y + h - r, r);
	this.arcTo(x, y, x + r, y, r);
};

module.exports.rotateAt = function rotateAt (x, y, a) {
    this.translate(x, y);
    this.rotate(a);
    this.translate(-x, -y);
};
