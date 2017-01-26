var rover = {
  position: [0,0], //coordinates on the grid
  cardinalDirection: 'n', //compass direction
  relativeDirection: 'f', //forward or backwards
  travelDistance: 1 //number of spaces to be moved
};

//genArray: generates an array with all spaces initialized to "_" and "R" in the space where the rover is currently located.
//Takes one dimension as an argument
function genArray(dimension){

  var grid = [];

  for(i = 0; i < dimension; i++){  //make each element in 'grid' an empty array
    grid[i] = [];
    for(j = 0; j < dimension; j++){ //lnitialize each element in every array to '_'
      grid[i][j] = "_";
    }
  }

  grid[rover.position[0]][rover.position[1]] = "R"; //let "R" represent current rover position on map

  return grid;
}

//showMap: displays the grid with the rover's current position for the user.
//Takes a 2-dimension array as an argument
//it seemed more intuitive to display [0.0] as being in the bottom left-hand corner like in a cartesian plane
function showMap(grid){
  var storage = [];

  for(i = (grid.length - 1); i >= 0; i --){
    for(j = 0; j < (grid.length - 1); j++){
      storage.push(grid[j][i]);
    }
    console.log(storage);
    storage.splice(0, grid.length);
  }
}

//Forward: advances the rover forward in the direction and distance specified by the user
function Forward(rover, grid){
  grid[rover.position[0]][rover.position[1]] = "_";
  switch(rover.cardinalDirection) {

    case 'n':
      if ((parseInt(rover.position[1]) + (parseInt(rover.travelDistance)) >= 10 || (parseInt(rover.position[1]) + parseInt(rover.travelDistance)) < 0)){
        alert("You have gone too far!");
        grid[rover.position[0]][rover.position[1]] = "R";
        break;
      }
      else {
        rover.position[1] = (parseInt(rover.position[1]) + parseInt(rover.travelDistance));
        grid[rover.position[0]][rover.position[1]] = "R";
      }
      break;

    case 'e':
      if ((parseInt(rover.position[0]) + parseInt(rover.travelDistance)) >= 10 || (parseInt(rover.position[0]) + parseInt(rover.travelDistance)) < 0){
        alert("You have gone too far!");
        grid[rover.position[0]][rover.position[1]] = "R";
        break;
      }
      else {
      rover.position[0] = (parseInt(rover.position[0]) + parseInt(rover.travelDistance));
      grid[rover.position[0]][rover.position[1]] = "R";
      }
      break;

    case 's':
      if ((rover.position[1] - rover.travelDistance) >= 10 || (rover.position[1] - rover.travelDistance) < 0){
        alert("You have gone too far!");
        grid[rover.position[0]][rover.position[1]] = "R";
      }
      else {
        rover.position[1] = rover.position[1] - rover.travelDistance;
        grid[rover.position[0]][rover.position[1]] = "R";
        break;
      }
      break;

    case 'w':
      if ((rover.position[0] - rover.travelDistance) >= 10 || (rover.position[0] - rover.travelDistance) < 0){
        alert("You have gone too far!");
        grid[rover.position[0]][rover.position[1]] = "R";
        break;
      }
      else{
      rover.position[0] = (rover.position[0] - rover.travelDistance);
      grid[rover.position[0]][rover.position[1]] = "R";
      }
      break;
  }
}

//Reverse: moves the rover backwards by the distance specified by the user, opposite the specified direction
function Reverse(rover, grid){
  grid[rover.position[0]][rover.position[1]] = "_";
  switch(rover.cardinalDirection) {

    case 'n':
      if ((rover.position[1] - rover.travelDistance) >= 10 || (rover.position[1] - rover.travelDistance) < 0){
        alert("You have gone too far!");
        grid[rover.position[0]][rover.position[1]] = "R";
        break;
      }
      else {
        rover.position[1] = (rover.position[1] - rover.travelDistance);
        grid[rover.position[0]][rover.position[1]] = "R";
      }
      break;

    case 'e':
      if ((rover.position[0] - rover.travelDistance) >= 10 || ((rover.position[0] - rover.travelDistance)) < 0){
        alert("You have gone too far!");
        grid[rover.position[0]][rover.position[1]] = "R";
        break;
      }
      else {
      rover.position[0] = rover.position[0] - rover.travelDistance;
      grid[rover.position[0]][rover.position[1]] = "R";
      }
      break;

    case 's':
      if ((parseInt(rover.position[1]) + parseInt(rover.travelDistance)) >= 10 || (parseInt(rover.position[1]) + parseInt(rover.travelDistance)) < 0){
        alert("You have gone too far!");
        grid[rover.position[0]][rover.position[1]] = "R";
      }
      else {
        rover.position[1] = parseInt(rover.position[1]) + parseInt(rover.travelDistance);
        grid[rover.position[0]][rover.position[1]] = "R";
        break;
      }
      break;

    case 'w':
      if ((parseInt(rover.position[0]) + parseInt(rover.travelDistance)) >= 10 || (parseInt(rover.position[0]) + parseInt(rover.travelDistance)) < 0){
        alert("You have gone too far!");
        grid[rover.position[0]][rover.position[1]] = "R";
        break;
      }
      else{
      rover.position[0] = (parseInt(rover.position[0]) + parseInt(rover.travelDistance));
      grid[rover.position[0]][rover.position[1]] = "R";
      }
      break;
  }
}

//driver
var grid = genArray(10);

do{
    var proceed = 'n'; //control variable

    console.log("Current Location: " + rover.position);
    showMap(grid);

    rover.cardinalDirection = prompt("Enter New Direction (n/e/s/w): ");
    rover.relativeDirection = prompt("Forward or backwards (f/b)? ");
    rover.travelDistance = prompt("Enter Travel Distance: (number of spaces to move as an integer)");

    if (rover.relativeDirection == 'f' || rover.relativeDirection == 'F'){
      Forward(rover, grid);
      console.log("New Location: " + rover.position);
      showMap(grid);
    }
    else if (rover.relativeDirection == 'b' || rover.relativeDirection == 'B'){
      Reverse(rover, grid);
      console.log("New Location: " + rover.position);
      showMap(grid);
    }

    console.log("New Cardinal Direction: " + rover.cardinalDirection);
    console.log("New Relative Direction " + rover.relativeDirection);
    console.log("Travel Distance Settings: " + rover.travelDistance);
    var proceed = prompt("continue (y/n)? ");
}
while(proceed == 'Y' || proceed == 'y');

console.log("Session has ended.");
