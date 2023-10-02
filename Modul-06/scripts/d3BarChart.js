// Width, height and padding for svg bar elements
const w = 500;
const h = 100;
const padding = 2;

//Data to be displayed
const dataset = [
  5, 10, 13, 19, 21, 25, 2, 1, 12, 15, 20, 18, 17, 16, 18, 23, 18, 15, 13, 25,
];

//Create SVG element with width and height based on w and h variables
const svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

//Create bars based on data and append to svg
svg
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x", function (d, i) {
    return i * (w / dataset.length);
  })
  .attr("y", function (d) {
    return h - d * 4;
  })
  .attr("width", w / dataset.length - padding)
  .attr("height", function (d) {
    return d * 4;
  })
  .attr("fill", "black");
