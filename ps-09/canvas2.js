var ctx = document.getElementById("canvas").getContext('2d');
var height = 500;
var width = 500;
var points = [];
var numPoints = 200;

var makeColor = function(hue, sat, light, alph) {
  return "hsla(" + hue + "," + sat + "%," + light + "%," + alph + ")";
};

var clearScreen = function() {
  ctx.fillStyle = makeColor(0,0,0,0.1)
  ctx.fillRect(0, 0, height, width);
};

var wrap = function(point) {
  if (point.x > width) {
    point.x = 0;
    point.y = point.y;
  }
  if (point.y > height) {
    point.y = 0;
    point.x = point.x;
  }
  if (point.y < 0) {
    point.y = height;
    point.x = point.x;
  }
  if (point.x < 0) {
    point.x = width;
    point.y = point.y;
  }

};

var move = function(p) {
  var speed = p.speed;
  var direction = Math.random();
  if (direction < 0.2) {
    p.y = p.y - speed;

  } else if (direction < 0.4) {
    p.x = p.x - speed;

  } else if (direction < 0.6) {
    p.y = p.y + speed;

  } else {
    p.x = p.x + speed;
  }
}


function drawPoints() {

            clearScreen();

            ctx.strokeStyle = '';

            for (var i = 0; i < points.length; i++) {
              var point = points[i];
              var hue = (point.y / 8) * 6;
              move(point);
              wrap(point);

              ctx.beginPath();

              ctx.arc(point.x,point.y,point.size,0,2*Math.PI);
              ctx.lineTo(point.x,point.x);
              ctx.closePath();
              ctx.fillStyle = makeColor(hue,100,65,1);

              ctx.fill();

            }


            requestAnimationFrame(drawPoints);
};

var makePoints = function() {
  for (var i = 0; i < numPoints; i++) {
    var radius = Math.random() * 5;
    var x = Math.random() * width;
    var speed = 10 - radius
    points.push({
      x: x,
      y: 250,
      size: radius,
      speed: speed
    });
  }
};

makePoints();
// requestAnimationFrame(drawPoints);
