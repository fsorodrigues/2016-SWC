var canvas = document.getElementById('canvas2');
var drawingPad = canvas.getContext('2d');
drawingPad.fillStyle = "hsla(0,10%,10%,1)";

for (var x = 0 ; x <= 300; x++) {
  for (var y = 0 ; y <= 300; y++) {
    drawingPad.fillRect(x*100, y*100, 50, 50);
}
}

for (var x = 0.5 ; x <= 350; x++) {
  for (var y = 0.5 ; y <= 350; y++) {
  drawingPad.fillRect(x*100, y*100, 50, 50);
}
}
