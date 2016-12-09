var medianLine = []

var median =

          var medianX = d3.median(inputData, function(d) { return d.xVal; }),
          var medianY = d3.median(inputData, function(d) { return d.yVal; }),
          medianLine.push({x: medianX, y: medianY});


var line = d3.line()
	.x(function(d) { return xScale(d.medianX); })
  .y(function(d) { return yScale(d.medianY); });

var drawLine = svg.append("path")
  	.datum(medianLine)
    		.attr("class","line")
        .attr("d",line)
        .attr("fill","none")
        .attr("stroke","steelblue")
        .attr("stroke-width",2);
