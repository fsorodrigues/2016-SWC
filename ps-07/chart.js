var getColor = function(hue, saturation, lightness, alpha) {
  var colorString = "hsla(" +
    hue + ", "
    + saturation + "%,"
    + lightness  + "%,"
    + alpha + ")";
  return colorString;
};

var width = 500
var height = 500
var radius = 10

var alEast = [
{
  "hrsNum": 4,
  "gamesAgainst": 25,
  "opponent": "Red Sox",
  "radius": radius,
  // "color": getColor(360,150,100,0.3),
  "color": "red",
},
{
  "hrsNum": 55,
  "gamesAgainst": 247,
  "opponent": "Orioles",
  "radius": radius,
  // "color": getColor(200,90,100,0.3),
  "color": "orange",
},
{
  "hrsNum": 62,
  "gamesAgainst": 251,
  "opponent": "Blue Jays",
  "radius": radius,
  // "color": getColor(200,90,100,0.3),
  "color": "blue",
},
{
  "hrsNum": 53,
  "gamesAgainst": 257,
  "opponent": "Yankees",
  "radius": radius,
  // "color": getColor(360,150,100,0.3),
  "color": "white",
},
{
  "hrsNum": 53,
  "gamesAgainst": 258,
  "opponent": "Rays",
  "radius": radius,
  // "color": getColor(360,150,100,0.3),
  "color": "yellow",
}
];

var flipY = function(y) {
  return height - y;
}

var svgContainer = d3.select(".chart").append("svg")
                                     .attr("width", width)
                                     .attr("height", height);


for (var x = 50; x <=width-50; x = x+50) {
            var xGrid = svgContainer.append("line")
                                    .attr("x1", x)
                                    .attr("y1", 0)
                                    .attr("x2", x)
                                    .attr("y2", height+5)
                                    .attr("stroke-width", 0.05)
                                    .attr("stroke", "black");
}

for (var y = 0; y <=height-50; y = y+50) {
            var yGrid = svgContainer.append("line")
                                    .attr("x1", -5)
                                    .attr("y1", flipY(y))
                                    .attr("x2", width)
                                    .attr("y2", flipY(y))
                                    .attr("stroke-width", 0.05)
                                    .attr("stroke", "black");
}

var xAxis = svgContainer.append("line")
                       .attr("x1", -20)
                       .attr("y1", flipY(0))
                       .attr("x2", width)
                       .attr("y2", flipY(0))
                       .attr("class", 'xAxis')

var yAxis = svgContainer.append("line")
                       .attr("x1", 0)
                       .attr("y1", flipY(-20))
                       .attr("x2", 0)
                       .attr("y2", flipY(height))
                       .attr("class", 'yAxis')


var circles = svgContainer.selectAll("circle")
                          .data(alEast)
                          .enter()
                          .append("circle");

var makeColor = function(d) {
  var hue = d.hrsNum;
  var lightness = d.gamesAgainst / 5;
  return getColor(hue, 90, lightness, 0.5);
}

var makeColorSolid = function(d) {
  var hue = d.hrsNum;
  var lightness = d.gamesAgainst / 5;
  return getColor(hue, 90, lightness, 1);
}

var circleAttributes = circles.attr("cx", function (d) { return d.gamesAgainst; })
                              .attr("cy", function (d) { return flipY(d.hrsNum*5); })
                              .attr("r", function (d) { return d.radius; })
                              .style("fill", function(d) { return makeColor(d); })
                              .attr("class", "data");


var text = svgContainer.selectAll("text")
                       .data(alEast)
                       .enter()
                       .append("text");

var textLabels = text
                    .attr("x", function(d) { return d.gamesAgainst +5; })
                    .attr("y", function(d) { return flipY(d.hrsNum*5) - 10; })
                    .text( function (d) { return d.opponent})
                    .attr("class", 'label')

var xAxisLabel = svgContainer.append("text")
                     .attr("x", width/2)
                     .attr("y", flipY(-30))
                     .text("Games Against")
                     .attr("class", 'xAxisLabel')
                     .attr("text-anchor", "middle")

var yAxisLabel = svgContainer.append("text")
                     .attr("x", -30)
                     .attr("y", flipY(height/2))
                     .text("HRs")
                     .attr("class", 'yAxisLabel')
                     .attr("text-anchor", "middle")

var credits = svgContainer.append("text")
                    .attr("x", -55)
                    .attr("y", flipY(-55))
                    .text("source: baseball-reference.com")
                    .attr("class", 'credits')

var signature = svgContainer.append("text")
                    .attr("x", width*0.86)
                    .attr("y", flipY(-55))
                    .text("by fsorodrigues")
                    .attr("class", 'signature')
                    .attr("text-anchor", "right")
