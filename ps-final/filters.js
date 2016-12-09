d3.select("#ortiz")
        .on("click", function() {
          var ortiz = data.filter( function(d) {
          return d.player == "David Ortiz"
                                                });

          d3.select(this).style("font-weight", "bold");

          draw(ortiz);

        });

d3.select("#pujols")
        .on("click", function() {
          var pujols = data.filter( function(d) {
          return d.player == "Albert Pujols"
                                                });

          d3.select(this).style("font-weight", "bold");

          draw(pujols);

        });

d3.select("#sosa")
        .on("click", function() {
          var sosa = data.filter( function(d) {
          return d.player == "Sammy Sosa"
                                                });



          d3.select(this).style("font-weight", "bold");

          draw(sosa);

        });

d3.select("#ramirez")
        .on("click", function() {
          var ramirez = data.filter( function(d) {
          return d.player == "Manny Ramirez"
                                                });



          d3.select(this).style("font-weight", "bold");

          draw(ramirez);

        });
