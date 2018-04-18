// Level 3
// Now do this thing.
// https://en.wikipedia.org/wiki/Golden_spiral#/media/File:Fibonacci_spiral_34.svg
// (fyi idk how to do it)



// like this i guess lol but dynamic and stuff
//
//
//
//        ****
//    *          *
//  *              *
// *                 *
//
//                    *
//       ****
//     *      *
//    *    *  *       *
//    *     **       *
//                  *
//      *        *
//         ****
//

//https://en.wikipedia.org/wiki/Golden_ratio
// Learning about polar coordinates
// https://en.wikipedia.org/wiki/Polar_coordinate_system


//create mathematical constants
var phi = (1 + Math.sqrt(5)) / 2; //1.61
var b = Math.log(phi) / 90;

//https://en.wikipedia.org/wiki/Polar_coordinate_system#Converting_between_polar_and_Cartesian_coordinates
//process in for loop
//calculate r
//store x and y
//convert to cartesian coordinates

function createCoordinates(initialRadius, numberOfStars) {
  var poCo = [];
  for (var i = 1; i <= numberOfStars; i++) {
    var radial = r(initialRadius, i); //i is theta
    var cartesianCoords = toCartCoord(radial, i);
    poCo.push({
      x: cartesianCoords.x * 1,
      y: cartesianCoords.y * 1
    });
  }
  return poCo;
}

function r(a, theta){
  return a * Math.exp((b*theta));
}

function toCartCoord(radialCoordinate, angularCoordinate){
  var angularCoordinateInRadians = toRadians(angularCoordinate);
  var x = radialCoordinate * Math.cos(angularCoordinateInRadians);
  var y = radialCoordinate * Math.sin(angularCoordinateInRadians);
  return {x: x, y: y};
}


function toRadians (angle) {
  return angle * (Math.PI / 180);
}

function putCoordinatesInGrid(numberOfStars, coordinates){
  var gridSize = 100;
  var grid = createGrid(gridSize);

  for (var i = 0; i < numberOfStars; i++) {
    var coordinate = coordinates[i];
    var x = Math.round(coordinate.x, 0) + (gridSize/2);
    var y = Math.round(coordinate.y, 0) + (gridSize/2);
    if(x < 0 || y < 0) break; //silent error handling
    grid[x][y] = "*";
  }
  return grid;
}

function createGrid(size){
  return new Array(size).fill(null).map(()=>new Array(size).fill(null));
}

function printGridToScreen(grid){
  //row
  for(var i = 0; i < grid.length; i++){
    var line = "";
    
    //specific cell
    for(var j = 0; j < grid.length; j++){
      if(grid[i][j] === "*"){
        line = line + "❤️"; //❤
      }
      else{
        line = line + " ";
      }
    }

    console.log(line);
  }
}

//you need to zoom out
function createGoldenSpiral(initialRadius, numberOfStars) {
  var coordinates = createCoordinates(initialRadius, numberOfStars);
  var grid = putCoordinatesInGrid(numberOfStars, coordinates);
  printGridToScreen(grid);
  console.log("The end <3");
}

//calling the function
var initialRadius = 6;
var amountOfDegrees = 480;
createGoldenSpiral(initialRadius, amountOfDegrees);


