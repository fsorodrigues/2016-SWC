var canvas = document.getElementById('canvas1');
var ctx = canvas1.getContext('2d');
//
// ctx.moveTo(1,1);
// ctx.lineTo(100,100);
// ctx.strokeStyle = "hsla(0,10%,10%,1)";
// ctx.stroke();

var getColor = function(hue, saturation, lightness, alpha) {
  var colorString = "hsla(" +
    hue + ", "
    + saturation + "%,"
    + lightness  + "%,"
    + alpha + ")";
  return colorString;
};

var random = 0;

for (var x = 10 ; x <= 356; x = x + 11) {
    var y = 20
    random = Math.random() * 150;
    ctx.moveTo(x,y);
    ctx.lineTo(x,y*15);
    ctx.strokeStyle = getColor(0,10,random,random/150)
    ctx.stroke();
}


// for (var x = 10 ; x <= 100; x = x + 10) {
//   for (var y = 100 ; y >= 0; y = y - 10) {
//     ctx.moveTo(x,y);
//     ctx.lineTo(x/2,y*2);
//     ctx.stroke();
// }
// }
//
// for (var x = 0.45 ; x <= 345; x++) {
//   for (var y = 0.45 ; y <= 345; y++) {
//   drawingPad.fillStyle = "hsla(0,10%,25%,1)";
//   drawingPad.fillRect(x*100, y*100, 60, 60);
// }
// }
//
// for (var x = 0 ; x <= 300; x++) {
//   for (var y = 0 ; y <= 300; y++) {
//   drawingPad.fillStyle = "hsla(0,10%,10%,1)";
//   drawingPad.fillRect(x*100, y*100, 50, 50);
// }
// }
