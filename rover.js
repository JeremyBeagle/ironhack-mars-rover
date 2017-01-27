  var rover = {
    position: [0,0], //coordinates on the grid
    direction: 'n', //compass direction
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

    grid[rover.position[0]][rover.position[1]] = "R"; //let "R" represent current rover position on map

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
          grid[rover.position[0]][rover.position[1]] = "R";
          break;
        }
        else {
          if (grid[rover.position[0]][rover.position[1] + 1] == "X") {
            alert("You've encountered an obstacle!");
            grid[rover.position[0]][rover.position[1]] = "R";
            return -1; //flags the program to stop processing further commands
          }
          else {
          rover.position[1]++;
          grid[rover.position[0]][rover.position[1]] = "R";
          return 1;
          }
        }
        break;

      case 'e':
        if ((parseInt(rover.position[0]) + 1 >= 10)){
          rover.position[0] = 0;
          grid[rover.position[0]][rover.position[1]] = "R";
          break;
        }
        else {
          if (grid[rover.position[0] + 1][rover.position[1]] == "X") {
            alert("You've encountered an obstacle!");
            grid[rover.position[0]][rover.position[1]] = "R";
            return -1;
          }
          else {
            rover.position[0]++;
            grid[rover.position[0]][rover.position[1]] = "R";
            return 1;
          }
        }
        break;

      case 's':
        if ((rover.position[1] - 1 < 0)){
          rover.position[1] = 9;
          grid[rover.position[0]][rover.position[1]] = "R";
        }
        else {
          if (grid[rover.position[0]][rover.position[1] - 1] == "X") {
            alert("You've encountered an obstacle!");
            grid[rover.position[0]][rover.position[1]] = "R";
            return -1;
          }
          else {
            rover.position[1]--;
            grid[rover.position[0]][rover.position[1]] = "R";
            return 1;
          }
          break;
        }
        break;

      case 'w':
        if ((rover.position[0] - 1 < 0)){
          rover.position[0] = 9;
          grid[rover.position[0]][rover.position[1]] = "R";
          break;
        }
        else{
          if (grid[rover.position[0] - 1][rover.position[1]] == "X") {
            alert("You've encountered an obstacle!");
            grid[rover.position[0]][rover.position[1]] = "R";
            return -1;
          }
          else {
            rover.position[0]--;
            grid[rover.position[0]][rover.position[1]] = "R";
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
          grid[rover.position[0]][rover.position[1]] = "R";
          break;
        }
        else {
          if (grid[rover.position[0]][rover.position[1] - 1] == "X") {
            alert("You've encountered an obstacle!");
            grid[rover.position[0]][rover.position[1]] = "R";
            return -1;
          }
          else {
            rover.position[1]--;
            grid[rover.position[0]][rover.position[1]] = "R";
            return 1;
          }
        }
        break;

      case 'e':
        if ((rover.position[0] - 1 < 0)){
          rover.position[0] = 9;
          grid[rover.position[0]][rover.position[1]] = "R";
          break;
        }
        else {
          if (grid[rover.position[0] - 1][rover.position[1]] == "X") {
            alert("You've encountered an obstacle!");
            grid[rover.position[0]][rover.position[1]] = "R";
            return -1;
          }
          else {
            rover.position[0]--;
            grid[rover.position[0]][rover.position[1]] = "R";
            return 1;
          }
        }
        break;

      case 's':
        if ((parseInt(rover.position[1]) + 1 >= 10)){
          rover.position[1] = 0;
          grid[rover.position[0]][rover.position[1]] = "R";
        }
        else {
          if (grid[rover.position[0]][rover.position[1] + 1] == "X") {
            alert("You've encountered an obstacle!");
            grid[rover.position[0]][rover.position[1]] = "R";
            return -1;
          }
          else {
            rover.position[1]++;
            grid[rover.position[0]][rover.position[1]] = "R";
            return 1;
          }
          break;
        }
        break;

      case 'w':
        if ((parseInt(rover.position[0]) + 1 >= 10)){
          rover.position[0] = 0;
          grid[rover.position[0]][rover.position[1]] = "R";
          break;
        }
        else{
          if (grid[rover.position[0] + 1][rover.position[1]] == "X") {
            alert("You've encountered an obstacle!");
            grid[rover.position[0]][rover.position[1]] = "R";
            return -1;
          }
          else {
            rover.position[0]++;
            grid[rover.position[0]][rover.position[1]] = "R";
            return 1;
          }
        }
        break;
    }
  }

  //turnRight: rotates the rover's orientation 90 degrees clockwise
  function turnRight(rover){
    switch(rover.direction){
      case 'n':
      rover.direction = 'e';
      break;

      case 'e':
      rover.direction = 's';
      break;

      case 's':
      rover.direction = 'w';
      break;

      case 'w':
      rover.direction = 'n';
      break;
    }
  }

  //turnLeft: rotates the rover's orientation 90 degrees counterclockwise
  function turnLeft(rover){
    switch(rover.direction){
      case 'n':
      rover.direction = 'w';
      break;

      case 'e':
      rover.direction = 'n';
      break;

      case 's':
      rover.direction = 'e';
      break;

      case 'w':
      rover.direction = 's';
      break;
    }
  }

  //driver
  var grid = genArray(10);

  console.log("Starting Location: " + rover.position +"   Facing: " + rover.direction);
  showMap(grid);

  do{
      var proceed = 'n'; //control variable for do-while loop
      var commands = prompt("Enter a series of commands: ");
      var crash = 1; //signals a crash and ceases processing further commands
                     //'-1' signals a crash and '1' signals the absence of a crash

      for (var i = 0; i < commands.length && crash == 1; i++){ //for loop used to process the string of commands 
        if (commands[i] == "f" ) {
          crash = Forward(rover, grid);
        }
        else if (commands[i] == "b" ) {
          crash = Reverse(rover, grid);
        }
        else if (commands[i] == "l" ) {
          turnLeft(rover);
        }
        else if (commands[i] == "r" ){
          turnRight(rover);
        }
      }
      
      console.log("New Location: " + rover.position +"   Facing: " + rover.direction); //provide updates to the user
      showMap(grid);

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
