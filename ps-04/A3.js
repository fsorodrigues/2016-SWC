var canvas = document.getElementById('canvas1');
var drawingPad = canvas.getContext('2d');

for (var x = 0.25 ; x <= 325; x++) {
  for (var y = 0.25 ; y <= 325; y++) {
  drawingPad.fillStyle = "hsla(0,10%,80%,0.5)";
  drawingPad.fillRect(x*100, y*100, 50, 50);
}
}

for (var x = 0.45 ; x <= 345; x++) {
  for (var y = 0.45 ; y <= 345; y++) {
  drawingPad.fillStyle = "hsla(0,10%,25%,1)";
  drawingPad.fillRect(x*100, y*100, 60, 60);
}
}

for (var x = 0 ; x <= 300; x++) {
  for (var y = 0 ; y <= 300; y++) {
  drawingPad.fillStyle = "hsla(0,10%,10%,1)";
  drawingPad.fillRect(x*100, y*100, 50, 50);
}
}
