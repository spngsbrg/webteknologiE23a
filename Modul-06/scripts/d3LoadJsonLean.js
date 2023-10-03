d3.json("/data/albums.json").then(function (data) {
  console.log(data);
  displayData(data, false);
  let cds = createCDObjects(data);
  console.log(cds);
  displayData(cds, true);
});

function displayData(dataInput, isObj) {
  let divId = "";
  let divText = "";

  if (isObj) {
    divId = "#dataOBJ";
    divText = "Object Data:";
  } else {
    divId = "#dataJSON";
    divText = "JSON Data:";
  }
  d3.select(divId).append("h2").text(divText);
  d3.select(divId)
    .selectAll("p")
    .data(dataInput)
    .enter()
    .append("p")
    .text(function (album) {
      if (isObj) {
        return (
          album.artist + " - " + album.title + " - " + album.numberOfTracks
        );
      } else {
        return (
          album.artistName +
          " - " +
          album.albumName +
          " - " +
          album.trackList.length
        );
      }
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
