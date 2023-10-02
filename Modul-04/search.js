let letterArray = ["e", "a", "d", "c", "b", "d"];

for (let i = 0; i < letterArray.length; i++) {
  if (letterArray[i] === "d") {
    console.log(letterArray[i] + " found on index: " + i + " in array");
    break;
  } else if (letterArray[i] === "a") {
    console.log(
      letterArray[i] +
        " found on index: " +
        i +
        " in array, a is the first letter of the alfabet"
    );
  } else {
    console.log("index " + i + " in array, does not fit criteria");
  }
}
/*
console.log("------------------While with no break----------");

let letterFound = false;

let i = 0;

while (i < letterArray.length && letterFound === false) {
  if (letterArray[i] === "d") {
    console.log(letterArray[i] + " found on index: " + i + " in array");
    letterFound = true;
  } else {
    console.log("index " + i + " in array, does not fit criteria");
  }
  i++;
}

console.log("------------------for with no break----------");

let letterFound2 = false;

for (let i = 0; i < letterArray.length; i++) {
  if (letterFound2 !== true) {
    if (letterArray[i] === "d") {
      console.log(letterArray[i] + " found on index: " + i + " in array");
      letterFound2 = true;
    } else {
      console.log("index " + i + " in array, does not fit criteria");
    }
  }
  console.log(i);
}

//let letterArray2 = ["a", "a", "d", "h", "b", "d", "y", "u"];

findStuff("e");
findStuff("b");
findStuff("a");

function findStuff(letterToFind) {
  for (let i = 0; i < letterArray.length; i++) {
    if (letterArray[i] === letterToFind) {
      console.log(letterArray[i] + " found on index: " + i + " in array");
      break;
    } else {
      console.log("index " + i + " in array, does not fit criteria");
    }
  }
}
*/
