var getColor = function(hue, saturation, lightness, alpha) {
  var colorString = "hsla(" +
    hue + ", "
    + saturation + "%,"
    + lightness  + "%,"
    + alpha + ")";
  return colorString;
};

var drawingPad = document.getElementById("canvas").getContext("2d");
var height = 500;
var width = 500;
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



var clearScreen = function() {
  drawingPad.fillStyle = getColor(0,0,0,1);
  drawingPad.fillRect(0,0, height, width);
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

          drawingPad.fill();

          requestAnimationFrame(startAnimation);

}

requestAnimationFrame(startAnimation);
