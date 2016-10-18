var canvas = document.getElementById('canvas3');
var drawingPad = canvas.getContext('2d');
drawingPad.fillStyle = "hsla(0,10%,10%,1)";

for (var x = 0 ; x <= 400; x++) {
  for (var y = 0 ; y <= 400; y++) {
  drawingPad.fillStyle = "hsla(0,0%,0%,1)";
  drawingPad.fillRect(x*10, y*10, 1, 1);
}
}

for (var x = 0 ; x <= 400; x++) {
  for (var y = 0 ; y <= 400; y++) {
  drawingPad.fillStyle = "hsla(0,10%,60%,0.5)";
  drawingPad.fillRect(x*10, y*10, 4, 4);
}
}






// for (var x = 3.3 ; x <= 400; x++) {
//   for (var y = 3.7 ; y <= 400; y++) {
//   drawingPad.fillStyle = "hsla(0,10%,10%,1)";
//   drawingPad.fillRect(x*10, y*10, 10, 10);
// }
// }

// for (var x = 0 ; x <= 300; x++) {
//   for (var y = 0 ; y <= 300; y++) {
//   drawingPad.fillStyle = "hsla(0,10%,10%,1)";
//   drawingPad.fillRect(x*10, y*10, 1, 1);
// }
// }
