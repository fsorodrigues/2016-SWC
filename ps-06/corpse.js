var myCanvas = document.getElementById('corpse');
var drawingPad = myCanvas.getContext('2d');
var circleDegrees = 2 * Math.PI;
var y0  = 0;
var y1 = 240;
var y2 = 480;
var height = y3 = 720;
var x0 = 0;
var x1 = 125; // left connection
var x2 = 275; // right connection
var width = x3 = 400;
var horizontalCenter = 200; // centerLine

var fsorodrigues = {};

var drawImage = function(filename, ctx, x, y) {
  var img = document.createElement("img");
  img.src = filename;
  img.addEventListener("load", function() {
    ctx.drawImage(img, x, y);
  });
}

fsorodrigues.drawGrid = function(ctx) {
  ctx.beginPath();
  ctx.moveTo(x1,y0);
  ctx.lineTo(x1,y3);

  ctx.moveTo(x2,y0);
  ctx.lineTo(x2,y3);

  ctx.moveTo(x1,y0);
  ctx.lineTo(x1,y3);

  ctx.moveTo(x0,y1);
  ctx.lineTo(x3,y1);

  ctx.moveTo(x0,y2);
  ctx.lineTo(x3,y2);
  ctx.stroke();
}

// fsorodrigues.drawArm = function(ctx, left) {
//
// };
//
// fsorodrigues.drawLeg = function(ctx, left) {
//
// };


fsorodrigues.drawTop = function(ctx) {
  // draw a round head:
  // ctx.beginPath();
  // ctx.arc(horizontalCenter, 120, 120, 0, circleDegrees);
  // ctx.fill();
  drawImage('https://fsorodrigues.github.io/2016-SWC/ps-06/head.jpg', ctx, 0, 0);
};

fsorodrigues.drawMiddle = function(ctx) {
  // fsorodrigues.drawArm(ctx, true);
  // fsorodrigues.drawArm(ctx, false);
  // draw the rest of the body...
  drawImage('https://fsorodrigues.github.io/2016-SWC/ps-06/torso.jpg', ctx, 0, 240);

};

fsorodrigues.drawBottom = function(ctx) {
  // fsorodrigues.drawLeg(ctx, true);
  // fsorodrigues.drawLeg(ctx, false);
  drawImage('https://fsorodrigues.github.io/2016-SWC/ps-06/legs.jpg', ctx, 0, 480);
};

fsorodrigues.drawCorpse = function(ctx) {
  fsorodrigues.drawTop(ctx);
  fsorodrigues.drawMiddle(ctx);
  fsorodrigues.drawBottom(ctx);
  fsorodrigues.drawGrid(ctx);
};

window.fsorodrigues = fsorodrigues;
