var canvas = document.getElementById('canvas4');
var ctx = canvas4.getContext('2d');
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

for (var x = 1 ; x <= 332; x = x + 2) {
    // for (var y = 10 ; y <= 100; y = y + 10) {
    random = Math.random() * 150;
    var y = 36;
    ctx.moveTo(x,y);
    ctx.lineTo(x*2,y*5);
    ctx.strokeStyle = "hsla(0,10%,10%,1)";
    ctx.strokeStyle = getColor(0,10,random,random/150)
    ctx.stroke();
// }
}

for (var y = 1 ; y <= 334; y = y + 2) {
    // for (var y = 10 ; y <= 100; y = y + 10) {
    random = Math.random() * 150;
    var x = 36;
    ctx.moveTo(x,y);
    ctx.lineTo(x*5,y*2);
    ctx.strokeStyle = "hsla(0,10%,10%,1)";
    ctx.strokeStyle = getColor(0,30,random,random/100)
    ctx.stroke();
// }
}
