var getColor = function(hue, saturation, lightness, alpha) {
  var colorString = "hsla(" +
    hue + ", "
    + saturation + "%,"
    + lightness  + "%,"
    + alpha + ")";
  return colorString;
};


var y0 = 15;
var y1 = 125;
var y2 = yCenter = 250; // Vert Center Line
var y3 = 375;
var height = y4 = 500;
var x0 = 15;
var x1 = 125;
var x2 = XCenter = 250; // Horz Center Line
var x3 = 375;
var width = x4 = 500;


var myCanvas = document.getElementById('canvas');
var drawingPad = myCanvas.getContext('2d');

var clearScreen = function() {
  drawingPad.fillStyle = getColor(0,5,100,0.6);
  drawingPad.fillRect(0,0,500,500);
}


function startAnimation() {
          clearScreen();
          drawingPad.beginPath();
          drawingPad.arc(x2,y2,10,0.1*Math.PI,1.8*Math.PI);
          drawingPad.lineTo(x2,y2);
          drawingPad.closePath();
          drawingPad.strokeStyle = getColor (0,5,5,1);
          drawingPad.lineWidth = 0.3;
          drawingPad.stroke();
          drawingPad.fillStyle = getColor(50,100,65,1);
          x2 = x2 + 10;
            if(x2 > x3) {
            y2 = y2 - 10;
            x2 = x3;
          };
            if(y2 < y0) {
            x3 = x3 - 10;
            y2 = y0;
          };
            if(x3 < x0) {
            y0 = y4 - 10;
            x3 = x4 -10;
          };

          drawingPad.fill();


}
setInterval(startAnimation, 100);
