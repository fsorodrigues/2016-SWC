var width = 500
var height = 500
var radius = 5

d3.csv("ortiz.csv", function (mlb) {

var getColor = function(hue, saturation, lightness, alpha) {
  var colorString = "hsla(" +
    hue + ", "
    + saturation + "%,"
    + lightness  + "%,"
    + alpha + ")";
  return colorString;
};

var makeColor = function(d) {
  var hue = d.hrsNum;
  var lightness = d.gamesAgainst / 5;
  return getColor(hue, 90, lightness, 0.4);
}

var svg = d3.select(".chart_container").append("svg")
                             .attr("width", width)
                             .attr("height", height);

var scaleHRs = d3.scaleLinear()
                 .domain([0,100])
                 .range([height, 0]);

var scaleGames = d3.scaleLinear()
                    .domain([0,300])
                    .range([0,width]);

var axisBottom = d3.axisBottom(scaleGames).ticks(8)
                                          .tickSize(-height)
                                          .tickSizeOuter(0)
                                          .tickPadding(7);

var axisLeft = d3.axisLeft(scaleHRs).ticks(4)
                                    .tickSizeInner(-width)
                                    .tickSizeOuter(0)
                                    .tickPadding(7);

svg.append('g')
  .attr("class", "ticksLabel")
  .attr("transform", "translate(0," + height  + ")")
  .call(axisBottom);

svg.append('g')
  .attr("class", "ticksLabel")
  .attr("transform", "translate(0,0)")
  .call(axisLeft);

svg.append("text")
  .attr("y", width / 2)
  .attr("x", - 30)
  .style("text-anchor", "middle")
  .attr("class", "axisLabel")
  .text("HRs");

svg.append("text")
  .attr("y", height + 40)
  .attr("x", height / 2)
  .style("text-anchor", "middle")
  .attr("class", "axisLabel")
  .text("Games Against");


function gamesToX(d) {
  return scaleGames(d.gamesAgainst);
}

function hrsToY(d) {
  return scaleHRs(d.hrsNum);
}

function radiusToR(d) {
  return d.radius;
}

var scatterPlots = svg.selectAll("circle")
                      .data(mlb)
                      .enter()
                      .append("circle");

var attributes = scatterPlots.attr("cx", gamesToX)
                             .attr("cy", hrsToY)
                             .attr("r", radius)
                             .style("stroke", "black")
                             .style("stroke-width", "0.2pt")
                             .style("fill", makeColor);

 var tooltip = d3.select(".chart_container").append("div")
                                .attr("class", "tooltip")
                                .style("opacity", 0);


var tooltipAnimation = scatterPlots.on("mouseover", function(d) {
                                            tooltip.transition()
                                                   .duration(150)
                                                   .style("opacity", 0.9);
                                            tooltip.html("vs. "
                                                        + d.opponent
                                                        + "<br/> HR: "
                                                        + d.hrsNum
                                                        + " G: "
                                                        + d.gamesAgainst)
                                                    .style("left", (d3.event.pageX + 10) + "px")
                                                    .style("top", (d3.event.pageY - 28) + "px");
})

                                    .on("mouseout", function(d) {
                                             tooltip.transition()
                                                    .duration(50)
                                                    .style("opacity", 0);
})

})
