colors = { 1: '#111', 2: '#333', 3: '#555', 4: '#777', 5: '#999', 6: '#aaa', 7: '#ccc', 8: '#eee', 0: '#fff' }

var canvas = document.querySelector('#myCanvas');
var context = canvas.getContext('2d')

xoffset1 = -0.5;
xoffset2 = 0;
yoffset1 = -0.5;
yoffset2 = 0.5;


for (x=0; x<canvas.width; x++) {
    for (y=0; y<canvas.height; y++) {
        x0 = scale(x, -2.00, 0.47, xoffset1, xoffset2, canvas.width);
        y0 = scale(y, -1.12, 1.12, yoffset1, yoffset2, canvas.height);
        iteration = inSet(x0,y0)
        drawPixel(context, x, y, colors[iteration % 8]);
    
    }
}

function inSet(x0, y0) {
    let x=0.0;
    let y=0.0;
    let iteration = 0;
    let max_iterations = 24;
    while (x*x + y*y <= 2*2 && iteration < max_iterations) {
        xtemp = x*x - y*y + x0
        y = 2*x*y + y0
        x = xtemp
        iteration++;
    }
    return iteration;
}

function drawPixel(context, x, y, color) {
    var roundedX = Math.round(x);
    var roundedY = Math.round(y);
    context.fillStyle = color;
    context.fillRect(roundedX, roundedY, 1, 1);
}

function scale(value, a, b, offset1, offset2, max ) {
    return Math.abs((a + offset1) - b + offset2) / max * value - 0+a;
}