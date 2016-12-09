var width = 500;
var height = 500;
var radius = 5;

var margin = { top:10, bottom:60, left:25, right:10 }

// Color functions
var getColor = function(hue, saturation, lightness, alpha) {
   var colorString = "hsla(" +
     hue + ", "
     + saturation + "%,"
     + lightness  + "%,"
     + alpha + ")";
   return colorString;
 }; //closing getColor

var makeColor = function(d) {
   // var hue = d.hrsNum;
   return getColor(210, 70, 50, 0.4);
 }; //closing makeColor

//drawing data from CSV file
d3.csv("dominicanSluggers.csv", function (data) {

draw(data);

var buttonsNest = d3.nest()
                    .key( function(d) { return d.player })
                    .entries(data);

d3.select(".action_container")
  .selectAll("button")
  .data(buttonsNest)
  .enter()
  .append("button")
  .style("background-color", makeColor)
  .html( function(d) { return d.key } )
  .on("click", function(d) {
    var dataFiltered = data.filter( function (e) { return d == e.player });
    draw(dataFiltered)
    console.log(data)
  });


}) //closing d3.csv


var draw = function(dataset) {

   var svg = d3.select("svg")
                     .attr("width", width)
                     .attr("height", height);

   var scaleHRs = d3.scaleLinear()
                   .domain([0, 75])
                   .range([height - margin.bottom, margin.top]);

   var scaleGames = d3.scaleLinear()
                     .domain([270, 0])
                     .range([width - margin.right, margin.left ]);

   var axisBottom = d3.axisBottom(scaleGames).ticks(2)
                                            .tickSize(- height + margin.bottom + margin.top)
                                            .tickSizeOuter(0)
                                            .tickPadding(8);

   var axisLeft = d3.axisLeft(scaleHRs).ticks(3)
                                      .tickSizeInner(- width + margin.left + margin.right)
                                      .tickSizeOuter(0)
                                      .tickPadding(5);

   svg.append('g')
     .attr("class", "ticksLabel")
     .attr("transform", "translate(0," + (height - margin.bottom) + ")")
     .call(axisBottom);

   svg.append('g')
     .attr("class", "ticksLabel")
     .attr("transform", "translate(" + margin.left + ",0)")
     .call(axisLeft);

   svg.append("text")
     .attr("transform", "rotate(-90)")
     .attr("x", 0 - (height /12))
     .attr("y", margin.left/1.25)
     .style("text-anchor", "middle")
     .attr("class", "axisLabel")
     .text("hrs");

   svg.append("text")
     .attr("x", width/1.03)
     .attr("y", height - margin.bottom/1.3)
     .style("text-anchor", "end")
     .attr("class", "axisLabel")
     .text("games against");

   function gamesToX(d) {
     return scaleGames(d.gamesAgainst);
                         }

   function hrsToY(d) {
     return scaleHRs(d.hrsNum);
                       }

   function radiusToR(d) {
     return d.radius;
                          }

   var scatterPlot = svg.selectAll("circle")
                        .data(dataset)
                        .enter()
                        .append("circle");

   var attributes = scatterPlot.attr("cx", gamesToX)
                               .attr("cy", hrsToY)
                               .attr("r", radius)
                               .style("stroke", "black")
                               .style("stroke-width", "0.2pt")
                               .style("fill", makeColor);

   var tooltip = d3.select(".chart_container")
                                  .append("div")
                                  .attr("class", "tooltip")
                                  .style("opacity", 0);

   var mouseOut = function(d) {
                               tooltip.transition()
                                      .duration(50)
                                      .style("opacity", 0);
                              };

   var mouseOver = function(d) {
                                   tooltip.transition()
                                          .duration(150)
                                          .style("opacity", 0.9);
                                   tooltip.html("<b>" + d.player + "</b>"
                                               + "<br/> vs. "
                                               + d.opponent
                                               + "<br/> HR: "
                                               + d.hrsNum
                                               + " G: "
                                               + d.gamesAgainst)
                                           .style("left", (d3.event.pageX + 10) + "px")
                                           .style("top", (d3.event.pageY - 28) + "px");
                                         };

   var tooltipAnimation = scatterPlot.on("mouseover", mouseOver)
                                    .on("mouseout", mouseOut);


} //closing draw function
