
  var rover = {
    position: [0,0], //coordinates on the grid
    direction: 'n', //compass direction
  };

  //genArray: generates an array with all spaces initialized to "_" and "R" in the space where the rover is currently located.
  //Takes one dimension as an argument
  function genArray(dimension){

    var grid = [];

    for(var i = 0; i < dimension; i++){  //make each element in 'grid' an empty array
      grid[i] = [];
      for(var j = 0; j < dimension; j++){ //lnitialize each element in every array to '_'
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

    for(var i = (grid.length-1); i >= 0; i --){
      for(var j = 0; j <= (grid.length-1); j++){
        storage.push(grid[j][i]);
      }
      console.log(storage);
      storage.splice(0, grid.length);
    }
  }

  //Forward: advances the rover forward in the direction and distance specified by the user
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
          rover.position[1]++;
          grid[rover.position[0]][rover.position[1]] = "R";
        }
        break;

      case 'e':
        if ((parseInt(rover.position[0]) + 1 >= 10)){
          rover.position[0] = 0;
          grid[rover.position[0]][rover.position[1]] = "R";
          break;
        }
        else {
        rover.position[0]++;
        grid[rover.position[0]][rover.position[1]] = "R";
        }
        break;

      case 's':
        if ((rover.position[1] - 1 < 0)){
          rover.position[1] = 9;
          grid[rover.position[0]][rover.position[1]] = "R";
        }
        else {
          rover.position[1]--;
          grid[rover.position[0]][rover.position[1]] = "R";
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
        rover.position[0]--;
        grid[rover.position[0]][rover.position[1]] = "R";
        }
        break;
    }
  }

  //Reverse: moves the rover backwards by the distance specified by the user, opposite the specified direction
  function Reverse(rover, grid){
    grid[rover.position[0]][rover.position[1]] = "_";
    switch(rover.direction) {

      case 'n':
        if ((rover.position[1] - 1 < 0)){
          alert("You have gone too far!");
          grid[rover.position[0]][rover.position[1]] = "R";
          break;
        }
        else {
          rover.position[1]--;
          grid[rover.position[0]][rover.position[1]] = "R";
        }
        break;

      case 'e':
        if ((rover.position[0] - 1 < 0)){
          alert("You have gone too far!");
          grid[rover.position[0]][rover.position[1]] = "R";
          break;
        }
        else {
        rover.position[0]--;
        grid[rover.position[0]][rover.position[1]] = "R";
        }
        break;

      case 's':
        if ((parseInt(rover.position[1]) + 1 >= 10)){
          alert("You have gone too far!");
          grid[rover.position[0]][rover.position[1]] = "R";
        }
        else {
          rover.position[1]++;
          grid[rover.position[0]][rover.position[1]] = "R";
          break;
        }
        break;

      case 'w':
        if ((parseInt(rover.position[0]) + 1 >= 10)){
          alert("You have gone too far!");
          grid[rover.position[0]][rover.position[1]] = "R";
          break;
        }
        else{
        rover.position[0]++;
        grid[rover.position[0]][rover.position[1]] = "R";
        }
        break;
    }
  }

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

  do{
      var proceed = 'n'; //control variable

      console.log("Current Location: " + rover.position);
      showMap(grid);

      var commands = prompt("Enter a series of commands: ");

      for (var i = 0; i < commands.length; i++){
        if (commands[i] == "f" ) {
          Forward(rover, grid);
        }
        else if (commands[i] == "b" ) {
          Reverse(rover, grid);
        }
        else if (commands[i] == "l" ) {
          turnLeft(rover);
        }
        else if (commands[i] == "r" ){
          turnRight(rover);
        }
      }
      console.log("New Location: " + rover.position +"   Facing: " + rover.direction);
      showMap(grid);
      var proceed = prompt("continue (y/n)? ");
  }
  while(proceed == 'Y' || proceed == 'y');

  console.log("Session has ended.");
