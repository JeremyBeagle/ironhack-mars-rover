var rover1= {
  name: "R1",
  position: [0,0], //coordinates on the grid
  direction: 'n', //compass direction
};

var rover2= {
  name: "R2",
  position: [9,9],
  direction: 's',
};

//randInteger: generates a random integer
function randInteger() {
return (parseInt(Math.random() * 10));
}

//genObstacle: generates one obstacle and places it in a random location on the grid
function genObstacle(grid) {
grid[randInteger()][randInteger()] = "X";
}

//genArray: generates a 10 x 10 array
//At least five obstacles are randomly generated, placed, and set to "X"
//Open spaces are set to "_"
//The Rover's current position is set to "R"
//Takes one dimension as an argument
function genArray(dimension){

  var grid = [];

  for(var i = 0; i < dimension; i++){  //make each element in 'grid' an empty array
    grid[i] = [];
    for(var j = 0; j < dimension; j++){ //lnitialize each element in every array to '_'
      grid[i][j] = "_";
    }
  }

  //generate random number greater than 4 to represent the number of obstacles
  var randNumber = randInteger();
  while (randNumber < 5) {
    randNumber = randInteger();
  }

  for (i = 0; i <= randNumber; i++) {
    genObstacle(grid);
  }

  grid[rover1.position[0]][rover1.position[1]] = rover1.name; //let "R" represent current rover position on map
  grid[rover2.position[0]][rover2.position[1]] = rover2.name;

  return grid;
}

//showMap: displays the grid with the rover's current position and the position of the obstacles.
//Takes a 2-dimensional array as an argument
//it seemed more intuitive to display [0.0] as being in the bottom left-hand corner like in a cartesian plane
function showMap(grid){
  var storage = [];

  for(var i = (grid.length-1); i >= 0; i --){
    for(var j = 0; j <= (grid.length-1); j++){
      storage.push(grid[j][i]);
    }
    console.log(storage);
    storage.splice(0, grid.length);
  }
}

//Forward: advances the rover forward one space in the specified direction
function Forward(rover, grid){
  grid[rover.position[0]][rover.position[1]] = "_";

  switch(rover.direction) {

    case 'n':
      if ((parseInt(rover.position[1]) + 1 >= 10)){
        rover.position[1] = 0;
        grid[rover.position[0]][rover.position[1]] = rover.name;
        break;
      }
      else {
        if (grid[rover.position[0]][rover.position[1] + 1] == "X" || grid[rover.position[0]][rover.position[1] + 1] != "_" ) {
          alert("You've encountered an obstacle!");
          grid[rover.position[0]][rover.position[1]] = rover.name;
          return -1; //flags the program to stop processing further commands
        }
        else {
        rover.position[1]++;
        grid[rover.position[0]][rover.position[1]] = rover.name;
        return 1;
        }
      }
      break;

    case 'e':
      if ((parseInt(rover.position[0]) + 1 >= 10)){
        rover.position[0] = 0;
        grid[rover.position[0]][rover.position[1]] = rover.name;
        break;
      }
      else {
        if (grid[rover.position[0] + 1][rover.position[1]] == "X" || grid[rover.position[0] + 1][rover.position[1]] != "_") {
          alert("You've encountered an obstacle!");
          grid[rover.position[0]][rover.position[1]] = rover.name;
          return -1;
        }
        else {
          rover.position[0]++;
          grid[rover.position[0]][rover.position[1]] = rover.name;
          return 1;
        }
      }
      break;

    case 's':
      if ((rover.position[1] - 1 < 0)){
        rover.position[1] = 9;
        grid[rover.position[0]][rover.position[1]] = rover.name;
      }
      else {
        if (grid[rover.position[0]][rover.position[1] - 1] == "X" || grid[rover.position[0]][rover.position[1] - 1] != "_") {
          alert("You've encountered an obstacle!");
          grid[rover.position[0]][rover.position[1]] = rover.name;
          return -1;
        }
        else {
          rover.position[1]--;
          grid[rover.position[0]][rover.position[1]] = rover.name;
          return 1;
        }
        break;
      }
      break;

    case 'w':
      if ((rover.position[0] - 1 < 0)){
        rover.position[0] = 9;
        grid[rover.position[0]][rover.position[1]] = rover.name;
        break;
      }
      else{
        if (grid[rover.position[0] - 1][rover.position[1]] == "X" || grid[rover.position[0] - 1][rover.position[1]] != "_") {
          alert("You've encountered an obstacle!");
          grid[rover.position[0]][rover.position[1]] = rover.name;
          return -1;
        }
        else {
          rover.position[0]--;
          grid[rover.position[0]][rover.position[1]] = rover.name;
          return 1;
        }
      }
      break;
  }
}

