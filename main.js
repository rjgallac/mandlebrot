colors = {
    1: '#111',
    2: '#333',
    3: '#555',
    4: '#777',
    5: '#999',
    6: '#aaa',
    7: '#ccc',
    8: '#eee',
    0: '#fff'
}

function drawPixel(context, x, y, color) {
    var roundedX = Math.round(x);
    var roundedY = Math.round(y);
    context.fillStyle = color;
    context.fillRect(roundedX, roundedY, 1, 1);
}


var canvas = document.querySelector('#myCanvas');
var context = canvas.getContext('2d')

xoffset1 = -0.5;
xoffset2 = 0;
yoffset1 = -0.5;
yoffset2 = 0.5;


for (i=0; i<canvas.width; i++) {
    for (j=0; j<canvas.height; j++) {
        let xdiv = Math.abs((-2.00 + xoffset1) - 0.47 + xoffset2) / canvas.width;
        x0 = xdiv * i - 2;
        let ydiv = Math.abs(-1.12 + yoffset1 - 1.12 + yoffset2) / canvas.height;
        y0 = ydiv * j - 1.12;
        x=0.0;
        y=0.0;
        iteration = 0;
        max_iterations = 24;
        while(x*x + y*y <= 2*2 && iteration < max_iterations){
            xtemp = x*x - y*y + x0
            y = 2*x*y + y0
            x = xtemp
            iteration++;
        }
        drawPixel(context, i, j, colors[iteration % 8]);
    
    }
}