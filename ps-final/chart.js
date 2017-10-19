var width = 650;
var height = 600;
var radius = 5;

var margin = { "top": 50,
               "bottom": 50,
               "left": 100,
               "right": 0 };

// creating svg canvas
var svg = d3.select("svg")
              // .append("svg")
              .attr("height", height)
              .attr("width", width)
              .append("g")
              .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var selectedPlayer;
var scaleX;
var scaleY;
var maxX;
var maxY;
var initialData; // global variable to access data
var data; // global variable to access data

var tooltip = d3.select(".chart_container")
                  .append("div")
                  .attr("class", "tooltip")
                  .style("opacity", 0);

d3.csv("dominicanSluggers.csv", function (dataIn) {

  // parsing for number output
  dataIn.forEach(function(d){
      d.hrsNum = +d.hrsNum;
      d.gamesAgainst = +d.gamesAgainst
  });

  initialData = dataIn;

  var nestedData = d3.nest()
                      .key( function(d) { return d.player })
                      .entries(dataIn);

  data = nestedData; // passing data to global variable

  // appending buttons
  buttons(nestedData);

  // setting dynamic scales for axis
  maxX = getMaxX(dataIn);
  scaleX = d3.scaleLinear()
               .domain([0, maxX])
               .range([0, 500])
              //  .nice(); // making scale end in round number

  maxY = getMaxY(dataIn);
  scaleY = d3.scaleLinear()
              .domain([maxY,0])
              .range([0, 500])
              // .nice(); // making scale end in round number

  // calling axis
  xAxis(scaleX);
  yAxis(scaleY);

  // calling axis' labels and source
  xLabel();
  yLabel();
  source();

  drawPlot(dataIn);

});

function getMaxX(dataset) {
      var xMax = d3.max(dataset, function(d) { return d.hrsNum });
      return Math.ceil(xMax / 10) * 10
}

function getMaxY(dataset) {
      var yMax = d3.max(dataset, function(d) { return d.gamesAgainst });
      return Math.round(yMax / 100) * 100;
}

function buttons(dataset) {

  var buttons = d3.select(".action_container")
                    .selectAll("button")
                    .data(dataset)
                    .enter()
                    .append("button")
                    .attr("value", function(d) { return d.key } )
                    .attr("class", "not-clicked")
                    .style("background", _colorFill)
                    .on("click", buttonClicked)
                    .html( function(d) { return d.key } )

  var reset = d3.select(".action_container")
                 .append("button")
                 .attr("class", "clicked")
                 .attr("value", "DataIn")
                 .on("click", resetChart)
                 .html("All players");

};

function resetChart() {
    drawPlot(initialData);

    d3.selectAll("button")
      .attr("class", "not-clicked")

    d3.select(this)
        .attr("class", "clicked");
};

// defining functions to create labels for axis

function xLabel() {
          svg.append("text")
              .attr("x", (width - 2 * margin.left - 1.5 * margin.right))
              .attr("y", ((height - margin.top - margin.bottom) * 1.08))
              .attr("class", "label")
              .attr("text-anchor", "middle")
              .text("Home Runs");
};

function yLabel() {
          svg.append("text")
               .attr("transform", "rotate(270)")
               .attr("x", -50)
               .attr("y", -40)
               .attr("class", "label")
               .attr("text-anchor", "middle")
               .text("Games Against");
};

function source() {
        svg.append("text")
             .attr("x", 0)
             .attr("y", ((height - margin.top - margin.bottom) * 1.08))
             .attr("class", "source")
             .attr("text-anchor", "left")
             .text("source: baseball-reference.com");
}

function drawPlot(dataset) {

  var scatterPlot = svg.selectAll("circle")
                        .data(dataset);

      scatterPlot.transition()
                    .duration(500)
                    .ease(d3.easeSin)
                 .attr("cx", function(d) { return scaleX(d.hrsNum) })
                 .attr("cy", function(d) { return scaleY(d.gamesAgainst) })
                 .attr("r", radius)
                 .attr("fill", colorFill)
                //  .attr("fill", function(d) { return makeColor(d.hrsNum, (d.gamesAgainst/2)) })
                 .attr("opacity", .8);

      scatterPlot.enter()
                  .append("circle")
                  .attr("cx", function(d) { return scaleX(d.hrsNum) })
                  .attr("cy", function(d) { return scaleY(d.gamesAgainst) })
                  .attr("r", 0)
                  .on("mouseover", mouseOver)
                  .on("mouseout", mouseOut)
                    .transition()
                    .duration(500)
                    .ease(d3.easeSin)
                  .attr("r", radius)
                  .attr("fill", colorFill)
                  // .attr("fill", function(d) { return makeColor(d.hrsNum, (d.gamesAgainst/2)) })
                  .attr("opacity", .8);

      scatterPlot.exit()
                  .transition()
                  .duration(300)
                  .ease(d3.easeSin)
                .attr("r", 0)
               .remove();

};

function xAxis(scale) {

    var xAxis = d3.axisBottom(scale)
                   .ticks(5)
                   .tickSizeInner(- height + margin.bottom + margin.top )
                   .tickSizeOuter(0)
                   .tickPadding(8);

    svg.append("g")
        .attr("transform", "translate(0," + (height - margin.bottom - margin.top)  + ")" )
        .attr("class", "xAxis")
        .call(xAxis);

};

function yAxis(scale) {

     var yAxis = d3.axisLeft(scale)
                    .ticks(5)
                    .tickSizeInner(- (width - 1.5 * margin.left) )
                    .tickSizeOuter(0)
                    .tickPadding(8);

     svg.append("g")
         .attr("transform", "translate(0,0)")
         .attr("class", "yAxis")
         .call(yAxis);
};

function updateData(newPlayer) {
  return data.filter(function(d){ return d.key == newPlayer })[0].values
};

function buttonClicked() {
  selectValue = d3.select(this)
                   .property("value");
  newData = updateData(selectValue);
  drawPlot(newData);

  d3.selectAll("button")
    .attr("class", "not-clicked")

  d3.select(this)
      .attr("class", "clicked");

};

function mouseOver(d) {

        tooltip.transition()
               .duration(300)
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

function mouseOut() {
        tooltip.transition()
               .duration(50)
               .style("opacity", 0);
                           };

// Color functions
function getColor(hue, saturation, lightness, alpha) {
   var colorString = "hsla(" +
     hue + ", "
     + saturation + "%,"
     + lightness  + "%,"
     + alpha + ")";
   return colorString;
 };

 function makeColor(h,s) {
   return getColor(h, s, 50, 1)
 };

function colorFill(d) { if (d.player == "David Ortiz") {
                               return "#E81E3F"
                   } else if (d.player == "Manny Ramirez") {
                               return "#97D13A";
                   } else if (d.player == "Sammy Sosa") {
                                 return "#FFFB4E";
                   } else if (d.player == "Albert Pujols") {
                                 return "#49C1DA";
                   } else {      return "#FFFFFF";
                     }
                  };

function _colorFill(d) {
                        var player = d.player ? d.player : d.key;
                        if (player == "David Ortiz") {
                               return "#E81E3F"
                   } else if (player == "Manny Ramirez") {
                               return "#97D13A";
                   } else if (player == "Sammy Sosa") {
                                 return "#FFFB4E";
                   } else if (player == "Albert Pujols") {
                                 return "#49C1DA";
                   } else {      return "#FFFFFF";
                     }
                  };
