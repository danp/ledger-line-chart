var balances = entries.map(function(d) { return d.balance });

var w = 800,
h = 500,
p = 50,
y = d3.scale.linear().domain([d3.min(balances), d3.max(balances)]).range([0 + p, h - p]),
x = d3.scale.linear().domain([0, balances.length]).range([0 + p, w - p]);

var vis = d3.select("body").
  append("svg:svg").
  attr("width", w).
  attr("height", h);

var group = vis.append("svg:g").
  attr("transform", "translate(0, " + h + ")");

var line = d3.svg.line().
  x(function(d,i) { return x(i) }).
  y(function(d)   { return -1 * y(d.balance) });

group.append("svg:path").
  attr("d", line(entries));

group.append("svg:line").
  attr("x1", x(0)).
  attr("y1", -1 * y(0)).
  attr("x2", x(w)).
  attr("y2", -1 * y(0));

group.append("svg:line").
  attr("x1", x(0)).
  attr("y1", -1 * y(0)).
  attr("x2", x(0)).
  attr("y2", -1 * y(d3.max(balances)));

group.selectAll(".xLabel").
  data(x.ticks(5)).
  enter().append("svg:text").
  attr("class", "xLabel").
  text(function(d) { return entries[d].date; }).
  attr("x", function(d,i) { return x(d) }).
  attr("y", 0).
  attr("text-anchor", "middle")

group.selectAll(".yLabel").
  data(y.ticks(6)).
  enter().append("svg:text").
  attr("class", "yLabel").
  text(String).
  attr("x", 0).
  attr("y", function(d) { return -1 * y(d) }).
  attr("text-anchor", "right").
  attr("dy", 4)

group.selectAll(".xTicks").
  data(x.ticks(5)).
  enter().append("svg:line").
  attr("class", "xTicks").
  attr("x1", function(d) { return x(d) }).
  attr("y1", -1 * y(0)).
  attr("x2", function(d) { return x(d) }).
  attr("y2", -1 * y(d3.max(balances)))

group.selectAll(".yTicks").
  data(y.ticks(5)).
  enter().append("svg:line").
  attr("class", "yTicks").
  attr("y1", function(d) { return -1 * y(d) }).
  attr("x1", x(-1)).
  attr("y2", function(d) { return -1 * y(d) }).
  attr("x2", x(0))
