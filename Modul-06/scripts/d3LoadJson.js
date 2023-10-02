d3.json("/data/albums.json").then(function (data) {
  console.log(data);

  //Do all operations inside the callback function - otherwise the data will not be available

  /*
  d3.select("#data")
    .selectAll("p")
    .data(data)
    .enter()
    .append("p")
    .text(function (i) {
      return i.artistName + " - " + i.albumName;
    });*/

  /*Tidy-up a bit and move the code to a function outside the callback 
    - but that function then needs to be called within the context of the callback 
    with the data as an arguement in order to pass the data outside the callback scope*/

  showDataOnScreenFromJSON(data);

  /*Create an array of objects from the data and pass that to the function in order to display 
  custom info not readily available in the JSON data*/

  let cds = createCDObjects(data);
  console.log(cds);
  showDataOnScreenFromOBJ(cds);
});

//Function to display info from JSON
function showDataOnScreenFromJSON(input) {
  d3.select("#dataJSON").append("h2").text("JSON Data:");
  d3.select("#dataJSON")
    .selectAll("p")
    .data(input)
    .enter()
    .append("p")
    .text(function (i) {
      return i.artistName + " - " + i.albumName;
    });
}

//Function to display custom info from the array of objects
function showDataOnScreenFromOBJ(input) {
  d3.select("#dataOBJ").append("h2").text("Object Data:");
  d3.select("#dataOBJ")
    .selectAll("p")
    .data(input)
    .enter()
    .append("p")
    .text(function (i) {
      return i.artist + " - " + i.title + " - " + i.numberOfTracks;
    });
}

//Function to create an array of objects from the JSON data
function createCDObjects(input) {
  let cdObjects = [];
  for (let i in input) {
    let cd = new CD(
      input[i].artistName,
      input[i].albumName,
      input[i].trackList.length
    );
    cdObjects.push(cd);
  }
  return cdObjects;
}

//Constructor function for CD objects
function CD(artist, title, numberOfTracks) {
  this.artist = artist;
  this.title = title;
  this.numberOfTracks = numberOfTracks;
}
