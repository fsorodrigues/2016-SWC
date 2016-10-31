// var getColor = function(hue, saturation, lightness, alpha) {
//   var colorString = "hsla(" +
//     hue + ", "
//     + saturation + "%,"
//     + lightness  + "%,"
//     + alpha + ")";
//   return colorString;
// };

var width = 500
var height = 500
var radius = 5

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


var svgContainer = d3.select(".chart").append("svg")
                                     .attr("width", width)
                                     .attr("height", height);


for (var x = 0; x <=width-50; x = x+50) {
            var xGrid = svgContainer.append("line")
                                    .attr("x1", x)
                                    .attr("y1", -5)
                                    .attr("x2", x)
                                    .attr("y2", height)
                                    .attr("stroke-width", 0.05)
                                    .attr("stroke", "black");
}

for (var y = 0; y <=height-50; y = y+50) {
            var yGrid = svgContainer.append("line")
                                    .attr("x1", -5)
                                    .attr("y1", y)
                                    .attr("x2", width)
                                    .attr("y2", y)
                                    .attr("stroke-width", 0.05)
                                    .attr("stroke", "black");
}

var xAxis = svgContainer.append("line")
                       .attr("x1", -20)
                       .attr("y1", 0)
                       .attr("x2", width)
                       .attr("y2", 0)
                       .attr("stroke-width", 0.8)
                       .attr("stroke", "black");

var yAxis = svgContainer.append("line")
                       .attr("x1", 0)
                       .attr("y1", -20)
                       .attr("x2", 0)
                       .attr("y2", height)
                       .attr("stroke-width", 0.7)
                       .attr("stroke", "black");



var circles = svgContainer.selectAll("circle")
                          .data(alEast)
                          .enter()
                          .append("circle");

var circleAttributes = circles.attr("cx", function (d) { return d.gamesAgainst; })
                              .attr("cy", function (d) { return d.hrsNum*5; })
                              .attr("r", function (d) { return d.radius; })
                              .style("fill", function(d) { return d.color; });


// var svgContainer = d3.select("chart").append("svg")
//                                      .attr("width", width)
//                                      .attr("height", height);


var text = svgContainer.selectAll("text")
                       .data(alEast)
                       .enter()
                       .append("text");

var textLabels = text
                    .attr("x", function(d) { return d.gamesAgainst; })
                    .attr("y", function(d) { return d.hrsNum*5; })
                    .text( function (d) { return d.opponent})
                    .attr("font-family", "Raleway")
                    .attr("font-size", "0.7em")
                    .attr("fill", "black");