//Reverse: moves the rover backwards one space in the specified direction
function Reverse(rover, grid){
  grid[rover.position[0]][rover.position[1]] = "_";
  switch(rover.direction) {

    case 'n':
      if ((rover.position[1] - 1 < 0)){
        rover.position[1] = 9;
        grid[rover.position[0]][rover.position[1]] = rover.name;
        break;
      }
      else {
        if (grid[rover.position[0]][rover.position[1] - 1] == "X" || grid[rover.position[0]][rover.position[1] - 1] != "_") {
          alert("You've encountered an obstacle!");
          grid[rover.position[0]][rover.position[1]] = rover.name;
          return -1;
        }
        else {
          rover.position[1]--;
          grid[rover.position[0]][rover.position[1]] = rover.name;
          return 1;
        }
      }
      break;

    case 'e':
      if ((rover.position[0] - 1 < 0)){
        rover.position[0] = 9;
        grid[rover.position[0]][rover.position[1]] = rover.name;
        break;
      }
      else {
        if (grid[rover.position[0] - 1][rover.position[1]] == rover.name || grid[rover.position[0] - 1][rover.position[1]] != "_") {
          alert("You've encountered an obstacle!");
          grid[rover.position[0]][rover.position[1]] = rover.name;
          return -1;
        }
        else {
          rover.position[0]--;
          grid[rover.position[0]][rover.position[1]] = rover.name;
          return 1;
        }
      }
      break;

    case 's':
      if ((parseInt(rover.position[1]) + 1 >= 10)){
        rover.position[1] = 0;
        grid[rover.position[0]][rover.position[1]] = rover.name;
      }
      else {
        if (grid[rover.position[0]][rover.position[1] + 1] == "X" || grid[rover.position[0]][rover.position[1] + 1] != "_") {
          alert("You've encountered an obstacle!");
          grid[rover.position[0]][rover.position[1]] = rover.name;
          return -1;
        }
        else {
          rover.position[1]++;
          grid[rover.position[0]][rover.position[1]] = rover.name;
          return 1;
        }
        break;
      }
      break;

    case 'w':
      if ((parseInt(rover.position[0]) + 1 >= 10)){
        rover.position[0] = 0;
        grid[rover.position[0]][rover.position[1]] = rover.name;
        break;
      }
      else{
        if (grid[rover.position[0] + 1][rover.position[1]] == "X" || grid[rover.position[0] + 1][rover.position[1]] != "_") {
          alert("You've encountered an obstacle!");
          grid[rover.position[0]][rover.position[1]] = rover.name;
          return -1;
        }
        else {
          rover.position[0]++;
          grid[rover.position[0]][rover.position[1]] = rover.name;
          return 1;
        }
      }
      break;
  }
}

//turnRight: rotates the rover's orientation 90 degrees clockwise
function turnRight(rover1){
  switch(rover1.direction){
    case 'n':
    rover1.direction = 'e';
    break;

    case 'e':
    rover1.direction = 's';
    break;

    case 's':
    rover1.direction = 'w';
    break;

    case 'w':
    rover1.direction = 'n';
    break;
  }
}

//turnLeft: rotates the rover's orientation 90 degrees counterclockwise
function turnLeft(rover1){
  switch(rover1.direction){
    case 'n':
    rover1.direction = 'w';
    break;

    case 'e':
    rover1.direction = 'n';
    break;

    case 's':
    rover1.direction = 'e';
    break;

    case 'w':
    rover1.direction = 's';
    break;
  }
}

//driver
var grid = genArray(10);

console.log("                                                                           ");
console.log("Rover1 Starting Location: " + rover1.position +"   Facing: " + rover1.direction);
console.log("Rover2 Starting Location: " + rover2.position +"   Facing: " + rover2.direction);
showMap(grid);
console.log("                                                                           ");

do {

      var proceed = 'n'; //control variable for do-while loop
      var r1Commands = prompt("Enter Rover1 Commands (f / b / l / r): ");
      var r2Commands = prompt("Enter Rover2 Commands (f / b / l / r): ");
      var crash = 1; //signals a crash and ceases processing further commands
                   //'-1' signals a crash and '1' signals the absence of a crash

      for (var i = 0; i < r1Commands.length && crash == 1; i++){ //for loop used to process the string of commands
        if (r1Commands[i] == "f" ) {
          crash = Forward(rover1, grid);
        }
        else if (r1Commands[i] == "b" ) {
          crash = Reverse(rover1, grid);
        }
        else if (r1Commands[i] == "l" ) {
          turnLeft(rover1);
        }
        else if (r1Commands[i] == "r" ){
          turnRight(rover1);
        }
      }

      for (var i = 0; i < r2Commands.length && crash == 1; i++){ //for loop used to process the string of commands
        if (r2Commands[i] == "f" ) {
          crash = Forward(rover2, grid);
        }
        else if (r2Commands[i] == "b" ) {
          crash = Reverse(rover2, grid);
        }
        else if (r2Commands[i] == "l" ) {
          turnLeft(rover2);
        }
        else if (r2Commands[i] == "r" ){
          turnRight(rover2);
        }
      }

    console.log("Rover1 Location: " + rover1.position +"   Facing: " + rover1.direction);
    console.log("Rover2 Location: " + rover2.position +"   Facing: " + rover2.direction); //provide updates to the user
    showMap(grid);
    console.log("                                                                           ");

    while (proceed == 'n') { //test for valid input
      var proceed = prompt("Continue Entering Commands? (y/n)");

      if (proceed != 'y' && proceed != 'n') {
        alert("Invalid input!");
        proceed = 'n';
      }
      else if (proceed == 'n') {
        break;
      }
    }

}
while(proceed == 'y');

console.log("Session has ended.");
