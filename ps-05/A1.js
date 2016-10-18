var canvas = document.getElementById('canvas1');
var ctx = canvas.getContext('2d');

var getColor = function(hue, saturation, lightness, alpha) {
  var colorString = "hsla(" +
    hue + ", "
    + saturation + "%,"
    + lightness  + "%,"
    + alpha + ")";
  return colorString;
};

for (var x = 50 ; x <= 350; x = x + 50) {
    ctx.strokeStyle = getColor(0,10,10,1);
    ctx.moveTo(x,0);
    ctx.lineTo(x,400);
    ctx.stroke();
    ctx.lineWidth = x/(y*2.5);
}

for (var y = 50 ; y <= 350; y = y + 50) {
    ctx.strokeStyle = getColor(0,10,10,1);
    ctx.moveTo(0,y);
    ctx.lineTo(400,y);
    ctx.stroke();
    ctx.lineWidth = x/(y*2.5);
}

var random = Math.random()*150
var random2 = Math.random()*20

for (var x = 0.45 ; x <= 345; x++) {
  for (var y = 0.45 ; y <= 345; y++) {
  ctx.fillStyle = getColor(0,15,random2,1);
  ctx.fillRect(x*100, y*100, 60, 60);
}
}

  var randomX = Math.random()*300
  var randomY = Math.random()*300

  ctx.fillStyle = getColor(random*random2,80,20,1);
  ctx.fillRect(randomX, randomY, 60, 60);
